import { Flame } from "lucide-react";
import type { StreakState } from "@/types";
import { WeekDayRow } from "@/components/features/WeekDayRow";

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
        <WeekDayRow weekDays={streak.weekDays} />
      </div>
    </div>
  );
}
