import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { getCategory, CATEGORIES } from "@/data/categories";
import { COURSE_INDEX } from "@/data/coursesIndex.generated";
import { getCourseMetaOrWarn } from "@/data/courseMeta";
import { PROVERBS } from "@/data/proverbs";
import { useAppStore } from "@/store/useAppStore";
import { SwipeCard } from "@/components/features/SwipeCard";
import { DailyGoalCard } from "@/components/features/DailyGoalCard";
import { DailyChallengeCard } from "@/components/features/DailyChallengeCard";
import { ContinueLearningCard } from "@/components/features/ContinueLearningCard";
import { ThemeExplorer } from "@/components/features/ThemeExplorer";
import { ProverbCard } from "@/components/features/ProverbCard";
import { ProgressGlance } from "@/components/features/ProgressGlance";
import { WelcomeBackCard } from "@/components/features/WelcomeBackCard";
import { DAILY_GOAL, getStreakBreak } from "@/lib/gamification";
import { pickDailyIndex } from "@/lib/daily";
import { buildHomeFeed, type FeedCard } from "@/lib/homeFeed";

/** Onglet Home : tableau de bord (objectif du jour, swipe en vedette, défi, reprise de cours, thèmes, proverbe, progression) */
export function HomeScreen() {
  const navigate = useNavigate();
  const [position, setPosition] = useState(0);

  const progress = useAppStore((s) => s.progress);
  const setFavoriteCourse = useAppStore((s) => s.setFavoriteCourse);
  const dismissCourse = useAppStore((s) => s.dismissCourse);
  const updateStreak = useAppStore((s) => s.updateStreak);
  const checkDailyReset = useAppStore((s) => s.checkDailyReset);

  // Capturé une seule fois, avant que l'effet ci-dessous n'appelle `updateStreak` : cette action
  // remet la série à 1 en silence dès ce montage, donc c'est ici ou jamais qu'on peut encore voir
  // l'état d'avant la coupure pour l'annoncer (voir `WelcomeBackCard`).
  const [streakBreak] = useState(() => getStreakBreak(progress.streak));

  useEffect(() => {
    void updateStreak().catch(() => {});
    void checkDailyReset().catch(() => {});
  }, [updateStreak, checkDailyReset]);

  // Fil de découverte : des cours à trier, en tourniquet entre matières. Figé pour la durée de la
  // visite via un état initial paresseux — sinon chaque ✓/✗ recomposerait la file sous les doigts.
  //
  // Il ne s'appuie que sur `COURSE_INDEX` (métadonnées) : une carte montre une illustration, un
  // titre et une description, jamais le texte d'une leçon. Le fil est donc complet dès le premier
  // rendu, sans attendre le chargement du catalogue — ce que les versions précédentes du fil
  // (cartes éditoriales, puis leçons) ne savaient pas faire.
  const [feed, setFeed] = useState<FeedCard[]>(() =>
    buildHomeFeed({
      completedCourseIds: progress.completedCourseIds,
      favoriteCourseIds: progress.favoriteCourseIds,
      dismissedCourseIds: progress.dismissedCourseIds,
      allCourses: COURSE_INDEX,
      allCategories: CATEGORIES,
      preferredCategoryIds: progress.preferredCategoryIds,
    }),
  );

  // Rattrapage pour l'onboarding : il s'affiche par-dessus un Home déjà monté (pas de navigation
  // séparée), donc le fil ci-dessus a pu se figer avant que `preferredCategoryIds` ne soit écrit.
  // On ne reconstruit qu'une fois, à la première apparition d'une préférence — jamais ensuite, sinon
  // rouvrir l'onboarding depuis le Profil rebattrait le fil sous les cartes déjà en cours de tri.
  const appliedPreference = useRef(progress.preferredCategoryIds.length > 0);
  useEffect(() => {
    if (appliedPreference.current || progress.preferredCategoryIds.length === 0) return;
    appliedPreference.current = true;
    setFeed(
      buildHomeFeed({
        completedCourseIds: progress.completedCourseIds,
        favoriteCourseIds: progress.favoriteCourseIds,
        dismissedCourseIds: progress.dismissedCourseIds,
        allCourses: COURSE_INDEX,
        allCategories: CATEGORIES,
        preferredCategoryIds: progress.preferredCategoryIds,
      }),
    );
  }, [progress.preferredCategoryIds, progress.completedCourseIds, progress.favoriteCourseIds, progress.dismissedCourseIds]);

  // Un cours a pu être terminé ou mis de côté ailleurs pendant la session : on saute les entrées
  // devenues obsolètes plutôt que de les reproposer.
  let index = position;
  while (
    index < feed.length &&
    (progress.completedCourseIds.includes(feed[index].course.id) ||
      progress.favoriteCourseIds.includes(feed[index].course.id) ||
      progress.dismissedCourseIds.includes(feed[index].course.id))
  ) {
    index += 1;
  }

  const [cardRetry, setCardRetry] = useState(0);
  const swipePending = useRef(false);
  async function swipe(favorite: boolean) {
    if (swipePending.current) return;
    swipePending.current = true;
    try {
      if (favorite) await setFavoriteCourse(feed[index].course.id, true);
      else await dismissCourse(feed[index].course.id);
      setPosition(index + 1);
    } catch { setCardRetry((n) => n + 1); }
    finally { swipePending.current = false; }
  }
  function keep() { void swipe(true); }
  function dismiss() { void swipe(false); }

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
      {streakBreak && (
        <WelcomeBackCard daysAway={streakBreak.daysAway} previousCount={streakBreak.previousCount} />
      )}
      <DailyGoalCard
        lessonsLearnedToday={progress.daily.lessonsLearned}
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
            <h3 className="mt-3 text-[23px] font-extrabold">Tu as tout passé en revue !</h3>
            <p className="mb-5 mt-2 font-medium text-ink-muted">
              Retrouve les cours que tu as mis de côté dans tes favoris.
            </p>
          </div>
        ) : (
          <SwipeCard
            key={`${feed[index].course.id}:${cardRetry}`}
            course={feed[index].course}
            category={feed[index].category}
            indexLabel={`COURS ${index + 1} / ${feed.length}`}
            onDismiss={dismiss}
            onKeep={keep}
          />
        )}
      </section>

      <DailyChallengeCard done={progress.daily.challengeDone} onStart={() => navigate("/quiz/defi")} />

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
        totalLessonsLearned={progress.totalLessonsLearned}
      />
    </div>
  );
}
