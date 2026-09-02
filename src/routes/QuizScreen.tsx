import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Heart, Star, Timer, Zap } from "lucide-react";
import type { CourseMeta } from "@/types";
import { useAppStore } from "@/store/useAppStore";
import { QUIZ_KEYS_BY_TERRITORY } from "@/data/quizKeys.generated";
import { PARCOURS } from "@/data/parcours";
import { getCourseMetaOrWarn } from "@/data/courseMeta";
import { TERRITORIES, type TerritoryId } from "@/lib/territories";
import { CONQUEST_STARS, CONQUEST_STAR_LABELS, getTerritoryConquest } from "@/lib/conquest";
import type { TerritoryConquest } from "@/lib/conquest";
import { DAILY_CHALLENGE_XP_BONUS } from "@/lib/gamification";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { ConquestMap } from "@/components/features/ConquestMap";
import { ParcoursCard } from "@/components/features/ParcoursCard";

/**
 * Territoire ouvert à l'arrivée sur l'écran : celui qui a le plus de questions à revoir, à défaut
 * le premier de la liste. Rien n'est persisté pour ça — la priorité de révision est la meilleure
 * approximation du « dernier joué » qu'on puisse dériver sans nouveau champ de progression.
 */
function pickDefaultTerritory(conquests: Record<string, TerritoryConquest>): TerritoryId {
  let best = TERRITORIES[0].id;
  let bestDue = 0;
  for (const territory of TERRITORIES) {
    const due = conquests[territory.id]?.dueCount ?? 0;
    if (due > bestDue) {
      best = territory.id;
      bestDue = due;
    }
  }
  return best;
}

/**
 * Écran d'accueil du module Quiz.
 *
 * **La carte de conquête est le sélecteur de territoire** : taper une région met à jour le panneau
 * de détail sous la carte (nom, étoiles, maîtrise, boutons Blitz et Survie), sans lancer de partie.
 * Les six cartes de territoire empilées qui suivaient la carte ont disparu — elles répétaient
 * verticalement ce que la carte dit déjà, et reléguaient les Quêtes très bas dans l'écran.
 */
export function QuizScreen() {
  const quizGame = useAppStore((s) => s.progress.quizGame);
  const challengeDone = useAppStore((s) => s.progress.daily.challengeDone);
  const completedCourseIds = useAppStore((s) => s.progress.completedCourseIds);
  const completedParcoursIds = useAppStore((s) => s.progress.completedParcoursIds);
  const checkDailyReset = useAppStore((s) => s.checkDailyReset);

  const [expandedParcoursId, setExpandedParcoursId] = useState<string | null>(null);

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

  const [selectedId, setSelectedId] = useState<TerritoryId>(() => pickDefaultTerritory(conquests));

  const totalStars = Object.values(conquests).reduce((sum, c) => sum + c.stars, 0);
  const maxStars = TERRITORIES.length * CONQUEST_STARS;

  const selected = TERRITORIES.find((t) => t.id === selectedId) ?? TERRITORIES[0];
  const selectedConquest = conquests[selected.id];

  return (
    <div className="pt-1">
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-[30px] font-extrabold">Quiz</h1>
        <Badge tone="gold">🐚 {quizGame.cauris}</Badge>
      </div>

      {/* Le Défi du jour n'a besoin que d'un tap par jour : une bande fine suffit, et la carte de
          conquête reprend la place que sa grande carte occupait. */}
      <Link
        to="/quiz/defi"
        className={`mt-3 flex items-center gap-2.5 rounded-full border-[3px] border-ink p-2 shadow-sm ${
          challengeDone
            ? "bg-card text-ink"
            : "bg-gradient-to-br from-indigo to-[#5c4b9e] text-white"
        }`}
      >
        <span className="grid h-[34px] w-[34px] shrink-0 place-items-center rounded-full border-[2.5px] border-ink bg-gold text-ink">
          <Zap className="h-4 w-4" fill="currentColor" aria-hidden />
        </span>
        <span className="flex-1 font-heading text-[13.5px] font-extrabold">Défi du jour</span>
        <span
          className={`shrink-0 rounded-full border-2 border-ink px-2.5 py-1 font-heading text-[11px] font-extrabold text-ink ${
            challengeDone ? "bg-cream" : "bg-gold"
          }`}
        >
          {challengeDone ? (
            <span className="inline-flex items-center gap-1">
              <CheckCircle2 className="h-3 w-3" aria-hidden /> Relevé ✓
            </span>
          ) : (
            `＋${DAILY_CHALLENGE_XP_BONUS} XP`
          )}
        </span>
      </Link>

      <Card data-guide="carte-conquete" className="mt-3.5 p-4">
        <div className="flex items-baseline justify-between gap-3">
          <h2 className="text-base font-extrabold">Carte de conquête</h2>
          <span className="font-heading text-xs font-extrabold text-ink-faint">
            ★ {totalStars} / {maxStars}
          </span>
        </div>

        <div className="mt-2.5 flex justify-center">
          <div className="w-full max-w-[260px] md:max-w-[340px]">
            <ConquestMap conquests={conquests} selectedId={selectedId} onSelect={setSelectedId} />
          </div>
        </div>
        <p className="mt-1.5 text-center font-heading text-[11px] font-bold text-ink-faint">
          Appuie sur un territoire pour lancer son quiz
        </p>

        <div
          data-guide="territoire"
          className="mt-4 border-t-[2.5px] border-dashed border-ink/20 pt-3.5"
        >
          <div className="flex items-start gap-2.5">
            <span className="text-[28px] leading-none" aria-hidden>
              {selected.emoji}
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="text-base font-extrabold leading-[1.15]">{selected.name}</h3>
              <p className="mt-0.5 text-xs font-medium leading-[1.3] text-ink-muted">
                {selected.tagline}
              </p>
            </div>
          </div>

          <div
            className="mt-2.5 flex items-center gap-[3px]"
            title={CONQUEST_STAR_LABELS.join(" · ")}
            aria-label={`${selectedConquest.stars} étoile${selectedConquest.stars > 1 ? "s" : ""} sur ${CONQUEST_STARS} — ${CONQUEST_STAR_LABELS.join(", ")}`}
          >
            {CONQUEST_STAR_LABELS.map((label, i) => (
              <Star
                key={label}
                className={`h-4 w-4 ${i < selectedConquest.stars ? "text-gold" : "text-ink/20"}`}
                fill="currentColor"
                aria-hidden
              />
            ))}
          </div>

          <ProgressBar percent={selectedConquest.masteryRatio * 100} fillClassName="bg-primary" />
          <div className="mt-1.5 flex items-baseline justify-between gap-3 font-heading text-[11px] font-extrabold text-ink-faint">
            <span>
              {selectedConquest.mastered} / {selectedConquest.total} acquises
            </span>
            {selectedConquest.dueCount > 0 && (
              <span className="text-primary-text">{selectedConquest.dueCount} à revoir</span>
            )}
          </div>

          <div className="mt-3 flex gap-2">
            <Link
              to={`/quiz/${selected.id}/blitz`}
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border-[3px] border-ink bg-primary p-2.5 font-heading text-[13px] font-extrabold text-white shadow-sm transition-transform active:translate-y-[3px] active:shadow-none"
            >
              <Timer className="h-3.5 w-3.5" aria-hidden /> Blitz
            </Link>
            <Link
              to={`/quiz/${selected.id}/survie`}
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border-[3px] border-ink bg-card p-2.5 font-heading text-[13px] font-extrabold shadow-sm transition-transform active:translate-y-[3px] active:shadow-none"
            >
              <Heart className="h-3.5 w-3.5" aria-hidden /> Survie
            </Link>
          </div>
        </div>
      </Card>

      <h2 className="mt-[22px] text-base font-extrabold">Quêtes</h2>
      <p className="mt-0.5 font-medium text-ink-muted">
        Des parcours guidés qui relient plusieurs cours autour d'un même thème.
      </p>
      <div className="mt-2.5 grid gap-5 md:grid-cols-2">
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
