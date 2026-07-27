import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import type { Course } from "@/types";
import { getFullCourse } from "@/data/courseContent";
import { getCategory } from "@/data/categories";
import { COURSE_INDEX } from "@/data/coursesIndex.generated";
import { PARCOURS } from "@/data/parcours";
import { useAppStore } from "@/store/useAppStore";
import { getSubjectProgress, type SubjectProgress } from "@/lib/subjectProgress";
import { lessonKey } from "@/lib/featured";
import { SUBJECT_GRADIENT } from "@/lib/subjectStyles";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { Badge } from "@/components/ui/Badge";
import { LessonViewer } from "@/components/features/LessonViewer";
import { QuizPlayer } from "@/components/features/QuizPlayer";
import { LearningDoneCard } from "@/components/features/LearningDoneCard";
import { CollectionProgressCard } from "@/components/features/CollectionProgressCard";
import { StreakCelebration } from "@/components/features/StreakCelebration";

type Phase = "lessons" | "learningDone" | "quiz" | "collection" | "streak";

/**
 * Charge le contenu complet du cours demandé (leçons + quiz) — en ne récupérant que le chunk de
 * sa matière — avant de monter `CourseDetailBody`. Un cours introuvable dans l'index léger est
 * un vrai 404, distinct d'un chargement en cours. Voir docs/ARCHITECTURE.md § Découpage du bundle.
 */
export function CourseDetailScreen() {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();

  const existsInCatalog = COURSE_INDEX.some((c) => c.id === courseId);
  const [course, setCourse] = useState<Course | undefined>(undefined);

  useEffect(() => {
    if (!existsInCatalog || !courseId) return;
    let cancelled = false;
    getFullCourse(courseId).then((c) => {
      if (!cancelled) setCourse(c);
    });
    return () => {
      cancelled = true;
    };
  }, [courseId, existsInCatalog]);

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

/** Écran de détail d'un cours : leçons paginées, puis séquence de fin de cours (apprentissage terminé, mini quiz optionnel, collection, streak) */
function CourseDetailBody({ course }: { course: Course }) {
  const navigate = useNavigate();
  const progress = useAppStore((s) => s.progress);
  const completeCourse = useAppStore((s) => s.completeCourse);
  const recordQuizResult = useAppStore((s) => s.recordQuizResult);
  const updateStreak = useAppStore((s) => s.updateStreak);
  const setLastCourse = useAppStore((s) => s.setLastCourse);
  const markCourseStarted = useAppStore((s) => s.markCourseStarted);
  const completeLesson = useAppStore((s) => s.completeLesson);

  const [phase, setPhase] = useState<Phase>("lessons");
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
  // Niveau numérique (distinct du rang nommé) : seul indicateur de progression une fois le
  // dernier rang nommé atteint (A1), où `rank` reste figé sur "Gardien du savoir".
  const [levelAtStart, setLevelAtStart] = useState<number | null>(null);
  const [subjectBefore, setSubjectBefore] = useState<SubjectProgress | null>(null);
  const [isRevision, setIsRevision] = useState(false);
  const [parcoursJustCompleted, setParcoursJustCompleted] = useState(false);

  useEffect(() => {
    setLastCourse(course.id);
  }, [course.id, setLastCourse]);

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
    setRankAtStart(progress.rank);
    setLevelAtStart(progress.level);
    setSubjectBefore(getSubjectProgress(course.categoryId, progress, COURSE_INDEX));
    setIsRevision(alreadyCompleted);
    completeLesson(course.id, course.lessons[lessonIndex].id);
    completeCourse(course.id, course.xp);
    updateStreak();
    if (parcours && !progress.completedParcoursIds.includes(parcours.id)) {
      // completeCourse (set Zustand) est synchrone : l'état est déjà à jour ici.
      setParcoursJustCompleted(useAppStore.getState().progress.completedParcoursIds.includes(parcours.id));
    }
    setPhase("learningDone");
  }

  function advanceOutro() {
    setPhase(parcours ? "collection" : "streak");
  }

  function handleQuizFinish(score: number, total: number) {
    recordQuizResult({ courseId: course.id, score, total, date: new Date().toISOString() });
    advanceOutro();
  }

  const rankedUp = rankAtStart !== null && progress.rank !== rankAtStart;
  // Célébration de montée de niveau numérique, distincte du changement de rang nommé — c'est
  // elle qui prend le relais une fois "Gardien du savoir" atteint (A1), où `rankedUp` ne se
  // déclenchera plus jamais puisque `rank` reste figé.
  const levelUp = levelAtStart !== null && progress.level > levelAtStart && !rankedUp;

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="sr-only">{course.title}</h1>
      <button
        onClick={() => navigate(-1)}
        className="mb-3 inline-flex items-center gap-1.5 font-heading text-sm font-bold text-ink-faint"
      >
        <ArrowLeft className="h-4 w-4" /> Retour
      </button>

      {phase !== "lessons" && (
        <Card className="mb-4 overflow-hidden">
          <div
            className={`flex h-[130px] items-center justify-center border-b-[3px] border-ink bg-gradient-to-br text-[54px] ${SUBJECT_GRADIENT[category.color]}`}
          >
            {course.emoji}
          </div>
          <div className="px-[18px] pb-[18px] pt-4">
            <Tag label={category.name} emoji={category.emoji} variant="dark" />
            <div className="mt-2.5 text-xl font-extrabold">{course.title}</div>
            <p className="mt-1.5 text-sm font-medium text-ink-muted">{course.description}</p>
            <div className="mt-3 flex flex-wrap gap-2.5">
              <Badge>📖 {course.lessons.length} leçons</Badge>
              <Badge>✅ {course.quiz.length} quiz</Badge>
              <Badge tone="gold">＋{course.xp} XP</Badge>
            </div>
          </div>
        </Card>
      )}

      {phase === "lessons" && (
        <LessonViewer
          lesson={course.lessons[lessonIndex]}
          lessonIndex={lessonIndex}
          totalLessons={course.lessons.length}
          accentColor={category.color}
          onPrev={goPrevLesson}
          onNext={goNextLesson}
          nextLabel={lessonIndex < course.lessons.length - 1 ? "Suivant →" : "J'ai terminé ✓"}
        />
      )}

      {phase === "learningDone" && subjectBefore && (
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
          onMiniQuiz={() => setPhase("quiz")}
          onSkip={advanceOutro}
        />
      )}

      {phase === "quiz" && (
        <QuizPlayer questions={course.quiz} accentColor={category.color} onFinish={handleQuizFinish} />
      )}

      {phase === "collection" && parcours && (
        <CollectionProgressCard
          parcours={parcours}
          completedCourseIds={progress.completedCourseIds}
          justCompleted={parcoursJustCompleted}
          onContinue={() => setPhase("streak")}
        />
      )}

      {phase === "streak" && (
        <StreakCelebration streak={progress.streak} subjectName={category.name} onHome={() => navigate("/")} />
      )}
    </div>
  );
}
