import type { UserProgress } from "@/types";

const SEEN_KEY = "sankofa-guide-vu";

/** Vrai pour un utilisateur qui n'a encore rien fait — c'est ce qui épargne le guide aux utilisateurs existants, qui n'ont pas la clé `SEEN_KEY` en localStorage */
export function isNewUser(progress: UserProgress): boolean {
  return (
    progress.xp === 0 &&
    progress.completedLessonIds.length === 0 &&
    progress.dismissedCourseIds.length === 0 &&
    progress.favoriteCourseIds.length === 0
  );
}

export function hasSeenGuide(): boolean {
  try {
    return localStorage.getItem(SEEN_KEY) === "1";
  } catch {
    // Navigation privée / localStorage indisponible : ne pas imposer le guide si on ne sait pas.
    return true;
  }
}

export function markGuideSeen(): void {
  try {
    localStorage.setItem(SEEN_KEY, "1");
  } catch {
    // Rien à faire : au pire le guide réapparaît, ce n'est pas bloquant.
  }
}

// Les deux conditions sont nécessaires : localStorage seul ferait voir le guide aux anciens
// utilisateurs (qui n'ont jamais posé la clé) ; le dérivé seul le ferait revenir après "Passer".
export function shouldShowGuide(progress: UserProgress): boolean {
  return isNewUser(progress) && !hasSeenGuide();
}
