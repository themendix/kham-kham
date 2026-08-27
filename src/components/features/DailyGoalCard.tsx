import { Flame, PartyPopper } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";

interface DailyGoalCardProps {
  lessonsLearnedToday: number;
  goal: number;
  streakCount: number;
}

function greeting(hour: number): { title: string; subtitle: string } {
  if (hour < 12) return { title: "Bonjour", subtitle: "Prêt à explorer l'Afrique aujourd'hui ?" };
  if (hour < 18) return { title: "Bon après-midi", subtitle: "Une pause pour apprendre quelque chose de neuf ?" };
  return { title: "Bonsoir", subtitle: "Un dernier savoir avant la fin de la journée ?" };
}

/** Salutation contextuelle + objectif quotidien de cartes apprises, en tête du Home */
export function DailyGoalCard({ lessonsLearnedToday, goal, streakCount }: DailyGoalCardProps) {
  const { title, subtitle } = greeting(new Date().getHours());
  const goalReached = lessonsLearnedToday >= goal;

  return (
    <Card className="p-5 md:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold md:text-2xl">{title} 👋</h2>
          <p className="mt-1 font-medium text-ink-muted">{subtitle}</p>
        </div>
        <div className="flex shrink-0 items-center gap-1.5 rounded-full border-[2.5px] border-ink bg-cream px-3.5 py-1.5 font-heading text-sm font-extrabold shadow-sm">
          <Flame className="h-4 w-4 text-flame" fill="currentColor" />
          {streakCount}
        </div>
      </div>

      {goalReached ? (
        <div className="mt-4 flex items-center gap-2 rounded-2xl border-[2.5px] border-ink bg-gold/25 px-4 py-3 font-heading font-bold">
          <PartyPopper className="h-5 w-5" /> Objectif atteint ! 🎉
        </div>
      ) : (
        <>
          <div className="mt-4 flex items-center justify-between font-heading text-sm font-bold text-ink-muted">
            <span>Objectif du jour</span>
            <span>
              {lessonsLearnedToday} / {goal} leçons
            </span>
          </div>
          <ProgressBar percent={(lessonsLearnedToday / goal) * 100} />
        </>
      )}
    </Card>
  );
}
