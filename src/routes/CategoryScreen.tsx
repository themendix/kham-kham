import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import type { CourseMeta, UserProgress } from "@/types";
import { COURSE_INDEX } from "@/data/coursesIndex.generated";
import { getCategory } from "@/data/categories";
import { useAppStore } from "@/store/useAppStore";
import { SUBJECT_DEEP, SUBJECT_GRADIENT } from "@/lib/subjectStyles";
import { getSubjectProgress, getCourseStatus, isSubjectEmerging, type CourseStatus } from "@/lib/subjectProgress";
import { GEOGRAPHIE_REGIONS_ORDER, getGeographieRegion } from "@/lib/geographieRegions";
import { normalizeSearchText } from "@/lib/search";
import { getCourseImage, getCourseImagePosition } from "@/lib/courseImages";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CourseCard } from "@/components/features/CourseCard";

type Filter = "tout" | CourseStatus;

/** Nombre de cartes affichées avant le bouton « Voir plus » (liste plate, sans sous-groupement). */
const DEFAULT_VISIBLE = 12;
/** Idem, mais par région pour la Géographie — sections plus courtes, donc seuil plus bas. */
const DEFAULT_VISIBLE_PER_REGION = 8;
/** Nombre de cartes ajoutées à chaque clic sur « Voir plus ». */
const REVEAL_STEP = 12;

/*
 * Géométrie de la piste sinueuse. Les abscisses sont exprimées dans un repère de référence de
 * `TRACK_W` px de large : le SVG l'étire à la largeur réelle (`preserveAspectRatio="none"`),
 * pendant que les jalons se positionnent en pourcentage — les deux coïncident exactement à
 * `TRACK_W` et dérivent de quelques pixels ailleurs, invisible sur une ligne pointillée dont
 * les extrémités passent sous les vignettes.
 */
const TRACK_W = 358;
/** Demi-côté d'une tuile de jalon (px, fixe — une vignette photo ne se met pas à l'échelle). */
const NODE_R = 38;
/** Écart vertical entre deux jalons consécutifs (px). */
const ROW_GAP = 128;
/** Ordonnée du premier jalon (px). */
const START_Y = 56;
/** Abscisses des deux colonnes du zig-zag, dans le repère `TRACK_W`. */
const COL_X = [70, 288];
/** Décalage d'un jalon par rapport au bord de la piste, en % — symétrique entre les 2 colonnes. */
const NODE_INSET = `${((COL_X[0] - NODE_R) / TRACK_W) * 100}%`;

function sortByTitle(courses: CourseMeta[]): CourseMeta[] {
  return [...courses].sort((a, b) => a.title.localeCompare(b.title, "fr", { sensitivity: "base" }));
}

/** Première lettre du titre, désaccentuée, pour regrouper « Égypte » sous « E » plutôt que sous une entrée « É » isolée. */
function indexLetter(title: string): string {
  return normalizeSearchText(title[0]).toUpperCase();
}

const FILTERS: { key: Filter; label: string }[] = [
  { key: "tout", label: "Tout" },
  { key: "afaire", label: "À faire" },
  { key: "encours", label: "En cours" },
  { key: "termine", label: "Terminé" },
];

const EMPTY_MESSAGE: Record<Filter, string> = {
  tout: "Aucun cours dans cette matière pour l'instant.",
  afaire: "Aucun cours à faire ici.",
  encours: "Tu n'as aucun cours en cours.",
  termine: "Tu n'as encore terminé aucun cours ici.",
};

type GeoView = "region" | "index";

/** Trace la ligne pointillée qui relie les jalons : une Bézier cubique entre chaque paire. */
function buildPathD(count: number): string {
  let d = "";
  for (let i = 0; i < count; i++) {
    const x = COL_X[i % 2];
    const y = START_Y + i * ROW_GAP;
    if (i === 0) {
      d += `M ${x} ${y} `;
    } else {
      const prevX = COL_X[(i - 1) % 2];
      const midY = (START_Y + (i - 1) * ROW_GAP + y) / 2;
      d += `C ${prevX} ${midY} ${x} ${midY} ${x} ${y} `;
    }
  }
  return d.trim();
}

/**
 * Cadrage d'une vignette de Géographie, où le drapeau est le repère prioritaire.
 *
 * Une tuile carrée ne rogne plus les coins, donc `object-cover` + `object-right`/`object-left`
 * suffirait à garder le drapeau dans le cadre : une source paysage (800 × ~500) réduite au
 * carré perd de la largeur, jamais de la hauteur. Mais il n'y ferait plus que ~15 px de haut,
 * trop petit pour être reconnu. L'image est donc zoomée à 175 % de la hauteur de la tuile et
 * collée en haut, du côté du drapeau (`getCourseImagePosition`) : la fenêtre ne montre que le
 * haut de l'illustration, où le drapeau fait 30 à 45 px. Le facteur est calé sur le cas le plus
 * défavorable du lot — Cap-Vert, dont le drapeau descend jusqu'à 48 % de la hauteur source, et
 * qui reste entier.
 */
const FLAG_FRAME_CLASS = "absolute top-0 h-[175%] w-auto max-w-none";

/** Un jalon de la piste : vignette ronde, badge d'état, et l'étiquette du cours à côté. */
function CourseNode({
  course,
  index,
  status,
  category,
}: {
  course: CourseMeta;
  index: number;
  status: CourseStatus;
  category: NonNullable<ReturnType<typeof getCategory>>;
}) {
  const image = getCourseImage(course.id);
  const onLeft = index % 2 === 0;
  // Seule la Géographie a un drapeau à préserver dans la vignette.
  const flagFramed = category.id === "geo";

  return (
    <Link
      to={`/cours/${course.id}`}
      style={{ top: START_Y + index * ROW_GAP - NODE_R, [onLeft ? "left" : "right"]: NODE_INSET }}
      className={`absolute flex items-center gap-3.5 ${onLeft ? "flex-row" : "flex-row-reverse"}`}
    >
      <div
        className={`relative h-[76px] w-[76px] shrink-0 overflow-hidden rounded-[18px] border-[3px] border-ink bg-gradient-to-br shadow-sm ${SUBJECT_GRADIENT[category.color]} ${
          status === "encours" ? "sankofa-node-pulse" : ""
        }`}
      >
        {image ? (
          <img
            src={image.src}
            srcSet={image.srcSet}
            sizes={flagFramed ? "208px" : "76px"}
            alt=""
            loading="lazy"
            className={`${
              flagFramed
                ? `${FLAG_FRAME_CLASS} ${getCourseImagePosition(course.id) === "left" ? "left-0" : "right-0"}`
                : "h-full w-full object-cover object-center"
            } ${status !== "afaire" ? "" : flagFramed ? "opacity-90" : "opacity-55 grayscale"}`}
          />
        ) : (
          <span className="grid h-full w-full place-items-center text-3xl">{course.emoji}</span>
        )}
      </div>
      <span
        className={`flex max-w-[160px] items-start gap-2 rounded-[14px] border-[3px] border-ink px-3 py-2 font-heading text-[13px] font-extrabold leading-tight shadow-[3px_3px_0_0_var(--color-ink)] ${
          status === "afaire" ? "bg-cream/70 text-ink/75" : "bg-card"
        }`}
      >
        {/* L'état vit dans l'étiquette, jamais sur la couverture : une pastille posée sur
            l'illustration en masque une partie, et le sujet est parfois justement dans ce coin. */}
        {status !== "afaire" && (
          <span
            className={`mt-[3px] h-3 w-3 shrink-0 rounded-full border-2 border-ink ${
              status === "termine" ? "bg-success" : "bg-flame"
            }`}
          >
            <span className="sr-only">{status === "termine" ? "Terminé" : "En cours"}</span>
          </span>
        )}
        {course.title}
      </span>
    </Link>
  );
}

/**
 * Piste sinueuse : les cours en zig-zag reliés par une ligne pointillée, plutôt qu'une grille.
 * Affichage progressif conservé (« Voir plus ») — une matière peut compter 54 cours, et la
 * piste est bien plus haute par cours qu'une grille à deux colonnes.
 */
function ProgressiveCoursePath({
  courses,
  category,
  progress,
  initialVisible,
}: {
  courses: CourseMeta[];
  category: NonNullable<ReturnType<typeof getCategory>>;
  progress: UserProgress;
  initialVisible: number;
}) {
  const [visible, setVisible] = useState(initialVisible);
  const shown = courses.slice(0, visible);
  const remaining = courses.length - shown.length;
  const height = START_Y + Math.max(shown.length - 1, 0) * ROW_GAP + NODE_R + 24;

  return (
    <>
      <div className="relative mx-auto w-full max-w-[420px]" style={{ height }}>
        <svg
          viewBox={`0 0 ${TRACK_W} ${height}`}
          preserveAspectRatio="none"
          aria-hidden
          className="absolute inset-0 h-full w-full"
        >
          <path
            d={buildPathD(shown.length)}
            fill="none"
            stroke="var(--color-ink)"
            strokeWidth={5}
            strokeDasharray="1 15"
            strokeLinecap="round"
          />
        </svg>
        {shown.map((course, index) => (
          <CourseNode
            key={course.id}
            course={course}
            index={index}
            status={getCourseStatus(course.id, progress)}
            category={category}
          />
        ))}
      </div>
      {remaining > 0 && (
        <div className="mt-2 flex justify-center">
          <Button variant="secondary" onClick={() => setVisible((v) => v + REVEAL_STEP)}>
            Voir plus ({remaining} restant{remaining > 1 ? "s" : ""})
          </Button>
        </div>
      )}
    </>
  );
}

/** Tableau de bord d'une matière : niveau, progression, filtres et liste de ses cours */
export function CategoryScreen() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const category = getCategory(categoryId ?? "");
  const progress = useAppStore((s) => s.progress);
  const toggleFavoriteCourse = useAppStore((s) => s.toggleFavoriteCourse);
  const [filter, setFilter] = useState<Filter>("tout");
  const [geoView, setGeoView] = useState<GeoView>("region");

  if (!category) {
    return (
      <div className="mx-auto max-w-md rounded-card border-[3px] border-ink bg-card p-8 text-center shadow-card">
        <p className="font-bold">Cette matière est introuvable.</p>
      </div>
    );
  }

  const isGeo = category.id === "geo";
  const courses = COURSE_INDEX.filter((c) => c.categoryId === category.id);
  const subjectProgress = getSubjectProgress(category.id, progress, COURSE_INDEX);
  const filteredCourses = sortByTitle(
    filter === "tout" ? courses : courses.filter((c) => getCourseStatus(c.id, progress) === filter),
  );

  const availableLetters = isGeo
    ? [...new Set(filteredCourses.map((c) => indexLetter(c.title)))]
    : [];

  // Compteurs affichés dans les pastilles de filtre (« En cours · 3 »).
  const filterCounts: Record<Filter, number> = {
    tout: courses.length,
    afaire: 0,
    encours: 0,
    termine: 0,
  };
  for (const c of courses) filterCounts[getCourseStatus(c.id, progress)] += 1;

  // XP encore à gagner dans la matière : ce que promet le coffre en bout de piste.
  const remainingXp = courses
    .filter((c) => !progress.completedCourseIds.includes(c.id))
    .reduce((sum, c) => sum + c.xp, 0);

  const masteryPct =
    subjectProgress.totalCount === 0
      ? 0
      : Math.round((subjectProgress.completedCount / subjectProgress.totalCount) * 100);
  const deep = SUBJECT_DEEP[category.color];

  return (
    <div>
      <div className="mb-5 border-b-[3px] border-ink pb-5">
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => navigate(-1)}
            aria-label="Retour"
            className="grid h-[38px] w-[38px] shrink-0 place-items-center rounded-full border-[3px] border-ink bg-card shadow-sm"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={3} />
          </button>
          <span className="font-heading text-[11px] font-extrabold uppercase tracking-[0.08em] text-ink-faint">
            Matière
          </span>
        </div>

        <h1 className="mt-2.5 font-heading text-[36px] font-extrabold leading-none tracking-[-0.03em]">
          {category.name}
        </h1>

        <div className="mt-2.5 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full border-[2.5px] border-ink bg-ink px-3 py-1 font-heading text-xs font-bold uppercase tracking-wide text-white">
            Niveau {subjectProgress.level}
          </span>
          {isSubjectEmerging(category.id, COURSE_INDEX) && <Badge tone="neutral">🚧 En construction</Badge>}
        </div>

        <div className="mt-3.5 flex items-center gap-3 rounded-card border-[3px] border-ink bg-card px-3.5 py-3 shadow-sm md:max-w-md">
          <div className="min-w-0 flex-1">
            <p className="font-heading text-[11px] font-bold uppercase tracking-[0.06em] text-ink-faint">
              Ta progression
            </p>
            <p className="mt-0.5 font-heading text-lg font-extrabold">
              {subjectProgress.completedCount} / {subjectProgress.totalCount} cours
            </p>
            <p className="mt-0.5 font-heading text-[11px] font-bold uppercase tracking-wide text-ink-faint">
              {subjectProgress.xp} XP gagnés
            </p>
          </div>
          {/* Anneau conique : le pourcentage est aussi écrit au centre, la couleur ne porte donc
              jamais seule l'information. */}
          <div
            className="grid h-[50px] w-[50px] shrink-0 place-items-center rounded-full border-[3px] border-ink font-heading text-xs font-extrabold"
            style={{ background: `conic-gradient(${deep} 0 ${masteryPct}%, var(--color-cream) 0)` }}
          >
            {masteryPct}%
          </div>
        </div>
      </div>

      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`rounded-full border-[2.5px] border-ink px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-wide transition-colors ${
                filter === key ? "bg-ink text-white" : "bg-card text-ink"
              }`}
            >
              {label} · {filterCounts[key]}
            </button>
          ))}
        </div>

        {isGeo && (
          <div className="flex gap-2">
            <button
              onClick={() => setGeoView("region")}
              className={`rounded-full border-[2.5px] border-ink px-3 py-1.5 font-heading text-xs font-bold uppercase tracking-wide transition-colors ${
                geoView === "region" ? "bg-ink text-white" : "bg-card text-ink"
              }`}
            >
              🗺️ Par région
            </button>
            <button
              onClick={() => setGeoView("index")}
              className={`rounded-full border-[2.5px] border-ink px-3 py-1.5 font-heading text-xs font-bold uppercase tracking-wide transition-colors ${
                geoView === "index" ? "bg-ink text-white" : "bg-card text-ink"
              }`}
            >
              🔤 Index A-Z
            </button>
          </div>
        )}
      </div>

      {filteredCourses.length === 0 ? (
        <p className="font-medium text-ink-faint">{EMPTY_MESSAGE[filter]}</p>
      ) : isGeo && geoView === "index" ? (
        <div>
          <div className="scrollbar-none mb-4 flex gap-1.5 overflow-x-auto pb-2">
            {availableLetters.map((letter) => (
              <a
                key={letter}
                href={`#geo-letter-${letter}`}
                className="grid h-8 w-8 shrink-0 place-items-center rounded-full border-[2.5px] border-ink bg-card font-heading text-xs font-bold text-ink"
              >
                {letter}
              </a>
            ))}
          </div>
          <div className="space-y-5">
            {availableLetters.map((letter) => {
              const lettered = filteredCourses.filter(
                (c) => indexLetter(c.title) === letter,
              );
              return (
                <div key={letter} id={`geo-letter-${letter}`} className="scroll-mt-24">
                  <p className="mb-2.5 font-heading text-sm font-extrabold text-ink/70">{letter}</p>
                  <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3">
                    {lettered.map((course) => (
                      <CourseCard
                        key={course.id}
                        course={course}
                        category={category}
                        isCompleted={progress.completedCourseIds.includes(course.id)}
                        isStarted={progress.startedCourseIds.includes(course.id)}
                        isFavorite={progress.favoriteCourseIds.includes(course.id)}
                        onToggleFavorite={() => toggleFavoriteCourse(course.id)}
                        fluid
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : isGeo ? (
        <div className="space-y-6">
          {GEOGRAPHIE_REGIONS_ORDER.map((region) => {
            const regionCourses = filteredCourses.filter((c) => getGeographieRegion(c.id) === region);
            if (regionCourses.length === 0) return null;
            return (
              <div key={region}>
                <p className="mb-2.5 font-heading text-sm font-extrabold uppercase tracking-wide text-ink/70">
                  {region} <span className="text-ink/40">· {regionCourses.length}</span>
                </p>
                <ProgressiveCoursePath
                  courses={regionCourses}
                  category={category}
                  progress={progress}
                  initialVisible={DEFAULT_VISIBLE_PER_REGION}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <ProgressiveCoursePath
          courses={filteredCourses}
          category={category}
          progress={progress}
          initialVisible={DEFAULT_VISIBLE}
        />
      )}

      {/* Coffre d'étape : terminus de la piste. Le montant est réel — l'XP de complétion des
          cours qu'il reste à terminer dans la matière — et non un chiffre décoratif. */}
      {filteredCourses.length > 0 && !(isGeo && geoView === "index") && (
        <div className="mt-6 flex justify-center">
          <span className="sankofa-bob inline-flex items-center gap-2 rounded-[18px] border-[3px] border-ink bg-gold px-3.5 py-2.5 font-heading text-[13px] font-extrabold shadow-sm">
            {remainingXp > 0 ? `🎁 Coffre d'étape · ${remainingXp} XP` : "🎉 Matière terminée"}
          </span>
        </div>
      )}
    </div>
  );
}
