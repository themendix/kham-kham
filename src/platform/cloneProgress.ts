import type { UserProgress } from "@/types";
/** Progress uses the same JSON format on disk and in memory, including on Hermes. */
export function cloneProgress(progress: UserProgress): UserProgress {
  return JSON.parse(JSON.stringify(progress)) as UserProgress;
}
