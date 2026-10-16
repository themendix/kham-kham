import { describe, expect, it } from "vitest";
import type { QuestionStat, QuizEntry } from "@/types";
import type { TerritoryId } from "@/lib/territories";
import {
  BLITZ_DURATION_SECONDS,
  buildDailyChallengeQuestions,
  buildGameQuestions,
  CAURIS_FAST_BONUS,
  CAURIS_PER_CORRECT,
  CAURIS_PER_REMAINING_LIFE,
  CAURIS_STREAK_BONUS,
  computeCauris,
  DAILY_CHALLENGE_QUESTION_COUNT,
  GAME_QUESTION_COUNT,
  SURVIE_LIVES,
} from "@/lib/quizGame";

const TODAY = new Date(2026, 2, 15);
/** Hasard neutralisé : Fisher-Yates ne permute rien, l'ordre des groupes reste observable. */
const noShuffle = () => 0;

function entry(id: string, territories: TerritoryId[]): QuizEntry {
  return {
    key: `cours:${id}`,
    courseId: "cours",
    categoryId: "histoire",
    lessonId: "cours-lesson-1",
    territories,
    question: `Question ${id} ?`,
    options: ["a", "b", "c", "d"],
    correctIndex: 0,
    explanation: "Parce que.",
  };
}

const DUE = entry("due", ["ouest"]);
const NEW = entry("new", ["ouest"]);
const SEEN = entry("seen", ["ouest"]);
const MASTERED = entry("mastered", ["ouest"]);
const ELSEWHERE = entry("ailleurs", ["est"]);
const BOTH = entry("deux", ["ouest", "est"]);

const ALL = [DUE, NEW, SEEN, MASTERED, ELSEWHERE, BOTH];

function stat(overrides: Partial<QuestionStat>): QuestionStat {
  return { correct: 0, wrong: 0, box: 0, dueDate: null, ...overrides };
}

const STATS: Record<string, QuestionStat> = {
  [DUE.key]: stat({ wrong: 1, box: 0, dueDate: "2026-03-10" }),
  [SEEN.key]: stat({ correct: 1, box: 1, dueDate: "2026-03-30" }),
  [MASTERED.key]: stat({ correct: 3, box: 3, dueDate: null }),
  [BOTH.key]: stat({ correct: 1, box: 1, dueDate: "2026-03-30" }),
};

function build(mode: "blitz" | "survie", overrides: Partial<Parameters<typeof buildGameQuestions>[0]> = {}) {
  return buildGameQuestions({
    mode,
    territoryId: "ouest",
    allQuestions: ALL,
    stats: STATS,
    now: TODAY,
    random: noShuffle,
    ...overrides,
  });
}

describe("buildGameQuestions — périmètre du territoire", () => {
  it("ne retient que les questions du territoire demandé", () => {
    const keys = build("blitz").map((q) => q.key);
    expect(keys).not.toContain(ELSEWHERE.key);
    expect(keys).toContain(DUE.key);
  });

  it("retient une question rattachée à plusieurs territoires depuis chacun d'eux", () => {
    expect(build("blitz").map((q) => q.key)).toContain(BOTH.key);
    expect(
      buildGameQuestions({
        mode: "blitz",
        territoryId: "est",
        allQuestions: ALL,
        stats: STATS,
        now: TODAY,
        random: noShuffle,
      }).map((q) => q.key),
    ).toContain(BOTH.key);
  });

  it("rend un tableau vide pour un territoire sans question", () => {
    expect(build("blitz", { territoryId: "australe" })).toEqual([]);
  });

  it("ne produit jamais de doublon", () => {
    const keys = build("survie").map((q) => q.key);
    expect(new Set(keys).size).toBe(keys.length);
  });
});

describe("buildGameQuestions — tout le catalogue est servi", () => {
  it("inclut les questions jamais vues, même sans aucune statistique", () => {
    expect(build("blitz", { stats: {} })).toHaveLength(5);
  });

  it("n'exclut jamais une question acquise : elle sert de rembourrage", () => {
    expect(build("blitz").map((q) => q.key)).toContain(MASTERED.key);
  });
});

describe("buildGameQuestions — ordre par mode", () => {
  it("Blitz ouvre sur les questions dues, puis part en découverte", () => {
    const keys = build("blitz").map((q) => q.key);
    expect(keys[0]).toBe(DUE.key);
    expect(keys.indexOf(NEW.key)).toBeLessThan(keys.indexOf(MASTERED.key));
  });

  it("Survie monte en difficulté : acquis d'abord, découverte en dernier", () => {
    const keys = build("survie").map((q) => q.key);
    expect(keys[0]).toBe(MASTERED.key);
    expect(keys[keys.length - 1]).toBe(NEW.key);
    expect(keys.indexOf(DUE.key)).toBeLessThan(keys.indexOf(NEW.key));
  });

  it("les deux modes servent exactement le même vivier, dans un ordre différent", () => {
    expect(new Set(build("blitz").map((q) => q.key))).toEqual(
      new Set(build("survie").map((q) => q.key)),
    );
  });
});

describe("buildGameQuestions — taille de la partie", () => {
  it("plafonne au nombre demandé", () => {
    expect(build("blitz", { count: 2 })).toHaveLength(2);
  });

  it("se contente du vivier disponible quand il est plus petit que la partie", () => {
    expect(build("blitz").length).toBeLessThan(GAME_QUESTION_COUNT);
  });

  it("ne mute pas le tableau de questions reçu", () => {
    const snapshot = [...ALL];
    build("blitz");
    build("survie");
    expect(ALL).toEqual(snapshot);
  });
});

describe("computeCauris", () => {
  const base = { correctCount: 0, bestStreak: 0, fastAnswers: 0, remainingLives: 0 } as const;

  it("rapporte les cauris de base par bonne réponse", () => {
    expect(computeCauris({ ...base, mode: "blitz", correctCount: 4 })).toBe(4 * CAURIS_PER_CORRECT);
  });

  it("ajoute un bonus par palier de série entamé, pas au prorata", () => {
    const withoutStreak = computeCauris({ ...base, mode: "blitz", correctCount: 6 });
    expect(computeCauris({ ...base, mode: "blitz", correctCount: 6, bestStreak: 2 })).toBe(
      withoutStreak,
    );
    expect(computeCauris({ ...base, mode: "blitz", correctCount: 6, bestStreak: 6 })).toBe(
      withoutStreak + 2 * CAURIS_STREAK_BONUS,
    );
  });

  it("Blitz : récompense la vitesse", () => {
    expect(computeCauris({ ...base, mode: "blitz", correctCount: 3, fastAnswers: 3 })).toBe(
      3 * CAURIS_PER_CORRECT + 3 * CAURIS_FAST_BONUS,
    );
  });

  it("Survie : récompense les vies restantes, et ignore la vitesse", () => {
    expect(
      computeCauris({ ...base, mode: "survie", correctCount: 3, fastAnswers: 3, remainingLives: 2 }),
    ).toBe(3 * CAURIS_PER_CORRECT + 2 * CAURIS_PER_REMAINING_LIFE);
  });

  it("ne rend jamais de valeur négative sur une partie perdue d'emblée", () => {
    expect(computeCauris({ ...base, mode: "survie", remainingLives: -1 })).toBe(0);
    expect(computeCauris({ ...base, mode: "blitz" })).toBe(0);
  });
});

describe("constantes de partie", () => {
  it("gardent des valeurs cohérentes", () => {
    expect(BLITZ_DURATION_SECONDS).toBeGreaterThan(0);
    expect(SURVIE_LIVES).toBeGreaterThan(0);
    expect(GAME_QUESTION_COUNT).toBeGreaterThan(SURVIE_LIVES);
  });
});

describe("buildDailyChallengeQuestions", () => {
  // Vivier plus large que le défi, pour que la priorité aux questions dues soit observable.
  const POOL = Array.from({ length: 20 }, (_, i) => entry(`q${i}`, ["ouest"]));
  const DUE_KEYS = [POOL[3].key, POOL[11].key, POOL[17].key];
  const DUE_STATS: Record<string, QuestionStat> = Object.fromEntries(
    DUE_KEYS.map((key) => [key, stat({ wrong: 1, box: 0, dueDate: "2026-03-01" })]),
  );

  function daily(overrides: Partial<Parameters<typeof buildDailyChallengeQuestions>[0]> = {}) {
    return buildDailyChallengeQuestions({
      allQuestions: POOL,
      stats: DUE_STATS,
      now: TODAY,
      ...overrides,
    });
  }

  it("sert le nombre de questions attendu", () => {
    expect(daily()).toHaveLength(DAILY_CHALLENGE_QUESTION_COUNT);
  });

  it("place toutes les questions dues en tête", () => {
    const keys = daily().map((q) => q.key);
    const headKeys = keys.slice(0, DUE_KEYS.length);
    expect(new Set(headKeys)).toEqual(new Set(DUE_KEYS));
  });

  it("complète avec le reste du catalogue quand les dues ne suffisent pas", () => {
    const keys = daily().map((q) => q.key);
    expect(keys).toHaveLength(DAILY_CHALLENGE_QUESTION_COUNT);
    expect(keys.filter((k) => !DUE_KEYS.includes(k))).toHaveLength(
      DAILY_CHALLENGE_QUESTION_COUNT - DUE_KEYS.length,
    );
  });

  it("ne sert que des questions dues quand il y en a assez", () => {
    const manyDue: Record<string, QuestionStat> = Object.fromEntries(
      POOL.map((q) => [q.key, stat({ wrong: 1, dueDate: "2026-03-01" })]),
    );
    const keys = daily({ stats: manyDue }).map((q) => q.key);
    expect(keys).toHaveLength(DAILY_CHALLENGE_QUESTION_COUNT);
    expect(keys.every((k) => manyDue[k] !== undefined)).toBe(true);
  });

  it("est stable sur la journée : deux appels le même jour donnent le même défi", () => {
    expect(daily().map((q) => q.key)).toEqual(daily().map((q) => q.key));
  });

  it("change d'un jour à l'autre", () => {
    const today = daily().map((q) => q.key);
    const otherDay = daily({ now: new Date(2026, 6, 2) }).map((q) => q.key);
    expect(otherDay).not.toEqual(today);
  });

  it("ne produit jamais de doublon, y compris entre les dues et le complément", () => {
    const keys = daily().map((q) => q.key);
    expect(new Set(keys).size).toBe(keys.length);
  });

  it("se contente du vivier disponible quand il est plus petit que le défi", () => {
    expect(daily({ allQuestions: POOL.slice(0, 2) })).toHaveLength(2);
  });

  it("rend un tableau vide sans catalogue, sans lever d'exception", () => {
    expect(daily({ allQuestions: [] })).toEqual([]);
  });

  it("ignore les échéances futures : seules les questions réellement dues passent devant", () => {
    const notYetDue: Record<string, QuestionStat> = {
      [POOL[3].key]: stat({ correct: 1, box: 1, dueDate: "2026-12-31" }),
    };
    const keys = daily({ stats: notYetDue }).map((q) => q.key);
    // Rien n'est dû : le défi est un pur tirage du jour, identique à celui obtenu sans statistique.
    expect(keys).toEqual(daily({ stats: {} }).map((q) => q.key));
  });
});

describe("computeCauris — Défi du jour", () => {
  it("n'accorde ni bonus de vitesse ni bonus de vies : le défi n'a ni chrono ni vies", () => {
    expect(
      computeCauris({
        mode: "defi",
        correctCount: 4,
        bestStreak: 0,
        fastAnswers: 4,
        remainingLives: 3,
      }),
    ).toBe(4 * CAURIS_PER_CORRECT);
  });

  it("conserve le bonus de série", () => {
    expect(
      computeCauris({
        mode: "defi",
        correctCount: 3,
        bestStreak: 3,
        fastAnswers: 0,
        remainingLives: 0,
      }),
    ).toBe(3 * CAURIS_PER_CORRECT + CAURIS_STREAK_BONUS);
  });
});
