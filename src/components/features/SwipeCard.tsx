import { useState } from "react";
import { Bookmark, X, Check, ChevronDown } from "lucide-react";
import type { Category, SwipeCard as SwipeCardData } from "@/types";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { SUBJECT_GRADIENT } from "@/lib/subjectStyles";
import { useSwipeGesture } from "@/hooks/useSwipeGesture";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { LessonBlocks } from "@/components/features/LessonBlocks";

interface SwipeCardProps {
  card: SwipeCardData;
  category: Category;
  indexLabel: string;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onPass: () => void;
  onLearn: () => void;
}

/** Carte swipable du fil Home, avec illustration emoji, favori et actions ✗ / ✓ */
export function SwipeCard({
  card,
  category,
  indexLabel,
  isFavorite,
  onToggleFavorite,
  onPass,
  onLearn,
}: SwipeCardProps) {
  const [expanded, setExpanded] = useState(false);
  const reducedMotion = useReducedMotion();
  const { ref, isDragging, handlers, triggerCommit } = useSwipeGesture({
    onCommitLeft: onPass,
    onCommitRight: onLearn,
    reducedMotion,
  });

  return (
    <div>
      <div
        ref={ref}
        {...handlers}
        className={`touch-pan-y select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
      >
        <Card className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute left-4 top-4 z-10 -rotate-12 rounded-lg border-[3px] border-ink bg-card px-3 py-1 font-heading text-lg font-extrabold text-success"
            style={{ opacity: "var(--sankofa-learn-opacity, 0)" }}
          >
            APPRENDRE ✓
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute right-4 top-4 z-10 rotate-12 rounded-lg border-[3px] border-ink bg-card px-3 py-1 font-heading text-lg font-extrabold text-danger"
            style={{ opacity: "var(--sankofa-pass-opacity, 0)" }}
          >
            PASSER ✗
          </div>
          <div
            className={`relative flex h-[240px] items-center justify-center border-b-[3px] border-ink bg-gradient-to-br ${SUBJECT_GRADIENT[category.color]}`}
          >
            <button
              onClick={onToggleFavorite}
              aria-label="Ajouter aux favoris"
              className={`absolute right-3.5 top-3.5 grid h-10 w-10 place-items-center rounded-full border-[2.5px] border-ink ${
                isFavorite ? "bg-gold" : "bg-card"
              }`}
            >
              <Bookmark className="h-[18px] w-[18px]" fill={isFavorite ? "currentColor" : "none"} />
            </button>
            <span className="text-[96px] drop-shadow-[3px_4px_0_rgba(0,0,0,0.15)]">{card.emoji}</span>
          </div>
          <button
            onClick={() => setExpanded((e) => !e)}
            aria-expanded={expanded}
            className="w-full px-5 pb-[22px] pt-[18px] text-left"
          >
            <Tag label={category.name} emoji={category.emoji} variant="dark" />
            <h3 className="mt-3.5 text-2xl font-extrabold leading-tight">{card.title}</h3>
            <p className="mt-2 text-[15.5px] font-medium leading-relaxed text-ink-muted">{card.teaser}</p>
            {expanded && (
              <div className="mt-2.5 border-t-2 border-ink/10 pt-2.5">
                <LessonBlocks blocks={card.blocks} accent={category.color} density="compact" imageKey={card.id} />
              </div>
            )}
            <div className="mt-3.5 flex items-center justify-between">
              <span className="text-[12.5px] font-bold tracking-wide text-ink-faint">{indexLabel}</span>
              <span className="flex items-center gap-1 text-[12.5px] font-bold text-primary-text">
                {expanded ? "Replier" : "En savoir plus"}
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${expanded ? "rotate-180" : ""}`} />
              </span>
            </div>
          </button>
        </Card>
      </div>

      <p className="mt-4 text-center text-[13px] font-semibold text-ink-faint">
        Glisse la carte, ou utilise les boutons ✗ / ✓
      </p>
      <div className="mt-2 flex justify-center gap-14">
        <button
          onClick={() => triggerCommit("left")}
          aria-label="Passer"
          className="grid h-[74px] w-[74px] place-items-center rounded-full border-[3px] border-ink bg-[#F7B7A8] text-ink shadow-sm transition-transform active:translate-y-[3px] active:shadow-none"
        >
          <X className="h-8 w-8" strokeWidth={3} />
        </button>
        <button
          onClick={() => triggerCommit("right")}
          aria-label="J'ai appris"
          className="grid h-[74px] w-[74px] place-items-center rounded-full border-[3px] border-ink bg-[#A8E6BC] text-ink shadow-sm transition-transform active:translate-y-[3px] active:shadow-none"
        >
          <Check className="h-8 w-8" strokeWidth={3} />
        </button>
      </div>
    </div>
  );
}
