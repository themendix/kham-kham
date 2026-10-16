import { describe, expect, it } from "vitest";
import { addDayKey, civilDaysBetween, localDayKey, weekStartKey } from "./calendar";
import { dayOfYear } from "./daily";
import { currentWeekDays, getStreakBreak, updateStreak } from "./gamification";
import type { StreakState } from "@/types";

describe("calendrier civil local", () => {
  it("garde la date locale près de minuit, même si UTC est un autre jour", () => {
    expect(localDayKey(new Date(2026, 2, 30, 0, 30))).toBe("2026-03-30");
    expect(localDayKey(new Date(2026, 2, 30, 23, 30))).toBe("2026-03-30");
  });
  it("additionne les jours et trouve le lundi à travers mois, année et année bissextile", () => {
    expect(addDayKey("2024-02-28", 1)).toBe("2024-02-29");
    expect(addDayKey("2026-01-01", -1)).toBe("2025-12-31");
    expect(weekStartKey("2026-01-01")).toBe("2025-12-29");
    expect(weekStartKey("2026-03-08")).toBe("2026-03-02");
  });
  it("ne décale pas le tirage du jour après les journées de 23 ou 25 heures", () => {
    expect(dayOfYear(new Date(2026, 2, 30, 0, 30))).toBe(89);
    expect(dayOfYear(new Date(2026, 9, 26, 0, 30))).toBe(299);
    expect(civilDaysBetween("2026-03-29", "2026-03-30")).toBe(1);
    expect(civilDaysBetween("2026-10-25", "2026-10-26")).toBe(1);
  });
});

describe("série locale et semaine", () => {
  const streak: StreakState = { count: 4, lastActiveDate: "2026-03-28", weekDays: [true, true, true, true, false, true, false], weekStartDate: "2026-03-23" };
  it("continue au passage à l'heure d'été et d'hiver sans soustraire 24 heures", () => {
    const sunday = updateStreak(streak, new Date(2026, 2, 29, 12));
    expect(updateStreak(sunday, new Date(2026, 2, 30, 0, 30)).count).toBe(6);
    expect(updateStreak({ ...streak, lastActiveDate: "2026-10-25" }, new Date(2026, 9, 26, 0, 30)).count).toBe(5);
  });
  it("efface les pastilles d'une ancienne semaine même si le lundi a été manqué", () => {
    const result = updateStreak(streak, new Date(2026, 3, 7, 12));
    expect(result.weekStartDate).toBe("2026-04-06");
    expect(result.weekDays).toEqual([false, true, false, false, false, false, false]);
    expect(currentWeekDays(streak, new Date(2026, 3, 7, 12))).toEqual(Array(7).fill(false));
  });
  it("ne rompt ni n'incrémente la série lors d'un recul puis d'un retour à la date acquise", () => {
    expect(updateStreak(streak, new Date(2026, 2, 27, 12))).toBe(streak);
    expect(updateStreak(streak, new Date(2026, 2, 28, 12))).toBe(streak);
    expect(getStreakBreak(streak, new Date(2026, 2, 27, 12))).toBeNull();
  });
});
