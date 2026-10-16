import { NativeBox } from "@/native/elements";
import { View } from "react-native";
import type { SubjectColor } from "@/types";
import { SUBJECT_DEEP_BG } from "@/lib/subjectStyles";
interface LessonProgressPipsProps {
    /** Index (0-based) de la leçon affichée */
    currentIndex: number;
    totalLessons: number;
    accentColor: SubjectColor;
    compact?: boolean;
}
/**
 * Remplace la `ProgressBar` linéaire dans `LessonViewer` : une pastille par leçon du cours plutôt
 * qu'un pourcentage continu. La leçon en cours pulse doucement (`sankofa-node-pulse`, déjà
 * neutralisée sous `prefers-reduced-motion` par le filet de sécurité global) pour se distinguer
 * des leçons déjà lues (remplies, sans animation) et à venir (contour fin, vides).
 */
export function LessonProgressPips({ currentIndex, totalLessons, accentColor, compact = false }: LessonProgressPipsProps) {
    return (<View accessible accessibilityRole="progressbar" accessibilityLabel="Progression du cours" accessibilityValue={{ min: 0, max: totalLessons, now: currentIndex + 1, text: `Leçon ${currentIndex + 1} sur ${totalLessons}` }} style={{ flexDirection: "row", gap: compact ? 4 : 5, marginTop: compact ? 0 : 12 }}>
      {Array.from({ length: totalLessons }, (_, i) => {
            const done = i <= currentIndex;
            const isCurrent = i === currentIndex;
            return (<NativeBox key={i} className={`${compact ? "h-1.5" : "h-2"} flex-1 rounded-full ${done ? SUBJECT_DEEP_BG[accentColor] : "border-2 border-ink/20"} ${isCurrent ? "sankofa-node-pulse" : ""}`}/>);
        })}
    </View>);
}
