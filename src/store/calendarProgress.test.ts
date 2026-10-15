import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { createAppStore, migrate } from "./useAppStore";
import { PROGRESS_KEY } from "./progressPersistence";
import { progressTestEnvironment } from "./progressTestEnvironment";
import { addDayKey, localDayKey } from "@/lib/calendar";

const question = "cours:question";
const quizResult = { courseId: "cours", score: 0, total: 5, date: "2026-03-30T10:00:00Z" };
beforeEach(() => { vi.useFakeTimers(); vi.setSystemTime(new Date(2026, 2, 30, 0, 30)); });
afterEach(() => vi.useRealTimers());

describe("migration commune calendrier et récompenses v11", () => {
  it("un échec d'écriture conserve le blob v10 intact et permet de reprendre la migration sans crédit", async () => {
    const env = progressTestEnvironment();
    const progress = { ...migrate(undefined).progress, xp: 42 };
    const blob = JSON.stringify({ version: 10, state: { progress }, metadata: { protocol: 1, revision: 0, events: [], paidDays: [] } });
    env.values.set(PROGRESS_KEY, blob);
    env.failWrite(true);
    const store = createAppStore(env.environment);
    await expect(store.getState().retryPersistence()).rejects.toThrow();
    expect(env.values.get(PROGRESS_KEY)).toBe(blob);
    expect(store.getState().progress.xp).toBe(42);
    env.failWrite(false);
    await store.getState().retryPersistence();
    expect(JSON.parse(env.values.get(PROGRESS_KEY)!).version).toBe(11);
    expect(store.getState().progress.xp).toBe(42);
  });

  it("préserve sans réécrire une v11 dont les nouveaux champs de question sont invalides", async () => {
    const env = progressTestEnvironment();
    const store = createAppStore(env.environment);
    await store.getState().recordQuizAnswer(question, true);
    const raw = JSON.parse(env.values.get(PROGRESS_KEY)!);
    raw.state.progress.quizGame.questions[question].successDayKeys = ["2026-03-30", "2026-03-30"];
    const blob = JSON.stringify(raw);
    env.values.set(PROGRESS_KEY, blob);
    const writeCount = env.writes.length;
    await expect(store.getState().recordQuizAnswer(question, true)).rejects.toThrow();
    expect(env.values.get(PROGRESS_KEY)).toBe(blob);
    expect(env.writes).toHaveLength(writeCount);
  });

  it("migre une seule fois sans payer ni retirer d'XP, conserve dates et suivi enrichi", async () => {
    const env = progressTestEnvironment();
    const utcToday = new Date().toISOString().slice(0, 10);
    const progress = {
      ...migrate(undefined).progress, xp: 420,
      daily: { date: utcToday, xpEarned: 30, lessonsLearned: 2, challengeDone: true },
      streak: { count: 7, lastActiveDate: utcToday, weekDays: Array(7).fill(true) },
      quizGame: { cauris: 42, gamesPlayed: 4, records: {}, questions: {
        legacyOne: { correct: 1, wrong: 1, box: 1, dueDate: "2026-04-02" },
        legacyPaid: { correct: 3, wrong: 0, box: 3, dueDate: null },
        enriched: { correct: 5, wrong: 1, box: 2, dueDate: null, successDayKeys: ["2026-03-01", "2026-03-03"], xpAwarded: true },
      } },
    };
    env.values.set(PROGRESS_KEY, JSON.stringify({ version: 10, state: { progress }, metadata: { protocol: 1, revision: 2, events: ["old-event"], paidDays: [utcToday] } }));
    const a = createAppStore(env.environment);
    const b = createAppStore(env.environment);
    await Promise.all([a.getState().retryPersistence(), b.getState().retryPersistence()]);
    expect(env.writes).toHaveLength(1);
    const p = a.getState().progress;
    expect(p.xp).toBe(420);
    expect(p.streak.lastActiveDate).toBe(utcToday);
    expect(p.calendar).toEqual({ version: 1, legacyDailyDate: utcToday, legacyLastActiveDate: utcToday });
    expect(p.daily).toEqual({ ...progress.daily, date: localDayKey() });
    expect(p.quizGame.questions.legacyOne).toMatchObject({ correct: 1, successDayKeys: [], xpAwarded: false });
    expect(p.quizGame.questions.legacyPaid).toMatchObject({ correct: 3, successDayKeys: [], xpAwarded: true });
    expect(p.quizGame.questions.enriched).toEqual(progress.quizGame.questions.enriched);
    const blob = JSON.parse(env.values.get(PROGRESS_KEY)!);
    expect(blob.version).toBe(11);
    expect(blob.metadata.events).toEqual(["old-event"]);
    expect(blob.metadata.paidDays).toContain(localDayKey());
    expect((await b.getState().finishDailyChallenge("new-game", quizResult, 10)).xpCredited).toBe(0);
    expect((await a.getState().completeLesson("cours", "lesson")).progress.streak.count).toBe(7);
    await b.getState().retryPersistence();
    expect(b.getState().progress.xp).toBe(430);
  });

  it("ancien correct=1 : deux nouveaux jours requis ; paiement conservé après erreur, concurrence et reload", async () => {
    const env = progressTestEnvironment();
    const progress = migrate(undefined).progress;
    progress.quizGame.questions[question] = { correct: 1, wrong: 0, box: 1, dueDate: null };
    env.values.set(PROGRESS_KEY, JSON.stringify({ version: 10, state: { progress }, metadata: { protocol: 1, revision: 0, events: [], paidDays: [] } }));
    const a = createAppStore(env.environment);
    const b = createAppStore(env.environment);
    await a.getState().recordQuizAnswer(question, true, "first");
    await b.getState().recordQuizAnswer(question, true, "repeat");
    expect(b.getState().progress.xp).toBe(0);
    vi.setSystemTime(new Date(2026, 2, 31, 0, 30));
    const results = await Promise.all([a.getState().recordQuizAnswer(question, true, "a-second"), b.getState().recordQuizAnswer(question, true, "b-second")]);
    expect(results.map((r) => r.xpCredited)).toEqual([5, 0]);
    expect(b.getState().progress.daily.xpEarned).toBe(5);
    await a.getState().recordQuizAnswer(question, false);
    const reloaded = createAppStore(env.environment);
    vi.setSystemTime(new Date(2026, 3, 2, 12));
    expect((await reloaded.getState().recordQuizAnswer(question, true)).xpCredited).toBe(0);
    expect(reloaded.getState().progress.quizGame.questions[question].xpAwarded).toBe(true);
  });
});

describe("activité et défi quotidiens", () => {
  it("visite, favori et réponse isolée ne comptent pas ; relecture et quiz à 0/5 comptent sans repaiement", async () => {
    const store = createAppStore(progressTestEnvironment().environment);
    await store.getState().retryPersistence();
    await store.getState().checkDailyReset();
    await store.getState().setFavoriteCourse("cours", true);
    await store.getState().recordQuizAnswer(question, false);
    expect(store.getState().progress.streak.count).toBe(0);
    await store.getState().completeLesson("cours", "lecon");
    vi.setSystemTime(new Date(2026, 2, 31, 12));
    const replay = await store.getState().completeLesson("cours", "lecon");
    expect(replay.xpCredited).toBe(0);
    expect(replay.progress.daily).toMatchObject({ lessonsLearned: 0, xpEarned: 0 });
    expect(replay.progress.streak.count).toBe(2);
    vi.setSystemTime(new Date(2026, 3, 1, 12));
    await store.getState().recordQuizResult(quizResult);
    expect(store.getState().progress.streak.count).toBe(3);
    expect(store.getState().progress.xp).toBe(10);
  });

  it("paie un défi à 0/5 au jour de fin, une seule fois, même après retour de date et reload", async () => {
    const env = progressTestEnvironment();
    const store = createAppStore(env.environment);
    vi.setSystemTime(new Date(2026, 2, 30, 23, 59));
    await store.getState().retryPersistence();
    const startDay = localDayKey();
    vi.setSystemTime(new Date(2026, 2, 31, 0, 1));
    const finish = await store.getState().finishDailyChallenge("spans-midnight", quizResult, 0);
    expect(finish.xpCredited).toBe(30);
    expect(finish.progress.daily).toMatchObject({ date: addDayKey(startDay, 1), challengeDone: true, xpEarned: 30 });
    vi.setSystemTime(new Date(2026, 3, 1, 12));
    await store.getState().finishDailyChallenge("tomorrow", quizResult, 0);
    vi.setSystemTime(new Date(2026, 2, 31, 12));
    const reloaded = createAppStore(env.environment);
    await reloaded.getState().checkDailyReset();
    expect(reloaded.getState().progress.daily.challengeDone).toBe(true);
    const repeated = await reloaded.getState().finishDailyChallenge("clock-back", quizResult, 0);
    expect(repeated.xpCredited).toBe(0);
    expect(repeated.progress.xp).toBe(60);
    expect(repeated.progress.quizGame.gamesPlayed).toBe(2);
    expect(repeated.progress.streak.count).toBe(2);
  });
});
