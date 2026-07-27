import { describe, expect, it } from "vitest";
import { normalizeSearchText, searchCourses } from "@/lib/search";
import type { Course } from "@/types";

function course(overrides: Partial<Course> & Pick<Course, "id" | "title">): Course {
  return {
    categoryId: "geo",
    description: "",
    emoji: "📘",
    xp: 30,
    lessons: [],
    quiz: [],
    ...overrides,
  };
}

describe("normalizeSearchText", () => {
  it("supprime les accents", () => {
    expect(normalizeSearchText("Sénégal")).toBe("senegal");
    expect(normalizeSearchText("Égypte")).toBe("egypte");
  });

  it("ignore la casse", () => {
    expect(normalizeSearchText("SÉNÉGAL")).toBe(normalizeSearchText("sénégal"));
  });
});

describe("searchCourses", () => {
  const COURSES: Course[] = [
    course({ id: "course-senegal", title: "Sénégal", description: "Un pays d'Afrique de l'Ouest." }),
    course({
      id: "course-egypte",
      title: "Égypte antique",
      description: "Les pharaons et les pyramides.",
    }),
    course({
      id: "course-mali-histoire",
      title: "L'empire du Mali",
      description: "Un grand empire ouest-africain médiéval.",
      lessons: [{ id: "l1", title: "Soundiata Keïta", content: "Fondateur de l'empire du Mali." }],
    }),
  ];

  it("trouve un cours accentué depuis une requête sans accent", () => {
    const results = searchCourses("senegal", COURSES);
    expect(results.map((r) => r.course.id)).toEqual(["course-senegal"]);
    expect(results[0].matchLocation).toBe("titre");
  });

  it("trouve un cours depuis une requête accentuée sur un titre non accentué", () => {
    const results = searchCourses("égypte", COURSES);
    expect(results.map((r) => r.course.id)).toEqual(["course-egypte"]);
  });

  it("cherche dans la description quand le titre ne correspond pas", () => {
    const results = searchCourses("pharaons", COURSES);
    expect(results.map((r) => r.course.id)).toEqual(["course-egypte"]);
    expect(results[0].matchLocation).toBe("description");
  });

  it("cherche dans le contenu des leçons en dernier recours et renvoie le titre de la leçon", () => {
    const results = searchCourses("soundiata", COURSES);
    expect(results.map((r) => r.course.id)).toEqual(["course-mali-histoire"]);
    expect(results[0].matchLocation).toBe("leçon");
    expect(results[0].matchedLessonTitle).toBe("Soundiata Keïta");
  });

  it("trie les résultats par pertinence : titre avant description avant leçon", () => {
    const courses: Course[] = [
      course({
        id: "course-mentioned-in-lesson",
        title: "Autre pays",
        description: "Rien à voir.",
        lessons: [{ id: "l1", title: "Voisinage", content: "Frontalier du Sénégal." }],
      }),
      course({
        id: "course-mentioned-in-description",
        title: "Encore un autre",
        description: "Proche du Sénégal.",
      }),
      course({ id: "course-senegal", title: "Sénégal", description: "" }),
    ];
    const results = searchCourses("senegal", courses);
    expect(results.map((r) => r.course.id)).toEqual([
      "course-senegal",
      "course-mentioned-in-description",
      "course-mentioned-in-lesson",
    ]);
  });

  it("ne renvoie qu'une seule fois un cours qui correspond à plusieurs endroits", () => {
    const results = searchCourses("mali", COURSES);
    expect(results).toHaveLength(1);
  });

  it("renvoie un tableau vide pour une requête vide", () => {
    expect(searchCourses("   ", COURSES)).toEqual([]);
  });

  it("ne renvoie rien si aucun cours ne correspond", () => {
    expect(searchCourses("kenya", COURSES)).toEqual([]);
  });
});
