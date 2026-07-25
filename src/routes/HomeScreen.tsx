import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { CARDS } from "@/data/cards";
import { getCategory, CATEGORIES } from "@/data/categories";
import { COURSES, getCourse } from "@/data/courses";
import { PROVERBS } from "@/data/proverbs";
import { useAppStore } from "@/store/useAppStore";
import { SwipeCard } from "@/components/features/SwipeCard";
import { DailyGoalCard } from "@/components/features/DailyGoalCard";
import { DailyChallengeCard } from "@/components/features/DailyChallengeCard";
import { ContinueLearningCard } from "@/components/features/ContinueLearningCard";
import { ThemeExplorer } from "@/components/features/ThemeExplorer";
import { ProverbCard } from "@/components/features/ProverbCard";
import { ProgressGlance } from "@/components/features/ProgressGlance";
import { Button } from "@/components/ui/Button";
import { XP_PER_CARD, MASTERY_PER_CARD, DAILY_GOAL } from "@/lib/gamification";
import { pickDailyIndex } from "@/lib/daily";

/** Onglet Home : tableau de bord (objectif du jour, swipe en vedette, défi, reprise de cours, thèmes, proverbe, progression) */
export function HomeScreen() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const progress = useAppStore((s) => s.progress);
  const markCardSeen = useAppStore((s) => s.markCardSeen);
  const toggleFavoriteCard = useAppStore((s) => s.toggleFavoriteCard);
  const addXp = useAppStore((s) => s.addXp);
  const addMastery = useAppStore((s) => s.addMastery);
  const updateStreak = useAppStore((s) => s.updateStreak);
  const checkDailyReset = useAppStore((s) => s.checkDailyReset);
  const addDailyProgress = useAppStore((s) => s.addDailyProgress);

  useEffect(() => {
    updateStreak();
    checkDailyReset();
  }, [updateStreak, checkDailyReset]);

  function advance(learned: boolean) {
    const card = CARDS[index];
    markCardSeen(card.id);
    if (learned) {
      addXp(XP_PER_CARD);
      addMastery(card.categoryId, MASTERY_PER_CARD);
      addDailyProgress({ cards: 1, xp: XP_PER_CARD });
    }
    setIndex((i) => i + 1);
  }

  const lastCourse = progress.lastCourseId ? getCourse(progress.lastCourseId) : undefined;
  const targetCourse =
    lastCourse && !progress.completedCourseIds.includes(lastCourse.id)
      ? lastCourse
      : COURSES.find((c) => !progress.completedCourseIds.includes(c.id));
  const targetCategory = targetCourse ? getCategory(targetCourse.categoryId) ?? null : null;
  const resumedCourse = targetCourse?.id === progress.lastCourseId;

  const proverb = PROVERBS[pickDailyIndex(PROVERBS.length)];

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-6">
      <DailyGoalCard
        cardsLearnedToday={progress.daily.cardsLearned}
        goal={DAILY_GOAL}
        streakCount={progress.streak.count}
      />

      <section>
        <h2 className="mb-2.5 font-heading text-sm font-bold uppercase tracking-wide text-[#8a8071]">
          ✨ Ta découverte du jour
        </h2>
        {index >= CARDS.length ? (
          <div className="rounded-card border-[3px] border-ink bg-card p-11 text-center shadow-card">
            <Sparkles className="mx-auto h-16 w-16 text-gold" />
            <h3 className="mt-3 text-[23px] font-extrabold">Tu as fait le tour !</h3>
            <p className="mb-5 mt-2 font-medium text-[#5c554b]">Reviens demain pour continuer ta série.</p>
            <Button onClick={() => setIndex(0)}>Recommencer</Button>
          </div>
        ) : (
          <SwipeCard
            key={CARDS[index].id}
            card={CARDS[index]}
            category={getCategory(CARDS[index].categoryId)!}
            indexLabel={`CARTE ${index + 1} / ${CARDS.length}`}
            isFavorite={progress.favoriteCardIds.includes(CARDS[index].id)}
            onToggleFavorite={() => toggleFavoriteCard(CARDS[index].id)}
            onPass={() => advance(false)}
            onLearn={() => advance(true)}
          />
        )}
      </section>

      <DailyChallengeCard done={progress.daily.challengeDone} onStart={() => navigate("/defi")} />

      <ContinueLearningCard course={targetCourse ?? null} category={targetCategory} resumed={resumedCourse} />

      <section>
        <h2 className="mb-2.5 font-heading text-sm font-bold uppercase tracking-wide text-[#8a8071]">
          🔎 Explore par thème
        </h2>
        <ThemeExplorer categories={CATEGORIES} />
      </section>

      <ProverbCard proverb={proverb} />

      <ProgressGlance
        xpToday={progress.daily.xpEarned}
        streakCount={progress.streak.count}
        totalCardsLearned={progress.totalCardsLearned}
      />
    </div>
  );
}
