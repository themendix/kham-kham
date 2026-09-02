import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, ChevronRight } from "lucide-react";
import type { Category, Course, CourseMeta, Lesson } from "@/types";
import { COURSE_INDEX } from "@/data/coursesIndex.generated";
import { getFullLessonRef } from "@/data/courseContent";
import { CATEGORIES, getCategory } from "@/data/categories";
import { useAppStore } from "@/store/useAppStore";
import { useCatalogContent } from "@/hooks/useCatalogContent";
import { recommendCourses } from "@/lib/recommendations";
import { searchCourses } from "@/lib/search";
import { toCourseMeta } from "@/lib/courseMeta";
import { XP_PER_LESSON } from "@/lib/gamification";
import { lessonKey } from "@/lib/featured";
import { isSubjectEmerging } from "@/lib/subjectProgress";
import { getCourseImage, getCourseImagePosition, OBJECT_POSITION } from "@/lib/courseImages";
import { SUBJECT_BLOCK, SUBJECT_GRADIENT } from "@/lib/subjectStyles";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CourseCard } from "@/components/features/CourseCard";
import { LessonBlocks } from "@/components/features/LessonBlocks";

/** Nombre de cours mis en avant dans la mosaïque d'un bloc de matière (le reste est derrière « Voir les cours »). */
const BIBLIO_PREVIEW_COUNT = 2;

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
    2,
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
      <h1 className="font-heading text-[34px] font-extrabold leading-[0.95] tracking-[-0.03em]">Biblio</h1>
      {/* Bandeau tissé décoratif : rappel du motif à chevrons, purement visuel. */}
      <div
        aria-hidden
        className="mt-3 h-[9px] rounded-full"
        style={{ background: "repeating-linear-gradient(135deg,#1e1b18 0 3px,#efe1c6 3px 15px)" }}
      />
      <label className="mt-3.5 flex items-center gap-2.5 rounded-full border-[3px] border-ink bg-card px-[18px] py-3.5 shadow-sm md:max-w-md">
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
              {/* Deux affiches, au format de la petite tuile des blocs de matière : une
                  recommandation suggère un cours, elle n'a pas à porter d'avancement. */}
              <div className="mt-2.5 grid grid-cols-2 gap-3 md:max-w-2xl">
                {recommendations.map(({ course }) => (
                  <SubjectPosterTile
                    key={course.id}
                    course={course}
                    category={getCategory(course.categoryId)!}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="my-5 flex items-center justify-between">
            <SectionTitle emoji="📚" label="Matières" />
          </div>

          <div className="space-y-4">
            {CATEGORIES.map((category, index) => {
              const courses = COURSE_INDEX.filter((c) => c.categoryId === category.id);
              if (courses.length === 0) return null;
              // Les cours terminés passent en fin de file : l'aperçu montre donc les suivants
              // à mesure qu'on avance, sans jamais se vider (tri stable, ordre du catalogue
              // conservé à l'intérieur de chaque groupe).
              const preview = [...courses]
                .sort(
                  (a, b) =>
                    Number(completedCourseIds.includes(a.id)) -
                    Number(completedCourseIds.includes(b.id)),
                )
                .slice(0, BIBLIO_PREVIEW_COUNT);
              return (
                <SubjectBlock
                  key={category.id}
                  category={category}
                  courses={preview}
                  totalCount={courses.length}
                  completedLessonIds={progress.completedLessonIds}
                  // Une matière sur deux inverse la mosaïque : la petite tuile passe à gauche,
                  // ce qui casse la colonne que deux grandes tuiles alignées produiraient.
                  mirrored={index % 2 === 1}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

/**
 * Bloc d'une matière sur la Biblio : un cadre plein aux couleurs de la matière, en pleine
 * largeur, qui remplace le rail de `CourseCard` à défilement horizontal. Il ne montre que deux
 * cours, en mosaïque de tailles inégales — le catalogue complet reste derrière « Voir les
 * cours ». L'`id` porte l'ancre de `/biblio?cat=<id>` (raccourci « Explore par thème » du Home).
 */
function SubjectBlock({
  category,
  courses,
  totalCount,
  mirrored,
  completedLessonIds,
}: {
  category: Category;
  courses: CourseMeta[];
  totalCount: number;
  mirrored: boolean;
  completedLessonIds: string[];
}) {
  const [first, second] = courses;
  const bigTile = (
    <SubjectTile course={first} category={category} completedLessonIds={completedLessonIds} />
  );
  const smallTile = second ? <SubjectPosterTile course={second} category={category} /> : null;

  return (
    <section
      id={category.id}
      className={`scroll-mt-24 rounded-[26px] border-[3px] p-3.5 ${SUBJECT_BLOCK[category.color]}`}
    >
      <div className="flex items-end justify-between gap-3">
        <div className="flex min-w-0 flex-wrap items-center gap-2">
          <h3 className="font-heading text-[22px] font-extrabold tracking-[-0.02em]">
            {category.name}
          </h3>
          {isSubjectEmerging(category.id, COURSE_INDEX) && <Badge tone="neutral">🚧 En construction</Badge>}
        </div>
        <Link
          to={`/biblio/${category.id}`}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full border-[2.5px] border-ink bg-card px-3 py-1.5 font-heading text-[11.5px] font-extrabold"
        >
          Voir les cours
          <ChevronRight className="h-3 w-3" strokeWidth={3} />
        </Link>
      </div>

      <div
        className={`mt-3 grid gap-3 ${smallTile ? (mirrored ? "grid-cols-[1fr_1.5fr]" : "grid-cols-[1.5fr_1fr]") : "grid-cols-1"}`}
      >
        {mirrored && smallTile ? (
          <>
            {smallTile}
            {bigTile}
          </>
        ) : (
          <>
            {bigTile}
            {smallTile}
          </>
        )}
      </div>

      <p className="mt-2.5 font-heading text-[11px] font-bold uppercase tracking-wide text-ink/60">
        {totalCount} cours
      </p>
    </section>
  );
}

/**
 * Grande tuile d'un bloc de matière : bannière illustrée, titre et avancement en leçons sur
 * fond de carte. C'est le cours qu'on reprend — d'où la barre de progression.
 * Sans illustration, la bannière retombe sur le dégradé de la matière et l'emoji du cours.
 */
function SubjectTile({
  course,
  category,
  completedLessonIds,
}: {
  course: CourseMeta;
  category: Category;
  completedLessonIds: string[];
}) {
  const image = getCourseImage(course.id);
  const total = course.lessons.length;
  const done = course.lessons.filter((l) => completedLessonIds.includes(lessonKey(course.id, l.id))).length;
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);
  return (
    <Link
      to={`/cours/${course.id}`}
      className="flex flex-col overflow-hidden rounded-[18px] border-[3px] border-ink bg-card shadow-sm transition-transform active:translate-y-[3px] active:shadow-none"
    >
      <div
        className={`relative flex h-[116px] items-center justify-center border-b-[3px] border-ink bg-gradient-to-br text-[40px] ${SUBJECT_GRADIENT[category.color]}`}
      >
        {image ? (
          <img
            src={image.src}
            srcSet={image.srcSet}
            sizes="(min-width: 768px) 420px, 58vw"
            alt=""
            loading="lazy"
            className={`absolute inset-0 h-full w-full object-cover ${OBJECT_POSITION[getCourseImagePosition(course.id)]}`}
          />
        ) : (
          course.emoji
        )}
      </div>
      <div className="flex flex-1 flex-col justify-between px-3 pb-3 pt-2.5">
        <p className="font-heading text-sm font-extrabold leading-tight">{course.title}</p>
        <div className="mt-2 flex items-center gap-2">
          <div className="h-2.5 flex-1 overflow-hidden rounded-full border-2 border-ink bg-cream">
            <div
              className={`h-full ${done === total ? "bg-success" : "bg-gold"}`}
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="font-heading text-[11px] font-extrabold">
            {done}/{total}
          </span>
        </div>
      </div>
    </Link>
  );
}

/**
 * Petite tuile d'un bloc de matière : une affiche. L'illustration occupe toute la tuile, le
 * titre est posé dessus sur un voile sombre. Elle suggère un cours de plus, donc pas de barre
 * de progression — une barre à zéro ne suggère rien. Sans illustration, l'emoji du cours sur le
 * dégradé de la matière tient la place.
 */
function SubjectPosterTile({ course, category }: { course: CourseMeta; category: Category }) {
  const image = getCourseImage(course.id);
  return (
    <Link
      to={`/cours/${course.id}`}
      className={`relative flex min-h-[150px] flex-col justify-end overflow-hidden rounded-[18px] border-[3px] border-ink bg-gradient-to-br shadow-sm transition-transform active:translate-y-[3px] active:shadow-none ${SUBJECT_GRADIENT[category.color]}`}
    >
      {image ? (
        <img
          src={image.src}
          srcSet={image.srcSet}
          sizes="(min-width: 768px) 280px, 40vw"
          alt=""
          loading="lazy"
          className={`absolute inset-0 h-full w-full object-cover ${OBJECT_POSITION[getCourseImagePosition(course.id)]}`}
        />
      ) : (
        <span className="absolute inset-0 flex items-center justify-center text-[34px]">{course.emoji}</span>
      )}
      {/* Voile sombre : seul garant du contraste du texte blanc sur une illustration quelconque. */}
      <div className="relative bg-gradient-to-t from-ink/85 via-ink/60 to-transparent px-2.5 pb-2.5 pt-9">
        <p className="font-heading text-[12.5px] font-extrabold leading-tight text-white">{course.title}</p>
        <p className="mt-0.5 font-heading text-[10px] font-bold text-white/80">
          {course.lessons.length} leçons
        </p>
      </div>
    </Link>
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
 *
 * La bannière porte l'**illustration du cours** dont la leçon est tirée, comme les cartes de
 * cours et le fil du Home. À défaut d'illustration (12 cours sur 136 n'en ont pas), elle retombe
 * sur le dégradé de la matière et l'emoji du cours — le dégradé était auparavant codé en dur aux
 * couleurs de l'Histoire, quelle que soit la matière de la leçon mise en avant.
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
  const image = getCourseImage(course.id);

  return (
    <Card className="mt-2.5 overflow-hidden md:max-w-2xl">
      {/* Affiche : l'illustration tient toute la hauteur, le titre de la leçon est posé
          dessus. C'est le premier bloc de l'onglet — il doit se lire comme une couverture,
          pas comme une carte de plus. Le voile sombre est le seul garant du contraste du
          texte blanc sur une illustration quelconque. */}
      <div
        className={`relative flex h-[230px] flex-col justify-end overflow-hidden border-b-[3px] border-ink bg-gradient-to-br md:h-[290px] ${SUBJECT_GRADIENT[category.color]}`}
      >
        {image ? (
          <img
            src={image.src}
            srcSet={image.srcSet}
            sizes="(min-width: 768px) 672px, 100vw"
            alt=""
            className={`absolute inset-0 h-full w-full object-cover ${OBJECT_POSITION[getCourseImagePosition(course.id)]}`}
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center text-[72px]">
            {course.emoji}
          </span>
        )}
        <div className="relative bg-gradient-to-t from-ink/90 via-ink/65 to-transparent px-[18px] pb-4 pt-14">
          <p className="font-heading text-[10.5px] font-extrabold uppercase tracking-[0.1em] text-white/70">
            {category.emoji} {category.name} · {course.title}
          </p>
          <h3 className="mt-1.5 font-heading text-[27px] font-extrabold leading-[1.05] tracking-[-0.02em] text-white md:text-[33px]">
            {lesson.title}
          </h3>
        </div>
      </div>
      <div className="px-[18px] pb-[18px] pt-4">
        {expanded ? (
          <>
            <LessonBlocks blocks={lesson.blocks} accent={category.color} density="compact" imageKey={lesson.id} />
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
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary" onClick={() => setExpanded(true)}>
              Lire la leçon
            </Button>
            <Badge tone="gold">＋{XP_PER_LESSON} XP</Badge>
          </div>
        )}
      </div>
    </Card>
  );
}
