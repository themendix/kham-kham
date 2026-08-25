/**
 * Séquence de fin de cours : un segment de célébration (1 à 3 écrans, connu dès la fin des
 * leçons) suivi d'une queue (quiz et streak, résolue seulement au clic sur le carrefour de
 * décision porté par le dernier écran de célébration). Module pur, aucun accès au store ni
 * import de composant — voir docs/PROMPT-refonte-ecrans-fin-de-cours.md.
 */

export type CelebrationScreen = "done" | "levelUp" | "collection";
export type OutroScreen = CelebrationScreen | "quiz" | "quizResult" | "streak";

/** Segment de célébration : toujours "done" en tête, puis "levelUp" et/ou "collection" selon le cours. */
export function buildCelebrationSegment(input: {
  leveledUp: boolean;
  hasParcours: boolean;
}): CelebrationScreen[] {
  const segment: CelebrationScreen[] = ["done"];
  if (input.leveledUp) segment.push("levelUp");
  if (input.hasParcours) segment.push("collection");
  return segment;
}

/**
 * Queue de la séquence, résolue au moment du clic sur le carrefour de décision (faire ou sauter
 * le quiz est un choix de l'utilisateur, inconnu au moment où le segment de célébration est
 * calculé). Une queue vide signifie que le bouton "Retour à l'accueil" du dernier écran de
 * célébration navigue directement vers "/".
 */
export function resolveOutroTail(input: {
  takeQuiz: boolean;
  streakAdvanced: boolean;
}): OutroScreen[] {
  const tail: OutroScreen[] = [];
  if (input.takeQuiz) {
    tail.push("quiz", "quizResult");
  }
  if (input.streakAdvanced) {
    tail.push("streak");
  }
  return tail;
}
