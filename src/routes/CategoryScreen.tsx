import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { COURSES } from "@/data/courses";
import { getCategory } from "@/data/categories";
import { useAppStore } from "@/store/useAppStore";
import { SUBJECT_GRADIENT } from "@/lib/subjectStyles";
import { getSubjectProgress, getCourseStatus, type CourseStatus } from "@/lib/subjectProgress";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { CourseCard } from "@/components/features/CourseCard";

type Filter = "tout" | CourseStatus;

const FILTERS: { key: Filter; label: string }[] = [
  { key: "tout", label: "Tout" },
  { key: "afaire", label: "À faire" },
  { key: "encours", label: "En cours" },
  { key: "termine", label: "Terminé" },
];

const EMPTY_MESSAGE: Record<Filter, string> = {
  tout: "Aucun cours dans cette matière pour l'instant.",
  afaire: "Aucun cours à faire ici.",
  encours: "Tu n'as aucun cours en cours.",
  termine: "Tu n'as encore terminé aucun cours ici.",
};

/** Tableau de bord d'une matière : niveau, progression, filtres et liste de ses cours */
export function CategoryScreen() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const category = getCategory(categoryId ?? "");
  const progress = useAppStore((s) => s.progress);
  const toggleFavoriteCourse = useAppStore((s) => s.toggleFavoriteCourse);
  const [filter, setFilter] = useState<Filter>("tout");

  if (!category) {
    return (
      <div className="mx-auto max-w-md rounded-card border-[3px] border-ink bg-card p-8 text-center shadow-card">
        <p className="font-bold">Cette matière est introuvable.</p>
      </div>
    );
  }

  const courses = COURSES.filter((c) => c.categoryId === category.id);
  const subjectProgress = getSubjectProgress(category.id, progress, COURSES);
  const filteredCourses =
    filter === "tout" ? courses : courses.filter((c) => getCourseStatus(c.id, progress) === filter);

  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        className="mb-3 inline-flex items-center gap-1.5 font-heading text-sm font-bold text-[#8a8071]"
      >
        <ArrowLeft className="h-4 w-4" /> Retour
      </button>

      <div
        className={`mb-5 rounded-card border-[3px] border-ink bg-gradient-to-br p-6 ${SUBJECT_GRADIENT[category.color]}`}
      >
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-[2.5px] border-ink bg-cream text-3xl">
            {category.emoji}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="font-heading text-2xl font-extrabold text-ink">{category.name}</span>
              <span className="inline-flex items-center rounded-full border-[2.5px] border-ink bg-ink px-3 py-1 font-heading text-xs font-bold uppercase tracking-wide text-white">
                Niveau {subjectProgress.level}
              </span>
            </div>
          </div>
        </div>

        <ProgressBar percent={subjectProgress.progressPct} />

        <p className="mt-2 font-heading text-xs font-bold uppercase tracking-wide text-ink/70">
          {subjectProgress.xp} XP · {subjectProgress.completedCount}/{subjectProgress.totalCount} cours
          faits
        </p>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {FILTERS.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`rounded-full border-[2.5px] border-ink px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-wide transition-colors ${
              filter === key ? "bg-ink text-white" : "bg-card text-ink"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {filteredCourses.length === 0 ? (
        <p className="font-medium text-[#8a8071]">{EMPTY_MESSAGE[filter]}</p>
      ) : (
        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              category={category}
              isCompleted={progress.completedCourseIds.includes(course.id)}
              isStarted={progress.startedCourseIds.includes(course.id)}
              isFavorite={progress.favoriteCourseIds.includes(course.id)}
              onToggleFavorite={() => toggleFavoriteCourse(course.id)}
              fluid
            />
          ))}
        </div>
      )}
    </div>
  );
}
