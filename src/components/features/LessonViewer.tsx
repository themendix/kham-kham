import type { Lesson, SubjectColor } from "@/types";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { LessonBlocks } from "@/components/features/LessonBlocks";
import { LessonProgressPips } from "@/components/features/LessonProgressPips";

interface LessonViewerProps {
  lesson: Lesson;
  lessonIndex: number;
  totalLessons: number;
  accentColor: SubjectColor;
  onPrev: () => void;
  onNext: () => void;
  nextLabel: string;
  isLastLesson?: boolean;
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
  isLastLesson = false,
}: LessonViewerProps) {
  return (
    <Card className="p-6 md:p-8">
      <div className="font-heading text-xs font-bold uppercase tracking-wide text-ink-faint">
        Leçon {lessonIndex + 1} / {totalLessons}
      </div>
      <LessonProgressPips currentIndex={lessonIndex} totalLessons={totalLessons} accentColor={accentColor} />

      <h2 className="mt-5 text-xl font-extrabold leading-tight">{lesson.title}</h2>
      <div className="mt-3.5">
        <LessonBlocks blocks={lesson.blocks} accent={accentColor} density="full" imageKey={lesson.id} />
      </div>

      <div className="mt-6 flex justify-between gap-3">
        <Button variant="secondary" onClick={onPrev} disabled={lessonIndex === 0}>
          ← Précédent
        </Button>
        <Button
          variant="primary"
          onClick={onNext}
          className={isLastLesson ? "bg-success" : undefined}
        >
          {nextLabel}
        </Button>
      </div>
    </Card>
  );
}
