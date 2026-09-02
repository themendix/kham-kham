import { useCallback, useEffect, useRef, useState } from "react";
import { Heart, Timer } from "lucide-react";
import type { QuizEntry, QuizPlayMode } from "@/types";
import { COURSE_INDEX } from "@/data/coursesIndex.generated";
import { BLITZ_DURATION_SECONDS, FAST_ANSWER_MS, SURVIE_LIVES } from "@/lib/quizGame";
import type { GameOutcome } from "@/lib/quizGame";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { QuizOptions } from "@/components/features/QuizOptions";
import { LessonExcerptCard } from "@/components/features/LessonExcerptCard";

const COURSE_TITLES = new Map(COURSE_INDEX.map((c) => [c.id, c.title]));

/** Secondes restantes en dessous desquelles le chronomètre passe en alerte. */
const URGENT_SECONDS = 10;

interface QuizGamePlayerProps {
  questions: QuizEntry[];
  mode: QuizPlayMode;
  /** Appelé à chaque réponse, avant la fin de partie : alimente la révision espacée et l'XP */
  onAnswer: (questionKey: string, isCorrect: boolean) => void;
  /** Appelé une seule fois, en fin de partie, avec le bilan et les questions ratées */
  onFinish: (outcome: GameOutcome, missed: QuizEntry[]) => void;
}

/**
 * Moteur de partie du module Quiz, pour les deux modes.
 *
 * **Blitz** : 60 secondes, autant de bonnes réponses que possible. Le chronomètre **se met en
 * pause pendant la correction** — sans ça, lire la leçon d'une question ratée coûterait du temps
 * de jeu, et le geste que tout le module cherche à encourager deviendrait un piège. Les 60
 * secondes mesurent donc le temps passé à *répondre*, pas le temps au mur.
 *
 * **Survie** : trois vies, pas de chronomètre, la partie s'arrête à la troisième erreur.
 *
 * **Défi du jour** : ni chronomètre ni vies — un nombre fixe de questions, une seule tentative par
 * jour. Sa tension vient de l'unicité de l'essai, pas d'une contrainte pendant la partie.
 *
 * Dans les deux cas, une mauvaise réponse ouvre la leçon sur place (`LessonReveal`) et la question
 * est mémorisée pour l'écran de fin.
 */
export function QuizGamePlayer({ questions, mode, onAnswer, onFinish }: QuizGamePlayerProps) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [fastAnswers, setFastAnswers] = useState(0);
  const [lives, setLives] = useState(SURVIE_LIVES);
  const [missed, setMissed] = useState<QuizEntry[]>([]);
  const [secondsLeft, setSecondsLeft] = useState(BLITZ_DURATION_SECONDS);

  const shownAtRef = useRef(Date.now());
  const hasFinishedRef = useRef(false);

  const question = questions[index];
  const locked = selected !== null;

  const finish = useCallback(
    (finalMissed: QuizEntry[]) => {
      if (hasFinishedRef.current) return;
      hasFinishedRef.current = true;
      onFinish(
        { mode, correctCount, bestStreak, fastAnswers, remainingLives: lives },
        finalMissed,
      );
    },
    [mode, correctCount, bestStreak, fastAnswers, lives, onFinish],
  );

  // Chronomètre du Blitz : suspendu dès qu'une réponse est verrouillée (voir la docstring).
  useEffect(() => {
    if (mode !== "blitz" || locked || hasFinishedRef.current) return;
    const id = setInterval(() => setSecondsLeft((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, [mode, locked]);

  useEffect(() => {
    if (mode === "blitz" && secondsLeft === 0) finish(missed);
  }, [mode, secondsLeft, finish, missed]);

  function handleSelect(optionIndex: number) {
    if (locked || !question) return;
    const elapsed = Date.now() - shownAtRef.current;
    const isCorrect = optionIndex === question.correctIndex;

    setSelected(optionIndex);
    onAnswer(question.key, isCorrect);

    if (isCorrect) {
      // La série se calcule ici, pas dans l'updater de setStreak : appeler un setState depuis
      // l'updater d'un autre est un effet de bord que React peut rejouer (StrictMode), ce qui
      // fausserait la meilleure série — et donc le bonus de cauris.
      const nextStreak = streak + 1;
      setCorrectCount((n) => n + 1);
      setStreak(nextStreak);
      setBestStreak((best) => Math.max(best, nextStreak));
      if (elapsed < FAST_ANSWER_MS) setFastAnswers((n) => n + 1);
    } else {
      setStreak(0);
      setMissed((m) => [...m, question]);
      if (mode === "survie") setLives((l) => l - 1);
    }
  }

  function handleNext() {
    const isLastQuestion = index + 1 >= questions.length;
    if ((mode === "survie" && lives <= 0) || isLastQuestion) {
      finish(missed);
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
    shownAtRef.current = Date.now();
  }

  if (!question) return null;

  const courseTitle = COURSE_TITLES.get(question.courseId) ?? "ce cours";
  const isCorrect = selected === question.correctIndex;
  const questionHeadingId = `jeu-question-${index}`;
  const isGameEndingNext = (mode === "survie" && lives <= 0) || index + 1 >= questions.length;
  const isUrgent = mode === "blitz" && !locked && secondsLeft <= URGENT_SECONDS;

  // La classe n'est posée qu'une fois par question (elle disparaît au déverrouillage suivant),
  // ce qui suffit à relancer l'animation sans remonter le composant ni jouer avec une `key`.
  const feedbackAnimation = !locked ? "" : isCorrect ? "sankofa-breathe" : "sankofa-shake";

  return (
    <Card className={`p-6 md:p-8 ${feedbackAnimation}`}>
      <div className="flex items-center justify-between gap-4">
        {mode === "defi" ? (
          <span className="font-heading text-xs font-bold uppercase tracking-wide text-ink-faint">
            Question {index + 1} / {questions.length}
          </span>
        ) : mode === "blitz" ? (
          <span
            className={`inline-flex items-center gap-1.5 font-heading text-sm font-extrabold ${
              isUrgent ? "text-danger sankofa-urgent" : ""
            }`}
          >
            <Timer className="h-4 w-4" aria-hidden />
            <span aria-label={`${secondsLeft} secondes restantes`}>{secondsLeft} s</span>
          </span>
        ) : (
          <span className="inline-flex items-center gap-1" aria-label={`${lives} vies restantes`}>
            {Array.from({ length: SURVIE_LIVES }, (_, i) => {
              // Les vies sont déjà décrémentées : le cœur d'indice `lives` est celui qu'on vient
              // de perdre. On ne l'anime que sur la réponse fautive en cours.
              const justLost = locked && !isCorrect && i === lives;
              return (
                <Heart
                  key={i}
                  className={`h-5 w-5 ${i < lives ? "text-danger" : "text-ink/20"} ${
                    justLost ? "sankofa-life-lost" : ""
                  }`}
                  fill="currentColor"
                  aria-hidden
                />
              );
            })}
          </span>
        )}

        <span className="font-heading text-sm font-extrabold">
          <span key={correctCount} className="inline-block sankofa-pop">
            {correctCount} bonne{correctCount > 1 ? "s" : ""} réponse{correctCount > 1 ? "s" : ""}
          </span>
          {streak >= 3 && (
            <span key={streak} className="ml-2 inline-block text-primary-text sankofa-pop">
              série ×{streak}
            </span>
          )}
        </span>
      </div>

      {mode === "blitz" && (
        <ProgressBar
          percent={(secondsLeft / BLITZ_DURATION_SECONDS) * 100}
          fillClassName="bg-primary"
        />
      )}
      {mode === "defi" && (
        <ProgressBar percent={(index / questions.length) * 100} fillClassName="bg-indigo" />
      )}

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
          className="relative mt-4 rounded-2xl border-[2.5px] border-ink bg-cream py-3.5 pl-4 pr-3.5"
        >
          {/* Filet vertical : vert pour une bonne réponse, rouge pour une erreur — la couleur du
              verdict est portée par l'accent, pas par le fond, qui reste crème dans les deux cas. */}
          <span
            aria-hidden
            className={`absolute inset-y-3.5 left-0 w-1 rounded ${
              isCorrect ? "bg-success" : "bg-danger"
            }`}
          />
          <p className="text-[13px] font-medium leading-[1.5] text-ink-muted">
            {isCorrect ? "Bonne réponse. " : "Réponse incorrecte. "}
            {question.explanation}
          </p>
          {/* L'extrait de cours n'accompagne que les erreurs : une bonne réponse n'a rien à
              rattraper, et la carte alourdirait la confirmation pour rien. */}
          {!isCorrect && (
            <LessonExcerptCard
              courseId={question.courseId}
              lessonId={question.lessonId}
              courseTitle={courseTitle}
              answer={question.options[question.correctIndex]}
            />
          )}
        </div>
      )}

      <div className="mt-6 flex justify-end">
        <Button variant="primary" onClick={handleNext} disabled={!locked}>
          {isGameEndingNext ? "Voir mon résultat" : "Question suivante →"}
        </Button>
      </div>
    </Card>
  );
}
