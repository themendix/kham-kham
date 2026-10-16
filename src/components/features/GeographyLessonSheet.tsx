import { Fragment, useLayoutEffect, useRef, useState } from "react";
import { AccessibilityInfo, Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { ArrowLeft, ArrowRight, Building2, Check, Coins, Compass, Flag, Landmark, Lightbulb, Users } from "lucide-react-native";
import type { Lesson, LessonBlock } from "@/types";
import { parseInline } from "@/lib/lessonBlocks";
import { scrollToTop } from "@/native/scroll";
import { HomeText, homeColors } from "./HomeUi";
import { LessonBlocks } from "./LessonBlocks";

interface GeographyLessonSheetProps {
  countryName: string;
  countryEmoji: string;
  lesson: Lesson;
  lessonIndex: number;
  totalLessons: number;
  preserveInitialScroll: boolean;
  onPrev: () => void;
  onNext: () => void;
  nextLabel: string;
  isLastLesson: boolean;
}

const green = "#bfe3b0";
const greenDeep = "#89c98a";

function Inline({ text }: { text: string }) {
  return <>{parseInline(text).map((part, index) => part.bold
    ? <Text key={index} style={styles.bold}>{part.text}</Text>
    : <Fragment key={index}>{part.text}</Fragment>)}</>;
}

/** Compact Geography lesson design approved on the Senegal course. */
export function GeographyLessonSheet({ countryName, countryEmoji, lesson, lessonIndex, totalLessons, preserveInitialScroll, onPrev, onNext, nextLabel, isLastLesson }: GeographyLessonSheetProps) {
  const { width, height, fontScale } = useWindowDimensions();
  const previousLesson = useRef<string | null>(null);
  const compact = height < 740;
  const shortLesson = lessonIndex === 2;
  const sheetPadding = compact || shortLesson ? 12 : 14;
  const layoutKey = `${lesson.id}:${width}:${height}:${fontScale}`;
  const [measuredSheet, setMeasuredSheet] = useState({ key: "", minHeight: 0 });
  useLayoutEffect(() => {
    if (previousLesson.current === lesson.id) return;
    const initial = previousLesson.current === null;
    previousLesson.current = lesson.id;
    if (initial && preserveInitialScroll) return;
    scrollToTop();
    AccessibilityInfo.announceForAccessibility(lesson.title);
  }, [lesson.id, lesson.title, preserveInitialScroll]);

  const retention = lesson.blocks.find((block) => block.type === "aRetenir");
  const facts = lesson.blocks.find((block) => block.type === "reperes");
  const blocks = lesson.blocks.filter((block) => block.type !== "aRetenir" && block.type !== "reperes");
  const FigureIcon = lessonIndex === 1 ? Users : Compass;

  function renderBlock(block: LessonBlock) {
    switch (block.type) {
      case "paragraphe":
        return <HomeText style={[styles.body, shortLesson && styles.shortBody]}><Inline text={block.text}/></HomeText>;
      case "chiffreCle":
        return <View style={styles.figure}>
          <View style={styles.figureIcon}><FigureIcon size={26} strokeWidth={1.8} color={homeColors.ink}/></View>
          <View style={styles.figureDivider}/>
          <View style={styles.flexible}>
            <HomeText heading style={styles.figureValue}>{block.valeur}</HomeText>
            <HomeText style={styles.figureCaption}>{block.legende}</HomeText>
          </View>
        </View>;
      case "reperes":
        return null;
      case "leSavaisTu":
        return <View style={[styles.aside, shortLesson && styles.shortAside]}>
          <Lightbulb size={22} strokeWidth={1.8} color={homeColors.ink}/>
          <View style={styles.flexible}>
            <HomeText heading style={styles.asideTitle}>Le savais-tu ?</HomeText>
            <HomeText style={[styles.asideBody, shortLesson && styles.shortAsideBody]}><Inline text={block.text}/></HomeText>
          </View>
        </View>;
      case "aRetenir":
        return null;
      default:
        // Preserve credits, licences and rendering if other block types are added later.
        return <LessonBlocks blocks={[block]} accent="geo" density="reading" imageKey={lesson.id}/>;
    }
  }

  return <View style={styles.page}>
    <View style={styles.identity}>
      <View style={styles.subject}><HomeText heading style={styles.subjectText}>Géographie</HomeText></View>
      <HomeText heading style={styles.country}>{countryName}</HomeText>
      <HomeText accessibilityLabel={`Drapeau : ${countryName}`} style={styles.flag}>{countryEmoji}</HomeText>
    </View>
    <View testID="geography-lesson-sheet" style={[styles.sheet, (compact || shortLesson) && styles.compactSheet, measuredSheet.key === layoutKey && { minHeight: measuredSheet.minHeight }]}>
      <View style={styles.heading}>
        <View accessible accessibilityRole="progressbar" accessibilityLabel="Progression du cours" accessibilityValue={{ min: 0, max: totalLessons, now: lessonIndex + 1, text: `Leçon ${lessonIndex + 1} sur ${totalLessons}` }} style={styles.progress}>
          {Array.from({ length: totalLessons }, (_, index) => <View key={index} style={[styles.segment, index <= lessonIndex && styles.filledSegment]}/>)}
        </View>
        <HomeText heading accessibilityRole="header" style={styles.title}>{lesson.title}</HomeText>
      </View>
      {facts && <View testID="geography-key-facts" style={styles.factsHero}>
        <HomeText heading style={styles.factsTitle}>Les repères essentiels</HomeText>
        <View style={styles.factsGrid}>
          {Array.from({ length: Math.ceil(facts.items.length / 2) }, (_, row) => <View key={row} style={styles.factsRow}>
            {facts.items.slice(row * 2, row * 2 + 2).map((item, column) => {
              const FactIcon = [Landmark, Coins, Building2, Flag][row * 2 + column] ?? Compass;
              return <View key={item.label} accessible accessibilityLabel={`${item.label} : ${item.valeur}`} style={styles.factTile}>
                <View style={styles.factHeading}>
                  <FactIcon size={16} strokeWidth={1.8} color={green}/>
                  <HomeText style={styles.factTerm}>{item.label}</HomeText>
                </View>
                <HomeText heading style={styles.factDefinition}>{item.valeur}</HomeText>
              </View>;
            })}
          </View>)}
        </View>
      </View>}
      <View style={[styles.blocks, (compact || shortLesson) && styles.compactBlocks]}>
        {blocks.map((block, index) => <View key={`${lesson.id}:${index}`} style={styles.threadRow}>
          <View style={styles.guide}>
            <View style={[styles.guideLine, index === blocks.length - 1 && styles.lastGuideLine]}/>
            <View style={styles.dot}/>
          </View>
          <View style={styles.flexible}>{renderBlock(block)}</View>
        </View>)}
      </View>
      {retention && <View style={[styles.retention, shortLesson && styles.shortRetention]}>
        <View style={styles.retentionHeader}>
          <View style={styles.check}><Check size={16} strokeWidth={2.5} color={homeColors.ink}/></View>
          <HomeText heading style={styles.retentionTitle}>Ce que tu retiens</HomeText>
        </View>
        <View style={styles.points}>
          {retention.points.map((point, index) => <View key={index} style={styles.point}>
            <View style={styles.bullet}/>
            <HomeText style={[styles.retentionBody, styles.flexible]}><Inline text={point}/></HomeText>
          </View>)}
        </View>
      </View>}
      <View testID="geography-lesson-navigation" style={styles.navigation} onLayout={({ nativeEvent }) => {
        const { y, height: footerHeight } = nativeEvent.layout;
        if (footerHeight <= 0) return;
        // The border must enclose the actual wrapped content, including the footer.
        const minHeight = Math.ceil(y + footerHeight + sheetPadding + 2);
        setMeasuredSheet((previous) => previous.key === layoutKey && Math.abs(previous.minHeight - minHeight) < 2 ? previous : { key: layoutKey, minHeight });
      }}>
        <Pressable accessibilityRole="button" accessibilityLabel="Leçon précédente" accessibilityState={{ disabled: lessonIndex === 0 }} disabled={lessonIndex === 0} onPress={onPrev} style={[styles.button, styles.previous, lessonIndex === 0 && styles.disabled]}>
          {({ pressed }) => <View style={[styles.buttonContent, pressed && styles.pressed]}>
            <ArrowLeft size={16} color={homeColors.ink}/>
            <HomeText heading style={styles.buttonText}>Précédent</HomeText>
          </View>}
        </Pressable>
        <Pressable accessibilityRole="button" accessibilityLabel={nextLabel} onPress={onNext} style={[styles.button, styles.next]}>
          {({ pressed }) => <View style={[styles.buttonContent, pressed && styles.pressed]}>
            <HomeText heading style={styles.buttonText}>{nextLabel.replace(/\s*[→✓]\s*$/u, "")}</HomeText>
            {isLastLesson ? <Check size={16} color={homeColors.ink}/> : <ArrowRight size={16} color={homeColors.ink}/>}
          </View>}
        </Pressable>
      </View>
    </View>
  </View>;
}

const styles = StyleSheet.create({
  page: { width: "100%", alignSelf: "stretch", flexShrink: 0, gap: 10 },
  identity: { flexDirection: "row", alignItems: "center", flexWrap: "wrap", flexShrink: 0, gap: 8 },
  subject: { backgroundColor: green, borderRadius: 999, paddingHorizontal: 10, paddingVertical: 4 },
  subjectText: { fontSize: 11, lineHeight: 16 },
  country: { flexShrink: 1, fontSize: 14, lineHeight: 20 },
  flag: { fontSize: 22, lineHeight: 28 },
  sheet: { width: "100%", alignSelf: "stretch", flexShrink: 0, backgroundColor: homeColors.card, borderWidth: 2, borderColor: homeColors.ink, borderRadius: 22, padding: 14, gap: 12, boxShadow: "4px 5px 0px 0px #1e1b18" },
  compactSheet: { padding: 12, gap: 9 },
  heading: { flexShrink: 0, gap: 8 },
  progress: { flexDirection: "row", gap: 5, marginBottom: 4 },
  segment: { flex: 1, height: 7, backgroundColor: homeColors.cream, borderWidth: 1.5, borderColor: homeColors.ink, borderRadius: 5 },
  filledSegment: { backgroundColor: greenDeep },
  title: { fontSize: 21, lineHeight: 27, letterSpacing: -0.3 },
  blocks: { flexShrink: 0, gap: 10 },
  compactBlocks: { gap: 8 },
  threadRow: { flexDirection: "row", alignItems: "stretch", flexShrink: 0, gap: 8 },
  guide: { width: 9, flexShrink: 0, position: "relative" },
  guideLine: { position: "absolute", left: 3.5, width: 1.5, top: 7, bottom: -10, backgroundColor: green },
  lastGuideLine: { bottom: 0 },
  dot: { width: 9, height: 9, borderRadius: 5, borderWidth: 1, borderColor: "#65a765", backgroundColor: green, marginTop: 6 },
  flexible: { flexGrow: 1, flexShrink: 1, minWidth: 0 },
  body: { fontSize: 14, lineHeight: 20 },
  shortBody: { lineHeight: 19 },
  bold: { fontWeight: "700" },
  figure: { flexDirection: "row", alignItems: "center", gap: 10, borderWidth: 1.5, borderColor: homeColors.ink, borderRadius: 13, backgroundColor: green, padding: 10 },
  figureIcon: { width: 32, height: 32, alignItems: "center", justifyContent: "center" },
  figureDivider: { width: 1, alignSelf: "stretch", backgroundColor: "#79a16c" },
  figureValue: { fontSize: 23, lineHeight: 29 },
  figureCaption: { fontSize: 12, lineHeight: 17 },
  factsHero: { flexShrink: 0, borderRadius: 15, backgroundColor: "#214b35", padding: 10, gap: 8 },
  factsTitle: { color: homeColors.card, fontSize: 14, lineHeight: 20 },
  factsGrid: { gap: 7 },
  factsRow: { flexDirection: "row", alignItems: "stretch", gap: 7 },
  factTile: { flex: 1, minWidth: 0, minHeight: 73, borderRadius: 9, backgroundColor: "#315c43", padding: 8, gap: 6, justifyContent: "center" },
  factHeading: { flexDirection: "row", alignItems: "center", gap: 5 },
  factTerm: { flexShrink: 1, fontSize: 10.5, lineHeight: 15, color: green },
  factDefinition: { color: homeColors.card, fontSize: 14.5, lineHeight: 21 },
  aside: { flexDirection: "row", alignItems: "flex-start", gap: 8, borderWidth: 1.5, borderColor: homeColors.ink, borderRadius: 13, backgroundColor: "#ffe9b0", padding: 10 },
  asideTitle: { fontSize: 12, lineHeight: 18, marginBottom: 3 },
  asideBody: { fontSize: 13, lineHeight: 18 },
  shortAside: { padding: 8 },
  shortAsideBody: { lineHeight: 17 },
  retention: { flexShrink: 0, backgroundColor: homeColors.ink, borderRadius: 13, padding: 10, gap: 7 },
  shortRetention: { padding: 8, gap: 5 },
  retentionHeader: { flexDirection: "row", alignItems: "center", gap: 8 },
  check: { width: 23, height: 23, borderRadius: 12, backgroundColor: green, alignItems: "center", justifyContent: "center" },
  retentionTitle: { flexGrow: 1, flexShrink: 1, color: homeColors.card, fontSize: 13, lineHeight: 19 },
  points: { gap: 4 },
  point: { flexDirection: "row", alignItems: "flex-start", gap: 7 },
  bullet: { width: 5, height: 5, borderRadius: 3, backgroundColor: greenDeep, marginTop: 6 },
  retentionBody: { fontSize: 13, lineHeight: 18, color: homeColors.card },
  navigation: { flexDirection: "row", alignItems: "stretch", flexShrink: 0, gap: 9, marginTop: 1 },
  button: { flex: 1, minHeight: 44, borderWidth: 2, borderColor: homeColors.ink, borderRadius: 11, paddingHorizontal: 7, paddingVertical: 8, justifyContent: "center" },
  previous: { backgroundColor: homeColors.cream },
  next: { backgroundColor: green, boxShadow: "2px 2px 0px 0px #1e1b18" },
  disabled: { opacity: 0.4 },
  buttonContent: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 5 },
  buttonText: { flexShrink: 1, fontSize: 12, lineHeight: 18, textAlign: "center" },
  pressed: { opacity: 0.65 },
});
