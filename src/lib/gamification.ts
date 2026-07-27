import type { StreakState } from "@/types";

/** XP gagné à l'apprentissage d'une leçon — que ce soit une carte du fil Home (éditoriale
 * ou dérivée du catalogue), la vedette « À la une » ou une leçon lue dans un cours : un seul
 * geste (« j'ai appris cette leçon »), une seule constante, quel que soit l'écran. */
export const XP_PER_LESSON = 10;
/** Nombre de cartes apprises visé chaque jour, affiché dans DailyGoalCard */
export const DAILY_GOAL = 5;
/** Bonus d'XP attribué à la réussite du Défi du jour (quiz éclair) */
export const DAILY_CHALLENGE_XP_BONUS = 30;

/**
 * Palier XP → niveau et rang affiché dans le Profil.
 * Recalibré une première fois (Phase 7, lot 3) sur l'XP total du catalogue d'alors (~7100 XP),
 * une seconde fois (chantier Géographie 3 leçons) sur ~9260 XP (98 cours), puis une troisième
 * fois (Phase 8 — ajout de Personnalités) sur le total actuel (13 040 XP pour 128 cours). Le
 * dernier rang nommé (« Gardien du savoir ») est fixé exactement au total du catalogue : il
 * n'est atteint qu'en terminant 100 % du contenu, jamais avant. Ce plafond est un point de
 * calibrage éditorial assumé, à revoir consciemment si le catalogue grossit fortement.
 */
export interface LevelTier {
  minXp: number;
  level: number;
  rank: string;
}

export const LEVEL_TIERS: LevelTier[] = [
  { minXp: 0, level: 1, rank: "Curieux" },
  { minXp: 1250, level: 2, rank: "Éveillé" },
  { minXp: 3900, level: 3, rank: "Initié" },
  { minXp: 7800, level: 4, rank: "Sage" },
  { minXp: 13040, level: 5, rank: "Gardien du savoir" },
];

/**
 * Au-delà du dernier rang nommé, la progression continue en niveaux numérotés sans plafond,
 * par une formule de seuil croissant (indépendante de la taille du catalogue) plutôt qu'une
 * table figée : tout ajout futur de contenu se traduit directement en niveaux supplémentaires,
 * sans recalibrage. Coût du niveau n (n > dernier rang nommé) = OPEN_LEVEL_STEP × (n - 5) XP,
 * cumulé — un nombre triangulaire, qui prolonge naturellement le rythme des rangs nommés
 * (écarts croissants : 900, 1800, 2700, 3600 XP).
 */
const OPEN_LEVEL_STEP = 1250;

/** Seuil XP du niveau `level`, au-delà du dernier rang nommé (`level` > LEVEL_TIERS.length) */
function openLevelThreshold(level: number): number {
  const lastTier = LEVEL_TIERS[LEVEL_TIERS.length - 1];
  const extraLevels = level - lastTier.level;
  return lastTier.minXp + (OPEN_LEVEL_STEP * extraLevels * (extraLevels + 1)) / 2;
}

export interface LevelInfo {
  /** Entier non borné : continue de croître au-delà du dernier rang nommé */
  level: number;
  /** Reste "Gardien du savoir" indéfiniment une fois le dernier rang nommé atteint —
   * cesse alors d'être un indicateur de progression, `level` prend le relais */
  rank: string;
  /** Progression 0-100 vers le prochain niveau */
  progressPct: number;
  xpToNextLevel: number | null;
  /** Rang du prochain palier, uniquement tant qu'on est dans la zone des rangs nommés */
  nextRank: string | null;
}

/** Convertit un total d'XP en niveau, rang et progression vers le niveau suivant (rangs nommés puis niveaux ouverts) */
export function getLevelInfo(xp: number): LevelInfo {
  const lastTier = LEVEL_TIERS[LEVEL_TIERS.length - 1];

  if (xp < lastTier.minXp) {
    let current = LEVEL_TIERS[0];
    let next: LevelTier = LEVEL_TIERS[1];
    for (let i = 0; i < LEVEL_TIERS.length; i++) {
      if (xp >= LEVEL_TIERS[i].minXp) {
        current = LEVEL_TIERS[i];
        next = LEVEL_TIERS[i + 1] ?? LEVEL_TIERS[i];
      }
    }
    const floor = current.minXp;
    const ceil = next.minXp;
    const progressPct = Math.min(100, Math.round(((xp - floor) / (ceil - floor)) * 100));
    return {
      level: current.level,
      rank: current.rank,
      progressPct,
      xpToNextLevel: next.minXp - xp,
      nextRank: next.rank,
    };
  }

  // Zone ouverte : cherche le niveau numéroté courant par seuils croissants.
  let level = lastTier.level;
  while (xp >= openLevelThreshold(level + 1)) {
    level += 1;
  }
  const floor = openLevelThreshold(level);
  const ceil = openLevelThreshold(level + 1);
  const progressPct = Math.min(100, Math.round(((xp - floor) / (ceil - floor)) * 100));

  return {
    level,
    rank: lastTier.rank,
    progressPct,
    xpToNextLevel: ceil - xp,
    nextRank: null,
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
