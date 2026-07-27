import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";
import type { Category, Course, Lesson } from "@/types";
import { COURSE_INDEX } from "@/data/coursesIndex.generated";
import { getFullLessonRef } from "@/data/courseContent";
import { CATEGORIES, getCategory } from "@/data/categories";
import { useAppStore } from "@/store/useAppStore";
import { useCatalogContent } from "@/hooks/useCatalogContent";
import { recommendCourses } from "@/lib/recommendations";
import { searchCourses } from "@/lib/search";
import { toCourseMeta } from "@/lib/courseMeta";
import { XP_PER_LESSON } from "@/lib/gamification";
import { isSubjectEmerging } from "@/lib/subjectProgress";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CourseCard } from "@/components/features/CourseCard";

/** Nombre de cours affichés en aperçu par matière (le reste est visible via « Voir plus → »). */
const BIBLIO_PREVIEW_COUNT = 3;

/** Onglet Biblio : recherche, leçon à la une, recommandations, puis matières en scroll horizontal */
export function BiblioScreen() {
  const completedCourseIds = useAppStore((s) => s.progress.completedCourseIds);
  const favoriteCourseIds = useAppStore((s) => s.progress.favoriteCourseIds);
  const toggleFavoriteCourse = useAppStore((s) => s.toggleFavoriteCourse);
  const featuredLessonKey = useAppStore((s) => s.progress.featuredLessonKey);
  const ensureFeaturedLesson = useAppStore((s) => s.ensureFeaturedLesson);
  const completeLesson = useAppStore((s) => s.completeLesson);

  useEffect(() => {
    ensureFeaturedLesson();
  }, [ensureFeaturedLesson]);

  // Le contenu complet de la leçon vedette (titre + texte) n'est chargé qu'à la demande, en ne
  // récupérant que le chunk de sa matière — voir docs/ARCHITECTURE.md § Découpage du bundle.
  const [featuredRef, setFeaturedRef] = useState<{ course: Course; lesson: Lesson } | null>(null);
  useEffect(() => {
    let cancelled = false;
    if (!featuredLessonKey) {
      setFeaturedRef(null);
      return;
    }
    getFullLessonRef(featuredLessonKey).then((ref) => {
      if (!cancelled) setFeaturedRef(ref);
    });
    return () => {
      cancelled = true;
    };
  }, [featuredLessonKey]);
  const featuredCategory = featuredRef ? getCategory(featuredRef.course.categoryId) : null;

  const progress = useAppStore((s) => s.progress);
  const recommendations = recommendCourses(
    COURSE_INDEX.filter((c) => c.id !== featuredRef?.course.id),
    COURSE_INDEX,
    CATEGORIES,
    progress,
    4,
  );
  const hasActivity = progress.lastCourseId !== null || progress.completedCourseIds.length > 0;

  const [searchParams] = useSearchParams();
  const highlightedCategory = searchParams.get("cat");

  useEffect(() => {
    if (!highlightedCategory) return;
    document.getElementById(highlightedCategory)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [highlightedCategory]);

  const [query, setQuery] = useState("");
  const isSearching = query.trim().length > 0;
  // Recherche immédiate sur les métadonnées (titre + description, toujours en mémoire) ;
  // complétée par le contenu des leçons dès que le catalogue complet est chargé en tâche de
  // fond (`useCatalogContent`, déclenché au montage de `AppShell`) — voir § Découpage du bundle.
  const catalogContent = useCatalogContent();
  const metaResults = isSearching ? searchCourses(query, COURSE_INDEX) : [];
  const extraLessonResults = isSearching && catalogContent
    ? searchCourses(query, catalogContent)
        .filter((r) => r.matchLocation === "leçon" && !metaResults.some((m) => m.course.id === r.course.id))
        .map((r) => ({ ...r, course: toCourseMeta(r.course) }))
    : [];
  const searchResults = [...metaResults, ...extraLessonResults];

  return (
    <div className="pt-1">
      <h1 className="sr-only">Biblio</h1>
      <label className="flex items-center gap-2.5 rounded-full border-[3px] border-ink bg-card px-[18px] py-3.5 shadow-sm md:max-w-md">
        <Search className="h-4 w-4 shrink-0 text-ink-faint" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher un cours…"
          className="w-full bg-transparent font-semibold text-ink placeholder:text-ink-faint"
        />
      </label>

      {isSearching ? (
        <div className="mt-5">
          <SectionTitle emoji="🔎" label={`${searchResults.length} résultat${searchResults.length > 1 ? "s" : ""}`} />
          {searchResults.length === 0 ? (
            <p className="mt-4 font-medium text-ink-faint">Aucun cours ne correspond à « {query.trim()} ».</p>
          ) : (
            <div className="mt-3.5 flex flex-wrap gap-3.5">
              {searchResults.map(({ course, matchLocation, matchedLessonTitle }) => (
                <div key={course.id} className="min-w-[210px] max-w-[210px]">
                  <CourseCard
                    course={course}
                    category={getCategory(course.categoryId)!}
                    isCompleted={completedCourseIds.includes(course.id)}
                    isFavorite={favoriteCourseIds.includes(course.id)}
                    onToggleFavorite={() => toggleFavoriteCourse(course.id)}
                    fluid
                  />
                  {matchLocation !== "titre" && (
                    <p className="mt-1.5 px-0.5 text-[11px] font-semibold text-ink-faint">
                      Trouvé dans {matchLocation === "leçon" ? `la leçon « ${matchedLessonTitle} »` : "la description"}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <>
          <div className="mt-5">
            <SectionTitle emoji="✨" label="À la une" />
            {featuredLessonKey === null ? (
              <Card className="mt-2.5 p-8 text-center md:max-w-2xl">
                <p className="text-lg font-extrabold">Tu as tout parcouru 🎉</p>
                <p className="mt-1.5 text-sm font-medium text-ink-muted">
                  Reviens plus tard pour de nouvelles leçons.
                </p>
              </Card>
            ) : featuredRef && featuredCategory ? (
              <FeaturedLessonCard
                key={featuredLessonKey}
                course={featuredRef.course}
                lesson={featuredRef.lesson}
                category={featuredCategory}
                onComplete={() => completeLesson(featuredRef.course.id, featuredRef.lesson.id)}
              />
            ) : (
              <Card className="mt-2.5 p-8 text-center md:max-w-2xl">
                <p className="font-medium text-ink-faint">Chargement…</p>
              </Card>
            )}
          </div>

          {recommendations.length > 0 && (
            <div className="mt-5">
              <SectionTitle emoji="🎯" label="Recommandé pour toi" />
              <p className="mt-1.5 text-[13px] font-semibold text-ink-faint">
                {hasActivity ? "D'après ta progression" : "Pour bien commencer"}
              </p>
              <div className="scrollbar-none mt-2.5 flex gap-3.5 overflow-x-auto pb-2 md:flex-wrap md:overflow-visible">
                {recommendations.map(({ course }) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    category={getCategory(course.categoryId)!}
                    isCompleted={completedCourseIds.includes(course.id)}
                    isFavorite={favoriteCourseIds.includes(course.id)}
                    onToggleFavorite={() => toggleFavoriteCourse(course.id)}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="my-5 flex items-center justify-between">
            <SectionTitle emoji="📚" label="Matières" />
          </div>

          {CATEGORIES.map((category) => {
            const courses = COURSE_INDEX.filter((c) => c.categoryId === category.id);
            if (courses.length === 0) return null;
            const previewCourses = courses.slice(0, BIBLIO_PREVIEW_COUNT);
            return (
              <div key={category.id} id={category.id} className="mb-1 scroll-mt-24">
                <div className="mb-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <SectionTitle emoji={category.emoji} label={category.name} />
                    {isSubjectEmerging(category.id, COURSE_INDEX) && (
                      <Badge tone="neutral">🚧 En construction</Badge>
                    )}
                  </div>
                  <Link to={`/biblio/${category.id}`} className="text-[13px] font-bold text-ink/75">
                    Voir plus →
                  </Link>
                </div>
                <div className="scrollbar-none flex gap-3.5 overflow-x-auto pb-2 md:flex-wrap md:overflow-visible">
                  {previewCourses.map((course) => (
                    <CourseCard
                      key={course.id}
                      course={course}
                      category={category}
                      isCompleted={completedCourseIds.includes(course.id)}
                      isFavorite={favoriteCourseIds.includes(course.id)}
                      onToggleFavorite={() => toggleFavoriteCourse(course.id)}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

function SectionTitle({ emoji, label }: { emoji: string; label: string }) {
  return (
    <h2 className="inline-flex items-center gap-2 rounded-full bg-ink px-3.5 py-1.5 font-heading text-xs font-bold tracking-wide text-white">
      {emoji} {label}
    </h2>
  );
}

/**
 * Carte « À la une » : une leçon repliée (titre + « Lire la leçon ») qui se déplie
 * en ligne pour révéler son contenu, puis « J'ai terminé » fait avancer la vedette.
 * Keyée par `featuredLessonKey` dans le parent pour repartir repliée à chaque leçon.
 */
function FeaturedLessonCard({
  course,
  lesson,
  category,
  onComplete,
}: {
  course: Course;
  lesson: Lesson;
  category: Category;
  onComplete: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="mt-2.5 overflow-hidden md:max-w-2xl">
      <div className="flex h-[120px] items-center justify-center border-b-[3px] border-ink bg-gradient-to-br from-[#F3D9A4] to-[#E9B871] text-[60px] md:h-[150px]">
        {course.emoji}
      </div>
      <div className="px-[18px] pb-[18px] pt-4">
        <Tag label={category.name} emoji={category.emoji} variant="dark" />
        <div className="mb-1.5 mt-3 text-[21px] font-extrabold">{lesson.title}</div>

        {expanded ? (
          <>
            <p className="text-sm font-medium leading-relaxed text-ink-muted">{lesson.content}</p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Button variant="primary" onClick={onComplete}>
                J'ai terminé
              </Button>
              <Link to={`/cours/${course.id}`} className="text-[13px] font-bold text-ink/75">
                Voir le cours complet →
              </Link>
            </div>
          </>
        ) : (
          <>
            <p className="text-sm font-medium text-ink-muted">{course.title}</p>
            <div className="mt-3.5 flex flex-wrap items-center gap-3">
              <Button variant="primary" onClick={() => setExpanded(true)}>
                Lire la leçon
              </Button>
              <Badge tone="gold">＋{XP_PER_LESSON} XP</Badge>
            </div>
          </>
        )}
      </div>
    </Card>
  );
}
