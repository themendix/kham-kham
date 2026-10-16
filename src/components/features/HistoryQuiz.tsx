import { Pressable, StyleSheet, View } from "react-native";
import { ArrowLeft, ArrowRight, Check, RotateCcw, Trophy, X } from "lucide-react-native";
import type { QuizQuestion } from "@/types";
import { HomeText, homeColors } from "./HomeUi";

export function HistoryQuizHeader({ courseTitle, onBack }: { courseTitle: string; onBack: () => void }) {
  return <View style={styles.header}>
    <HistoryQuizBackButton onBack={onBack}/>
    <View style={styles.subject}><HomeText heading style={styles.subjectText}>HISTOIRE</HomeText></View>
    <HomeText style={styles.courseTitle}>{courseTitle}</HomeText>
  </View>;
}

export function HistoryQuizBackButton({ onBack }: { onBack: () => void }) {
  return <Pressable accessibilityRole="button" onPress={onBack} style={styles.back}>
      {({ pressed }) => <View style={[styles.backRow, pressed && styles.pressed]}>
        <ArrowLeft size={20} color={homeColors.ink}/>
        <HomeText heading style={styles.backText}>Retour au cours</HomeText>
      </View>}
    </Pressable>;
}

export function HistoryQuizAction({ label, onPress, secondary = false, retry = false, disabled = false }: {
  label: string; onPress: () => void; secondary?: boolean; retry?: boolean; disabled?: boolean;
}) {
  return <Pressable accessibilityRole="button" accessibilityState={{ disabled }} disabled={disabled} onPress={onPress} style={[styles.action, secondary && styles.secondary, disabled && styles.disabled]}>
    {({ pressed }) => <View style={[styles.actionContent, pressed && styles.pressed]}>
      {retry && <RotateCcw size={20} color={homeColors.ink}/>}
      <HomeText heading style={styles.actionText}>{label}</HomeText>
      {!secondary && <ArrowRight size={20} color={homeColors.ink}/>}
    </View>}
  </Pressable>;
}

export function HistoryQuizQuestion({ question, index, total, selected, pending, error, onSelect, onNext }: {
  question: QuizQuestion; index: number; total: number; selected: number | null; pending: boolean; error: boolean;
  onSelect: (index: number) => void; onNext: () => void;
}) {
  const locked = selected !== null;
  const correct = selected === question.correctIndex;
  return <View style={styles.questionScreen}>
    <HomeText heading accessibilityRole="header" style={styles.heading}>À toi de jouer</HomeText>
    <View style={styles.progressRow}>
      <View accessible accessibilityRole="progressbar" accessibilityLabel="Progression du quiz" accessibilityValue={{ min: 0, max: total, now: index + 1, text: `Question ${index + 1} sur ${total}` }} style={styles.segments}>
        {Array.from({ length: total }, (_, i) => <View key={i} style={[styles.segment, i <= index && styles.filled]}/>)}
      </View>
      <HomeText style={styles.counter}>{index + 1} / {total}</HomeText>
    </View>
    <HomeText heading accessibilityRole="header" style={styles.question}>{question.question}</HomeText>
    <View accessibilityRole="radiogroup" accessibilityLabel={question.question} style={styles.options}>
      {question.options.map((option, i) => {
        const right = locked && i === question.correctIndex;
        const wrong = locked && i === selected && !right;
        const color = right ? homeColors.success : wrong ? homeColors.primaryText : homeColors.ink;
        return <Pressable key={i} accessibilityRole="radio" accessibilityState={{ checked: i === selected, disabled: locked }} accessibilityLabel={`${option}${right ? ", bonne réponse" : wrong ? ", ta réponse, incorrecte" : ""}`} disabled={locked} onPress={() => onSelect(i)} style={[styles.option, right && styles.rightOption, wrong && styles.wrongOption, locked && !right && !wrong && styles.otherOption]}>
          {({ pressed }) => <View style={[styles.optionContent, pressed && styles.pressed]}>
            <View style={[styles.letter, right && styles.rightLetter, wrong && styles.wrongLetter]}><HomeText heading style={[styles.letterText, { color }]}>{String.fromCharCode(65 + i)}</HomeText></View>
            <HomeText style={[styles.optionText, { color }]}>{option}</HomeText>
            {right && <Check size={22} color={color}/>}
            {wrong && <X size={22} color={color}/>}
          </View>}
        </Pressable>;
      })}
    </View>
    {locked ? <>
      <View accessibilityLiveRegion="polite" style={styles.explanation}>
        <HomeText heading style={[styles.feedback, { color: correct ? homeColors.success : homeColors.primaryText }]}>{correct ? "Bonne réponse !" : "Pas tout à fait"}</HomeText>
        <HomeText style={styles.explanationText}>{question.explanation}</HomeText>
      </View>
      {error && <HomeText accessibilityRole="alert" style={styles.error}>Le résultat n’a pas pu être enregistré. Réessaie pour le sauvegarder.</HomeText>}
      <HistoryQuizAction label={pending ? "Enregistrement…" : error ? "Réessayer" : index === total - 1 ? "Voir mon résultat" : "Question suivante"} onPress={onNext} disabled={pending}/>
    </> : <HomeText style={styles.helper}>Choisis une réponse.</HomeText>}
  </View>;
}

export function HistoryQuizOutcome({ score, total, onReturn, onRetry }: { score: number; total: number; onReturn: () => void; onRetry: () => void }) {
  const perfect = total > 0 && score === total;
  const good = total > 0 && score / total >= 0.5;
  return <View style={styles.outcome}>
    <HomeText heading accessibilityRole="header" style={styles.heading}>{perfect ? "Sans faute !" : good ? "Bien joué !" : "On continue !"}</HomeText>
    <View accessible accessibilityLabel={`${score} sur ${total} bonnes réponses`} style={styles.scoreCard}>
      <Trophy size={64} strokeWidth={1.7} color={homeColors.gold}/>
      <HomeText heading style={styles.score}>{score} / {total}</HomeText>
      <HomeText heading style={styles.scoreCaption}>bonnes réponses</HomeText>
      <View style={styles.scoreSegments}>{Array.from({ length: total }, (_, i) => <View key={i} style={[styles.segment, styles.scoreSegment, i < score && styles.filled]}/>)}</View>
    </View>
    <View style={styles.resultMessage}>
      <HomeText heading style={styles.message}>{perfect ? "Tu maîtrises ce quiz." : good ? "Tu connais bien ce cours." : "Chaque essai te fait progresser."}</HomeText>
      <HomeText style={styles.messageDetail}>{perfect ? "Continue à explorer l’Histoire." : "Tu peux refaire le quiz pour progresser."}</HomeText>
    </View>
    <View style={styles.actions}>
      <HistoryQuizAction label="Retour aux cours d’Histoire" onPress={onReturn}/>
      <HistoryQuizAction label="Refaire le quiz" onPress={onRetry} secondary retry/>
    </View>
  </View>;
}

const styles = StyleSheet.create({
  header: { gap: 7, marginBottom: 16 },
  back: { alignSelf: "flex-start", minHeight: 44, justifyContent: "center", marginBottom: 6 },
  backRow: { flexDirection: "row", gap: 8, alignItems: "center" },
  backText: { fontSize: 13, lineHeight: 20 },
  subject: { alignSelf: "flex-start", backgroundColor: homeColors.gold, borderRadius: 20, paddingHorizontal: 13, paddingVertical: 4 },
  subjectText: { fontSize: 11, lineHeight: 16 },
  courseTitle: { fontSize: 14, lineHeight: 21 },
  questionScreen: { gap: 14 },
  heading: { fontSize: 29, lineHeight: 39, letterSpacing: -0.6 },
  progressRow: { flexDirection: "row", gap: 14, alignItems: "center", marginBottom: 6 },
  segments: { flex: 1, flexDirection: "row", gap: 5 },
  segment: { flex: 1, height: 9, borderRadius: 5, backgroundColor: "#ded5c3" },
  filled: { backgroundColor: homeColors.gold },
  counter: { fontSize: 12, lineHeight: 18 },
  question: { fontSize: 20, lineHeight: 28, marginBottom: 4 },
  options: { gap: 10 },
  option: { borderWidth: 2, borderColor: homeColors.ink, borderRadius: 14, backgroundColor: homeColors.card },
  optionContent: { minHeight: 56, padding: 10, flexDirection: "row", alignItems: "center", gap: 11 },
  letter: { width: 32, height: 32, borderRadius: 16, backgroundColor: homeColors.cream, alignItems: "center", justifyContent: "center", flexShrink: 0 },
  letterText: { fontSize: 13, lineHeight: 20 },
  optionText: { fontSize: 14, lineHeight: 21, fontWeight: "600", flex: 1 },
  rightOption: { borderColor: homeColors.success, backgroundColor: "#e5f2df" },
  wrongOption: { borderColor: homeColors.primaryText, backgroundColor: "#fce7dd" },
  rightLetter: { backgroundColor: "#c9e7bf" },
  wrongLetter: { backgroundColor: "#f5cdbd" },
  otherOption: { borderColor: "#a69b87", backgroundColor: "#faf5eb" },
  explanation: { borderLeftWidth: 4, borderLeftColor: homeColors.gold, borderRadius: 12, backgroundColor: "#fcf7ec", padding: 13, gap: 5 },
  feedback: { fontSize: 16, lineHeight: 23 },
  explanationText: { fontSize: 14, lineHeight: 21 },
  helper: { fontSize: 13, lineHeight: 20, color: homeColors.muted, marginTop: 8 },
  error: { fontSize: 13, lineHeight: 20, color: homeColors.primaryText },
  action: { minHeight: 52, backgroundColor: homeColors.gold, borderRadius: 14, borderWidth: 2, borderColor: homeColors.ink, boxShadow: "0px 3px 0px 0px #1e1b18" },
  actionContent: { minHeight: 50, paddingVertical: 12, paddingHorizontal: 14, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 10 },
  actionText: { fontSize: 14, lineHeight: 21, textAlign: "center", flexShrink: 1 },
  secondary: { backgroundColor: homeColors.cream, boxShadow: "none" },
  disabled: { opacity: 0.65 },
  pressed: { opacity: 0.7 },
  outcome: { gap: 21 },
  scoreCard: { backgroundColor: homeColors.ink, borderRadius: 22, padding: 24, alignItems: "center", gap: 10 },
  score: { color: homeColors.cream, fontSize: 58, lineHeight: 76, textAlign: "center", marginTop: 6 },
  scoreCaption: { color: homeColors.cream, fontSize: 17, lineHeight: 25, textAlign: "center" },
  scoreSegments: { flexDirection: "row", gap: 6, marginTop: 13, alignSelf: "stretch" },
  scoreSegment: { height: 12, backgroundColor: "#5c5751" },
  resultMessage: { gap: 6, alignItems: "center" },
  message: { fontSize: 17, lineHeight: 25, textAlign: "center" },
  messageDetail: { fontSize: 14, lineHeight: 21, textAlign: "center", color: homeColors.muted },
  actions: { gap: 13 },
});
