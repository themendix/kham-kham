import type { Parcours } from "@/types";

/**
 * Parcours qui viennent tout juste d'être complétés : tous leurs `courseIds` sont désormais
 * dans `completedCourseIds`, mais ils ne sont pas encore dans `completedParcoursIds`.
 * Fonction pure, sans accès au store — utilisée à la fois par l'action `completeCourse`
 * (déclenchement en temps réel, à la complétion d'un cours) et par la migration du store
 * (rattrapage rétroactif des parcours déjà complets avant l'introduction de cette fonctionnalité).
 */
export function getNewlyCompletedParcours(
  allParcours: Parcours[],
  completedCourseIds: string[],
  completedParcoursIds: string[],
): Parcours[] {
  return allParcours.filter(
    (p) => !completedParcoursIds.includes(p.id) && p.courseIds.every((id) => completedCourseIds.includes(id)),
  );
}
