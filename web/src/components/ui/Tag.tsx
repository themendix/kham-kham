import type { SubjectColor } from "@/types";
import { SUBJECT_BG } from "@/lib/subjectStyles";

interface TagProps {
  label: string;
  emoji?: string;
  /** "dark" = pastille sombre (posée sur une illustration), "subject" = couleur pastel de la matière */
  variant?: "dark" | "subject";
  color?: SubjectColor;
}

/** Badge de catégorie affiché sur les cartes et cours */
export function Tag({ label, emoji, variant = "dark", color }: TagProps) {
  const subjectBg = color ? SUBJECT_BG[color] : "bg-cream";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border-[2.5px] border-ink
        px-3.5 py-1.5 font-heading text-xs font-bold uppercase tracking-wide
        ${variant === "dark" ? "bg-ink text-white" : `${subjectBg} text-ink`}`}
    >
      {emoji && <span className="normal-case">{emoji}</span>}
      {label}
    </span>
  );
}
