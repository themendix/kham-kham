import type { SubjectColor } from "@/types";
import { SUBJECT_DEEP_BG } from "@/lib/subjectStyles";

interface LessonProgressPipsProps {
  /** Index (0-based) de la leçon affichée */
  currentIndex: number;
  totalLessons: number;
  accentColor: SubjectColor;
}

/**
 * Remplace la `ProgressBar` linéaire dans `LessonViewer` : une pastille par leçon du cours plutôt
 * qu'un pourcentage continu. La leçon en cours pulse doucement (`sankofa-node-pulse`, déjà
 * neutralisée sous `prefers-reduced-motion` par le filet de sécurité global) pour se distinguer
 * des leçons déjà lues (remplies, sans animation) et à venir (contour fin, vides).
 */
export function LessonProgressPips({ currentIndex, totalLessons, accentColor }: LessonProgressPipsProps) {
  return (
    <div className="mt-3 flex gap-[5px]">
      {Array.from({ length: totalLessons }, (_, i) => {
        const done = i <= currentIndex;
        const isCurrent = i === currentIndex;
        return (
          <div
            key={i}
            className={`h-2 flex-1 rounded-full ${done ? SUBJECT_DEEP_BG[accentColor] : "border-2 border-ink/20"} ${isCurrent ? "sankofa-node-pulse" : ""}`}
          />
        );
      })}
    </div>
  );
}
