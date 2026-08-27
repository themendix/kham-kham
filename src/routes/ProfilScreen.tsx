import { Link } from "react-router-dom";
import { CheckCircle2, Target, Layers } from "lucide-react";
import { useAppStore } from "@/store/useAppStore";
import { getLevelInfo } from "@/lib/gamification";
import { getMasteryByCategory } from "@/lib/subjectProgress";
import { COURSE_INDEX } from "@/data/coursesIndex.generated";
import { CATEGORIES } from "@/data/categories";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Button } from "@/components/ui/Button";
import { StreakTracker } from "@/components/features/StreakTracker";
import { StatCard } from "@/components/features/StatCard";
import { MasteryRadar } from "@/components/features/MasteryRadar";
import { FavoritesSummaryCard } from "@/components/features/FavoritesSummaryCard";
import { QuizResultCard } from "@/components/features/QuizResultCard";

/** Onglet Profil : niveau/rang, streak, statistiques et radar de maîtrise */
export function ProfilScreen() {
  const progress = useAppStore((s) => s.progress);
  const levelInfo = getLevelInfo(progress.xp);
  const masteryByCategory = getMasteryByCategory(progress, COURSE_INDEX, CATEGORIES);

  // Leçons apprises (convergence fil Home / « À la une » / vue cours, Phase 7 lot 3) : une
  // seule source de vérité, `completedLessonIds`, sur le total réel de leçons du catalogue.
  const totalLessons = COURSE_INDEX.reduce((sum, c) => sum + c.lessons.length, 0);
  const lessonsLearnedCount = progress.completedLessonIds.length;
  const lessonsPercent = Math.round((lessonsLearnedCount / totalLessons) * 100);

  const totalScored = progress.quizResults.reduce((sum, r) => sum + r.score, 0);
  const totalPossible = progress.quizResults.reduce((sum, r) => sum + r.total, 0);
  const successRate = totalPossible === 0 ? 0 : Math.round((totalScored / totalPossible) * 100);
  const latestQuiz = progress.quizResults[progress.quizResults.length - 1] ?? null;

  return (
    <div className="pt-1">
      <h1 className="mb-4 mt-1.5 text-[30px] font-extrabold">Profil</h1>

      <div className="grid gap-4 md:grid-cols-2 md:items-start md:gap-6">
        <div>
          <div className="mb-4 rounded-[22px] border-[3px] border-ink bg-card p-4 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="grid h-[66px] w-[66px] place-items-center rounded-full border-[3px] border-ink bg-perso text-3xl">
                ✨
              </div>
              <div>
                <span className="inline-block rounded-full bg-ink px-2.5 py-1 font-heading text-[11px] font-bold tracking-wide text-white">
                  NIV. {levelInfo.level}
                </span>{" "}
                <span className="text-[13px] font-bold text-ink-faint">{levelInfo.rank}</span>
                <div className="mt-1 text-[13px] font-semibold text-ink-faint">
                  {progress.xp} XP
                  {levelInfo.xpToNextLevel !== null
                    ? ` · ${levelInfo.xpToNextLevel} XP avant ${levelInfo.nextRank}`
                    : " · niveau max"}
                </div>
              </div>
            </div>
            <ProgressBar percent={levelInfo.progressPct} />
          </div>

          <StreakTracker streak={progress.streak} />

          <div className="grid grid-cols-2 gap-3.5">
            <StatCard
              icon={CheckCircle2}
              iconBgClassName="bg-geo"
              value={progress.completedCourseIds.length}
              label="cours terminés"
            />
            <StatCard icon={Target} iconBgClassName="bg-accent-rose" value={`${successRate}%`} label="taux de réussite" />
          </div>
        </div>

        <div>
          <div className="mb-4 rounded-[22px] border-[3px] border-ink bg-card p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5 font-extrabold">
                <Layers className="h-5 w-5" /> {lessonsLearnedCount}{" "}
                <span className="text-ink-faint">/ {totalLessons}</span>
              </div>
              <span className="text-[13px] font-bold text-ink-faint">Leçons →</span>
            </div>
            <ProgressBar percent={lessonsPercent} />
          </div>

          <div className="mb-4 rounded-[22px] border-[3px] border-ink bg-card p-4 text-center shadow-sm">
            <div className="mb-1 text-left font-heading text-xs font-bold uppercase tracking-wide text-ink-muted">
              Ta forme de culture
            </div>
            <MasteryRadar masteryByCategory={masteryByCategory} />
          </div>

          <FavoritesSummaryCard
            courseCount={progress.favoriteCourseIds.length}
          />
        </div>
      </div>

      <div className="mt-4 rounded-[22px] border-[3px] border-ink bg-card p-4 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <span className="font-heading text-xs font-bold uppercase tracking-wide text-ink-muted">
            Mes quiz récents
          </span>
          {latestQuiz && (
            <Link to="/profil/quiz" className="font-heading text-lg font-extrabold text-ink">
              Voir plus →
            </Link>
          )}
        </div>
        {latestQuiz === null ? (
          <div className="py-6 text-center">
            <p className="font-medium text-ink-faint">Aucun quiz pour l'instant.</p>
            <p className="mt-1 text-sm text-ink-faint">
              Termine un cours dans la Biblio pour voir tes résultats ici.
            </p>
            <Link to="/biblio">
              <Button variant="secondary" className="mt-3">
                Découvrir la Biblio
              </Button>
            </Link>
          </div>
        ) : (
          <QuizResultCard result={latestQuiz} />
        )}
      </div>
    </div>
  );
}
