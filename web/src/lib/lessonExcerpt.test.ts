import { describe, expect, it } from "vitest";
import type { LessonBlock } from "@/lib/lessonBlocks";
import { lessonExcerpt } from "@/lib/lessonExcerpt";

const blocks: LessonBlock[] = [
  { type: "chiffreCle", valeur: "1235", legende: "la bataille de Kirina" },
  {
    type: "paragraphe",
    text: "Le **Sahel** est une bande de savane. Elle relie l'Atlantique à la mer Rouge. Les caravanes la traversaient. Une quatrième phrase de trop.",
  },
  {
    type: "paragraphe",
    text: "Soundiata Keïta fonde l'empire du Mali vers 1235. Il unifie les royaumes mandingues.",
  },
  { type: "aRetenir", points: ["Kirina, vers 1235."] },
];

describe("lessonExcerpt", () => {
  it("retient le premier paragraphe, sans balisage, plafonné à trois phrases", () => {
    expect(lessonExcerpt(blocks)).toBe(
      "Le Sahel est une bande de savane. Elle relie l'Atlantique à la mer Rouge. Les caravanes la traversaient.",
    );
  });

  it("privilégie le paragraphe qui cite la bonne réponse, accents et casse ignorés", () => {
    expect(lessonExcerpt(blocks, { around: "empire du mali" })).toBe(
      "Soundiata Keïta fonde l'empire du Mali vers 1235. Il unifie les royaumes mandingues.",
    );
    expect(lessonExcerpt(blocks, { around: "Soundiata Keita" })).toContain("Soundiata Keïta");
  });

  it("retombe sur le premier paragraphe quand la réponse n'est citée nulle part", () => {
    expect(lessonExcerpt(blocks, { around: "Koumbi Saleh" })).toContain("Le Sahel");
  });

  it("ne coupe pas sur une abréviation", () => {
    const abrege: LessonBlock[] = [
      { type: "paragraphe", text: "Le règne commence en 3100 av. J.-C. environ." },
    ];
    expect(lessonExcerpt(abrege, { maxSentences: 1 })).toBe(
      "Le règne commence en 3100 av. J.-C. environ.",
    );
  });

  it("rend une chaîne vide sans paragraphe", () => {
    expect(lessonExcerpt([{ type: "aRetenir", points: ["Rien à extraire."] }])).toBe("");
  });
});
