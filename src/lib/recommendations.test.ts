import { describe, expect, it } from "vitest";
import { recommendCourses } from "@/lib/recommendations";
import type { Category, Course, UserProgress } from "@/types";

const CATEGORIES: Category[] = [
  { id: "histoire", name: "Histoire", emoji: "🏛️", color: "histoire" },
  { id: "geo", name: "Géographie", emoji: "🗺️", color: "geo" },
  { id: "perso", name: "Personnalités", emoji: "👤", color: "perso" }, // émergente : 1 seul cours
];

function course(id: string, categoryId: string): Course {
  return { id, categoryId, title: id, description: "", emoji: "📘", xp: 30, lessons: [], quiz: [] };
}

// Histoire : 4 cours (matière constituée), Géographie : 4 cours, Personnalités : 1 seul (émergente).
const ALL_COURSES: Course[] = [
  course("h1", "histoire"),
  course("h2", "histoire"),
  course("h3", "histoire"),
  course("h4", "histoire"),
  course("g1", "geo"),
  course("g2", "geo"),
  course("g3", "geo"),
  course("g4", "geo"),
  course("p1", "perso"),
];

function progress(overrides: Partial<UserProgress> = {}): UserProgress {
  return {
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
    ...overrides,
  };
}

describe("recommendCourses", () => {
  it("exclut les cours déjà terminés des candidats", () => {
    const p = progress({ completedCourseIds: ["h1"] });
    const result = recommendCourses(ALL_COURSES, ALL_COURSES, CATEGORIES, p, 10);
    expect(result.some((r) => r.course.id === "h1")).toBe(false);
  });

  it("priorise la matière du dernier cours ouvert", () => {
    const p = progress({ lastCourseId: "h1" });
    const result = recommendCourses(ALL_COURSES, ALL_COURSES, CATEGORIES, p, 3);
    expect(result[0].course.categoryId).toBe("histoire");
    expect(result[0].reason).toBe("Pour continuer sur ta lancée");
  });

  it("trie de façon stable à score égal (ordre des candidats conservé)", () => {
    const p = progress(); // aucune progression : tous les cours à égalité de score
    const candidates = [course("x1", "geo"), course("x2", "geo"), course("x3", "geo")];
    const result = recommendCourses(candidates, candidates, [CATEGORIES[1]], p, 3);
    expect(result.map((r) => r.course.id)).toEqual(["x1", "x2", "x3"]);
  });

  it("renvoie une liste vide si aucun candidat n'est fourni", () => {
    const result = recommendCourses([], ALL_COURSES, CATEGORIES, progress(), 4);
    expect(result).toEqual([]);
  });

  it("ne pousse pas les matières émergentes en découverte prioritaire", () => {
    const p = progress();
    const result = recommendCourses(ALL_COURSES, ALL_COURSES, CATEGORIES, p, 1);
    // Sans le garde-fou E4, "p1" (matière à 1 seul cours, jamais touchée) remonterait en tête
    // indéfiniment. Avec le garde-fou, histoire/geo (matières constituées) doivent rester devant.
    expect(result[0].course.categoryId).not.toBe("perso");
  });
});
