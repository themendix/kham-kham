import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useAppStore } from "@/store/useAppStore";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { QuizResultCard } from "@/components/features/QuizResultCard";

/** Historique complet des tentatives de quiz, ouvert depuis le résumé du Profil */
export function QuizHistoryScreen() {
  const navigate = useNavigate();
  const quizResults = useAppStore((s) => s.progress.quizResults);
  const results = [...quizResults].reverse();

  return (
    <div className="mx-auto max-w-2xl">
      <button
        onClick={() => navigate(-1)}
        className="mb-3 inline-flex items-center gap-1.5 font-heading text-sm font-bold text-ink-faint"
      >
        <ArrowLeft className="h-4 w-4" /> Retour
      </button>

      <h1 className="mb-4 text-[26px] font-extrabold">📝 Tous mes quiz</h1>

      {results.length === 0 ? (
        <Card className="p-8 text-center">
          <p className="font-medium text-ink-faint">Aucun quiz pour l'instant.</p>
          <p className="mt-1 text-sm text-ink-faint">
            Termine un cours dans la Biblio pour voir tes résultats ici.
          </p>
          <Link to="/biblio">
            <Button variant="secondary" className="mt-4">
              Découvrir la Biblio
            </Button>
          </Link>
        </Card>
      ) : (
        <div className="flex flex-col gap-3">
          {results.map((r, i) => (
            <QuizResultCard key={i} result={r} />
          ))}
        </div>
      )}
    </div>
  );
}
