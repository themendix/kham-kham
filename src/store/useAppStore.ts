import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { QuizResult, UserProgress } from "@/types";
import { getLevelInfo, updateStreak as computeStreak, XP_PER_LESSON } from "@/lib/gamification";
import { resetDailyIfNeeded } from "@/lib/daily";
import { getLessonRef, lessonKey, pickNextFeaturedLesson } from "@/lib/featured";
import { COURSES } from "@/data/courses";
import { CATEGORIES } from "@/data/categories";

interface AppState {
  progress: UserProgress;
  /** Marque une carte du fil Home comme vue (passée en ✗ ou apprise en ✓) */
  markCardSeen: (cardId: string) => void;
  toggleFavoriteCard: (cardId: string) => void;
  toggleFavoriteCourse: (courseId: string) => void;
  completeCourse: (courseId: string, xpReward: number) => void;
  addXp: (amount: number) => void;
  updateStreak: () => void;
  /** Ajoute des points de maîtrise à une catégorie (plafonné à 100) */
  addMastery: (categoryId: string, amount: number) => void;
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
  favoriteCardIds: [],
  favoriteCourseIds: [],
  seenCardIds: [],
  masteryByCategory: {},
  quizResults: [],
  daily: { date: null, cardsLearned: 0, xpEarned: 0, challengeDone: false },
  lastCourseId: null,
  totalCardsLearned: 0,
  startedCourseIds: [],
  completedLessonIds: [],
  featuredLessonKey: null,
};

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      progress: initialProgress,

      markCardSeen: (cardId) =>
        set((state) => ({
          progress: {
            ...state.progress,
            seenCardIds: state.progress.seenCardIds.includes(cardId)
              ? state.progress.seenCardIds
              : [...state.progress.seenCardIds, cardId],
          },
        })),

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
          const xp = state.progress.xp + xpReward;
          const { level, rank } = getLevelInfo(xp);
          return {
            progress: {
              ...state.progress,
              xp,
              level,
              rank,
              completedCourseIds: [...state.progress.completedCourseIds, courseId],
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

      addMastery: (categoryId, amount) =>
        set((state) => {
          const current = state.progress.masteryByCategory[categoryId] ?? 0;
          return {
            progress: {
              ...state.progress,
              masteryByCategory: {
                ...state.progress.masteryByCategory,
                [categoryId]: Math.min(100, current + amount),
              },
            },
          };
        }),

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
          const startedCourseIds =
            state.progress.completedCourseIds.includes(courseId) ||
            state.progress.startedCourseIds.includes(courseId)
              ? state.progress.startedCourseIds
              : [...state.progress.startedCourseIds, courseId];

          let featuredLessonKey = state.progress.featuredLessonKey;
          if (key === state.progress.featuredLessonKey) {
            featuredLessonKey = pickNextFeaturedLesson({
              completedLessonIds,
              previousCategoryId: getLessonRef(key, COURSES)?.course.categoryId,
              allCourses: COURSES,
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
          const ref = featuredLessonKey ? getLessonRef(featuredLessonKey, COURSES) : null;
          const isStale = featuredLessonKey === null || ref === null || completedLessonIds.includes(featuredLessonKey);
          if (!isStale) return state;

          const nextKey = pickNextFeaturedLesson({
            completedLessonIds,
            previousCategoryId: ref?.course.categoryId,
            allCourses: COURSES,
            allCategories: CATEGORIES,
          });
          if (nextKey === featuredLessonKey) return state;
          return { progress: { ...state.progress, featuredLessonKey: nextKey } };
        }),
    }),
    {
      name: "sankofa-progress",
      version: 5,
      partialize: (state) => ({ progress: state.progress }),
      migrate: (persistedState) => {
        const state = persistedState as
          | { progress?: Partial<UserProgress> & { favoriteIds?: string[] } }
          | undefined;
        if (!state?.progress) return { progress: initialProgress };
        const { favoriteIds, ...rest } = state.progress;
        return {
          progress: {
            ...initialProgress,
            ...rest,
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
      },
    },
  ),
);
