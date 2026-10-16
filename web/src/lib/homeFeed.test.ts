import { describe, expect, it } from "vitest";
import type { Category, CourseMeta } from "@/types";
import { buildHomeFeed } from "@/lib/homeFeed";

const CATEGORIES: Category[] = [
  { id: "histoire", name: "Histoire", emoji: "🏛️", color: "histoire" },
  { id: "geo", name: "Géographie", emoji: "🌍", color: "geo" },
  { id: "perso", name: "Personnalités", emoji: "👤", color: "perso" },
];

function course(id: string, categoryId: string): CourseMeta {
  return {
    id,
    categoryId,
    title: `Cours ${id}`,
    description: `Description de ${id}`,
    emoji: "📘",
    xp: 70,
    lessons: [{ id: `${id}-lesson-1` }],
    quizCount: 5,
  };
}

// Géographie volontairement surreprésentée : c'est le cas réel du catalogue (54 fiches),
// et c'est ce qui rend le tourniquet nécessaire.
const COURSES: CourseMeta[] = [
  course("h1", "histoire"),
  course("h2", "histoire"),
  course("g1", "geo"),
  course("g2", "geo"),
  course("g3", "geo"),
  course("g4", "geo"),
  course("p1", "perso"),
];

function build(overrides: Partial<Parameters<typeof buildHomeFeed>[0]> = {}) {
  return buildHomeFeed({
    completedCourseIds: [],
    favoriteCourseIds: [],
    dismissedCourseIds: [],
    allCourses: COURSES,
    allCategories: CATEGORIES,
    preferredCategoryIds: [],
    ...overrides,
  });
}

describe("buildHomeFeed — composition", () => {
  it("sert tous les cours disponibles", () => {
    expect(build()).toHaveLength(COURSES.length);
  });

  it("attache à chaque cours sa catégorie", () => {
    for (const entry of build()) {
      expect(entry.category.id).toBe(entry.course.categoryId);
    }
  });

  it("ne produit jamais de doublon", () => {
    const ids = build().map((f) => f.course.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("ignore un cours dont la catégorie est inconnue plutôt que de planter", () => {
    const feed = build({ allCourses: [...COURSES, course("x1", "matiere-disparue")] });
    expect(feed.map((f) => f.course.id)).not.toContain("x1");
    expect(feed).toHaveLength(COURSES.length);
  });
});

describe("buildHomeFeed — exclusions", () => {
  it("écarte les cours déjà terminés", () => {
    const ids = build({ completedCourseIds: ["h1", "g1"] }).map((f) => f.course.id);
    expect(ids).not.toContain("h1");
    expect(ids).not.toContain("g1");
    expect(ids).toHaveLength(COURSES.length - 2);
  });

  it("écarte les cours déjà mis de côté", () => {
    expect(build({ favoriteCourseIds: ["p1"] }).map((f) => f.course.id)).not.toContain("p1");
  });

  it("écarte définitivement les cours refusés", () => {
    expect(build({ dismissedCourseIds: ["g2"] }).map((f) => f.course.id)).not.toContain("g2");
  });

  it("rend un fil vide quand tout a été trié", () => {
    expect(build({ dismissedCourseIds: COURSES.map((c) => c.id) })).toEqual([]);
  });
});

describe("buildHomeFeed — tourniquet entre matières", () => {
  it("alterne les matières au lieu de vider le catalogue matière par matière", () => {
    const cats = build().map((f) => f.course.categoryId);
    // Les trois premières cartes couvrent les trois matières : sans tourniquet, on aurait
    // servi h1, h2 puis quatre fiches de géographie d'affilée.
    expect(new Set(cats.slice(0, 3)).size).toBe(3);
  });

  it("continue avec les matières restantes une fois les plus courtes épuisées", () => {
    const cats = build().map((f) => f.course.categoryId);
    // Personnalités n'a qu'un cours : la fin du fil ne peut être que de la géographie.
    expect(cats[cats.length - 1]).toBe("geo");
  });

  it("est déterministe : deux appels identiques donnent le même fil", () => {
    expect(build().map((f) => f.course.id)).toEqual(build().map((f) => f.course.id));
  });

  it("ne mute pas les tableaux reçus", () => {
    const snapshot = [...COURSES];
    build();
    expect(COURSES).toEqual(snapshot);
  });
});

describe("buildHomeFeed — matières préférées (onboarding)", () => {
  it("place jusqu'à 5 cours de la matière choisie en tête, sans rien perdre du reste", () => {
    const feed = build({ preferredCategoryIds: ["histoire"] });
    // Le catalogue de test n'a que 2 cours d'Histoire (h1, h2) : les 5 premières places ne
    // peuvent pas être toutes remplies, le reste du fil suit derrière sans trou.
    expect(feed.slice(0, 2).map((f) => f.course.categoryId)).toEqual(["histoire", "histoire"]);
    expect(feed).toHaveLength(COURSES.length);
    expect(new Set(feed.map((f) => f.course.id)).size).toBe(COURSES.length);
  });

  it("plafonne le nombre de cartes de tête à 5 même avec plus de cours disponibles", () => {
    const manyHistoire: CourseMeta[] = [
      ...COURSES,
      course("h3", "histoire"),
      course("h4", "histoire"),
      course("h5", "histoire"),
      course("h6", "histoire"),
    ];
    const feed = buildHomeFeed({
      completedCourseIds: [],
      favoriteCourseIds: [],
      dismissedCourseIds: [],
      allCourses: manyHistoire,
      allCategories: CATEGORIES,
      preferredCategoryIds: ["histoire"],
    });
    expect(feed.slice(0, 5).every((f) => f.course.categoryId === "histoire")).toBe(true);
    expect(feed[5].course.categoryId).not.toBe("histoire");
  });

  it("sans préférence, l'ordre reste le tourniquet habituel", () => {
    expect(build({ preferredCategoryIds: [] }).map((f) => f.course.id)).toEqual(
      build().map((f) => f.course.id),
    );
  });
});
