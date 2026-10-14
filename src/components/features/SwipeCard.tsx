import { Link } from "react-router-dom";
import { X, Check, ArrowRight } from "lucide-react";
import type { Category, CourseMeta } from "@/types";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { SUBJECT_GRADIENT } from "@/lib/subjectStyles";
import { getCourseImage, getCourseImagePosition, OBJECT_POSITION } from "@/lib/courseImages";
import { useSwipeGesture } from "@/hooks/useSwipeGesture";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface SwipeCardProps {
  course: CourseMeta;
  category: Category;
  indexLabel: string;
  /** ✗ — le cours ne sera plus proposé */
  onDismiss: () => void;
  /** ✓ — le cours est mis de côté dans les favoris */
  onKeep: () => void;
}

/**
 * Carte de découverte du fil Home : un **cours** du catalogue, montré tel quel — son
 * illustration, sa matière, son titre, sa description — que l'utilisateur met de côté (✓) ou
 * écarte (✗).
 *
 * C'est un outil de tri, pas de lecture : la carte ne déplie aucun contenu et ne valide aucun
 * apprentissage. Elle n'a donc besoin que des métadonnées du cours (`CourseMeta`), jamais du texte
 * de ses leçons. Le bouton favori d'autrefois a disparu : ici le ✓ **est** la mise en favori.
 */
export function SwipeCard({ course, category, indexLabel, onDismiss, onKeep }: SwipeCardProps) {
  const reducedMotion = useReducedMotion();
  const { ref, isDragging, handlers, triggerCommit } = useSwipeGesture({
    onCommitLeft: onDismiss,
    onCommitRight: onKeep,
    reducedMotion,
  });
  const image = getCourseImage(course.id);

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
            INTÉRESSÉ ✓
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute right-4 top-4 z-10 rotate-12 rounded-lg border-[3px] border-ink bg-card px-3 py-1 font-heading text-lg font-extrabold text-danger"
            style={{ opacity: "var(--sankofa-pass-opacity, 0)" }}
          >
            PAS INTÉRESSÉ ✗
          </div>

          <div
            className={`relative flex h-[240px] items-center justify-center overflow-hidden border-b-[3px] border-ink bg-gradient-to-br ${SUBJECT_GRADIENT[category.color]}`}
          >
            {image ? (
              <img
                src={image.src}
                srcSet={image.srcSet}
                sizes="(min-width: 768px) 672px, 100vw"
                alt=""
                loading="lazy"
                className={`absolute inset-0 h-full w-full object-cover ${OBJECT_POSITION[getCourseImagePosition(course.id)]}`}
              />
            ) : (
              <span className="text-[96px] drop-shadow-[3px_4px_0_rgba(0,0,0,0.15)]">
                {course.emoji}
              </span>
            )}
          </div>

          <div className="px-5 pb-[22px] pt-[18px]">
            <Tag label={category.name} emoji={category.emoji} variant="dark" />
            <h3 className="mt-3.5 text-2xl font-extrabold leading-tight">{course.title}</h3>
            <p className="mt-2 text-[15.5px] font-medium leading-relaxed text-ink-muted">
              {course.description}
            </p>
            <div className="mt-3.5 flex items-center justify-between">
              <span className="text-[12.5px] font-bold tracking-wide text-ink-faint">
                {indexLabel}
              </span>
              <Link
                to={`/cours/${course.id}`}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1 text-[12.5px] font-bold text-primary-text"
              >
                Ouvrir le cours
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </Card>
      </div>

      <p className="mt-4 text-center text-[13px] font-semibold text-ink-faint">
        Glisse la carte, ou utilise les boutons ✗ / ✓
      </p>
      <div className="mt-2 flex justify-center gap-14">
        <button
          onClick={() => triggerCommit("left")}
          aria-label="Pas intéressé"
          className="grid h-[74px] w-[74px] place-items-center rounded-full border-[3px] border-ink bg-[#F7B7A8] text-ink shadow-sm transition-transform active:translate-y-[3px] active:shadow-none"
        >
          <X className="h-8 w-8" strokeWidth={3} />
        </button>
        <button
          onClick={() => triggerCommit("right")}
          aria-label="Intéressé"
          className="grid h-[74px] w-[74px] place-items-center rounded-full border-[3px] border-ink bg-[#A8E6BC] text-ink shadow-sm transition-transform active:translate-y-[3px] active:shadow-none"
        >
          <Check className="h-8 w-8" strokeWidth={3} />
        </button>
      </div>
    </div>
  );
}
