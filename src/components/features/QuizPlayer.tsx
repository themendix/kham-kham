import { useState } from "react";
import { Check, X } from "lucide-react";
import type { QuizQuestion, SubjectColor } from "@/types";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { SUBJECT_BG } from "@/lib/subjectStyles";

interface QuizPlayerProps {
  questions: QuizQuestion[];
  accentColor: SubjectColor;
  onFinish: (score: number, total: number) => void;
}

/** Quiz interactif : une question à la fois, verrouillage au clic, correction et explication */
export function QuizPlayer({ questions, accentColor, onFinish }: QuizPlayerProps) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const question = questions[index];
  const locked = selected !== null;
  const isLast = index === questions.length - 1;

  function handleSelect(optionIndex: number) {
    if (locked) return;
    setSelected(optionIndex);
    if (optionIndex === question.correctIndex) setScore((s) => s + 1);
  }

  function handleNext() {
    if (isLast) {
      onFinish(score, questions.length);
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
  }

  function optionClassName(optionIndex: number): string {
    if (!locked) return "border-ink bg-card";
    if (optionIndex === question.correctIndex) return "border-success bg-success/15";
    if (optionIndex === selected) return "border-danger bg-danger/15";
    return "border-ink/30 bg-card text-ink/50";
  }

  const questionHeadingId = `quiz-question-${index}`;

  return (
    <Card className="p-6 md:p-8">
      <div className="font-heading text-xs font-bold uppercase tracking-wide text-ink-faint">
        Question {index + 1} / {questions.length}
      </div>
      <ProgressBar percent={(index / questions.length) * 100} fillClassName={SUBJECT_BG[accentColor]} />

      <h2 id={questionHeadingId} className="mt-5 text-xl font-extrabold leading-tight">
        {question.question}
      </h2>

      <div role="radiogroup" aria-labelledby={questionHeadingId} className="mt-4 flex flex-col gap-3">
        {question.options.map((option, optionIndex) => {
          const isCorrectOption = optionIndex === question.correctIndex;
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
              onClick={() => handleSelect(optionIndex)}
              disabled={locked}
              className={`flex items-center justify-between rounded-2xl border-[3px] px-4 py-3.5 text-left font-bold shadow-sm transition-transform ${
                locked ? "" : "active:translate-y-[3px] active:shadow-none"
              } ${optionClassName(optionIndex)}`}
            >
              {option}
              {locked && isCorrectOption && <Check className="h-5 w-5 text-success" aria-hidden />}
              {locked && isSelectedOption && !isCorrectOption && <X className="h-5 w-5 text-danger" aria-hidden />}
            </button>
          );
        })}
      </div>

      {locked && (
        <div
          role="status"
          aria-live="polite"
          className="mt-4 rounded-2xl border-[2.5px] border-ink bg-cream p-4 text-sm font-medium leading-relaxed text-ink-muted"
        >
          {selected === question.correctIndex ? "Bonne réponse. " : "Réponse incorrecte. "}
          {question.explanation}
        </div>
      )}

      <div className="mt-6 flex justify-end">
        <Button variant="primary" onClick={handleNext} disabled={!locked}>
          {isLast ? "Voir mon résultat" : "Question suivante →"}
        </Button>
      </div>
    </Card>
  );
}
