import type { Category } from "@/types";

export const CATEGORIES: Category[] = [
  { id: "histoire", name: "Histoire", emoji: "🏛️", color: "histoire" },
  { id: "geo", name: "Géographie", emoji: "🗺️", color: "geo" },
  { id: "perso", name: "Personnalités", emoji: "👤", color: "perso" },
  /**
   * Matière volontairement transversale : elle accueille tout ce qui ne relève ni de
   * l'Histoire, ni de la Géographie, ni d'une biographie — arts et musique, traditions et
   * sociétés, Afrique contemporaine, et ce qui viendra ensuite. Issue de la fusion des trois
   * anciennes matières `arts`/`trad`/`actu` (voir CLAUDE.md § Fusion en « Découverte »).
   * L'hétérogénéité est ici la proposition, pas un défaut : c'est aux titres de cours de
   * porter le sujet, puisque le nom de la matière ne le fait pas.
   */
  { id: "decouverte", name: "Découverte", emoji: "✨", color: "decouverte" },
];

export function getCategory(id: string): Category | undefined {
  return CATEGORIES.find((c) => c.id === id);
}
