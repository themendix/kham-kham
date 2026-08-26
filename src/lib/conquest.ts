/**
 * Conquête des territoires : maîtrise et étoiles.
 *
 * Deux axes délibérément distincts, parce qu'ils récompensent deux choses différentes et
 * progressent à deux vitesses :
 *
 * - **La maîtrise** mesure le *contenu* réellement acquis (questions montées au dernier palier de
 *   révision). Elle monte lentement, ne redescend qu'en cas d'oubli, et c'est elle qui colore le
 *   territoire sur la carte.
 * - **Les étoiles** récompensent l'*engagement et la performance* : avoir joué, avoir bien joué,
 *   avoir tout appris. Elles s'obtiennent vite pour la première, difficilement pour la dernière.
 *
 * Une seule note aurait forcé à choisir entre récompenser le savoir et récompenser l'adresse.
 *
 * Module pur : travaille sur les clés de questions (`quizKeys.generated.ts`, léger) et les
 * statistiques de révision, jamais sur l'index complet.
 */
import type { QuestionStat, TerritoryRecords } from "@/types";
import type { TerritoryId } from "@/lib/territories";
import { isDue, isMastered, isNew } from "@/lib/quizReview";

/** Meilleur score (tous modes) à partir duquel l'étoile de performance est acquise */
export const CONQUEST_SCORE_THRESHOLD = 12;
/** Part de questions acquises à partir de laquelle l'étoile de maîtrise est acquise */
export const CONQUEST_MASTERY_THRESHOLD = 0.8;
/** Nombre d'étoiles qu'un territoire peut porter */
export const CONQUEST_STARS = 3;

export interface TerritoryConquest {
  territoryId: TerritoryId;
  /** Questions du territoire */
  total: number;
  /** Questions montées au dernier palier de révision */
  mastered: number;
  /** Questions rencontrées au moins une fois */
  seen: number;
  /** Questions dues à révision aujourd'hui */
  dueCount: number;
  /** `mastered / total`, entre 0 et 1 — la valeur qui colore le territoire */
  masteryRatio: number;
  /** Meilleur score obtenu sur ce territoire, tous modes confondus */
  bestScore: number;
  /** 0 à 3 */
  stars: number;
}

const EMPTY_RECORDS: TerritoryRecords = { blitz: 0, survie: 0 };

export interface TerritoryConquestOptions {
  territoryId: TerritoryId;
  /** Clés des questions du territoire (`QUIZ_KEYS_BY_TERRITORY[territoryId]`) */
  keys: string[];
  stats: Record<string, QuestionStat>;
  records: TerritoryRecords | undefined;
  now?: Date;
}

export function getTerritoryConquest({
  territoryId,
  keys,
  stats,
  records,
  now = new Date(),
}: TerritoryConquestOptions): TerritoryConquest {
  let mastered = 0;
  let seen = 0;
  let dueCount = 0;

  for (const key of keys) {
    const stat = stats[key];
    if (!isNew(stat)) seen++;
    if (isMastered(stat)) mastered++;
    if (isDue(stat, now)) dueCount++;
  }

  const { blitz, survie } = records ?? EMPTY_RECORDS;
  const bestScore = Math.max(blitz, survie);
  const masteryRatio = keys.length === 0 ? 0 : mastered / keys.length;

  // Les trois étoiles sont indépendantes : on peut décrocher la troisième sans la deuxième (tout
  // apprendre sans jamais faire un gros score en une partie). Les compter séparément évite de
  // bloquer une progression légitime derrière une autre.
  let stars = 0;
  if (seen > 0) stars++;
  if (bestScore >= CONQUEST_SCORE_THRESHOLD) stars++;
  if (keys.length > 0 && masteryRatio >= CONQUEST_MASTERY_THRESHOLD) stars++;

  return { territoryId, total: keys.length, mastered, seen, dueCount, masteryRatio, bestScore, stars };
}

/** Libellé de la condition de chaque étoile, dans l'ordre d'affichage. */
export const CONQUEST_STAR_LABELS = [
  "Territoire entamé",
  `Record de ${CONQUEST_SCORE_THRESHOLD} bonnes réponses en une partie`,
  `${Math.round(CONQUEST_MASTERY_THRESHOLD * 100)} % des questions acquises`,
];

/** Un territoire est conquis quand il porte ses trois étoiles. */
export function isConquered(conquest: TerritoryConquest): boolean {
  return conquest.stars >= CONQUEST_STARS;
}
