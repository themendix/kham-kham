import { Link } from "react-router-dom";
import { BookOpen, RotateCcw, Trophy } from "lucide-react";
import type { QuizEntry, SubjectColor } from "@/types";
import type { GameOutcome } from "@/lib/quizGame";
import type { Territory } from "@/lib/territories";
import { CATEGORIES } from "@/data/categories";
import { COURSE_INDEX } from "@/data/coursesIndex.generated";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { LessonReveal } from "@/components/features/LessonReveal";
import { useCountUp } from "@/hooks/useCountUp";

const COURSE_TITLES = new Map(COURSE_INDEX.map((c) => [c.id, c.title]));
const CATEGORY_COLORS = new Map(CATEGORIES.map((c) => [c.id, c.color]));

interface QuizGameOutcomeProps {
  outcome: GameOutcome;
  cauris: number;
  /** Questions ratées pendant la partie, dans l'ordre où elles sont tombées */
  missed: QuizEntry[];
  /** Territoire joué, ou `null` pour le Défi du jour, qui n'appartient à aucun territoire */
  territory: Territory | null;
  /** Record du territoire pour ce mode **avant** cette partie */
  previousRecord: number;
  /** Bonus d'XP à afficher en plus des cauris (Défi du jour) */
  xpBonus?: number;
  /** Absent pour le Défi du jour : une seule tentative par jour, donc pas de « Rejouer » */
  onReplay?: () => void;
}

function outcomeHeadline(outcome: GameOutcome, isNewRecord: boolean): string {
  if (outcome.mode === "defi") return "Défi relevé !";
  if (isNewRecord) return "Nouveau record !";
  if (outcome.correctCount === 0) return "La prochaine sera la bonne";
  if (outcome.mode === "survie" && outcome.remainingLives === 3) return "Sans une seule erreur !";
  return "Partie terminée";
}

/**
 * Écran de fin de partie du module Quiz.
 *
 * Il porte l'aiguillage vers le contenu : la section « Ce que tu peux aller voir » liste chaque
 * question ratée avec sa leçon, dépliable sur place. C'est délibérément un **lot** plutôt qu'une
 * interruption au fil de la partie — trois ou quatre leçons proposées d'un coup pèsent plus qu'un
 * renvoi isolé, et l'utilisateur choisit celles qui l'intéressent.
 *
 * Le score annoncé est le nombre de bonnes réponses, comparable d'une partie à l'autre et d'un
 * mode à l'autre ; les cauris, eux, dépendent du mode (vitesse en Blitz, vies restantes en Survie).
 */
export function QuizGameOutcome({
  outcome,
  cauris,
  missed,
  territory,
  previousRecord,
  xpBonus,
  onReplay,
}: QuizGameOutcomeProps) {
  const isNewRecord = territory !== null && outcome.correctCount > previousRecord;

  // Le score monte, puis les cauris tombent : deux temps plutôt qu'un seul, pour que l'œil ait le
  // temps de lire le résultat avant qu'on annonce la récompense.
  const animatedScore = useCountUp(outcome.correctCount, 850, 300);
  const animatedCauris = useCountUp(cauris, 700, 950);

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-5">
      <Card className="p-8 text-center sankofa-rise">
        <Trophy className="mx-auto h-12 w-12 text-gold" aria-hidden />
        <h2 className="mt-3 text-2xl font-extrabold">{outcomeHeadline(outcome, isNewRecord)}</h2>
        <p className="mt-1.5 font-medium text-ink-muted">
          {territory
            ? `${territory.emoji} ${territory.name} · ${outcome.mode === "blitz" ? "Blitz" : "Survie"}`
            : "⚡ Défi du jour — reviens demain pour le prochain"}
        </p>

        <p className="mt-5 font-heading text-5xl font-extrabold tabular-nums">{animatedScore}</p>
        <p className="mt-1 font-heading text-xs font-bold uppercase tracking-wide text-ink-faint">
          bonne{outcome.correctCount > 1 ? "s" : ""} réponse{outcome.correctCount > 1 ? "s" : ""}
        </p>

        <div
          className="mt-5 flex flex-wrap justify-center gap-2.5 sankofa-rise"
          style={{ animationDelay: "700ms" }}
        >
          {xpBonus !== undefined && <Badge tone="gold">＋{xpBonus} XP</Badge>}
          <Badge tone="gold">＋{animatedCauris} cauris</Badge>
          {outcome.bestStreak >= 3 && <Badge>série de {outcome.bestStreak}</Badge>}
          {territory && !isNewRecord && previousRecord > 0 && (
            <Badge>record : {previousRecord}</Badge>
          )}
        </div>

        <div className="mt-6 flex flex-col gap-3 sankofa-rise" style={{ animationDelay: "950ms" }}>
          {onReplay && (
            <Button size="lg" onClick={onReplay}>
              <RotateCcw className="h-4 w-4" aria-hidden /> Rejouer
            </Button>
          )}
          <Link to="/quiz" className="w-full">
            <Button size="lg" variant={onReplay ? "secondary" : "primary"}>
              {territory ? "Changer de territoire" : "Aller au quiz"}
            </Button>
          </Link>
        </div>
      </Card>

      {missed.length > 0 && (
        <Card className="p-6 md:p-8 sankofa-rise" shadow="sm" style={{ animationDelay: "1150ms" }}>
          <h3 className="inline-flex items-center gap-2 text-lg font-extrabold">
            <BookOpen className="h-5 w-5" aria-hidden />
            Ce que tu peux aller voir
          </h3>
          <p className="mt-1 font-medium text-ink-muted">
            {missed.length} question{missed.length > 1 ? "s" : ""} t'{missed.length > 1 ? "ont" : "a"}{" "}
            échappé — voici où se trouve la réponse.
          </p>

          <ul className="mt-4 flex flex-col gap-4">
            {missed.map((entry) => (
              <li key={entry.key} className="border-t-[2.5px] border-ink/10 pt-4 first:border-0 first:pt-0">
                <p className="font-bold leading-snug">{entry.question}</p>
                <p className="mt-1 text-sm font-medium text-ink-muted">
                  Réponse : {entry.options[entry.correctIndex]}
                </p>
                <LessonReveal
                  courseId={entry.courseId}
                  lessonId={entry.lessonId}
                  courseTitle={COURSE_TITLES.get(entry.courseId) ?? "ce cours"}
                  accent={(CATEGORY_COLORS.get(entry.categoryId) ?? "decouverte") as SubjectColor}
                />
              </li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
}
