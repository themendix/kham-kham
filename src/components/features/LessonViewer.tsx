import { useLayoutEffect, useRef } from "react";
import type { Lesson, SubjectColor } from "@/types";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { LessonBlocks } from "@/components/features/LessonBlocks";
import { LessonProgressPips } from "@/components/features/LessonProgressPips";

interface LessonViewerProps {
  lesson: Lesson;
  courseId: string;
  preserveInitialScroll?: boolean;
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
  courseId,
  preserveInitialScroll = false,
  lessonIndex,
  totalLessons,
  accentColor,
  onPrev,
  onNext,
  nextLabel,
  isLastLesson = false,
}: LessonViewerProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lastReadingRef = useRef<string | null>(null);
  const readingKey = `${courseId}:${lesson.id}:${lessonIndex}`;

  useLayoutEffect(() => {
    if (lastReadingRef.current === readingKey) return;
    const initialReading = lastReadingRef.current === null;
    lastReadingRef.current = readingKey;
    // AppShell conserve la position de l'entrée d'historique au retour arrière.
    if (initialReading && preserveInitialScroll) return;
    titleRef.current?.focus({ preventScroll: true });
    titleRef.current?.scrollIntoView({ block: "start", behavior: "instant" });
  }, [readingKey, preserveInitialScroll]);

  return (
    <Card className="p-6 md:p-8">
      <div className="font-heading text-xs font-bold uppercase tracking-wide text-ink-faint">
        Leçon {lessonIndex + 1} / {totalLessons}
      </div>
      <LessonProgressPips currentIndex={lessonIndex} totalLessons={totalLessons} accentColor={accentColor} />

      <h2 ref={titleRef} tabIndex={-1} className="mt-5 scroll-mt-6 text-xl font-extrabold leading-tight">{lesson.title}</h2>
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
