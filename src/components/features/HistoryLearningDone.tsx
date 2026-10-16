import { StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import { Check, RotateCcw, Star } from "lucide-react-native";
import { COURSES_PER_LEVEL, type SubjectProgress } from "@/lib/subjectProgress";
import { HomeText, homeColors } from "./HomeUi";
import { HistoryQuizAction } from "./HistoryQuiz";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface HistoryLearningDoneProps {
  courseTitle: string;
  xpDisplayed: number;
  isRevision: boolean;
  subject: SubjectProgress;
  subjectBefore: SubjectProgress;
  rankedUp: boolean;
  newRank: string;
  levelUp: boolean;
  newLevel: number;
  primaryLabel: string;
  onPrimary: () => void;
  onSecondary?: () => void;
}

/** Écran de fin Histoire : données confirmées du cours, sans crédit supplémentaire en révision. */
export function HistoryLearningDone({ courseTitle, xpDisplayed, isRevision, subject, subjectBefore, rankedUp, newRank, levelUp, newLevel, primaryLabel, onPrimary, onSecondary }: HistoryLearningDoneProps) {
  const reducedMotion = useReducedMotion();
  // Le niveau suivant est célébré sur l'écran suivant : on remplit d'abord celui-ci à 100 %.
  const leveledUp = !isRevision && subject.level > subjectBefore.level;
  const displayedLevel = leveledUp ? subjectBefore.level : subject.level;
  const displayedCount = leveledUp ? COURSES_PER_LEVEL : subject.coursesIntoLevel;
  const target = leveledUp ? 100 : subject.progressPct;
  const from = isRevision ? target : subjectBefore.progressPct;
  const animate = !isRevision && !reducedMotion && from !== target;
  const [animatedFill, setFill] = useState(from);
  const fill = animate ? animatedFill : target;
  useEffect(() => {
    if (!animate) return;
    let frame = 0;
    let start: number | null = null;
    const timeout = globalThis.setTimeout(() => {
      const step = (timestamp: number) => {
        start ??= timestamp;
        const progress = Math.min(1, (timestamp - start) / 900);
        const eased = 1 - Math.pow(1 - progress, 3);
        setFill(from + (target - from) * eased);
        if (progress < 1) frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    }, 300);
    return () => {
      globalThis.clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, [animate, from, target]);
  const coursesLeft = COURSES_PER_LEVEL - subject.coursesIntoLevel;
  const allDone = subject.totalCount > 0 && subject.completedCount === subject.totalCount;
  return <View style={styles.screen}>
    <View style={styles.subject}><HomeText heading style={styles.subjectText}>HISTOIRE</HomeText></View>
    <View style={styles.seal}><Check size={32} strokeWidth={3} color={homeColors.success}/></View>
    <View style={styles.intro}>
      <HomeText heading accessibilityRole="header" style={styles.heading}>Cours terminé !</HomeText>
      <HomeText heading style={styles.courseTitle}>{courseTitle}</HomeText>
    </View>

    <View style={styles.card}>
      <View style={styles.reward}>
        {isRevision ? <RotateCcw size={30} color={homeColors.gold}/> : <Star size={34} color={homeColors.gold} fill={homeColors.gold}/>}
        <View style={styles.rewardText}>
          <HomeText heading style={styles.xp}>{isRevision ? "Révision" : `+${xpDisplayed} XP`}</HomeText>
          <HomeText style={styles.rewardCaption}>{isRevision ? "Les XP de ce cours ont déjà été gagnés." : "gagnés avec ce cours"}</HomeText>
        </View>
      </View>
      <View style={styles.divider}/>
      <View style={styles.levelRow}>
        <HomeText heading style={styles.progressTitle}>Ta progression en Histoire</HomeText>
        <View style={styles.levelBadge}><HomeText heading style={styles.levelText}>Niveau {displayedLevel}</HomeText></View>
      </View>
      <View accessible accessibilityRole="progressbar" accessibilityLabel="Progression vers le prochain niveau en Histoire" accessibilityValue={{ min: 0, max: COURSES_PER_LEVEL, now: displayedCount, text: `${displayedCount} cours sur ${COURSES_PER_LEVEL}, niveau ${displayedLevel}` }} style={styles.track}>
        <View style={[styles.fill, { width: `${fill}%` }]}/>
      </View>
      <View style={styles.barLabels}>
        <HomeText style={styles.barLabel}>{displayedCount} / {COURSES_PER_LEVEL} cours</HomeText>
        <HomeText style={styles.barLabel}>Niveau {displayedLevel + 1}</HomeText>
      </View>
    </View>

    <HomeText style={styles.remaining}>{leveledUp ? `Niveau ${subject.level} atteint !` : allDone ? "Tous les cours d’Histoire sont terminés." : `Encore ${coursesLeft} cours pour atteindre le niveau ${subject.level + 1}.`}</HomeText>
    {(rankedUp || levelUp) && <View style={styles.achievements}>
      {rankedUp && <HomeText heading style={styles.achievement}>Nouveau rang : {newRank}</HomeText>}
      {levelUp && <HomeText heading style={styles.achievement}>Niveau global {newLevel} atteint</HomeText>}
    </View>}
    <View style={styles.next}>
      <HomeText heading style={styles.nextTitle}>Et maintenant ?</HomeText>
      <HomeText style={styles.nextCaption}>Teste ce que tu viens d’apprendre.</HomeText>
    </View>
    <View style={styles.actions}>
      <HistoryQuizAction label={primaryLabel.replace(/\s*→$/u, "")} onPress={onPrimary}/>
      {onSecondary && <HistoryQuizAction label="Retour aux cours d’Histoire" onPress={onSecondary} secondary/>}
    </View>
  </View>;
}

const styles = StyleSheet.create({
  screen: { gap: 14, paddingTop: 8 },
  subject: { alignSelf: "flex-start", backgroundColor: homeColors.gold, borderRadius: 20, paddingHorizontal: 13, paddingVertical: 4 },
  subjectText: { fontSize: 11, lineHeight: 16 },
  seal: { width: 48, height: 48, borderRadius: 24, borderWidth: 1.5, borderColor: homeColors.success, backgroundColor: "#d9ecd0", alignItems: "center", justifyContent: "center" },
  intro: { gap: 5 },
  heading: { fontSize: 30, lineHeight: 40, letterSpacing: -0.6 },
  courseTitle: { fontSize: 18, lineHeight: 26 },
  card: { padding: 16, backgroundColor: homeColors.ink, borderRadius: 22, gap: 12 },
  reward: { flexDirection: "row", alignItems: "center", gap: 13 },
  rewardText: { flex: 1, gap: 3 },
  xp: { fontSize: 34, lineHeight: 45, color: homeColors.gold },
  rewardCaption: { fontSize: 13, lineHeight: 20, color: homeColors.cream },
  divider: { height: 1, backgroundColor: "#5c5751" },
  levelRow: { flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 10 },
  progressTitle: { fontSize: 13, lineHeight: 20, color: homeColors.cream, flexShrink: 1 },
  levelBadge: { backgroundColor: homeColors.gold, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 4 },
  levelText: { fontSize: 11, lineHeight: 17 },
  track: { height: 11, borderRadius: 6, overflow: "hidden", backgroundColor: "#5c5751" },
  fill: { height: "100%", borderRadius: 6, backgroundColor: homeColors.gold },
  barLabels: { flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 8, marginTop: -7 },
  barLabel: { fontSize: 12, lineHeight: 18, color: homeColors.cream },
  remaining: { fontSize: 13, lineHeight: 20, color: homeColors.muted },
  achievements: { gap: 5 },
  achievement: { fontSize: 13, lineHeight: 20 },
  next: { gap: 4, marginTop: 2 },
  nextTitle: { fontSize: 20, lineHeight: 28 },
  nextCaption: { fontSize: 13, lineHeight: 20, color: homeColors.muted },
  actions: { gap: 13, paddingBottom: 4 },
});
