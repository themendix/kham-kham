import { StyleSheet, View } from "react-native";
import { Moon, Sun } from "lucide-react-native";
import { HomeCard, HomeText, homeColors, homeStyles } from "./HomeUi";

interface DailyGoalCardProps {
  lessonsLearnedToday: number;
  goal: number;
}
function greeting(hour: number) {
  if (hour < 5 || hour >= 18) return { title: "Bonsoir", subtitle: "Un dernier savoir pour aujourd’hui ?", evening: true };
  if (hour < 12) return { title: "Bonjour", subtitle: "Un nouveau savoir t’attend.", evening: false };
  return { title: "Bon après-midi", subtitle: "Une pause pour apprendre ?", evening: false };
}
export function DailyGoalCard({ lessonsLearnedToday, goal }: DailyGoalCardProps) {
  const { title, subtitle, evening } = greeting(new Date().getHours());
  const TimeIcon = evening ? Moon : Sun;
  const goalReached = lessonsLearnedToday >= goal;
  const percent = Math.max(0, Math.min(100, goal > 0 ? lessonsLearnedToday / goal * 100 : 100));
  return (
    <HomeCard style={[homeStyles.smallShadow, styles.card]}>
      <View style={homeStyles.row}>
        <View style={homeStyles.flexible}>
          <HomeText heading accessibilityRole="header" style={styles.title}>{title} 👋</HomeText>
          <HomeText style={styles.subtitle}>{subtitle}</HomeText>
        </View>
        <View accessible={false} accessibilityElementsHidden importantForAccessibility="no-hide-descendants" style={[styles.illustration, evening && styles.evening]}>
          <TimeIcon size={27} strokeWidth={1.8} color={evening ? homeColors.indigo : "#8a6200"} fill={evening ? "#b9afe9" : homeColors.gold} />
        </View>
      </View>
      <View style={styles.goal}>
        <View style={styles.legend}>
          <HomeText heading style={[styles.goalLabel, goalReached && { color: "#286341" }]}>{goalReached ? "Objectif atteint ! 🎉" : "Objectif du jour"}</HomeText>
          <View style={styles.counter}>
            <HomeText style={styles.counterText}>{lessonsLearnedToday} / {goal} leçons</HomeText>
          </View>
        </View>
        <View accessibilityRole="progressbar" accessibilityLabel="Leçons lues aujourd’hui" accessibilityValue={{ min: 0, max: goal, now: Math.max(0, Math.min(goal, lessonsLearnedToday)), text: `${lessonsLearnedToday} leçons lues, objectif de ${goal} leçons` }} style={styles.track}>
          <View style={[styles.fill, { width: `${percent}%`, backgroundColor: goalReached ? homeColors.success : homeColors.gold }]} />
        </View>
      </View>
    </HomeCard>
  );
}

const styles = StyleSheet.create({
  card: { padding: 16, backgroundColor: "#fff1bd" },
  title: { fontSize: 18, lineHeight: 25 },
  subtitle: { marginTop: 4, fontSize: 12, lineHeight: 18, color: homeColors.muted },
  illustration: { width: 48, height: 48, flexShrink: 0, borderRadius: 24, borderWidth: 1, borderColor: "#e8cd82", backgroundColor: "#ffe39b", alignItems: "center", justifyContent: "center" },
  evening: { backgroundColor: "#e8e2fa", borderColor: "#d0c5ed" },
  goal: { marginTop: 14 },
  legend: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 6 },
  goalLabel: { fontSize: 11.5, lineHeight: 18, color: homeColors.muted },
  counter: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 999, backgroundColor: "#ffffffb3" },
  counterText: { fontSize: 11, lineHeight: 17, fontWeight: "700", fontVariant: ["tabular-nums"] },
  track: { height: 8, marginTop: 8, overflow: "hidden", borderRadius: 999, backgroundColor: "#e8d8a0" },
  fill: { height: "100%", borderRadius: 999 },
});
