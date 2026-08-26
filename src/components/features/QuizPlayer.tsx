import { useState } from "react";
import type { QuizQuestion, SubjectColor } from "@/types";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { SUBJECT_BG } from "@/lib/subjectStyles";
import { QuizOptions } from "@/components/features/QuizOptions";

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

      <QuizOptions
        options={question.options}
        correctIndex={question.correctIndex}
        selected={selected}
        onSelect={handleSelect}
        labelledBy={questionHeadingId}
      />

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
