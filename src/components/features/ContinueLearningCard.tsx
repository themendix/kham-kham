import { Link } from "react-router-dom";
import { ArrowRight, PartyPopper } from "lucide-react";
import type { Category, CourseMeta } from "@/types";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { SUBJECT_GRADIENT } from "@/lib/subjectStyles";
import { getCourseImage, getCourseImagePosition, OBJECT_POSITION } from "@/lib/courseImages";
import { lessonKey } from "@/lib/featured";

interface ContinueLearningCardProps {
  course: CourseMeta | null;
  category: Category | null;
  /** true si ce cours est celui déjà entamé (lastCourseId), false si jamais ouvert */
  resumed: boolean;
  completedLessonIds: string[];
}

/** Invite à reprendre (ou commencer) un cours ; état positif si tous les cours sont terminés */
export function ContinueLearningCard({ course, category, resumed, completedLessonIds }: ContinueLearningCardProps) {
  if (!course || !category) {
    return (
      <Card className="flex items-center gap-4 p-5">
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full border-[2.5px] border-ink bg-gold">
          <PartyPopper className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <h3 className="font-extrabold">Tu as tout terminé, bravo !</h3>
          <p className="text-sm font-medium text-ink-muted">Retourne à la Biblio pour découvrir plus de contenu.</p>
        </div>
        <Link to="/biblio">
          <Button variant="secondary">Voir la Biblio</Button>
        </Link>
      </Card>
    );
  }

  if (resumed) {
    const image = getCourseImage(course.id);
    const firstUnread = course.lessons.findIndex(
      (lesson) => !completedLessonIds.includes(lessonKey(course.id, lesson.id)),
    );
    const lessonIndex = firstUnread === -1 ? 0 : firstUnread;

    return (
      <section>
        <h2 className="mb-2.5 font-heading text-lg font-extrabold">Reprendre l’apprentissage</h2>
        <Link
          to={`/cours/${course.id}`}
          className={`relative flex h-[280px] flex-col justify-end overflow-hidden rounded-[18px] border-[3px] border-ink bg-gradient-to-br shadow-sm transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink active:translate-y-[3px] active:shadow-none ${SUBJECT_GRADIENT[category.color]}`}
        >
          {image ? (
            <img
              src={image.src}
              srcSet={image.srcSet}
              sizes="(min-width: 768px) 672px, calc(100vw - 40px)"
              alt=""
              loading="lazy"
              className={`absolute inset-0 h-full w-full object-cover ${OBJECT_POSITION[getCourseImagePosition(course.id)]}`}
            />
          ) : (
            <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center text-[72px]">{course.emoji}</span>
          )}
          <div className="relative flex flex-col items-start bg-gradient-to-t from-ink/95 via-ink/65 to-transparent px-4 pb-4 pt-14">
            <h3 className="font-heading text-[22px] font-extrabold leading-tight text-white drop-shadow-sm">{course.title}</h3>
            <p className="mt-1.5 text-xs font-medium text-white">
              {course.lessons.length > 0 && <>Leçon {lessonIndex + 1} / {course.lessons.length} · </>}{category.name}
            </p>
            <span className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-[10px] border-2 border-ink bg-primary px-4 font-heading text-sm font-bold text-white shadow-sm">
              Lire la leçon <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </div>
        </Link>
      </section>
    );
  }

  return (
    <Link to={`/cours/${course.id}`}>
      <Card className="flex items-center gap-4 overflow-hidden p-0">
        <div
          className={`flex h-full w-[90px] shrink-0 items-center justify-center self-stretch border-r-[3px] border-ink bg-gradient-to-br text-[38px] ${SUBJECT_GRADIENT[category.color]}`}
        >
          {course.emoji}
        </div>
        <div className="flex-1 py-4 pr-4">
          <Tag label={category.name} emoji={category.emoji} variant="dark" />
          <h3 className="mt-2 font-extrabold leading-tight">{course.title}</h3>
          <div className="mt-1.5 font-heading text-[13px] font-bold text-primary-text">
            {resumed ? "Reprendre →" : "Commencer →"}
          </div>
        </div>
      </Card>
    </Link>
  );
}
