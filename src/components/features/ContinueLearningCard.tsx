import { Link } from "react-router-dom";
import { PartyPopper } from "lucide-react";
import type { Category, Course } from "@/types";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { SUBJECT_GRADIENT } from "@/lib/subjectStyles";

interface ContinueLearningCardProps {
  course: Course | null;
  category: Category | null;
  /** true si ce cours est celui déjà entamé (lastCourseId), false si jamais ouvert */
  resumed: boolean;
}

/** Invite à reprendre (ou commencer) un cours ; état positif si tous les cours sont terminés */
export function ContinueLearningCard({ course, category, resumed }: ContinueLearningCardProps) {
  if (!course || !category) {
    return (
      <Card className="flex items-center gap-4 p-5">
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full border-[2.5px] border-ink bg-gold">
          <PartyPopper className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <h3 className="font-extrabold">Tu as tout terminé, bravo !</h3>
          <p className="text-sm font-medium text-[#5c554b]">Retourne à la Biblio pour découvrir plus de contenu.</p>
        </div>
        <Link to="/biblio">
          <Button variant="secondary">Voir la Biblio</Button>
        </Link>
      </Card>
    );
  }

  return (
    <Link to={`/cours/${course.id}`}>
      <Card className="flex items-center gap-4 overflow-hidden p-0">
        <div
          className={`flex h-full w-[90px] shrink-0 items-center justify-center self-stretch border-r-[3px] border-ink bg-gradient-to-br text-[38px] ${SUBJECT_GRADIENT[category.color]}`}
        >
          {course.emoji}
        </div>
        <div className="flex-1 py-4 pr-4">
          <Tag label={category.name} emoji={category.emoji} variant="dark" />
          <h3 className="mt-2 font-extrabold leading-tight">{course.title}</h3>
          <div className="mt-1.5 font-heading text-[13px] font-bold text-primary">
            {resumed ? "Reprendre →" : "Commencer →"}
          </div>
        </div>
      </Card>
    </Link>
  );
}
