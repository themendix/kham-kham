import { useState } from "react";
import { PARCOURS } from "@/data/parcours";
import { getCourse } from "@/data/courses";
import type { Course } from "@/types";
import { useAppStore } from "@/store/useAppStore";
import { ParcoursCard } from "@/components/features/ParcoursCard";

/** Onglet Collections : parcours guidés reliant plusieurs cours entre eux */
export function CollectionsScreen() {
  const completedCourseIds = useAppStore((s) => s.progress.completedCourseIds);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="pt-1">
      <h1 className="mt-1.5 text-[30px] font-extrabold">Collections</h1>
      <p className="mb-3.5 mt-0.5 font-medium text-[#7a7266]">
        Des parcours guidés pour relier les savoirs entre eux.
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        {PARCOURS.map((parcours) => {
          const completedCount = parcours.courseIds.filter((id) => completedCourseIds.includes(id)).length;
          const courses = parcours.courseIds
            .map(getCourse)
            .filter((c): c is Course => c !== undefined);
          return (
            <ParcoursCard
              key={parcours.id}
              parcours={parcours}
              completedCount={completedCount}
              courses={courses}
              completedCourseIds={completedCourseIds}
              isExpanded={expandedId === parcours.id}
              onToggleExpand={() => setExpandedId((id) => (id === parcours.id ? null : parcours.id))}
            />
          );
        })}
      </div>
    </div>
  );
}
