import { Link } from "react-router-dom";
import { Star, RotateCw } from "lucide-react";
import type { QuizResult } from "@/types";
import { getCourseMetaOrWarn } from "@/data/courseMeta";
import { Card } from "@/components/ui/Card";

interface QuizResultCardProps {
  result: QuizResult;
}

/** Pseudo-cours sous lequel le Défi du jour enregistre ses résultats (voir QuizDefiScreen). */
const DAILY_CHALLENGE_COURSE_ID = "defi-quotidien";

/** Résultat d'une tentative de quiz : titre du cours, notation en étoiles, bouton de reprise */
export function QuizResultCard({ result }: QuizResultCardProps) {
  const isDailyChallenge = result.courseId === DAILY_CHALLENGE_COURSE_ID;
  const course = isDailyChallenge ? undefined : getCourseMetaOrWarn(result.courseId, "quizResults");

  // Le Défi du jour n'est pas un cours : il n'a pas de titre à résoudre, et il ne se refait pas
  // (une tentative par jour). Sans ce libellé, il s'affichait ici comme « Cours supprimé ».
  const title = isDailyChallenge ? "Défi du jour" : (course?.title ?? "Cours supprimé");

  return (
    <Card shadow="sm" className="p-4">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-extrabold leading-tight">{title}</h3>
        {course && (
          <Link
            to={`/cours/${course.id}`}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border-[3px] border-ink bg-gold px-4 py-2 font-heading text-sm font-bold text-ink shadow-sm transition-transform active:translate-y-[3px] active:shadow-none"
          >
            <RotateCw className="h-3.5 w-3.5" /> Refaire
          </Link>
        )}
      </div>
      <div className="mt-2 flex items-center gap-2">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: result.total }).map((_, i) => (
            <Star
              key={i}
              className={i < result.score ? "h-4 w-4 text-ink" : "h-4 w-4 text-ink/20"}
              fill={i < result.score ? "currentColor" : "none"}
            />
          ))}
        </div>
        <span className="font-bold text-ink-faint">
          {result.score}/{result.total}
        </span>
      </div>
    </Card>
  );
}
