import type { CourseMeta } from "@/types";
import { COURSE_INDEX } from "@/data/coursesIndex.generated";

export function getCourseMeta(id: string): CourseMeta | undefined {
  return COURSE_INDEX.find((c) => c.id === id);
}

/**
 * Équivalent de `getCourseOrWarn` (`@/data/courses`) mais résolu sur l'index léger de
 * métadonnées : pour les écrans qui n'ont besoin que d'afficher un cours (titre, emoji,
 * matière, XP) sans jamais lire ses leçons ni son quiz — Favoris, Collections, historique de
 * quiz, « Continue ton apprentissage ». Évite de charger le chunk de contenu complet de la
 * matière juste pour un affichage.
 */
export function getCourseMetaOrWarn(
  id: string,
  source: string,
  options?: { strict?: boolean },
): CourseMeta | undefined {
  const course = getCourseMeta(id);
  if (!course && import.meta.env.DEV) {
    const message = `[Sankofa] Référence de cours introuvable : "${id}" (source : ${source}).`;
    if (options?.strict) {
      throw new Error(`${message} Lance "npm run validate" pour détecter ce type d'anomalie avant le build.`);
    }
    console.error(message);
  }
  return course;
}
