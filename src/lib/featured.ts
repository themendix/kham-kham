import type { Category } from "@/types";

/**
 * Ces fonctions ne touchent jamais au contenu d'une leçon (titre, texte) : seulement son `id`
 * et la matière de son cours. Génériques sur ce sous-ensemble minimal, elles fonctionnent aussi
 * bien avec le catalogue complet (`Course[]`) qu'avec l'index léger de métadonnées
 * (`CourseMeta[]`, `@/data/coursesIndex.generated`) — c'est ce qui permet au store
 * (`useAppStore`) de piloter la rotation « à la une » sans jamais charger le contenu complet
 * des matières. Voir docs/ARCHITECTURE.md § Découpage du bundle.
 */
interface MinimalLesson {
  id: string;
}
interface MinimalCourse {
  id: string;
  categoryId: string;
  lessons: MinimalLesson[];
}

/** Clé unique d'une leçon, `lessonId` n'étant pas garanti unique globalement */
export function lessonKey(courseId: string, lessonId: string): string {
  return `${courseId}:${lessonId}`;
}

/** Résout une clé de leçon (`courseId:lessonId`) en son cours et sa leçon, ou null si irrésolvable */
export function getLessonRef<C extends MinimalCourse>(
  key: string,
  allCourses: C[],
): { course: C; lesson: C["lessons"][number] } | null {
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
function firstUnreadKeyInCategory<C extends MinimalCourse>(
  categoryId: string,
  completed: Set<string>,
  allCourses: C[],
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
export function pickNextFeaturedLesson<C extends MinimalCourse>(params: {
  completedLessonIds: string[];
  previousCategoryId?: string;
  allCourses: C[];
  allCategories: Category[];
  /** Clés supplémentaires à traiter comme non disponibles sans les marquer lues (ex. la
   * vedette Biblio courante, pour que le fil Home ne propose jamais la même leçon qu'elle) */
  excludeKeys?: string[];
}): string | null {
  const { completedLessonIds, previousCategoryId, allCourses, allCategories, excludeKeys } = params;
  const completed = new Set([...completedLessonIds, ...(excludeKeys ?? [])]);

  const candidateCategoryIds = allCategories
    .map((cat) => cat.id)
    .filter((id) => firstUnreadKeyInCategory(id, completed, allCourses) !== null);

  if (candidateCategoryIds.length === 0) return null;

  const otherCandidates = candidateCategoryIds.filter((id) => id !== previousCategoryId);
  const pool = otherCandidates.length > 0 ? otherCandidates : candidateCategoryIds;
  const chosenCategoryId = pool[Math.floor(Math.random() * pool.length)];

  return firstUnreadKeyInCategory(chosenCategoryId, completed, allCourses);
}
