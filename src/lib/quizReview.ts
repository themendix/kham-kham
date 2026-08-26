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

/** Palier au-delà duquel une question est acquise et n'est plus programmée */
export const MASTERED_BOX = 3;

/**
 * Délai avant le prochain rappel, en jours, selon le palier atteint.
 * Palier 0 (question ratée ou jamais réussie) → demain ; 1 → dans 3 jours ; 2 → dans une semaine.
 */
export const REVIEW_INTERVALS_DAYS: Record<number, number> = { 0: 1, 1: 3, 2: 7 };

/** Statistique d'une question jamais rencontrée */
export const NEW_QUESTION_STAT: QuestionStat = { correct: 0, wrong: 0, box: 0, dueDate: null };

function addDays(from: Date, days: number): Date {
  const next = new Date(from);
  next.setDate(next.getDate() + days);
  return next;
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
  const current = stat ?? NEW_QUESTION_STAT;

  if (!isCorrect) {
    return {
      correct: current.correct,
      wrong: current.wrong + 1,
      box: 0,
      dueDate: toISODate(addDays(now, REVIEW_INTERVALS_DAYS[0])),
    };
  }

  const box = Math.min(current.box + 1, MASTERED_BOX);
  return {
    correct: current.correct + 1,
    wrong: current.wrong,
    box,
    dueDate: box === MASTERED_BOX ? null : toISODate(addDays(now, REVIEW_INTERVALS_DAYS[box])),
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
 * Cette bonne réponse est-elle la **deuxième** réussite de la question — donc celle qui crédite
 * l'XP ? À n'appeler qu'avec la statistique *antérieure* à la réponse en cours.
 *
 * Le module sert tout le catalogue, y compris des questions jamais lues : une première réussite
 * peut n'être qu'un tirage heureux sur quatre options. La deuxième, elle, tombe après que la
 * révision espacée a écarté le rappel de plusieurs jours — elle atteste vraiment quelque chose.
 * Voir `XP_PER_QUESTION_LEARNED`.
 */
export function earnsXpOnCorrect(stat: QuestionStat | undefined): boolean {
  return (stat?.correct ?? 0) === 1;
}

/** A-t-elle déjà été réussie au moins une fois ? */
export function hasEverBeenCorrect(stat: QuestionStat | undefined): boolean {
  return (stat?.correct ?? 0) > 0;
}
