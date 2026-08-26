import { describe, expect, it } from "vitest";
import type { QuestionStat } from "@/types";
import {
  applyAnswer,
  earnsXpOnCorrect,
  hasEverBeenCorrect,
  isDue,
  isMastered,
  isNew,
  MASTERED_BOX,
  NEW_QUESTION_STAT,
} from "@/lib/quizReview";

/** 15 mars 2026, date de référence injectée partout pour que les tests ne dépendent pas du jour réel. */
const TODAY = new Date(2026, 2, 15);

function stat(overrides: Partial<QuestionStat> = {}): QuestionStat {
  return { ...NEW_QUESTION_STAT, ...overrides };
}

describe("applyAnswer — montée des paliers", () => {
  it("première réussite d'une question jamais vue : palier 1, rappel dans 3 jours", () => {
    const result = applyAnswer(undefined, true, TODAY);
    expect(result).toEqual({ correct: 1, wrong: 0, box: 1, dueDate: "2026-03-18" });
  });

  it("deuxième réussite : palier 2, rappel dans 7 jours", () => {
    const result = applyAnswer(stat({ correct: 1, box: 1 }), true, TODAY);
    expect(result.box).toBe(2);
    expect(result.dueDate).toBe("2026-03-22");
  });

  it("troisième réussite : question acquise, plus aucun rappel programmé", () => {
    const result = applyAnswer(stat({ correct: 2, box: 2 }), true, TODAY);
    expect(result.box).toBe(MASTERED_BOX);
    expect(result.dueDate).toBeNull();
  });

  it("une réussite de plus sur une question acquise ne dépasse pas le dernier palier", () => {
    const result = applyAnswer(stat({ correct: 3, box: MASTERED_BOX }), true, TODAY);
    expect(result.box).toBe(MASTERED_BOX);
    expect(result.correct).toBe(4);
    expect(result.dueDate).toBeNull();
  });
});

describe("applyAnswer — échec", () => {
  it("ramène au palier 0 et reprogramme la question pour demain", () => {
    const result = applyAnswer(stat({ correct: 2, box: 2 }), false, TODAY);
    expect(result).toEqual({ correct: 2, wrong: 1, box: 0, dueDate: "2026-03-16" });
  });

  it("fait retomber même une question acquise, qui redevient donc rappelable", () => {
    const result = applyAnswer(stat({ correct: 3, box: MASTERED_BOX }), false, TODAY);
    expect(result.box).toBe(0);
    expect(isMastered(result)).toBe(false);
    expect(isDue(result, new Date(2026, 2, 16))).toBe(true);
  });

  it("ne décrémente jamais le compteur de réussites", () => {
    const result = applyAnswer(stat({ correct: 5, wrong: 1, box: 2 }), false, TODAY);
    expect(result.correct).toBe(5);
    expect(result.wrong).toBe(2);
  });
});

describe("applyAnswer — franchissement de fin de mois", () => {
  it("le rappel à J+7 depuis le 28 février tombe bien en mars", () => {
    const result = applyAnswer(stat({ correct: 1, box: 1 }), true, new Date(2026, 1, 28));
    expect(result.dueDate).toBe("2026-03-07");
  });
});

describe("isDue", () => {
  it("une question jamais vue n'est pas due", () => {
    expect(isDue(undefined, TODAY)).toBe(false);
  });

  it("une question acquise (dueDate null) n'est jamais due", () => {
    expect(isDue(stat({ box: MASTERED_BOX, dueDate: null }), TODAY)).toBe(false);
  });

  it("est due le jour de l'échéance", () => {
    expect(isDue(stat({ dueDate: "2026-03-15" }), TODAY)).toBe(true);
  });

  it("est due quand l'échéance est dépassée (rattrapage après une absence)", () => {
    expect(isDue(stat({ dueDate: "2026-02-01" }), TODAY)).toBe(true);
  });

  it("n'est pas due avant l'échéance", () => {
    expect(isDue(stat({ dueDate: "2026-03-16" }), TODAY)).toBe(false);
  });
});

describe("isNew / isMastered / hasEverBeenCorrect", () => {
  it("isNew ne vaut que pour une question jamais répondue", () => {
    expect(isNew(undefined)).toBe(true);
    expect(isNew(NEW_QUESTION_STAT)).toBe(true);
    expect(isNew(stat({ wrong: 1 }))).toBe(false);
    expect(isNew(stat({ correct: 1 }))).toBe(false);
  });

  it("isMastered ne vaut qu'au dernier palier", () => {
    expect(isMastered(undefined)).toBe(false);
    expect(isMastered(stat({ box: 2 }))).toBe(false);
    expect(isMastered(stat({ box: MASTERED_BOX }))).toBe(true);
  });

  it("hasEverBeenCorrect garde la trace d'une réussite même après un échec ultérieur", () => {
    const afterSuccess = applyAnswer(undefined, true, TODAY);
    const afterFailure = applyAnswer(afterSuccess, false, TODAY);
    expect(hasEverBeenCorrect(undefined)).toBe(false);
    expect(hasEverBeenCorrect(afterSuccess)).toBe(true);
    expect(hasEverBeenCorrect(afterFailure)).toBe(true);
  });
});

describe("earnsXpOnCorrect — seuil de crédit de l'XP", () => {
  it("ne paie pas la première réussite : sur 4 options, elle peut être un tirage heureux", () => {
    expect(earnsXpOnCorrect(undefined)).toBe(false);
    expect(earnsXpOnCorrect(NEW_QUESTION_STAT)).toBe(false);
  });

  it("paie la deuxième réussite", () => {
    const afterFirst = applyAnswer(undefined, true, TODAY);
    expect(earnsXpOnCorrect(afterFirst)).toBe(true);
  });

  it("ne paie plus au-delà", () => {
    const afterSecond = applyAnswer(applyAnswer(undefined, true, TODAY), true, TODAY);
    expect(earnsXpOnCorrect(afterSecond)).toBe(false);
  });

  it("ne paie pas une question seulement ratée, même plusieurs fois", () => {
    const afterFailures = applyAnswer(applyAnswer(undefined, false, TODAY), false, TODAY);
    expect(earnsXpOnCorrect(afterFailures)).toBe(false);
  });

  it("un échec entre les deux réussites ne fait pas repayer la question", () => {
    const first = applyAnswer(undefined, true, TODAY);
    const failed = applyAnswer(first, false, TODAY);
    // La 2e réussite est bien payée…
    expect(earnsXpOnCorrect(failed)).toBe(true);
    const second = applyAnswer(failed, true, TODAY);
    // …et jamais une troisième fois, quel que soit le parcours d'échecs.
    expect(earnsXpOnCorrect(second)).toBe(false);
    expect(earnsXpOnCorrect(applyAnswer(second, false, TODAY))).toBe(false);
  });
});

describe("pureté", () => {
  it("ne mute pas la statistique reçue", () => {
    const original = stat({ correct: 1, box: 1, dueDate: "2026-03-18" });
    const snapshot = { ...original };
    applyAnswer(original, true, TODAY);
    applyAnswer(original, false, TODAY);
    expect(original).toEqual(snapshot);
  });
});
