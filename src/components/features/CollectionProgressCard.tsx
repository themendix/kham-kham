import { Check } from "lucide-react";
import type { Parcours } from "@/types";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";

interface CollectionProgressCardProps {
  parcours: Parcours;
  /** `progress.completedCourseIds` — sert à cocher les pastilles des cours du parcours déjà terminés */
  completedCourseIds: string[];
  onContinue: () => void;
}

/** Écran de fin de cours (conditionnel) : « Collection avancée ! », affiché seulement si le cours appartient à un parcours */
export function CollectionProgressCard({
  parcours,
  completedCourseIds,
  onContinue,
}: CollectionProgressCardProps) {
  const total = parcours.courseIds.length;
  const completedCount = parcours.courseIds.filter((id) => completedCourseIds.includes(id)).length;
  const pct = (completedCount / total) * 100;

  return (
    <Card className="overflow-hidden text-center">
      <div className="relative flex h-[130px] items-center justify-center border-b-[3px] border-ink bg-gradient-to-br from-gold to-[#E9B871] text-[54px]">
        {parcours.emoji}
        <div className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full border-[2.5px] border-ink bg-success text-white">
          <Check className="h-4 w-4" />
        </div>
      </div>

      <div className="px-[18px] pb-[18px] pt-5">
        <h2 className="text-2xl font-extrabold">Collection avancée !</h2>
        <p className="mt-1.5 font-medium text-[#5c554b]">{parcours.title}</p>

        <div className="mt-5 rounded-2xl border-[2.5px] border-ink bg-cream p-4">
          <div className="text-3xl font-extrabold">
            {completedCount}
            <span className="text-lg font-bold text-[#5c554b]"> / {total} cours terminés</span>
          </div>
          <ProgressBar percent={pct} />
          <div className="mt-4 flex justify-center gap-2.5">
            {parcours.courseIds.map((id) => {
              const done = completedCourseIds.includes(id);
              return (
                <div
                  key={id}
                  className={`grid h-8 w-8 place-items-center rounded-full border-[2.5px] border-ink ${
                    done ? "bg-gold" : "bg-card"
                  }`}
                >
                  {done && <Check className="h-4 w-4" />}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <Button variant="primary" onClick={onContinue}>
            Continuer →
          </Button>
        </div>
      </div>
    </Card>
  );
}
