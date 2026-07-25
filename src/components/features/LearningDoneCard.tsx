import { Check } from "lucide-react";
import type { Category, Course } from "@/types";
import type { SubjectProgress } from "@/lib/subjectProgress";
import { COURSES_PER_LEVEL } from "@/lib/subjectProgress";
import { SUBJECT_GRADIENT, SUBJECT_BG } from "@/lib/subjectStyles";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";

interface LearningDoneCardProps {
  course: Course;
  category: Category;
  /** Progression de la matière, calculée après crédit du cours (reflète le niveau qu'on vient d'atteindre) */
  subject: SubjectProgress;
  rankedUp: boolean;
  newRank: string;
  onMiniQuiz: () => void;
  onSkip: () => void;
}

/** Écran de fin de leçons : « Apprentissage terminé ! », avant le Mini Quiz optionnel */
export function LearningDoneCard({
  course,
  category,
  subject,
  rankedUp,
  newRank,
  onMiniQuiz,
  onSkip,
}: LearningDoneCardProps) {
  const coursesLeft = COURSES_PER_LEVEL - subject.coursesIntoLevel;

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
        <p className="mt-1.5 font-medium text-[#5c554b]">{course.title}</p>

        <div className="mt-5 rounded-2xl border-[2.5px] border-ink bg-cream p-4 text-left">
          <div className="flex items-center justify-between">
            <span className="font-heading text-sm font-bold">
              {category.emoji} {category.name}
            </span>
            <Badge tone="gold">NIV. {subject.level}</Badge>
          </div>
          <div className="mt-2 flex items-center justify-between text-sm font-medium text-[#5c554b]">
            <span>★ {course.xp} XP</span>
            <span>
              {coursesLeft} cours avant niv. {subject.level + 1}
            </span>
          </div>
          <ProgressBar percent={subject.progressPct} fillClassName={SUBJECT_BG[category.color]} />
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-2.5">
          <Badge tone="gold">＋{course.xp} XP gagnés</Badge>
          {rankedUp && <Badge tone="gold">🏅 Nouveau rang : {newRank}</Badge>}
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
