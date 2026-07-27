import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import type { CourseMeta, Parcours } from "@/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";

interface ParcoursCardProps {
  parcours: Parcours;
  completedCount: number;
  courses: CourseMeta[];
  completedCourseIds: string[];
  /** `progress.completedParcoursIds.includes(parcours.id)` — xpReward déjà créditée */
  isCompleted: boolean;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

/** Carte d'un parcours guidé : bannière, progression, récompense XP et liste dépliable des cours */
export function ParcoursCard({
  parcours,
  completedCount,
  courses,
  completedCourseIds,
  isCompleted,
  isExpanded,
  onToggleExpand,
}: ParcoursCardProps) {
  const total = parcours.courseIds.length;
  const percent = total === 0 ? 0 : Math.round((completedCount / total) * 100);

  return (
    <Card className="overflow-hidden">
      <div className="relative flex h-[130px] items-center justify-center bg-gradient-to-br from-indigo to-[#5c4b9e] text-[60px]">
        <span className="absolute right-3 top-3 grid h-12 w-12 place-items-center rounded-full border-[2.5px] border-ink bg-card font-heading text-[13px] font-extrabold">
          {isCompleted ? <CheckCircle2 className="h-6 w-6 text-success" /> : `${percent}%`}
        </span>
        {parcours.emoji}
      </div>
      <div className="px-[18px] pb-[18px] pt-4">
        <div className="text-xl font-extrabold leading-tight">{parcours.title}</div>
        <div className="mt-1.5 text-sm font-medium text-ink-muted">{parcours.description}</div>
        <div className="mt-3.5 flex items-center justify-between">
          <span className="text-[13px] font-bold text-ink-faint">
            {completedCount} / {total} cours
          </span>
          <Badge tone="gold">{isCompleted ? "✓ Parcours terminé" : `＋${parcours.xpReward} XP`}</Badge>
        </div>
        <ProgressBar percent={percent} />

        <button
          onClick={onToggleExpand}
          className="mt-3.5 font-heading text-[13px] font-bold text-ink/75"
        >
          {isExpanded ? "Masquer ▴" : "Voir les cours ▾"}
        </button>

        {isExpanded && (
          <div className="mt-2 flex flex-col">
            {courses.map((course) => (
              <Link
                key={course.id}
                to={`/cours/${course.id}`}
                className="flex items-center justify-between border-t-2 border-ink/10 py-2.5 first:border-t-0"
              >
                <span className="flex items-center gap-2 font-bold">
                  <span>{course.emoji}</span> {course.title}
                </span>
                {completedCourseIds.includes(course.id) && (
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-success" />
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}
