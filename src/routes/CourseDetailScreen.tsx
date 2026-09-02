import { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import type { Course } from "@/types";
import { getCachedFullCourse, getFullCourse } from "@/data/courseContent";
import { getCategory } from "@/data/categories";
import { COURSE_INDEX } from "@/data/coursesIndex.generated";
import { PARCOURS } from "@/data/parcours";
import { useAppStore } from "@/store/useAppStore";
import { getSubjectProgress, type SubjectProgress } from "@/lib/subjectProgress";
import { lessonKey } from "@/lib/featured";
import { toISODate } from "@/lib/gamification";
import {
  buildCelebrationSegment,
  resolveOutroTail,
  type CelebrationScreen,
  type OutroScreen,
} from "@/lib/outroSequence";
import { Button } from "@/components/ui/Button";
import { LessonViewer } from "@/components/features/LessonViewer";
import { QuizPlayer } from "@/components/features/QuizPlayer";
import { LearningDoneCard } from "@/components/features/LearningDoneCard";
import { LevelUpCard } from "@/components/features/LevelUpCard";
import { CollectionProgressCard } from "@/components/features/CollectionProgressCard";
import { QuizOutcomeCard } from "@/components/features/QuizOutcomeCard";
import { StreakCelebration } from "@/components/features/StreakCelebration";

/** "lessons" (lecture des leçons) suivi de la séquence de fin de cours (voir src/lib/outroSequence.ts) */
type Stage = "lessons" | OutroScreen;

/**
 * Charge le contenu complet du cours demandé (leçons + quiz) — en ne récupérant que le chunk de
 * sa matière — avant de monter `CourseDetailBody`. Un cours introuvable dans l'index léger est
 * un vrai 404, distinct d'un chargement en cours. Voir docs/ARCHITECTURE.md § Découpage du bundle.
 */
export function CourseDetailScreen() {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();

  const existsInCatalog = COURSE_INDEX.some((c) => c.id === courseId);

  // Le contenu déjà en mémoire est lu de façon synchrone, avant même le premier rendu : passer
  // systématiquement par la promesse de `getFullCourse` faisait peindre « Chargement… » à chaque
  // ouverture de cours et à chaque retour arrière, y compris quand le chunk de la matière était
  // déjà chargé — un clignotement pour rien. On ne retombe sur le chargement asynchrone que
  // lorsque la matière n'a réellement pas encore été chargée.
  const cached = useMemo(() => (courseId ? getCachedFullCourse(courseId) : undefined), [courseId]);
  const [loaded, setLoaded] = useState<Course | undefined>(undefined);
  // `loaded` peut porter le cours précédent le temps qu'une nouvelle matière se charge : on ne
  // le retient que s'il correspond bien à l'adresse courante.
  const course = cached ?? (loaded?.id === courseId ? loaded : undefined);

  useEffect(() => {
    if (!existsInCatalog || !courseId || cached) return;
    let cancelled = false;
    getFullCourse(courseId).then((c) => {
      if (!cancelled) setLoaded(c);
    });
    return () => {
      cancelled = true;
    };
  }, [courseId, existsInCatalog, cached]);

  if (!existsInCatalog) {
    return (
      <div className="mx-auto max-w-md rounded-card border-[3px] border-ink bg-card p-8 text-center shadow-card">
        <p className="font-bold">Ce cours est introuvable.</p>
        <Link to="/biblio">
          <Button className="mt-4">Retour à la Biblio</Button>
        </Link>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="mx-auto max-w-2xl">
        <button
          onClick={() => navigate(-1)}
          className="mb-3 inline-flex items-center gap-1.5 font-heading text-sm font-bold text-ink-faint"
        >
          <ArrowLeft className="h-4 w-4" /> Retour
        </button>
        <div className="rounded-card border-[3px] border-ink bg-card p-8 text-center shadow-card">
          <p className="font-medium text-ink-faint">Chargement…</p>
        </div>
      </div>
    );
  }

  return <CourseDetailBody key={course.id} course={course} />;
}

/** Écran de détail d'un cours : leçons paginées, puis séquence de fin de cours (célébration, mini quiz optionnel, streak) */
function CourseDetailBody({ course }: { course: Course }) {
  const navigate = useNavigate();
  const progress = useAppStore((s) => s.progress);
  const completeCourse = useAppStore((s) => s.completeCourse);
  const recordQuizResult = useAppStore((s) => s.recordQuizResult);
  const updateStreak = useAppStore((s) => s.updateStreak);
  const setLastCourse = useAppStore((s) => s.setLastCourse);
  const markCourseStarted = useAppStore((s) => s.markCourseStarted);
  const completeLesson = useAppStore((s) => s.completeLesson);

  const [stage, setStage] = useState<Stage>("lessons");
  // Reprise de lecture : reprend à la première leçon non lue, sauf cours déjà terminé
  // (relecture depuis le début, cohérent avec `isRevision` ci-dessous) ; repli sur 0.
  const [lessonIndex, setLessonIndex] = useState(() => {
    if (progress.completedCourseIds.includes(course.id)) return 0;
    const firstUnread = course.lessons.findIndex(
      (lesson) => !progress.completedLessonIds.includes(lessonKey(course.id, lesson.id)),
    );
    return firstUnread === -1 ? 0 : firstUnread;
  });
  const [rankAtStart, setRankAtStart] = useState<string | null>(null);
  // Niveau numérique global (distinct du rang nommé) : seul indicateur de progression une fois le
  // dernier rang nommé atteint (A1), où `rank` reste figé sur "Gardien du savoir".
  const [levelAtStart, setLevelAtStart] = useState<number | null>(null);
  const [subjectBefore, setSubjectBefore] = useState<SubjectProgress | null>(null);
  const [isRevision, setIsRevision] = useState(false);
  const [parcoursJustCompleted, setParcoursJustCompleted] = useState(false);
  // La série a réellement progressé aujourd'hui : conditionne l'écran 5 (streak), capturé avant
  // l'appel à `updateStreak()` — qui est un no-op si l'utilisateur a déjà été actif aujourd'hui.
  const [streakAdvanced, setStreakAdvanced] = useState(false);

  const [celebrationSegment, setCelebrationSegment] = useState<CelebrationScreen[]>([]);
  const [celebrationIndex, setCelebrationIndex] = useState(0);
  const [tailScreens, setTailScreens] = useState<OutroScreen[]>([]);
  const [tailIndex, setTailIndex] = useState(0);
  // Change à chaque "Refaire le quiz" : force le remontage de QuizPlayer (state interne remis à zéro)
  const [quizAttempt, setQuizAttempt] = useState(0);
  const [quizResultState, setQuizResultState] = useState<{ score: number; total: number } | null>(
    null,
  );

  useEffect(() => {
    setLastCourse(course.id);
  }, [course.id, setLastCourse]);

  // Chaque écran de la séquence démarre en haut de page : sans ça, le scroll résiduel d'une
  // leçon longue (ou d'un écran d'outro précédent) peut masquer le bouton "Retour", pourtant
  // censé rester visible pendant toute la séquence (voir docs/PROMPT-refonte-ecrans-fin-de-cours.md § 1.3).
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [stage]);

  const category = getCategory(course.categoryId)!;
  const parcours = PARCOURS.find((p) => p.courseIds.includes(course.id));

  function goPrevLesson() {
    setLessonIndex((i) => Math.max(0, i - 1));
  }

  function goNextLesson() {
    if (lessonIndex < course.lessons.length - 1) {
      completeLesson(course.id, course.lessons[lessonIndex].id);
      markCourseStarted(course.id);
      setLessonIndex((i) => i + 1);
    } else {
      if (course.lessons.length === 1) markCourseStarted(course.id);
      finishLearning();
    }
  }

  function finishLearning() {
    const alreadyCompleted = progress.completedCourseIds.includes(course.id);
    const rankBefore = progress.rank;
    const levelBefore = progress.level;
    const subjectBeforeCredit = getSubjectProgress(course.categoryId, progress, COURSE_INDEX);
    const streakAlreadyToday = progress.streak.lastActiveDate === toISODate(new Date());
    const parcoursAlreadyDone = !!parcours && progress.completedParcoursIds.includes(parcours.id);

    completeLesson(course.id, course.lessons[lessonIndex].id);
    completeCourse(course.id, course.xp);
    updateStreak();

    // completeCourse/updateStreak (set Zustand) sont synchrones : l'état est déjà à jour ici.
    const stateAfter = useAppStore.getState().progress;
    const subjectAfterCredit = getSubjectProgress(course.categoryId, stateAfter, COURSE_INDEX);

    setRankAtStart(rankBefore);
    setLevelAtStart(levelBefore);
    setSubjectBefore(subjectBeforeCredit);
    setIsRevision(alreadyCompleted);
    setStreakAdvanced(!streakAlreadyToday);
    setParcoursJustCompleted(
      !parcoursAlreadyDone && !!parcours && stateAfter.completedParcoursIds.includes(parcours.id),
    );

    const subjectLeveledUp = !alreadyCompleted && subjectAfterCredit.level > subjectBeforeCredit.level;
    const segment = buildCelebrationSegment({
      leveledUp: subjectLeveledUp,
      hasParcours: !alreadyCompleted && !!parcours,
    });
    setCelebrationSegment(segment);
    setCelebrationIndex(0);
    setStage(segment[0]);
  }

  function advanceCelebration() {
    const nextIndex = celebrationIndex + 1;
    setCelebrationIndex(nextIndex);
    setStage(celebrationSegment[nextIndex]);
  }

  /** Carrefour de décision porté par le dernier écran de célébration : faire ou sauter le quiz */
  function decideQuiz(takeQuiz: boolean) {
    const tail = resolveOutroTail({ takeQuiz, streakAdvanced });
    setTailScreens(tail);
    setTailIndex(0);
    if (tail.length === 0) {
      navigate("/");
      return;
    }
    setStage(tail[0]);
  }

  function advanceTail() {
    const nextIndex = tailIndex + 1;
    if (nextIndex >= tailScreens.length) {
      navigate("/");
      return;
    }
    setTailIndex(nextIndex);
    setStage(tailScreens[nextIndex]);
  }

  function handleQuizFinish(score: number, total: number) {
    recordQuizResult({ courseId: course.id, score, total, date: new Date().toISOString() });
    setQuizResultState({ score, total });
    advanceTail();
  }

  function retryQuiz() {
    setQuizAttempt((a) => a + 1);
    setQuizResultState(null);
    setTailIndex(0);
    setStage("quiz");
  }

  const rankedUp = rankAtStart !== null && progress.rank !== rankAtStart;
  // Célébration de montée de niveau numérique global, distincte du changement de rang nommé —
  // elle prend le relais une fois "Gardien du savoir" atteint (A1), où `rankedUp` ne se
  // déclenchera plus jamais puisque `rank` reste figé. Sans lien avec l'écran 2 (niveau de
  // matière) : affichée en pastille sur l'écran 1 uniquement.
  const levelUp = levelAtStart !== null && progress.level > levelAtStart && !rankedUp;

  const isLastCelebration = celebrationIndex === celebrationSegment.length - 1;
  const celebrationPrimaryLabel = isLastCelebration ? "Passer au quiz →" : "Continuer →";
  const celebrationOnPrimary = isLastCelebration ? () => decideQuiz(true) : advanceCelebration;
  const celebrationSecondaryLabel = isLastCelebration ? "Retour à l'accueil" : undefined;
  const celebrationOnSecondary = isLastCelebration ? () => decideQuiz(false) : undefined;

  const streakFollows = tailIndex + 1 < tailScreens.length;

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="sr-only">{course.title}</h1>
      <button
        onClick={() => navigate(-1)}
        className="mb-3 inline-flex items-center gap-1.5 font-heading text-sm font-bold text-ink-faint"
      >
        <ArrowLeft className="h-4 w-4" /> Retour
      </button>

      {stage === "lessons" && (
        <LessonViewer
          lesson={course.lessons[lessonIndex]}
          lessonIndex={lessonIndex}
          totalLessons={course.lessons.length}
          accentColor={category.color}
          onPrev={goPrevLesson}
          onNext={goNextLesson}
          nextLabel={lessonIndex < course.lessons.length - 1 ? "Suivant →" : "J'ai terminé ✓"}
          isLastLesson={lessonIndex === course.lessons.length - 1}
        />
      )}

      {stage === "done" && subjectBefore && (
        <LearningDoneCard
          course={course}
          category={category}
          subject={getSubjectProgress(course.categoryId, progress, COURSE_INDEX)}
          subjectBefore={subjectBefore}
          isRevision={isRevision}
          rankedUp={rankedUp}
          newRank={progress.rank}
          levelUp={levelUp}
          newLevel={progress.level}
          primaryLabel={celebrationPrimaryLabel}
          onPrimary={celebrationOnPrimary}
          secondaryLabel={celebrationSecondaryLabel}
          onSecondary={celebrationOnSecondary}
        />
      )}

      {stage === "levelUp" && subjectBefore && (
        <LevelUpCard
          category={category}
          fromLevel={subjectBefore.level}
          toLevel={getSubjectProgress(course.categoryId, progress, COURSE_INDEX).level}
          primaryLabel={celebrationPrimaryLabel}
          onPrimary={celebrationOnPrimary}
          secondaryLabel={celebrationSecondaryLabel}
          onSecondary={celebrationOnSecondary}
        />
      )}

      {stage === "collection" && parcours && (
        <CollectionProgressCard
          parcours={parcours}
          completedCourseIds={progress.completedCourseIds}
          justCompleted={parcoursJustCompleted}
          primaryLabel={celebrationPrimaryLabel}
          onPrimary={celebrationOnPrimary}
          secondaryLabel={celebrationSecondaryLabel}
          onSecondary={celebrationOnSecondary}
        />
      )}

      {stage === "quiz" && (
        <QuizPlayer
          key={quizAttempt}
          questions={course.quiz}
          accentColor={category.color}
          onFinish={handleQuizFinish}
        />
      )}

      {stage === "quizResult" && quizResultState && (
        <QuizOutcomeCard
          score={quizResultState.score}
          total={quizResultState.total}
          primaryLabel={streakFollows ? "Continuer →" : "Retour à l'accueil"}
          onPrimary={streakFollows ? advanceTail : () => navigate("/")}
          secondaryLabel="↻ Refaire le quiz"
          onSecondary={retryQuiz}
        />
      )}

      {stage === "streak" && (
        <StreakCelebration
          streak={progress.streak}
          subjectName={category.name}
          onHome={() => navigate("/")}
        />
      )}
    </div>
  );
}
