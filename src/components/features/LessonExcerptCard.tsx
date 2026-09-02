import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";
import type { Lesson } from "@/types";
import { getFullLessonRef } from "@/data/courseContent";
import { lessonKey } from "@/lib/featured";
import { lessonExcerpt } from "@/lib/lessonExcerpt";

interface LessonExcerptCardProps {
  courseId: string;
  /** Leçon qui donne la réponse ; `null` quand le rattachement n'est pas encore fait */
  lessonId: string | null;
  courseTitle: string;
  /** Bonne réponse à la question ratée : sert à choisir le passage le plus pertinent de la leçon */
  answer: string;
}

/**
 * Extrait de cours affiché sous la correction d'une **mauvaise** réponse, pendant une partie.
 *
 * La bonne réponse seule ne fait rien apprendre : deux ou trois phrases du cours qui l'expliquent,
 * lisibles sans quitter la partie, transforment l'erreur en leçon. Le passage est choisi autour de
 * la bonne réponse (voir `lessonExcerpt`), pas pris au début de la leçon par principe.
 *
 * « Cours complet → » reste un renvoi explicite, jamais automatique : c'est l'utilisateur qui
 * décide d'interrompre sa partie pour aller lire, une fois la question passée.
 *
 * Le contenu est chargé à la demande (chunk de la seule matière concernée) — une partie sans
 * erreur ne télécharge rien.
 */
export function LessonExcerptCard({
  courseId,
  lessonId,
  courseTitle,
  answer,
}: LessonExcerptCardProps) {
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [hasFailed, setHasFailed] = useState(false);

  useEffect(() => {
    if (!lessonId) return;
    let cancelled = false;
    setLesson(null);
    setHasFailed(false);
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
  }, [courseId, lessonId]);

  // Sans leçon rattachée (ou si son chunk n'a pas pu être chargé), le renvoi ne peut viser que le
  // cours : on garde la carte et son lien, sans extrait — voir `src/data/quizLessonMap.ts`.
  const isResolved = lesson !== null;
  const label = lesson?.title ?? courseTitle;
  const excerpt = lesson ? lessonExcerpt(lesson.blocks, { around: answer }) : "";

  return (
    <div className="mt-2.5 rounded-[14px] border-2 border-ink/15 bg-card px-3 py-2.5">
      {/* `items-start` : un titre de leçon long passe à la ligne, le lien reste aligné sur la première. */}
      <div className="flex items-start justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 font-heading text-[10.5px] font-extrabold uppercase tracking-[0.04em] text-ink-faint">
          <BookOpen className="mt-px h-3 w-3 shrink-0" aria-hidden />
          {label}
        </span>
        <Link
          to={`/cours/${courseId}`}
          className="shrink-0 font-heading text-[10.5px] font-extrabold text-primary-text"
        >
          Cours complet →
        </Link>
      </div>
      {excerpt && (
        <p className="mt-1.5 text-xs font-medium leading-[1.4] text-[#3a3630]">{excerpt}</p>
      )}
      {!isResolved && !hasFailed && lessonId && (
        <p className="mt-1.5 text-xs font-medium leading-[1.4] text-ink-faint">
          Chargement de l'extrait…
        </p>
      )}
    </div>
  );
}
