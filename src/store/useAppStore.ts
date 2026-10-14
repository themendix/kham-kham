import { create } from "zustand";
import { persist } from "zustand/middleware";
import { browserProgressEnvironment, createProgressPersistence, PROGRESS_KEY, ProgressError, type CommitResult, type ProgressEnvironment, type ProgressMetadata } from "./progressPersistence";
import type { DailyState, QuizGameMode, QuizGameState, QuizResult, UserProgress } from "@/types";
import {
  getLevelInfo,
  updateStreak as computeStreak,
  XP_PER_QUESTION_LEARNED,
  XP_PER_LESSON,
  DAILY_CHALLENGE_XP_BONUS,
  toISODate,
} from "@/lib/gamification";
import { applyAnswer, earnsXpOnCorrect } from "@/lib/quizReview";
import type { TerritoryId } from "@/lib/territories";
import { resetDailyIfNeeded } from "@/lib/daily";
import { getLessonRef, lessonKey, pickNextFeaturedLesson } from "@/lib/featured";
import { getNewlyCompletedParcours } from "@/lib/parcoursProgress";
import { COURSE_INDEX } from "@/data/coursesIndex.generated";
import { CATEGORIES } from "@/data/categories";
import { PARCOURS } from "@/data/parcours";

export interface AppState {
  persistenceReadonly: boolean;
  hydrated: boolean;
  saving: number;
  persistenceError: string | null;
  retryPersistence: () => Promise<void>;
  refreshPersistence: () => Promise<void>;
  setFavoriteCourse: (courseId: string, favorite: boolean) => Promise<CommitResult>;
  finishLearning: (courseId: string, lessonId: string, xp: number) => Promise<CommitResult>;
  finishDailyChallenge: (gameId: string, result: QuizResult, cauris: number) => Promise<CommitResult>;
  progress: UserProgress;
  /** Écarte définitivement un cours du fil de découverte (✗ pas intéressé). Idempotent. */
  dismissCourse: (courseId: string) => Promise<CommitResult>;
  toggleFavoriteCourse: (courseId: string) => Promise<CommitResult>;
  completeCourse: (courseId: string, xpReward: number) => Promise<CommitResult>;
  addXp: (amount: number) => Promise<CommitResult>;
  updateStreak: () => Promise<CommitResult>;
  /** Enregistre le résultat d'une tentative de quiz (chaque tentative, y compris les retakes), conserve les 10 plus récentes */
  recordQuizResult: (result: QuizResult, eventId?: string) => Promise<CommitResult>;
  /** Remet le suivi quotidien à zéro si la date a changé depuis le dernier reset (appelé au montage du Home) */
  checkDailyReset: () => Promise<CommitResult>;
  /** Ajoute de l'XP au suivi du jour, avec reset automatique si besoin (Défi du jour) */
  addDailyXp: (xp: number) => Promise<CommitResult>;
  /** Marque le Défi du jour comme relevé pour aujourd'hui */
  markChallengeDone: () => Promise<CommitResult>;
  /** Mémorise le dernier cours ouvert, pour « Continue ton apprentissage » */
  setLastCourse: (courseId: string) => Promise<CommitResult>;
  /** Marque un cours comme commencé (≥ 1 leçon lue), pour l'état « En cours » du tableau de bord de matière */
  markCourseStarted: (courseId: string) => Promise<CommitResult>;
  /** Marque une leçon comme lue (idempotent) : XP, cours « commencé », avancement de la leçon « À la une » si concernée */
  completeLesson: (courseId: string, lessonId: string) => Promise<CommitResult>;
  /** Vérifie que `featuredLessonKey` pointe vers une leçon valide et non lue, la recalcule sinon (appelé au montage de la Biblio) */
  ensureFeaturedLesson: () => Promise<CommitResult>;
  /** Enregistre une réponse du module Quiz : reprogramme la révision de la question et crédite l'XP si c'est sa première réussite */
  recordQuizAnswer: (questionKey: string, isCorrect: boolean, eventId?: string) => Promise<CommitResult>;
  /**
   * Clôt une partie du module Quiz : crédite les cauris et compte la partie. `record` porte le
   * territoire, le mode et le score quand la partie en tient un ; il vaut `null` pour le Défi du
   * jour, qui traverse tout le catalogue et n'appartient donc à aucun territoire. Un seul champ
   * nullable plutôt que trois : il n'y a pas d'état intermédiaire à représenter.
   */
  finishQuizGame: (result: {
    gameId?: string;
    activity?: boolean;
    cauris: number;
    record: { territoryId: TerritoryId; mode: QuizGameMode; score: number } | null;
  }) => Promise<CommitResult>;
  /** Enregistre les matières choisies à l'onboarding (remplace la sélection précédente) */
  setPreferredCategories: (categoryIds: string[]) => Promise<CommitResult>;
}

const initialProgress: UserProgress = {
  xp: 0,
  level: 1,
  rank: "Curieux",
  streak: { count: 0, lastActiveDate: null, weekDays: Array(7).fill(false) },
  completedCourseIds: [],
  completedParcoursIds: [],
  favoriteCourseIds: [],
  dismissedCourseIds: [],
  quizResults: [],
  daily: { date: null, lessonsLearned: 0, xpEarned: 0, challengeDone: false },
  lastCourseId: null,
  totalLessonsLearned: 0,
  startedCourseIds: [],
  completedLessonIds: [],
  featuredLessonKey: null,
  quizGame: { cauris: 0, questions: {}, records: {}, gamesPlayed: 0 },
  preferredCategoryIds: [],
};

/**
 * Préfixe des entrées du pseudo-cours réservé aux anciennes cartes éditoriales du fil Home.
 * Ces cartes ont été retirées avec `src/data/cards.ts` ; leurs traces dans `completedLessonIds`
 * ne désignent plus rien et sont nettoyées en v9. **L'XP qu'elles ont rapportée n'est pas
 * reprise** : on ne recalcule jamais l'XP acquise, ici pas plus qu'aux migrations précédentes.
 */
const LEGACY_EDITORIAL_PREFIX = "editorial:";

/**
 * Répartit les anciens favoris entre cours favoris et rien.
 *
 * Trois formes historiques coexistent dans les blobs existants :
 * - `favoriteIds` (v1→v4), qui mélangeait cartes **et** cours ;
 * - `favoriteCardIds` (v5→v8), où la v5 a déversé le tout sans trier — les cours favoris de la v1
 *   y sont donc restés coincés, invisibles de l'écran Favoris ;
 * - des **id de leçon nus**, écrits quand le fil Home servait des leçons du catalogue ; eux non
 *   plus n'étaient jamais réaffichés, faute de savoir à quel cours les rattacher.
 *
 * Depuis la v9, une carte du fil est un **cours** : il n'y a donc plus qu'une sorte de favori.
 * On résout donc chaque ancienne entrée contre le catalogue — un id de cours est gardé tel quel,
 * un id de leçon est remonté à son cours (l'intention « ce sujet m'intéresse » est préservée), et
 * ce qui ne résout rien est abandonné : c'est une carte éditoriale supprimée.
 */
function migrateFavoriteCourses(raw: {
  favoriteCourseIds?: string[];
  favoriteLessonKeys?: string[];
  favoriteCardIds?: string[];
  favoriteIds?: string[];
}): string[] {
  const courseIds = new Set(raw.favoriteCourseIds ?? []);

  const legacy = [...(raw.favoriteLessonKeys ?? []), ...(raw.favoriteCardIds ?? raw.favoriteIds ?? [])];
  for (const entry of legacy) {
    const id = entry.includes(":") ? entry.slice(0, entry.lastIndexOf(":")) : entry;
    if (COURSE_INDEX.some((c) => c.id === id)) {
      courseIds.add(id);
      continue;
    }
    const course = COURSE_INDEX.find((c) => c.lessons.some((l) => l.id === id));
    if (course) courseIds.add(course.id);
  }

  return [...courseIds];
}

/** Renomme `cardsLearned` en `lessonsLearned` (v9) sans perdre le compteur du jour en cours. */
function migrateDaily(raw: (Partial<DailyState> & { cardsLearned?: number }) | undefined): DailyState {
  return {
    date: raw?.date ?? null,
    lessonsLearned: raw?.lessonsLearned ?? raw?.cardsLearned ?? 0,
    xpEarned: raw?.xpEarned ?? 0,
    challengeDone: raw?.challengeDone ?? false,
  };
}

/**
 * Ramène le sous-état du module Quiz à une forme complète. Écrit champ par champ plutôt qu'avec
 * un simple `?? initialProgress.quizGame` : un blob v8 partiellement écrit (ou tronqué) doit
 * repartir avec ses champs valides conservés, pas être remis à zéro en bloc.
 */
function normalizeQuizGame(raw: Partial<QuizGameState> | undefined): QuizGameState {
  return {
    cauris: raw?.cauris ?? 0,
    questions: raw?.questions ?? {},
    records: raw?.records ?? {},
    gamesPlayed: raw?.gamesPlayed ?? 0,
  };
}

/**
 * Migration douce unique : une seule fonction, indifférente à la version d'origine, ramène
 * n'importe quel blob v1→v8 à la forme v9. La plupart des versions n'ont fait qu'ajouter des
 * champs à défaut sûr ; les exceptions sont le renommage `favoriteIds` (v5), les suppressions de
 * `masteryByCategory`/`seenCardIds` (v7), l'ajout de `quizGame` (v8), en v9 le retrait des
 * cartes éditoriales du fil Home — voir `migrateFavorites` et `LEGACY_EDITORIAL_PREFIX` — et en
 * v10 l'ajout de `preferredCategoryIds` (onboarding, à défaut sûr `[]`).
 * Exportée (plutôt qu'inline dans `persist(...)`) pour être testable sans passer par
 * `localStorage`/la réhydratation Zustand.
 */
export function migrate(persistedState: unknown): { progress: UserProgress } {
  const state = persistedState as
    | { progress?: Partial<UserProgress> & {
        favoriteIds?: string[];
        favoriteCardIds?: string[];
        favoriteLessonKeys?: string[];
      } }
    | undefined;
  if (!state?.progress) return { progress: structuredClone(initialProgress) };
  const { favoriteIds, favoriteCardIds, favoriteLessonKeys, ...rest } = state.progress;
  const favoriteCourseIds = migrateFavoriteCourses({
    ...state.progress,
    favoriteIds,
    favoriteCardIds,
    favoriteLessonKeys,
  });
  // masteryByCategory (accumulation manuelle) et seenCardIds (jamais lu par l'app) sont
  // abandonnés en v7 : la maîtrise est désormais dérivée à la lecture (getMasteryByCategory)
  // et les cartes convergent dans completedLessonIds. On les retire explicitement du blob
  // migré plutôt que de les laisser traîner sans être lus.
  delete (rest as Record<string, unknown>).masteryByCategory;
  delete (rest as Record<string, unknown>).seenCardIds;

  const completedCourseIds = rest.completedCourseIds ?? [];
  const completedParcoursIdsBefore = rest.completedParcoursIds ?? [];
  // Rattrapage rétroactif : un parcours déjà entièrement terminé avant l'introduction de
  // completedParcoursIds ne redéclenchera jamais `completeCourse` (idempotent) — sans ce
  // rattrapage, son xpReward ne serait jamais crédité.
  const newlyCompletedParcours = getNewlyCompletedParcours(
    PARCOURS,
    completedCourseIds,
    completedParcoursIdsBefore,
  );
  const xp = (rest.xp ?? initialProgress.xp) + newlyCompletedParcours.reduce((sum, p) => sum + p.xpReward, 0);
  const { level, rank } = getLevelInfo(xp);

  return {
    progress: {
      ...initialProgress,
      ...rest,
      xp,
      level,
      rank,
      completedParcoursIds: [
        ...completedParcoursIdsBefore,
        ...newlyCompletedParcours.map((p) => p.id),
      ],
      favoriteCourseIds,
      dismissedCourseIds: rest.dismissedCourseIds ?? [],
      quizResults: state.progress.quizResults ?? [],
      daily: migrateDaily(state.progress.daily),
      lastCourseId: state.progress.lastCourseId ?? null,
      // Renommés en v9 : le fil Home ne compte plus des cartes swipées mais des leçons lues.
      totalLessonsLearned:
        rest.totalLessonsLearned ??
        (state.progress as { totalCardsLearned?: number }).totalCardsLearned ??
        0,
      startedCourseIds: state.progress.startedCourseIds ?? [],
      completedLessonIds: (state.progress.completedLessonIds ?? []).filter(
        (key) => !key.startsWith(LEGACY_EDITORIAL_PREFIX),
      ),
      featuredLessonKey: state.progress.featuredLessonKey ?? null,
      quizGame: normalizeQuizGame(state.progress.quizGame),
      preferredCategoryIds: state.progress.preferredCategoryIds ?? [],
    },
  };
}

type ReduceSet = (reduce: (state: { progress: UserProgress }) => { progress: UserProgress }) => UserProgress;
const actions = (set: ReduceSet) => ({


      dismissCourse: (courseId: string) =>
        set((state) => ({
          progress: {
            ...state.progress,
            dismissedCourseIds: state.progress.dismissedCourseIds.includes(courseId)
              ? state.progress.dismissedCourseIds
              : [...state.progress.dismissedCourseIds, courseId],
          },
        })),

      setFavoriteCourse: (courseId: string, favorite: boolean) =>
        set((state) => {
          const isFav = !favorite;
          return {
            progress: {
              ...state.progress,
              favoriteCourseIds: isFav
                ? state.progress.favoriteCourseIds.filter((id) => id !== courseId)
                : state.progress.favoriteCourseIds.includes(courseId) ? state.progress.favoriteCourseIds : [...state.progress.favoriteCourseIds, courseId],
            },
          };
        }),

      completeCourse: (courseId: string, xpReward: number) =>
        set((state) => {
          if (state.progress.completedCourseIds.includes(courseId)) return state;
          const completedCourseIds = [...state.progress.completedCourseIds, courseId];

          // Un parcours peut être complété par ce cours : vérifié ici (à la complétion du
          // cours), pas au montage d'un écran, sinon la récompense dépendrait de la navigation.
          const newlyCompletedParcours = getNewlyCompletedParcours(
            PARCOURS,
            completedCourseIds,
            state.progress.completedParcoursIds,
          );
          const parcoursXp = newlyCompletedParcours.reduce((sum, p) => sum + p.xpReward, 0);

          const xp = state.progress.xp + xpReward + parcoursXp;
          const { level, rank } = getLevelInfo(xp);
          return {
            progress: {
              ...state.progress,
              xp,
              level,
              rank,
              completedCourseIds,
              completedParcoursIds: [
                ...state.progress.completedParcoursIds,
                ...newlyCompletedParcours.map((p) => p.id),
              ],
            },
          };
        }),

      addXp: (amount: number) =>
        set((state) => {
          const xp = state.progress.xp + amount;
          const { level, rank } = getLevelInfo(xp);
          return { progress: { ...state.progress, xp, level, rank } };
        }),

      updateStreak: () =>
        set((state) => ({
          progress: { ...state.progress, streak: computeStreak(state.progress.streak) },
        })),

      recordQuizResult: (result: QuizResult) =>
        set((state) => ({
          progress: {
            ...state.progress,
            quizResults: [...state.progress.quizResults, result].slice(-10),
          },
        })),

      checkDailyReset: () =>
        set((state) => ({
          progress: { ...state.progress, daily: resetDailyIfNeeded(state.progress.daily) },
        })),

      addDailyXp: (xp: number) =>
        set((state) => {
          const daily = resetDailyIfNeeded(state.progress.daily);
          return {
            progress: {
              ...state.progress,
              daily: { ...daily, xpEarned: daily.xpEarned + xp },
            },
          };
        }),

      markChallengeDone: () =>
        set((state) => ({
          progress: {
            ...state.progress,
            daily: { ...resetDailyIfNeeded(state.progress.daily), challengeDone: true },
          },
        })),

      setLastCourse: (courseId: string) =>
        set((state) => ({ progress: { ...state.progress, lastCourseId: courseId } })),

      markCourseStarted: (courseId: string) =>
        set((state) => ({
          progress: {
            ...state.progress,
            startedCourseIds: state.progress.startedCourseIds.includes(courseId)
              ? state.progress.startedCourseIds
              : [...state.progress.startedCourseIds, courseId],
          },
        })),

      completeLesson: (courseId: string, lessonId: string) =>
        set((state) => {
          const key = lessonKey(courseId, lessonId);
          if (state.progress.completedLessonIds.includes(key)) return state;

          const completedLessonIds = [...state.progress.completedLessonIds, key];
          const xp = state.progress.xp + XP_PER_LESSON;
          const { level, rank } = getLevelInfo(xp);
          const startedCourseIds =
            state.progress.completedCourseIds.includes(courseId) ||
            state.progress.startedCourseIds.includes(courseId)
              ? state.progress.startedCourseIds
              : [...state.progress.startedCourseIds, courseId];

          let featuredLessonKey = state.progress.featuredLessonKey;
          if (key === state.progress.featuredLessonKey) {
            featuredLessonKey = pickNextFeaturedLesson({
              completedLessonIds,
              previousCategoryId: getLessonRef(key, COURSE_INDEX)?.course.categoryId,
              allCourses: COURSE_INDEX,
              allCategories: CATEGORIES,
            });
          }

          // Le suivi du jour est tenu ici, et nulle part ailleurs : c'est le seul point du code
          // qui sait qu'une leçon vient réellement d'être lue (l'action est idempotente, une
          // relecture ne compte pas deux fois). Auparavant chaque écran appelait `addDailyProgress`
          // de son côté, ce qui obligeait chaque nouvel appelant à y penser.
          const daily = resetDailyIfNeeded(state.progress.daily);

          return {
            progress: {
              ...state.progress,
              xp,
              level,
              rank,
              completedLessonIds,
              startedCourseIds,
              featuredLessonKey,
              daily: {
                ...daily,
                lessonsLearned: daily.lessonsLearned + 1,
                xpEarned: daily.xpEarned + XP_PER_LESSON,
              },
              totalLessonsLearned: state.progress.totalLessonsLearned + 1,
            },
          };
        }),

      ensureFeaturedLesson: () =>
        set((state) => {
          const { featuredLessonKey, completedLessonIds } = state.progress;
          const ref = featuredLessonKey ? getLessonRef(featuredLessonKey, COURSE_INDEX) : null;
          const isStale = featuredLessonKey === null || ref === null || completedLessonIds.includes(featuredLessonKey);
          if (!isStale) return state;

          const nextKey = pickNextFeaturedLesson({
            completedLessonIds,
            previousCategoryId: ref?.course.categoryId,
            allCourses: COURSE_INDEX,
            allCategories: CATEGORIES,
          });
          if (nextKey === featuredLessonKey) return state;
          return { progress: { ...state.progress, featuredLessonKey: nextKey } };
        }),

      recordQuizAnswer: (questionKey: string, isCorrect: boolean) =>
        set((state) => {
          const { quizGame } = state.progress;
          const previousStat = quizGame.questions[questionKey];

          // L'XP n'est créditée qu'à la **deuxième** réussite de cette question : le module sert
          // tout le catalogue, une première bonne réponse peut n'être qu'un tirage heureux sur
          // quatre options (voir XP_PER_QUESTION_LEARNED).
          const earnsXp = isCorrect && earnsXpOnCorrect(previousStat);
          const xp = state.progress.xp + (earnsXp ? XP_PER_QUESTION_LEARNED : 0);
          const { level, rank } = getLevelInfo(xp);

          // L'XP gagnée en jouant compte dans le suivi du jour, comme celle d'une leçon lue.
          // Traité ici plutôt que par un appel séparé à `addDailyProgress` depuis l'écran :
          // seul le store sait si cette réponse a effectivement crédité de l'XP (deuxième
          // réussite), l'écran l'ignore.
          const daily = resetDailyIfNeeded(state.progress.daily);

          return {
            progress: {
              ...state.progress,
              xp,
              level,
              rank,
              daily: earnsXp ? { ...daily, xpEarned: daily.xpEarned + XP_PER_QUESTION_LEARNED } : daily,
              quizGame: {
                ...quizGame,
                questions: {
                  ...quizGame.questions,
                  [questionKey]: applyAnswer(previousStat, isCorrect),
                },
              },
            },
          };
        }),

      finishQuizGame: ({ cauris, record }: Parameters<AppState["finishQuizGame"]>[0]) =>
        set((state) => {
          const { quizGame } = state.progress;
          let records = quizGame.records;
          if (record) {
            const current = records[record.territoryId] ?? { blitz: 0, survie: 0 };
            if (record.score > current[record.mode]) {
              records = {
                ...records,
                [record.territoryId]: { ...current, [record.mode]: record.score },
              };
            }
          }

          return {
            progress: {
              ...state.progress,
              quizGame: {
                ...quizGame,
                cauris: quizGame.cauris + cauris,
                gamesPlayed: quizGame.gamesPlayed + 1,
                records,
              },
            },
          };
        }),

      setPreferredCategories: (categoryIds: string[]) =>
        set((state) => ({ progress: { ...state.progress, preferredCategoryIds: categoryIds } })),
});
export function createAppStore(environment: ProgressEnvironment = browserProgressEnvironment()) {
  // persist remains the Zustand integration, but never writes a snapshot itself.
  const store = create<AppState>()(persist(() => ({
    progress: structuredClone(initialProgress), hydrated: false, saving: 0, persistenceError: null, persistenceReadonly: false,
  } as AppState), {
    name: PROGRESS_KEY, version: 10, skipHydration: true,
    partialize: (state) => ({ progress: state.progress }),
    storage: { getItem: () => null, setItem: () => {}, removeItem: () => { throw new ProgressError("unavailable"); } },
  }));
  const publish = store.setState.bind(store);
  const persistence = createProgressPersistence(environment, initialProgress, migrate, (progress) => publish({ progress, hydrated: true, persistenceError: null, persistenceReadonly: false }));
  const commit = async (reduce?: (p: UserProgress, m: ProgressMetadata) => UserProgress, id?: string, importMissing = true) => {
    publish({ saving: store.getState().saving + 1 });
    try { return await persistence.commit(reduce, id, importMissing); }
    catch (error) {
      if (error instanceof ProgressError && (error.reason === "unavailable" || (error.reason === "storage" && !store.getState().hydrated))) {
        try { publish({ progress: persistence.readonly(), hydrated: true, persistenceReadonly: true }); }
        catch { /* Keep the last confirmed memory; never replace malformed data. */ }
      }
      publish({ persistenceError: error instanceof Error ? error.message : "La sauvegarde a échoué. Réessaie." }); throw error;
    }
    finally { publish({ saving: store.getState().saving - 1 }); }
  };
  const reduceActions = (progress: UserProgress) => {
    let current = progress;
    const reducers = actions((reduce) => { current = reduce({ progress: current }).progress; return current; });
    return { reducers, value: () => current };
  };
  const wrap = <A extends unknown[]>(run: (p: UserProgress, args: A) => UserProgress, id?: (...args: A) => string | undefined) =>
    (...args: A) => commit((p) => run(p, args), id?.(...args));
  const simple = <K extends keyof ReturnType<typeof actions>>(name: K) => wrap((p, args: Parameters<ReturnType<typeof actions>[K]>) => {
    const { reducers, value } = reduceActions(p);
    (reducers[name] as (...a: typeof args) => UserProgress)(...args);
    return value();
  });
  const api = {
    dismissCourse: simple("dismissCourse"), completeCourse: simple("completeCourse"), addXp: simple("addXp"),
    updateStreak: simple("updateStreak"), checkDailyReset: simple("checkDailyReset"), addDailyXp: simple("addDailyXp"),
    markChallengeDone: simple("markChallengeDone"), setLastCourse: simple("setLastCourse"), markCourseStarted: simple("markCourseStarted"),
    completeLesson: simple("completeLesson"), ensureFeaturedLesson: simple("ensureFeaturedLesson"), setPreferredCategories: simple("setPreferredCategories"),
    setFavoriteCourse: simple("setFavoriteCourse"),
    toggleFavoriteCourse: (courseId: string) => api.setFavoriteCourse(courseId, !store.getState().progress.favoriteCourseIds.includes(courseId)),
    recordQuizAnswer: wrap((p, [key, correct]: Parameters<AppState["recordQuizAnswer"]>) => { const { reducers, value } = reduceActions(p); reducers.recordQuizAnswer(key, correct); return value(); }, (_key, _correct, id) => id),
    recordQuizResult: wrap((p, [result]: Parameters<AppState["recordQuizResult"]>) => { const { reducers, value } = reduceActions(p); reducers.recordQuizResult(result); return value(); }, (_result, id) => id),
    finishQuizGame: wrap((p, [result]: Parameters<AppState["finishQuizGame"]>) => { const { reducers, value } = reduceActions(p); reducers.finishQuizGame(result); if (result.activity) reducers.updateStreak(); return value(); }, (result) => result.gameId ? "finish:" + result.gameId : undefined),
    finishLearning: (courseId: string, lessonId: string, xp: number) => commit((p) => { const { reducers, value } = reduceActions(p); reducers.completeLesson(courseId, lessonId); reducers.completeCourse(courseId, xp); reducers.updateStreak(); return value(); }),
    finishDailyChallenge: (gameId: string, result: QuizResult, cauris: number) => commit((p, m) => {
      const { reducers, value } = reduceActions(p);
      reducers.checkDailyReset();
      const day = toISODate(new Date());
      if (value().daily.challengeDone || m.paidDays.includes(day)) return value();
      reducers.recordQuizResult(result); reducers.addXp(DAILY_CHALLENGE_XP_BONUS); reducers.addDailyXp(DAILY_CHALLENGE_XP_BONUS);
      reducers.finishQuizGame({ cauris, record: null }); reducers.markChallengeDone(); reducers.updateStreak(); m.paidDays.push(day);
      return value();
    }, "finish:" + gameId),
    retryPersistence: async () => { await commit(); },
    refreshPersistence: async () => { await commit(undefined, undefined, false); },
  };
  publish(api);
  // Prevent external callers/middleware options from bypassing the transaction protocol.
  store.setState = () => { throw new ProgressError("unavailable"); };
  store.persist.clearStorage = () => { throw new ProgressError("unavailable"); };
  store.persist.setOptions = () => { throw new ProgressError("unavailable"); };
  const persistOptions = store.persist.getOptions();
  store.persist.getOptions = () => Object.freeze({ ...persistOptions, storage: persistOptions.storage && Object.freeze({ ...persistOptions.storage }) });
  store.persist.rehydrate = api.retryPersistence;
  store.persist.hasHydrated = () => store.getState().hydrated;
  return store;
}

export const useAppStore = createAppStore();

// These callbacks only refresh confirmed memory; they never write a snapshot back.
if (typeof window !== "undefined") {
  const refresh = () => { void useAppStore.getState().refreshPersistence().catch(() => {}); };
  window.addEventListener("storage", (event) => { if (event.key === PROGRESS_KEY) refresh(); });
  document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") refresh(); });
}
