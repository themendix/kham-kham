import { Check } from "lucide-react";
import type { Parcours } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { OutroLayout } from "@/components/features/OutroLayout";

interface CollectionProgressCardProps {
  parcours: Parcours;
  /** `progress.completedCourseIds` — sert à cocher les pastilles des cours du parcours déjà terminés */
  completedCourseIds: string[];
  /** Vrai si le cours qu'on vient de terminer a complété ce parcours à l'instant (xpReward tout juste versée) */
  justCompleted: boolean;
  primaryLabel: string;
  onPrimary: () => void;
  secondaryLabel?: string;
  onSecondary?: () => void;
}

/** Écran 3 (conditionnel) : « Collection avancée ! » — uniquement si le cours appartient à un parcours */
export function CollectionProgressCard({
  parcours,
  completedCourseIds,
  justCompleted,
  primaryLabel,
  onPrimary,
  secondaryLabel,
  onSecondary,
}: CollectionProgressCardProps) {
  const total = parcours.courseIds.length;
  const completedFlags = parcours.courseIds.map((id) => completedCourseIds.includes(id));
  const completedCount = completedFlags.filter(Boolean).length;
  const pct = (completedCount / total) * 100;

  return (
    <OutroLayout
      primaryLabel={primaryLabel}
      onPrimary={onPrimary}
      secondaryLabel={secondaryLabel}
      onSecondary={onSecondary}
    >
      <h2 className="text-[26px] font-extrabold leading-tight sm:text-[34px] md:text-[40px]">
        {justCompleted ? "Parcours terminé ! 🎉" : "Collection avancée !"}
      </h2>
      <p className="mt-1.5 font-medium text-ink-muted">{parcours.title}</p>

      <div className="mt-4 flex h-24 w-full items-center justify-center rounded-2xl border-[3px] border-ink bg-gradient-to-br from-gold to-[#E9B871] text-[36px] shadow-card sm:mt-5 sm:h-[140px] sm:text-[54px]">
        {parcours.emoji}
      </div>

      {justCompleted && (
        <div className="mt-3.5 flex justify-center sm:mt-4">
          <Badge tone="gold">＋{parcours.xpReward} XP</Badge>
        </div>
      )}

      <div className="mt-4 text-2xl font-extrabold sm:mt-5 sm:text-3xl">
        {completedCount}
        <span className="text-base font-bold text-ink-muted sm:text-lg"> / {total} cours terminés</span>
      </div>
      <ProgressBar percent={pct} />

      <div className="mt-4 flex items-center justify-center sm:mt-5">
        {parcours.courseIds.map((id, i) => (
          <div key={id} className="flex items-center">
            {i > 0 && (
              <div
                className={`h-[3px] w-6 shrink-0 ${completedFlags[i - 1] && completedFlags[i] ? "bg-ink" : "bg-ink/20"}`}
              />
            )}
            <div
              className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border-[2.5px] border-ink ${
                completedFlags[i] ? "bg-gold" : "bg-card"
              }`}
            >
              {completedFlags[i] && <Check className="h-4 w-4" />}
            </div>
          </div>
        ))}
      </div>
    </OutroLayout>
  );
}
