import { getCachedCatalogContent, preloadAllSubjectContent } from "@/data/courseContent";
import { useContentResource } from "./useContentResource";

/**
 * Contenu complet du catalogue (leçons + quiz), chargé en tâche de fond après le montage.
 * Expose valeur, état et nouvelle tentative ; la valeur reste null avant la réussite.
 * Les écrans se rabattent sur `COURSE_INDEX` (métadonnées toujours disponibles). Le
 * préchargement est déclenché une seule fois pour toute l'application (`AppShell`) ; ce hook ne
 * fait que s'abonner à la promesse déjà en cours (ou déjà résolue).
 */
export function useCatalogContent() {
  return useContentResource("catalogue", getCachedCatalogContent, preloadAllSubjectContent);
}
