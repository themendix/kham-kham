// Ne matche que les variantes 400w/800w : les fichiers pleine résolution (sans suffixe) ne
// doivent jamais être copiés dans dist/ — ils ne servent que de source à
// `npm run images:variants`, jamais affichés directement par l'app.
import { imageAssets } from "@/native/imageAssets";
const files = Object.fromEntries(Object.keys(imageAssets).filter((key) => key.startsWith("course-") && !key.includes("-lesson-")).map((key) => [key, key]));

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

// Alignement horizontal vérifié sur les couvertures d'Histoire. Les cartes verticales
// ne doivent pas reprendre le cadrage à droite prévu pour les drapeaux de Géographie.
const HISTORY_COVER_X: Record<string, number> = {
  "course-histoire-01-egypte-antique": 92,
  "course-histoire-02-koush-meroe": 100,
  "course-histoire-03-aksoum": 92,
  "course-histoire-04-carthage-afrique-du-nord": 60,
  "course-histoire-05-empire-du-ghana": 12,
  "course-histoire-06-soundiata-mali": 15,
  "course-histoire-07-mansa-moussa": 100,
  "course-histoire-08-empire-songhai": 26,
  "course-histoire-09-tombouctou-djenne": 80,
  "course-histoire-10-kanem-bornou": 85,
  "course-histoire-12-royaume-benin-bronzes": 0,
  "course-histoire-14-royaume-ashanti": 25,
  "course-histoire-15-royaume-dahomey": 95,
  "course-histoire-17-grand-zimbabwe": 30,
  "course-histoire-18-monomotapa-mutapa": 0,
  "course-histoire-19-royaumes-grands-lacs": 0,
  "course-histoire-20-ethiopie-medievale-lalibela": 0,
  "course-histoire-21-commerce-transsaharien": 60,
  "course-histoire-22-islamisation-afrique-ouest": 35,
  "course-histoire-24-traite-negriere-transatlantique": 25,
  "course-histoire-26-resistances-colonisation": 20,
  "course-histoire-27-bataille-adoua": 12,
  "course-histoire-28-independances-africaines": 85,
  "course-histoire-30-apartheid-mandela": 43,
  "course-histoire-31-tekrour-islam": 24,
  "course-histoire-34-goree-saint-louis": 30,
  "course-histoire-35-lat-dior-cayor": 5,
  "course-histoire-36-cheikh-ahmadou-bamba-mouridisme": 85,
  "course-histoire-37-aline-sitoe-diatta": 85,
  "course-histoire-38-senghor-negritude-independance": 52,
  "course-histoire-39-reine-nzinga-angola": 30,
  "course-histoire-40-chaka-zoulou": 28,
};

// Marges de papier présentes dans les fichiers, à exclure du remplissage des cartes.
const HISTORY_COVER_INSETS: Record<string, { top: number; right: number; bottom: number; left: number }> = {
  "course-histoire-04-carthage-afrique-du-nord": { top: 0.17, right: 0.025, bottom: 0.16, left: 0.025 },
  "course-histoire-07-mansa-moussa": { top: 0.19, right: 0.025, bottom: 0.19, left: 0.025 },
  "course-histoire-08-empire-songhai": { top: 0.04, right: 0.025, bottom: 0.04, left: 0.025 },
  "course-histoire-14-royaume-ashanti": { top: 0.04, right: 0, bottom: 0.08, left: 0 },
  "course-histoire-39-reine-nzinga-angola": { top: 0.04, right: 0.02, bottom: 0.04, left: 0.02 },
};

/** Remplit le cadre avec la scène utile, sans déformer l'image ni conserver ses marges. */
export function getCourseCoverLayout(courseId: string, sourceWidth: number, sourceHeight: number, frameWidth: number, frameHeight: number) {
  const inset = HISTORY_COVER_INSETS[courseId] ?? { top: 0, right: 0, bottom: 0, left: 0 };
  const usefulWidth = sourceWidth * (1 - inset.left - inset.right);
  const usefulHeight = sourceHeight * (1 - inset.top - inset.bottom);
  const scale = Math.max(frameWidth / usefulWidth, frameHeight / usefulHeight);
  const x = (HISTORY_COVER_X[courseId] ?? 50) / 100;
  return {
    width: sourceWidth * scale,
    height: sourceHeight * scale,
    left: (frameWidth - usefulWidth * scale) * x - sourceWidth * inset.left * scale,
    top: -sourceHeight * inset.top * scale,
  };
}

/** Cadrage précis des couvertures natives, avec les visages préservés en haut. */
export function getCourseCoverPosition(courseId: string) {
  if (courseId.startsWith("course-histoire-")) {
    return { left: `${HISTORY_COVER_X[courseId] ?? 50}%` as `${number}%`, top: "0%" as const };
  }
  return getCourseImagePosition(courseId);
}

/** Côté vers lequel cadrer l'illustration (object-position) au recadrage `object-cover`. */
export function getCourseImagePosition(courseId: string): "left" | "right" | "center" {
  if (LEFT_FLAG_COURSE_IDS.has(courseId)) return "left";
  if (courseId.startsWith("course-histoire-")) {
    const x = HISTORY_COVER_X[courseId] ?? 50;
    return x < 34 ? "left" : x > 66 ? "right" : "center";
  }
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
