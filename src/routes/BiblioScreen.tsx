import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";
import type { Category, Course, Lesson } from "@/types";
import { COURSES } from "@/data/courses";
import { CATEGORIES, getCategory } from "@/data/categories";
import { useAppStore } from "@/store/useAppStore";
import { recommendCourses } from "@/lib/recommendations";
import { getLessonRef } from "@/lib/featured";
import { XP_PER_LESSON } from "@/lib/gamification";
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

  const featuredRef = featuredLessonKey ? getLessonRef(featuredLessonKey, COURSES) : null;
  const featuredCategory = featuredRef ? getCategory(featuredRef.course.categoryId) : null;

  const progress = useAppStore((s) => s.progress);
  const recommendations = recommendCourses(
    COURSES.filter((c) => c.id !== featuredRef?.course.id),
    progress,
    4,
  );
  const hasActivity =
    progress.lastCourseId !== null ||
    progress.completedCourseIds.length > 0 ||
    Object.values(progress.masteryByCategory).some((m) => m > 0);

  const [searchParams] = useSearchParams();
  const highlightedCategory = searchParams.get("cat");

  useEffect(() => {
    if (!highlightedCategory) return;
    document.getElementById(highlightedCategory)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [highlightedCategory]);

  const [query, setQuery] = useState("");
  const trimmedQuery = query.trim().toLowerCase();
  const isSearching = trimmedQuery.length > 0;
  const searchResults = isSearching
    ? COURSES.filter((c) => c.title.toLowerCase().includes(trimmedQuery))
    : [];

  return (
    <div className="pt-1">
      <label className="flex items-center gap-2.5 rounded-full border-[3px] border-ink bg-card px-[18px] py-3.5 shadow-sm md:max-w-md">
        <Search className="h-4 w-4 shrink-0 text-[#8a8071]" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher un cours…"
          className="w-full bg-transparent font-semibold text-ink placeholder:text-[#8a8071] focus:outline-none"
        />
      </label>

      {isSearching ? (
        <div className="mt-5">
          <SectionTitle emoji="🔎" label={`${searchResults.length} résultat${searchResults.length > 1 ? "s" : ""}`} />
          {searchResults.length === 0 ? (
            <p className="mt-4 font-medium text-[#8a8071]">Aucun cours ne correspond à « {query.trim()} ».</p>
          ) : (
            <div className="mt-3.5 flex flex-wrap gap-3.5">
              {searchResults.map((course) => (
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
          )}
        </div>
      ) : (
        <>
          <div className="mt-5">
            <SectionTitle emoji="✨" label="À la une" />
            {featuredRef && featuredCategory ? (
              <FeaturedLessonCard
                key={featuredLessonKey}
                course={featuredRef.course}
                lesson={featuredRef.lesson}
                category={featuredCategory}
                onComplete={() => completeLesson(featuredRef.course.id, featuredRef.lesson.id)}
              />
            ) : (
              <Card className="mt-2.5 p-8 text-center md:max-w-2xl">
                <p className="text-lg font-extrabold">Tu as tout parcouru 🎉</p>
                <p className="mt-1.5 text-sm font-medium text-[#5c554b]">
                  Reviens plus tard pour de nouvelles leçons.
                </p>
              </Card>
            )}
          </div>

          {recommendations.length > 0 && (
            <div className="mt-5">
              <SectionTitle emoji="🎯" label="Recommandé pour toi" />
              <p className="mt-1.5 text-[13px] font-semibold text-[#8a8071]">
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
            const courses = COURSES.filter((c) => c.categoryId === category.id);
            if (courses.length === 0) return null;
            const previewCourses = courses.slice(0, BIBLIO_PREVIEW_COUNT);
            return (
              <div key={category.id} id={category.id} className="mb-1 scroll-mt-24">
                <div className="mb-2.5 flex items-center justify-between">
                  <SectionTitle emoji={category.emoji} label={category.name} />
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
    <span className="inline-flex items-center gap-2 rounded-full bg-ink px-3.5 py-1.5 font-heading text-xs font-bold tracking-wide text-white">
      {emoji} {label}
    </span>
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
            <p className="text-sm font-medium leading-relaxed text-[#5c554b]">{lesson.content}</p>
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
            <p className="text-sm font-medium text-[#5c554b]">{course.title}</p>
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
