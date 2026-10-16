import { scrollToAnchor } from "@/native/scroll";
import { NativeBox, NativeButton, NativeH1, NativeH2, NativeH3, NativeInput, NativeParagraph } from "@/native/elements";
import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { Link, useSearchParams } from "@/native/router";
import { Search, ChevronRight } from "@/native/icons";
import type { Category, Course, CourseMeta, Lesson } from "@/types";
import { COURSE_INDEX } from "@/data/coursesIndex.generated";
import { getCachedFullLessonRef, getFullLessonRef } from "@/data/courseContent";
import { CATEGORIES, getCategory } from "@/data/categories";
import { useAppStore } from "@/store/useAppStore";
import { useCatalogContent } from "@/hooks/useCatalogContent";
import { recommendCourses } from "@/lib/recommendations";
import { searchCourses } from "@/lib/search";
import { toCourseMeta } from "@/lib/courseMeta";
import { XP_PER_LESSON } from "@/lib/gamification";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CourseCard } from "@/components/features/CourseCard";
import { ContentLoadError } from "@/components/features/ContentLoadError";
import { useContentResource } from "@/hooks/useContentResource";
import { HomeCourseArtwork, HomeImageShade } from "@/components/features/HomeUi";
/** Nombre de cours mis en avant par matière (le reste est derrière « Voir les cours »). */
const BIBLIO_PREVIEW_COUNT = 3;
/** Onglet Biblio : recherche, leçon à la une, recommandations, puis matières en scroll horizontal */
export function BiblioScreen() {
    const completedCourseIds = useAppStore((s) => s.progress.completedCourseIds);
    const favoriteCourseIds = useAppStore((s) => s.progress.favoriteCourseIds);
    const toggleFavoriteCourse = useAppStore((s) => s.toggleFavoriteCourse);
    const featuredLessonKey = useAppStore((s) => s.progress.featuredLessonKey);
    const ensureFeaturedLesson = useAppStore((s) => s.ensureFeaturedLesson);
    useEffect(() => {
        void ensureFeaturedLesson().catch(() => { });
    }, [ensureFeaturedLesson]);
    // Le contenu complet de la leçon vedette (titre + texte) n'est chargé qu'à la demande, en ne
    // récupérant que le chunk de sa matière — voir docs/ARCHITECTURE.md § Découpage du bundle.
    const { value: featuredRef, status: featuredStatus, retry: retryFeatured } = useContentResource(featuredLessonKey, getCachedFullLessonRef, getFullLessonRef);
    const featuredCategory = featuredRef ? getCategory(featuredRef.course.categoryId) : null;
    const progress = useAppStore((s) => s.progress);
    const recommendations = recommendCourses(COURSE_INDEX.filter((c) => c.id !== featuredRef?.course.id), COURSE_INDEX, CATEGORIES, progress, 2);
    const hasActivity = progress.lastCourseId !== null || progress.completedCourseIds.length > 0;
    const [searchParams] = useSearchParams();
    const highlightedCategory = searchParams.get("cat");
    useEffect(() => {
        if (!highlightedCategory)
            return;
        scrollToAnchor(highlightedCategory);
    }, [highlightedCategory]);
    const [query, setQuery] = useState("");
    const isSearching = query.trim().length > 0;
    // Recherche immédiate sur les métadonnées (titre + description, toujours en mémoire) ;
    // complétée par le contenu des leçons dès que le catalogue complet est chargé en tâche de
    // fond (`useCatalogContent`, déclenché au montage de `AppShell`) — voir § Découpage du bundle.
    const { value: catalogContent, status: catalogStatus, retry: retryCatalog } = useCatalogContent();
    const metaResults = isSearching ? searchCourses(query, COURSE_INDEX) : [];
    const extraLessonResults = isSearching && catalogContent
        ? searchCourses(query, catalogContent)
            .filter((r) => r.matchLocation === "leçon" && !metaResults.some((m) => m.course.id === r.course.id))
            .map((r) => ({ ...r, course: toCourseMeta(r.course) }))
        : [];
    const searchResults = [...metaResults, ...extraLessonResults];
    return (<NativeBox className="pt-1">
      <NativeH1 className="font-heading text-[34px] font-extrabold leading-[44px] tracking-[-0.5px]">Biblio</NativeH1>
      {/* Bandeau tissé décoratif : rappel du motif à chevrons, purement visuel. */}
      <NativeBox aria-hidden className="mt-3 h-[9px] rounded-full" style={{ background: "repeating-linear-gradient(135deg,#1e1b18 0 3px,#efe1c6 3px 15px)" }}/>
      <NativeBox className="mt-3.5 flex items-center gap-2.5 rounded-full border-[3px] border-ink bg-card px-[18px] py-3.5 shadow-sm md:max-w-md">
        <Search className="h-4 w-4 shrink-0 text-ink-faint"/>
        <NativeInput type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Rechercher un cours…" className="w-full bg-transparent font-semibold text-ink placeholder:text-ink-faint"/>
      </NativeBox>

      {isSearching ? (<NativeBox className="mt-5">
          <SectionTitle emoji="🔎" label={`${searchResults.length} résultat${searchResults.length > 1 ? "s" : ""}`}/>
          {catalogStatus === "error" && (<NativeBox role="status" className="mt-3 rounded-card border-[2px] border-ink bg-card p-4 text-sm">
              <NativeParagraph>La recherche dans le texte des leçons est indisponible. Les titres et descriptions restent accessibles.</NativeParagraph>
              <NativeButton className="mt-2 font-bold underline underline-offset-2" onClick={retryCatalog}>Réessayer la recherche complète</NativeButton>
            </NativeBox>)}
          {searchResults.length === 0 ? (<NativeParagraph className="mt-4 font-medium text-ink-faint">Aucun cours ne correspond à « {query.trim()} ».</NativeParagraph>) : (<NativeBox className="mt-3.5 flex flex-wrap gap-3.5">
              {searchResults.map(({ course, matchLocation, matchedLessonTitle }) => (<NativeBox key={course.id} className="min-w-[210px] max-w-[210px]">
                  <CourseCard course={course} category={getCategory(course.categoryId)!} isCompleted={completedCourseIds.includes(course.id)} isFavorite={favoriteCourseIds.includes(course.id)} onToggleFavorite={() => { void toggleFavoriteCourse(course.id).catch(() => { }); }} fluid/>
                  {matchLocation !== "titre" && (<NativeParagraph className="mt-1.5 px-0.5 text-[11px] font-semibold text-ink-faint">
                      Trouvé dans {matchLocation === "leçon" ? `la leçon « ${matchedLessonTitle} »` : "la description"}
                    </NativeParagraph>)}
                </NativeBox>))}
            </NativeBox>)}
        </NativeBox>) : (<>
          <NativeBox className="mt-5">
            <SectionTitle emoji="✨" label="À la une"/>
            {featuredLessonKey === null ? (<Card className="mt-2.5 p-8 text-center md:max-w-2xl">
                <NativeParagraph className="text-lg font-extrabold">Tu as tout parcouru 🎉</NativeParagraph>
                <NativeParagraph className="mt-1.5 text-sm font-medium text-ink-muted">
                  Reviens plus tard pour de nouvelles leçons.
                </NativeParagraph>
              </Card>) : featuredStatus === "error" ? (<NativeBox className="mt-2.5 md:max-w-2xl"><ContentLoadError onRetry={retryFeatured}/></NativeBox>) : featuredStatus === "absent" ? (<Card className="mt-2.5 p-5 md:max-w-2xl"><NativeParagraph>Cette leçon n’est plus disponible.</NativeParagraph><Link className="mt-2 inline-block font-bold underline" to="/biblio/histoire">Explorer les cours</Link></Card>) : featuredRef && featuredCategory ? (<FeaturedLessonCard key={featuredLessonKey} course={featuredRef.course} lesson={featuredRef.lesson} category={featuredCategory}/>) : (<Card className="mt-2.5 p-8 text-center md:max-w-2xl">
                <NativeParagraph className="font-medium text-ink-faint">Chargement…</NativeParagraph>
              </Card>)}
          </NativeBox>

          {recommendations.length > 0 && (<NativeBox className="mt-5">
              <SectionTitle emoji="🎯" label="Recommandé pour toi"/>
              <NativeParagraph className="mt-1.5 text-[13px] font-semibold text-ink-faint">
                {hasActivity ? "D'après ta progression" : "Pour bien commencer"}
              </NativeParagraph>
              {/* Deux affiches de cours recommandés, sans barre d'avancement. */}
              <NativeBox className="mt-2.5 grid grid-cols-2 gap-3 md:max-w-2xl">
                {recommendations.map(({ course }) => (<SubjectPosterTile key={course.id} course={course} category={getCategory(course.categoryId)!}/>))}
              </NativeBox>
            </NativeBox>)}

          <NativeBox className="my-5 flex items-center justify-between">
            <SectionTitle emoji="📚" label="Matières"/>
          </NativeBox>

          <View style={{ gap: 32 }}>
            {CATEGORIES.map((category) => {
                const courses = COURSE_INDEX.filter((c) => c.categoryId === category.id);
                if (courses.length === 0)
                    return null;
                // Les cours terminés passent en fin de file : l'aperçu montre donc les suivants
                // à mesure qu'on avance, sans jamais se vider (tri stable, ordre du catalogue
                // conservé à l'intérieur de chaque groupe).
                const preview = [...courses]
                    .sort((a, b) => Number(completedCourseIds.includes(a.id)) -
                    Number(completedCourseIds.includes(b.id)))
                    .slice(0, BIBLIO_PREVIEW_COUNT);
                return <SubjectBlock key={category.id} category={category} courses={preview}/>;
            })}
          </View>
        </>)}
    </NativeBox>);
}
/** Aperçu d'une matière : trois affiches sur le fond de la page, en défilement horizontal. */
function SubjectBlock({ category, courses }: {
    category: Category;
    courses: CourseMeta[];
}) {
    return (<NativeBox id={category.id}>
      <NativeBox className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <NativeH3 className="font-heading text-[22px] font-extrabold leading-[30px]">
          {category.emoji} {category.name}
        </NativeH3>
        <Link to={`/biblio/${category.id}`} className="inline-flex shrink-0 items-center gap-1.5 rounded-full border-[2.5px] border-ink bg-card px-3 py-1.5 font-heading text-[11.5px] font-extrabold">
          Voir les cours
          <ChevronRight className="h-3 w-3" strokeWidth={3}/>
        </Link>
      </NativeBox>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} accessibilityLabel={`Cours : ${category.name}`} contentContainerStyle={{ gap: 12, paddingRight: 6, paddingBottom: 8 }}>
        {courses.map((course) => (<Link key={course.id} to={`/cours/${course.id}`} className="relative flex min-h-[240px] w-[210px] flex-col justify-end overflow-hidden rounded-[18px] border-[3px] border-ink shadow-sm active:translate-y-[3px] active:shadow-none">
          <HomeCourseArtwork course={course} category={category} emojiSize={56}/>
          <NativeBox className="relative px-3 pb-3 pt-14">
            <HomeImageShade/>
            <NativeParagraph className="font-heading text-[16px] font-extrabold leading-[22px] text-white">
              {course.title}
            </NativeParagraph>
          </NativeBox>
        </Link>))}
      </ScrollView>
    </NativeBox>);
}
/**
 * Affiche d'un cours recommandé. L'illustration occupe toute la tuile, le
 * titre est posé dessus sur un voile sombre. Elle suggère un cours de plus, donc pas de barre
 * de progression — une barre à zéro ne suggère rien. Sans illustration, l'emoji du cours sur le
 * dégradé de la matière tient la place.
 */
function SubjectPosterTile({ course, category }: {
    course: CourseMeta;
    category: Category;
}) {
    return (<Link to={`/cours/${course.id}`} className="relative flex min-h-[150px] flex-col justify-end overflow-hidden rounded-[18px] border-[3px] border-ink shadow-sm transition-transform active:translate-y-[3px] active:shadow-none">
      <HomeCourseArtwork course={course} category={category} emojiSize={34} />
      <NativeBox className="relative px-2.5 pb-2.5 pt-9">
        <HomeImageShade />
        <NativeParagraph className="font-heading text-[12.5px] font-extrabold leading-[18px] text-white">{course.title}</NativeParagraph>
        <NativeParagraph className="mt-0.5 font-heading text-[10px] font-bold text-white/80">
          {course.lessons.length} leçons
        </NativeParagraph>
      </NativeBox>
    </Link>);
}
function SectionTitle({ emoji, label }: {
    emoji: string;
    label: string;
}) {
    return (<NativeH2 className="inline-flex self-start items-center gap-2 rounded-full bg-ink px-3.5 py-1.5 font-heading text-xs font-bold tracking-wide text-white">
      {emoji} {label}
    </NativeH2>);
}
/**
 * Carte « À la une » : ouvre la leçon présentée dans l'écran de lecture du cours.
 *
 * La couverture porte l'**illustration du cours** dont la leçon est tirée, comme les cartes de
 * cours et le fil du Home. À défaut d'illustration (12 cours sur 136 n'en ont pas), elle retombe
 * sur le dégradé de la matière et l'emoji du cours — le dégradé était auparavant codé en dur aux
 * couleurs de l'Histoire, quelle que soit la matière de la leçon mise en avant.
 */
function FeaturedLessonCard({ course, lesson, category, }: {
    course: Course;
    lesson: Lesson;
    category: Category;
}) {
    return (<Card className="mt-2.5 overflow-hidden md:max-w-2xl">
      {/* Image pleine carte, titre et action sur le même dégradé sombre que la reprise. */}
      <View style={{ minHeight: 280, justifyContent: "flex-end", overflow: "hidden" }}>
        <HomeCourseArtwork course={toCourseMeta(course)} category={category} emojiSize={72} />
        <NativeBox className="relative px-[18px] pb-[18px] pt-14">
          <HomeImageShade />
          <NativeH3 className="font-heading text-[27px] font-extrabold leading-[30px] tracking-[-0.02em] text-white">
            {lesson.title}
          </NativeH3>
          <NativeBox className="mt-4 flex flex-wrap items-center gap-3">
            <Link to={`/cours/${course.id}?lessonId=${encodeURIComponent(lesson.id)}`}>
              <Button variant="primary">
                Lire la leçon
              </Button>
            </Link>
            <Badge tone="gold">＋{XP_PER_LESSON} XP</Badge>
          </NativeBox>
        </NativeBox>
      </View>
    </Card>);
}
