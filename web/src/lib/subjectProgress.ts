import type { Category, UserProgress } from "@/types";

/**
 * Sous-ensemble minimal d'un cours utilisé par toute la logique de progression de matière :
 * ni le contenu des leçons ni le quiz n'y sont jamais touchés. Satisfait aussi bien par
 * `Course` (catalogue complet) que par `CourseMeta` (index léger, `@/data/coursesIndex.generated`)
 * — ces fonctions tournent donc sans jamais avoir besoin de charger le contenu complet des
 * matières. Voir docs/ARCHITECTURE.md § Découpage du bundle.
 */
export interface CourseForProgress {
  id: string;
  categoryId: string;
  xp: number;
}

/** Nombre de cours terminés requis pour monter d'un niveau dans une matière */
export const COURSES_PER_LEVEL = 3;

/**
 * Une matière est « en cours de constitution » en dessous de ce seuil de cours — le radar et
 * les recommandations la traitent honnêtement (badge dédié, pas de bonus de découverte
 * artificiel) plutôt que de la présenter à égalité avec Histoire/Géographie. Aligné sur
 * `COURSES_PER_LEVEL` : en dessous, la notion même de « niveau de matière » n'a pas de sens.
 */
export const EMERGING_SUBJECT_MAX_COURSES = COURSES_PER_LEVEL;

/** Une matière à moins de `EMERGING_SUBJECT_MAX_COURSES` cours est encore en construction éditoriale */
export function isSubjectEmerging(categoryId: string, allCourses: CourseForProgress[]): boolean {
  const total = allCourses.filter((c) => c.categoryId === categoryId).length;
  return total < EMERGING_SUBJECT_MAX_COURSES;
}

export interface SubjectProgress {
  totalCount: number;
  completedCount: number;
  startedCount: number;
  xp: number;
  level: number;
  progressPct: number;
  coursesIntoLevel: number;
}

/** Calcule le niveau, l'XP et la progression d'une matière à partir des cours et de la progression utilisateur */
export function getSubjectProgress(
  categoryId: string,
  progress: UserProgress,
  allCourses: CourseForProgress[],
): SubjectProgress {
  const subjectCourses = allCourses.filter((c) => c.categoryId === categoryId);
  const completedCourses = subjectCourses.filter((c) =>
    progress.completedCourseIds.includes(c.id),
  );
  const startedCount = subjectCourses.filter(
    (c) =>
      progress.startedCourseIds.includes(c.id) && !progress.completedCourseIds.includes(c.id),
  ).length;

  const completedCount = completedCourses.length;
  const xp = completedCourses.reduce((sum, c) => sum + c.xp, 0);
  const level = Math.floor(completedCount / COURSES_PER_LEVEL) + 1;
  const coursesIntoLevel = completedCount % COURSES_PER_LEVEL;
  const progressPct = (coursesIntoLevel / COURSES_PER_LEVEL) * 100;

  return {
    totalCount: subjectCourses.length,
    completedCount,
    startedCount,
    xp,
    level,
    progressPct,
    coursesIntoLevel,
  };
}

/**
 * Maîtrise dérivée (sur 100) d'une matière : proportion de ses cours réellement terminés.
 * Remplace l'ancienne accumulation `masteryByCategory` (E2) — même pattern que
 * `getSubjectProgress`, rien n'est stocké, tout est recalculé à la lecture depuis
 * `completedCourseIds`. Une matière sans cours renvoie 0 (jamais de division par zéro).
 */
export function getMasteryByCategory(
  progress: UserProgress,
  allCourses: CourseForProgress[],
  allCategories: Category[],
): Record<string, number> {
  const mastery: Record<string, number> = {};
  for (const category of allCategories) {
    const { completedCount, totalCount } = getSubjectProgress(category.id, progress, allCourses);
    mastery[category.id] = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);
  }
  return mastery;
}

export type CourseStatus = "afaire" | "encours" | "termine";

/** État d'un cours pour un utilisateur donné : terminé > en cours > à faire */
export function getCourseStatus(courseId: string, progress: UserProgress): CourseStatus {
  if (progress.completedCourseIds.includes(courseId)) return "termine";
  if (progress.startedCourseIds.includes(courseId)) return "encours";
  return "afaire";
}
