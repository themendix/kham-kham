// Ne matche que les variantes 400w/800w : le fichier pleine résolution (sans suffixe) ne doit
// jamais être copié dans dist/ — il ne sert que de source à `npm run images:variants`, jamais
// affiché directement. Même règle et même mécanique que `src/lib/courseImages.ts`.
const files = import.meta.glob("@/assets/lecons/**/*-{400w,800w}.webp", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

export interface LessonImageSet {
  /** URL de repli (attribut `src`), palier 800w — pour les navigateurs qui ignorent `srcset`. */
  src: string;
  /** Attribut `srcset` (400w/800w) : le navigateur choisit selon la largeur d'affichage réelle. */
  srcSet: string;
}

const VARIANT_PATTERN = /-(400w|800w)\.webp$/;

/**
 * Photos intra-leçon du bloc `image` (docs/CHARTE-LECONS.md § 4.8, docs/IMAGES-LECONS.md).
 *
 * Résolution **par convention de nommage** : le fichier n'est jamais référencé dans les données
 * éditoriales, il est retrouvé à partir de l'identifiant du bloc porteur — l'id de la leçon, ou
 * l'id de la carte pour le fil Home. Un fichier mal nommé se traduit donc par une leçon sans
 * photo, sans erreur visible : c'est pour ça que `docs/IMAGES-LECONS.md` fait foi sur les noms.
 *
 * Contrainte : les identifiants utilisés comme noms de fichier doivent être uniques dans
 * `src/assets/lecons/`. Les ids de leçon ne sont pas garantis uniques à l'échelle du catalogue
 * (d'où la clé composite `courseId:lessonId` du store), mais ceux des leçons illustrées le sont
 * — ils portent leur id de cours en préfixe. À vérifier avant d'illustrer une leçon héritée.
 */
const imagesByKey = new Map<string, { w400?: string; w800?: string }>();
for (const [path, url] of Object.entries(files)) {
  const filename = path.split("/").pop()!;
  const match = VARIANT_PATTERN.exec(filename);
  if (!match) continue;
  const key = filename.slice(0, -match[0].length);
  const entry = imagesByKey.get(key) ?? {};
  if (match[1] === "400w") entry.w400 = url;
  else entry.w800 = url;
  imagesByKey.set(key, entry);
}

/** Variantes de la photo d'une leçon, ou `undefined` si le fichier n'existe pas encore. */
export function getLessonImage(key: string | undefined): LessonImageSet | undefined {
  if (!key) return undefined;
  const entry = imagesByKey.get(key);
  if (!entry?.w400 || !entry.w800) return undefined;
  return { src: entry.w800, srcSet: `${entry.w400} 400w, ${entry.w800} 800w` };
}
