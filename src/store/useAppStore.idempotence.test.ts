import { beforeEach, describe, expect, it } from "vitest";
import { migrate, useAppStore } from "@/store/useAppStore";
import { XP_PER_LESSON } from "@/lib/gamification";
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

describe("toggleFavoriteCard / toggleFavoriteCourse — toggle propre", () => {
  it("toggleFavoriteCard appelé deux fois revient à l'état initial, sans doublon intermédiaire", () => {
    useAppStore.getState().toggleFavoriteCard("card-1");
    expect(useAppStore.getState().progress.favoriteCardIds).toEqual(["card-1"]);
    useAppStore.getState().toggleFavoriteCard("card-1");
    expect(useAppStore.getState().progress.favoriteCardIds).toEqual([]);
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
