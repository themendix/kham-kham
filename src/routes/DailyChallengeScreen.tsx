import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Trophy, Zap } from "lucide-react";
import { useAppStore } from "@/store/useAppStore";
import { useCatalogContent } from "@/hooks/useCatalogContent";
import { DAILY_CHALLENGE_XP_BONUS } from "@/lib/gamification";
import { pickDailyQuestions } from "@/lib/daily";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { QuizPlayer } from "@/components/features/QuizPlayer";

const DAILY_CHALLENGE_QUESTION_COUNT = 3;
const DAILY_CHALLENGE_COURSE_ID = "defi-quotidien";

/** Écran du Défi du jour : 3 questions tirées de l'ensemble des cours, stables sur la journée */
export function DailyChallengeScreen() {
  const navigate = useNavigate();
  const progress = useAppStore((s) => s.progress);
  const checkDailyReset = useAppStore((s) => s.checkDailyReset);
  const addXp = useAppStore((s) => s.addXp);
  const addDailyProgress = useAppStore((s) => s.addDailyProgress);
  const markChallengeDone = useAppStore((s) => s.markChallengeDone);
  const recordQuizResult = useAppStore((s) => s.recordQuizResult);
  const updateStreak = useAppStore((s) => s.updateStreak);

  const [result, setResult] = useState<{ score: number; total: number } | null>(null);

  useEffect(() => {
    checkDailyReset();
  }, [checkDailyReset]);

  // Les questions sont tirées de l'ensemble du catalogue (94 cours) : contrairement à l'ouverture
  // d'un seul cours ou d'une seule leçon, ce tirage a besoin du contenu complet de toutes les
  // matières. Chargé en tâche de fond (`useCatalogContent`, déclenché au montage de `AppShell`) ;
  // cet écran attend simplement que le préchargement aboutisse.
  const catalogContent = useCatalogContent();
  const questions = useMemo(
    () => (catalogContent ? pickDailyQuestions(catalogContent.flatMap((c) => c.quiz), DAILY_CHALLENGE_QUESTION_COUNT) : null),
    [catalogContent],
  );

  if (progress.daily.challengeDone && !result) {
    return (
      <div className="mx-auto max-w-md rounded-card border-[3px] border-ink bg-card p-8 text-center shadow-card">
        <Zap className="mx-auto h-12 w-12 text-gold" fill="currentColor" />
        <h3 className="mt-3 text-xl font-extrabold">Défi déjà relevé aujourd'hui !</h3>
        <p className="mt-2 font-medium text-ink-muted">Reviens demain pour un nouveau défi.</p>
        <Link to="/">
          <Button className="mt-5">Retour au Home</Button>
        </Link>
      </div>
    );
  }

  if (!questions) {
    return (
      <div className="mx-auto max-w-md rounded-card border-[3px] border-ink bg-card p-8 text-center shadow-card">
        <p className="font-medium text-ink-faint">Chargement…</p>
      </div>
    );
  }

  function handleFinish(score: number, total: number) {
    recordQuizResult({ courseId: DAILY_CHALLENGE_COURSE_ID, score, total, date: new Date().toISOString() });
    addXp(DAILY_CHALLENGE_XP_BONUS);
    addDailyProgress({ xp: DAILY_CHALLENGE_XP_BONUS });
    markChallengeDone();
    updateStreak();
    setResult({ score, total });
  }

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="sr-only">Défi du jour</h1>
      <button
        onClick={() => navigate(-1)}
        className="mb-3 inline-flex items-center gap-1.5 font-heading text-sm font-bold text-ink-faint"
      >
        <ArrowLeft className="h-4 w-4" /> Retour
      </button>

      {result ? (
        <Card className="p-8 text-center">
          <Trophy className="mx-auto h-12 w-12 text-gold" />
          <h2 className="mt-3 text-2xl font-extrabold">
            {result.score} / {result.total} bonnes réponses
          </h2>
          <p className="mt-1.5 font-medium text-ink-muted">Défi relevé, à demain pour le prochain !</p>
          <div className="mt-4 flex justify-center">
            <Badge tone="gold">＋{DAILY_CHALLENGE_XP_BONUS} XP</Badge>
          </div>
          <Link to="/">
            <Button className="mt-5">Retour au Home</Button>
          </Link>
        </Card>
      ) : (
        <QuizPlayer questions={questions} accentColor="decouverte" onFinish={handleFinish} />
      )}
    </div>
  );
}
