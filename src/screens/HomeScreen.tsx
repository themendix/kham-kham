import { View } from "react-native";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "@/native/router";
import { Sparkles } from "@/native/icons";
import { getCategory, CATEGORIES } from "@/data/categories";
import { COURSE_INDEX } from "@/data/coursesIndex.generated";
import { getCourseMetaOrWarn } from "@/data/courseMeta";
import { PROVERBS } from "@/data/proverbs";
import { useAppStore } from "@/store/useAppStore";
import { SwipeCard } from "@/components/features/SwipeCard";
import { DailyGoalCard } from "@/components/features/DailyGoalCard";
import { DailyChallengeCard } from "@/components/features/DailyChallengeCard";
import { ContinueLearningCard } from "@/components/features/ContinueLearningCard";
import { ProverbCard } from "@/components/features/ProverbCard";
import { ProgressGlance } from "@/components/features/ProgressGlance";
import { WelcomeBackCard } from "@/components/features/WelcomeBackCard";
import { HomeAction, HomeCard, HomeText, homeColors, homeStyles } from "@/components/features/HomeUi";
import { DAILY_GOAL, getStreakBreak } from "@/lib/gamification";
import { pickDailyIndex } from "@/lib/daily";
import { buildHomeFeed, type FeedCard } from "@/lib/homeFeed";
/** Onglet Home : tableau de bord (objectif du jour, swipe en vedette, défi, reprise de cours, proverbe, progression) */
export function HomeScreen() {
    const navigate = useNavigate();
    const [position, setPosition] = useState(0);
    const progress = useAppStore((s) => s.progress);
    const setFavoriteCourse = useAppStore((s) => s.setFavoriteCourse);
    const dismissCourse = useAppStore((s) => s.dismissCourse);
    const checkDailyReset = useAppStore((s) => s.checkDailyReset);
    // La visite ne compte pas comme activité ; la reprise est annoncée sans modifier la série.
    const [streakBreak] = useState(() => getStreakBreak(progress.streak));
    useEffect(() => {
        void checkDailyReset().catch(() => { });
    }, [checkDailyReset]);
    // Fil de découverte : des cours à trier, en tourniquet entre matières. Figé pour la durée de la
    // visite via un état initial paresseux — sinon chaque ✓/✗ recomposerait la file sous les doigts.
    //
    // Il ne s'appuie que sur `COURSE_INDEX` (métadonnées) : une carte montre une illustration, un
    // titre et une description, jamais le texte d'une leçon. Le fil est donc complet dès le premier
    // rendu, sans attendre le chargement du catalogue — ce que les versions précédentes du fil
    // (cartes éditoriales, puis leçons) ne savaient pas faire.
    const [feed, setFeed] = useState<FeedCard[]>(() => buildHomeFeed({
        completedCourseIds: progress.completedCourseIds,
        favoriteCourseIds: progress.favoriteCourseIds,
        dismissedCourseIds: progress.dismissedCourseIds,
        allCourses: COURSE_INDEX,
        allCategories: CATEGORIES,
        preferredCategoryIds: progress.preferredCategoryIds,
    }));
    // Rattrapage pour l'onboarding : il s'affiche par-dessus un Home déjà monté (pas de navigation
    // séparée), donc le fil ci-dessus a pu se figer avant que `preferredCategoryIds` ne soit écrit.
    // On ne reconstruit qu'une fois, à la première apparition d'une préférence — jamais ensuite, sinon
    // rouvrir l'onboarding depuis le Profil rebattrait le fil sous les cartes déjà en cours de tri.
    const appliedPreference = useRef(progress.preferredCategoryIds.length > 0);
    useEffect(() => {
        if (appliedPreference.current || progress.preferredCategoryIds.length === 0)
            return;
        appliedPreference.current = true;
        setFeed(buildHomeFeed({
            completedCourseIds: progress.completedCourseIds,
            favoriteCourseIds: progress.favoriteCourseIds,
            dismissedCourseIds: progress.dismissedCourseIds,
            allCourses: COURSE_INDEX,
            allCategories: CATEGORIES,
            preferredCategoryIds: progress.preferredCategoryIds,
        }));
    }, [progress.preferredCategoryIds, progress.completedCourseIds, progress.favoriteCourseIds, progress.dismissedCourseIds]);
    // Un cours a pu être terminé ou mis de côté ailleurs pendant la session : on saute les entrées
    // devenues obsolètes plutôt que de les reproposer.
    let index = position;
    while (index < feed.length &&
        (progress.completedCourseIds.includes(feed[index].course.id) ||
            progress.favoriteCourseIds.includes(feed[index].course.id) ||
            progress.dismissedCourseIds.includes(feed[index].course.id))) {
        index += 1;
    }
    const [cardRetry, setCardRetry] = useState(0);
    const swipePending = useRef(false);
    async function swipe(favorite: boolean) {
        if (swipePending.current || index >= feed.length)
            return;
        swipePending.current = true;
        try {
            if (favorite)
                await setFavoriteCourse(feed[index].course.id, true);
            else
                await dismissCourse(feed[index].course.id);
            setPosition(index + 1);
        }
        catch {
            setCardRetry((n) => n + 1);
        }
        finally {
            swipePending.current = false;
        }
    }
    function keep() { void swipe(true); }
    function dismiss() { void swipe(false); }
    const lastCourse = progress.lastCourseId
        ? getCourseMetaOrWarn(progress.lastCourseId, "progress.lastCourseId")
        : undefined;
    const targetCourse = lastCourse && !progress.completedCourseIds.includes(lastCourse.id)
        ? lastCourse
        : COURSE_INDEX.find((c) => !progress.completedCourseIds.includes(c.id));
    const targetCategory = targetCourse ? getCategory(targetCourse.categoryId) ?? null : null;
    const resumedCourse = targetCourse?.id === progress.lastCourseId;
    const proverb = PROVERBS[pickDailyIndex(PROVERBS.length)];
    return (<View style={homeStyles.column}>
      {streakBreak && (<WelcomeBackCard daysAway={streakBreak.daysAway} previousCount={streakBreak.previousCount}/>)}
      <DailyGoalCard lessonsLearnedToday={progress.daily.lessonsLearned} goal={DAILY_GOAL}/>

      <View>
        <HomeText heading accessibilityRole="header" style={homeStyles.sectionTitle}>
          ✨ Ta découverte du jour
        </HomeText>
        {index >= feed.length ? (<HomeCard style={{ padding: 18, alignItems: "center" }}>
            <Sparkles size={56} color={homeColors.gold}/>
            <HomeText heading accessibilityRole="header" style={{ marginTop: 10, fontSize: 19, lineHeight: 26, textAlign: "center" }}>Tu as tout passé en revue !</HomeText>
            <HomeText style={{ marginTop: 8, marginBottom: 20, textAlign: "center", color: homeColors.muted }}>
              Retrouve les cours que tu as mis de côté dans tes favoris.
            </HomeText>
            <HomeAction label="Voir mes favoris" onPress={() => navigate("/favoris")} />
          </HomeCard>) : (<SwipeCard key={`${feed[index].course.id}:${cardRetry}`} course={feed[index].course} category={feed[index].category} onDismiss={dismiss} onKeep={keep}/>)}
      </View>

      <DailyChallengeCard done={progress.daily.challengeDone} onStart={() => navigate("/quiz/defi")}/>

      <ContinueLearningCard course={targetCourse ?? null} category={targetCategory} resumed={resumedCourse} completedLessonIds={progress.completedLessonIds}/>

      <ProgressGlance xpToday={progress.daily.xpEarned} streakCount={progress.streak.count} totalLessonsLearned={progress.totalLessonsLearned}/>

      <ProverbCard proverb={proverb}/>
    </View>);
}
