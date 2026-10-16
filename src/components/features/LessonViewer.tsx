import type { NativeElementHandle } from "@/native/elements";
import { NativeBox, NativeH2 } from "@/native/elements";
import { useLayoutEffect, useRef } from "react";
import type { Lesson, SubjectColor } from "@/types";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { LessonBlocks } from "@/components/features/LessonBlocks";
import { LessonProgressPips } from "@/components/features/LessonProgressPips";
import { StyleSheet, View } from "react-native";
import { HomeText, homeColors } from "./HomeUi";
import { EditorialLessonContent } from "./EditorialLessonContent";
import { GeographyLessonSheet } from "./GeographyLessonSheet";
import { getCourseMeta } from "@/data/courseMeta";
interface LessonViewerProps {
    lesson: Lesson;
    courseId: string;
    preserveInitialScroll?: boolean;
    lessonIndex: number;
    totalLessons: number;
    accentColor: SubjectColor;
    onPrev: () => void;
    onNext: () => void;
    nextLabel: string;
    isLastLesson?: boolean;
}
/** Affiche une leçon à la fois, avec pagination et progression dans le cours */
export function LessonViewer({ lesson, courseId, preserveInitialScroll = false, lessonIndex, totalLessons, accentColor, onPrev, onNext, nextLabel, isLastLesson = false, }: LessonViewerProps) {
    const reading = accentColor === "histoire";
    const titleRef = useRef<NativeElementHandle>(null);
    const lastReadingRef = useRef<string | null>(null);
    const readingKey = `${courseId}:${lesson.id}:${lessonIndex}`;
    useLayoutEffect(() => {
        if (lastReadingRef.current === readingKey)
            return;
        const initialReading = lastReadingRef.current === null;
        lastReadingRef.current = readingKey;
        // AppShell conserve la position de l'entrée d'historique au retour arrière.
        if (initialReading && preserveInitialScroll)
            return;
        titleRef.current?.focus({ preventScroll: true });
        titleRef.current?.scrollIntoView({ block: "start", behavior: "instant" });
    }, [readingKey, preserveInitialScroll]);
    if (accentColor === "geo") {
        const country = getCourseMeta(courseId);
        return <GeographyLessonSheet countryName={country?.title ?? "Géographie"} countryEmoji={country?.emoji ?? "🌍"} lesson={lesson} lessonIndex={lessonIndex} totalLessons={totalLessons} preserveInitialScroll={preserveInitialScroll} onPrev={onPrev} onNext={onNext} nextLabel={nextLabel} isLastLesson={isLastLesson}/>;
    }
    if (reading) {
        return <View style={editorialStyles.page}>
          <LessonProgressPips currentIndex={lessonIndex} totalLessons={totalLessons} accentColor={accentColor} compact/>
          <View style={editorialStyles.heading}>
            <HomeText heading style={editorialStyles.subject}>Histoire</HomeText>
            <NativeH2 ref={titleRef} tabIndex={-1} className="text-[22px] font-extrabold leading-[28px]">{lesson.title}</NativeH2>
          </View>
          <EditorialLessonContent key={lesson.id} lesson={lesson}/>
          <View style={editorialStyles.navigation}>
            <Button variant="secondary" onClick={onPrev} disabled={lessonIndex === 0} className="min-h-11 min-w-0 flex-1 rounded-[14px] border-2 px-2 py-2 text-[13px]">← Précédent</Button>
            <Button onClick={onNext} className={`min-h-11 min-w-0 flex-1 rounded-[14px] border-2 px-2 py-2 text-[13px] ${isLastLesson ? "bg-success" : ""}`}>{nextLabel}</Button>
          </View>
        </View>;
    }
    return (<Card className={reading ? "p-3.5" : "p-6 md:p-8"}>
      {!reading && <NativeBox className="font-heading text-xs font-bold uppercase tracking-wide text-ink-faint">
        Leçon {lessonIndex + 1} / {totalLessons}
      </NativeBox>}
      <LessonProgressPips currentIndex={lessonIndex} totalLessons={totalLessons} accentColor={accentColor} compact={reading}/>

      <NativeH2 ref={titleRef} tabIndex={-1} className={reading ? "mt-2.5 scroll-mt-4 text-[18px] font-extrabold leading-[24px]" : "mt-5 scroll-mt-6 text-xl font-extrabold leading-tight"}>{lesson.title}</NativeH2>
      <NativeBox className={reading ? "mt-2.5" : "mt-3.5"}>
        <LessonBlocks blocks={lesson.blocks} accent={accentColor} density={reading ? "reading" : "full"} imageKey={lesson.id}/>
      </NativeBox>

      <NativeBox className={reading ? "mt-3 flex flex-row items-stretch gap-2" : "mt-6 flex justify-between gap-3"}>
        <Button variant="secondary" onClick={onPrev} disabled={lessonIndex === 0} className={reading ? "min-h-11 min-w-0 flex-1 px-2 py-2 text-[12px]" : undefined}>
          ← Précédent
        </Button>
        <Button variant="primary" onClick={onNext} className={`${reading ? "min-h-11 min-w-0 flex-1 px-2 py-2 text-[12px]" : ""} ${isLastLesson ? "bg-success" : ""}`}>
          {nextLabel}
        </Button>
      </NativeBox>
    </Card>);
}

const editorialStyles = StyleSheet.create({
  page: { gap: 14 },
  heading: { gap: 5 },
  subject: { fontSize: 10.5, lineHeight: 15, letterSpacing: 1, textTransform: "uppercase", color: homeColors.muted },
  navigation: { flexDirection: "row", alignItems: "stretch", gap: 10, marginTop: 2 },
});
