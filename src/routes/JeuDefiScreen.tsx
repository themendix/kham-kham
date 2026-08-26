import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Zap } from "lucide-react";
import type { QuizEntry } from "@/types";
import { useAppStore } from "@/store/useAppStore";
import { QUIZ_INDEX } from "@/data/quizIndex.generated";
import { DAILY_CHALLENGE_XP_BONUS } from "@/lib/gamification";
import { buildDailyChallengeQuestions, computeCauris, type GameOutcome } from "@/lib/quizGame";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { QuizGamePlayer } from "@/components/features/QuizGamePlayer";
import { QuizGameOutcome } from "@/components/features/QuizGameOutcome";

const DAILY_CHALLENGE_COURSE_ID = "defi-quotidien";

interface FinishedState {
  outcome: GameOutcome;
  cauris: number;
  missed: QuizEntry[];
}

/**
 * Défi du jour, désormais dans le module Quiz (`/jeu/defi`).
 *
 * Remplace l'ancien écran `/defi`, qui vivait à côté du module et tirait trois questions au hasard
 * dans tout le catalogue sans jamais tenir compte de ce que l'utilisateur avait raté. Le défi est
 * maintenant la **partie à enjeu quotidienne** du module : cinq questions, les dues en priorité,
 * une seule tentative par jour, bonus d'XP et série.
 *
 * Il n'a besoin que de l'index des questions — l'ancien écran chargeait le contenu complet des
 * quatre matières (le texte de 564 leçons) uniquement pour atteindre leurs quiz.
 */
export function JeuDefiScreen() {
  const navigate = useNavigate();
  const challengeDone = useAppStore((s) => s.progress.daily.challengeDone);
  const checkDailyReset = useAppStore((s) => s.checkDailyReset);
  const recordQuizAnswer = useAppStore((s) => s.recordQuizAnswer);
  const finishQuizGame = useAppStore((s) => s.finishQuizGame);
  const recordQuizResult = useAppStore((s) => s.recordQuizResult);
  const addXp = useAppStore((s) => s.addXp);
  const addDailyProgress = useAppStore((s) => s.addDailyProgress);
  const markChallengeDone = useAppStore((s) => s.markChallengeDone);
  const updateStreak = useAppStore((s) => s.updateStreak);

  const [finished, setFinished] = useState<FinishedState | null>(null);

  useEffect(() => {
    checkDailyReset();
  }, [checkDailyReset]);

  // Tirage figé à l'ouverture : répondre modifie les échéances de révision, et le défi ne doit pas
  // se réécrire sous les doigts de l'utilisateur pendant qu'il le joue.
  const questions = useMemo(
    () =>
      buildDailyChallengeQuestions({
        allQuestions: QUIZ_INDEX,
        stats: useAppStore.getState().progress.quizGame.questions,
      }),
    [],
  );

  const handleFinish = useCallback(
    (outcome: GameOutcome, missed: QuizEntry[]) => {
      const cauris = computeCauris(outcome);
      recordQuizResult({
        courseId: DAILY_CHALLENGE_COURSE_ID,
        score: outcome.correctCount,
        total: questions.length,
        date: new Date().toISOString(),
      });
      addXp(DAILY_CHALLENGE_XP_BONUS);
      addDailyProgress({ xp: DAILY_CHALLENGE_XP_BONUS });
      finishQuizGame({ cauris, record: null });
      markChallengeDone();
      updateStreak();
      setFinished({ outcome, cauris, missed });
    },
    [
      questions.length,
      recordQuizResult,
      addXp,
      addDailyProgress,
      finishQuizGame,
      markChallengeDone,
      updateStreak,
    ],
  );

  if (challengeDone && !finished) {
    return (
      <Card className="mx-auto max-w-md p-8 text-center">
        <Zap className="mx-auto h-12 w-12 text-gold" fill="currentColor" aria-hidden />
        <h1 className="mt-3 text-xl font-extrabold">Défi déjà relevé aujourd'hui !</h1>
        <p className="mt-2 font-medium text-ink-muted">
          Reviens demain pour le prochain — en attendant, les territoires restent ouverts.
        </p>
        <Link to="/jeu">
          <Button className="mt-5">Jouer sur un territoire</Button>
        </Link>
      </Card>
    );
  }

  if (questions.length === 0) {
    return (
      <Card className="mx-auto max-w-md p-8 text-center">
        <h1 className="text-xl font-extrabold">Aucune question disponible</h1>
        <Link to="/jeu">
          <Button className="mt-5">Retour au jeu</Button>
        </Link>
      </Card>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="sr-only">Défi du jour</h1>
      <button
        onClick={() => navigate("/jeu")}
        className="mb-3 inline-flex items-center gap-1.5 font-heading text-sm font-bold text-ink-faint"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden /> Retour
      </button>

      {finished ? (
        <QuizGameOutcome
          outcome={finished.outcome}
          cauris={finished.cauris}
          missed={finished.missed}
          territory={null}
          previousRecord={0}
          xpBonus={DAILY_CHALLENGE_XP_BONUS}
        />
      ) : (
        <QuizGamePlayer
          questions={questions}
          mode="defi"
          onAnswer={recordQuizAnswer}
          onFinish={handleFinish}
        />
      )}
    </div>
  );
}
