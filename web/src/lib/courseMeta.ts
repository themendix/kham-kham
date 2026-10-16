import type { Course, CourseMeta } from "@/types";

/** Réduit un cours complet à ses seules métadonnées — utilisé quand un contenu déjà chargé
 * (recherche dans les leçons, une fois le chunk de matière disponible) doit s'afficher au même
 * format que l'index léger (`CourseCard` n'accepte que `CourseMeta`). */
export function toCourseMeta(course: Course): CourseMeta {
  return {
    id: course.id,
    categoryId: course.categoryId,
    title: course.title,
    description: course.description,
    emoji: course.emoji,
    xp: course.xp,
    lessons: course.lessons.map((l) => ({ id: l.id })),
    quizCount: course.quiz.length,
  };
}
