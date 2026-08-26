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
 * XP attribué à la **deuxième** réussite d'une question dans le module Quiz — jamais avant, jamais
 * après.
 *
 * Pourquoi pas la première : le module sert **tout** le catalogue dès la première partie, y compris
 * des questions dont le cours n'a pas été lu. Avec 4 options, une bonne réponse sur quatre tombe
 * par hasard ; créditer la première réussite rendrait tout le stock farmable à l'aveugle. Une
 * question réussie **deux fois**, à quelques jours d'intervalle (la révision espacée écarte les
 * rappels), ne relève plus du coup de chance : c'est ce seuil qui est payé.
 *
 * Le module est illimité (pas de compteur d'énergie) : c'est ce plafond — XP_PER_QUESTION_LEARNED
 * × nombre de questions du catalogue — qui l'empêche de faire exploser `LEVEL_TIERS`. Ce qu'on
 * farme en jouant, ce sont les cauris, qui ne touchent ni le niveau ni le rang.
 *
 * Ce plafond (676 × 5 = 3 380 XP) est intégré au calibrage de `LEVEL_TIERS` ci-dessous.
 */
export const XP_PER_QUESTION_LEARNED = 5;

/**
 * Palier XP → niveau et rang affiché dans le Profil.
 *
 * Recalibré une première fois (Phase 7, lot 3) sur ~7100 XP, une deuxième (chantier Géographie
 * 3 leçons) sur ~9260 XP, une troisième (Phase 8 — Personnalités) sur 13 040 XP, et une
 * **quatrième** (Phase 9 — module Quiz) sur les **17 960 XP** aujourd'hui disponibles :
 *
 * | Source | XP |
 * |---|---|
 * | Complétion des 136 cours | 8 360 |
 * | 564 leçons × XP_PER_LESSON | 5 640 |
 * | Module Quiz : 676 questions × XP_PER_QUESTION_LEARNED | 3 380 |
 * | 3 parcours (xpReward) | 400 |
 * | 18 cartes éditoriales du fil Home | 180 |
 *
 * Sans ce recalibrage, le dernier rang serait tombé à **72,6 %** du catalogue.
 *
 * Le dernier rang nommé (« Gardien du savoir ») est fixé exactement au total : il n'est atteint
 * qu'en terminant 100 % du contenu, jamais avant. Les proportions des rangs intermédiaires sont
 * conservées d'un recalibrage à l'autre (0 / 9,6 / 29,9 / 59,8 / 100 %), pour que le rythme de
 * progression ressenti ne change pas.
 *
 * ⚠️ **Une source échappe à ce calibrage** : le Défi du jour rapporte DAILY_CHALLENGE_XP_BONUS
 * chaque jour, indéfiniment — environ 11 000 XP par an sans apprendre quoi que ce soit de neuf.
 * La propriété « le dernier rang = 100 % du catalogue » ne vaut donc à la lettre que pour un
 * utilisateur récent. C'est une limite connue et antérieure à ce recalibrage, pas un oubli.
 */
export interface LevelTier {
  minXp: number;
  level: number;
  rank: string;
}

export const LEVEL_TIERS: LevelTier[] = [
  { minXp: 0, level: 1, rank: "Curieux" },
  { minXp: 1700, level: 2, rank: "Éveillé" },
  { minXp: 5350, level: 3, rank: "Initié" },
  { minXp: 10750, level: 4, rank: "Sage" },
  { minXp: 17960, level: 5, rank: "Gardien du savoir" },
];

/**
 * Au-delà du dernier rang nommé, la progression continue en niveaux numérotés sans plafond,
 * par une formule de seuil croissant (indépendante de la taille du catalogue) plutôt qu'une
 * table figée : tout ajout futur de contenu se traduit directement en niveaux supplémentaires,
 * sans recalibrage. Coût du niveau n (n > dernier rang nommé) = OPEN_LEVEL_STEP × (n - 5) XP,
 * cumulé — un nombre triangulaire, qui prolonge naturellement le rythme des rangs nommés
 * (écarts croissants : 1700, 3400, 5100, 6800 XP).
 */
export const OPEN_LEVEL_STEP = 1700;

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
