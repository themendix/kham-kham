/**
 * Révision espacée du module Quiz.
 *
 * Système de boîtes (Leitner simplifié) : chaque question monte d'un palier à chaque réussite et
 * retombe au palier 0 à chaque échec. Le palier détermine dans combien de jours la question doit
 * revenir en priorité dans une partie. Au dernier palier, la question est considérée acquise et
 * n'est plus rappelée.
 *
 * Ce système n'est jamais nommé « révision » dans l'interface : l'utilisateur voit un jeu, et les
 * questions qu'il a ratées reviennent simplement plus souvent.
 *
 * Module pur : aucune dépendance au store, date toujours injectable pour les tests.
 */
import type { QuestionStat } from "@/types";
import { toISODate } from "@/lib/gamification";
import { addDayKey } from "@/lib/calendar";

/** Palier au-delà duquel une question est acquise et n'est plus programmée */
export const MASTERED_BOX = 3;

/**
 * Délai avant le prochain rappel, en jours, selon le palier atteint.
 * Palier 0 (question ratée ou jamais réussie) → demain ; 1 → dans 3 jours ; 2 → dans une semaine.
 */
export const REVIEW_INTERVALS_DAYS: Record<number, number> = { 0: 1, 1: 3, 2: 7 };

/** Statistique d'une question jamais rencontrée */
export const NEW_QUESTION_STAT: QuestionStat = { correct: 0, wrong: 0, box: 0, dueDate: null, successDayKeys: [], xpAwarded: false };

/** Aucun jour ancien n'est déduit d'un compteur : seul le paiement déjà acquis est conservé. */
export function normalizeQuestionStat(stat: QuestionStat): QuestionStat {
  return { ...stat, successDayKeys: [...(stat.successDayKeys ?? [])], xpAwarded: stat.xpAwarded ?? stat.correct >= 2 };
}

/**
 * Applique une réponse à la statistique d'une question et reprogramme son rappel.
 * `stat` peut être `undefined` : c'est le cas d'une question rencontrée pour la première fois.
 */
export function applyAnswer(
  stat: QuestionStat | undefined,
  isCorrect: boolean,
  now: Date = new Date(),
): QuestionStat {
  const current = normalizeQuestionStat(stat ?? NEW_QUESTION_STAT);
  const today = toISODate(now);

  if (!isCorrect) {
    return {
      ...current,
      correct: current.correct,
      wrong: current.wrong + 1,
      box: 0,
      dueDate: addDayKey(today, REVIEW_INTERVALS_DAYS[0]),
    };
  }

  const box = Math.min(current.box + 1, MASTERED_BOX);
  const successDayKeys = [...current.successDayKeys!];
  if (!successDayKeys.includes(today) && successDayKeys.length < 2) successDayKeys.push(today);
  return {
    ...current,
    correct: current.correct + 1,
    wrong: current.wrong,
    box,
    dueDate: box === MASTERED_BOX ? null : addDayKey(today, REVIEW_INTERVALS_DAYS[box]),
    successDayKeys,
    xpAwarded: current.xpAwarded || successDayKeys.length === 2,
  };
}

/** Une question est due quand son échéance est atteinte ou dépassée. Une question acquise ne l'est jamais. */
export function isDue(stat: QuestionStat | undefined, now: Date = new Date()): boolean {
  if (!stat?.dueDate) return false;
  return stat.dueDate <= toISODate(now);
}

/** Une question jamais rencontrée : ni due, ni acquise — c'est le vivier de « découverte » */
export function isNew(stat: QuestionStat | undefined): boolean {
  return stat === undefined || (stat.correct === 0 && stat.wrong === 0);
}

/** Une question est acquise quand elle a atteint le dernier palier */
export function isMastered(stat: QuestionStat | undefined): boolean {
  return stat !== undefined && stat.box >= MASTERED_BOX;
}

/**
 * Cette bonne réponse ouvre-t-elle un deuxième jour local distinct de réussite, encore impayé ?
 * À appeler avec la statistique antérieure à la réponse et le même instant qu'applyAnswer.
 *
 * Le module sert tout le catalogue, y compris des questions jamais lues : une première réussite
 * peut n'être qu'un tirage heureux sur quatre options. Les jours sont suivis prospectivement,
 * sans exiger qu'ils soient consécutifs. Le paiement reste indépendant de la boîte de révision.
 * Voir `XP_PER_QUESTION_LEARNED`.
 */
export function earnsXpOnCorrect(stat: QuestionStat | undefined, now: Date = new Date()): boolean {
  const current = normalizeQuestionStat(stat ?? NEW_QUESTION_STAT);
  return !current.xpAwarded && current.successDayKeys!.length === 1 && !current.successDayKeys!.includes(toISODate(now));
}

/** A-t-elle déjà été réussie au moins une fois ? */
export function hasEverBeenCorrect(stat: QuestionStat | undefined): boolean {
  return (stat?.correct ?? 0) > 0;
}
