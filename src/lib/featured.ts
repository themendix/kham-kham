import type { Category, Course, Lesson } from "@/types";

/** Clé unique d'une leçon, `lessonId` n'étant pas garanti unique globalement */
export function lessonKey(courseId: string, lessonId: string): string {
  return `${courseId}:${lessonId}`;
}

/** Résout une clé de leçon (`courseId:lessonId`) en son cours et sa leçon, ou null si irrésolvable */
export function getLessonRef(
  key: string,
  allCourses: Course[],
): { course: Course; lesson: Lesson } | null {
  const sep = key.indexOf(":");
  if (sep === -1) return null;
  const courseId = key.slice(0, sep);
  const lessonId = key.slice(sep + 1);
  const course = allCourses.find((c) => c.id === courseId);
  const lesson = course?.lessons.find((l) => l.id === lessonId);
  if (!course || !lesson) return null;
  return { course, lesson };
}

/** Renvoie la clé de la première leçon non lue d'une catégorie (ordre COURSES puis lessons), ou null si tout est lu */
function firstUnreadKeyInCategory(
  categoryId: string,
  completed: Set<string>,
  allCourses: Course[],
): string | null {
  for (const course of allCourses) {
    if (course.categoryId !== categoryId) continue;
    for (const lesson of course.lessons) {
      const key = lessonKey(course.id, lesson.id);
      if (!completed.has(key)) return key;
    }
  }
  return null;
}

/**
 * Choisit la prochaine leçon à mettre en avant dans « À la une » : une matière
 * différente de `previousCategoryId` tirée au hasard parmi celles ayant encore
 * une leçon non lue (repli sur `previousCategoryId` s'il n'en reste qu'une),
 * puis la première leçon non lue de cette matière dans l'ordre du catalogue.
 * Fonction pure : ne mute ni ne lit de state externe.
 */
export function pickNextFeaturedLesson(params: {
  completedLessonIds: string[];
  previousCategoryId?: string;
  allCourses: Course[];
  allCategories: Category[];
}): string | null {
  const { completedLessonIds, previousCategoryId, allCourses, allCategories } = params;
  const completed = new Set(completedLessonIds);

  const candidateCategoryIds = allCategories
    .map((cat) => cat.id)
    .filter((id) => firstUnreadKeyInCategory(id, completed, allCourses) !== null);

  if (candidateCategoryIds.length === 0) return null;

  const otherCandidates = candidateCategoryIds.filter((id) => id !== previousCategoryId);
  const pool = otherCandidates.length > 0 ? otherCandidates : candidateCategoryIds;
  const chosenCategoryId = pool[Math.floor(Math.random() * pool.length)];

  return firstUnreadKeyInCategory(chosenCategoryId, completed, allCourses);
}
