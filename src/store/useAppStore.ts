import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { QuizResult, UserProgress } from "@/types";
import { getLevelInfo, updateStreak as computeStreak, XP_PER_LESSON } from "@/lib/gamification";
import { resetDailyIfNeeded } from "@/lib/daily";
import { getLessonRef, lessonKey, pickNextFeaturedLesson } from "@/lib/featured";
import { EDITORIAL_COURSE_ID } from "@/lib/homeFeed";
import { getNewlyCompletedParcours } from "@/lib/parcoursProgress";
import { COURSE_INDEX } from "@/data/coursesIndex.generated";
import { CATEGORIES } from "@/data/categories";
import { PARCOURS } from "@/data/parcours";

interface AppState {
  progress: UserProgress;
  toggleFavoriteCard: (cardId: string) => void;
  toggleFavoriteCourse: (courseId: string) => void;
  completeCourse: (courseId: string, xpReward: number) => void;
  addXp: (amount: number) => void;
  updateStreak: () => void;
  /** Enregistre le résultat d'une tentative de quiz (chaque tentative, y compris les retakes), conserve les 10 plus récentes */
  recordQuizResult: (result: QuizResult) => void;
  /** Remet le suivi quotidien à zéro si la date a changé depuis le dernier reset (appelé au montage du Home) */
  checkDailyReset: () => void;
  /** Ajoute des cartes/XP au suivi du jour (et au total cumulé de cartes apprises), avec reset automatique si besoin */
  addDailyProgress: (delta: { cards?: number; xp?: number }) => void;
  /** Marque le Défi du jour comme relevé pour aujourd'hui */
  markChallengeDone: () => void;
  /** Mémorise le dernier cours ouvert, pour « Continue ton apprentissage » */
  setLastCourse: (courseId: string) => void;
  /** Marque un cours comme commencé (≥ 1 leçon lue), pour l'état « En cours » du tableau de bord de matière */
  markCourseStarted: (courseId: string) => void;
  /** Marque une leçon comme lue (idempotent) : XP, cours « commencé », avancement de la leçon « À la une » si concernée */
  completeLesson: (courseId: string, lessonId: string) => void;
  /** Vérifie que `featuredLessonKey` pointe vers une leçon valide et non lue, la recalcule sinon (appelé au montage de la Biblio) */
  ensureFeaturedLesson: () => void;
}

const initialProgress: UserProgress = {
  xp: 0,
  level: 1,
  rank: "Curieux",
  streak: { count: 0, lastActiveDate: null, weekDays: Array(7).fill(false) },
  completedCourseIds: [],
  completedParcoursIds: [],
  favoriteCardIds: [],
  favoriteCourseIds: [],
  quizResults: [],
  daily: { date: null, cardsLearned: 0, xpEarned: 0, challengeDone: false },
  lastCourseId: null,
  totalCardsLearned: 0,
  startedCourseIds: [],
  completedLessonIds: [],
  featuredLessonKey: null,
};

/**
 * Migration douce unique : chaque version historique (v1→v6) n'a fait qu'ajouter des champs à
 * défaut sûr (sauf le renommage `favoriteIds` en v5 et les suppressions en v7), donc une seule
 * fonction, indifférente à la version d'origine, suffit à ramener n'importe quel blob v1→v6 à la
 * forme v7. Exportée (plutôt qu'inline dans `persist(...)`) pour être testable sans passer par
 * `localStorage`/la réhydratation Zustand.
 */
export function migrate(persistedState: unknown): { progress: UserProgress } {
  const state = persistedState as
    | { progress?: Partial<UserProgress> & { favoriteIds?: string[] } }
    | undefined;
  if (!state?.progress) return { progress: initialProgress };
  const { favoriteIds, ...rest } = state.progress;
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
      favoriteCardIds: rest.favoriteCardIds ?? favoriteIds ?? [],
      favoriteCourseIds: state.progress.favoriteCourseIds ?? [],
      quizResults: state.progress.quizResults ?? [],
      daily: state.progress.daily ?? initialProgress.daily,
      lastCourseId: state.progress.lastCourseId ?? null,
      totalCardsLearned: state.progress.totalCardsLearned ?? 0,
      startedCourseIds: state.progress.startedCourseIds ?? [],
      completedLessonIds: state.progress.completedLessonIds ?? [],
      featuredLessonKey: state.progress.featuredLessonKey ?? null,
    },
  };
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      progress: initialProgress,

      toggleFavoriteCard: (cardId) =>
        set((state) => {
          const isFav = state.progress.favoriteCardIds.includes(cardId);
          return {
            progress: {
              ...state.progress,
              favoriteCardIds: isFav
                ? state.progress.favoriteCardIds.filter((id) => id !== cardId)
                : [...state.progress.favoriteCardIds, cardId],
            },
          };
        }),

      toggleFavoriteCourse: (courseId) =>
        set((state) => {
          const isFav = state.progress.favoriteCourseIds.includes(courseId);
          return {
            progress: {
              ...state.progress,
              favoriteCourseIds: isFav
                ? state.progress.favoriteCourseIds.filter((id) => id !== courseId)
                : [...state.progress.favoriteCourseIds, courseId],
            },
          };
        }),

      completeCourse: (courseId, xpReward) =>
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

      addXp: (amount) =>
        set((state) => {
          const xp = state.progress.xp + amount;
          const { level, rank } = getLevelInfo(xp);
          return { progress: { ...state.progress, xp, level, rank } };
        }),

      updateStreak: () =>
        set((state) => ({
          progress: { ...state.progress, streak: computeStreak(state.progress.streak) },
        })),

      recordQuizResult: (result) =>
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

      addDailyProgress: ({ cards = 0, xp = 0 }) =>
        set((state) => {
          const daily = resetDailyIfNeeded(state.progress.daily);
          return {
            progress: {
              ...state.progress,
              daily: {
                ...daily,
                cardsLearned: daily.cardsLearned + cards,
                xpEarned: daily.xpEarned + xp,
              },
              totalCardsLearned: state.progress.totalCardsLearned + cards,
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

      setLastCourse: (courseId) =>
        set((state) => ({ progress: { ...state.progress, lastCourseId: courseId } })),

      markCourseStarted: (courseId) =>
        set((state) => ({
          progress: {
            ...state.progress,
            startedCourseIds: state.progress.startedCourseIds.includes(courseId)
              ? state.progress.startedCourseIds
              : [...state.progress.startedCourseIds, courseId],
          },
        })),

      completeLesson: (courseId, lessonId) =>
        set((state) => {
          const key = lessonKey(courseId, lessonId);
          if (state.progress.completedLessonIds.includes(key)) return state;

          const completedLessonIds = [...state.progress.completedLessonIds, key];
          const xp = state.progress.xp + XP_PER_LESSON;
          const { level, rank } = getLevelInfo(xp);
          // Le pseudo-cours des cartes éditoriales du fil Home (`EDITORIAL_COURSE_ID`) ne
          // correspond à aucun vrai Course : il ne doit jamais polluer startedCourseIds.
          const startedCourseIds =
            courseId === EDITORIAL_COURSE_ID ||
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

          return {
            progress: {
              ...state.progress,
              xp,
              level,
              rank,
              completedLessonIds,
              startedCourseIds,
              featuredLessonKey,
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
    }),
    {
      name: "sankofa-progress",
      version: 7,
      partialize: (state) => ({ progress: state.progress }),
      migrate,
    },
  ),
);
