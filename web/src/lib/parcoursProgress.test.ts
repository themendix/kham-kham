import { describe, expect, it } from "vitest";
import { getNewlyCompletedParcours } from "@/lib/parcoursProgress";
import type { Parcours } from "@/types";

const PARCOURS: Parcours[] = [
  {
    id: "parcours-1",
    title: "Parcours 1",
    description: "",
    emoji: "🏺",
    courseIds: ["c1", "c2"],
    xpReward: 100,
  },
  {
    id: "parcours-2",
    title: "Parcours 2",
    description: "",
    emoji: "🎤",
    courseIds: ["c3", "c4"],
    xpReward: 50,
  },
];

describe("getNewlyCompletedParcours", () => {
  it("détecte un parcours dont tous les cours viennent d'être terminés", () => {
    const result = getNewlyCompletedParcours(PARCOURS, ["c1", "c2"], []);
    expect(result.map((p) => p.id)).toEqual(["parcours-1"]);
  });

  it("ne détecte rien si un parcours n'est que partiellement terminé", () => {
    const result = getNewlyCompletedParcours(PARCOURS, ["c1"], []);
    expect(result).toEqual([]);
  });

  it("ne redéclenche pas un parcours déjà marqué complet (idempotence)", () => {
    const result = getNewlyCompletedParcours(PARCOURS, ["c1", "c2"], ["parcours-1"]);
    expect(result).toEqual([]);
  });

  it("peut détecter plusieurs parcours complétés simultanément", () => {
    const result = getNewlyCompletedParcours(PARCOURS, ["c1", "c2", "c3", "c4"], []);
    expect(result.map((p) => p.id).sort()).toEqual(["parcours-1", "parcours-2"]);
  });
});
