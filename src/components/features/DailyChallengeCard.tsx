import { Zap, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { DAILY_CHALLENGE_XP_BONUS } from "@/lib/gamification";

interface DailyChallengeCardProps {
  done: boolean;
  onStart: () => void;
}

/**
 * Carte d'accroche du Défi du jour sur le Home. Depuis l'absorption du défi par le module Quiz,
 * elle est un **raccourci** vers `/jeu/defi` : le Home garde son point d'entrée quotidien, mais le
 * quiz ne vit plus qu'à un seul endroit.
 */
export function DailyChallengeCard({ done, onStart }: DailyChallengeCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="flex flex-col gap-4 bg-gradient-to-br from-indigo to-[#5c4b9e] p-5 text-white md:flex-row md:items-center md:justify-between md:p-6">
        <div className="flex items-center gap-3.5">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-[2.5px] border-ink bg-gold text-ink">
            <Zap className="h-6 w-6" fill="currentColor" />
          </div>
          <div>
            <h3 className="text-lg font-extrabold">Défi du jour — Quiz éclair</h3>
            <p className="text-sm font-medium text-white/85">
              5 questions, dont celles que tu as ratées. Une seule tentative par jour.
            </p>
          </div>
        </div>

        {done ? (
          <Badge tone="gold">
            <CheckCircle2 className="h-3.5 w-3.5" /> Défi relevé ✓ — reviens demain
          </Badge>
        ) : (
          <Button variant="secondary" onClick={onStart} className="shrink-0">
            Jouer (＋{DAILY_CHALLENGE_XP_BONUS} XP)
          </Button>
        )}
      </div>
    </Card>
  );
}
