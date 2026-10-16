import { StyleSheet, View } from "react-native";
import { Sparkles, Flame, Layers } from "lucide-react-native";
import { COURSE_INDEX } from "@/data/coursesIndex.generated";
import { DAILY_GOAL, XP_PER_LESSON } from "@/lib/gamification";
import { HomeCard, HomeText, homeColors, homeStyles } from "./HomeUi";

// Display targets only: these gauges do not change rewards or saved progression.
const DAILY_XP_TARGET = DAILY_GOAL * XP_PER_LESSON;
const CATALOG_LESSON_COUNT = COURSE_INDEX.reduce((total, course) => total + course.lessons.length, 0);

interface ProgressGlanceProps { xpToday: number; streakCount: number; totalLessonsLearned: number }
export function ProgressGlance({ xpToday, streakCount, totalLessonsLearned }: ProgressGlanceProps) {
  const streakTarget = Math.max(7, Math.ceil(streakCount / 7) * 7);
  const stats = [
    { id: "xp", Icon: Sparkles, track: "#fff1bd", fill: homeColors.gold, accent: "#8a6200", value: xpToday, target: DAILY_XP_TARGET, label: "XP du jour", unit: "XP", description: `${xpToday} XP gagnés aujourd’hui, repère quotidien de ${DAILY_XP_TARGET} XP` },
    { id: "streak", Icon: Flame, track: "#ffe2cf", fill: "#ed875b", accent: "#b53d22", value: streakCount, target: streakTarget, label: "Série en cours", unit: "j", description: `${streakCount} jours de série, palier de ${streakTarget} jours` },
    { id: "lessons", Icon: Layers, track: "#e8e2fa", fill: "#9e93e0", accent: homeColors.indigo, value: totalLessonsLearned, target: CATALOG_LESSON_COUNT, label: "Leçons lues", unit: "", description: `${totalLessonsLearned} leçons lues sur les ${CATALOG_LESSON_COUNT} leçons du catalogue` },
  ];
  return (
    <View>
      <HomeText heading accessibilityRole="header" style={homeStyles.sectionTitle}>Ta progression</HomeText>
      <HomeCard style={[homeStyles.smallShadow, styles.panel]}>
        {stats.map(({ id, Icon, track, fill, accent, value, target, label, unit, description }) => {
          const percent = target > 0 ? Math.max(0, Math.min(100, value / target * 100)) : 0;
          return (
            <View key={id} accessible accessibilityRole="progressbar" accessibilityLabel={label} accessibilityValue={{ min: 0, max: target, now: Math.max(0, Math.min(target, value)), text: description }} style={styles.row}>
              <View style={[styles.icon, { backgroundColor: track }]}><Icon size={19} strokeWidth={2.3} color={accent} /></View>
              <View style={styles.details}>
                <View style={styles.legend}>
                  <HomeText heading style={styles.label}>{label}</HomeText>
                  <HomeText style={styles.value}>{value} / {target}{unit ? ` ${unit}` : ""}</HomeText>
                </View>
                <View style={[styles.track, { backgroundColor: track }]}>
                  <View style={[styles.fill, { width: `${percent}%`, backgroundColor: fill }]} />
                </View>
              </View>
            </View>
          );
        })}
      </HomeCard>
    </View>
  );
}

const styles = StyleSheet.create({
  panel: { padding: 14, gap: 16 },
  row: { flexDirection: "row", alignItems: "center", gap: 12 },
  icon: { width: 36, height: 36, flexShrink: 0, borderRadius: 12, alignItems: "center", justifyContent: "center" },
  details: { flex: 1, minWidth: 0 },
  legend: { flexDirection: "row", alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap", columnGap: 8, rowGap: 2 },
  value: { fontFamily: "Poppins", fontSize: 11, lineHeight: 18, color: homeColors.muted, fontVariant: ["tabular-nums"] },
  label: { fontSize: 12, lineHeight: 19 },
  track: { height: 9, marginTop: 7, borderRadius: 999, overflow: "hidden" },
  fill: { height: "100%", borderRadius: 999 },
});
