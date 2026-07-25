import { Flame } from "lucide-react";

const DAY_LABELS = ["L", "M", "M", "J", "V", "S", "D"];

interface WeekDayRowProps {
  /** Jours actifs de la semaine en cours, index 0 = lundi ... 6 = dimanche */
  weekDays: boolean[];
}

/** Rangée L-M-M-J-V-S-D avec pastilles de jour actif, partagée entre StreakTracker et StreakCelebration */
export function WeekDayRow({ weekDays }: WeekDayRowProps) {
  return (
    <div className="flex justify-between">
      {DAY_LABELS.map((label, i) => (
        <div key={i} className="text-center text-xs font-bold">
          <div>{label}</div>
          <div
            className={`mt-1.5 grid h-[30px] w-[30px] place-items-center rounded-full border-[2.5px] border-ink ${
              weekDays[i] ? "bg-flame text-white" : "bg-card"
            }`}
          >
            {weekDays[i] && <Flame className="h-3.5 w-3.5" fill="currentColor" />}
          </div>
        </div>
      ))}
    </div>
  );
}
