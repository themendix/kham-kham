import type { UserProgress } from "@/types";

const SEEN_KEY = "sankofa-onboarding-vu";

/** Vrai pour un utilisateur qui n'a encore rien fait — c'est ce qui épargne l'onboarding aux utilisateurs existants, qui n'ont pas la clé `SEEN_KEY` en localStorage */
export function isNewUser(progress: UserProgress): boolean {
  return (
    progress.xp === 0 &&
    progress.completedLessonIds.length === 0 &&
    progress.dismissedCourseIds.length === 0 &&
    progress.favoriteCourseIds.length === 0
  );
}

export function hasSeenOnboarding(): boolean {
  try {
    return localStorage.getItem(SEEN_KEY) === "1";
  } catch {
    // Navigation privée / localStorage indisponible : ne pas imposer l'onboarding si on ne sait pas.
    return true;
  }
}

export function markOnboardingSeen(): void {
  try {
    localStorage.setItem(SEEN_KEY, "1");
  } catch {
    // Rien à faire : au pire l'onboarding réapparaît, ce n'est pas bloquant.
  }
}

// Les deux conditions sont nécessaires : localStorage seul ferait voir l'onboarding aux anciens
// utilisateurs (qui n'ont jamais posé la clé) ; le dérivé seul le ferait revenir après "Passer".
export function shouldShowOnboarding(progress: UserProgress): boolean {
  return isNewUser(progress) && !hasSeenOnboarding();
}
