import { describe, expect, it } from "vitest";
import type { QuestionStat, TerritoryRecords } from "@/types";
import {
  CONQUEST_MASTERY_THRESHOLD,
  CONQUEST_SCORE_THRESHOLD,
  CONQUEST_STARS,
  CONQUEST_STAR_LABELS,
  getTerritoryConquest,
  isConquered,
} from "@/lib/conquest";
import { MASTERED_BOX } from "@/lib/quizReview";

const TODAY = new Date(2026, 2, 15);

function stat(overrides: Partial<QuestionStat> = {}): QuestionStat {
  return { correct: 0, wrong: 0, box: 0, dueDate: null, ...overrides };
}

const mastered = () => stat({ correct: 3, box: MASTERED_BOX, dueDate: null });
const seenNotMastered = () => stat({ correct: 1, box: 1, dueDate: "2026-04-01" });
const due = () => stat({ wrong: 1, box: 0, dueDate: "2026-03-01" });

/** 10 questions, pour que les seuils tombent sur des comptes ronds. */
const KEYS = Array.from({ length: 10 }, (_, i) => `k${i}`);

function conquest(
  stats: Record<string, QuestionStat>,
  records?: TerritoryRecords,
  keys: string[] = KEYS,
) {
  return getTerritoryConquest({ territoryId: "ouest", keys, stats, records, now: TODAY });
}

describe("getTerritoryConquest — comptes", () => {
  it("part de zéro sur un territoire jamais touché", () => {
    const c = conquest({});
    expect(c).toMatchObject({ total: 10, mastered: 0, seen: 0, dueCount: 0, masteryRatio: 0, bestScore: 0, stars: 0 });
  });

  it("compte séparément acquises, rencontrées et dues", () => {
    const c = conquest({
      k0: mastered(),
      k1: mastered(),
      k2: seenNotMastered(),
      k3: due(),
    });
    expect(c.mastered).toBe(2);
    // Les acquises et les dues ont toutes été rencontrées.
    expect(c.seen).toBe(4);
    expect(c.dueCount).toBe(1);
  });

  it("une question acquise n'est jamais comptée comme due", () => {
    expect(conquest({ k0: mastered() }).dueCount).toBe(0);
  });

  it("une échéance future ne compte pas comme due aujourd'hui", () => {
    expect(conquest({ k0: seenNotMastered() }).dueCount).toBe(0);
  });

  it("retient le meilleur des deux modes comme meilleur score", () => {
    expect(conquest({}, { blitz: 4, survie: 17 }).bestScore).toBe(17);
    expect(conquest({}, { blitz: 21, survie: 3 }).bestScore).toBe(21);
  });
});

describe("getTerritoryConquest — maîtrise", () => {
  it("vaut la part de questions acquises", () => {
    const stats = Object.fromEntries(KEYS.slice(0, 3).map((k) => [k, mastered()]));
    expect(conquest(stats).masteryRatio).toBeCloseTo(0.3);
  });

  it("atteint 1 quand tout est acquis", () => {
    const stats = Object.fromEntries(KEYS.map((k) => [k, mastered()]));
    expect(conquest(stats).masteryRatio).toBe(1);
  });

  it("ne compte pas une question seulement rencontrée", () => {
    const stats = Object.fromEntries(KEYS.map((k) => [k, seenNotMastered()]));
    expect(conquest(stats).masteryRatio).toBe(0);
    expect(conquest(stats).seen).toBe(10);
  });

  it("vaut 0 sur un territoire sans question, sans division par zéro", () => {
    const c = conquest({}, undefined, []);
    expect(c.masteryRatio).toBe(0);
    expect(Number.isNaN(c.masteryRatio)).toBe(false);
  });
});

describe("getTerritoryConquest — étoiles", () => {
  it("première étoile dès qu'une question a été rencontrée", () => {
    expect(conquest({ k0: due() }).stars).toBe(1);
  });

  it("pas de première étoile pour un record hérité sans aucune question répondue", () => {
    // Cas théorique, mais la règle doit rester lisible : l'étoile 1 récompense l'engagement réel.
    expect(conquest({}, { blitz: 0, survie: 0 }).stars).toBe(0);
  });

  it("deuxième étoile au seuil de score, pas juste en dessous", () => {
    const below = conquest({ k0: due() }, { blitz: CONQUEST_SCORE_THRESHOLD - 1, survie: 0 });
    const at = conquest({ k0: due() }, { blitz: CONQUEST_SCORE_THRESHOLD, survie: 0 });
    expect(below.stars).toBe(1);
    expect(at.stars).toBe(2);
  });

  it("troisième étoile au seuil de maîtrise", () => {
    const count = Math.ceil(CONQUEST_MASTERY_THRESHOLD * KEYS.length);
    const justBelow = Object.fromEntries(KEYS.slice(0, count - 1).map((k) => [k, mastered()]));
    const atThreshold = Object.fromEntries(KEYS.slice(0, count).map((k) => [k, mastered()]));
    expect(conquest(justBelow).stars).toBe(1);
    expect(conquest(atThreshold).stars).toBe(2);
  });

  it("les étoiles sont indépendantes : la 3e s'obtient sans la 2e", () => {
    // Tout appris, mais jamais un gros score en une seule partie.
    const stats = Object.fromEntries(KEYS.map((k) => [k, mastered()]));
    const c = conquest(stats, { blitz: 2, survie: 1 });
    expect(c.stars).toBe(2);
    expect(c.masteryRatio).toBe(1);
    expect(c.bestScore).toBeLessThan(CONQUEST_SCORE_THRESHOLD);
  });

  it("plafonne au nombre d'étoiles prévu", () => {
    const stats = Object.fromEntries(KEYS.map((k) => [k, mastered()]));
    const c = conquest(stats, { blitz: 99, survie: 99 });
    expect(c.stars).toBe(CONQUEST_STARS);
    expect(isConquered(c)).toBe(true);
  });

  it("un territoire vide n'est jamais conquis par défaut", () => {
    expect(isConquered(conquest({}, { blitz: 99, survie: 99 }, []))).toBe(false);
  });
});

describe("libellés des étoiles", () => {
  it("il y en a exactement un par étoile", () => {
    expect(CONQUEST_STAR_LABELS).toHaveLength(CONQUEST_STARS);
  });

  it("annoncent les seuils réellement appliqués", () => {
    expect(CONQUEST_STAR_LABELS[1]).toContain(String(CONQUEST_SCORE_THRESHOLD));
    expect(CONQUEST_STAR_LABELS[2]).toContain(String(Math.round(CONQUEST_MASTERY_THRESHOLD * 100)));
  });
});
