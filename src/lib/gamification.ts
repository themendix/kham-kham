import type { StreakState } from "@/types";

/** XP gagné en apprenant (✓) une carte du fil Home */
export const XP_PER_CARD = 15;
/** XP gagné à la lecture d'une leçon (À la une ou vue cours), modeste pour ne pas écraser l'XP des cours */
export const XP_PER_LESSON = 10;
/** Points de maîtrise (sur 100) gagnés par catégorie à chaque carte apprise */
export const MASTERY_PER_CARD = 45;
/** Points de maîtrise (sur 100) gagnés par catégorie à la première complétion d'un cours (leçons + quiz) */
export const MASTERY_PER_COURSE = 60;
/** Nombre de cartes apprises visé chaque jour, affiché dans DailyGoalCard */
export const DAILY_GOAL = 5;
/** Bonus d'XP attribué à la réussite du Défi du jour (quiz éclair) */
export const DAILY_CHALLENGE_XP_BONUS = 30;

/** Palier XP → niveau et rang affiché dans le Profil */
export interface LevelTier {
  minXp: number;
  level: number;
  rank: string;
}

export const LEVEL_TIERS: LevelTier[] = [
  { minXp: 0, level: 1, rank: "Curieux" },
  { minXp: 100, level: 2, rank: "Éveillé" },
  { minXp: 250, level: 3, rank: "Initié" },
  { minXp: 500, level: 4, rank: "Sage" },
  { minXp: 1000, level: 5, rank: "Gardien du savoir" },
];

export interface LevelInfo {
  level: number;
  rank: string;
  /** Progression 0-100 vers le prochain palier */
  progressPct: number;
  xpToNextLevel: number | null;
  nextRank: string | null;
}

/** Convertit un total d'XP en niveau, rang et progression vers le palier suivant */
export function getLevelInfo(xp: number): LevelInfo {
  let current = LEVEL_TIERS[0];
  let next: LevelTier | null = null;

  for (let i = 0; i < LEVEL_TIERS.length; i++) {
    if (xp >= LEVEL_TIERS[i].minXp) {
      current = LEVEL_TIERS[i];
      next = LEVEL_TIERS[i + 1] ?? null;
    }
  }

  const floor = current.minXp;
  const ceil = next ? next.minXp : current.minXp + 500;
  const progressPct = Math.min(100, Math.round(((xp - floor) / (ceil - floor)) * 100));

  return {
    level: current.level,
    rank: current.rank,
    progressPct,
    xpToNextLevel: next ? next.minXp - xp : null,
    nextRank: next?.rank ?? null,
  };
}

/** Date ISO (YYYY-MM-DD), réutilisée par lib/daily.ts pour le suivi quotidien */
export function toISODate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

/** Index lundi=0 ... dimanche=6, aligné sur le calendrier français */
function isoWeekdayIndex(date: Date): number {
  return (date.getDay() + 6) % 7;
}

/**
 * Met à jour la série (streak) à partir de la dernière activité connue.
 * - même jour : aucun changement
 * - jour suivant : la série continue (+1)
 * - saut de plus d'un jour : la série est réinitialisée à 1
 */
export function updateStreak(streak: StreakState, now: Date = new Date()): StreakState {
  const today = toISODate(now);

  if (streak.lastActiveDate === today) {
    return streak;
  }

  const dayIndex = isoWeekdayIndex(now);
  const isConsecutiveDay =
    streak.lastActiveDate !== null &&
    toISODate(new Date(now.getTime() - 86_400_000)) === streak.lastActiveDate;

  const weekDays = dayIndex === 0 ? Array(7).fill(false) : [...streak.weekDays];
  weekDays[dayIndex] = true;

  return {
    count: isConsecutiveDay ? streak.count + 1 : 1,
    lastActiveDate: today,
    weekDays,
  };
}
