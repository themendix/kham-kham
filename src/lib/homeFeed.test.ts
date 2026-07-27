import { describe, expect, it } from "vitest";
import { buildHomeFeed, EDITORIAL_COURSE_ID } from "@/lib/homeFeed";
import { lessonKey } from "@/lib/featured";
import { CARDS } from "@/data/cards";
import type { Category, Course } from "@/types";

const CATEGORIES: Category[] = [
  { id: "a", name: "Matière A", emoji: "🅰️", color: "histoire" },
  { id: "b", name: "Matière B", emoji: "🅱️", color: "geo" },
];

function course(id: string, categoryId: string, lessonIds: string[]): Course {
  return {
    id,
    categoryId,
    title: id,
    description: `description ${id}`,
    emoji: "📘",
    xp: 30,
    lessons: lessonIds.map((lid) => ({ id: lid, title: lid, content: lid })),
    quiz: [],
  };
}

const CATALOG_COURSES: Course[] = [
  course("course-a1", "a", ["a1-l1", "a1-l2"]),
  course("course-b1", "b", ["b1-l1", "b1-l2"]),
];

const allCatalogKeys = CATALOG_COURSES.flatMap((c) => c.lessons.map((l) => lessonKey(c.id, l.id)));
const allCardKeys = CARDS.map((c) => lessonKey(EDITORIAL_COURSE_ID, c.id));

describe("buildHomeFeed", () => {
  it("ne propose jamais une leçon déjà lue ailleurs (cartes éditoriales et catalogue)", () => {
    // Une carte éditoriale et une leçon de catalogue déjà lues.
    const completedLessonIds = [allCardKeys[0], allCatalogKeys[0]];
    const feed = buildHomeFeed({ completedLessonIds, allCourses: CATALOG_COURSES, allCategories: CATEGORIES });
    const feedKeys = feed.map((f) => lessonKey(f.courseId, f.lessonId));
    expect(feedKeys).not.toContain(allCardKeys[0]);
    expect(feedKeys).not.toContain(allCatalogKeys[0]);
  });

  it("ne propose jamais deux fois la vedette Biblio courante (excludeKey)", () => {
    const excludeKey = allCatalogKeys[0];
    const feed = buildHomeFeed({
      completedLessonIds: [],
      excludeKey,
      allCourses: CATALOG_COURSES,
      allCategories: CATEGORIES,
    });
    const feedKeys = feed.map((f) => lessonKey(f.courseId, f.lessonId));
    expect(feedKeys).not.toContain(excludeKey);
  });

  it("ne s'épuise pas tant qu'il reste des leçons non lues dans le catalogue", () => {
    // Toutes les cartes éditoriales et toutes les leçons du catalogue sauf une sont lues.
    const completedLessonIds = [...allCardKeys, ...allCatalogKeys.slice(0, -1)];
    const feed = buildHomeFeed({ completedLessonIds, allCourses: CATALOG_COURSES, allCategories: CATEGORIES });
    const feedKeys = feed.map((f) => lessonKey(f.courseId, f.lessonId));
    expect(feedKeys).toEqual([allCatalogKeys[allCatalogKeys.length - 1]]);
  });

  it("sert d'abord les cartes éditoriales non lues avant les leçons du catalogue", () => {
    const feed = buildHomeFeed({ completedLessonIds: [], allCourses: CATALOG_COURSES, allCategories: CATEGORIES });
    const firstCatalogIndex = feed.findIndex((f) => f.courseId !== EDITORIAL_COURSE_ID);
    const lastCardIndex = feed.map((f) => f.courseId).lastIndexOf(EDITORIAL_COURSE_ID);
    expect(lastCardIndex).toBeLessThan(firstCatalogIndex);
  });

  it("est vide si tout (cartes + catalogue) est déjà lu", () => {
    const completedLessonIds = [...allCardKeys, ...allCatalogKeys];
    const feed = buildHomeFeed({ completedLessonIds, allCourses: CATALOG_COURSES, allCategories: CATEGORIES });
    expect(feed).toEqual([]);
  });
});
