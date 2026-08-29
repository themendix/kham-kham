import { beforeEach, describe, expect, it } from "vitest";
import { hasSeenGuide, isNewUser, markGuideSeen, shouldShowGuide } from "@/lib/guide";
import type { UserProgress } from "@/types";

/** Progression synthétique par défaut, un nouvel utilisateur qui n'a encore rien fait */
function newProgress(overrides: Partial<UserProgress> = {}): UserProgress {
  return {
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
    ...overrides,
  };
}

beforeEach(() => {
  localStorage.clear();
});

describe("isNewUser", () => {
  it("est vrai pour une progression vierge", () => {
    expect(isNewUser(newProgress())).toBe(true);
  });

  it("est faux dès qu'il y a de l'XP", () => {
    expect(isNewUser(newProgress({ xp: 10 }))).toBe(false);
  });

  it("est faux dès qu'une leçon a été lue", () => {
    expect(isNewUser(newProgress({ completedLessonIds: ["course-a:lesson-1"] }))).toBe(false);
  });

  it("est faux dès qu'un cours a été écarté", () => {
    expect(isNewUser(newProgress({ dismissedCourseIds: ["course-a"] }))).toBe(false);
  });

  it("est faux dès qu'un cours est en favori", () => {
    expect(isNewUser(newProgress({ favoriteCourseIds: ["course-a"] }))).toBe(false);
  });
});

describe("shouldShowGuide", () => {
  it("est vrai pour un nouvel utilisateur sans clé localStorage", () => {
    expect(shouldShowGuide(newProgress())).toBe(true);
  });

  it("est faux une fois le guide marqué comme vu", () => {
    markGuideSeen();
    expect(hasSeenGuide()).toBe(true);
    expect(shouldShowGuide(newProgress())).toBe(false);
  });

  it("est faux pour un utilisateur existant même sans clé localStorage", () => {
    expect(shouldShowGuide(newProgress({ xp: 50 }))).toBe(false);
  });
});
