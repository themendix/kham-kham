import type { Category } from "@/types";

export const CATEGORIES: Category[] = [
  { id: "histoire", name: "Histoire", emoji: "🏛️", color: "histoire" },
  { id: "geo", name: "Géographie", emoji: "🗺️", color: "geo" },
  { id: "perso", name: "Personnalités", emoji: "👤", color: "perso" },
  { id: "arts", name: "Arts & Musique", emoji: "🎶", color: "arts" },
  { id: "trad", name: "Traditions & Sociétés", emoji: "🪘", color: "trad" },
  { id: "actu", name: "Afrique contemporaine", emoji: "🌍", color: "actu" },
];

export function getCategory(id: string): Category | undefined {
  return CATEGORIES.find((c) => c.id === id);
}
