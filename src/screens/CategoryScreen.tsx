import { NativeBox, NativeButton, NativeH1, NativeParagraph, NativeSpan } from "@/native/elements";
import { useState } from "react";
import { View, useWindowDimensions } from "react-native";
import { useParams, useNavigate } from "@/native/router";
import { ArrowLeft } from "@/native/icons";
import type { CourseMeta, UserProgress } from "@/types";
import { COURSE_INDEX } from "@/data/coursesIndex.generated";
import { getCategory } from "@/data/categories";
import { useAppStore } from "@/store/useAppStore";
import { SUBJECT_DEEP } from "@/lib/subjectStyles";
import { getSubjectProgress, getCourseStatus, isSubjectEmerging, type CourseStatus } from "@/lib/subjectProgress";
import { Badge } from "@/components/ui/Badge";
import { CoursePhotoCard } from "@/components/features/CoursePhotoCard";
import { HistorySubjectHeader } from "@/components/features/HistorySubjectHeader";
import { GeographyScreen } from "./GeographyScreen";
type Filter = "tout" | CourseStatus;
function sortByTitle(courses: CourseMeta[]): CourseMeta[] {
    return [...courses].sort((a, b) => a.title.localeCompare(b.title, "fr", { sensitivity: "base" }));
}
const FILTERS: {
    key: Filter;
    label: string;
}[] = [
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
/** Grille de tous les cours de la sélection, avec favoris conservés. */
function CourseGrid({ courses, category, progress, onToggleFavorite }: {
    courses: CourseMeta[];
    category: NonNullable<ReturnType<typeof getCategory>>;
    progress: UserProgress;
    onToggleFavorite: (courseId: string) => void;
}) {
    const { width: windowWidth, fontScale } = useWindowDimensions();
    const [gridWidth, setGridWidth] = useState(Math.max(0, windowWidth - 32));
    const columns = fontScale > 1.5 || gridWidth < 270 ? 1 : 2;
    const cardWidth = Math.max(0, (gridWidth - 14 * (columns - 1)) / columns);
    return (<View onLayout={(event) => setGridWidth(event.nativeEvent.layout.width)} style={{ flexDirection: "row", flexWrap: "wrap", gap: 14, paddingBottom: 4 }}>
        {courses.map((course) => (<View key={course.id} style={{ width: cardWidth }}>
          <CoursePhotoCard course={course} category={category} status={getCourseStatus(course.id, progress)} isFavorite={progress.favoriteCourseIds.includes(course.id)} onToggleFavorite={() => onToggleFavorite(course.id)}/>
        </View>))}
    </View>);
}
/** Tableau de bord d'une matière : niveau, progression, filtres et liste de ses cours */
export function CategoryScreen() {
    const { categoryId } = useParams<{
        categoryId: string;
    }>();
    const navigate = useNavigate();
    const category = getCategory(categoryId ?? "");
    const progress = useAppStore((s) => s.progress);
    const toggleFavoriteCourse = useAppStore((s) => s.toggleFavoriteCourse);
    const toggleFavorite = (courseId: string) => { void toggleFavoriteCourse(courseId).catch(() => { }); };
    const [filter, setFilter] = useState<Filter>("tout");
    if (!category) {
        return (<NativeBox className="mx-auto max-w-md rounded-card border-[3px] border-ink bg-card p-8 text-center shadow-card">
        <NativeParagraph className="font-bold">Cette matière est introuvable.</NativeParagraph>
      </NativeBox>);
    }
    if (category.id === "geo") {
        return <GeographyScreen category={category} progress={progress} onToggleFavorite={toggleFavorite} onBack={() => navigate("/biblio")}/>;
    }
    const courses = COURSE_INDEX.filter((c) => c.categoryId === category.id);
    const subjectProgress = getSubjectProgress(category.id, progress, COURSE_INDEX);
    const filteredCourses = sortByTitle(filter === "tout" ? courses : courses.filter((c) => getCourseStatus(c.id, progress) === filter));
    // Compteurs affichés dans les pastilles de filtre (« En cours · 3 »).
    const filterCounts: Record<Filter, number> = {
        tout: courses.length,
        afaire: 0,
        encours: 0,
        termine: 0,
    };
    for (const c of courses)
        filterCounts[getCourseStatus(c.id, progress)] += 1;
    if (category.id === "histoire") {
        return <View style={{ gap: 16 }}>
          <HistorySubjectHeader progress={subjectProgress} filter={filter} counts={filterCounts} onFilterChange={setFilter} onBack={() => navigate("/biblio")}/>
          {filteredCourses.length === 0
            ? <NativeParagraph className="font-medium text-ink-faint">{EMPTY_MESSAGE[filter]}</NativeParagraph>
            : <CourseGrid key={`${category.id}:${filter}`} courses={filteredCourses} category={category} progress={progress} onToggleFavorite={toggleFavorite}/>}
        </View>;
    }
    const masteryPct = subjectProgress.totalCount === 0
        ? 0
        : Math.round((subjectProgress.completedCount / subjectProgress.totalCount) * 100);
    const deep = SUBJECT_DEEP[category.color];
    return (<NativeBox>
      <NativeBox className="mb-5 border-b-[3px] border-ink pb-5">
        <NativeBox className="flex items-center gap-2.5">
          <NativeButton onClick={() => navigate(-1)} aria-label="Retour" className="grid h-[38px] w-[38px] shrink-0 place-items-center rounded-full border-[3px] border-ink bg-card shadow-sm">
            <ArrowLeft className="h-4 w-4" strokeWidth={3}/>
          </NativeButton>
          <NativeSpan className="font-heading text-[11px] font-extrabold uppercase tracking-[0.08em] text-ink-faint">
            Matière
          </NativeSpan>
        </NativeBox>

        <NativeH1 className="mt-2.5 font-heading text-[36px] font-extrabold leading-[46px] tracking-[-0.5px]">
          {category.name}
        </NativeH1>

        <NativeBox className="mt-2.5 flex flex-wrap items-center gap-2">
          <NativeSpan className="inline-flex items-center rounded-full border-[2.5px] border-ink px-3 py-1 font-heading text-xs font-bold uppercase tracking-wide text-ink" style={{ background: deep }}>
            Niveau {subjectProgress.level}
          </NativeSpan>
          {isSubjectEmerging(category.id, COURSE_INDEX) && <Badge tone="neutral">🚧 En construction</Badge>}
        </NativeBox>

        <NativeBox className="mt-3.5 flex items-center gap-3 rounded-card border-[3px] bg-card px-3.5 py-3 shadow-sm md:max-w-md" style={{ borderColor: deep, boxShadow: `3px 3px 0 0 ${deep}` }}>
          <NativeBox className="min-w-0 flex-1">
            <NativeParagraph className="font-heading text-[11px] font-bold uppercase tracking-[0.06em] text-ink-faint">
              Ta progression
            </NativeParagraph>
            <NativeParagraph className="mt-0.5 font-heading text-lg font-extrabold">
              {subjectProgress.completedCount} / {subjectProgress.totalCount} cours
            </NativeParagraph>
            <NativeParagraph className="mt-0.5 font-heading text-[11px] font-bold uppercase tracking-wide text-ink-faint">
              {subjectProgress.xp} XP gagnés
            </NativeParagraph>
          </NativeBox>
          {/* Anneau conique : le pourcentage est aussi écrit au centre, la couleur ne porte donc
            jamais seule l'information. */}
          <NativeBox className="grid h-[50px] w-[50px] shrink-0 place-items-center rounded-full border-[3px] border-ink font-heading text-xs font-extrabold" style={{ background: `conic-gradient(${deep} 0 ${masteryPct}%, var(--color-cream) 0)` }}>
            {masteryPct}%
          </NativeBox>
        </NativeBox>
      </NativeBox>

      <NativeBox className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <NativeBox className="flex flex-wrap gap-2">
          {FILTERS.map(({ key, label }) => (<NativeButton key={key} onClick={() => setFilter(key)} className={`rounded-full border-[2.5px] border-ink px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-wide transition-colors ${filter === key ? "text-ink" : "bg-card text-ink"}`} style={filter === key ? { background: deep } : undefined}>
              {label} · {filterCounts[key]}
            </NativeButton>))}
        </NativeBox>

      </NativeBox>

      {filteredCourses.length === 0 ? (<NativeParagraph className="font-medium text-ink-faint">{EMPTY_MESSAGE[filter]}</NativeParagraph>) : (<CourseGrid key={`${category.id}:${filter}`} courses={filteredCourses} category={category} progress={progress} onToggleFavorite={toggleFavorite}/>)}
    </NativeBox>);
}
