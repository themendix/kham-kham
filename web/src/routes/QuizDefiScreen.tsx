import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Zap } from "lucide-react";
import type { QuizEntry } from "@/types";
import { useAppStore } from "@/store/useAppStore";
import { QUIZ_INDEX } from "@/data/quizIndex.generated";
import { buildDailyChallengeQuestions, computeCauris, type GameOutcome } from "@/lib/quizGame";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { QuizGamePlayer } from "@/components/features/QuizGamePlayer";
import { QuizGameOutcome } from "@/components/features/QuizGameOutcome";
import { useCivilDay } from "@/hooks/useCivilDay";
import { localDayKey } from "@/lib/calendar";

const DAILY_CHALLENGE_COURSE_ID = "defi-quotidien";

interface FinishedState {
  day: string;
  outcome: GameOutcome;
  cauris: number;
  missed: QuizEntry[];
  xpBonus: number;
}

/**
 * Défi du jour, désormais dans le module Quiz (`/quiz/defi`).
 *
 * Remplace l'ancien écran `/defi`, qui vivait à côté du module et tirait trois questions au hasard
 * dans tout le catalogue sans jamais tenir compte de ce que l'utilisateur avait raté. Le défi est
 * maintenant la **partie à enjeu quotidienne** du module : cinq questions, les dues en priorité,
 * une seule tentative par jour, bonus d'XP et série.
 *
 * Il n'a besoin que de l'index des questions — l'ancien écran chargeait le contenu complet des
 * quatre matières (le texte de 564 leçons) uniquement pour atteindre leurs quiz.
 */
export function QuizDefiScreen() {
  const navigate = useNavigate();
  const challengeDone = useAppStore((s) => s.progress.daily.challengeDone);
  const checkDailyReset = useAppStore((s) => s.checkDailyReset);
  const recordQuizAnswer = useAppStore((s) => s.recordQuizAnswer);
  const finishDailyChallenge = useAppStore((s) => s.finishDailyChallenge);
  const day = useCivilDay();
  const [roundDay, setRoundDay] = useState(day);
  const [gameId, setGameId] = useState(() => crypto.randomUUID());

  const [finished, setFinished] = useState<FinishedState | null>(null);
  const activeGame = useRef(false);
  // Une partie active conserve tirage/identifiant après minuit. Un écran verrouillé ou un
  // résultat d'hier repart sur un nouveau tirage ; un résultat obtenu aujourd'hui reste visible.
  useEffect(() => {
    if (day !== roundDay && (!activeGame.current || (finished && finished.day !== day))) {
      activeGame.current = false;
      setFinished(null);
      setRoundDay(day);
      setGameId(crypto.randomUUID());
    }
  }, [day, roundDay, finished]);
  useEffect(() => { if (!challengeDone) activeGame.current = true; }, [challengeDone]);

  useEffect(() => {
    void checkDailyReset().catch(() => {});
  }, [day, checkDailyReset]);

  // Tirage figé à l'ouverture : répondre modifie les échéances de révision, et le défi ne doit pas
  // se réécrire sous les doigts de l'utilisateur pendant qu'il le joue.
  const questions = useMemo(
    () =>
      buildDailyChallengeQuestions({
        allQuestions: QUIZ_INDEX,
        stats: useAppStore.getState().progress.quizGame.questions,
        now: new Date(),
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps -- tirage renouvelé uniquement après une partie inactive d'un autre jour
    [roundDay],
  );

  const handleFinish = useCallback(
    async (outcome: GameOutcome, missed: QuizEntry[]) => {
      const result = await finishDailyChallenge(gameId, {
        courseId: DAILY_CHALLENGE_COURSE_ID, score: outcome.correctCount,
        total: questions.length, date: new Date().toISOString(),
      }, computeCauris(outcome));
      setFinished({ day: result.progress.daily.date ?? localDayKey(), outcome, cauris: result.caurisCredited, missed, xpBonus: result.xpCredited });
    }, [questions.length, gameId, finishDailyChallenge],
  );

  if (challengeDone && !finished && !activeGame.current) {
    return (
      <Card className="mx-auto max-w-md p-8 text-center">
        <Zap className="mx-auto h-12 w-12 text-gold" fill="currentColor" aria-hidden />
        <h1 className="mt-3 text-xl font-extrabold">Défi déjà relevé aujourd'hui !</h1>
        <p className="mt-2 font-medium text-ink-muted">
          Reviens demain pour le prochain — en attendant, les territoires restent ouverts.
        </p>
        <Link to="/quiz">
          <Button className="mt-5">Jouer sur un territoire</Button>
        </Link>
      </Card>
    );
  }

  if (questions.length === 0) {
    return (
      <Card className="mx-auto max-w-md p-8 text-center">
        <h1 className="text-xl font-extrabold">Aucune question disponible</h1>
        <Link to="/quiz">
          <Button className="mt-5">Retour au jeu</Button>
        </Link>
      </Card>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="sr-only">Défi du jour</h1>
      <button
        onClick={() => navigate("/quiz")}
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
          xpBonus={finished.xpBonus}
        />
      ) : (
        <QuizGamePlayer
          gameId={gameId}
          questions={questions}
          mode="defi"
          onAnswer={recordQuizAnswer}
          onFinish={handleFinish}
        />
      )}
    </div>
  );
}
