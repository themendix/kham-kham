import type { Lesson, SubjectColor } from "@/types";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { SUBJECT_BG } from "@/lib/subjectStyles";
import { LessonBlocks } from "@/components/features/LessonBlocks";

interface LessonViewerProps {
  lesson: Lesson;
  lessonIndex: number;
  totalLessons: number;
  accentColor: SubjectColor;
  onPrev: () => void;
  onNext: () => void;
  nextLabel: string;
}

/** Affiche une leçon à la fois, avec pagination et progression dans le cours */
export function LessonViewer({
  lesson,
  lessonIndex,
  totalLessons,
  accentColor,
  onPrev,
  onNext,
  nextLabel,
}: LessonViewerProps) {
  return (
    <Card className="p-6 md:p-8">
      <div className="font-heading text-xs font-bold uppercase tracking-wide text-ink-faint">
        Leçon {lessonIndex + 1} / {totalLessons}
      </div>
      <ProgressBar percent={((lessonIndex + 1) / totalLessons) * 100} fillClassName={SUBJECT_BG[accentColor]} />

      <h2 className="mt-5 text-xl font-extrabold leading-tight">{lesson.title}</h2>
      <div className="mt-3.5">
        <LessonBlocks blocks={lesson.blocks} accent={accentColor} density="full" />
      </div>

      <div className="mt-6 flex justify-between gap-3">
        <Button variant="secondary" onClick={onPrev} disabled={lessonIndex === 0}>
          ← Précédent
        </Button>
        <Button variant="primary" onClick={onNext}>
          {nextLabel}
        </Button>
      </div>
    </Card>
  );
}
