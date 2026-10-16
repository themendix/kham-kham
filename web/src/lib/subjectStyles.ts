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

/**
 * Teinte foncée de chaque matière (le point d'arrivée de `SUBJECT_GRADIENT`), utilisée seule :
 * anneau de progression de l'écran matière, cadre coloré des blocs de la Biblio. Même valeurs
 * que le dégradé, gardées ici plutôt que codées en dur dans les écrans.
 */
export const SUBJECT_DEEP: Record<SubjectColor, string> = {
  histoire: "#E9B871",
  geo: "#89C98A",
  perso: "#9E93E0",
  decouverte: "#6FC5C2",
};

/**
 * Cadre d'un bloc de matière sur la Biblio : fond pastel, bordure et ombre portée dans la
 * teinte foncée (et non en `ink`, contrairement au reste du design system — c'est ce qui fait
 * lire le bloc comme un territoire de matière plutôt que comme une carte de plus).
 * Classes écrites en toutes lettres : Tailwind ne les voit pas si elles sont assemblées.
 */
export const SUBJECT_BLOCK: Record<SubjectColor, string> = {
  histoire: "bg-histoire border-[#E9B871] shadow-[4px_4px_0_0_#E9B871]",
  geo: "bg-geo border-[#89C98A] shadow-[4px_4px_0_0_#89C98A]",
  perso: "bg-perso border-[#9E93E0] shadow-[4px_4px_0_0_#9E93E0]",
  decouverte: "bg-decouverte border-[#6FC5C2] shadow-[4px_4px_0_0_#6FC5C2]",
};

/** Fond plein dans la teinte foncée (tuile pleine couleur de la mosaïque de la Biblio) */
export const SUBJECT_DEEP_BG: Record<SubjectColor, string> = {
  histoire: "bg-[#E9B871]",
  geo: "bg-[#89C98A]",
  perso: "bg-[#9E93E0]",
  decouverte: "bg-[#6FC5C2]",
};
