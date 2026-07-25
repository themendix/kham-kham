import type { ReactNode } from "react";

type Tone = "gold" | "flame" | "neutral";

const TONE_CLASSES: Record<Tone, string> = {
  gold: "bg-gold text-ink",
  flame: "bg-cream text-ink",
  neutral: "bg-cream text-ink",
};

interface BadgeProps {
  children: ReactNode;
  tone?: Tone;
}

/** Petit badge pour l'XP, le streak ou tout autre compteur mis en avant */
export function Badge({ children, tone = "neutral" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border-[2.5px] border-ink
        px-3.5 py-1.5 font-heading text-sm font-extrabold shadow-sm ${TONE_CLASSES[tone]}`}
    >
      {children}
    </span>
  );
}
