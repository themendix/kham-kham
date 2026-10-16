import { NativeBox, NativeButton, NativeH1, NativeParagraph } from "@/native/elements";
import { Link, useNavigate } from "@/native/router";
import { ArrowLeft } from "@/native/icons";
import { useAppStore } from "@/store/useAppStore";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { QuizResultCard } from "@/components/features/QuizResultCard";
/** Historique complet des tentatives de quiz, ouvert depuis le résumé du Profil */
export function QuizHistoryScreen() {
    const navigate = useNavigate();
    const quizResults = useAppStore((s) => s.progress.quizResults);
    const results = [...quizResults].reverse();
    return (<NativeBox className="mx-auto max-w-2xl">
      <NativeButton onClick={() => navigate(-1)} className="mb-3 inline-flex items-center gap-1.5 font-heading text-sm font-bold text-ink-faint">
        <ArrowLeft className="h-4 w-4"/> Retour
      </NativeButton>

      <NativeH1 className="mb-4 text-[26px] font-extrabold">📝 Tous mes quiz</NativeH1>

      {results.length === 0 ? (<Card className="p-8 text-center">
          <NativeParagraph className="font-medium text-ink-faint">Aucun quiz pour l'instant.</NativeParagraph>
          <NativeParagraph className="mt-1 text-sm text-ink-faint">
            Termine un cours dans la Biblio pour voir tes résultats ici.
          </NativeParagraph>
          <Link to="/biblio">
            <Button variant="secondary" className="mt-4">
              Découvrir la Biblio
            </Button>
          </Link>
        </Card>) : (<NativeBox className="flex flex-col gap-3">
          {results.map((r, i) => (<QuizResultCard key={i} result={r}/>))}
        </NativeBox>)}
    </NativeBox>);
}
