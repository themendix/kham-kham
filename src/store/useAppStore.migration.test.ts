import { describe, expect, it } from "vitest";
import { migrate } from "@/store/useAppStore";
import { getLevelInfo } from "@/lib/gamification";
import type { UserProgress } from "@/types";

/**
 * Ces tests couvrent la chaîne de migration du store (`migrate`, extrait de `persist({...})`
 * dans useAppStore.ts). C'est le point le plus critique du projet : la progression utilisateur
 * ne vit que dans localStorage, sans back-end ni sauvegarde — une migration défaillante détruit
 * des données sans recours.
 *
 * Chaque blob ci-dessous représente un utilisateur ayant réellement progressé, figé dans la
 * forme exacte d'une version historique du store (voir CLAUDE.md pour la reconstitution de la
 * chaîne v1→v8). `migrate` ignore son paramètre de version : une seule fonction, indifférente à
 * l'origine du blob, ramène n'importe quelle version passée à la forme v8 — les blobs ci-dessous
 * vérifient que c'est vrai pour chacune d'entre elles.
 */

// Les deux cours de "parcours-racines-civilisations" (src/data/parcours.ts), utilisés pour
// vérifier le rattrapage rétroactif de complétion de parcours (xpReward 120).
const PARCOURS_COURSE_A = "course-histoire-05-empire-du-ghana";
const PARCOURS_COURSE_B = "course-trad-griots-sagesses";
const PARCOURS_ID = "parcours-racines-civilisations";
const PARCOURS_XP_REWARD = 120;

function assertCoherentLevelAndRank(progress: UserProgress) {
  const expected = getLevelInfo(progress.xp);
  expect(progress.level).toBe(expected.level);
  expect(progress.rank).toBe(expected.rank);
}

function assertNoOrphanArrays(progress: UserProgress) {
  expect(Array.isArray(progress.completedCourseIds)).toBe(true);
  expect(Array.isArray(progress.completedParcoursIds)).toBe(true);
  expect(Array.isArray(progress.favoriteCourseIds)).toBe(true);
  expect(Array.isArray(progress.dismissedCourseIds)).toBe(true);
  expect(Array.isArray(progress.favoriteCourseIds)).toBe(true);
  expect(Array.isArray(progress.quizResults)).toBe(true);
  expect(Array.isArray(progress.startedCourseIds)).toBe(true);
  expect(Array.isArray(progress.completedLessonIds)).toBe(true);
}

describe("migrate — blob v1 (Fondations)", () => {
  function v1Blob() {
    return {
      progress: {
        xp: 550,
        level: 2,
        rank: "Éveillé",
        streak: {
          count: 4,
          lastActiveDate: "2026-03-01",
          weekDays: [true, true, true, true, false, false, false],
        },
        completedCourseIds: [PARCOURS_COURSE_A, PARCOURS_COURSE_B],
        favoriteIds: [PARCOURS_COURSE_A, "card-savane-1"],
        seenCardIds: ["card-savane-1", "card-savane-2", "card-savane-3"],
        masteryByCategory: { histoire: 60, trad: 45 },
        quizResults: [
          { courseId: PARCOURS_COURSE_A, score: 4, total: 5, date: "2026-03-01T10:00:00.000Z" },
        ],
      },
    };
  }

  it("ne perd aucun champ existant", () => {
    const { progress } = migrate(v1Blob());
    expect(progress.streak).toEqual(v1Blob().progress.streak);
    expect(progress.completedCourseIds).toEqual([PARCOURS_COURSE_A, PARCOURS_COURSE_B]);
    expect(progress.quizResults).toEqual(v1Blob().progress.quizResults);
  });

  it("remonte les anciens favoris vers des cours et abandonne les cartes supprimées", () => {
    // v1 mélangeait cours et cartes dans `favoriteIds` ; la v5 avait tout déversé dans
    // `favoriteCardIds` sans trier, laissant les cours favoris invisibles. La v9 les récupère,
    // et laisse tomber les id de cartes éditoriales, qui ne désignent plus rien.
    const { progress } = migrate(v1Blob());
    expect(progress.favoriteCourseIds).toEqual([PARCOURS_COURSE_A]);
  });

  it("retire masteryByCategory et seenCardIds", () => {
    const { progress } = migrate(v1Blob()) as unknown as { [key: string]: unknown };
    expect(progress).not.toHaveProperty("masteryByCategory");
    expect(progress).not.toHaveProperty("seenCardIds");
  });

  it("backfille les champs ajoutés depuis (v2→v6) avec les bons défauts", () => {
    const { progress } = migrate(v1Blob());
    expect(progress.daily).toEqual({ date: null, lessonsLearned: 0, xpEarned: 0, challengeDone: false });
    expect(progress.lastCourseId).toBeNull();
    expect(progress.totalLessonsLearned).toBe(0);
    expect(progress.startedCourseIds).toEqual([]);
    expect(progress.completedLessonIds).toEqual([]);
    expect(progress.featuredLessonKey).toBeNull();
  });

  it("rattrape rétroactivement le parcours déjà complet et crédite son XP une fois", () => {
    const { progress } = migrate(v1Blob());
    expect(progress.completedParcoursIds).toEqual([PARCOURS_ID]);
    expect(progress.xp).toBe(550 + PARCOURS_XP_REWARD);
  });

  it("produit un niveau/rang cohérents avec l'XP recalculé", () => {
    const { progress } = migrate(v1Blob());
    assertCoherentLevelAndRank(progress);
  });
});

describe("migrate — blob v2 (Home tableau de bord : daily, lastCourseId, totalCardsLearned)", () => {
  function v2Blob() {
    return {
      progress: {
        xp: 600,
        level: 2,
        rank: "Éveillé",
        streak: { count: 6, lastActiveDate: "2026-03-05", weekDays: Array(7).fill(true) },
        completedCourseIds: [PARCOURS_COURSE_A],
        favoriteIds: [PARCOURS_COURSE_A],
        seenCardIds: ["card-savane-1"],
        masteryByCategory: { histoire: 60 },
        quizResults: [],
        daily: { date: "2026-03-05", lessonsLearned: 3, xpEarned: 30, challengeDone: true },
        lastCourseId: PARCOURS_COURSE_A,
        totalLessonsLearned: 12,
      },
    };
  }

  it("préserve daily, lastCourseId et totalCardsLearned tels quels", () => {
    const { progress } = migrate(v2Blob());
    expect(progress.daily).toEqual({ date: "2026-03-05", lessonsLearned: 3, xpEarned: 30, challengeDone: true });
    expect(progress.lastCourseId).toBe(PARCOURS_COURSE_A);
    expect(progress.totalLessonsLearned).toBe(12);
  });

  it("backfille les champs ajoutés depuis (v3→v6)", () => {
    const { progress } = migrate(v2Blob());
    expect(progress.startedCourseIds).toEqual([]);
    expect(progress.completedLessonIds).toEqual([]);
    expect(progress.featuredLessonKey).toBeNull();
    expect(progress.completedParcoursIds).toEqual([]);
  });

  it("ne complète aucun parcours (un seul des deux cours requis est terminé)", () => {
    const { progress } = migrate(v2Blob());
    expect(progress.completedParcoursIds).toEqual([]);
    expect(progress.xp).toBe(600);
  });
});

describe("migrate — blob v3 (Tableau de bord de matière : startedCourseIds)", () => {
  function v3Blob() {
    return {
      progress: {
        xp: 620,
        level: 2,
        rank: "Éveillé",
        streak: { count: 1, lastActiveDate: "2026-03-06", weekDays: Array(7).fill(false) },
        completedCourseIds: [PARCOURS_COURSE_A],
        favoriteIds: [],
        seenCardIds: [],
        masteryByCategory: {},
        quizResults: [],
        daily: { date: "2026-03-06", lessonsLearned: 1, xpEarned: 10, challengeDone: false },
        lastCourseId: PARCOURS_COURSE_A,
        totalLessonsLearned: 13,
        startedCourseIds: ["course-geographie-01-algerie"],
      },
    };
  }

  it("préserve startedCourseIds", () => {
    const { progress } = migrate(v3Blob());
    expect(progress.startedCourseIds).toEqual(["course-geographie-01-algerie"]);
  });

  it("backfille completedLessonIds, featuredLessonKey et completedParcoursIds", () => {
    const { progress } = migrate(v3Blob());
    expect(progress.completedLessonIds).toEqual([]);
    expect(progress.featuredLessonKey).toBeNull();
    expect(progress.completedParcoursIds).toEqual([]);
  });
});

describe("migrate — blob v4 (À la une : completedLessonIds, featuredLessonKey)", () => {
  function v4Blob() {
    return {
      progress: {
        xp: 630,
        level: 2,
        rank: "Éveillé",
        streak: { count: 2, lastActiveDate: "2026-03-07", weekDays: Array(7).fill(false) },
        completedCourseIds: [PARCOURS_COURSE_A],
        favoriteIds: [],
        seenCardIds: [],
        masteryByCategory: {},
        quizResults: [],
        daily: { date: "2026-03-07", lessonsLearned: 0, xpEarned: 0, challengeDone: false },
        lastCourseId: PARCOURS_COURSE_A,
        totalLessonsLearned: 13,
        startedCourseIds: ["course-geographie-01-algerie"],
        completedLessonIds: ["course-geographie-01-algerie:course-geographie-01-algerie-lesson-1"],
        featuredLessonKey: "course-geographie-01-algerie:course-geographie-01-algerie-lesson-1",
      },
    };
  }

  it("préserve completedLessonIds et featuredLessonKey", () => {
    const { progress } = migrate(v4Blob());
    expect(progress.completedLessonIds).toEqual([
      "course-geographie-01-algerie:course-geographie-01-algerie-lesson-1",
    ]);
    expect(progress.featuredLessonKey).toBe(
      "course-geographie-01-algerie:course-geographie-01-algerie-lesson-1",
    );
  });
});

describe("migrate — blob v5 (Favoris scindés : favoriteCardIds / favoriteCourseIds)", () => {
  function v5Blob() {
    return {
      progress: {
        xp: 640,
        level: 2,
        rank: "Éveillé",
        streak: { count: 3, lastActiveDate: "2026-03-08", weekDays: Array(7).fill(false) },
        completedCourseIds: [PARCOURS_COURSE_A],
        favoriteCardIds: ["card-savane-1"],
        favoriteCourseIds: [PARCOURS_COURSE_A],
        seenCardIds: [],
        masteryByCategory: {},
        quizResults: [],
        daily: { date: "2026-03-08", lessonsLearned: 0, xpEarned: 0, challengeDone: false },
        lastCourseId: PARCOURS_COURSE_A,
        totalLessonsLearned: 13,
        startedCourseIds: ["course-geographie-01-algerie"],
        completedLessonIds: [],
        featuredLessonKey: null,
      },
    };
  }

  it("conserve les cours favoris et laisse tomber la carte éditoriale supprimée", () => {
    const { progress } = migrate(v5Blob());
    expect(progress.favoriteCourseIds).toEqual([PARCOURS_COURSE_A]);
  });

  it("backfille completedParcoursIds à vide", () => {
    const { progress } = migrate(v5Blob());
    expect(progress.completedParcoursIds).toEqual([]);
  });
});

describe("migrate — blob v6 (completedParcoursIds déjà présent)", () => {
  function v6Blob() {
    return {
      progress: {
        xp: 640 + PARCOURS_XP_REWARD,
        level: 2,
        rank: "Éveillé",
        streak: { count: 5, lastActiveDate: "2026-03-10", weekDays: Array(7).fill(false) },
        completedCourseIds: [PARCOURS_COURSE_A, PARCOURS_COURSE_B],
        completedParcoursIds: [PARCOURS_ID],
        favoriteCardIds: ["card-savane-1"],
        favoriteCourseIds: [PARCOURS_COURSE_A],
        seenCardIds: ["card-savane-1"],
        masteryByCategory: { histoire: 100, trad: 100 },
        quizResults: [
          { courseId: PARCOURS_COURSE_B, score: 5, total: 5, date: "2026-03-10T09:00:00.000Z" },
        ],
        daily: { date: "2026-03-10", lessonsLearned: 2, xpEarned: 20, challengeDone: true },
        lastCourseId: PARCOURS_COURSE_B,
        totalLessonsLearned: 15,
        startedCourseIds: ["course-geographie-01-algerie"],
        completedLessonIds: ["course-geographie-01-algerie:course-geographie-01-algerie-lesson-1"],
        featuredLessonKey: "course-geographie-01-algerie:course-geographie-01-algerie-lesson-1",
      },
    };
  }

  it("ne recrédite pas l'XP du parcours déjà marqué complet (idempotence du rattrapage rétroactif)", () => {
    const before = v6Blob().progress.xp;
    const { progress } = migrate(v6Blob());
    expect(progress.xp).toBe(before);
    expect(progress.completedParcoursIds).toEqual([PARCOURS_ID]);
  });

  it("retire masteryByCategory et seenCardIds sans toucher au reste", () => {
    const { progress } = migrate(v6Blob()) as unknown as { [key: string]: unknown };
    expect(progress).not.toHaveProperty("masteryByCategory");
    expect(progress).not.toHaveProperty("seenCardIds");
    expect((progress as unknown as UserProgress).quizResults).toEqual(v6Blob().progress.quizResults);
  });

  it("est stable si rejoué une seconde fois (déjà migré → aucun changement)", () => {
    const once = migrate(v6Blob());
    const twice = migrate(once);
    expect(twice).toEqual(once);
  });
});

describe("migrate — blob v7 (dernière version avant le module Quiz)", () => {
  function v7Blob() {
    return {
      progress: {
        xp: 640 + PARCOURS_XP_REWARD,
        level: 2,
        rank: "Éveillé",
        streak: { count: 5, lastActiveDate: "2026-03-10", weekDays: Array(7).fill(false) },
        completedCourseIds: [PARCOURS_COURSE_A, PARCOURS_COURSE_B],
        completedParcoursIds: [PARCOURS_ID],
        favoriteCardIds: ["card-savane-1"],
        favoriteCourseIds: [PARCOURS_COURSE_A],
        quizResults: [
          { courseId: PARCOURS_COURSE_B, score: 5, total: 5, date: "2026-03-10T09:00:00.000Z" },
        ],
        daily: { date: "2026-03-10", lessonsLearned: 2, xpEarned: 20, challengeDone: true },
        lastCourseId: PARCOURS_COURSE_B,
        totalLessonsLearned: 15,
        startedCourseIds: ["course-geographie-01-algerie"],
        completedLessonIds: ["course-geographie-01-algerie:course-geographie-01-algerie-lesson-1"],
        featuredLessonKey: "course-geographie-01-algerie:course-geographie-01-algerie-lesson-1",
      },
    };
  }

  it("backfille quizGame à vide sans toucher au reste de la progression", () => {
    const { progress } = migrate(v7Blob());
    expect(progress.quizGame).toEqual({ cauris: 0, questions: {}, records: {}, gamesPlayed: 0 });
    expect(progress.xp).toBe(v7Blob().progress.xp);
    expect(progress.completedLessonIds).toEqual(v7Blob().progress.completedLessonIds);
  });

  it("ne crédite aucun cauris ni aucune XP au passage en v8", () => {
    const { progress } = migrate(v7Blob());
    expect(progress.quizGame.cauris).toBe(0);
    expect(progress.quizGame.gamesPlayed).toBe(0);
    expect(progress.xp).toBe(v7Blob().progress.xp);
  });

  it("est stable si rejoué une seconde fois", () => {
    const once = migrate(v7Blob());
    expect(migrate(once)).toEqual(once);
  });
});

describe("migrate — blob v8 (module Quiz déjà joué)", () => {
  const QUESTION_KEY = "course-histoire-05-empire-du-ghana:quiz-histoire-05-1";

  function v8Blob(quizGame: unknown) {
    return {
      progress: {
        xp: 900,
        level: 2,
        rank: "Éveillé",
        streak: { count: 5, lastActiveDate: "2026-03-10", weekDays: Array(7).fill(false) },
        completedCourseIds: [],
        completedParcoursIds: [],
        favoriteCardIds: [],
        favoriteCourseIds: [],
        quizResults: [],
        daily: { date: "2026-03-10", lessonsLearned: 0, xpEarned: 0, challengeDone: false },
        lastCourseId: null,
        totalLessonsLearned: 0,
        startedCourseIds: [],
        completedLessonIds: [],
        featuredLessonKey: null,
        quizGame,
      },
    };
  }

  const played = {
    cauris: 340,
    questions: { [QUESTION_KEY]: { correct: 2, wrong: 1, box: 2, dueDate: "2026-03-22" } },
    records: { ouest: { blitz: 14, survie: 9 } },
    gamesPlayed: 7,
  };

  it("préserve intégralement un état de jeu existant", () => {
    const { progress } = migrate(v8Blob(played));
    expect(progress.quizGame).toEqual(played);
  });

  it("complète champ par champ un quizGame partiel plutôt que de le remettre à zéro", () => {
    // Un blob tronqué (écriture interrompue, édition manuelle du localStorage) doit conserver
    // ce qui est lisible — perdre les cauris d'un joueur parce que `records` manque serait pire
    // que le trou lui-même.
    const { progress } = migrate(v8Blob({ cauris: 120, gamesPlayed: 3 }));
    expect(progress.quizGame).toEqual({
      cauris: 120,
      questions: {},
      records: {},
      gamesPlayed: 3,
    });
  });

  it("tolère un quizGame null ou d'un type inattendu", () => {
    expect(migrate(v8Blob(null)).progress.quizGame).toEqual({
      cauris: 0,
      questions: {},
      records: {},
      gamesPlayed: 0,
    });
  });

  it("est stable si rejoué une seconde fois", () => {
    const once = migrate(v8Blob(played));
    expect(migrate(once)).toEqual(once);
  });
});

describe("migrate — cas dégradés", () => {
  it("blob absent (undefined) → progression initiale, pas d'écran blanc", () => {
    const { progress } = migrate(undefined);
    expect(progress.xp).toBe(0);
    expect(progress.level).toBe(1);
    assertNoOrphanArrays(progress);
  });

  it("blob null → progression initiale", () => {
    const { progress } = migrate(null);
    expect(progress.xp).toBe(0);
    assertNoOrphanArrays(progress);
  });

  it("blob sans clé progress ({}) → progression initiale", () => {
    const { progress } = migrate({});
    expect(progress.xp).toBe(0);
    assertNoOrphanArrays(progress);
  });

  it("progress: null → progression initiale", () => {
    const { progress } = migrate({ progress: null });
    expect(progress.xp).toBe(0);
    assertNoOrphanArrays(progress);
  });

  it("progress: {} (partiel extrême) → toutes les valeurs par défaut, pas de crash", () => {
    const { progress } = migrate({ progress: {} });
    expect(progress.xp).toBe(0);
    expect(progress.level).toBe(1);
    expect(progress.rank).toBe("Curieux");
    assertNoOrphanArrays(progress);
    assertCoherentLevelAndRank(progress);
  });

  it("blob partiel (un seul champ xp) → xp préservé, reste par défaut", () => {
    const { progress } = migrate({ progress: { xp: 500 } });
    expect(progress.xp).toBe(500);
    expect(progress.completedCourseIds).toEqual([]);
    assertCoherentLevelAndRank(progress);
  });

  it("version inconnue supérieure (champs futurs non reconnus) → ne perd rien de connu, ne plante pas", () => {
    const futureBlob = {
      progress: {
        xp: 5000,
        completedCourseIds: [PARCOURS_COURSE_A],
        favoriteCardIds: ["card-x"],
        favoriteCourseIds: [],
        completedParcoursIds: [],
        quizResults: [],
        startedCourseIds: [],
        completedLessonIds: [],
        featuredLessonKey: null,
        daily: { date: null, lessonsLearned: 0, xpEarned: 0, challengeDone: false },
        lastCourseId: null,
        totalLessonsLearned: 0,
        streak: { count: 0, lastActiveDate: null, weekDays: Array(7).fill(false) },
        unknownFutureField: { some: "shape from a version that does not exist yet" },
      },
    };
    expect(() => migrate(futureBlob)).not.toThrow();
    const { progress } = migrate(futureBlob);
    expect(progress.completedCourseIds).toEqual([PARCOURS_COURSE_A]);
    assertCoherentLevelAndRank(progress);
  });
});
