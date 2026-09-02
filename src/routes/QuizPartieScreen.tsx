import { useCallback, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import type { QuizEntry, QuizGameMode } from "@/types";
import { useAppStore } from "@/store/useAppStore";
import { QUIZ_INDEX } from "@/data/quizIndex.generated";
import { getTerritory, TERRITORY_IDS, type TerritoryId } from "@/lib/territories";
import { getTerritoryConquest } from "@/lib/conquest";
import { QUIZ_KEYS_BY_TERRITORY } from "@/data/quizKeys.generated";
import { buildGameQuestions, computeCauris, type GameOutcome } from "@/lib/quizGame";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { QuizGamePlayer } from "@/components/features/QuizGamePlayer";
import { QuizGameOutcome } from "@/components/features/QuizGameOutcome";

const MODES: QuizGameMode[] = ["blitz", "survie"];

function isTerritoryId(value: string | undefined): value is TerritoryId {
  return value !== undefined && (TERRITORY_IDS as string[]).includes(value);
}

function isMode(value: string | undefined): value is QuizGameMode {
  return value !== undefined && (MODES as string[]).includes(value);
}

interface FinishedState {
  outcome: GameOutcome;
  cauris: number;
  missed: QuizEntry[];
  previousRecord: number;
  /** Étoiles du territoire une fois cette partie enregistrée */
  stars: number;
}

/** Une partie du module Quiz : `/quiz/:territoryId/:mode`. */
export function QuizPartieScreen() {
  const navigate = useNavigate();
  const { territoryId, mode } = useParams();

  const records = useAppStore((s) => s.progress.quizGame.records);
  const recordQuizAnswer = useAppStore((s) => s.recordQuizAnswer);
  const finishQuizGame = useAppStore((s) => s.finishQuizGame);
  const updateStreak = useAppStore((s) => s.updateStreak);

  // Incrémenté par « Rejouer » : c'est ce qui redéclenche un tirage de questions. Les
  // statistiques de révision ayant changé entre-temps, la nouvelle partie n'est pas la même.
  const [round, setRound] = useState(0);
  const [finished, setFinished] = useState<FinishedState | null>(null);

  const isValid = isTerritoryId(territoryId) && isMode(mode);

  // Le tirage ne doit pas se rejouer à chaque réponse : les statistiques changent à chaque
  // question répondue. On les lit donc ponctuellement (`getState`) au lieu de s'y abonner, pour
  // que la partie garde le tirage décidé à son ouverture.
  const questions = useMemo(
    () =>
      isValid
        ? buildGameQuestions({
            mode,
            territoryId,
            allQuestions: QUIZ_INDEX,
            stats: useAppStore.getState().progress.quizGame.questions,
          })
        : [],
    // eslint-disable-next-line react-hooks/exhaustive-deps -- volontaire : un nouveau tirage seulement au changement de partie
    [isValid, mode, territoryId, round],
  );

  const handleFinish = useCallback(
    (outcome: GameOutcome, missed: QuizEntry[]) => {
      if (!isValid) return;
      const cauris = computeCauris(outcome);
      const previousRecord = records[territoryId]?.[mode] ?? 0;
      finishQuizGame({
        cauris,
        record: { territoryId, mode, score: outcome.correctCount },
      });
      // Jouer est une activité du jour comme lire une leçon. Le reste du suivi quotidien
      // (objectif, défi) est branché au lot suivant, avec l'absorption du Défi du jour.
      updateStreak();
      // Les étoiles se lisent **après** l'enregistrement de la partie : c'est justement ce qu'elle
      // vient de changer (record, questions acquises). D'où un `getState()` ponctuel plutôt qu'un
      // abonnement, comme pour le tirage des questions.
      const { stars } = getTerritoryConquest({
        territoryId,
        keys: QUIZ_KEYS_BY_TERRITORY[territoryId] ?? [],
        stats: useAppStore.getState().progress.quizGame.questions,
        records: useAppStore.getState().progress.quizGame.records[territoryId],
      });
      setFinished({ outcome, cauris, missed, previousRecord, stars });
    },
    [isValid, territoryId, mode, records, finishQuizGame, updateStreak],
  );

  if (!isValid) {
    return (
      <Card className="mx-auto max-w-md p-8 text-center">
        <h1 className="text-xl font-extrabold">Cette partie n'existe pas</h1>
        <p className="mt-2 font-medium text-ink-muted">
          Le territoire ou le mode demandé est inconnu.
        </p>
        <Link to="/quiz">
          <Button className="mt-5">Retour au jeu</Button>
        </Link>
      </Card>
    );
  }

  const territory = getTerritory(territoryId)!;

  if (questions.length === 0) {
    return (
      <Card className="mx-auto max-w-md p-8 text-center">
        <h1 className="text-xl font-extrabold">Pas encore de questions ici</h1>
        <p className="mt-2 font-medium text-ink-muted">
          {territory.emoji} {territory.name} n'a aucune question pour l'instant.
        </p>
        <Link to="/quiz">
          <Button className="mt-5">Choisir un autre territoire</Button>
        </Link>
      </Card>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="sr-only">
        {territory.name} — {mode === "blitz" ? "Blitz" : "Survie"}
      </h1>
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
          territory={territory}
          previousRecord={finished.previousRecord}
          stars={finished.stars}
          onReplay={() => {
            setFinished(null);
            setRound((r) => r + 1);
          }}
        />
      ) : (
        <QuizGamePlayer
          key={round}
          questions={questions}
          mode={mode}
          onAnswer={recordQuizAnswer}
          onFinish={handleFinish}
        />
      )}
    </div>
  );
}
