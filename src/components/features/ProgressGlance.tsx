import { Sparkles, Flame, Layers } from "lucide-react";
import { StatCard } from "@/components/features/StatCard";

interface ProgressGlanceProps {
  xpToday: number;
  streakCount: number;
  totalLessonsLearned: number;
}

/** Mini aperçu compact de la progression : XP du jour, série, cartes apprises au total */
export function ProgressGlance({ xpToday, streakCount, totalLessonsLearned }: ProgressGlanceProps) {
  return (
    <div className="grid grid-cols-3 gap-3.5">
      <StatCard icon={Sparkles} iconBgClassName="bg-gold" value={`＋${xpToday}`} label="XP aujourd'hui" />
      <StatCard icon={Flame} iconBgClassName="bg-cream" value={streakCount} label="jours de série" />
      <StatCard icon={Layers} iconBgClassName="bg-perso" value={totalLessonsLearned} label="leçons lues" />
    </div>
  );
}
