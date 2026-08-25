import type { Course, Lesson } from "@/types";
import { COURSE_INDEX } from "@/data/coursesIndex.generated";
import { getLessonRef } from "@/lib/featured";

/**
 * Chargement à la demande du contenu complet (leçons + quiz) par matière. Le texte du
 * catalogue n'est importé que lorsqu'un écran en a réellement besoin (ouverture d'un cours,
 * lecture de la vedette Biblio, Défi du jour) : chaque matière a son propre chunk, y compris
 * Découverte depuis qu'elle a vocation à grossir. Voir docs/ARCHITECTURE.md § Découpage du
 * bundle.
 */
const SUBJECT_LOADERS: Record<string, () => Promise<Course[]>> = {
  histoire: () => import("@/data/courses/histoire").then((m) => m.HISTOIRE_COURSES),
  geo: () => import("@/data/courses/geographie").then((m) => m.GEOGRAPHIE_COURSES),
  perso: () => import("@/data/courses/personnalites").then((m) => m.PERSONNALITES_COURSES),
  decouverte: () => import("@/data/courses/decouverte").then((m) => m.DECOUVERTE_COURSES),
};

const subjectCache = new Map<string, Course[]>();
let allContentPromise: Promise<Course[]> | null = null;

/** Contenu complet des cours d'une matière. Mis en cache : un seul fetch réseau par matière. */
export function getSubjectContent(categoryId: string): Promise<Course[]> {
  const loader = SUBJECT_LOADERS[categoryId];
  if (!loader) return Promise.resolve([]);

  const cached = subjectCache.get(categoryId);
  if (cached) return Promise.resolve(cached);

  return loader().then((courses) => {
    subjectCache.set(categoryId, courses);
    return courses;
  });
}

/**
 * Précharge en tâche de fond, sans bloquer le rendu, tout le contenu du catalogue (les quatre
 * matières). Idempotent et mémorisé : un seul chargement réseau même
 * appelé depuis plusieurs écrans (`useCatalogContent`, déclenché une fois au montage de
 * `AppShell`). Nécessaire pour les écrans qui parcourent tout le catalogue (Défi du jour,
 * recherche dans le contenu des leçons) sans pouvoir cibler une seule matière à l'avance.
 */
export function preloadAllSubjectContent(): Promise<Course[]> {
  if (!allContentPromise) {
    allContentPromise = Promise.all(Object.keys(SUBJECT_LOADERS).map(getSubjectContent)).then(
      (groups) => groups.flat(),
    );
  }
  return allContentPromise;
}

/** Charge le cours complet (leçons + quiz) correspondant à un id, en ne récupérant que le chunk de sa matière. */
export function getFullCourse(courseId: string): Promise<Course | undefined> {
  const meta = COURSE_INDEX.find((c) => c.id === courseId);
  if (!meta) return Promise.resolve(undefined);
  return getSubjectContent(meta.categoryId).then((courses) => courses.find((c) => c.id === courseId));
}

/** Résout une clé de leçon (`courseId:lessonId`) en son cours et sa leçon complets, en ne chargeant que le chunk de la matière concernée. */
export function getFullLessonRef(key: string): Promise<{ course: Course; lesson: Lesson } | null> {
  const sep = key.indexOf(":");
  if (sep === -1) return Promise.resolve(null);
  const courseId = key.slice(0, sep);
  const meta = COURSE_INDEX.find((c) => c.id === courseId);
  if (!meta) return Promise.resolve(null);
  return getSubjectContent(meta.categoryId).then((courses) => getLessonRef(key, courses));
}
