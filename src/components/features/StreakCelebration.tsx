import { Flame } from "lucide-react";
import type { StreakState } from "@/types";
import { WeekDayRow } from "@/components/features/WeekDayRow";
import { OutroLayout } from "@/components/features/OutroLayout";

interface StreakCelebrationProps {
  streak: StreakState;
  subjectName: string;
  onHome: () => void;
}

/** Écran 5 (conditionnel) : dernier écran possible de la séquence, affiché seulement si la série a réellement progressé aujourd'hui */
export function StreakCelebration({ streak, subjectName, onHome }: StreakCelebrationProps) {
  return (
    <OutroLayout primaryLabel="Retour à l'accueil 🏠" onPrimary={onHome}>
      <Flame className="mx-auto h-12 w-12 text-flame sm:h-16 sm:w-16" fill="currentColor" />
      <div className="mt-3 text-[40px] font-extrabold leading-none sm:text-[56px]">{streak.count}</div>
      <div className="mt-1 font-heading text-lg font-bold uppercase tracking-wide">
        {streak.count > 1 ? "Jours" : "Jour"} de suite
      </div>
      <p className="mt-3 font-medium text-ink-muted">
        Tu deviens vraiment cultivé, tu deviens incollable en {subjectName} !
      </p>

      <div className="mt-6">
        <WeekDayRow weekDays={streak.weekDays} />
      </div>
    </OutroLayout>
  );
}
