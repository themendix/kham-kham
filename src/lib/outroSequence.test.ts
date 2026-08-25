import { describe, expect, it } from "vitest";
import { buildCelebrationSegment, resolveOutroTail } from "@/lib/outroSequence";

describe("buildCelebrationSegment", () => {
  it("ne contient que 'done' quand ni le niveau de matière ni un parcours n'avancent", () => {
    expect(buildCelebrationSegment({ leveledUp: false, hasParcours: false })).toEqual(["done"]);
  });

  it("ajoute 'levelUp' après 'done' en cas de montée de niveau de matière", () => {
    expect(buildCelebrationSegment({ leveledUp: true, hasParcours: false })).toEqual([
      "done",
      "levelUp",
    ]);
  });

  it("ajoute 'collection' après 'done' quand le cours appartient à un parcours", () => {
    expect(buildCelebrationSegment({ leveledUp: false, hasParcours: true })).toEqual([
      "done",
      "collection",
    ]);
  });

  it("enchaîne 'done', 'levelUp' puis 'collection' quand les deux se produisent", () => {
    expect(buildCelebrationSegment({ leveledUp: true, hasParcours: true })).toEqual([
      "done",
      "levelUp",
      "collection",
    ]);
  });

  it("le cas révision (aucune montée, aucune collection) donne un segment d'un seul écran", () => {
    const segment = buildCelebrationSegment({ leveledUp: false, hasParcours: false });
    expect(segment).toHaveLength(1);
    expect(segment[0]).toBe("done");
  });
});

describe("resolveOutroTail", () => {
  it("renvoie une queue vide quand le quiz est sauté et que la série ne progresse pas", () => {
    expect(resolveOutroTail({ takeQuiz: false, streakAdvanced: false })).toEqual([]);
  });

  it("renvoie ['streak'] quand le quiz est sauté mais que la série progresse", () => {
    expect(resolveOutroTail({ takeQuiz: false, streakAdvanced: true })).toEqual(["streak"]);
  });

  it("renvoie ['quiz','quizResult'] quand le quiz est fait mais que la série ne progresse pas", () => {
    expect(resolveOutroTail({ takeQuiz: true, streakAdvanced: false })).toEqual([
      "quiz",
      "quizResult",
    ]);
  });

  it("renvoie ['quiz','quizResult','streak'] quand le quiz est fait et que la série progresse", () => {
    expect(resolveOutroTail({ takeQuiz: true, streakAdvanced: true })).toEqual([
      "quiz",
      "quizResult",
      "streak",
    ]);
  });
});
