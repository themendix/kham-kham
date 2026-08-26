import { describe, expect, it } from "vitest";
import { COURSES } from "@/data/courses";
import { COURSE_TERRITORIES } from "@/data/courseTerritories";
import {
  getCourseTerritories,
  getTerritory,
  TERRITORIES,
  TERRITORY_IDS,
  TRANSVERSAL_TERRITORY_ID,
} from "@/lib/territories";

// Contrairement aux autres tests de `src/lib/` (catalogues synthétiques), ceux-ci s'appuient sur
// le catalogue réel : le rattachement territorial *est* une donnée éditoriale, et c'est
// précisément sa couverture réelle qu'on veut vérifier — même parti pris que les tests de
// migration, qui dépendent de PARCOURS et COURSES.

describe("définition des territoires", () => {
  it("expose 5 territoires régionaux plus la zone transversale", () => {
    expect(TERRITORIES).toHaveLength(6);
    expect(TERRITORIES.filter((t) => t.region !== null)).toHaveLength(5);
    expect(TERRITORIES.filter((t) => t.region === null).map((t) => t.id)).toEqual([
      TRANSVERSAL_TERRITORY_ID,
    ]);
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

  it("verse dans la zone transversale une fiche dont la région n'est pas dérivable", () => {
    expect(getCourseTerritories("course-geographie-sans-numero", "geo")).toEqual([
      TRANSVERSAL_TERRITORY_ID,
    ]);
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

  it("traduit un rattachement vide en zone transversale", () => {
    expect(getCourseTerritories("course-histoire-28-independances-africaines", "histoire")).toEqual([
      TRANSVERSAL_TERRITORY_ID,
    ]);
    expect(getCourseTerritories("course-perso-09-toussaint-louverture", "perso")).toEqual([
      TRANSVERSAL_TERRITORY_ID,
    ]);
    expect(getCourseTerritories("course-decouverte-05-cinema-auteur", "decouverte")).toEqual([
      TRANSVERSAL_TERRITORY_ID,
    ]);
  });

  it("verse dans la zone transversale un cours non déclaré, sans lever d'exception", () => {
    expect(getCourseTerritories("course-inexistant", "histoire")).toEqual([
      TRANSVERSAL_TERRITORY_ID,
    ]);
  });
});

describe("couverture du catalogue réel", () => {
  it("attribue au moins un territoire à chacun des cours du catalogue", () => {
    for (const course of COURSES) {
      expect(getCourseTerritories(course.id, course.categoryId).length).toBeGreaterThan(0);
    }
  });

  it("ne déclare que des territoires connus", () => {
    const known = new Set<string>(TERRITORY_IDS);
    for (const territories of Object.values(COURSE_TERRITORIES)) {
      for (const id of territories) expect(known.has(id)).toBe(true);
    }
  });

  it("remplit chaque territoire — aucune zone vide sur le catalogue actuel", () => {
    const counts = new Map<string, number>(TERRITORY_IDS.map((id) => [id, 0]));
    for (const course of COURSES) {
      for (const id of getCourseTerritories(course.id, course.categoryId)) {
        counts.set(id, (counts.get(id) ?? 0) + course.quiz.length);
      }
    }
    for (const [id, count] of counts) {
      expect(count, `territoire ${id} sans question`).toBeGreaterThan(0);
    }
  });
});
