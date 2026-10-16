import Storage from "expo-sqlite/kv-store";
import type { UserProgress } from "@/types";
const SEEN_KEY = "sankofa-onboarding-vu";
export function isNewUser(progress: UserProgress): boolean { return progress.xp === 0 && progress.completedLessonIds.length === 0 && progress.dismissedCourseIds.length === 0 && progress.favoriteCourseIds.length === 0; }
export function hasSeenOnboarding(): boolean { try { return Storage.getItemSync(SEEN_KEY) === "1"; } catch { return true; } }
export function markOnboardingSeen(): void { Storage.setItemSync(SEEN_KEY, "1"); }
export function shouldShowOnboarding(progress: UserProgress): boolean { return isNewUser(progress) && !hasSeenOnboarding(); }
