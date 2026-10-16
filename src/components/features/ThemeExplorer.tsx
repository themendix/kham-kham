import { Pressable, ScrollView } from "react-native";
import type { Category } from "@/types";
import { useNavigate } from "@/native/router";
import { HomeText, homeColors, homeStyles, homeSubjectColors } from "./HomeUi";

export function ThemeExplorer({ categories }: { categories: Category[] }) {
  const navigate = useNavigate();
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 12, paddingTop: 2, paddingRight: 6, paddingBottom: 8 }}>
      {categories.map((category) => (
        <Pressable key={category.id} accessibilityRole="link" accessibilityLabel={category.name} onPress={() => navigate(`/biblio/${category.id}`)} style={({ pressed }) => [homeStyles.row, homeStyles.smallShadow, { gap: 8, minHeight: 48, paddingVertical: 10, paddingHorizontal: 16, borderRadius: 999, borderWidth: 2.5, borderColor: homeColors.ink, backgroundColor: homeSubjectColors[category.color] }, pressed && homeStyles.pressed]}>
          <HomeText style={{ fontSize: 18 }}>{category.emoji}</HomeText>
          <HomeText heading style={{ fontSize: 12, lineHeight: 18 }}>{category.name}</HomeText>
        </Pressable>
      ))}
    </ScrollView>
  );
}
