import { describe, expect, it } from "vitest";
import { getLessonRef, lessonKey, pickNextFeaturedLesson } from "@/lib/featured";
import type { Category, Course } from "@/types";

const CATEGORIES: Category[] = [
  { id: "a", name: "Matière A", emoji: "🅰️", color: "histoire" },
  { id: "b", name: "Matière B", emoji: "🅱️", color: "geo" },
  { id: "c", name: "Matière C", emoji: "🇨", color: "perso" },
];

function course(id: string, categoryId: string, lessonIds: string[]): Course {
  return {
    id,
    categoryId,
    title: id,
    description: "",
    emoji: "📘",
    xp: 30,
    lessons: lessonIds.map((lid) => ({ id: lid, title: lid, blocks: [{ type: "paragraphe" as const, text: lid }] })),
    quiz: [],
  };
}

const COURSES: Course[] = [
  course("course-a1", "a", ["a1-l1", "a1-l2"]),
  course("course-b1", "b", ["b1-l1"]),
  course("course-c1", "c", ["c1-l1"]),
];

describe("lessonKey / getLessonRef", () => {
  it("construit une clé composée courseId:lessonId", () => {
    expect(lessonKey("course-a1", "a1-l1")).toBe("course-a1:a1-l1");
  });

  it("résout une clé valide vers son cours et sa leçon", () => {
    const ref = getLessonRef("course-a1:a1-l2", COURSES);
    expect(ref?.course.id).toBe("course-a1");
    expect(ref?.lesson.id).toBe("a1-l2");
  });

  it("renvoie null pour une clé malformée (sans séparateur)", () => {
    expect(getLessonRef("pas-de-separateur", COURSES)).toBeNull();
  });

  it("renvoie null pour un courseId inconnu", () => {
    expect(getLessonRef("course-inconnu:a1-l1", COURSES)).toBeNull();
  });

  it("renvoie null pour un lessonId inconnu dans un cours existant", () => {
    expect(getLessonRef("course-a1:lecon-inconnue", COURSES)).toBeNull();
  });
});

describe("pickNextFeaturedLesson", () => {
  it("exclut la matière précédente tant qu'une autre matière a du contenu non lu", () => {
    const key = pickNextFeaturedLesson({
      completedLessonIds: [],
      previousCategoryId: "a",
      allCourses: COURSES,
      allCategories: CATEGORIES,
    });
    const ref = getLessonRef(key!, COURSES);
    expect(ref?.course.categoryId).not.toBe("a");
  });

  it("replie sur la matière précédente s'il ne reste qu'elle avec du contenu non lu", () => {
    const completedLessonIds = ["course-b1:b1-l1", "course-c1:c1-l1"];
    const key = pickNextFeaturedLesson({
      completedLessonIds,
      previousCategoryId: "a",
      allCourses: COURSES,
      allCategories: CATEGORIES,
    });
    const ref = getLessonRef(key!, COURSES);
    expect(ref?.course.categoryId).toBe("a");
  });

  it("renvoie null quand tout le catalogue est lu", () => {
    const completedLessonIds = ["course-a1:a1-l1", "course-a1:a1-l2", "course-b1:b1-l1", "course-c1:c1-l1"];
    const key = pickNextFeaturedLesson({
      completedLessonIds,
      previousCategoryId: "a",
      allCourses: COURSES,
      allCategories: CATEGORIES,
    });
    expect(key).toBeNull();
  });

  it("renvoie la première leçon non lue du catalogue dans la matière choisie", () => {
    // Seule "a" a du contenu non lu ; a1-l1 doit être ignorée car déjà lue, a1-l2 doit sortir.
    const completedLessonIds = ["course-a1:a1-l1", "course-b1:b1-l1", "course-c1:c1-l1"];
    const key = pickNextFeaturedLesson({
      completedLessonIds,
      allCourses: COURSES,
      allCategories: CATEGORIES,
    });
    expect(key).toBe("course-a1:a1-l2");
  });

  it("traite excludeKeys comme non disponible sans le marquer lu", () => {
    // Seule "a" a du contenu non lu ; a1-l1 exclue (vedette Biblio en cours) → a1-l2 doit sortir.
    const key = pickNextFeaturedLesson({
      completedLessonIds: ["course-b1:b1-l1", "course-c1:c1-l1"],
      excludeKeys: ["course-a1:a1-l1"],
      allCourses: COURSES,
      allCategories: CATEGORIES,
    });
    expect(key).toBe("course-a1:a1-l2");
  });
});
