import type { SubjectColor } from "@/types";

/** Dégradé pastel par matière, utilisé sur les bannières d'illustration (cartes, cours, détail de cours) */
export const SUBJECT_GRADIENT: Record<SubjectColor, string> = {
  histoire: "from-[#F3D9A4] to-[#E9B871]",
  geo: "from-[#BFE3B0] to-[#89C98A]",
  perso: "from-[#C9C3F0] to-[#9E93E0]",
  decouverte: "from-[#A9E0DE] to-[#6FC5C2]",
};

/** Couleur pastel pleine par matière (classe utilitaire Tailwind générée depuis @theme) */
export const SUBJECT_BG: Record<SubjectColor, string> = {
  histoire: "bg-histoire",
  geo: "bg-geo",
  perso: "bg-perso",
  decouverte: "bg-decouverte",
};
