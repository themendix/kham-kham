/**
 * Moteur de partie du module Quiz : sélection des questions et calcul des cauris.
 *
 * Module pur — aucune dépendance au store, hasard et date injectables pour les tests.
 * Voir docs/ARCHITECTURE.md § Module Quiz.
 */
import type { QuestionStat, QuizEntry, QuizPlayMode } from "@/types";
import type { TerritoryId } from "@/lib/territories";
import { isDue, isMastered, isNew } from "@/lib/quizReview";
import { pickDailyQuestions } from "@/lib/daily";

/** Durée d'une partie Blitz, en secondes */
export const BLITZ_DURATION_SECONDS = 60;
/** Erreurs tolérées avant la fin d'une partie Survie */
export const SURVIE_LIVES = 3;
/** Réponse considérée « rapide » (bonus de cauris en Blitz), en millisecondes */
export const FAST_ANSWER_MS = 4000;

/** Cauris gagnés par bonne réponse, quel que soit le mode */
export const CAURIS_PER_CORRECT = 5;
/** Bonus de cauris par bonne réponse rapide (Blitz seulement) */
export const CAURIS_FAST_BONUS = 3;
/** Longueur de série récompensée : chaque palier atteint rapporte CAURIS_STREAK_BONUS */
export const STREAK_STEP = 3;
export const CAURIS_STREAK_BONUS = 5;
/** Bonus de cauris par vie restante en fin de partie Survie */
export const CAURIS_PER_REMAINING_LIFE = 10;

/**
 * Nombre de questions préparées pour une partie. Large : une partie Blitz nerveuse peut enchaîner
 * beaucoup de questions en 60 s, et une partie Survie bien menée n'a pas de fin programmée. Quand
 * le vivier d'un territoire est plus petit, la partie tourne simplement sur ce qu'il contient.
 */
export const GAME_QUESTION_COUNT = 40;

/** Mélange une copie du tableau (Fisher-Yates), sans muter l'original. */
function shuffle<T>(items: T[], random: () => number): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export interface BuildGameQuestionsOptions {
  mode: "blitz" | "survie";
  territoryId: TerritoryId;
  /** Index complet des questions (`QUIZ_INDEX`) */
  allQuestions: QuizEntry[];
  /** Statistiques de révision par clé de question (`progress.quizGame.questions`) */
  stats: Record<string, QuestionStat>;
  count?: number;
  now?: Date;
  random?: () => number;
}

/**
 * Prépare les questions d'une partie sur un territoire.
 *
 * Le module sert **tout** le catalogue : aucune question n'est exclue, y compris celles dont le
 * cours n'a jamais été ouvert — se tromper est une porte d'entrée vers la leçon, pas une sanction.
 * Ce qui change d'un mode à l'autre, c'est l'**ordre** :
 *
 * - **Blitz** ouvre sur les questions dues (celles qu'on a ratées et qui doivent revenir), puis
 *   part en découverte. Soixante secondes servent d'abord à consolider.
 * - **Survie** monte en difficulté : d'abord ce qui est acquis ou déjà vu, puis les questions dues,
 *   la découverte en dernier. Perdre ses trois vies sur la première question serait absurde.
 *
 * À l'intérieur de chaque groupe, l'ordre est aléatoire : deux parties consécutives ne se
 * ressemblent pas.
 */
export function buildGameQuestions({
  mode,
  territoryId,
  allQuestions,
  stats,
  count = GAME_QUESTION_COUNT,
  now = new Date(),
  random = Math.random,
}: BuildGameQuestionsOptions): QuizEntry[] {
  const pool = allQuestions.filter((q) => q.territories.includes(territoryId));

  const due: QuizEntry[] = [];
  const fresh: QuizEntry[] = [];
  const seen: QuizEntry[] = [];
  const mastered: QuizEntry[] = [];

  for (const entry of pool) {
    const stat = stats[entry.key];
    if (isDue(stat, now)) due.push(entry);
    else if (isNew(stat)) fresh.push(entry);
    else if (isMastered(stat)) mastered.push(entry);
    else seen.push(entry);
  }

  const groups =
    mode === "blitz"
      ? [due, fresh, seen, mastered]
      : [mastered, seen, due, fresh];

  return groups.flatMap((group) => shuffle(group, random)).slice(0, count);
}

export interface GameOutcome {
  mode: QuizPlayMode;
  /** Bonnes réponses de la partie — c'est aussi le score comparé au record du territoire */
  correctCount: number;
  /** Plus longue série de bonnes réponses consécutives */
  bestStreak: number;
  /** Bonnes réponses données en moins de FAST_ANSWER_MS (Blitz seulement) */
  fastAnswers: number;
  /** Vies restantes en fin de partie (Survie seulement) */
  remainingLives: number;
}

/**
 * Cauris gagnés en fin de partie. Monnaie de jeu pure : elle ne touche jamais l'XP ni le rang,
 * c'est ce qui permet de la rendre généreuse sans déséquilibrer la progression.
 *
 * Chaque mode a son levier : la **vitesse** en Blitz (répondre vite rapporte plus que répondre
 * juste tard), la **prudence** en Survie (finir avec ses vies intactes vaut un bonus). La série
 * récompense les deux.
 */
export function computeCauris({
  mode,
  correctCount,
  bestStreak,
  fastAnswers,
  remainingLives,
}: GameOutcome): number {
  const base = correctCount * CAURIS_PER_CORRECT;
  const streakBonus = Math.floor(bestStreak / STREAK_STEP) * CAURIS_STREAK_BONUS;
  // Le Défi du jour n'a ni chronomètre ni vies : il n'a donc pas de bonus de mode. Son enjeu
  // propre est ailleurs (bonus d'XP, une seule tentative par jour).
  const modeBonus =
    mode === "defi"
      ? 0
      : mode === "blitz"
        ? fastAnswers * CAURIS_FAST_BONUS
        : Math.max(0, remainingLives) * CAURIS_PER_REMAINING_LIFE;
  return base + streakBonus + modeBonus;
}

/** Questions du Défi du jour. Cinq, contre trois auparavant : le défi porte désormais aussi la
 * révision, il lui faut de quoi ramener plusieurs questions dues. */
export const DAILY_CHALLENGE_QUESTION_COUNT = 5;

export interface BuildDailyChallengeOptions {
  allQuestions: QuizEntry[];
  stats: Record<string, QuestionStat>;
  count?: number;
  now?: Date;
}

/**
 * Questions du Défi du jour : la partie à enjeu quotidienne du module (XP bonus, série, une seule
 * fois par jour). Elle remplace l'ancien écran `/defi`, qui tirait trois questions au hasard dans
 * tout le catalogue sans jamais tenir compte de ce que l'utilisateur avait raté.
 *
 * Priorité aux **questions dues à révision**, complétées par un tirage déterministe du jour sur le
 * reste du catalogue. Deux propriétés qui comptent :
 *
 * - **Stable sur la journée** — `pickDailyQuestions` est seedé par le jour de l'année, donc ouvrir
 *   le défi deux fois avant de le jouer donne les mêmes questions.
 * - **Personnalisée** — deux utilisateurs n'ont pas les mêmes dues, donc pas le même défi. C'est
 *   voulu : un défi qui ignore ce qu'on a raté n'est qu'un tirage au sort.
 *
 * Contrairement à l'ancien écran, aucun chargement du contenu complet du catalogue n'est nécessaire :
 * l'index des questions suffit.
 */
export function buildDailyChallengeQuestions({
  allQuestions,
  stats,
  count = DAILY_CHALLENGE_QUESTION_COUNT,
  now = new Date(),
}: BuildDailyChallengeOptions): QuizEntry[] {
  const due = allQuestions.filter((q) => isDue(stats[q.key], now));
  const fromDue = pickDailyQuestions(due, count, now);
  if (fromDue.length >= count) return fromDue;

  const dueKeys = new Set(fromDue.map((q) => q.key));
  const rest = allQuestions.filter((q) => !dueKeys.has(q.key) && !isDue(stats[q.key], now));
  return [...fromDue, ...pickDailyQuestions(rest, count - fromDue.length, now)];
}
