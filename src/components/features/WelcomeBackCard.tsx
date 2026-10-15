import { Hand } from "lucide-react";
import { Card } from "@/components/ui/Card";

interface WelcomeBackCardProps {
  daysAway: number;
  previousCount: number;
}

/**
 * Accueil après une absence, sans modifier la série lors d'une simple visite.
 * `getStreakBreak` fournit la durée d'absence ; seule une leçon ou un quiz terminé
 * enregistre une nouvelle activité.
 */
export function WelcomeBackCard({ daysAway, previousCount }: WelcomeBackCardProps) {
  return (
    <Card shadow="sm" className="flex items-center gap-4 bg-gold p-4">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-[2.5px] border-ink bg-card">
        <Hand className="h-[22px] w-[22px]" />
      </div>
      <div className="min-w-0">
        <h2 className="font-extrabold">Content de te revoir !</h2>
        <p className="text-sm font-medium text-ink-muted">
          Ça faisait {daysAway} jours. Ta série de {previousCount}{" "}
          {previousCount > 1 ? "jours" : "jour"} est en pause — reprends une leçon pour repartir.
        </p>
      </div>
    </Card>
  );
}
