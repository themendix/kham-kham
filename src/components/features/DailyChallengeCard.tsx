import { Pressable, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Zap, CheckCircle2 } from "lucide-react-native";
import { DAILY_CHALLENGE_XP_BONUS } from "@/lib/gamification";
import { HomeCard, HomeText, homeColors, homeStyles } from "./HomeUi";

interface DailyChallengeCardProps { done: boolean; onStart: () => void }
/** Home shortcut to the existing daily quiz; the quiz remains on its own screen. */
export function DailyChallengeCard({ done, onStart }: DailyChallengeCardProps) {
  return (
    <HomeCard style={{ overflow: "hidden" }}>
      <LinearGradient colors={[homeColors.indigo, "#5c4b9e"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={StyleSheet.absoluteFill} />
      <View style={[homeStyles.row, { padding: 12, gap: 10 }]}>
        <View style={styles.symbol}><Zap size={18} color={homeColors.ink} fill={homeColors.ink} /></View>
        <View style={homeStyles.flexible}>
          <HomeText heading accessibilityRole="header" style={{ fontSize: 14, lineHeight: 20, color: homeColors.card }}>Défi du jour</HomeText>
          <HomeText style={{ fontSize: 12, lineHeight: 18, fontWeight: "700", color: homeColors.card }}>Quiz éclair</HomeText>
          <HomeText style={{ marginTop: 4, fontSize: 11.5, lineHeight: 17, color: "#ffffffd9" }}>Teste tes connaissances.</HomeText>
        </View>
        {done ? (
          <View accessible accessibilityLabel="Défi relevé, reviens demain" style={styles.actions}>
            <CheckCircle2 size={22} color={homeColors.gold} />
            <HomeText heading style={{ fontSize: 10.5, lineHeight: 16, textAlign: "center", color: homeColors.gold }}>Défi relevé</HomeText>
            <HomeText style={{ fontSize: 11, lineHeight: 16, color: homeColors.card }}>À demain</HomeText>
          </View>
        ) : (
          <View style={styles.actions}>
            <Pressable accessibilityRole="button" accessibilityLabel="Jouer au défi du jour" onPress={onStart} style={styles.playTarget}>
              {({ pressed }) => (
                <View pointerEvents="none" style={[styles.playButton, homeStyles.smallShadow, pressed && homeStyles.pressed]}>
                  <HomeText style={{ fontFamily: "Poppins", fontSize: 12, lineHeight: 18, color: homeColors.card }}>Jouer</HomeText>
                </View>
              )}
            </Pressable>
            <HomeText style={{ fontSize: 11, lineHeight: 16, fontWeight: "700", color: homeColors.gold }}>＋{DAILY_CHALLENGE_XP_BONUS} XP</HomeText>
          </View>
        )}
      </View>
    </HomeCard>
  );
}

const styles = StyleSheet.create({
  symbol: { width: 36, height: 36, flexShrink: 0, borderRadius: 18, borderWidth: 2, borderColor: homeColors.ink, backgroundColor: homeColors.gold, alignItems: "center", justifyContent: "center" },
  actions: { width: 80, flexShrink: 0, alignItems: "center", gap: 4 },
  playTarget: { width: "100%", minHeight: 44 },
  playButton: { minHeight: 44, paddingHorizontal: 12, borderWidth: 2, borderColor: homeColors.ink, borderRadius: 10, backgroundColor: homeColors.primary, alignItems: "center", justifyContent: "center" },
});
