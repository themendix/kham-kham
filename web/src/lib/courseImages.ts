// Ne matche que les variantes 400w/800w : les fichiers pleine résolution (sans suffixe) ne
// doivent jamais être copiés dans dist/ — ils ne servent que de source à
// `npm run images:variants`, jamais affichés directement par l'app.
const files = import.meta.glob("@/assets/cours/**/*-{400w,800w}.webp", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

export interface CourseImageSet {
  /** URL de repli (attribut `src`), palier 800w — utilisée par les navigateurs qui ignorent `srcset`. */
  src: string;
  /** Attribut `srcset` (400w/800w) : le navigateur choisit selon la taille d'affichage réelle de `CourseCard` (~150-350 px). */
  srcSet: string;
}

const VARIANT_PATTERN = /-(400w|800w)\.webp$/;

/**
 * Variantes de résolution (`scripts/generate-image-variants.mjs`, `npm run images:variants`),
 * générées à côté du fichier pleine résolution sans jamais le modifier. Seules les variantes
 * 400w/800w sont servies par l'app : la source pleine résolution (~1000-1200 px, jusqu'à
 * ~175 Ko) dépasse largement ce que `CourseCard` affiche jamais (~150-350 px), elle reste dans
 * le dépôt comme référence pour régénérer les variantes, pas comme asset livré.
 */
const imagesByCourseId = new Map<string, { w400?: string; w800?: string }>();
for (const [path, url] of Object.entries(files)) {
  const filename = path.split("/").pop()!;
  const match = VARIANT_PATTERN.exec(filename);
  if (!match) continue;
  const courseId = filename.slice(0, -match[0].length);
  const entry = imagesByCourseId.get(courseId) ?? {};
  if (match[1] === "400w") entry.w400 = url;
  else entry.w800 = url;
  imagesByCourseId.set(courseId, entry);
}

/** Résout les variantes d'illustration d'un cours par convention de nommage (id de cours = nom de fichier), ou `undefined` si absentes */
export function getCourseImage(courseId: string): CourseImageSet | undefined {
  const entry = imagesByCourseId.get(courseId);
  if (!entry?.w400 || !entry.w800) return undefined;
  return { src: entry.w800, srcSet: `${entry.w400} 400w, ${entry.w800} 800w` };
}

// Dans ce lot d'illustrations de Géographie, le drapeau national est presque toujours à droite,
// sauf pour ce sous-ensemble (Afrique centrale/grands lacs) où il est à gauche.
const LEFT_FLAG_COURSE_IDS = new Set([
  "course-geographie-26-congo-brazzaville",
  "course-geographie-27-rd-congo",
  "course-geographie-28-gabon",
  "course-geographie-29-guinee-equatoriale",
  "course-geographie-30-sao-tome-et-principe",
  "course-geographie-31-tchad",
  "course-geographie-32-burundi",
  "course-geographie-33-comores",
  "course-geographie-34-djibouti",
  "course-geographie-35-erythree",
]);

/** Côté vers lequel cadrer l'illustration (object-position) au recadrage `object-cover`. */
export function getCourseImagePosition(courseId: string): "left" | "right" | "center" {
  if (LEFT_FLAG_COURSE_IDS.has(courseId)) return "left";
  // Les illustrations de Personnalités sont des scènes au sujet centré, sans drapeau latéral
  // à préserver : les rogner à droite les décentrerait.
  if (courseId.startsWith("course-perso-")) return "center";
  return "right";
}

/** Classe Tailwind `object-position` correspondante, partagée par `CourseCard` et `LearningDoneCard`. */
export const OBJECT_POSITION = {
  left: "object-left",
  right: "object-right",
  center: "object-center",
} as const;
