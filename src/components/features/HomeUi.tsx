import type { ReactNode } from "react";
import { Image as NativeImageAsset, Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import type { StyleProp, TextProps, ViewProps, ViewStyle } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { ArrowRight } from "lucide-react-native";
import type { Category, CourseMeta, SubjectColor } from "@/types";
import { imageAssets } from "@/native/imageAssets";
import { getCourseImage, getCourseCoverLayout, getCourseCoverPosition } from "@/lib/courseImages";
import { SUBJECT_DEEP } from "@/lib/subjectStyles";

// Native values for the existing Sankofa design system; scoped to the Home port.
export const homeColors = {
  cream: "#f6eedd", ink: "#1e1b18", card: "#ffffff", primary: "#e24c2b",
  gold: "#f2b705", flame: "#f27405", muted: "#5c554b", faint: "#726a5d",
  primaryText: "#b53d22", success: "#2e8b57", danger: "#e4572e", indigo: "#2d3a8c",
};
export const homeSubjectColors: Record<SubjectColor, string> = {
  histoire: "#f3d9a4", geo: "#bfe3b0", perso: "#c9c3f0", decouverte: "#a9e0de",
};
export const homeStyles = StyleSheet.create({
  column: { width: "100%", maxWidth: 672, alignSelf: "center", gap: 18 },
  row: { flexDirection: "row", alignItems: "center", gap: 12 },
  flexible: { flex: 1, minWidth: 0 },
  sectionTitle: { marginBottom: 8, fontSize: 11.5, lineHeight: 18, letterSpacing: 0.4, textTransform: "uppercase", color: homeColors.faint },
  card: { backgroundColor: homeColors.card, borderColor: homeColors.ink, borderWidth: 3, borderRadius: 20, boxShadow: "6px 6px 0px 0px #1e1b18" },
  smallShadow: { boxShadow: "4px 4px 0px 0px #1e1b18" },
  imageCard: { borderRadius: 18 },
  imageClip: { flex: 1, borderRadius: 15, overflow: "hidden", justifyContent: "flex-end" },
  imageContent: { paddingTop: 56, paddingHorizontal: 16, paddingBottom: 16, alignItems: "flex-start" },
  imageTitle: { fontSize: 18, lineHeight: 24, color: homeColors.card, textShadowColor: "rgba(0,0,0,0.15)", textShadowOffset: { width: 0, height: 1 }, textShadowRadius: 2 },
  pressed: { transform: [{ translateY: 3 }], boxShadow: "none" },
  iconCircle: { width: 48, height: 48, borderRadius: 24, borderWidth: 2.5, borderColor: homeColors.ink, alignItems: "center", justifyContent: "center", flexShrink: 0 },
  button: { minHeight: 48, borderRadius: 999, borderWidth: 3, borderColor: homeColors.ink, paddingVertical: 10, paddingHorizontal: 16, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8, backgroundColor: homeColors.card, boxShadow: "4px 4px 0px 0px #1e1b18" },
});
export function HomeCard({ style, ...props }: ViewProps) {
  return <View {...props} style={[homeStyles.card, style]} />;
}
/** Shared photo treatment for discovery and resume cards. */
export function HomeImageShade() {
  return <LinearGradient pointerEvents="none" colors={["rgba(30,27,24,0)", "rgba(30,27,24,0.65)", "rgba(30,27,24,0.95)"]} locations={[0, 0.5, 1]} style={StyleSheet.absoluteFill} />;
}
export function HomeText({ heading = false, style, ...props }: TextProps & { heading?: boolean }) {
  return <Text {...props} style={[{ fontFamily: heading ? "PoppinsExtraBold" : "Inter", fontSize: heading ? 15 : 13, lineHeight: heading ? 22 : 20, includeFontPadding: false, color: homeColors.ink }, style]} />;
}
/** Identical photo-card action; omit onPress when the entire card is already a link. */
export function HomeImageAction({ label, onPress }: { label: string; onPress?: () => void }) {
  const content = (pressed = false) => (
    <View pointerEvents="none" style={[homeStyles.row, homeStyles.smallShadow, { minHeight: 44, paddingHorizontal: 16, borderWidth: 2, borderColor: homeColors.ink, borderRadius: 10, backgroundColor: homeColors.primary, flexWrap: "nowrap", gap: 8 }, pressed && homeStyles.pressed]}>
      <HomeText numberOfLines={1} style={{ fontFamily: "Poppins", flexShrink: 1, fontSize: 12, lineHeight: 18, color: homeColors.card }}>{label}</HomeText>
      <View style={{ flexShrink: 0 }}><ArrowRight size={16} color={homeColors.card} /></View>
    </View>
  );
  const wrapper: ViewStyle = { alignSelf: "flex-start", maxWidth: "100%", marginTop: 12 };
  return onPress
    ? <Pressable accessibilityRole="link" accessibilityLabel={label} onPress={onPress} style={wrapper}>{({ pressed }) => content(pressed)}</Pressable>
    : <View style={wrapper}>{content()}</View>;
}
export function HomeAction({ label, onPress, primary = false, icon, style }: {
  label: string; onPress: () => void; primary?: boolean; icon?: ReactNode; style?: StyleProp<ViewStyle>;
}) {
  return (
    <Pressable accessibilityRole="button" onPress={onPress} style={({ pressed }) => [homeStyles.button, primary && { backgroundColor: homeColors.primary }, style, pressed && homeStyles.pressed]}>
      <HomeText heading style={{ fontSize: 13, lineHeight: 19, textAlign: "center", flexShrink: 1, color: primary ? homeColors.card : homeColors.ink }}>{label}</HomeText>
      {icon}
    </Pressable>
  );
}
export function HomeCategoryTag({ category }: { category: Category }) {
  return (
    <View style={{ alignSelf: "flex-start", maxWidth: "100%", backgroundColor: homeColors.ink, borderRadius: 999, paddingHorizontal: 10, paddingVertical: 5 }}>
      <HomeText heading style={{ fontSize: 11, lineHeight: 17, letterSpacing: 0.5, color: homeColors.card, textTransform: "uppercase" }}>{category.emoji} {category.name}</HomeText>
    </View>
  );
}
/** Mesure le cadre réel pour remplir les couvertures d'Histoire, marges du fichier exclues. */
function HistoryCoverImage({ courseId, source }: { courseId: string; source: number }) {
  const [frame, setFrame] = useState({ width: 0, height: 0 });
  const intrinsic = NativeImageAsset.resolveAssetSource(source);
  const layout = intrinsic?.width && intrinsic.height && frame.width > 0 && frame.height > 0
    ? getCourseCoverLayout(courseId, intrinsic.width, intrinsic.height, frame.width, frame.height)
    : undefined;
  return (
    <View style={[StyleSheet.absoluteFill, { overflow: "hidden" }]} onLayout={({ nativeEvent }) => {
      const { width, height } = nativeEvent.layout;
      setFrame((previous) => previous.width === width && previous.height === height ? previous : { width, height });
    }}>
      <Image source={source} contentFit="cover" contentPosition={getCourseCoverPosition(courseId)} style={layout ? { position: "absolute", ...layout } : StyleSheet.absoluteFill}/>
    </View>
  );
}

/** Keeps the bundled illustration; history covers use a framing tuned to their main subject. */
export function HomeCourseArtwork({ course, category, emojiSize = 96 }: { course: CourseMeta; category: Category; emojiSize?: number }) {
  const image = getCourseImage(course.id);
  const source = image ? imageAssets[image.src] : undefined;
  return (
    <View pointerEvents="none" accessible={false} accessibilityElementsHidden importantForAccessibility="no-hide-descendants" style={StyleSheet.absoluteFill}>
      <LinearGradient colors={[homeSubjectColors[category.color], SUBJECT_DEEP[category.color]]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={[StyleSheet.absoluteFill, { alignItems: "center", justifyContent: "center" }]}>
        {source ? course.categoryId === "histoire"
          ? <HistoryCoverImage courseId={course.id} source={source}/>
          : <Image source={source} contentFit="cover" contentPosition={getCourseCoverPosition(course.id)} style={StyleSheet.absoluteFill}/>
          : <HomeText style={{ fontSize: emojiSize, lineHeight: emojiSize * 1.25 }}>{course.emoji}</HomeText>}
      </LinearGradient>
    </View>
  );
}
