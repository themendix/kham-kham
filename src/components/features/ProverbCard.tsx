import { Quote } from "lucide-react-native";
import type { Proverb } from "@/types";
import { HomeCard, HomeText, homeColors } from "./HomeUi";

export function ProverbCard({ proverb }: { proverb: Proverb }) {
  return (
    <HomeCard style={{ padding: 18, alignItems: "center" }}>
      <Quote size={28} color={homeColors.primary} fill={homeColors.primary} />
      <HomeText heading style={{ marginTop: 10, fontSize: 15, lineHeight: 23, textAlign: "center" }}>« {proverb.text} »</HomeText>
      <HomeText style={{ marginTop: 8, fontSize: 12, fontWeight: "700", textAlign: "center", color: homeColors.faint }}>— {proverb.origin}</HomeText>
    </HomeCard>
  );
}
