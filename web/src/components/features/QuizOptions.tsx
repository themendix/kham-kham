import { Check, X } from "lucide-react";

/**
 * Liste de réponses d'une question à choix multiple : verrouillage au clic, correction colorée,
 * état annoncé aux lecteurs d'écran (`radiogroup` / `radio`).
 *
 * Partagée par le quiz de fin de cours (`QuizPlayer`) et par le moteur de partie du module Quiz
 * (`QuizGamePlayer`) : deux flux très différents — l'un paginé et sans contrainte de temps,
 * l'autre chronométré et à vies — mais exactement le même geste de réponse. Extraire cette liste
 * évite d'entretenir deux fois les mêmes règles d'accessibilité et le même code couleur.
 */
interface QuizOptionsProps {
  options: string[];
  correctIndex: number;
  /** Index choisi, ou `null` tant que l'utilisateur n'a pas répondu */
  selected: number | null;
  onSelect: (optionIndex: number) => void;
  /** id de l'intitulé de la question, pour `aria-labelledby` */
  labelledBy: string;
}

function optionClassName(
  optionIndex: number,
  correctIndex: number,
  selected: number | null,
): string {
  if (selected === null) return "border-ink bg-card";
  if (optionIndex === correctIndex) return "border-success bg-success/15";
  if (optionIndex === selected) return "border-danger bg-danger/15";
  return "border-ink/30 bg-card text-ink/50";
}

export function QuizOptions({
  options,
  correctIndex,
  selected,
  onSelect,
  labelledBy,
}: QuizOptionsProps) {
  const locked = selected !== null;

  return (
    <div role="radiogroup" aria-labelledby={labelledBy} className="mt-4 flex flex-col gap-3">
      {options.map((option, optionIndex) => {
        const isCorrectOption = optionIndex === correctIndex;
        const isSelectedOption = optionIndex === selected;
        const stateSuffix = !locked
          ? ""
          : isCorrectOption
            ? ", bonne réponse"
            : isSelectedOption
              ? ", ta réponse, incorrecte"
              : "";
        return (
          <button
            key={optionIndex}
            role="radio"
            aria-checked={isSelectedOption}
            aria-label={`${option}${stateSuffix}`}
            onClick={() => onSelect(optionIndex)}
            disabled={locked}
            className={`flex items-center justify-between rounded-2xl border-[3px] px-4 py-3.5 text-left font-bold shadow-sm transition-transform ${
              locked ? "" : "active:translate-y-[3px] active:shadow-none"
            } ${optionClassName(optionIndex, correctIndex, selected)}`}
          >
            {option}
            {locked && isCorrectOption && <Check className="h-5 w-5 text-success" aria-hidden />}
            {locked && isSelectedOption && !isCorrectOption && (
              <X className="h-5 w-5 text-danger" aria-hidden />
            )}
          </button>
        );
      })}
    </div>
  );
}
