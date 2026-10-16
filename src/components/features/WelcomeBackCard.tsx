import { View } from "react-native";
import { Hand } from "lucide-react-native";
import { HomeCard, HomeText, homeColors, homeStyles } from "./HomeUi";

interface WelcomeBackCardProps { daysAway: number; previousCount: number }
/** A visit still does not resume a streak or award XP. */
export function WelcomeBackCard({ daysAway, previousCount }: WelcomeBackCardProps) {
  return (
    <HomeCard style={[homeStyles.row, homeStyles.smallShadow, { padding: 16, backgroundColor: homeColors.gold, alignItems: "flex-start" }]}>
      <View style={[homeStyles.iconCircle, { backgroundColor: homeColors.card }]}><Hand size={22} color={homeColors.ink} /></View>
      <View style={homeStyles.flexible}>
        <HomeText heading accessibilityRole="header">Content de te revoir !</HomeText>
        <HomeText style={{ fontSize: 13, lineHeight: 20, color: homeColors.muted }}>Ça faisait {daysAway} jours. Ta série de {previousCount} {previousCount > 1 ? "jours" : "jour"} est en pause — reprends une leçon pour repartir.</HomeText>
      </View>
    </HomeCard>
  );
}
