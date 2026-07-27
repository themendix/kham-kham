import { describe, expect, it } from "vitest";
import { pickDailyIndex, pickDailyQuestions, resetDailyIfNeeded } from "@/lib/daily";
import type { DailyState } from "@/types";

describe("resetDailyIfNeeded", () => {
  it("laisse l'état inchangé si on est déjà le jour du dernier reset", () => {
    const daily: DailyState = { date: "2026-03-04", cardsLearned: 3, xpEarned: 30, challengeDone: true };
    const result = resetDailyIfNeeded(daily, new Date("2026-03-04T20:00:00"));
    expect(result).toEqual(daily);
  });

  it("remet à zéro dès que la date a changé", () => {
    const daily: DailyState = { date: "2026-03-04", cardsLearned: 3, xpEarned: 30, challengeDone: true };
    const result = resetDailyIfNeeded(daily, new Date("2026-03-05T00:05:00"));
    expect(result).toEqual({ date: "2026-03-05", cardsLearned: 0, xpEarned: 0, challengeDone: false });
  });

  it("initialise depuis date: null (première activité) comme un changement de jour", () => {
    const daily: DailyState = { date: null, cardsLearned: 0, xpEarned: 0, challengeDone: false };
    const result = resetDailyIfNeeded(daily, new Date("2026-03-04T09:00:00"));
    expect(result.date).toBe("2026-03-04");
  });
});

describe("pickDailyIndex — déterminisme journalier", () => {
  it("renvoie le même index pour deux appels le même jour", () => {
    const a = pickDailyIndex(7, new Date("2026-03-04T08:00:00"));
    const b = pickDailyIndex(7, new Date("2026-03-04T22:00:00"));
    expect(a).toBe(b);
  });

  it("peut changer au changement de date", () => {
    const results = new Set<number>();
    for (let day = 1; day <= 20; day++) {
      results.add(pickDailyIndex(7, new Date(`2026-01-${String(day).padStart(2, "0")}T12:00:00`)));
    }
    // Sur 20 jours et 7 valeurs possibles, l'index doit varier (pas figé à une seule valeur).
    expect(results.size).toBeGreaterThan(1);
  });

  it("reste toujours dans les bornes du tableau", () => {
    for (let day = 1; day <= 366; day++) {
      const index = pickDailyIndex(5, new Date(2026, 0, day, 12));
      expect(index).toBeGreaterThanOrEqual(0);
      expect(index).toBeLessThan(5);
    }
  });
});

describe("pickDailyQuestions", () => {
  const pool = Array.from({ length: 10 }, (_, i) => `question-${i}`);

  it("renvoie le nombre demandé d'éléments", () => {
    const picked = pickDailyQuestions(pool, 3, new Date("2026-03-04T12:00:00"));
    expect(picked).toHaveLength(3);
  });

  it("les éléments renvoyés sont distincts", () => {
    const picked = pickDailyQuestions(pool, 5, new Date("2026-03-04T12:00:00"));
    expect(new Set(picked).size).toBe(picked.length);
  });

  it("est déterministe sur une même journée", () => {
    const a = pickDailyQuestions(pool, 3, new Date("2026-03-04T08:00:00"));
    const b = pickDailyQuestions(pool, 3, new Date("2026-03-04T23:00:00"));
    expect(a).toEqual(b);
  });

  it("gère un pool plus petit que le nombre demandé sans planter", () => {
    const smallPool = ["only-one"];
    const picked = pickDailyQuestions(smallPool, 3, new Date("2026-03-04T12:00:00"));
    expect(picked).toEqual(["only-one"]);
  });

  it("ne mute pas le pool d'origine", () => {
    const original = [...pool];
    pickDailyQuestions(pool, 3, new Date("2026-03-04T12:00:00"));
    expect(pool).toEqual(original);
  });
});
