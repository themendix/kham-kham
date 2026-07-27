import { useState } from "react";
import { PARCOURS } from "@/data/parcours";
import { getCourseMetaOrWarn } from "@/data/courseMeta";
import type { CourseMeta } from "@/types";
import { useAppStore } from "@/store/useAppStore";
import { ParcoursCard } from "@/components/features/ParcoursCard";

/** Onglet Collections : parcours guidés reliant plusieurs cours entre eux */
export function CollectionsScreen() {
  const completedCourseIds = useAppStore((s) => s.progress.completedCourseIds);
  const completedParcoursIds = useAppStore((s) => s.progress.completedParcoursIds);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="pt-1">
      <h1 className="mt-1.5 text-[30px] font-extrabold">Collections</h1>
      <p className="mb-3.5 mt-0.5 font-medium text-ink-muted">
        Des parcours guidés pour relier les savoirs entre eux.
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        {PARCOURS.map((parcours) => {
          const completedCount = parcours.courseIds.filter((id) => completedCourseIds.includes(id)).length;
          const courses = parcours.courseIds
            .map((id) => getCourseMetaOrWarn(id, `parcours ${parcours.id}`, { strict: true }))
            .filter((c): c is CourseMeta => c !== undefined);
          return (
            <ParcoursCard
              key={parcours.id}
              parcours={parcours}
              completedCount={completedCount}
              courses={courses}
              completedCourseIds={completedCourseIds}
              isCompleted={completedParcoursIds.includes(parcours.id)}
              isExpanded={expandedId === parcours.id}
              onToggleExpand={() => setExpandedId((id) => (id === parcours.id ? null : parcours.id))}
            />
          );
        })}
      </div>
    </div>
  );
}
