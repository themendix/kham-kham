import { describe, expect, it } from "vitest";
import { COURSES } from "@/data/courses";
import { COURSE_TERRITORIES } from "@/data/courseTerritories";
import { QUESTION_TERRITORIES } from "@/data/questionTerritories";
import {
  getCourseTerritories,
  getQuestionTerritories,
  getTerritory,
  TERRITORIES,
  TERRITORY_IDS,
} from "@/lib/territories";

// Contrairement aux autres tests de `src/lib/` (catalogues synthétiques), ceux-ci s'appuient sur
// le catalogue réel : le rattachement territorial *est* une donnée éditoriale, et c'est
// précisément sa couverture réelle qu'on veut vérifier — même parti pris que les tests de
// migration, qui dépendent de PARCOURS et COURSES.

describe("définition des territoires", () => {
  it("expose 5 territoires régionaux, et aucune zone transversale", () => {
    expect(TERRITORIES).toHaveLength(5);
    // Depuis la dissolution du Baobab, tout territoire a une région : plus aucun n'est hors-carte.
    expect(TERRITORIES.every((t) => t.region !== null)).toBe(true);
  });

  it("n'a ni id ni région en double", () => {
    expect(new Set(TERRITORY_IDS).size).toBe(TERRITORY_IDS.length);
    const regions = TERRITORIES.map((t) => t.region).filter((r) => r !== null);
    expect(new Set(regions).size).toBe(regions.length);
  });

  it("getTerritory résout un id connu et rend undefined sinon", () => {
    expect(getTerritory("ouest")?.name).toBe("Afrique de l'Ouest");
    // @ts-expect-error — id volontairement hors du type, on vérifie le comportement à l'exécution
    expect(getTerritory("atlantide")).toBeUndefined();
  });
});

describe("getCourseTerritories — Géographie (dérivée, non déclarée)", () => {
  it("dérive le territoire du numéro d'ordre de la fiche", () => {
    expect(getCourseTerritories("course-geographie-04-maroc", "geo")).toEqual(["nord"]);
    expect(getCourseTerritories("course-geographie-20-senegal", "geo")).toEqual(["ouest"]);
    expect(getCourseTerritories("course-geographie-27-rd-congo", "geo")).toEqual(["centrale"]);
    expect(getCourseTerritories("course-geographie-37-kenya", "geo")).toEqual(["est"]);
    expect(getCourseTerritories("course-geographie-46-afrique-du-sud", "geo")).toEqual(["australe"]);
  });

  it("ne rattache nulle part une fiche dont la région n'est pas dérivable", () => {
    expect(getCourseTerritories("course-geographie-sans-numero", "geo")).toEqual([]);
  });
});

describe("getCourseTerritories — matières déclarées", () => {
  it("rend le territoire déclaré", () => {
    expect(getCourseTerritories("course-histoire-05-empire-du-ghana", "histoire")).toEqual(["ouest"]);
    expect(getCourseTerritories("course-perso-24-patrice-lumumba", "perso")).toEqual(["centrale"]);
  });

  it("rend plusieurs territoires pour un sujet à cheval sur deux régions", () => {
    expect(getCourseTerritories("course-histoire-10-kanem-bornou", "histoire")).toEqual([
      "ouest",
      "centrale",
    ]);
    expect(getCourseTerritories("course-histoire-21-commerce-transsaharien", "histoire")).toEqual([
      "nord",
      "ouest",
    ]);
  });

  it("rend un tableau vide pour un cours rattaché question par question", () => {
    // Ces trois cours traversent plusieurs régions : c'est QUESTION_TERRITORIES qui tranche.
    expect(getCourseTerritories("course-histoire-28-independances-africaines", "histoire")).toEqual(
      [],
    );
    expect(getCourseTerritories("course-perso-09-toussaint-louverture", "perso")).toEqual([]);
    expect(getCourseTerritories("course-decouverte-05-cinema-auteur", "decouverte")).toEqual([]);
  });

  it("ne rattache nulle part un cours non déclaré, sans lever d'exception", () => {
    expect(getCourseTerritories("course-inexistant", "histoire")).toEqual([]);
  });
});

describe("getQuestionTerritories — la question prime sur le cours", () => {
  it("rend le territoire déclaré pour la question", () => {
    const key = "course-arts-rythmes-continent:quiz-arts-3";
    expect(getQuestionTerritories(key, "course-arts-rythmes-continent", "decouverte")).toEqual([
      "centrale",
    ]);
  });

  it("répartit les questions d'un même cours entre plusieurs territoires", () => {
    const courseId = "course-arts-rythmes-continent";
    const territories = ["quiz-arts-1", "quiz-arts-3", "quiz-arts-4", "quiz-arts-5"].map(
      (id) => getQuestionTerritories(`${courseId}:${id}`, courseId, "decouverte")[0],
    );
    expect(new Set(territories).size).toBe(4);
  });

  it("retombe sur le rattachement du cours quand la question n'est pas déclarée", () => {
    const courseId = "course-histoire-05-empire-du-ghana";
    expect(getQuestionTerritories(`${courseId}:inconnue`, courseId, "histoire")).toEqual(["ouest"]);
  });
});

describe("couverture du catalogue réel", () => {
  it("rattache chaque cours, soit par cours soit question par question", () => {
    for (const course of COURSES) {
      const byCourse = getCourseTerritories(course.id, course.categoryId).length > 0;
      const byQuestion = course.quiz.every(
        (q) => `${course.id}:${q.id}` in QUESTION_TERRITORIES,
      );
      expect(byCourse || byQuestion, `${course.id} n'est rattaché ni par cours ni par question`).toBe(
        true,
      );
    }
  });

  it("ne déclare que des territoires connus", () => {
    const known = new Set<string>(TERRITORY_IDS);
    for (const territories of Object.values(COURSE_TERRITORIES)) {
      for (const id of territories) expect(known.has(id)).toBe(true);
    }
  });

  it("rattache chaque question du catalogue à au moins un territoire", () => {
    for (const course of COURSES) {
      for (const question of course.quiz) {
        const key = `${course.id}:${question.id}`;
        expect(
          getQuestionTerritories(key, course.id, course.categoryId).length,
          `${key} n'est rattachée à aucun territoire`,
        ).toBeGreaterThan(0);
      }
    }
  });

  it("ne déclare, par question, que des territoires connus et des clés existantes", () => {
    const known = new Set<string>(TERRITORY_IDS);
    const questionKeys = new Set(
      COURSES.flatMap((c) => c.quiz.map((q) => `${c.id}:${q.id}`)),
    );
    for (const [key, territoryId] of Object.entries(QUESTION_TERRITORIES)) {
      expect(known.has(territoryId), `territoire inconnu pour ${key}`).toBe(true);
      expect(questionKeys.has(key), `question inconnue : ${key}`).toBe(true);
    }
  });

  it("remplit chaque territoire — aucune zone vide sur le catalogue actuel", () => {
    const counts = new Map<string, number>(TERRITORY_IDS.map((id) => [id, 0]));
    for (const course of COURSES) {
      for (const question of course.quiz) {
        const key = `${course.id}:${question.id}`;
        for (const id of getQuestionTerritories(key, course.id, course.categoryId)) {
          counts.set(id, (counts.get(id) ?? 0) + 1);
        }
      }
    }
    for (const [id, count] of counts) {
      expect(count, `territoire ${id} sans question`).toBeGreaterThan(0);
    }
  });
});
