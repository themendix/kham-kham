import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import type { CourseMeta, UserProgress } from "@/types";
import { COURSE_INDEX } from "@/data/coursesIndex.generated";
import { getCategory } from "@/data/categories";
import { useAppStore } from "@/store/useAppStore";
import { SUBJECT_GRADIENT } from "@/lib/subjectStyles";
import { getSubjectProgress, getCourseStatus, isSubjectEmerging, type CourseStatus } from "@/lib/subjectProgress";
import { GEOGRAPHIE_REGIONS_ORDER, getGeographieRegion } from "@/lib/geographieRegions";
import { normalizeSearchText } from "@/lib/search";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CourseCard } from "@/components/features/CourseCard";

type Filter = "tout" | CourseStatus;

/** Nombre de cartes affichées avant le bouton « Voir plus » (liste plate, sans sous-groupement). */
const DEFAULT_VISIBLE = 12;
/** Idem, mais par région pour la Géographie — sections plus courtes, donc seuil plus bas. */
const DEFAULT_VISIBLE_PER_REGION = 8;
/** Nombre de cartes ajoutées à chaque clic sur « Voir plus ». */
const REVEAL_STEP = 12;

function sortByTitle(courses: CourseMeta[]): CourseMeta[] {
  return [...courses].sort((a, b) => a.title.localeCompare(b.title, "fr", { sensitivity: "base" }));
}

/** Première lettre du titre, désaccentuée, pour regrouper « Égypte » sous « E » plutôt que sous une entrée « É » isolée. */
function indexLetter(title: string): string {
  return normalizeSearchText(title[0]).toUpperCase();
}

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

type GeoView = "region" | "index";

/** Grille de cours avec affichage progressif (« Voir plus »), pour ne pas monter d'un bloc une longue liste. */
function ProgressiveCourseGrid({
  courses,
  category,
  progress,
  toggleFavoriteCourse,
  initialVisible,
}: {
  courses: CourseMeta[];
  category: NonNullable<ReturnType<typeof getCategory>>;
  progress: UserProgress;
  toggleFavoriteCourse: (courseId: string) => void;
  initialVisible: number;
}) {
  const [visible, setVisible] = useState(initialVisible);
  const shown = courses.slice(0, visible);
  const remaining = courses.length - shown.length;

  return (
    <>
      <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3">
        {shown.map((course) => (
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
      {remaining > 0 && (
        <div className="mt-4 flex justify-center">
          <Button variant="secondary" onClick={() => setVisible((v) => v + REVEAL_STEP)}>
            Voir plus ({remaining} restant{remaining > 1 ? "s" : ""})
          </Button>
        </div>
      )}
    </>
  );
}

/** Tableau de bord d'une matière : niveau, progression, filtres et liste de ses cours */
export function CategoryScreen() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const category = getCategory(categoryId ?? "");
  const progress = useAppStore((s) => s.progress);
  const toggleFavoriteCourse = useAppStore((s) => s.toggleFavoriteCourse);
  const [filter, setFilter] = useState<Filter>("tout");
  const [geoView, setGeoView] = useState<GeoView>("region");

  if (!category) {
    return (
      <div className="mx-auto max-w-md rounded-card border-[3px] border-ink bg-card p-8 text-center shadow-card">
        <p className="font-bold">Cette matière est introuvable.</p>
      </div>
    );
  }

  const isGeo = category.id === "geo";
  const courses = COURSE_INDEX.filter((c) => c.categoryId === category.id);
  const subjectProgress = getSubjectProgress(category.id, progress, COURSE_INDEX);
  const filteredCourses = sortByTitle(
    filter === "tout" ? courses : courses.filter((c) => getCourseStatus(c.id, progress) === filter),
  );

  const availableLetters = isGeo
    ? [...new Set(filteredCourses.map((c) => indexLetter(c.title)))]
    : [];

  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        className="mb-3 inline-flex items-center gap-1.5 font-heading text-sm font-bold text-ink-faint"
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
              <h1 className="font-heading text-2xl font-extrabold text-ink">{category.name}</h1>
              <span className="inline-flex items-center rounded-full border-[2.5px] border-ink bg-ink px-3 py-1 font-heading text-xs font-bold uppercase tracking-wide text-white">
                Niveau {subjectProgress.level}
              </span>
              {isSubjectEmerging(category.id, COURSE_INDEX) && <Badge tone="neutral">🚧 En construction</Badge>}
            </div>
          </div>
        </div>

        <ProgressBar percent={subjectProgress.progressPct} />

        <p className="mt-2 font-heading text-xs font-bold uppercase tracking-wide text-ink/70">
          {subjectProgress.xp} XP · {subjectProgress.completedCount}/{subjectProgress.totalCount} cours
          faits
        </p>
      </div>

      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-2">
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

        {isGeo && (
          <div className="flex gap-2">
            <button
              onClick={() => setGeoView("region")}
              className={`rounded-full border-[2.5px] border-ink px-3 py-1.5 font-heading text-xs font-bold uppercase tracking-wide transition-colors ${
                geoView === "region" ? "bg-ink text-white" : "bg-card text-ink"
              }`}
            >
              🗺️ Par région
            </button>
            <button
              onClick={() => setGeoView("index")}
              className={`rounded-full border-[2.5px] border-ink px-3 py-1.5 font-heading text-xs font-bold uppercase tracking-wide transition-colors ${
                geoView === "index" ? "bg-ink text-white" : "bg-card text-ink"
              }`}
            >
              🔤 Index A-Z
            </button>
          </div>
        )}
      </div>

      {filteredCourses.length === 0 ? (
        <p className="font-medium text-ink-faint">{EMPTY_MESSAGE[filter]}</p>
      ) : isGeo && geoView === "index" ? (
        <div>
          <div className="scrollbar-none mb-4 flex gap-1.5 overflow-x-auto pb-2">
            {availableLetters.map((letter) => (
              <a
                key={letter}
                href={`#geo-letter-${letter}`}
                className="grid h-8 w-8 shrink-0 place-items-center rounded-full border-[2.5px] border-ink bg-card font-heading text-xs font-bold text-ink"
              >
                {letter}
              </a>
            ))}
          </div>
          <div className="space-y-5">
            {availableLetters.map((letter) => {
              const lettered = filteredCourses.filter(
                (c) => indexLetter(c.title) === letter,
              );
              return (
                <div key={letter} id={`geo-letter-${letter}`} className="scroll-mt-24">
                  <p className="mb-2.5 font-heading text-sm font-extrabold text-ink/70">{letter}</p>
                  <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3">
                    {lettered.map((course) => (
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
                </div>
              );
            })}
          </div>
        </div>
      ) : isGeo ? (
        <div className="space-y-6">
          {GEOGRAPHIE_REGIONS_ORDER.map((region) => {
            const regionCourses = filteredCourses.filter((c) => getGeographieRegion(c.id) === region);
            if (regionCourses.length === 0) return null;
            return (
              <div key={region}>
                <p className="mb-2.5 font-heading text-sm font-extrabold uppercase tracking-wide text-ink/70">
                  {region} <span className="text-ink/40">· {regionCourses.length}</span>
                </p>
                <ProgressiveCourseGrid
                  courses={regionCourses}
                  category={category}
                  progress={progress}
                  toggleFavoriteCourse={toggleFavoriteCourse}
                  initialVisible={DEFAULT_VISIBLE_PER_REGION}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <ProgressiveCourseGrid
          courses={filteredCourses}
          category={category}
          progress={progress}
          toggleFavoriteCourse={toggleFavoriteCourse}
          initialVisible={DEFAULT_VISIBLE}
        />
      )}
    </div>
  );
}
