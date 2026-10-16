import { describe, expect, it } from "vitest";
import { getCourseImagePosition } from "@/lib/courseImages";

describe("getCourseImagePosition", () => {
  it("cadre à gauche les cours de Géographie dont le drapeau est à gauche", () => {
    expect(getCourseImagePosition("course-geographie-27-rd-congo")).toBe("left");
  });

  it("centre les illustrations de Personnalités, sans drapeau à préserver", () => {
    expect(getCourseImagePosition("course-perso-01-hatchepsout")).toBe("center");
  });

  it("cadre à droite par défaut (Histoire, et Géographie hors liste des drapeaux à gauche)", () => {
    expect(getCourseImagePosition("course-geographie-01-algerie")).toBe("right");
    expect(getCourseImagePosition("course-histoire-01-egypte-antique")).toBe("right");
  });
});
