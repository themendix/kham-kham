import { Pressable, StyleSheet, View } from "react-native";
import { BookOpen, CheckCircle2, Heart } from "lucide-react-native";
import type { Category, CourseMeta } from "@/types";
import type { CourseStatus } from "@/lib/subjectProgress";
import { useNavigate } from "@/native/router";
import { HomeCourseArtwork, HomeImageShade, HomeText, homeColors } from "./HomeUi";

interface CoursePhotoCardProps {
  course: CourseMeta;
  category: Category;
  status: CourseStatus;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

/** Cartes de matière : couverture immersive pour l'Histoire et la Géographie. */
export function CoursePhotoCard({ course, category, status, isFavorite, onToggleFavorite }: CoursePhotoCardProps) {
  const navigate = useNavigate();
  const isImmersive = category.id === "histoire" || category.id === "geo";
  const isGeography = category.id === "geo";
  const detailColor = isImmersive ? homeColors.card : homeColors.faint;
  const statusLabel = status === "termine" ? "Terminé" : status === "encours" ? "En cours" : null;
  const favorite = (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"} : ${course.title}`}
      accessibilityState={{ selected: isFavorite }}
      onPress={onToggleFavorite}
      hitSlop={isGeography ? 8 : 6}
      style={isGeography ? styles.favoriteInline : styles.favorite}
    >
      {({ pressed }) => <Heart size={isGeography ? 20 : 16} strokeWidth={isGeography ? 2.5 : 2} opacity={pressed ? 0.7 : 1} color={isFavorite ? homeColors.primary : isImmersive ? homeColors.card : homeColors.ink} fill={isFavorite ? homeColors.primary : "none"}/>}
    </Pressable>
  );
  const content = (pressed: boolean) => (
          <View pointerEvents={isGeography ? "box-none" : undefined} style={[isImmersive && styles.coverCanvas, isGeography && styles.geographyCanvas, pressed && styles.pressed]}>
            <View pointerEvents="none" style={isImmersive ? styles.coverImage : styles.imageFrame}>
              <HomeCourseArtwork course={course} category={category} emojiSize={56}/>
            </View>
            <View pointerEvents={isGeography ? "box-none" : undefined} style={[styles.caption, isImmersive && styles.coverCaption, isGeography && styles.geographyCaption]}>
              {isImmersive && <HomeImageShade/>}
              <View pointerEvents="none">
              {!isGeography && <HomeText heading style={[styles.category, isImmersive && styles.imageText]}>{category.name}</HomeText>}
              <HomeText heading numberOfLines={isImmersive ? 2 : undefined} style={[styles.title, isImmersive && styles.coverTitle, isGeography && styles.geographyTitle, isImmersive && styles.imageText]}>{course.title}</HomeText>
              </View>
              <View pointerEvents={isGeography ? "box-none" : undefined} style={[styles.counts, isGeography && styles.geographyCounts]}>
                <View pointerEvents="none" style={[styles.countGroup, isGeography && styles.geographyCountGroup]}>
                <View pointerEvents="none" style={styles.counter}>
                  <BookOpen size={isGeography ? 14 : 12} color={detailColor}/>
                  <HomeText style={[styles.count, isGeography && styles.geographyCount, isImmersive && styles.imageText]} accessibilityLabel={`${course.lessons.length} leçons`}>{course.lessons.length}</HomeText>
                </View>
                <View pointerEvents="none" style={styles.counter}>
                  <CheckCircle2 size={isGeography ? 14 : 12} color={detailColor}/>
                  <HomeText style={[styles.count, isGeography && styles.geographyCount, isImmersive && styles.imageText]} accessibilityLabel={`${course.quizCount} questions de quiz`}>{course.quizCount}</HomeText>
                </View>
                {statusLabel && (
                  <View pointerEvents="none" style={[styles.status, { backgroundColor: status === "termine" ? homeColors.success : homeColors.gold }]}>
                    {status === "termine" && <CheckCircle2 size={10} color={homeColors.card}/>}
                    <HomeText style={[styles.statusText, { color: status === "termine" ? homeColors.card : homeColors.ink }]}>{statusLabel}</HomeText>
                </View>
            )}
                </View>
                {isGeography && favorite}
          </View>
        </View>
        </View>
  );
  const openCourse = () => navigate(`/cours/${course.id}`);
  const linkLabel = `${course.title}${statusLabel ? `. ${statusLabel}` : ""}`;
  return (
    <View style={[styles.card, isGeography && styles.geographyCard]}>
      {isGeography ? <View style={[styles.cover, styles.geographyCover]}>
        <Pressable accessibilityRole="link" accessibilityLabel={linkLabel} onPress={openCourse} style={StyleSheet.absoluteFill}/>
        {content(false)}
      </View> : <Pressable accessibilityRole="link" accessibilityLabel={linkLabel} onPress={openCourse} style={styles.cover}>
        {({ pressed }) => content(pressed)}
      </Pressable>}
      {!isGeography && favorite}
    </View>
  );
}

const styles = StyleSheet.create({
  card: { borderRadius: 20, borderWidth: 3, borderColor: homeColors.ink, backgroundColor: homeColors.card, boxShadow: "4px 4px 0px 0px #1e1b18" },
  cover: { borderRadius: 17, overflow: "hidden" },
  coverCanvas: { minHeight: 220, justifyContent: "flex-end", paddingTop: 48 },
  geographyCard: { borderWidth: 2, borderRadius: 15, boxShadow: "4px 4px 0px 0px #1e1b18" },
  geographyCover: { borderRadius: 13 },
  geographyCanvas: { aspectRatio: 1.25, minHeight: 140, paddingTop: 20 },
  geographyCaption: { paddingTop: 30, paddingHorizontal: 9, paddingBottom: 9 },
  geographyTitle: { fontSize: 14, lineHeight: 20, marginTop: 0 },
  geographyCounts: { marginTop: 3, gap: 6, flexWrap: "nowrap" },
  countGroup: { flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: 6, flexShrink: 1 },
  geographyCountGroup: { flex: 1, minWidth: 0, gap: 8 },
  geographyCount: { fontSize: 10.5, lineHeight: 14 },
  coverImage: { position: "absolute", top: 0, right: 0, bottom: 0, left: 0 },
  coverCaption: { backgroundColor: "transparent", paddingTop: 56 },
  imageText: { color: homeColors.card },
  pressed: { opacity: 0.85 },
  imageFrame: { width: "100%", aspectRatio: 1.4, overflow: "hidden", borderBottomWidth: 3, borderColor: homeColors.ink },
  caption: { backgroundColor: homeColors.card, paddingTop: 12, paddingHorizontal: 12, paddingBottom: 14 },
  category: { fontSize: 10.5, lineHeight: 15, textTransform: "uppercase", letterSpacing: 0.4, color: homeColors.muted },
  title: { marginTop: 4, fontSize: 15, lineHeight: 21, color: homeColors.ink },
  coverTitle: { fontSize: 13, lineHeight: 18 },
  counts: { flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: 6, marginTop: 8 },
  counter: { flexDirection: "row", alignItems: "center", gap: 4 },
  count: { fontSize: 11.5, lineHeight: 16, color: homeColors.faint },
  status: { flexDirection: "row", alignItems: "center", gap: 3, borderRadius: 12, paddingHorizontal: 5, paddingVertical: 2 },
  statusText: { fontSize: 9.5, lineHeight: 13, color: homeColors.card },
  favorite: { position: "absolute", top: 6, right: 6, zIndex: 1, width: 32, height: 32, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" },
  favoriteInline: { width: 28, height: 32, flexShrink: 0, alignItems: "center", justifyContent: "center", backgroundColor: "transparent" },
});
