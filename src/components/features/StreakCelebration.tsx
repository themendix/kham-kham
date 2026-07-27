import { Flame } from "lucide-react";
import type { StreakState } from "@/types";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { WeekDayRow } from "@/components/features/WeekDayRow";

interface StreakCelebrationProps {
  streak: StreakState;
  subjectName: string;
  onHome: () => void;
}

/** Dernier écran de la séquence de fin de cours : célébration du streak, retour à l'accueil */
export function StreakCelebration({ streak, subjectName, onHome }: StreakCelebrationProps) {
  return (
    <Card className="p-8 text-center">
      <Flame className="mx-auto h-16 w-16 text-flame" fill="currentColor" />
      <div className="mt-2 text-5xl font-extrabold">{streak.count}</div>
      <div className="mt-1 font-heading text-lg font-bold uppercase tracking-wide">
        {streak.count > 1 ? "Jours" : "Jour"} de suite
      </div>
      <p className="mt-3 font-medium text-ink-muted">
        Tu deviens vraiment cultivé, tu deviens incollable en {subjectName} !
      </p>

      <div className="mt-6">
        <WeekDayRow weekDays={streak.weekDays} />
      </div>

      <div className="mt-6">
        <Button variant="primary" onClick={onHome}>
          Retour à l'accueil 🏠
        </Button>
      </div>
    </Card>
  );
}
