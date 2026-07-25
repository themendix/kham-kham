import type { Course, UserProgress } from "@/types";

export interface Recommendation {
  course: Course;
  reason: string;
}

const LAST_CATEGORY_BONUS = 60;
const DISCOVERY_BONUS = 15;

/**
 * Score d'affinité d'un cours candidat pour un utilisateur donné, et la raison
 * de recommandation associée à la règle la plus significative qui s'applique
 * (dans l'ordre : matière du dernier cours ouvert, maîtrise déjà acquise,
 * découverte d'une matière jamais touchée).
 */
function scoreCourse(
  course: Course,
  progress: UserProgress,
  lastCategoryId: string | null,
): { score: number; reason: string } {
  const mastery = progress.masteryByCategory[course.categoryId] ?? 0;
  const isLastCategory = lastCategoryId !== null && course.categoryId === lastCategoryId;
  const isDiscovery = mastery === 0 && !isLastCategory;

  const score = (isLastCategory ? LAST_CATEGORY_BONUS : 0) + mastery + (isDiscovery ? DISCOVERY_BONUS : 0);

  if (isLastCategory) return { score, reason: "Pour continuer sur ta lancée" };
  if (mastery > 0) return { score, reason: "Dans une matière que tu explores" };
  if (isDiscovery) return { score, reason: "Une nouvelle matière à découvrir" };
  return { score, reason: "Sélectionné pour toi" };
}

/**
 * Recommande jusqu'à `limit` cours non terminés parmi `courses`, triés par
 * affinité déterministe avec la progression de l'utilisateur — pas de
 * back-end, tout est calculé côté client à partir du contenu statique et de
 * `UserProgress`. La matière du dernier cours ouvert (`progress.lastCourseId`)
 * est recherchée dans `courses` : si l'appelant a filtré ce cours de la liste
 * (ex. pour éviter un doublon avec un cours déjà mis en avant ailleurs), son
 * bonus d'affinité ne s'applique pas.
 *
 * Tri par score décroissant, stable à score égal (ordre de `courses`
 * conservé grâce à un index de secours dans le comparateur) — un utilisateur
 * sans aucune progression obtient donc une sélection de découverte dans
 * l'ordre du catalogue, tous les cours étant à égalité de score.
 *
 * Fonction pure : ne mute ni `courses` ni `progress`.
 */
export function recommendCourses(
  courses: Course[],
  progress: UserProgress,
  limit = 4,
): Recommendation[] {
  const lastCourse = progress.lastCourseId
    ? courses.find((c) => c.id === progress.lastCourseId)
    : undefined;
  const lastCategoryId = lastCourse?.categoryId ?? null;

  return courses
    .map((course, index) => ({ course, index, ...scoreCourse(course, progress, lastCategoryId) }))
    .filter(({ course }) => !progress.completedCourseIds.includes(course.id))
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, limit)
    .map(({ course, reason }) => ({ course, reason }));
}
