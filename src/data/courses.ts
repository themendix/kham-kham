import type { Course } from "@/types";
import { HISTOIRE_COURSES } from "@/data/courses/histoire";
import { GEOGRAPHIE_COURSES } from "@/data/courses/geographie";
import { PERSONNALITES_COURSES } from "@/data/courses/personnalites";
import { DECOUVERTE_COURSES } from "@/data/courses/decouverte";

/**
 * Catalogue complet, contenu inclus (leçons + quiz) — source canonique utilisée par le
 * validateur (`scripts/validate-content.ts`), le générateur d'index léger
 * (`scripts/generate-course-index.ts`) et le chargement à la demande par matière
 * (`src/data/courseContent.ts`). NE PAS importer ce module depuis le code applicatif qui
 * s'exécute dans le navigateur (routes/, components/, store/) : cela réintroduirait tout le
 * contenu (histoire.ts + geographie.ts, ~430 Ko de texte) dans le bundle initial — voir
 * docs/ARCHITECTURE.md § Découpage du bundle. Utiliser `COURSE_INDEX`
 * (`@/data/coursesIndex.generated`) pour les listes/la recherche, et `getSubjectContent`/
 * `getFullCourse` (`@/data/courseContent`) pour le contenu complet à la demande.
 */
export const COURSES: Course[] = [
  ...HISTOIRE_COURSES,
  ...GEOGRAPHIE_COURSES,
  ...PERSONNALITES_COURSES,
  ...DECOUVERTE_COURSES,
];

export function getCourse(id: string): Course | undefined {
  return COURSES.find((c) => c.id === id);
}

/**
 * Résout un cours en signalant bruyamment toute référence introuvable, au lieu de la
 * laisser filtrée en silence (c'est ce silence qui a laissé passer le parcours orphelin
 * `course-geo-grand-continent`).
 * - `strict: true` (données éditoriales, ex. `src/data/parcours.ts`) : une référence cassée
 *   ne devrait jamais exister — `npm run validate` la détecte déjà en amont, mais en
 *   développement on fait échouer bruyamment le rendu plutôt que de continuer en silence.
 * - `strict: false` (défaut, références issues de `UserProgress` : favoris, dernier cours
 *   ouvert, historique de quiz) : ces id peuvent légitimement devenir obsolètes si le
 *   catalogue rétrécit après coup — on journalise en développement et on dégrade en
 *   silence en production, sans écran blanc.
 */
export function getCourseOrWarn(
  id: string,
  source: string,
  options?: { strict?: boolean },
): Course | undefined {
  const course = getCourse(id);
  if (!course && import.meta.env.DEV) {
    const message = `[Sankofa] Référence de cours introuvable : "${id}" (source : ${source}).`;
    if (options?.strict) {
      throw new Error(`${message} Lance "npm run validate" pour détecter ce type d'anomalie avant le build.`);
    }
    console.error(message);
  }
  return course;
}
