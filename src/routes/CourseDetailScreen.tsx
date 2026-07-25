import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getCourse, COURSES } from "@/data/courses";
import { getCategory } from "@/data/categories";
import { PARCOURS } from "@/data/parcours";
import { useAppStore } from "@/store/useAppStore";
import { MASTERY_PER_COURSE } from "@/lib/gamification";
import { getSubjectProgress } from "@/lib/subjectProgress";
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

/** Écran de détail d'un cours : leçons paginées, puis séquence de fin de cours (apprentissage terminé, mini quiz optionnel, collection, streak) */
export function CourseDetailScreen() {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const course = getCourse(courseId ?? "");

  const progress = useAppStore((s) => s.progress);
  const completeCourse = useAppStore((s) => s.completeCourse);
  const addMastery = useAppStore((s) => s.addMastery);
  const recordQuizResult = useAppStore((s) => s.recordQuizResult);
  const updateStreak = useAppStore((s) => s.updateStreak);
  const setLastCourse = useAppStore((s) => s.setLastCourse);
  const markCourseStarted = useAppStore((s) => s.markCourseStarted);
  const completeLesson = useAppStore((s) => s.completeLesson);

  const [phase, setPhase] = useState<Phase>("lessons");
  const [lessonIndex, setLessonIndex] = useState(0);
  const [rankAtStart, setRankAtStart] = useState<string | null>(null);

  useEffect(() => {
    if (course) setLastCourse(course.id);
  }, [course, setLastCourse]);

  if (!course) {
    return (
      <div className="mx-auto max-w-md rounded-card border-[3px] border-ink bg-card p-8 text-center shadow-card">
        <p className="font-bold">Ce cours est introuvable.</p>
        <Link to="/biblio">
          <Button className="mt-4">Retour à la Biblio</Button>
        </Link>
      </div>
    );
  }
  const category = getCategory(course.categoryId)!;
  const parcours = PARCOURS.find((p) => p.courseIds.includes(course.id));

  function goPrevLesson() {
    setLessonIndex((i) => Math.max(0, i - 1));
  }

  function goNextLesson() {
    if (lessonIndex < course!.lessons.length - 1) {
      completeLesson(course!.id, course!.lessons[lessonIndex].id);
      markCourseStarted(course!.id);
      setLessonIndex((i) => i + 1);
    } else {
      if (course!.lessons.length === 1) markCourseStarted(course!.id);
      finishLearning();
    }
  }

  function finishLearning() {
    const alreadyCompleted = progress.completedCourseIds.includes(course!.id);
    setRankAtStart(progress.rank);
    completeLesson(course!.id, course!.lessons[lessonIndex].id);
    completeCourse(course!.id, course!.xp);
    if (!alreadyCompleted) addMastery(course!.categoryId, MASTERY_PER_COURSE);
    updateStreak();
    setPhase("learningDone");
  }

  function advanceOutro() {
    setPhase(parcours ? "collection" : "streak");
  }

  function handleQuizFinish(score: number, total: number) {
    recordQuizResult({ courseId: course!.id, score, total, date: new Date().toISOString() });
    advanceOutro();
  }

  const rankedUp = rankAtStart !== null && progress.rank !== rankAtStart;

  return (
    <div className="mx-auto max-w-2xl">
      <button
        onClick={() => navigate(-1)}
        className="mb-3 inline-flex items-center gap-1.5 font-heading text-sm font-bold text-[#8a8071]"
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
            <p className="mt-1.5 text-sm font-medium text-[#5c554b]">{course.description}</p>
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

      {phase === "learningDone" && (
        <LearningDoneCard
          course={course}
          category={category}
          subject={getSubjectProgress(course.categoryId, progress, COURSES)}
          rankedUp={rankedUp}
          newRank={progress.rank}
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
          onContinue={() => setPhase("streak")}
        />
      )}

      {phase === "streak" && (
        <StreakCelebration streak={progress.streak} subjectName={category.name} onHome={() => navigate("/")} />
      )}
    </div>
  );
}
