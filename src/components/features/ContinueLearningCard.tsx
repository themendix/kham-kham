import { Pressable, View, useWindowDimensions } from "react-native";
import { PartyPopper } from "lucide-react-native";
import type { Category, CourseMeta } from "@/types";
import { useNavigate } from "@/native/router";
import { lessonKey } from "@/lib/featured";
import { HomeAction, HomeCard, HomeCategoryTag, HomeCourseArtwork, HomeImageAction, HomeImageShade, HomeText, homeColors, homeStyles, homeSubjectColors } from "./HomeUi";

interface ContinueLearningCardProps {
  course: CourseMeta | null;
  category: Category | null;
  resumed: boolean;
  completedLessonIds: string[];
}
export function ContinueLearningCard({ course, category, resumed, completedLessonIds }: ContinueLearningCardProps) {
  const navigate = useNavigate();
  const { fontScale } = useWindowDimensions();
  if (!course || !category) {
    return (
      <HomeCard style={{ padding: 16, gap: 12 }}>
        <View style={homeStyles.row}>
          <View style={[homeStyles.iconCircle, { backgroundColor: homeColors.gold }]}><PartyPopper size={24} color={homeColors.ink} /></View>
          <View style={homeStyles.flexible}>
            <HomeText heading accessibilityRole="header">Tu as tout terminé, bravo !</HomeText>
            <HomeText style={{ fontSize: 13, color: homeColors.muted }}>Retourne à la Biblio pour découvrir plus de contenu.</HomeText>
          </View>
        </View>
        <HomeAction label="Voir la Biblio" onPress={() => navigate("/biblio")} />
      </HomeCard>
    );
  }
  const openCourse = () => navigate(`/cours/${course.id}`);
  if (resumed) {
    const firstUnread = course.lessons.findIndex((lesson) => !completedLessonIds.includes(lessonKey(course.id, lesson.id)));
    const lessonIndex = firstUnread === -1 ? 0 : firstUnread;
    return (
      <View>
        <HomeText heading accessibilityRole="header" style={homeStyles.sectionTitle}>Reprendre l’apprentissage</HomeText>
        <Pressable accessibilityRole="link" accessibilityLabel={`Reprendre ${course.title}. Lire la leçon.`} onPress={openCourse} style={{ alignSelf: "stretch" }}>
          {({ pressed }) => (
          <HomeCard style={[{ height: 280 * Math.max(1, fontScale) }, pressed && homeStyles.pressed]}>
          <View style={[homeStyles.imageClip, { borderRadius: 17 }]}>
            <HomeCourseArtwork course={course} category={category} emojiSize={72} />
            <View style={homeStyles.imageContent}>
              <HomeImageShade />
              <HomeText heading style={homeStyles.imageTitle}>{course.title}</HomeText>
              <HomeText style={{ marginTop: 6, fontSize: 12, fontWeight: "500", lineHeight: 16, includeFontPadding: false, color: homeColors.card }}>{course.lessons.length > 0 ? `Leçon ${lessonIndex + 1} / ${course.lessons.length} · ` : ""}{category.name}</HomeText>
              <HomeImageAction label="Lire la leçon" />
            </View>
          </View>
          </HomeCard>
          )}
        </Pressable>
      </View>
    );
  }
  return (
    <Pressable accessibilityRole="link" accessibilityLabel={`Commencer : ${course.title}`} onPress={openCourse} style={({ pressed }) => [homeStyles.card, homeStyles.row, { overflow: "hidden", alignItems: "stretch", gap: 16 }, pressed && homeStyles.pressed]}>
      <View style={{ width: 76, borderRightWidth: 3, borderColor: homeColors.ink, backgroundColor: homeSubjectColors[category.color], alignItems: "center", justifyContent: "center" }}>
        <HomeText style={{ fontSize: 38, lineHeight: 52 }}>{course.emoji}</HomeText>
      </View>
      <View style={[homeStyles.flexible, { paddingVertical: 12, paddingRight: 12 }]}>
        <HomeCategoryTag category={category} />
        <HomeText heading style={{ marginTop: 6, fontSize: 14, lineHeight: 20 }}>{course.title}</HomeText>
        <HomeText heading style={{ marginTop: 6, fontSize: 13, color: homeColors.primaryText }}>Commencer →</HomeText>
      </View>
    </Pressable>
  );
}
