import { describe, expect, it } from "vitest";
import { lessonPlainText, lessonWordCount, parseInline, stripInlineMarkers, type LessonBlock } from "./lessonBlocks";

describe("parseInline", () => {
  it("renvoie un seul segment plat pour un texte sans gras", () => {
    expect(parseInline("Rien de gras ici.")).toEqual([{ text: "Rien de gras ici.", bold: false }]);
  });

  it("isole un unique passage en gras", () => {
    expect(parseInline("Vers **3100 av. J.-C.**, deux royaumes.")).toEqual([
      { text: "Vers ", bold: false },
      { text: "3100 av. J.-C.", bold: true },
      { text: ", deux royaumes.", bold: false },
    ]);
  });

  it("gère plusieurs passages en gras dans le même texte", () => {
    expect(parseInline("**Kemet** doit tout à **la crue**.")).toEqual([
      { text: "Kemet", bold: true },
      { text: " doit tout à ", bold: false },
      { text: "la crue", bold: true },
      { text: ".", bold: false },
    ]);
  });

  it("laisse les astérisques littérales quand le gras n'est pas fermé", () => {
    expect(parseInline("Un **gras non fermé.")).toEqual([{ text: "Un **gras non fermé.", bold: false }]);
  });

  it("ne plante pas sur une astérisque isolée", () => {
    expect(() => parseInline("Une * isolée.")).not.toThrow();
    expect(parseInline("Une * isolée.")).toEqual([{ text: "Une * isolée.", bold: false }]);
  });

  it("gère la chaîne vide", () => {
    expect(parseInline("")).toEqual([]);
  });
});

describe("stripInlineMarkers", () => {
  it("retire le balisage et conserve le texte", () => {
    expect(stripInlineMarkers("**Kemet**, la terre noire.")).toBe("Kemet, la terre noire.");
  });

  it("laisse un texte sans balisage inchangé", () => {
    expect(stripInlineMarkers("Sans balisage.")).toBe("Sans balisage.");
  });
});

describe("lessonPlainText", () => {
  it("concatène tous les types de blocs, balisage retiré", () => {
    const blocks: LessonBlock[] = [
      { type: "paragraphe", text: "Chaque été, le **Nil** débordait." },
      { type: "chiffreCle", valeur: "3100 av. J.-C.", legende: "l'unification de l'Égypte" },
      { type: "citation", texte: "Je suis venu, j'ai vu.", auteur: "Proverbe akan", date: "XVe siècle" },
      {
        type: "frise",
        unite: "av. J.-C.",
        evenements: [
          { date: "2700", texte: "Ancien Empire" },
          { date: "2050", texte: "Moyen Empire" },
        ],
      },
      { type: "reperes", items: [{ label: "Capitale", valeur: "Alger" }] },
      { type: "aRetenir", points: ["Kemet doit tout à la **crue**", "Unification vers **3100 av. J.-C.**"] },
      { type: "leSavaisTu", text: "Le désert s'appelait **Deshret**." },
      { type: "image", alt: "Portrait de Narmer", legende: "La palette de Narmer", credit: "Musée du Caire" },
    ];
    const text = lessonPlainText(blocks);
    expect(text).toContain("Chaque été, le Nil débordait.");
    expect(text).toContain("3100 av. J.-C.");
    expect(text).toContain("l'unification de l'Égypte");
    expect(text).toContain("Je suis venu, j'ai vu.");
    expect(text).toContain("Proverbe akan");
    expect(text).toContain("Ancien Empire");
    expect(text).toContain("Capitale");
    expect(text).toContain("Kemet doit tout à la crue");
    expect(text).toContain("Le désert s'appelait Deshret.");
    expect(text).toContain("Portrait de Narmer");
    expect(text).not.toContain("**");
  });

  it("renvoie une chaîne vide pour un tableau de blocs vide", () => {
    expect(lessonPlainText([])).toBe("");
  });

  it("normalise les espaces multiples", () => {
    const blocks: LessonBlock[] = [
      { type: "paragraphe", text: "Un   texte." },
      { type: "paragraphe", text: "Un autre." },
    ];
    expect(lessonPlainText(blocks)).toBe("Un texte. Un autre.");
  });
});

describe("lessonWordCount", () => {
  it("compte les mots visibles, balisage exclu", () => {
    const blocks: LessonBlock[] = [{ type: "paragraphe", text: "**Un** deux trois quatre cinq." }];
    expect(lessonWordCount(blocks)).toBe(5);
  });

  it("renvoie 0 pour un tableau de blocs vide", () => {
    expect(lessonWordCount([])).toBe(0);
  });

  it("compte à travers plusieurs types de blocs", () => {
    const blocks: LessonBlock[] = [
      { type: "paragraphe", text: "Trois mots ici." },
      { type: "aRetenir", points: ["Deux mots"] },
    ];
    expect(lessonWordCount(blocks)).toBe(5);
  });
});
