import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { getCategory, CATEGORIES } from "@/data/categories";
import { COURSE_INDEX } from "@/data/coursesIndex.generated";
import { getCourseMetaOrWarn } from "@/data/courseMeta";
import { PROVERBS } from "@/data/proverbs";
import { useAppStore } from "@/store/useAppStore";
import { useCatalogContent } from "@/hooks/useCatalogContent";
import { SwipeCard } from "@/components/features/SwipeCard";
import { DailyGoalCard } from "@/components/features/DailyGoalCard";
import { DailyChallengeCard } from "@/components/features/DailyChallengeCard";
import { ContinueLearningCard } from "@/components/features/ContinueLearningCard";
import { ThemeExplorer } from "@/components/features/ThemeExplorer";
import { ProverbCard } from "@/components/features/ProverbCard";
import { ProgressGlance } from "@/components/features/ProgressGlance";
import { XP_PER_LESSON, DAILY_GOAL } from "@/lib/gamification";
import { pickDailyIndex } from "@/lib/daily";
import { buildHomeFeed, type FeedCard } from "@/lib/homeFeed";

/** Onglet Home : tableau de bord (objectif du jour, swipe en vedette, défi, reprise de cours, thèmes, proverbe, progression) */
export function HomeScreen() {
  const navigate = useNavigate();
  const [position, setPosition] = useState(0);

  const progress = useAppStore((s) => s.progress);
  const toggleFavoriteCard = useAppStore((s) => s.toggleFavoriteCard);
  const completeLesson = useAppStore((s) => s.completeLesson);
  const updateStreak = useAppStore((s) => s.updateStreak);
  const checkDailyReset = useAppStore((s) => s.checkDailyReset);
  const addDailyProgress = useAppStore((s) => s.addDailyProgress);

  useEffect(() => {
    updateStreak();
    checkDailyReset();
  }, [updateStreak, checkDailyReset]);

  // Fil de cartes (18 éditoriales prioritaires puis leçons du catalogue en rotation de
  // matière) : figé pour la durée de la visite via un état initial paresseux, comme l'ancien
  // `index` sur `CARDS`. Voir src/lib/homeFeed.ts — mutualisé avec « À la une » (Biblio), et
  // exclut la vedette Biblio courante pour ne jamais proposer la même leçon aux deux endroits.
  //
  // Le contenu du catalogue (leçons complètes) est chargé en tâche de fond (`useCatalogContent`) :
  // le fil démarre avec les seules cartes éditoriales (immédiates), puis s'étend avec les leçons
  // du catalogue dès que le chargement aboutit — sans bloquer le premier rendu du Home. Voir
  // docs/ARCHITECTURE.md § Découpage du bundle.
  const feedParamsRef = useRef({
    completedLessonIds: progress.completedLessonIds,
    excludeKey: progress.featuredLessonKey,
  });
  const [feed, setFeed] = useState<FeedCard[]>(() =>
    buildHomeFeed({ ...feedParamsRef.current, allCourses: [], allCategories: CATEGORIES }),
  );
  const catalogContent = useCatalogContent();
  const catalogAppendedRef = useRef(false);
  useEffect(() => {
    if (!catalogContent || catalogAppendedRef.current) return;
    catalogAppendedRef.current = true;
    const fullFeed = buildHomeFeed({
      ...feedParamsRef.current,
      allCourses: catalogContent,
      allCategories: CATEGORIES,
    });
    setFeed((prev) => [...prev, ...fullFeed.slice(prev.length)]);
  }, [catalogContent]);

  // Une leçon peut avoir été apprise ailleurs (Biblio, vue cours) pendant la session : on
  // saute silencieusement les entrées devenues obsolètes plutôt que de les re-proposer.
  let index = position;
  while (index < feed.length && progress.completedLessonIds.includes(`${feed[index].courseId}:${feed[index].lessonId}`)) {
    index += 1;
  }

  function advance(learned: boolean) {
    const entry = feed[index];
    if (learned) {
      completeLesson(entry.courseId, entry.lessonId);
      addDailyProgress({ cards: 1, xp: XP_PER_LESSON });
    }
    setPosition(index + 1);
  }

  const lastCourse = progress.lastCourseId
    ? getCourseMetaOrWarn(progress.lastCourseId, "progress.lastCourseId")
    : undefined;
  const targetCourse =
    lastCourse && !progress.completedCourseIds.includes(lastCourse.id)
      ? lastCourse
      : COURSE_INDEX.find((c) => !progress.completedCourseIds.includes(c.id));
  const targetCategory = targetCourse ? getCategory(targetCourse.categoryId) ?? null : null;
  const resumedCourse = targetCourse?.id === progress.lastCourseId;

  const proverb = PROVERBS[pickDailyIndex(PROVERBS.length)];

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-6">
      <h1 className="sr-only">Accueil</h1>
      <DailyGoalCard
        cardsLearnedToday={progress.daily.cardsLearned}
        goal={DAILY_GOAL}
        streakCount={progress.streak.count}
      />

      <section>
        <h2 className="mb-2.5 font-heading text-sm font-bold uppercase tracking-wide text-ink-faint">
          ✨ Ta découverte du jour
        </h2>
        {index >= feed.length ? (
          <div className="rounded-card border-[3px] border-ink bg-card p-11 text-center shadow-card">
            <Sparkles className="mx-auto h-16 w-16 text-gold" />
            <h3 className="mt-3 text-[23px] font-extrabold">Tu as fait le tour !</h3>
            <p className="mb-5 mt-2 font-medium text-ink-muted">Reviens demain pour continuer ta série.</p>
          </div>
        ) : (
          <SwipeCard
            key={`${feed[index].courseId}:${feed[index].lessonId}`}
            card={feed[index].card}
            category={getCategory(feed[index].card.categoryId)!}
            indexLabel={`CARTE ${index + 1} / ${feed.length}`}
            isFavorite={progress.favoriteCardIds.includes(feed[index].card.id)}
            onToggleFavorite={() => toggleFavoriteCard(feed[index].card.id)}
            onPass={() => advance(false)}
            onLearn={() => advance(true)}
          />
        )}
      </section>

      <DailyChallengeCard done={progress.daily.challengeDone} onStart={() => navigate("/jeu/defi")} />

      <ContinueLearningCard course={targetCourse ?? null} category={targetCategory} resumed={resumedCourse} />

      <section>
        <h2 className="mb-2.5 font-heading text-sm font-bold uppercase tracking-wide text-ink-faint">
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
