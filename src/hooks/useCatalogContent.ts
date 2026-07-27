import { useEffect, useState } from "react";
import type { Course } from "@/types";
import { preloadAllSubjectContent } from "@/data/courseContent";

/**
 * Contenu complet du catalogue (leçons + quiz), chargé en tâche de fond après le montage.
 * Renvoie `null` tant que le préchargement n'est pas terminé — les écrans doivent se rabattre
 * sur `COURSE_INDEX` (métadonnées, toujours disponible immédiatement) en attendant. Le
 * préchargement est déclenché une seule fois pour toute l'application (`AppShell`) ; ce hook ne
 * fait que s'abonner à la promesse déjà en cours (ou déjà résolue).
 */
export function useCatalogContent(): Course[] | null {
  const [courses, setCourses] = useState<Course[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    preloadAllSubjectContent().then((all) => {
      if (!cancelled) setCourses(all);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return courses;
}
