import { describe, expect, it } from "vitest";
import type { Course, LessonBlock } from "../src/types";
import { personalityTemplateIssues, PORTRAIT_POSTERITY_ALTERNATIVES } from "./personality-template";

function portrait(id = "nouveau-portrait", last: LessonBlock[] = [{ type: "citation", texte: "Parole attestée.", auteur: "Référence" }]): Course {
  return {
    id, categoryId: "perso", title: "Portrait", description: "", emoji: "", xp: 70, quiz: [],
    lessons: Array.from({ length: 5 }, (_, i) => ({
      id: `lecon-${i}`, title: "Leçon",
      blocks: i === 0 ? [{ type: "frise", evenements: [] }] : i === 4 ? last : [],
    })),
  };
}

describe("gabarit Personnalités", () => {
  it("exige le contexte chronologique même pour une alternative approuvée", () => {
    const course = portrait("course-perso-04-yennenga", [{ type: "reperes", items: [] }]);
    course.lessons[0].blocks = [];
    expect(personalityTemplateIssues(course)).toEqual([`${course.id} : leçon 1 sans frise`]);
  });
  it("autorise citation ou frise finale sans obliger une citation ailleurs", () => {
    expect(personalityTemplateIssues(portrait())).toEqual([]);
    expect(personalityTemplateIssues(portrait("sans-parole", [{ type: "frise", evenements: [] }]))).toEqual([]);
  });
  it("ne généralise pas les alternatives à de nouveaux portraits", () => {
    expect(personalityTemplateIssues(portrait("nouveau", [{ type: "reperes", items: [] }]))).toHaveLength(1);
  });
  it("refuse une autre alternative que celle approuvée pour le portrait", () => {
    expect(personalityTemplateIssues(portrait("course-perso-04-yennenga", [{ type: "chiffreCle", valeur: "1", legende: "Repère" }]))).toHaveLength(1);
    expect(personalityTemplateIssues(portrait("course-perso-08-nanny-marrons", [{ type: "reperes", items: [] }]))).toHaveLength(1);
  });
  it.each(Object.entries(PORTRAIT_POSTERITY_ALTERNATIVES))("conserve l'alternative de %s (%s)", (id, type) => {
    const block: LessonBlock = type === "reperes" ? { type, items: [] }
      : type === "chiffreCle" ? { type, valeur: "1975", legende: "Un repère" }
      : { type, alt: "Portrait", credit: "Licence conservée" };
    expect(personalityTemplateIssues(portrait(id, [block]))).toEqual([]);
    expect(personalityTemplateIssues(portrait(id, []))).toHaveLength(1);
    expect(personalityTemplateIssues(portrait(id, [{ type: "paragraphe", text: "Un paragraphe ne suffit pas." }]))).toHaveLength(1);
  });
  it("limite le gabarit thématique à l'anthologie identifiée et garde sa conclusion structurée", () => {
    const course = portrait("course-perso-voix-plumes-afrique", [{ type: "reperes", items: [] }]);
    course.lessons[0].blocks = [{ type: "paragraphe", text: "Plusieurs auteurs." }];
    expect(personalityTemplateIssues(course)).toEqual([]);
    course.lessons[4].blocks = [];
    expect(personalityTemplateIssues(course)).toHaveLength(1);
  });
  it("refuse un portrait tronqué", () => {
    const course = portrait();
    course.lessons.pop();
    expect(personalityTemplateIssues(course)).toHaveLength(2);
  });
});
