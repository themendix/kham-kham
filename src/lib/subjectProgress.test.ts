import { describe, expect, it } from "vitest";
import {
  COURSES_PER_LEVEL,
  getCourseStatus,
  getMasteryByCategory,
  getSubjectProgress,
  isSubjectEmerging,
} from "@/lib/subjectProgress";
import type { Category, Course, UserProgress } from "@/types";

const CATEGORIES: Category[] = [
  { id: "histoire", name: "Histoire", emoji: "🏛️", color: "histoire" },
  { id: "geo", name: "Géographie", emoji: "🗺️", color: "geo" },
];

function course(id: string, categoryId: string, xp: number): Course {
  return { id, categoryId, title: id, description: "", emoji: "📘", xp, lessons: [], quiz: [] };
}

// Histoire : 4 cours (plus que COURSES_PER_LEVEL = 3), Géographie : 1 seul cours (émergente).
const COURSES: Course[] = [
  course("h1", "histoire", 70),
  course("h2", "histoire", 70),
  course("h3", "histoire", 70),
  course("h4", "histoire", 70),
  course("g1", "geo", 30),
];

function progress(overrides: Partial<UserProgress> = {}): UserProgress {
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

describe("getSubjectProgress — bornes", () => {
  it("0 cours terminé : niveau 1, progression à 0", () => {
    const result = getSubjectProgress("histoire", progress(), COURSES);
    expect(result).toMatchObject({ completedCount: 0, level: 1, progressPct: 0, xp: 0 });
  });

  it("exactement COURSES_PER_LEVEL cours terminés : passage au niveau 2, progression repart à 0", () => {
    const p = progress({ completedCourseIds: ["h1", "h2", "h3"] });
    const result = getSubjectProgress("histoire", p, COURSES);
    expect(result.completedCount).toBe(COURSES_PER_LEVEL);
    expect(result.level).toBe(2);
    expect(result.coursesIntoLevel).toBe(0);
    expect(result.progressPct).toBe(0);
  });

  it("matière entièrement terminée : completedCount égale totalCount, XP = somme des cours", () => {
    const p = progress({ completedCourseIds: ["h1", "h2", "h3", "h4"] });
    const result = getSubjectProgress("histoire", p, COURSES);
    expect(result.completedCount).toBe(result.totalCount);
    expect(result.xp).toBe(70 * 4);
  });
});

describe("getCourseStatus", () => {
  it("priorité terminé > en cours > à faire", () => {
    const p = progress({ completedCourseIds: ["h1"], startedCourseIds: ["h1", "h2"] });
    expect(getCourseStatus("h1", p)).toBe("termine");
    expect(getCourseStatus("h2", p)).toBe("encours");
    expect(getCourseStatus("h3", p)).toBe("afaire");
  });
});

describe("isSubjectEmerging", () => {
  it("signale une matière avec moins de COURSES_PER_LEVEL cours", () => {
    expect(isSubjectEmerging("geo", COURSES)).toBe(true);
  });

  it("ne signale pas une matière avec au moins COURSES_PER_LEVEL cours", () => {
    expect(isSubjectEmerging("histoire", COURSES)).toBe(false);
  });
});

describe("getMasteryByCategory", () => {
  it("calcule le pourcentage de cours terminés par matière", () => {
    const p = progress({ completedCourseIds: ["h1", "h2"] });
    const mastery = getMasteryByCategory(p, COURSES, CATEGORIES);
    expect(mastery.histoire).toBe(50); // 2/4
    expect(mastery.geo).toBe(0);
  });

  it("ne divise jamais par zéro pour une matière sans cours", () => {
    const emptyCategories: Category[] = [{ id: "vide", name: "Vide", emoji: "❓", color: "decouverte" }];
    const mastery = getMasteryByCategory(progress(), COURSES, emptyCategories);
    expect(mastery.vide).toBe(0);
  });
});
