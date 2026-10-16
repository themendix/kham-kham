import { NativeBox, NativeH1, NativeH3, NativeParagraph, NativeSpan } from "@/native/elements";
import { Link } from "@/native/router";
import { CheckCircle2, Target, Layers, Compass, ChevronRight } from "@/native/icons";
import { useAppStore } from "@/store/useAppStore";
import { getLevelInfo } from "@/lib/gamification";
import { getMasteryByCategory } from "@/lib/subjectProgress";
import { COURSE_INDEX } from "@/data/coursesIndex.generated";
import { CATEGORIES } from "@/data/categories";
import { Card } from "@/components/ui/Card";
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
    return (<NativeBox className="pt-1">
      <NativeH1 className="mb-4 mt-1.5 text-[30px] font-extrabold">Profil</NativeH1>

      <NativeBox className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-start md:gap-6">
        <NativeBox className="min-w-0">
          <NativeBox className="mb-4 rounded-[22px] border-[3px] border-ink bg-card p-4 shadow-sm">
            <NativeBox className="flex items-center gap-4">
              <NativeBox className="grid h-[66px] w-[66px] shrink-0 place-items-center rounded-full border-[3px] border-ink bg-perso text-3xl">
                ✨
              </NativeBox>
              <NativeBox className="min-w-0 flex-1 break-words">
                <NativeSpan className="inline-block rounded-full bg-ink px-2.5 py-1 font-heading text-[11px] font-bold tracking-wide text-white">
                  NIV. {levelInfo.level}
                </NativeSpan>{" "}
                <NativeSpan className="text-[13px] font-bold text-ink-faint">{levelInfo.rank}</NativeSpan>
                <NativeBox className="mt-1 text-[13px] font-semibold text-ink-faint">
                  {progress.xp} XP
                  {levelInfo.xpToNextLevel !== null
            ? ` · ${levelInfo.xpToNextLevel} XP avant ${levelInfo.nextRank}`
            : " · niveau max"}
                </NativeBox>
              </NativeBox>
            </NativeBox>
            <ProgressBar percent={levelInfo.progressPct}/>
            <NativeParagraph className="mt-3 text-xs font-medium text-ink-faint">
              Ton rang reflète les XP cumulées. La complétion des cours et la maîtrise sont suivies séparément.
            </NativeParagraph>
          </NativeBox>

          <StreakTracker streak={progress.streak}/>

          <NativeBox className="grid grid-cols-2 gap-3.5">
            <StatCard icon={CheckCircle2} iconBgClassName="bg-geo" value={progress.completedCourseIds.length} label="cours terminés"/>
            <StatCard icon={Target} iconBgClassName="bg-accent-rose" value={`${successRate}%`} label="taux de réussite"/>
          </NativeBox>
        </NativeBox>

        <NativeBox className="min-w-0">
          <NativeBox className="mb-4 rounded-[22px] border-[3px] border-ink bg-card p-4 shadow-sm">
            <NativeBox className="flex items-center justify-between">
              <NativeBox className="flex items-center gap-2.5 font-extrabold">
                <Layers className="h-5 w-5"/> {lessonsLearnedCount}{" "}
                <NativeSpan className="text-ink-faint">/ {totalLessons}</NativeSpan>
              </NativeBox>
              <NativeSpan className="text-[13px] font-bold text-ink-faint">Leçons →</NativeSpan>
            </NativeBox>
            <ProgressBar percent={lessonsPercent}/>
          </NativeBox>

          <NativeBox className="mb-4 rounded-[22px] border-[3px] border-ink bg-card p-4 text-center shadow-sm">
            <NativeBox className="mb-1 text-left font-heading text-xs font-bold uppercase tracking-wide text-ink-muted">
              Ta forme de culture
            </NativeBox>
            <MasteryRadar masteryByCategory={masteryByCategory}/>
          </NativeBox>

          <FavoritesSummaryCard courseCount={progress.favoriteCourseIds.length}/>

          <Link to="/?onboarding=1">
            <Card shadow="sm" className="flex items-center gap-4 p-4">
              <NativeBox className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-[2.5px] border-ink bg-gold">
                <Compass className="h-[22px] w-[22px]"/>
              </NativeBox>
              <NativeBox className="min-w-0 flex-1">
                <NativeH3 className="break-words font-extrabold">Revoir l'introduction</NativeH3>
                <NativeParagraph className="truncate text-sm font-medium text-ink-faint">
                  Sankofa, le fonctionnement de l'app, tes matières préférées
                </NativeParagraph>
              </NativeBox>
              <ChevronRight className="h-5 w-5 shrink-0 text-ink-faint"/>
            </Card>
          </Link>
        </NativeBox>
      </NativeBox>

      <NativeBox className="mt-4 rounded-[22px] border-[3px] border-ink bg-card p-4 shadow-sm">
        <NativeBox className="mb-3 flex items-center justify-between">
          <NativeSpan className="font-heading text-xs font-bold uppercase tracking-wide text-ink-muted">
            Mes quiz récents
          </NativeSpan>
          {latestQuiz && (<Link to="/profil/quiz" className="font-heading text-lg font-extrabold text-ink">
              Voir plus →
            </Link>)}
        </NativeBox>
        {latestQuiz === null ? (<NativeBox className="py-6 text-center">
            <NativeParagraph className="font-medium text-ink-faint">Aucun quiz pour l'instant.</NativeParagraph>
            <NativeParagraph className="mt-1 text-sm text-ink-faint">
              Termine un cours dans la Biblio pour voir tes résultats ici.
            </NativeParagraph>
            <Link to="/biblio">
              <Button variant="secondary" className="mt-3">
                Découvrir la Biblio
              </Button>
            </Link>
          </NativeBox>) : (<QuizResultCard result={latestQuiz}/>)}
      </NativeBox>
    </NativeBox>);
}
