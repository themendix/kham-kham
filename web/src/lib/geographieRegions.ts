export type GeographieRegion =
  | "Afrique du Nord"
  | "Afrique de l'Ouest"
  | "Afrique centrale"
  | "Afrique de l'Est"
  | "Afrique australe";

/**
 * Bornes (incluses) du numéro de fiche Géographie (`course-geographie-NN-...`) par région, dans
 * l'ordre déjà suivi par `GEOGRAPHIE_COURSES` (`src/data/courses/geographie.ts`) : Nord → Ouest
 * → Centrale → Est → Australe. Recensées une fois sur le catalogue actuel (54 fiches) ; l'ajout
 * de nouvelles fiches Géographie nécessite d'ajuster ces bornes en conséquence.
 */
const REGION_BOUNDARIES: { max: number; region: GeographieRegion }[] = [
  { max: 7, region: "Afrique du Nord" },
  { max: 22, region: "Afrique de l'Ouest" },
  { max: 31, region: "Afrique centrale" },
  { max: 45, region: "Afrique de l'Est" },
  { max: 54, region: "Afrique australe" },
];

export const GEOGRAPHIE_REGIONS_ORDER: GeographieRegion[] = REGION_BOUNDARIES.map((b) => b.region);

const GEO_INDEX_PATTERN = /^course-geographie-(\d+)-/;

/** Dérive la région d'une fiche Géographie depuis son numéro d'ordre dans l'id (`course-geographie-07-tunisie` → 7 → Afrique du Nord). */
export function getGeographieRegion(courseId: string): GeographieRegion | null {
  const match = GEO_INDEX_PATTERN.exec(courseId);
  if (!match) return null;
  const index = Number(match[1]);
  const boundary = REGION_BOUNDARIES.find((b) => index <= b.max);
  return boundary?.region ?? null;
}
