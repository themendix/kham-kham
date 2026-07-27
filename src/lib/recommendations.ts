import type { Category, UserProgress } from "@/types";
import { getMasteryByCategory, isSubjectEmerging, type CourseForProgress } from "@/lib/subjectProgress";

export interface Recommendation<C> {
  course: C;
  reason: string;
}

const LAST_CATEGORY_BONUS = 60;
const DISCOVERY_BONUS = 15;

/**
 * Score d'affinité d'un cours candidat pour un utilisateur donné, et la raison
 * de recommandation associée à la règle la plus significative qui s'applique
 * (dans l'ordre : matière du dernier cours ouvert, maîtrise déjà acquise,
 * découverte d'une matière jamais touchée).
 *
 * `masteryByCategory` est la maîtrise dérivée (E2, `getMasteryByCategory`), pas un compteur
 * stocké. `emergingCategoryIds` neutralise le bonus découverte pour les matières encore à un
 * seul cours (E4) : sans ce garde-fou, un cours jamais touché d'une matière à 1 cours saute
 * instantanément à une maîtrise dérivée de 0 % qui resterait maximale indéfiniment tant qu'il
 * n'est pas terminé, faisant remonter en boucle les mêmes petites matières devant tout le reste
 * du catalogue.
 */
function scoreCourse<C extends CourseForProgress>(
  course: C,
  lastCategoryId: string | null,
  masteryByCategory: Record<string, number>,
  emergingCategoryIds: Set<string>,
): { score: number; reason: string } {
  const mastery = masteryByCategory[course.categoryId] ?? 0;
  const isLastCategory = lastCategoryId !== null && course.categoryId === lastCategoryId;
  const isEmerging = emergingCategoryIds.has(course.categoryId);
  const isDiscovery = mastery === 0 && !isLastCategory && !isEmerging;

  const score = (isLastCategory ? LAST_CATEGORY_BONUS : 0) + mastery + (isDiscovery ? DISCOVERY_BONUS : 0);

  if (isLastCategory) return { score, reason: "Pour continuer sur ta lancée" };
  if (mastery > 0) return { score, reason: "Dans une matière que tu explores" };
  if (isDiscovery) return { score, reason: "Une nouvelle matière à découvrir" };
  if (isEmerging) return { score, reason: "Une matière en cours de constitution" };
  return { score, reason: "Sélectionné pour toi" };
}

/**
 * Recommande jusqu'à `limit` cours non terminés parmi `candidates`, triés par
 * affinité déterministe avec la progression de l'utilisateur — pas de
 * back-end, tout est calculé côté client à partir du contenu statique et de
 * `UserProgress`. La matière du dernier cours ouvert (`progress.lastCourseId`)
 * est recherchée dans `candidates` : si l'appelant a filtré ce cours de la liste
 * (ex. pour éviter un doublon avec un cours déjà mis en avant ailleurs), son
 * bonus d'affinité ne s'applique pas.
 *
 * `allCourses` sert uniquement à calculer la maîtrise dérivée par matière et à détecter les
 * matières émergentes sur l'intégralité du catalogue, même si `candidates` en est un
 * sous-ensemble.
 *
 * Tri par score décroissant, stable à score égal (ordre de `candidates`
 * conservé grâce à un index de secours dans le comparateur) — un utilisateur
 * sans aucune progression obtient donc une sélection de découverte dans
 * l'ordre du catalogue, tous les cours étant à égalité de score.
 *
 * Fonction pure : ne mute ni `candidates` ni `progress`.
 */
export function recommendCourses<C extends CourseForProgress>(
  candidates: C[],
  allCourses: C[],
  allCategories: Category[],
  progress: UserProgress,
  limit = 4,
): Recommendation<C>[] {
  const lastCourse = progress.lastCourseId
    ? candidates.find((c) => c.id === progress.lastCourseId)
    : undefined;
  const lastCategoryId = lastCourse?.categoryId ?? null;

  const masteryByCategory = getMasteryByCategory(progress, allCourses, allCategories);
  const emergingCategoryIds = new Set(
    allCategories.map((cat) => cat.id).filter((id) => isSubjectEmerging(id, allCourses)),
  );

  return candidates
    .map((course, index) => ({
      course,
      index,
      ...scoreCourse(course, lastCategoryId, masteryByCategory, emergingCategoryIds),
    }))
    .filter(({ course }) => !progress.completedCourseIds.includes(course.id))
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, limit)
    .map(({ course, reason }) => ({ course, reason }));
}
