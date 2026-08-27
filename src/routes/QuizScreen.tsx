import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Heart, Star, Timer, Trophy, Zap } from "lucide-react";
import type { CourseMeta } from "@/types";
import { useAppStore } from "@/store/useAppStore";
import { QUIZ_KEYS_BY_TERRITORY } from "@/data/quizKeys.generated";
import { PARCOURS } from "@/data/parcours";
import { getCourseMetaOrWarn } from "@/data/courseMeta";
import { TERRITORIES, TRANSVERSAL_TERRITORY_ID, type TerritoryId } from "@/lib/territories";
import { CONQUEST_STARS, CONQUEST_STAR_LABELS, getTerritoryConquest } from "@/lib/conquest";
import type { TerritoryConquest } from "@/lib/conquest";
import { DAILY_CHALLENGE_XP_BONUS } from "@/lib/gamification";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { ConquestMap } from "@/components/features/ConquestMap";
import { ParcoursCard } from "@/components/features/ParcoursCard";

/** Écran d'accueil du module Quiz : carte de conquête, territoires, Défi du jour et quêtes. */
export function QuizScreen() {
  const quizGame = useAppStore((s) => s.progress.quizGame);
  const challengeDone = useAppStore((s) => s.progress.daily.challengeDone);
  const completedCourseIds = useAppStore((s) => s.progress.completedCourseIds);
  const completedParcoursIds = useAppStore((s) => s.progress.completedParcoursIds);
  const checkDailyReset = useAppStore((s) => s.checkDailyReset);

  const [expandedParcoursId, setExpandedParcoursId] = useState<string | null>(null);
  const territoryRefs = useRef<Partial<Record<TerritoryId, HTMLDivElement | null>>>({});

  useEffect(() => {
    checkDailyReset();
  }, [checkDailyReset]);

  const conquests = useMemo(() => {
    const byId: Record<string, TerritoryConquest> = {};
    for (const territory of TERRITORIES) {
      byId[territory.id] = getTerritoryConquest({
        territoryId: territory.id,
        keys: QUIZ_KEYS_BY_TERRITORY[territory.id] ?? [],
        stats: quizGame.questions,
        records: quizGame.records[territory.id],
      });
    }
    return byId;
  }, [quizGame]);

  const totalDue = Object.values(conquests).reduce((sum, c) => sum + c.dueCount, 0);
  const totalStars = Object.values(conquests).reduce((sum, c) => sum + c.stars, 0);
  const maxStars = TERRITORIES.length * CONQUEST_STARS;

  function scrollToTerritory(territoryId: TerritoryId) {
    territoryRefs.current[territoryId]?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <div className="pt-1">
      <h1 className="mt-1.5 text-[30px] font-extrabold">Quiz</h1>
      <p className="mb-3.5 mt-0.5 font-medium text-ink-muted">
        Six territoires, toutes les matières mélangées. Se tromper ouvre la leçon qui répond.
      </p>

      <div className="mb-5 flex flex-wrap items-center gap-2.5">
        <Badge tone="gold">🐚 {quizGame.cauris} cauris</Badge>
        <Badge>
          ★ {totalStars} / {maxStars}
        </Badge>
        {totalDue > 0 && (
          <Badge>
            {totalDue} question{totalDue > 1 ? "s" : ""} à revoir
          </Badge>
        )}
      </div>

      <Link to="/quiz/defi" className="mb-5 block">
        <Card className="overflow-hidden">
          <div className="flex flex-col gap-4 bg-gradient-to-br from-indigo to-[#5c4b9e] p-5 text-white md:flex-row md:items-center md:justify-between md:p-6">
            <div className="flex items-center gap-3.5">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-[2.5px] border-ink bg-gold text-ink">
                <Zap className="h-6 w-6" fill="currentColor" aria-hidden />
              </div>
              <div>
                <h2 className="text-lg font-extrabold">Défi du jour</h2>
                <p className="text-sm font-medium text-white/85">
                  5 questions, dont celles que tu as ratées.
                </p>
              </div>
            </div>
            {challengeDone ? (
              <Badge tone="gold">
                <CheckCircle2 className="h-3.5 w-3.5" aria-hidden /> Relevé ✓
              </Badge>
            ) : (
              <Badge tone="gold">＋{DAILY_CHALLENGE_XP_BONUS} XP</Badge>
            )}
          </div>
        </Card>
      </Link>

      <Card className="mb-5 flex flex-col items-center p-6">
        <h2 className="self-start text-lg font-extrabold">Carte de conquête</h2>
        <p className="mt-0.5 self-start text-sm font-medium text-ink-muted">
          Chaque territoire se remplit à mesure que tu acquiers ses questions.
        </p>
        <div className="mt-4 flex w-full justify-center">
          <ConquestMap conquests={conquests} onSelect={scrollToTerritory} />
        </div>
        <p className="mt-3 self-start text-sm font-medium leading-snug text-ink-faint">
          🌍 Le Baobab n'est pas sur la carte : il rassemble ce qui traverse tout le continent, et
          n'a donc pas de géographie. Il t'attend juste en dessous.
        </p>
      </Card>

      <div className="grid gap-5 md:grid-cols-2">
        {TERRITORIES.map((territory) => {
          const conquest = conquests[territory.id];
          const records = quizGame.records[territory.id] ?? { blitz: 0, survie: 0 };
          return (
            <div
              key={territory.id}
              ref={(el) => {
                territoryRefs.current[territory.id] = el;
              }}
            >
              <Card className="flex h-full flex-col p-6">
                <div className="flex items-start gap-3">
                  <span className="text-3xl" aria-hidden>
                    {territory.emoji}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-lg font-extrabold leading-tight">{territory.name}</h2>
                    <p className="mt-0.5 text-sm font-medium leading-snug text-ink-muted">
                      {territory.tagline}
                    </p>
                  </div>
                </div>

                <div
                  className="mt-3 flex items-center gap-1"
                  title={CONQUEST_STAR_LABELS.join(" · ")}
                  aria-label={`${conquest.stars} étoile${conquest.stars > 1 ? "s" : ""} sur ${CONQUEST_STARS} — ${CONQUEST_STAR_LABELS.join(", ")}`}
                >
                  {CONQUEST_STAR_LABELS.map((label, i) => (
                    <Star
                      key={label}
                      className={`h-5 w-5 ${i < conquest.stars ? "text-gold" : "text-ink/20"}`}
                      fill="currentColor"
                      aria-hidden
                    />
                  ))}
                </div>

                <ProgressBar percent={conquest.masteryRatio * 100} fillClassName="bg-primary" />
                <p className="mt-2 font-heading text-xs font-bold uppercase tracking-wide text-ink-faint">
                  {conquest.mastered} / {conquest.total} questions acquises
                  {conquest.dueCount > 0 && (
                    <span className="text-primary-text"> · {conquest.dueCount} à revoir</span>
                  )}
                </p>

                {conquest.bestScore > 0 && (
                  <p className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted">
                    <Trophy className="h-4 w-4 text-gold" aria-hidden />
                    Records : {records.blitz} en Blitz, {records.survie} en Survie
                  </p>
                )}

                {territory.id === TRANSVERSAL_TERRITORY_ID && (
                  <p className="mt-2 text-sm font-medium leading-snug text-ink-faint">
                    Hors carte : le Baobab rassemble ce qui traverse le continent — panafricanisme,
                    diaspora, arts et création.
                  </p>
                )}

                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    to={`/quiz/${territory.id}/blitz`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border-[3px] border-ink bg-primary px-5 py-2.5 font-heading text-sm font-bold text-white shadow-sm transition-transform active:translate-y-[3px] active:shadow-none"
                  >
                    <Timer className="h-4 w-4" aria-hidden /> Blitz 60 s
                  </Link>
                  <Link
                    to={`/quiz/${territory.id}/survie`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border-[3px] border-ink bg-card px-5 py-2.5 font-heading text-sm font-bold shadow-sm transition-transform active:translate-y-[3px] active:shadow-none"
                  >
                    <Heart className="h-4 w-4" aria-hidden /> Survie
                  </Link>
                </div>
              </Card>
            </div>
          );
        })}
      </div>

      <h2 className="mt-8 text-lg font-extrabold">Quêtes</h2>
      <p className="mt-0.5 font-medium text-ink-muted">
        Des parcours guidés qui relient plusieurs cours autour d'un même thème.
      </p>
      <div className="mt-4 grid gap-5 md:grid-cols-2">
        {PARCOURS.map((parcours) => {
          const completedCount = parcours.courseIds.filter((id) =>
            completedCourseIds.includes(id),
          ).length;
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
              isExpanded={expandedParcoursId === parcours.id}
              onToggleExpand={() =>
                setExpandedParcoursId((id) => (id === parcours.id ? null : parcours.id))
              }
            />
          );
        })}
      </div>
    </div>
  );
}
