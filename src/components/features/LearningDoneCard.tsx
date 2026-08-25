import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import type { Category, Course } from "@/types";
import type { SubjectProgress } from "@/lib/subjectProgress";
import { COURSES_PER_LEVEL } from "@/lib/subjectProgress";
import { SUBJECT_GRADIENT, SUBJECT_BG } from "@/lib/subjectStyles";
import { getCourseImage, getCourseImagePosition, OBJECT_POSITION } from "@/lib/courseImages";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { OutroLayout } from "@/components/features/OutroLayout";

interface LearningDoneCardProps {
  course: Course;
  category: Category;
  /** Progression de la matière, calculée après crédit du cours */
  subject: SubjectProgress;
  /** Progression de la matière juste avant le crédit du cours, pour animer le gain */
  subjectBefore: SubjectProgress;
  /** Cours déjà terminé avant cette tentative : aucun gain réel, pas d'animation */
  isRevision: boolean;
  rankedUp: boolean;
  newRank: string;
  /** Montée de niveau numérique global, sans changement de rang nommé (au-delà de "Gardien du savoir") */
  levelUp: boolean;
  newLevel: number;
  primaryLabel: string;
  onPrimary: () => void;
  secondaryLabel?: string;
  onSecondary?: () => void;
}

const XP_FILL_DELAY_MS = 300;
const XP_FILL_DURATION_MS = 900;

/** Écran 1 (toujours affiché) : « Apprentissage terminé ! » — rang/niveau globaux en pastilles */
export function LearningDoneCard({
  course,
  category,
  subject,
  subjectBefore,
  isRevision,
  rankedUp,
  newRank,
  levelUp,
  newLevel,
  primaryLabel,
  onPrimary,
  secondaryLabel,
  onSecondary,
}: LearningDoneCardProps) {
  const reducedMotion = useReducedMotion();
  // Montée de niveau de matière : la barre grimpe jusqu'à 100 % (le niveau précédent tout juste
  // rempli) et s'arrête là — l'écran 2 ("Niveau supérieur !") prend seul en charge la célébration
  // du passage au niveau suivant, ce qui évite de dupliquer l'effet ici.
  const leveledUp = !isRevision && subject.level > subjectBefore.level;
  const displayedLevel = subjectBefore.level;
  const coursesLeft = leveledUp ? 0 : COURSES_PER_LEVEL - subject.coursesIntoLevel;
  const nextLevelLabel = leveledUp ? subjectBefore.level + 1 : subject.level + 1;
  const barTarget = leveledUp ? 100 : subject.progressPct;

  const [xpDisplayed, setXpDisplayed] = useState(isRevision || reducedMotion ? course.xp : 0);

  useEffect(() => {
    if (isRevision || reducedMotion) {
      setXpDisplayed(course.xp);
      return;
    }
    setXpDisplayed(0);
    let rafId = 0;
    const startTimeout = window.setTimeout(() => {
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / XP_FILL_DURATION_MS);
        setXpDisplayed(Math.round(course.xp * t));
        if (t < 1) rafId = requestAnimationFrame(step);
      };
      rafId = requestAnimationFrame(step);
    }, XP_FILL_DELAY_MS);
    return () => {
      window.clearTimeout(startTimeout);
      cancelAnimationFrame(rafId);
    };
  }, [course.xp, isRevision, reducedMotion]);

  const image = getCourseImage(course.id);

  return (
    <OutroLayout
      primaryLabel={primaryLabel}
      onPrimary={onPrimary}
      secondaryLabel={secondaryLabel}
      onSecondary={onSecondary}
    >
      <div className="relative mx-auto h-28 w-28 sm:h-[180px] sm:w-[180px]">
        <div className="h-full w-full overflow-hidden rounded-2xl border-[3px] border-ink shadow-card sm:rounded-[28px]">
          {image ? (
            <img
              src={image.src}
              srcSet={image.srcSet}
              sizes="180px"
              alt={course.title}
              className={`h-full w-full object-cover ${OBJECT_POSITION[getCourseImagePosition(course.id)]}`}
            />
          ) : (
            <div
              className={`grid h-full w-full place-items-center bg-gradient-to-br text-[40px] sm:text-[72px] ${SUBJECT_GRADIENT[category.color]}`}
            >
              {course.emoji}
            </div>
          )}
        </div>
        <div className="absolute -bottom-1.5 -right-1.5 grid h-8 w-8 place-items-center rounded-full border-[2.5px] border-ink bg-success text-white sm:-bottom-2 sm:-right-2 sm:h-11 sm:w-11 sm:border-[3px]">
          <Check className="h-4 w-4 sm:h-5 sm:w-5" />
        </div>
      </div>

      <h2 className="mt-4 text-[26px] font-extrabold leading-tight sm:mt-6 sm:text-[34px] md:text-[40px]">
        Apprentissage terminé !
      </h2>
      <p className="mt-1.5 font-medium text-ink-muted">{course.title}</p>

      <div className="mt-4 rounded-2xl border-[2.5px] border-ink bg-cream p-3.5 text-left sm:mt-5 sm:p-4">
        <div className="flex items-center justify-between">
          <span className="font-heading text-sm font-bold">
            {category.emoji} {category.name}
          </span>
          <Badge tone="gold">NIV. {displayedLevel}</Badge>
        </div>
        <div className="mt-2 flex items-center justify-between text-sm font-medium text-ink-muted">
          <span>★ {course.xp} XP</span>
          <span>
            {coursesLeft} cours avant niv. {nextLevelLabel}
          </span>
        </div>
        <ProgressBar
          percent={barTarget}
          from={subjectBefore.progressPct}
          animated={!isRevision}
          fillClassName={SUBJECT_BG[category.color]}
        />
      </div>

      <div className="mt-3.5 flex flex-wrap justify-center gap-2 sm:mt-4 sm:gap-2.5">
        {isRevision ? (
          <Badge tone="neutral">↻ Révision</Badge>
        ) : (
          <Badge tone="gold">＋{xpDisplayed} XP gagnés</Badge>
        )}
        {rankedUp && <Badge tone="gold">🏅 Nouveau rang : {newRank}</Badge>}
        {levelUp && <Badge tone="gold">⭐ Niveau {newLevel}</Badge>}
      </div>
    </OutroLayout>
  );
}
