import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import type { Lesson, SubjectColor } from "@/types";
import { getFullLessonRef } from "@/data/courseContent";
import { lessonKey } from "@/lib/featured";
import { LessonBlocks } from "@/components/features/LessonBlocks";

interface LessonRevealProps {
  courseId: string;
  /** Leçon qui donne la réponse ; `null` quand le rattachement n'est pas encore fait */
  lessonId: string | null;
  courseTitle: string;
  accent: SubjectColor;
}

/**
 * Déplie sur place la leçon qui donne la réponse à une question ratée.
 *
 * C'est le geste central du module Quiz : se tromper ouvre la leçon, **sans jamais quitter la
 * partie**. Naviguer vers `/cours/:id` détruirait un Blitz chronométré ou une série de Survie, et
 * se ressentirait comme une sanction là où on veut une porte. Le contenu est chargé à la demande
 * (chunk de la matière concernée uniquement) et n'est demandé qu'au moment où l'utilisateur
 * clique — une partie où l'on ne se trompe jamais ne télécharge rien.
 *
 * Repli propre quand la question n'a pas encore de leçon rattachée (voir
 * `src/data/quizLessonMap.ts`) : on propose le cours, faute de mieux.
 */
export function LessonReveal({ courseId, lessonId, courseTitle, accent }: LessonRevealProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [hasFailed, setHasFailed] = useState(false);

  useEffect(() => {
    if (!isOpen || !lessonId || lesson) return;
    let cancelled = false;
    getFullLessonRef(lessonKey(courseId, lessonId))
      .then((ref) => {
        if (cancelled) return;
        if (ref) setLesson(ref.lesson);
        else setHasFailed(true);
      })
      .catch(() => {
        if (!cancelled) setHasFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, [isOpen, lessonId, lesson, courseId]);

  // Sans leçon rattachée, le renvoi ne peut viser que le cours : un lien, pas un dépliage.
  if (!lessonId || hasFailed) {
    return (
      <Link
        to={`/cours/${courseId}`}
        className="mt-3 inline-flex items-center gap-1.5 font-heading text-sm font-bold text-primary-text underline decoration-2 underline-offset-2"
      >
        <BookOpen className="h-4 w-4" aria-hidden />
        Lire le cours « {courseTitle} »
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    );
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="mt-3 inline-flex items-center gap-1.5 font-heading text-sm font-bold text-primary-text underline decoration-2 underline-offset-2"
      >
        <BookOpen className="h-4 w-4" aria-hidden />
        Lire la leçon qui répond
      </button>
    );
  }

  return (
    <div className="mt-3 rounded-2xl border-[2.5px] border-ink bg-card p-4">
      {lesson ? (
        <>
          <h4 className="font-heading text-[15px] font-extrabold leading-snug">{lesson.title}</h4>
          <p className="mt-0.5 font-heading text-xs font-bold uppercase tracking-wide text-ink-faint">
            {courseTitle}
          </p>
          <div className="mt-3">
            <LessonBlocks
              blocks={lesson.blocks}
              accent={accent}
              density="compact"
              imageKey={lesson.id}
            />
          </div>
          <Link
            to={`/cours/${courseId}`}
            className="mt-3 inline-flex items-center gap-1.5 font-heading text-sm font-bold text-primary-text underline decoration-2 underline-offset-2"
          >
            Ouvrir le cours entier
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </>
      ) : (
        <p className="font-medium text-ink-faint">Chargement de la leçon…</p>
      )}
    </div>
  );
}
