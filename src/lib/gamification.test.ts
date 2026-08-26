import { describe, expect, it } from "vitest";
import { getLevelInfo, updateStreak, LEVEL_TIERS, OPEN_LEVEL_STEP } from "@/lib/gamification";
import type { StreakState } from "@/types";

describe("getLevelInfo — paliers nommés", () => {
  it("renvoie le premier palier (Curieux) à 0 XP", () => {
    const info = getLevelInfo(0);
    expect(info).toMatchObject({ level: 1, rank: "Curieux", nextRank: "Éveillé" });
  });

  it("renvoie chaque palier nommé exactement à son seuil minXp", () => {
    for (const tier of LEVEL_TIERS) {
      const info = getLevelInfo(tier.minXp);
      expect(info.level).toBe(tier.level);
      expect(info.rank).toBe(tier.rank);
    }
  });

  it("n'atteint pas le rang maximal juste avant le seuil du catalogue complet", () => {
    const lastTier = LEVEL_TIERS[LEVEL_TIERS.length - 1];
    const info = getLevelInfo(lastTier.minXp - 1);
    expect(info.rank).not.toBe(lastTier.rank);
  });

  it("atteint le rang maximal exactement au seuil du catalogue complet, jamais avant", () => {
    const lastTier = LEVEL_TIERS[LEVEL_TIERS.length - 1];
    const info = getLevelInfo(lastTier.minXp);
    expect(info.rank).toBe(lastTier.rank);
    expect(info.nextRank).toBeNull();
  });
});

describe("getLevelInfo — niveaux ouverts au-delà du dernier rang nommé", () => {
  it("continue de monter en niveau numéroté sans plafond, rang figé sur le dernier rang nommé", () => {
    const lastTier = LEVEL_TIERS[LEVEL_TIERS.length - 1];
    const farBeyond = getLevelInfo(lastTier.minXp + 100_000);
    expect(farBeyond.level).toBeGreaterThan(lastTier.level);
    expect(farBeyond.rank).toBe(lastTier.rank);
    expect(farBeyond.nextRank).toBeNull();
  });

  it("franchit un niveau ouvert exactement à son seuil, pas avant", () => {
    const lastTier = LEVEL_TIERS[LEVEL_TIERS.length - 1];
    // Seuil du premier niveau ouvert = dernier palier nomme + OPEN_LEVEL_STEP. Derive de la
    // constante plutot qu'ecrit en dur : le bareme est recalibre a chaque chantier de contenu,
    // et ce test doit continuer a verifier la frontiere, pas une valeur d'epoque.
    const thresholdLevel6 = lastTier.minXp + OPEN_LEVEL_STEP;
    expect(getLevelInfo(thresholdLevel6 - 1).level).toBe(lastTier.level);
    expect(getLevelInfo(thresholdLevel6).level).toBe(lastTier.level + 1);
  });

  it("progression monotone : XP croissant n'entraîne jamais un niveau qui redescend", () => {
    // Echantillons derives des paliers reels : chaque seuil, la valeur juste en dessous, puis
    // quelques points au-dela du dernier rang nomme.
    const last = LEVEL_TIERS[LEVEL_TIERS.length - 1];
    const samples = [
      0,
      100,
      ...LEVEL_TIERS.flatMap((t) => (t.minXp === 0 ? [] : [t.minXp - 1, t.minXp])),
      last.minXp + OPEN_LEVEL_STEP,
      30_000,
      100_000,
    ].sort((a, b) => a - b);
    let previousLevel = -Infinity;
    for (const xp of samples) {
      const { level } = getLevelInfo(xp);
      expect(level).toBeGreaterThanOrEqual(previousLevel);
      previousLevel = level;
    }
  });
});

describe("updateStreak", () => {
  const baseStreak = (overrides: Partial<StreakState> = {}): StreakState => ({
    count: 3,
    lastActiveDate: "2026-03-04", // un mercredi
    weekDays: [true, true, true, false, false, false, false],
    ...overrides,
  });

  it("même jour : aucun changement", () => {
    const streak = baseStreak();
    const result = updateStreak(streak, new Date("2026-03-04T18:00:00"));
    expect(result).toEqual(streak);
  });

  it("jour suivant consécutif : la série continue (+1)", () => {
    const streak = baseStreak();
    const result = updateStreak(streak, new Date("2026-03-05T08:00:00")); // jeudi
    expect(result.count).toBe(4);
    expect(result.lastActiveDate).toBe("2026-03-05");
    expect(result.weekDays[3]).toBe(true); // jeudi = index 3
    expect(result.weekDays[0]).toBe(true); // les jours précédents de la semaine restent
  });

  it("saut de plusieurs jours : la série est réinitialisée à 1", () => {
    const streak = baseStreak();
    const result = updateStreak(streak, new Date("2026-03-08T08:00:00")); // dimanche, 4 jours plus tard
    expect(result.count).toBe(1);
  });

  it("changement de semaine (lundi) : weekDays repart à zéro sauf le jour courant", () => {
    const streak = baseStreak({ lastActiveDate: "2026-03-08", weekDays: Array(7).fill(true) }); // dimanche précédent
    const result = updateStreak(streak, new Date("2026-03-09T08:00:00")); // lundi suivant, consécutif
    expect(result.count).toBe(streak.count + 1);
    expect(result.weekDays).toEqual([true, false, false, false, false, false, false]);
  });

  it("passage d'année : la continuité de série n'est pas cassée par le changement d'année", () => {
    const streak = baseStreak({ lastActiveDate: "2025-12-31", weekDays: Array(7).fill(false) });
    const result = updateStreak(streak, new Date("2026-01-01T08:00:00"));
    expect(result.count).toBe(streak.count + 1);
    expect(result.lastActiveDate).toBe("2026-01-01");
  });
});
