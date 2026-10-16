import { describe, expect, it } from "vitest";
import { getCourseCoverLayout, getCourseCoverPosition, getCourseImagePosition } from "@/lib/courseImages";

describe("getCourseImagePosition", () => {
  it("cadre à gauche les cours de Géographie dont le drapeau est à gauche", () => {
    expect(getCourseImagePosition("course-geographie-27-rd-congo")).toBe("left");
  });

  it("centre les illustrations de Personnalités, sans drapeau à préserver", () => {
    expect(getCourseImagePosition("course-perso-01-hatchepsout")).toBe("center");
  });

  it("conserve le cadrage à droite du pharaon et des drapeaux concernés", () => {
    expect(getCourseImagePosition("course-geographie-01-algerie")).toBe("right");
    expect(getCourseImagePosition("course-histoire-01-egypte-antique")).toBe("right");
  });
});

describe("visages des couvertures d'Histoire", () => {
  // Rectangles des visages relevés sur les variantes 400 × 268 des couvertures.
  const portraits = [
    ["course-histoire-27-bataille-adoua", [102, 86, 126, 119]],
    ["course-histoire-30-apartheid-mandela", [164, 65, 212, 124]],
    ["course-histoire-06-soundiata-mali", [110, 24, 138, 64]],
    ["course-histoire-07-mansa-moussa", [300, 61, 327, 115]],
    ["course-histoire-35-lat-dior-cayor", [86, 53, 111, 84]],
    ["course-histoire-37-aline-sitoe-diatta", [259, 44, 287, 85]],
    ["course-histoire-38-senghor-negritude-independance", [181, 25, 230, 99]],
    ["course-histoire-39-reine-nzinga-angola", [143, 43, 176, 90]],
    ["course-histoire-40-chaka-zoulou", [135, 39, 164, 91]],
  ] as const;

  it.each(portraits)("préserve le visage de %s en cartes verticales et larges", (id, face) => {
    for (const [width, height] of [[148, 220], [170, 220], [328, 220], [520, 280]]) {
      const layout = getCourseCoverLayout(id, 400, 268, width, height);
      const scale = layout.width / 400;
      expect(layout.left + face[0] * scale).toBeGreaterThanOrEqual(0);
      expect(layout.top + face[1] * scale).toBeGreaterThanOrEqual(0);
      expect(layout.left + face[2] * scale).toBeLessThanOrEqual(width);
      expect(layout.top + face[3] * scale).toBeLessThanOrEqual(height);
      expect(layout.left).toBeLessThanOrEqual(0);
      expect(layout.top).toBeLessThanOrEqual(0);
      expect(layout.left + layout.width).toBeGreaterThanOrEqual(width - 0.001);
      expect(layout.top + layout.height).toBeGreaterThanOrEqual(height - 0.001);
      expect(layout.width / layout.height).toBeCloseTo(400 / 268);
    }
  });

  it.each([
    ["course-histoire-04-carthage-afrique-du-nord", 0.17, 0.16],
    ["course-histoire-07-mansa-moussa", 0.19, 0.19],
    ["course-histoire-08-empire-songhai", 0.04, 0.04],
  ] as const)("exclut les bandes de papier de %s du cadre", (id, topMargin, bottomMargin) => {
    for (const [width, height] of [[148, 220], [328, 220], [520, 280]]) {
      const layout = getCourseCoverLayout(id, 400, 268, width, height);
      expect(layout.top + topMargin * layout.height).toBeLessThanOrEqual(0.001);
      expect(layout.top + (1 - bottomMargin) * layout.height).toBeGreaterThanOrEqual(height - 0.001);
    }
  });

  it("préserve le cadrage existant des autres matières", () => {
    expect(getCourseCoverPosition("course-geographie-27-rd-congo")).toBe("left");
    expect(getCourseCoverPosition("course-geographie-01-algerie")).toBe("right");
    expect(getCourseCoverPosition("course-perso-01-hatchepsout")).toBe("center");
  });
});
