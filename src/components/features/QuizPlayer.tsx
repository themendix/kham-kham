import { NativeBox, NativeH2 } from "@/native/elements";
import { useLayoutEffect, useRef, useState } from "react";
import type { QuizQuestion, SubjectColor } from "@/types";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { SUBJECT_BG } from "@/lib/subjectStyles";
import { QuizOptions } from "@/components/features/QuizOptions";
import { HistoryQuizQuestion } from "@/components/features/HistoryQuiz";
import { scrollToTop } from "@/native/scroll";
interface QuizPlayerProps {
    questions: QuizQuestion[];
    accentColor: SubjectColor;
    onFinish: (score: number, total: number) => void | Promise<unknown>;
}
/** Quiz interactif : une question à la fois, verrouillage au clic, correction et explication */
export function QuizPlayer({ questions, accentColor, onFinish }: QuizPlayerProps) {
    const [index, setIndex] = useState(0);
    const [selected, setSelected] = useState<number | null>(null);
    const [score, setScore] = useState(0);
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(false);
    const pendingRef = useRef(false);
    const finishedRef = useRef(false);
    const selectionRef = useRef<number | null>(null);
    const question = questions[index];
    const locked = selected !== null;
    const isLast = index === questions.length - 1;
    function handleSelect(optionIndex: number) {
        if (selectionRef.current !== null)
            return;
        selectionRef.current = optionIndex;
        setSelected(optionIndex);
        if (optionIndex === question.correctIndex)
            setScore((s) => s + 1);
    }
    async function handleNext() {
        if (pendingRef.current || finishedRef.current || selectionRef.current === null)
            return;
        if (isLast) {
            pendingRef.current = true;
            setPending(true);
            setError(false);
            try {
                await onFinish(score, questions.length);
                finishedRef.current = true;
            }
            catch {
                setError(true);
            }
            finally {
                pendingRef.current = false;
                setPending(false);
            }
            return;
        }
        setIndex((i) => i + 1);
        selectionRef.current = null;
        setSelected(null);
    }
    useLayoutEffect(() => {
        if (accentColor === "histoire") scrollToTop();
    }, [index, accentColor]);
    const questionHeadingId = `quiz-question-${index}`;
    if (accentColor === "histoire") {
        return <HistoryQuizQuestion question={question} index={index} total={questions.length} selected={selected} pending={pending} error={error} onSelect={handleSelect} onNext={handleNext}/>;
    }
    return (<Card className="p-6 md:p-8">
      <NativeBox className="font-heading text-xs font-bold uppercase tracking-wide text-ink-faint">
        Question {index + 1} / {questions.length}
      </NativeBox>
      <ProgressBar percent={(index / questions.length) * 100} fillClassName={SUBJECT_BG[accentColor]}/>

      <NativeH2 id={questionHeadingId} className="mt-5 text-xl font-extrabold leading-tight">
        {question.question}
      </NativeH2>

      <QuizOptions options={question.options} correctIndex={question.correctIndex} selected={selected} onSelect={handleSelect} labelledBy={questionHeadingId}/>

      {locked && (<NativeBox role="status" aria-live="polite" className="mt-4 rounded-2xl border-[2.5px] border-ink bg-cream p-4 text-sm font-medium leading-relaxed text-ink-muted">
          {selected === question.correctIndex ? "Bonne réponse. " : "Réponse incorrecte. "}
          {question.explanation}
        </NativeBox>)}

      <NativeBox className="mt-6 flex justify-end">
        <Button variant="primary" onClick={handleNext} disabled={!locked || pending}>
          {error ? "Réessayer" : isLast ? "Voir mon résultat" : "Question suivante →"}
        </Button>
      </NativeBox>
    </Card>);
}
