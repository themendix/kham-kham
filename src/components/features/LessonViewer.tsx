import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { MapPin, Leaf, Users, Globe, Coins, Landmark, Star } from "lucide-react";
import type { Lesson, SubjectColor } from "@/types";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { SUBJECT_BG } from "@/lib/subjectStyles";

interface LessonViewerProps {
  lesson: Lesson;
  lessonIndex: number;
  totalLessons: number;
  accentColor: SubjectColor;
  onPrev: () => void;
  onNext: () => void;
  nextLabel: string;
}

/** Icône par rubrique de fiche-pays (ordre 1 à 7 : Situation territoriale, Le milieu, Population, Société, Économie et ressources, Institutions et politique, Repères et singularités) */
const RUBRIQUE_ICONS: LucideIcon[] = [MapPin, Leaf, Users, Globe, Coins, Landmark, Star];

/** Découpe le contenu d'une leçon en blocs : rubriques titrées "#### N. Titre" (fiches-pays) ou simples paragraphes (leçons d'Histoire) */
function renderLessonContent(content: string, accentColor: SubjectColor) {
  const lines = content
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  const blocks: ReactNode[] = [];
  let isFirstRubrique = true;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith("#### ")) {
      const raw = line.slice(5);
      const match = raw.match(/^(\d+)\.\s*(.+)$/);
      const heading = match ? match[2] : raw;
      const Icon = match ? (RUBRIQUE_ICONS[Number(match[1]) - 1] ?? MapPin) : MapPin;
      const nextLine = lines[i + 1];
      const body = nextLine && !nextLine.startsWith("#### ") ? nextLine : null;
      if (body) i++;

      blocks.push(
        <div
          key={i}
          className={`flex items-start gap-3 ${
            isFirstRubrique ? "mt-5" : "mt-4 border-t-[2px] border-ink/10 pt-4"
          }`}
        >
          <div
            className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border-[2.5px] border-ink ${SUBJECT_BG[accentColor]}`}
          >
            <Icon className="h-4 w-4" />
          </div>
          <div>
            <h3 className="font-heading text-[15px] font-extrabold text-ink">{heading}</h3>
            {body && (
              <p className="mt-1 text-[15.5px] font-medium leading-relaxed text-[#5c554b]">{body}</p>
            )}
          </div>
        </div>,
      );
      isFirstRubrique = false;
    } else {
      blocks.push(
        <p key={i} className="mt-2.5 text-[15.5px] font-medium leading-relaxed text-[#5c554b]">
          {line}
        </p>,
      );
    }
  }

  return blocks;
}

/** Affiche une leçon à la fois, avec pagination et progression dans le cours */
export function LessonViewer({
  lesson,
  lessonIndex,
  totalLessons,
  accentColor,
  onPrev,
  onNext,
  nextLabel,
}: LessonViewerProps) {
  return (
    <Card className="p-6 md:p-8">
      <div className="font-heading text-xs font-bold uppercase tracking-wide text-[#9b9284]">
        Leçon {lessonIndex + 1} / {totalLessons}
      </div>
      <ProgressBar percent={((lessonIndex + 1) / totalLessons) * 100} fillClassName={SUBJECT_BG[accentColor]} />

      <h2 className="mt-5 text-xl font-extrabold leading-tight">{lesson.title}</h2>
      <div>{renderLessonContent(lesson.content, accentColor)}</div>

      <div className="mt-6 flex justify-between gap-3">
        <Button variant="secondary" onClick={onPrev} disabled={lessonIndex === 0}>
          ← Précédent
        </Button>
        <Button variant="primary" onClick={onNext}>
          {nextLabel}
        </Button>
      </div>
    </Card>
  );
}
