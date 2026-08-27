import type { DailyState } from "@/types";
import { toISODate } from "@/lib/gamification";

/** Remet `daily` à zéro si la date du jour a changé depuis le dernier reset ; sinon renvoie l'état inchangé */
export function resetDailyIfNeeded(daily: DailyState, now: Date = new Date()): DailyState {
  const today = toISODate(now);
  if (daily.date === today) return daily;
  return { date: today, lessonsLearned: 0, xpEarned: 0, challengeDone: false };
}

/** Jour de l'année (1-366), utilisé pour dériver un contenu stable sur une journée */
export function dayOfYear(now: Date = new Date()): number {
  const start = new Date(now.getFullYear(), 0, 0);
  const diffMs = now.getTime() - start.getTime();
  return Math.floor(diffMs / 86_400_000);
}

/** Index déterministe dans un tableau de longueur `length`, stable pour la journée */
export function pickDailyIndex(length: number, now: Date = new Date()): number {
  return dayOfYear(now) % length;
}

/** PRNG déterministe (mulberry32), seedé par jour de l'année pour un tirage stable sur la journée */
function mulberry32(seed: number): () => number {
  let state = seed;
  return () => {
    state |= 0;
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Sélectionne `count` éléments distincts de `pool`, mélangés de façon déterministe pour la journée */
export function pickDailyQuestions<T>(pool: T[], count: number, now: Date = new Date()): T[] {
  const rng = mulberry32(dayOfYear(now));
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}
