import { ArrowRight } from "lucide-react";
import type { Category } from "@/types";
import { SUBJECT_BG } from "@/lib/subjectStyles";
import { OutroLayout } from "@/components/features/OutroLayout";

interface LevelUpCardProps {
  category: Category;
  fromLevel: number;
  toLevel: number;
  primaryLabel: string;
  onPrimary: () => void;
  secondaryLabel?: string;
  onSecondary?: () => void;
}

/** Écran 2 (conditionnel) : « Niveau supérieur ! » — uniquement en cas de montée du niveau de matière */
export function LevelUpCard({
  category,
  fromLevel,
  toLevel,
  primaryLabel,
  onPrimary,
  secondaryLabel,
  onSecondary,
}: LevelUpCardProps) {
  return (
    <OutroLayout
      primaryLabel={primaryLabel}
      onPrimary={onPrimary}
      secondaryLabel={secondaryLabel}
      onSecondary={onSecondary}
    >
      <div
        className={`mx-auto grid h-24 w-24 place-items-center rounded-2xl border-[3px] border-ink text-[40px] shadow-card sm:h-[150px] sm:w-[150px] sm:rounded-[28px] sm:text-[64px] ${SUBJECT_BG[category.color]}`}
      >
        {category.emoji}
      </div>

      <h2 className="mt-4 text-[26px] font-extrabold leading-tight sm:mt-6 sm:text-[34px] md:text-[40px]">
        Niveau supérieur !
      </h2>
      <p className="mt-1.5 font-medium text-ink-muted">{category.name}</p>

      <div className="mt-5 flex items-center justify-center gap-3 sm:mt-7 sm:gap-4">
        <span className="font-heading text-base font-bold text-ink-faint sm:text-lg">
          NIV. {fromLevel}
        </span>
        <ArrowRight className="h-5 w-5 shrink-0 text-ink-faint sm:h-6 sm:w-6" aria-hidden />
        <span className="font-heading text-4xl font-extrabold sm:text-5xl">NIV. {toLevel}</span>
      </div>
    </OutroLayout>
  );
}
