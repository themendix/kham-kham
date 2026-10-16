import { Trophy } from "lucide-react";
import { OutroLayout } from "@/components/features/OutroLayout";

interface QuizOutcomeCardProps {
  score: number;
  total: number;
  primaryLabel: string;
  onPrimary: () => void;
  secondaryLabel: string;
  onSecondary: () => void;
}

function outcomeMessage(score: number, total: number): string {
  const ratio = total === 0 ? 0 : score / total;
  if (ratio === 1) return "Score parfait, bravo !";
  if (ratio >= 0.5) return "Bien joué, continue comme ça !";
  return "Pas grave, tu feras mieux la prochaine fois.";
}

/** Écran 4 (conditionnel) : résultat du quiz, affiché seulement si l'utilisateur a choisi de le faire */
export function QuizOutcomeCard({
  score,
  total,
  primaryLabel,
  onPrimary,
  secondaryLabel,
  onSecondary,
}: QuizOutcomeCardProps) {
  return (
    <OutroLayout
      primaryLabel={primaryLabel}
      onPrimary={onPrimary}
      secondaryLabel={secondaryLabel}
      onSecondary={onSecondary}
    >
      <Trophy className="mx-auto h-12 w-12 text-gold sm:h-16 sm:w-16" />
      <h2 className="mt-3 text-[26px] font-extrabold leading-tight sm:mt-4 sm:text-[34px] md:text-[40px]">
        {score} / {total} bonnes réponses
      </h2>
      <p className="mt-2 font-medium text-ink-muted">{outcomeMessage(score, total)}</p>
    </OutroLayout>
  );
}
