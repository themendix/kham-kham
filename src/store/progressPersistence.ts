import type { UserProgress } from "@/types";
import { migrateCalendar } from "./calendarMigration";

export const PROGRESS_KEY = "sankofa-progress-coordinated";
export const LEGACY_PROGRESS_KEY = "sankofa-progress";
export const PROGRESS_LOCK = "sankofa-progress-coordinated";

export interface ProgressEnvironment {
  storage: Pick<Storage, "getItem" | "setItem">;
  /** All instances on an origin must use the same exclusive lock. */
  exclusive: <T>(operation: () => T | Promise<T>) => Promise<T>;
}

export interface ProgressMetadata {
  protocol: 1;
  revision: number;
  events: string[];
  paidDays: string[];
}

interface Envelope {
  version: 11;
  state: { progress: UserProgress };
  metadata: ProgressMetadata;
}

export interface CommitResult {
  before: UserProgress;
  progress: UserProgress;
  alreadyApplied: boolean;
  xpCredited: number;
  caurisCredited: number;
}

export class ProgressError extends Error {
  constructor(public readonly reason: "unavailable" | "invalid" | "storage") {
    super(reason === "unavailable"
      ? "La sauvegarde est indisponible dans ce navigateur. Réessaie dans un navigateur à jour."
      : reason === "invalid"
        ? "La progression enregistrée ne peut pas être lue. Elle a été conservée."
        : "La progression n’a pas pu être sauvegardée. Réessaie sans fermer cette page.");
  }
}

const record = (v: unknown): v is Record<string, unknown> =>
  typeof v === "object" && v !== null && !Array.isArray(v);
const count = (v: unknown) => typeof v === "number" && Number.isSafeInteger(v) && v >= 0;
const strings = (v: unknown) => Array.isArray(v) && v.every((x) => typeof x === "string");
const nullableString = (v: unknown) => v === null || typeof v === "string";
const date = (v: unknown) => v === null || (typeof v === "string" && /^\d{4}-\d{2}-\d{2}$/.test(v));

/** Validate supplied historical fields before filling defaults; malformed data is never reset. */
export function validateProgress(value: unknown, partial = false, current = false): asserts value is UserProgress {
  if (!record(value)) throw new ProgressError("invalid");
  const check = (key: string, predicate: (v: unknown) => boolean) => {
    if ((!partial || key in value) && !predicate(value[key])) throw new ProgressError("invalid");
  };
  for (const key of ["xp", "level", "totalLessonsLearned"]) check(key, count);
  check("rank", (v) => typeof v === "string");
  for (const key of ["completedCourseIds", "completedParcoursIds", "favoriteCourseIds", "dismissedCourseIds", "startedCourseIds", "completedLessonIds", "preferredCategoryIds", "favoriteIds", "favoriteCardIds", "favoriteLessonKeys"]) {
    if (partial || !["favoriteIds", "favoriteCardIds", "favoriteLessonKeys"].includes(key)) check(key, strings);
  }
  check("lastCourseId", nullableString);
  check("featuredLessonKey", nullableString);
  check("streak", (v) => record(v) && count(v.count) && date(v.lastActiveDate) && Array.isArray(v.weekDays) && v.weekDays.length === 7 && v.weekDays.every((x) => typeof x === "boolean") && (!("weekStartDate" in v) || typeof v.weekStartDate === "string" && date(v.weekStartDate)) && (!("calendarAnchorDate" in v) || typeof v.calendarAnchorDate === "string" && date(v.calendarAnchorDate)));
  if (current || "calendar" in value) check("calendar", (v) => record(v) && v.version === 1 && date(v.legacyDailyDate) && date(v.legacyLastActiveDate));
  check("daily", (v) => record(v) && (partial || "date" in v) && (!('date' in v) || date(v.date)) && (!('lessonsLearned' in v) ? partial : count(v.lessonsLearned)) && (!('cardsLearned' in v) || count(v.cardsLearned)) && (!('xpEarned' in v) ? partial : count(v.xpEarned)) && (!('challengeDone' in v) ? partial : typeof v.challengeDone === "boolean"));
  check("quizResults", (v) => Array.isArray(v) && v.every((r) => record(r) && typeof r.courseId === "string" && count(r.score) && count(r.total) && Number(r.score) <= Number(r.total) && typeof r.date === "string" && !Number.isNaN(Date.parse(r.date))));
  check("quizGame", (v) => {
    if (!record(v)) return false;
    for (const key of ["cauris", "gamesPlayed"]) if ((!partial || key in v) && !count(v[key])) return false;
    if ((!partial || "questions" in v) && (!record(v.questions) || !Object.values(v.questions).every((q) => record(q) && count(q.correct) && count(q.wrong) && count(q.box) && Number(q.box) <= 3 && date(q.dueDate)
      && (!(current || "xpAwarded" in q) || typeof q.xpAwarded === "boolean")
      && (!(current || "successDayKeys" in q) || (Array.isArray(q.successDayKeys) && q.successDayKeys.length <= 2 && new Set(q.successDayKeys).size === q.successDayKeys.length && q.successDayKeys.every((d) => typeof d === "string" && date(d))))))) return false;
    return (partial && !("records" in v)) || (record(v.records) && Object.values(v.records).every((r) => record(r) && count(r.blitz) && count(r.survie)));
  });
}

function metadata(value: unknown): ProgressMetadata {
  if (!record(value) || value.protocol !== 1 || !count(value.revision) || !strings(value.events) || !strings(value.paidDays)) throw new ProgressError("invalid");
  return value as unknown as ProgressMetadata;
}

export function browserProgressEnvironment(): ProgressEnvironment {
  return {
    storage: {
      getItem: (key) => window.localStorage.getItem(key),
      setItem: (key, value) => window.localStorage.setItem(key, value),
    },
    exclusive: async (operation) => {
      if (!globalThis.isSecureContext || !navigator.locks?.request) throw new ProgressError("unavailable");
      return navigator.locks.request(PROGRESS_LOCK, { mode: "exclusive" }, operation);
    },
  };
}

/** Sole writer. Read, migration, reduction, persistence and publication share the lock. */
export function createProgressPersistence(
  environment: ProgressEnvironment,
  initial: UserProgress,
  migrate: (value: unknown) => { progress: UserProgress },
  publish: (progress: UserProgress) => void,
) {
  const read = (): { envelope: Envelope; imported: boolean } => {
    const canonical = environment.storage.getItem(PROGRESS_KEY);
    if (canonical !== null) {
      const raw: unknown = JSON.parse(canonical);
      if (!record(raw) || (raw.version !== 10 && raw.version !== 11) || !record(raw.state)) throw new ProgressError("invalid");
      validateProgress(raw.state.progress, false, raw.version === 11);
      const meta = metadata(raw.metadata);
      const progress = raw.version === 10 ? migrateCalendar(raw.state.progress, meta.paidDays) : raw.state.progress;
      return { envelope: { version: 11, state: { progress }, metadata: meta }, imported: raw.version === 10 };
    }
    const legacy = environment.storage.getItem(LEGACY_PROGRESS_KEY);
    let progress = structuredClone(initial);
    if (legacy !== null) {
      const raw: unknown = JSON.parse(legacy);
      if (!record(raw) || !count(raw.version) || Number(raw.version) > 10 || !record(raw.state)) throw new ProgressError("invalid");
      validateProgress(raw.state.progress, raw.version !== 10);
      progress = raw.version === 10 ? raw.state.progress as UserProgress : migrate(raw.state).progress;
      validateProgress(progress);
    }
    const paidDays = progress.daily.challengeDone && progress.daily.date ? [progress.daily.date] : [];
    progress = migrateCalendar(progress, paidDays);
    return { envelope: { version: 11, state: { progress }, metadata: { protocol: 1, revision: 0, events: [], paidDays } }, imported: true };
  };
  return {
    /** Unlocked, read-only consultation when no transaction API is available. */
    readonly() { return read().envelope.state.progress; },
    async commit(reduce?: (progress: UserProgress, metadata: ProgressMetadata) => UserProgress, eventId?: string, importMissing = true): Promise<CommitResult> {
      try {
        return await environment.exclusive(() => {
          const { envelope, imported } = read();
          const before = envelope.state.progress;
          const alreadyApplied = !!eventId && envelope.metadata.events.includes(eventId);
          const progress = reduce && !alreadyApplied ? reduce(structuredClone(before), envelope.metadata) : before;
          validateProgress(progress, false, true);
          if (eventId && !alreadyApplied) envelope.metadata.events.push(eventId);
          if ((imported && importMissing) || (reduce && !alreadyApplied)) {
            envelope.metadata.revision += 1;
            envelope.state.progress = progress;
            environment.storage.setItem(PROGRESS_KEY, JSON.stringify(envelope));
          }
          publish(progress);
          return { before, progress, alreadyApplied, xpCredited: progress.xp - before.xp, caurisCredited: progress.quizGame.cauris - before.quizGame.cauris };
        });
      } catch (error) {
        if (error instanceof ProgressError) throw error;
        if (error instanceof SyntaxError) throw new ProgressError("invalid");
        throw new ProgressError("storage");
      }
    },
  };
}
