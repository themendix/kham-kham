import { Pressable, StyleSheet, View, useWindowDimensions } from "react-native";
import { ArrowLeft, Star } from "lucide-react-native";
import type { CourseStatus, SubjectProgress } from "@/lib/subjectProgress";
import { HomeText, homeColors } from "./HomeUi";

type Filter = "tout" | CourseStatus;
const FILTERS: { key: Filter; label: string }[] = [
  { key: "tout", label: "Tout" },
  { key: "afaire", label: "À faire" },
  { key: "encours", label: "En cours" },
  { key: "termine", label: "Terminés" },
];

interface HistorySubjectHeaderProps {
  progress: SubjectProgress;
  filter: Filter;
  counts: Record<Filter, number>;
  onFilterChange: (filter: Filter) => void;
  onBack: () => void;
}

/** En-tête Histoire : niveau, maîtrise globale et filtres reliés à la progression réelle. */
export function HistorySubjectHeader({ progress, filter, counts, onFilterChange, onBack }: HistorySubjectHeaderProps) {
  const { width, fontScale } = useWindowDimensions();
  const percentage = progress.totalCount === 0 ? 0 : Math.round(progress.completedCount / progress.totalCount * 100);
  const wrapFilters = fontScale > 1.3 || width < 350;
  return <View style={styles.header}>
    <Pressable accessibilityRole="button" accessibilityLabel="Retour à la bibliothèque" onPress={onBack} style={styles.back}>
      {({ pressed }) => <View style={[styles.backContent, pressed && styles.pressed]}>
        <ArrowLeft size={19} color={homeColors.ink} strokeWidth={2.5}/>
        <HomeText heading style={styles.backText}>Bibliothèque</HomeText>
      </View>}
    </Pressable>

    <View style={styles.identity}>
      <View style={styles.titleRow}>
        <HomeText heading accessibilityRole="header" style={styles.title}>Histoire</HomeText>
        <View style={styles.level}><HomeText heading style={styles.levelText}>Niveau {progress.level}</HomeText></View>
      </View>
      <HomeText style={styles.subtitle}>Civilisations, royaumes et indépendances</HomeText>
    </View>

    <View style={styles.progress}>
      <HomeText heading style={styles.progressTitle}>Ta progression</HomeText>
      <View style={styles.metricRow}>
        <View>
          <HomeText heading style={styles.metric}>{progress.completedCount} / {progress.totalCount}</HomeText>
          <HomeText style={styles.metricCaption}>cours terminés</HomeText>
        </View>
        <View style={styles.xp}>
          <Star size={22} strokeWidth={1.5} color={homeColors.gold} fill={homeColors.gold}/>
          <HomeText heading style={styles.xpText}>{progress.xp} XP</HomeText>
        </View>
      </View>
      <View style={styles.progressRow}>
        <View accessible accessibilityRole="progressbar" accessibilityLabel="Cours d’Histoire terminés" accessibilityValue={{ min: 0, max: progress.totalCount, now: progress.completedCount, text: `${percentage} %` }} style={styles.track}>
          <View style={[styles.fill, { width: `${percentage}%` }]}/>
        </View>
        <HomeText heading style={styles.percentage}>{percentage} %</HomeText>
      </View>
    </View>

    <View style={styles.filters}>
      {FILTERS.map(({ key, label }) => <Pressable key={key} accessibilityRole="button" accessibilityLabel={`${label}, ${counts[key]} cours`} accessibilityState={{ selected: filter === key }} onPress={() => onFilterChange(key)} style={[styles.filter, { flexBasis: wrapFilters ? "46%" : "22%" }, filter === key && styles.selected]}>
        {({ pressed }) => <HomeText numberOfLines={1} style={[styles.filterText, pressed && styles.pressed]}>{label} · {counts[key]}</HomeText>}
      </Pressable>)}
    </View>
  </View>;
}

const styles = StyleSheet.create({
  header: { gap: 14 },
  back: { alignSelf: "flex-start", minHeight: 44, justifyContent: "center" },
  backContent: { flexDirection: "row", alignItems: "center", gap: 8 },
  backText: { fontSize: 13.5, lineHeight: 20 },
  identity: { gap: 3 },
  titleRow: { flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 10 },
  title: { fontSize: 34, lineHeight: 44, letterSpacing: -0.6, flexShrink: 1 },
  level: { borderWidth: 2, borderColor: homeColors.ink, borderRadius: 12, paddingHorizontal: 12, paddingVertical: 7, backgroundColor: homeColors.gold },
  levelText: { fontSize: 13, lineHeight: 19 },
  subtitle: { fontSize: 13, lineHeight: 19, color: homeColors.muted },
  progress: { borderRadius: 18, backgroundColor: homeColors.ink, padding: 14, gap: 8 },
  progressTitle: { fontSize: 14, lineHeight: 20, color: homeColors.card },
  metricRow: { flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12 },
  metric: { fontSize: 30, lineHeight: 37, color: homeColors.card },
  metricCaption: { fontSize: 11.5, lineHeight: 16, color: "#dedad3" },
  xp: { flexDirection: "row", alignItems: "center", gap: 7 },
  xpText: { fontSize: 15, lineHeight: 22, color: homeColors.card },
  progressRow: { flexDirection: "row", alignItems: "center", gap: 10, marginTop: 2 },
  track: { flex: 1, height: 10, borderRadius: 5, overflow: "hidden", backgroundColor: "#514b44" },
  fill: { height: "100%", backgroundColor: homeColors.gold, borderRadius: 5 },
  percentage: { fontSize: 12, lineHeight: 18, color: homeColors.card },
  filters: { flexDirection: "row", flexWrap: "wrap", gap: 6 },
  filter: { flexGrow: 1, minHeight: 44, alignItems: "center", justifyContent: "center", borderRadius: 22, borderWidth: 1.5, borderColor: homeColors.ink, paddingHorizontal: 5, paddingVertical: 8 },
  selected: { backgroundColor: homeColors.gold, borderWidth: 2 },
  filterText: { fontSize: 11, lineHeight: 16, fontWeight: "700", textAlign: "center" },
  pressed: { opacity: 0.65 },
});
