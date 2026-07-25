import { Link } from "react-router-dom";
import type { MouseEvent } from "react";
import { Heart, BookOpen, CheckCircle2 } from "lucide-react";
import type { Category, Course } from "@/types";
import { Card } from "@/components/ui/Card";
import { SUBJECT_GRADIENT } from "@/lib/subjectStyles";
import { getCourseImage } from "@/lib/courseImages";

interface CourseCardProps {
  course: Course;
  category: Category;
  isCompleted?: boolean;
  isStarted?: boolean;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
  /** true dans une grille responsive (occupe sa cellule) ; false (défaut) dans un rail à défilement horizontal (largeur fixe) */
  fluid?: boolean;
}

/** Carte de cours compacte, affichée en scroll horizontal dans la Biblio (ou en grille via `fluid`) */
export function CourseCard({
  course,
  category,
  isCompleted = false,
  isStarted = false,
  isFavorite = false,
  onToggleFavorite,
  fluid = false,
}: CourseCardProps) {
  function handleToggleFavorite(e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    onToggleFavorite?.();
  }

  const image = getCourseImage(course.id);
  const statusBadge = isCompleted ? (
    <span className="inline-flex items-center gap-1 rounded-full border-2 border-ink bg-success px-2 py-0.5 font-heading text-[9px] font-bold text-white">
      <CheckCircle2 className="h-2.5 w-2.5" /> Terminé
    </span>
  ) : isStarted ? (
    <span className="inline-flex items-center gap-1 rounded-full border-2 border-ink bg-gold px-2 py-0.5 font-heading text-[9px] font-bold text-ink">
      En cours
    </span>
  ) : null;

  return (
    <Link
      to={`/cours/${course.id}`}
      className={fluid ? "block" : "block min-w-[210px] max-w-[210px] shrink-0"}
    >
      <Card shadow="sm" className="overflow-hidden">
        <div
          className={
            image
              ? "relative h-[150px] border-b-[3px] border-ink"
              : `relative flex h-24 items-center justify-center border-b-[3px] border-ink bg-gradient-to-br text-[44px] ${SUBJECT_GRADIENT[category.color]}`
          }
        >
          {image ? (
            <img
              src={image}
              alt={course.title}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          ) : (
            course.emoji
          )}
          {statusBadge && <div className="absolute left-2 top-2 z-10 self-start">{statusBadge}</div>}
          <button
            onClick={handleToggleFavorite}
            aria-label={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
            aria-pressed={isFavorite}
            className="absolute right-2 top-2 z-10 grid h-8 w-8 place-items-center self-start rounded-full border-[2.5px] border-ink bg-card"
          >
            <Heart
              className={`h-3.5 w-3.5 ${isFavorite ? "text-danger" : ""}`}
              fill={isFavorite ? "currentColor" : "none"}
            />
          </button>
        </div>
        <div className="px-3 pb-3.5 pt-3">
          <div className="font-heading text-[10.5px] font-bold uppercase tracking-wide text-[#6d655a]">
            {category.name}
          </div>
          <div className="mt-1 text-[15px] font-extrabold leading-tight">{course.title}</div>
          <div className="mt-2 flex items-center gap-2 text-[11.5px] font-bold text-[#9b9284]">
            <span className="flex items-center gap-1">
              <BookOpen className="h-3 w-3" /> {course.lessons.length}
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-3 w-3" /> {course.quiz.length}
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
