import { Link } from "react-router-dom";
import { Heart, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/Card";

interface FavoritesSummaryCardProps {
  courseCount: number;
  cardCount: number;
}

function favoritesSubtitle(courseCount: number, cardCount: number): string {
  if (courseCount === 0 && cardCount === 0) return "Aucun favori pour l'instant";
  const parts: string[] = [];
  if (courseCount > 0) parts.push(`${courseCount} cours`);
  if (cardCount > 0) parts.push(`${cardCount} carte${cardCount > 1 ? "s" : ""}`);
  const total = courseCount + cardCount;
  return `${parts.join(" · ")} sauvegardé${total > 1 ? "s" : ""}`;
}

/** Résumé cliquable des favoris (Profil), ouvre la liste complète sur /favoris */
export function FavoritesSummaryCard({ courseCount, cardCount }: FavoritesSummaryCardProps) {
  return (
    <Link to="/favoris">
      <Card shadow="sm" className="flex items-center gap-4 p-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-[2.5px] border-ink bg-arts">
          <Heart className="h-[22px] w-[22px]" fill="currentColor" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-extrabold">Mes favoris</h3>
          <p className="truncate text-sm font-medium text-ink-faint">
            {favoritesSubtitle(courseCount, cardCount)}
          </p>
        </div>
        <ChevronRight className="h-5 w-5 shrink-0 text-ink-faint" />
      </Card>
    </Link>
  );
}
