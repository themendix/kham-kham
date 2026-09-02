import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import type { CourseMeta, Parcours } from "@/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

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

/**
 * Carte d'une quête (parcours guidé) sur l'écran du module Quiz.
 *
 * Format compact : bandeau de 96 px, titre, barre de progression et compte de cours sur une seule
 * ligne. La description du parcours n'y figure plus — trois quêtes empilées sous la carte de
 * conquête doivent tenir dans un écran, et le titre suffit à les distinguer. Ce qu'elles
 * contiennent reste à un geste, derrière « Voir les cours ».
 */
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
    <Card shadow="sm" className="overflow-hidden">
      <div className="relative flex h-24 items-center justify-center bg-gradient-to-br from-indigo to-[#5c4b9e] text-[40px]">
        <span className="absolute right-2.5 top-2.5 rounded-full border-[2.5px] border-ink bg-card px-2.5 py-1 font-heading text-[11px] font-extrabold">
          {isCompleted ? (
            <span className="inline-flex items-center gap-1 text-success">
              <CheckCircle2 className="h-3.5 w-3.5" aria-hidden /> Terminé
            </span>
          ) : (
            `${percent}%`
          )}
        </span>
        <span aria-hidden>{parcours.emoji}</span>
      </div>

      <div className="px-3.5 py-3">
        <h3 className="text-[15px] font-extrabold leading-tight">{parcours.title}</h3>

        <div className="mt-2 flex items-center gap-2">
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-cream">
            <div className="h-full bg-primary" style={{ width: `${percent}%` }} />
          </div>
          <span className="font-heading text-[11px] font-extrabold text-ink-faint">
            {completedCount}/{total}
          </span>
        </div>

        <div className="mt-2.5 flex items-center justify-between gap-3">
          <button onClick={onToggleExpand} className="font-heading text-xs font-bold text-ink/75">
            {isExpanded ? "Masquer ▴" : "Voir les cours ▾"}
          </button>
          <Badge tone="gold">
            {isCompleted ? "✓ Terminé" : `＋${parcours.xpReward} XP`}
          </Badge>
        </div>

        {isExpanded && (
          <div className="mt-1.5 flex flex-col">
            {courses.map((course) => (
              <Link
                key={course.id}
                to={`/cours/${course.id}`}
                className="flex items-center justify-between border-t-2 border-ink/10 py-2 first:border-t-0"
              >
                <span className="flex items-center gap-2 text-sm font-bold">
                  <span aria-hidden>{course.emoji}</span> {course.title}
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
