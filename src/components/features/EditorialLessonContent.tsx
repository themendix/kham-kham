import { Fragment, useState } from "react";
import { Image as NativeImageAsset, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { Image } from "expo-image";
import { Check, Lightbulb } from "lucide-react-native";
import type { Lesson, LessonBlock } from "@/types";
import type { ImageBlock } from "@/lib/lessonBlocks";
import { parseInline } from "@/lib/lessonBlocks";
import { getLessonImage } from "@/lib/lessonImages";
import { imageAssets } from "@/native/imageAssets";
import { HomeText, homeColors } from "./HomeUi";
import { LessonFigureCaption } from "./LessonFigure";

function Inline({ text }: { text: string }) {
  return <>{parseInline(text).map((part, index) => part.bold
    ? <Text key={index} style={styles.bold}>{part.text}</Text>
    : <Fragment key={index}>{part.text}</Fragment>)}</>;
}

function Paragraph({ text }: { text: string }) {
  return <HomeText style={styles.body}><Inline text={text}/></HomeText>;
}

function EditorialPhoto({ source, block, width, portrait, badge }: {
  source: number; block: ImageBlock; width: number; portrait: boolean; badge?: string;
}) {
  const { height: screenHeight } = useWindowDimensions();
  const intrinsic = NativeImageAsset.resolveAssetSource(source);
  const ratio = intrinsic?.width && intrinsic.height ? intrinsic.width / intrinsic.height : 16 / 9;
  const preserveDocument = block.fit === "contain";
  const maxHeight = portrait ? width * 1.8 : Math.min(196, screenHeight * 0.24);
  const photoHeight = preserveDocument ? Math.min(width / ratio, maxHeight)
    : portrait ? width * 1.5 : Math.min(width / ratio, maxHeight);
  const photoWidth = preserveDocument ? photoHeight * ratio : width;
  return (
    <View style={[styles.photo, { width: photoWidth, height: photoHeight }]}>
      <Image source={source} contentFit="cover" contentPosition={portrait ? { left: "50%", top: "18%" } : "center"} accessibilityLabel={block.alt} accessible style={StyleSheet.absoluteFill}/>
      {badge && <View style={styles.photoBadge}><HomeText heading style={styles.badgeText}>{badge}</HomeText></View>}
    </View>
  );
}

/** Lecture éditoriale : photo portrait à côté du récit, paysage entre deux passages. */
export function EditorialLessonContent({ lesson }: { lesson: Lesson }) {
  const { width: windowWidth, fontScale } = useWindowDimensions();
  const [measuredWidth, setMeasuredWidth] = useState(0);
  const width = measuredWidth || Math.max(1, windowWidth - 32);
  const imageBlock = lesson.blocks.find((block): block is ImageBlock => block.type === "image");
  const image = imageBlock ? getLessonImage(lesson.id) : undefined;
  const source = image ? imageAssets[image.src] : undefined;
  const intrinsic = source ? NativeImageAsset.resolveAssetSource(source) : undefined;
  const portrait = !!intrinsic?.height && intrinsic.height > intrinsic.width;
  const sideBySide = portrait && width >= 300 && fontScale <= 1.25;
  const portraitWidth = sideBySide ? Math.min(148, width * 0.42) : Math.min(164, width);
  const paragraphs = lesson.blocks.filter((block) => block.type === "paragraphe");
  const firstParagraph = paragraphs[0];
  const keyFigure = lesson.blocks.find((block) => block.type === "chiffreCle");
  const retention = lesson.blocks.find((block) => block.type === "aRetenir");

  function renderBlock(block: LessonBlock, index: number) {
    switch (block.type) {
      case "paragraphe":
        return <Paragraph key={index} text={block.text}/>;
      case "citation":
        return <View key={index} style={styles.quote}>
          <HomeText style={styles.quoteText}>{block.texte}</HomeText>
          <HomeText style={styles.caption}>{block.auteur}{block.date ? ` · ${block.date}` : ""}</HomeText>
        </View>;
      case "chiffreCle":
        return <View key={index} style={styles.figureRow}>
          {!(source && !portrait && imageBlock?.fit !== "contain") && <View style={styles.numberChip}><HomeText heading style={styles.number}>{block.valeur}</HomeText></View>}
          <HomeText style={[styles.caption, styles.flexible]}>{block.legende}</HomeText>
        </View>;
      case "frise":
        return <View key={index} style={styles.timeline}>
          {block.evenements.map((event, eventIndex) => <View key={eventIndex} style={styles.timelineRow}>
            <HomeText heading style={styles.date}>{event.date}</HomeText>
            <HomeText style={[styles.body, styles.flexible]}>{event.texte}</HomeText>
          </View>)}
          {block.unite && <HomeText style={styles.caption}>{block.unite}</HomeText>}
        </View>;
      case "leSavaisTu":
        return <View key={index} style={styles.aside}>
          <Lightbulb size={17} color={homeColors.ink}/>
          <View style={styles.flexible}>
            <HomeText heading style={styles.asideTitle}>Le savais-tu ?</HomeText>
            <HomeText style={styles.asideBody}><Inline text={block.text}/></HomeText>
          </View>
        </View>;
      case "reperes":
        return <View key={index} style={styles.timeline}>{block.items.map((item, itemIndex) => <View key={itemIndex} style={styles.timelineRow}>
          <HomeText style={styles.caption}>{item.label}</HomeText><HomeText style={[styles.body, styles.flexible]}>{item.valeur}</HomeText>
        </View>)}</View>;
      case "image":
      case "aRetenir":
        return null;
    }
  }

  const remaining = lesson.blocks.filter((block) => block.type !== "image" && block.type !== "aRetenir"
    && !(source && portrait && block.type === "paragraphe")
    && !(source && !portrait && block === firstParagraph));

  return <View style={styles.content} onLayout={({ nativeEvent }) => setMeasuredWidth(nativeEvent.layout.width)}>
    {source && imageBlock && (portrait ? <>
      <View style={[styles.portraitStory, !sideBySide && styles.stackedStory]}>
        <View style={[styles.prose, sideBySide && styles.flexible]}>{paragraphs.map((block, index) => <Paragraph key={index} text={block.text}/>)}</View>
        <EditorialPhoto source={source} block={imageBlock} width={portraitWidth} portrait/>
      </View>
      <LessonFigureCaption block={imageBlock} reading/>
    </> : <>
      {firstParagraph && <Paragraph text={firstParagraph.text}/>}
      <EditorialPhoto source={source} block={imageBlock} width={width} portrait={false} badge={imageBlock.fit === "contain" ? undefined : keyFigure?.valeur}/>
      <LessonFigureCaption block={imageBlock} reading/>
    </>)}
    {remaining.map(renderBlock)}
    {retention && <View style={styles.retention}>
      <View style={styles.retentionHeader}>
        <View style={styles.check}><Check size={16} color={homeColors.ink} strokeWidth={3}/></View>
        <HomeText heading style={styles.retentionTitle}>Ce que tu retiens</HomeText>
      </View>
      <View style={styles.points}>{retention.points.map((point, index) => <View key={index} style={styles.point}>
        <View style={styles.bullet}/>
        <HomeText style={[styles.retentionBody, styles.flexible]}><Inline text={point}/></HomeText>
      </View>)}</View>
    </View>}
  </View>;
}

const styles = StyleSheet.create({
  content: { gap: 12 },
  flexible: { flex: 1, minWidth: 0 },
  bold: { fontWeight: "700" },
  body: { fontSize: 15, lineHeight: 21, color: homeColors.ink },
  caption: { fontSize: 12, lineHeight: 17, color: homeColors.muted },
  prose: { gap: 10 },
  portraitStory: { flexDirection: "row", alignItems: "flex-start", gap: 14 },
  stackedStory: { flexDirection: "column", alignItems: "center" },
  photo: { alignSelf: "center", overflow: "hidden", borderRadius: 14, backgroundColor: homeColors.card },
  photoBadge: { position: "absolute", top: 8, right: 8, maxWidth: "80%", borderRadius: 10, paddingHorizontal: 9, paddingVertical: 5, backgroundColor: homeColors.gold },
  badgeText: { fontSize: 12, lineHeight: 17 },
  quote: { borderLeftWidth: 4, borderLeftColor: homeColors.gold, paddingLeft: 10, gap: 4, marginVertical: 2 },
  quoteText: { fontSize: 15, lineHeight: 21, fontStyle: "italic", color: homeColors.ink },
  figureRow: { flexDirection: "row", alignItems: "center", gap: 10 },
  numberChip: { borderRadius: 10, backgroundColor: homeColors.gold, paddingHorizontal: 10, paddingVertical: 6, maxWidth: "48%" },
  number: { fontSize: 18, lineHeight: 24 },
  timeline: { gap: 10 },
  timelineRow: { flexDirection: "row", alignItems: "flex-start", gap: 10 },
  date: { fontSize: 12, lineHeight: 20, maxWidth: "35%", color: homeColors.primaryText },
  aside: { flexDirection: "row", alignItems: "flex-start", gap: 8, padding: 10, borderRadius: 12, backgroundColor: "#f3d9a4" },
  asideTitle: { fontSize: 12, lineHeight: 18 },
  asideBody: { fontSize: 13.5, lineHeight: 19 },
  retention: { backgroundColor: homeColors.ink, borderRadius: 18, padding: 12, gap: 10 },
  retentionHeader: { flexDirection: "row", alignItems: "center", gap: 10 },
  check: { width: 26, height: 26, borderRadius: 13, backgroundColor: homeColors.gold, alignItems: "center", justifyContent: "center" },
  retentionTitle: { fontSize: 15, lineHeight: 21, color: homeColors.card, flex: 1 },
  points: { gap: 6 },
  point: { flexDirection: "row", alignItems: "flex-start", gap: 8 },
  bullet: { width: 6, height: 6, borderRadius: 3, backgroundColor: homeColors.gold, marginTop: 6 },
  retentionBody: { fontSize: 13.5, lineHeight: 19, color: homeColors.card },
});
