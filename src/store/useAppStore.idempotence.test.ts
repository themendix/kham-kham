import { beforeEach, describe, expect, it } from "vitest";
import { migrate, useAppStore } from "@/store/useAppStore";
import { getLevelInfo, XP_PER_LESSON, XP_PER_QUESTION_LEARNED } from "@/lib/gamification";
import type { QuizResult } from "@/types";

const LESSON_COURSE_ID = "course-perso-voix-plumes-afrique";
const LESSON_ID = "lesson-perso-pionniers-nobel";

const PARCOURS_COURSE_A = "course-histoire-05-empire-du-ghana"; // xp 70
const PARCOURS_COURSE_B = "course-trad-griots-sagesses"; // xp 50
const PARCOURS_ID = "parcours-racines-civilisations";
const PARCOURS_XP_REWARD = 120;

/** Réinitialise la progression à son état par défaut sans toucher aux actions du store. */
function resetProgress() {
  useAppStore.setState({ progress: migrate(undefined).progress });
}

beforeEach(() => {
  resetProgress();
});

describe("completeLesson — idempotence", () => {
  it("ne crédite l'XP qu'une seule fois pour deux appels sur la même leçon", () => {
    useAppStore.getState().completeLesson(LESSON_COURSE_ID, LESSON_ID);
    const xpAfterFirst = useAppStore.getState().progress.xp;
    useAppStore.getState().completeLesson(LESSON_COURSE_ID, LESSON_ID);
    const xpAfterSecond = useAppStore.getState().progress.xp;

    expect(xpAfterFirst).toBe(XP_PER_LESSON);
    expect(xpAfterSecond).toBe(XP_PER_LESSON);
  });

  it("n'ajoute qu'une seule entrée dans completedLessonIds", () => {
    useAppStore.getState().completeLesson(LESSON_COURSE_ID, LESSON_ID);
    useAppStore.getState().completeLesson(LESSON_COURSE_ID, LESSON_ID);
    const { completedLessonIds } = useAppStore.getState().progress;
    expect(completedLessonIds.filter((k) => k === `${LESSON_COURSE_ID}:${LESSON_ID}`)).toHaveLength(1);
  });

  it("ne marque le cours « commencé » qu'une seule fois", () => {
    useAppStore.getState().completeLesson(LESSON_COURSE_ID, LESSON_ID);
    useAppStore.getState().completeLesson(LESSON_COURSE_ID, LESSON_ID);
    const { startedCourseIds } = useAppStore.getState().progress;
    expect(startedCourseIds.filter((id) => id === LESSON_COURSE_ID)).toHaveLength(1);
  });
});

describe("completeCourse — idempotence", () => {
  it("ne crédite l'XP qu'une seule fois pour deux appels sur le même cours", () => {
    useAppStore.getState().completeCourse(LESSON_COURSE_ID, 50);
    const xpAfterFirst = useAppStore.getState().progress.xp;
    useAppStore.getState().completeCourse(LESSON_COURSE_ID, 50);
    const xpAfterSecond = useAppStore.getState().progress.xp;

    expect(xpAfterFirst).toBe(50);
    expect(xpAfterSecond).toBe(50);
  });

  it("n'ajoute qu'une seule entrée dans completedCourseIds", () => {
    useAppStore.getState().completeCourse(LESSON_COURSE_ID, 50);
    useAppStore.getState().completeCourse(LESSON_COURSE_ID, 50);
    const { completedCourseIds } = useAppStore.getState().progress;
    expect(completedCourseIds.filter((id) => id === LESSON_COURSE_ID)).toHaveLength(1);
  });

  it("crédite l'XP du parcours une seule fois, même si le cours qui le complète est validé deux fois", () => {
    useAppStore.getState().completeCourse(PARCOURS_COURSE_A, 70);
    useAppStore.getState().completeCourse(PARCOURS_COURSE_B, 50);
    const xpAfterCompletion = useAppStore.getState().progress.xp;
    expect(xpAfterCompletion).toBe(70 + 50 + PARCOURS_XP_REWARD);
    expect(useAppStore.getState().progress.completedParcoursIds).toEqual([PARCOURS_ID]);

    // Rejoue la complétion du second cours (déjà acquis) : ne doit rien recréditer.
    useAppStore.getState().completeCourse(PARCOURS_COURSE_B, 50);
    expect(useAppStore.getState().progress.xp).toBe(xpAfterCompletion);
    expect(useAppStore.getState().progress.completedParcoursIds).toEqual([PARCOURS_ID]);
  });
});

describe("markCourseStarted — idempotence", () => {
  it("n'ajoute qu'une seule entrée pour deux appels sur le même cours", () => {
    useAppStore.getState().markCourseStarted(LESSON_COURSE_ID);
    useAppStore.getState().markCourseStarted(LESSON_COURSE_ID);
    const { startedCourseIds } = useAppStore.getState().progress;
    expect(startedCourseIds.filter((id) => id === LESSON_COURSE_ID)).toHaveLength(1);
  });
});

describe("dismissCourse / toggleFavoriteCourse", () => {
  it("dismissCourse est idempotent : deux appels n'ajoutent qu'une entrée", () => {
    useAppStore.getState().dismissCourse("cours-1");
    useAppStore.getState().dismissCourse("cours-1");
    expect(useAppStore.getState().progress.dismissedCourseIds).toEqual(["cours-1"]);
  });

  it("écarter un cours ne le met pas en favori, et n'accorde aucune XP", () => {
    useAppStore.getState().dismissCourse("cours-1");
    const { progress } = useAppStore.getState();
    expect(progress.favoriteCourseIds).toEqual([]);
    expect(progress.xp).toBe(0);
  });

  it("toggleFavoriteCourse appelé deux fois revient à l'état initial, sans doublon intermédiaire", () => {
    useAppStore.getState().toggleFavoriteCourse(LESSON_COURSE_ID);
    expect(useAppStore.getState().progress.favoriteCourseIds).toEqual([LESSON_COURSE_ID]);
    useAppStore.getState().toggleFavoriteCourse(LESSON_COURSE_ID);
    expect(useAppStore.getState().progress.favoriteCourseIds).toEqual([]);
  });
});

describe("recordQuizResult — plafond des 10 tentatives les plus récentes", () => {
  it("ne conserve que les 10 résultats les plus récents, dans l'ordre", () => {
    for (let i = 0; i < 12; i++) {
      const result: QuizResult = {
        courseId: LESSON_COURSE_ID,
        score: i % 5,
        total: 5,
        date: `2026-03-${String(i + 1).padStart(2, "0")}T10:00:00.000Z`,
      };
      useAppStore.getState().recordQuizResult(result);
    }
    const { quizResults } = useAppStore.getState().progress;
    expect(quizResults).toHaveLength(10);
    // Les deux premières tentatives (i=0 et i=1) doivent avoir été évincées.
    expect(quizResults[0].date).toBe("2026-03-03T10:00:00.000Z");
    expect(quizResults[9].date).toBe("2026-03-12T10:00:00.000Z");
  });
});

describe("recordQuizAnswer — XP bornée à la deuxième réussite", () => {
  const KEY = "course-histoire-05-empire-du-ghana:quiz-histoire-05-1";
  const OTHER_KEY = "course-histoire-05-empire-du-ghana:quiz-histoire-05-2";

  it("ne crédite rien à la première bonne réponse — elle peut n'être qu'un coup de chance", () => {
    useAppStore.getState().recordQuizAnswer(KEY, true);
    expect(useAppStore.getState().progress.xp).toBe(0);
    expect(useAppStore.getState().progress.quizGame.questions[KEY].correct).toBe(1);
  });

  it("crédite XP_PER_QUESTION_LEARNED à la deuxième réussite", () => {
    useAppStore.getState().recordQuizAnswer(KEY, true);
    useAppStore.getState().recordQuizAnswer(KEY, true);
    expect(useAppStore.getState().progress.xp).toBe(XP_PER_QUESTION_LEARNED);
  });

  it("ne recrédite rien aux réussites suivantes", () => {
    for (let i = 0; i < 5; i++) useAppStore.getState().recordQuizAnswer(KEY, true);
    expect(useAppStore.getState().progress.xp).toBe(XP_PER_QUESTION_LEARNED);
    expect(useAppStore.getState().progress.quizGame.questions[KEY].correct).toBe(5);
  });

  it("un échec intercalé ne fait pas repayer la question", () => {
    // 1re réussite (rien), échec, 2e réussite (créditée), 3e réussite (rien).
    useAppStore.getState().recordQuizAnswer(KEY, true);
    useAppStore.getState().recordQuizAnswer(KEY, false);
    useAppStore.getState().recordQuizAnswer(KEY, true);
    useAppStore.getState().recordQuizAnswer(KEY, true);
    expect(useAppStore.getState().progress.xp).toBe(XP_PER_QUESTION_LEARNED);
  });

  it("ne crédite aucune XP sur une mauvaise réponse", () => {
    useAppStore.getState().recordQuizAnswer(KEY, false);
    useAppStore.getState().recordQuizAnswer(KEY, false);
    expect(useAppStore.getState().progress.xp).toBe(0);
    expect(useAppStore.getState().progress.quizGame.questions[KEY].wrong).toBe(2);
  });

  it("crédite chaque question distincte une fois", () => {
    useAppStore.getState().recordQuizAnswer(KEY, true);
    useAppStore.getState().recordQuizAnswer(KEY, true);
    useAppStore.getState().recordQuizAnswer(OTHER_KEY, true);
    useAppStore.getState().recordQuizAnswer(OTHER_KEY, true);
    expect(useAppStore.getState().progress.xp).toBe(XP_PER_QUESTION_LEARNED * 2);
  });

  it("programme la révision de la question ratée", () => {
    useAppStore.getState().recordQuizAnswer(KEY, false);
    const stat = useAppStore.getState().progress.quizGame.questions[KEY];
    expect(stat.box).toBe(0);
    expect(stat.dueDate).not.toBeNull();
  });

  it("laisse le rang cohérent avec l'XP obtenu", () => {
    useAppStore.getState().recordQuizAnswer(KEY, true);
    useAppStore.getState().recordQuizAnswer(KEY, true);
    const { xp, level, rank } = useAppStore.getState().progress;
    const expected = getLevelInfo(xp);
    expect(level).toBe(expected.level);
    expect(rank).toBe(expected.rank);
  });

  it("n'accorde jamais de cauris : c'est la fin de partie qui les attribue", () => {
    useAppStore.getState().recordQuizAnswer(KEY, true);
    useAppStore.getState().recordQuizAnswer(KEY, true);
    expect(useAppStore.getState().progress.quizGame.cauris).toBe(0);
  });
});

describe("finishQuizGame — cauris et records", () => {
  it("crédite les cauris et incrémente le compteur de parties", () => {
    useAppStore.getState().finishQuizGame({ cauris: 60, record: { territoryId: "ouest", mode: "blitz", score: 12 } });
    useAppStore.getState().finishQuizGame({ cauris: 15, record: { territoryId: "ouest", mode: "blitz", score: 3 } });
    const { quizGame } = useAppStore.getState().progress;
    expect(quizGame.cauris).toBe(75);
    expect(quizGame.gamesPlayed).toBe(2);
  });

  it("enregistre le premier score comme record du territoire", () => {
    useAppStore.getState().finishQuizGame({ cauris: 40, record: { territoryId: "est", mode: "survie", score: 8 } });
    expect(useAppStore.getState().progress.quizGame.records.est).toEqual({ blitz: 0, survie: 8 });
  });

  it("ne remplace le record que si le nouveau score le bat strictement", () => {
    useAppStore.getState().finishQuizGame({ cauris: 0, record: { territoryId: "est", mode: "survie", score: 8 } });
    useAppStore.getState().finishQuizGame({ cauris: 0, record: { territoryId: "est", mode: "survie", score: 5 } });
    expect(useAppStore.getState().progress.quizGame.records.est.survie).toBe(8);
    useAppStore.getState().finishQuizGame({ cauris: 0, record: { territoryId: "est", mode: "survie", score: 11 } });
    expect(useAppStore.getState().progress.quizGame.records.est.survie).toBe(11);
  });

  it("garde les records des deux modes indépendants", () => {
    useAppStore.getState().finishQuizGame({ cauris: 0, record: { territoryId: "nord", mode: "blitz", score: 14 } });
    useAppStore.getState().finishQuizGame({ cauris: 0, record: { territoryId: "nord", mode: "survie", score: 4 } });
    expect(useAppStore.getState().progress.quizGame.records.nord).toEqual({ blitz: 14, survie: 4 });
  });

  it("garde les records de territoires différents séparés", () => {
    useAppStore.getState().finishQuizGame({ cauris: 0, record: { territoryId: "nord", mode: "blitz", score: 14 } });
    useAppStore.getState().finishQuizGame({ cauris: 0, record: { territoryId: "centrale", mode: "blitz", score: 6 } });
    const { records } = useAppStore.getState().progress.quizGame;
    expect(records.nord.blitz).toBe(14);
    expect(records.centrale.blitz).toBe(6);
  });

  it("crédite les cauris sans toucher aux records quand la partie n'a pas de territoire", () => {
    // C'est le cas du Défi du jour : il traverse tout le catalogue et n'appartient à aucun
    // territoire, mais il rapporte quand même des cauris et compte comme une partie jouée.
    useAppStore.getState().finishQuizGame({ cauris: 40, record: null });
    const { quizGame } = useAppStore.getState().progress;
    expect(quizGame.cauris).toBe(40);
    expect(quizGame.gamesPlayed).toBe(1);
    expect(quizGame.records).toEqual({});
  });

  it("ne touche ni à l'XP ni au rang — les cauris sont une monnaie séparée", () => {
    const before = useAppStore.getState().progress;
    useAppStore.getState().finishQuizGame({ cauris: 500, record: { territoryId: "ouest", mode: "blitz", score: 20 } });
    const after = useAppStore.getState().progress;
    expect(after.xp).toBe(before.xp);
    expect(after.level).toBe(before.level);
    expect(after.rank).toBe(before.rank);
  });
});
