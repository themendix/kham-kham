import { useState } from "react";
import { Pressable, StyleSheet, View, useWindowDimensions } from "react-native";
import { ArrowLeft, ChevronRight } from "lucide-react-native";
import type { Category, CourseMeta, UserProgress } from "@/types";
import { COURSE_INDEX } from "@/data/coursesIndex.generated";
import { getGeographieRegion, type GeographieRegion } from "@/lib/geographieRegions";
import { getCourseStatus, type CourseStatus } from "@/lib/subjectProgress";
import { GeographyRegionMap } from "@/components/features/GeographyRegionMap";
import { CoursePhotoCard } from "@/components/features/CoursePhotoCard";
import { HomeText, homeColors } from "@/components/features/HomeUi";

interface GeographyScreenProps {
  category: Category;
  progress: UserProgress;
  onToggleFavorite: (courseId: string) => void;
  onBack: () => void;
}

// The reference opens on these four countries; all other lessons remain one tap away.
const WEST_PREVIEW = ["course-geographie-20-senegal", "course-geographie-17-mali", "course-geographie-11-cote-divoire", "course-geographie-13-ghana"];
type Filter = "tout" | CourseStatus;
const FILTERS: { key: Filter; label: string }[] = [
  { key: "tout", label: "Tout" },
  { key: "afaire", label: "À faire" },
  { key: "encours", label: "En cours" },
  { key: "termine", label: "Terminé" },
];
function orderCountries(courses: CourseMeta[], region: GeographieRegion) {
  return [...courses].sort((a, b) => {
    if (region === "Afrique de l'Ouest") {
      const first = WEST_PREVIEW.indexOf(a.id);
      const second = WEST_PREVIEW.indexOf(b.id);
      if (first !== -1 || second !== -1) return (first === -1 ? Infinity : first) - (second === -1 ? Infinity : second);
    }
    return a.title.localeCompare(b.title, "fr", { sensitivity: "base" });
  });
}

/** Geography follows the approved composition, with the requested course-status filters. */
export function GeographyScreen({ category, progress, onToggleFavorite, onBack }: GeographyScreenProps) {
  const { width, fontScale } = useWindowDimensions();
  const [gridWidth, setGridWidth] = useState(Math.min(672, width - 32));
  const [selectedRegion, setSelectedRegion] = useState<GeographieRegion>("Afrique de l'Ouest");
  const [expanded, setExpanded] = useState(false);
  const [filter, setFilter] = useState<Filter>("tout");
  const regionCourses = COURSE_INDEX.filter((course) => course.categoryId === "geo" && getGeographieRegion(course.id) === selectedRegion);
  const counts: Record<Filter, number> = { tout: regionCourses.length, afaire: 0, encours: 0, termine: 0 };
  for (const course of regionCourses) counts[getCourseStatus(course.id, progress)] += 1;
  const courses = orderCountries(filter === "tout" ? regionCourses : regionCourses.filter((course) => getCourseStatus(course.id, progress) === filter), selectedRegion);
  const shown = expanded ? courses : courses.slice(0, 4);
  const columns = fontScale > 1.5 || gridWidth < 270 ? 1 : 2;
  const cardWidth = Math.max(0, (gridWidth - 10 * (columns - 1)) / columns);
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Pressable accessibilityRole="button" accessibilityLabel="Retour à la bibliothèque" onPress={onBack} style={styles.back}>
          {({ pressed }) => <View style={[styles.backCircle, pressed && styles.pressed]}><ArrowLeft size={19} strokeWidth={2.5} color={homeColors.ink}/></View>}
        </Pressable>
        <HomeText heading accessibilityRole="header" style={styles.title}>Géographie</HomeText>
        <HomeText style={styles.subtitle}>Choisis une région pour explorer ses pays</HomeText>
      </View>
      <View style={styles.filters}>
        {FILTERS.map(({ key, label }) => <Pressable key={key} accessibilityRole="button" accessibilityLabel={`${label} : ${counts[key]} cours`} accessibilityState={{ selected: filter === key }} onPress={() => { setFilter(key); setExpanded(false); }} style={[styles.filter, filter === key && styles.selectedFilter]}>
          {({ pressed }) => <HomeText style={[styles.filterText, pressed && styles.pressed]}>{label} · {counts[key]}</HomeText>}
        </Pressable>)}
      </View>
      <GeographyRegionMap selectedRegion={selectedRegion} onSelect={(region) => { setSelectedRegion(region); setExpanded(false); }}/>
      <View style={styles.countrySection}>
        <View style={styles.sectionHeading}>
          <HomeText heading accessibilityRole="header" accessibilityLiveRegion="polite" style={styles.regionTitle}>{selectedRegion.replaceAll("'", "’")}</HomeText>
          {courses.length > 4 && <Pressable accessibilityRole="button" accessibilityLabel={expanded ? "Réduire la liste des pays" : `Voir tous les pays : ${selectedRegion}`} accessibilityState={{ expanded }} onPress={() => setExpanded((value) => !value)} style={styles.seeAll}>
            {({ pressed }) => <View style={[styles.seeAllContent, pressed && styles.pressed]}>
              <HomeText style={styles.seeAllText}>{expanded ? "Réduire" : "Tout voir"}</HomeText>
              <ChevronRight size={17} strokeWidth={2.5} color={homeColors.primary}/>
            </View>}
          </Pressable>}
        </View>
        <View onLayout={({ nativeEvent }) => setGridWidth(nativeEvent.layout.width)} style={styles.grid}>
          {shown.map((course) => <View key={course.id} style={{ width: cardWidth }}>
            <CoursePhotoCard course={course} category={category} status={getCourseStatus(course.id, progress)} isFavorite={progress.favoriteCourseIds.includes(course.id)} onToggleFavorite={() => onToggleFavorite(course.id)}/>
          </View>)}
        </View>
        {courses.length === 0 && <HomeText accessibilityLiveRegion="polite" style={styles.empty}>Aucun cours {filter === "encours" ? "en cours" : filter === "termine" ? "terminé" : "à faire"} dans cette région pour le moment.</HomeText>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { width: "100%", maxWidth: 672, alignSelf: "center", paddingBottom: 8 },
  header: { paddingHorizontal: 5, paddingBottom: 14 },
  back: { width: 44, minHeight: 36, justifyContent: "center" },
  backCircle: { width: 26, height: 26, borderRadius: 13, borderWidth: 2, borderColor: homeColors.ink, backgroundColor: homeColors.card, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 31, lineHeight: 43, letterSpacing: -1.1, color: "#080807", marginTop: 1 },
  subtitle: { fontSize: 13, lineHeight: 20, color: homeColors.ink, marginTop: 1 },
  filters: { flexDirection: "row", flexWrap: "wrap", gap: 6, marginBottom: 16 },
  filter: { minHeight: 44, paddingHorizontal: 10, paddingVertical: 7, alignItems: "center", justifyContent: "center", borderWidth: 2, borderColor: homeColors.ink, borderRadius: 999, backgroundColor: homeColors.card },
  selectedFilter: { backgroundColor: "#bfe3b0" },
  filterText: { fontFamily: "Poppins", fontSize: 10, lineHeight: 16, color: homeColors.ink },
  countrySection: { marginTop: 16 },
  sectionHeading: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 8, marginBottom: 8, paddingHorizontal: 3 },
  regionTitle: { flex: 1, fontSize: 21, lineHeight: 30, letterSpacing: -0.6, color: "#080807" },
  seeAll: { minHeight: 44, flexDirection: "row", alignItems: "center", gap: 2 },
  seeAllContent: { flexDirection: "row", alignItems: "center", gap: 2 },
  seeAllText: { fontSize: 13, lineHeight: 20, fontWeight: "700", color: homeColors.primary },
  grid: { flexDirection: "row", flexWrap: "wrap", gap: 10, paddingBottom: 4 },
  empty: { color: homeColors.muted, fontSize: 13, lineHeight: 20 },
  pressed: { opacity: 0.65 },
});
