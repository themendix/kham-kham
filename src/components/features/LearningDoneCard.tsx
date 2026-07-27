import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import type { Category, Course } from "@/types";
import type { SubjectProgress } from "@/lib/subjectProgress";
import { COURSES_PER_LEVEL } from "@/lib/subjectProgress";
import { SUBJECT_GRADIENT, SUBJECT_BG } from "@/lib/subjectStyles";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";

interface LearningDoneCardProps {
  course: Course;
  category: Category;
  /** Progression de la matière, calculée après crédit du cours (reflète le niveau qu'on vient d'atteindre) */
  subject: SubjectProgress;
  /** Progression de la matière juste avant le crédit du cours, pour animer le gain */
  subjectBefore: SubjectProgress;
  /** Cours déjà terminé avant cette tentative : aucun gain réel, pas d'animation */
  isRevision: boolean;
  rankedUp: boolean;
  newRank: string;
  /** Montée de niveau numérique sans changement de rang nommé (au-delà de "Gardien du savoir") */
  levelUp: boolean;
  newLevel: number;
  onMiniQuiz: () => void;
  onSkip: () => void;
}

const FILL_DELAY_MS = 300;
const FILL_DURATION_MS = 900;
/** Pause à 100 % pendant que le badge de niveau bascule, avant la remise à zéro */
const LEVEL_BUMP_PAUSE_MS = 400;
/** Pause à 0 % (sans transition) pour laisser le navigateur peindre le reset avant de relancer l'animation */
const RESET_PAUSE_MS = 150;

/** Étapes de l'animation « passage de niveau » : plein → bascule du badge → reset instantané → reste du niveau suivant */
type LevelUpStage = "fillingToFull" | "atFull" | "reset" | "fillingRemainder";

/** Écran de fin de leçons : « Apprentissage terminé ! », avant le Mini Quiz optionnel */
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
  onMiniQuiz,
  onSkip,
}: LearningDoneCardProps) {
  const reducedMotion = useReducedMotion();
  const leveledUp = !isRevision && subject.level > subjectBefore.level;
  const coursesLeft = COURSES_PER_LEVEL - subject.coursesIntoLevel;

  const [stage, setStage] = useState<LevelUpStage>("fillingToFull");
  const [xpDisplayed, setXpDisplayed] = useState(isRevision || reducedMotion ? course.xp : 0);

  useEffect(() => {
    if (!leveledUp || reducedMotion) return;
    setStage("fillingToFull");
    const toFull = FILL_DELAY_MS + FILL_DURATION_MS;
    const toReset = toFull + LEVEL_BUMP_PAUSE_MS;
    const toRemainder = toReset + RESET_PAUSE_MS;
    const t1 = window.setTimeout(() => setStage("atFull"), toFull);
    const t2 = window.setTimeout(() => setStage("reset"), toReset);
    const t3 = window.setTimeout(() => setStage("fillingRemainder"), toRemainder);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, [leveledUp, reducedMotion]);

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
        const t = Math.min(1, (now - start) / FILL_DURATION_MS);
        setXpDisplayed(Math.round(course.xp * t));
        if (t < 1) rafId = requestAnimationFrame(step);
      };
      rafId = requestAnimationFrame(step);
    }, FILL_DELAY_MS);
    return () => {
      window.clearTimeout(startTimeout);
      cancelAnimationFrame(rafId);
    };
  }, [course.xp, isRevision, reducedMotion]);

  const displayedLevel = leveledUp && !reducedMotion && stage === "fillingToFull" ? subjectBefore.level : subject.level;
  const showLevelPop = leveledUp && !reducedMotion && stage !== "fillingToFull";

  let barFrom = subject.progressPct;
  let barPercent = subject.progressPct;
  let barAnimated = false;
  if (!isRevision && !reducedMotion) {
    if (!leveledUp) {
      barFrom = subjectBefore.progressPct;
      barPercent = subject.progressPct;
      barAnimated = true;
    } else {
      switch (stage) {
        case "fillingToFull":
          barFrom = subjectBefore.progressPct;
          barPercent = 100;
          barAnimated = true;
          break;
        case "atFull":
          barFrom = 100;
          barPercent = 100;
          barAnimated = false;
          break;
        case "reset":
          barFrom = 0;
          barPercent = 0;
          barAnimated = false;
          break;
        case "fillingRemainder":
          barFrom = 0;
          barPercent = subject.progressPct;
          barAnimated = true;
          break;
      }
    }
  }

  return (
    <Card className="overflow-hidden text-center">
      <div
        className={`relative flex h-[130px] items-center justify-center border-b-[3px] border-ink bg-gradient-to-br text-[54px] ${SUBJECT_GRADIENT[category.color]}`}
      >
        {course.emoji}
        <div className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full border-[2.5px] border-ink bg-success text-white">
          <Check className="h-4 w-4" />
        </div>
      </div>

      <div className="px-[18px] pb-[18px] pt-5">
        <h2 className="text-2xl font-extrabold">Apprentissage terminé !</h2>
        <p className="mt-1.5 font-medium text-ink-muted">{course.title}</p>

        <div className="mt-5 rounded-2xl border-[2.5px] border-ink bg-cream p-4 text-left">
          <div className="flex items-center justify-between">
            <span className="font-heading text-sm font-bold">
              {category.emoji} {category.name}
            </span>
            <Badge tone="gold">
              <span className={`inline-block ${showLevelPop ? "sankofa-pop" : ""}`}>NIV. {displayedLevel}</span>
            </Badge>
          </div>
          <div className="mt-2 flex items-center justify-between text-sm font-medium text-ink-muted">
            <span>★ {course.xp} XP</span>
            <span>
              {coursesLeft} cours avant niv. {subject.level + 1}
            </span>
          </div>
          <ProgressBar
            percent={barPercent}
            from={barFrom}
            animated={barAnimated}
            fillClassName={SUBJECT_BG[category.color]}
          />
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-2.5">
          {isRevision ? (
            <Badge tone="neutral">↻ Révision</Badge>
          ) : (
            <Badge tone="gold">＋{xpDisplayed} XP gagnés</Badge>
          )}
          {rankedUp && <Badge tone="gold">🏅 Nouveau rang : {newRank}</Badge>}
          {levelUp && <Badge tone="gold">⭐ Niveau {newLevel}</Badge>}
        </div>

        <div className="mt-6 flex justify-center gap-3">
          <Button variant="secondary" onClick={onSkip} aria-label="Passer le Mini Quiz">
            ✗
          </Button>
          <Button variant="primary" onClick={onMiniQuiz}>
            Mini Quiz →
          </Button>
        </div>
      </div>
    </Card>
  );
}
