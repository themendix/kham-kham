import { NativeBox, NativeButton, NativeH3, NativeSpan } from "@/native/elements";
import { Link } from "@/native/router";
import { CheckCircle2 } from "@/native/icons";
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
export function ParcoursCard({ parcours, completedCount, courses, completedCourseIds, isCompleted, isExpanded, onToggleExpand, }: ParcoursCardProps) {
    const total = parcours.courseIds.length;
    const percent = total === 0 ? 0 : Math.round((completedCount / total) * 100);
    return (<Card shadow="sm" className="overflow-hidden">
      <NativeBox className="relative flex h-24 items-center justify-center bg-gradient-to-br from-indigo to-[#5c4b9e] text-[40px]">
        <NativeSpan className="absolute right-2.5 top-2.5 rounded-full border-[2.5px] border-ink bg-card px-2.5 py-1 font-heading text-[11px] font-extrabold">
          {isCompleted ? (<NativeSpan className="inline-flex items-center gap-1 text-success">
              <CheckCircle2 className="h-3.5 w-3.5" aria-hidden/> Terminé
            </NativeSpan>) : (`${percent}%`)}
        </NativeSpan>
        <NativeSpan aria-hidden>{parcours.emoji}</NativeSpan>
      </NativeBox>

      <NativeBox className="px-3.5 py-3">
        <NativeH3 className="text-[15px] font-extrabold leading-tight">{parcours.title}</NativeH3>

        <NativeBox className="mt-2 flex items-center gap-2">
          <NativeBox className="h-2 flex-1 overflow-hidden rounded-full bg-cream">
            <NativeBox className="h-full bg-primary" style={{ width: `${percent}%` }}/>
          </NativeBox>
          <NativeSpan className="font-heading text-[11px] font-extrabold text-ink-faint">
            {completedCount}/{total}
          </NativeSpan>
        </NativeBox>

        <NativeBox className="mt-2.5 flex items-center justify-between gap-3">
          <NativeButton onClick={onToggleExpand} className="font-heading text-xs font-bold text-ink/75">
            {isExpanded ? "Masquer ▴" : "Voir les cours ▾"}
          </NativeButton>
          <Badge tone="gold">
            {isCompleted ? "✓ Terminé" : `＋${parcours.xpReward} XP`}
          </Badge>
        </NativeBox>

        {isExpanded && (<NativeBox className="mt-1.5 flex flex-col">
            {courses.map((course) => (<Link key={course.id} to={`/cours/${course.id}`} className="flex items-center justify-between border-t-2 border-ink/10 py-2 first:border-t-0">
                <NativeSpan className="flex items-center gap-2 text-sm font-bold">
                  <NativeSpan aria-hidden>{course.emoji}</NativeSpan> {course.title}
                </NativeSpan>
                {completedCourseIds.includes(course.id) && (<CheckCircle2 className="h-4 w-4 shrink-0 text-success"/>)}
              </Link>))}
          </NativeBox>)}
      </NativeBox>
    </Card>);
}
