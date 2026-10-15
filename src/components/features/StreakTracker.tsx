import { Flame } from "lucide-react";
import type { StreakState } from "@/types";
import { WeekDayRow } from "@/components/features/WeekDayRow";
import { currentWeekDays } from "@/lib/gamification";

interface StreakTrackerProps {
  streak: StreakState;
}

/** Bloc streak du Profil : compteur + semaine L-M-M-J-V-S-D avec jours actifs */
export function StreakTracker({ streak }: StreakTrackerProps) {
  return (
    <div className="mb-4 rounded-[22px] border-[3px] border-ink bg-histoire p-4 shadow-sm">
      <div className="flex items-center gap-2.5 text-xl font-extrabold">
        <Flame className="h-5 w-5 text-flame" fill="currentColor" />
        {streak.count} {streak.count > 1 ? "JOURS" : "JOUR"}
      </div>
      <div className="mt-3.5">
        <WeekDayRow weekDays={currentWeekDays(streak)} compact />
      </div>
      <p className="mt-3 text-sm font-medium text-ink-muted">
        Termine une leçon ou un quiz pour entretenir ta série. Une relecture compte aussi.
      </p>
    </div>
  );
}
