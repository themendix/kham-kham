import type { Course, UserProgress } from "@/types";

/** Nombre de cours terminés requis pour monter d'un niveau dans une matière */
export const COURSES_PER_LEVEL = 3;

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
  allCourses: Course[],
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

export type CourseStatus = "afaire" | "encours" | "termine";

/** État d'un cours pour un utilisateur donné : terminé > en cours > à faire */
export function getCourseStatus(courseId: string, progress: UserProgress): CourseStatus {
  if (progress.completedCourseIds.includes(courseId)) return "termine";
  if (progress.startedCourseIds.includes(courseId)) return "encours";
  return "afaire";
}
