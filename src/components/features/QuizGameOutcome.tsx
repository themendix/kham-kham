import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Flame, RotateCcw, Trophy } from "lucide-react";
import type { QuizEntry, SubjectColor } from "@/types";
import type { GameOutcome } from "@/lib/quizGame";
import type { Territory } from "@/lib/territories";
import { CONQUEST_STARS } from "@/lib/conquest";
import { CATEGORIES } from "@/data/categories";
import { COURSE_INDEX } from "@/data/coursesIndex.generated";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
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
  /** Étoiles du territoire **après** cette partie (0 à 3) ; absent pour le Défi du jour */
  stars?: number;
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

/** Tuile de statistique de fin de partie : un chiffre, un libellé. */
function StatTile({
  value,
  label,
  tone = "card",
  span,
}: {
  value: React.ReactNode;
  label: string;
  tone?: "card" | "gold";
  span?: boolean;
}) {
  return (
    <Card
      shadow="sm"
      className={`p-3 text-center ${tone === "gold" ? "bg-gold" : ""} ${span ? "col-span-2" : ""}`}
    >
      <div className="flex items-center justify-center gap-1.5 font-heading text-xl font-extrabold">
        {value}
      </div>
      <div
        className={`mt-0.5 font-heading text-[11px] font-extrabold ${
          tone === "gold" ? "text-ink" : "text-ink-faint"
        }`}
      >
        {label}
      </div>
    </Card>
  );
}

/**
 * Écran de fin de partie du module Quiz.
 *
 * **En-tête sans carte ni bandeau** : le fond crème de l'écran, une médaille or et le score en
 * rouge. Un aplat de couleur pleine largeur écrasait tout ce qui suit.
 *
 * **Le bilan en grille 2×2** plutôt qu'en ruban de pastilles : quatre chiffres de même poids
 * visuel, lisibles d'un coup d'œil, au lieu d'une ligne qui s'enroule différemment à chaque partie.
 *
 * **« À revoir » en carrousel** : chaque question ratée est une carte, et taper une carte déplie la
 * leçon qui répond **sous** le carrousel — même geste que la carte de conquête (on choisit en haut,
 * le détail s'affiche en dessous). C'est délibérément un **lot** plutôt qu'une interruption au fil
 * de la partie : trois ou quatre leçons proposées d'un coup pèsent plus qu'un renvoi isolé, et
 * l'utilisateur choisit celles qui l'intéressent.
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
  stars,
  xpBonus,
  onReplay,
}: QuizGameOutcomeProps) {
  const isNewRecord = territory !== null && outcome.correctCount > previousRecord;
  const [selectedKey, setSelectedKey] = useState<string | null>(null);

  // Le score monte, puis les cauris tombent : deux temps plutôt qu'un seul, pour que l'œil ait le
  // temps de lire le résultat avant qu'on annonce la récompense.
  const animatedScore = useCountUp(outcome.correctCount, 850, 300);
  const animatedCauris = useCountUp(cauris, 700, 950);

  const selected = missed.find((entry) => entry.key === selectedKey) ?? null;

  return (
    <div className="mx-auto max-w-2xl">
      {/* Zone d'en-tête sans carte ni bandeau de couleur : le fond crème de l'écran suffit. La
          médaille et le score en rouge portent seuls la célébration — un aplat de couleur pleine
          largeur écrasait tout ce qui vient ensuite. */}
      <div className="px-5 pb-[22px] pt-6 text-center sankofa-rise">
        <div className="mx-auto grid h-[76px] w-[76px] place-items-center rounded-full border-[3px] border-ink bg-gold shadow-sm">
          <Trophy className="h-8 w-8 text-ink" aria-hidden />
        </div>
        <h2 className="mt-3 text-[22px] font-extrabold">{outcomeHeadline(outcome, isNewRecord)}</h2>
        <p className="mt-[3px] text-[13px] font-medium text-ink-faint">
          {territory
            ? `${territory.emoji} ${territory.name} · ${outcome.mode === "blitz" ? "Blitz" : "Survie"}`
            : "⚡ Défi du jour — reviens demain pour le prochain"}
        </p>

        <p className="mt-4 font-heading text-[52px] font-extrabold leading-none text-primary tabular-nums">
          {animatedScore}
        </p>
        <p className="mt-1 font-heading text-[11px] font-extrabold uppercase tracking-[0.06em] text-ink-faint">
          bonne{outcome.correctCount > 1 ? "s" : ""} réponse{outcome.correctCount > 1 ? "s" : ""}
        </p>
      </div>

      <div
        className="grid grid-cols-2 gap-2.5 sankofa-rise"
        style={{ animationDelay: "700ms" }}
      >
        <StatTile value={<span className="text-primary-text">＋{animatedCauris}</span>} label="cauris" />
        <StatTile
          value={
            <>
              <Flame className="h-[18px] w-[18px] text-flame" aria-hidden />
              {outcome.bestStreak}
            </>
          }
          label="série max"
        />
        {xpBonus !== undefined && (
          <StatTile
            value={<span className="text-primary-text">＋{xpBonus}</span>}
            label="XP gagnés"
            span={territory === null}
          />
        )}
        {territory && (
          <>
            <StatTile value={previousRecord} label="ancien record" />
            {stars !== undefined && (
              <StatTile
                tone="gold"
                value={
                  <span aria-label={`${stars} étoile${stars > 1 ? "s" : ""} sur ${CONQUEST_STARS}`}>
                    {"★".repeat(stars)}
                    {"☆".repeat(CONQUEST_STARS - stars)}
                  </span>
                }
                label="territoire"
              />
            )}
          </>
        )}
      </div>

      <div className="mt-3.5 flex flex-col gap-2.5 sankofa-rise" style={{ animationDelay: "950ms" }}>
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

      {missed.length > 0 && (
        <div className="mt-5 sankofa-rise" style={{ animationDelay: "1150ms" }}>
          <h3 className="inline-flex items-center gap-2 text-[15px] font-extrabold">
            <BookOpen className="h-4 w-4" aria-hidden />À revoir
          </h3>
          <p className="mt-1 text-[13px] font-medium text-ink-muted">
            {missed.length} question{missed.length > 1 ? "s" : ""} t'
            {missed.length > 1 ? "ont" : "a"} échappé — touche une carte pour lire la leçon qui
            répond.
          </p>

          <ul className="scrollbar-none mt-2.5 flex gap-3 overflow-x-auto pb-1.5">
            {missed.map((entry) => {
              const isSelected = entry.key === selectedKey;
              return (
                <li key={entry.key} className="flex-none">
                  <button
                    onClick={() => setSelectedKey(isSelected ? null : entry.key)}
                    aria-pressed={isSelected}
                    className={`h-full w-[210px] rounded-card border-[3px] bg-card p-3.5 text-left shadow-sm transition-transform active:translate-y-[3px] active:shadow-none ${
                      isSelected ? "border-primary" : "border-ink"
                    }`}
                  >
                    <p className="text-[13px] font-bold leading-[1.3]">{entry.question}</p>
                    <p className="mt-2 text-xs font-medium text-ink-muted">
                      Réponse : {entry.options[entry.correctIndex]}
                    </p>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* La leçon s'ouvre sous le carrousel, jamais dans une carte de 210 px : même schéma que
              la carte de conquête — on choisit en haut, le détail s'affiche en dessous. */}
          {selected && (
            <LessonReveal
              key={selected.key}
              defaultOpen
              courseId={selected.courseId}
              lessonId={selected.lessonId}
              courseTitle={COURSE_TITLES.get(selected.courseId) ?? "ce cours"}
              accent={(CATEGORY_COLORS.get(selected.categoryId) ?? "decouverte") as SubjectColor}
            />
          )}
        </div>
      )}
    </div>
  );
}
