import { Pressable, StyleSheet, View, useWindowDimensions } from "react-native";
import { X, Check } from "lucide-react-native";
import type { Category, CourseMeta } from "@/types";
import { NativeBox } from "@/native/elements";
import { useNavigate } from "@/native/router";
import { useSwipeGesture } from "@/hooks/useSwipeGesture";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { HomeCard, HomeCategoryTag, HomeCourseArtwork, HomeImageAction, HomeImageShade, HomeText, homeColors, homeStyles } from "./HomeUi";

interface SwipeCardProps {
  course: CourseMeta;
  category: Category;
  /** ✗ — le cours ne sera plus proposé. */
  onDismiss: () => void;
  /** ✓ — le cours est mis de côté dans les favoris. */
  onKeep: () => void;
}
/** Discovery sorts course metadata, without awarding XP or marking a lesson read. */
export function SwipeCard({ course, category, onDismiss, onKeep }: SwipeCardProps) {
  const navigate = useNavigate();
  const { fontScale } = useWindowDimensions();
  const reducedMotion = useReducedMotion();
  const { ref, handlers, triggerCommit, dragOffset } = useSwipeGesture({ onCommitLeft: onDismiss, onCommitRight: onKeep, reducedMotion });
  return (
    <View>
      <NativeBox ref={ref} {...handlers}>
        <HomeCard style={[homeStyles.smallShadow, homeStyles.imageCard, { height: 280 * Math.max(1, fontScale) }]}>
          <View style={homeStyles.imageClip}>
            <HomeCourseArtwork course={course} category={category} emojiSize={72} />
            <View style={{ position: "absolute", top: 12, left: 16, right: 16 }}>
              <HomeCategoryTag category={category} />
            </View>
          <View pointerEvents="none" accessibilityElementsHidden importantForAccessibility="no-hide-descendants" style={{ position: "absolute", left: 12, right: 12, top: 56, zIndex: 1 }}>
            <HomeText heading style={{ alignSelf: dragOffset >= 0 ? "flex-start" : "flex-end", paddingHorizontal: 12, paddingVertical: 7, borderWidth: 3, borderColor: homeColors.ink, borderRadius: 10, backgroundColor: homeColors.card, color: dragOffset >= 0 ? homeColors.success : homeColors.danger, opacity: Math.min(1, Math.abs(dragOffset) / 100), transform: [{ rotate: dragOffset >= 0 ? "-12deg" : "12deg" }] }}>{dragOffset >= 0 ? "INTÉRESSÉ ✓" : "PAS INTÉRESSÉ ✗"}</HomeText>
          </View>
          <View style={homeStyles.imageContent}>
            <HomeImageShade />
            <HomeText heading accessibilityRole="header" numberOfLines={2} ellipsizeMode="tail" style={homeStyles.imageTitle}>{course.title}</HomeText>
            <HomeText numberOfLines={2} ellipsizeMode="tail" style={{ marginTop: 6, fontSize: 13, lineHeight: 19, color: "#ffffffe6" }}>{course.description}</HomeText>
            <HomeImageAction label="Ouvrir le cours" onPress={() => navigate(`/cours/${course.id}`)} />
          </View>
          </View>
        </HomeCard>
      </NativeBox>
      <View style={[homeStyles.row, { justifyContent: "center", gap: 56, marginTop: 16, paddingBottom: 4 }]}>
        {([{ direction: "left", label: "Pas intéressé", hint: "Ne plus proposer ce cours", color: "#f7b7a8", Icon: X }, { direction: "right", label: "Intéressé", hint: "Ajouter ce cours aux favoris", color: "#a8e6bc", Icon: Check }] as const).map(({ direction, label, hint, color, Icon }) => (
          <Pressable key={direction} accessibilityRole="button" accessibilityLabel={label} accessibilityHint={hint} onPress={() => triggerCommit(direction)} style={decisionStyles.touchTarget}>
            {({ pressed }) => (
              <View pointerEvents="none" style={[decisionStyles.circle, homeStyles.smallShadow, { backgroundColor: color }, pressed && homeStyles.pressed]}>
                <Icon size={32} strokeWidth={3} color={homeColors.ink} />
              </View>
            )}
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const decisionStyles = StyleSheet.create({
  touchTarget: { width: 74, height: 74 },
  circle: { width: 74, height: 74, borderRadius: 37, borderWidth: 3, borderColor: homeColors.ink, alignItems: "center", justifyContent: "center" },
});
