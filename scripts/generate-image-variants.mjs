/**
 * Génère des variantes de résolution des illustrations, pour les `srcset` de `CourseCard`
 * (`src/lib/courseImages.ts`) et du bloc image d'une leçon (`src/lib/lessonImages.ts`).
 *
 * Sources : src/assets/lecons/**\/*.webp — photos intra-leçon (id de leçon = nom de fichier,
 *           voir docs/IMAGES-LECONS.md)
 *           src/assets/cours/**\/*.webp (fichiers pleine résolution, ~1000-1200 px de large,
 *           convention de nommage courseId = nom de fichier — voir `LEFT_FLAG_COURSE_IDS`)
 * Sorties : <même dossier>/<nom>-400w.webp et <nom>-800w.webp, à côté de l'original.
 *
 * Usage : npm run images:variants
 *
 * L'original n'est jamais modifié ni supprimé : il reste la variante « large » (utilisée sur
 * grand écran / rail large). Les deux variantes dérivées couvrent les tailles réellement
 * affichées par `CourseCard` (~150-210 px, jusqu'à ~350 px en grille fluide) sans jamais
 * envoyer plus de pixels que nécessaire sur un réseau contraint. Idempotent et incrémental :
 * une variante n'est régénérée que si l'original est plus récent qu'elle.
 */
import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SOURCE_DIRS = [
  join(ROOT, "src", "assets", "cours"),
  join(ROOT, "src", "assets", "lecons"),
];

const VARIANTS = [
  { suffix: "400w", width: 400 },
  { suffix: "800w", width: 800 },
];

async function walk(dir) {
  let files = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) files = files.concat(await walk(full));
    else if (entry.name.endsWith(".webp") && !entry.name.includes("-400w") && !entry.name.includes("-800w")) {
      files.push(full);
    }
  }
  return files;
}

async function needsRegeneration(source, target) {
  if (!existsSync(target)) return true;
  const [sourceStat, targetStat] = await Promise.all([stat(source), stat(target)]);
  return sourceStat.mtimeMs > targetStat.mtimeMs;
}

async function main() {
  let sources = [];
  for (const dir of SOURCE_DIRS) {
    // `src/assets/lecons/` peut ne pas exister tant qu'aucune leçon n'est illustrée.
    if (existsSync(dir)) sources = sources.concat(await walk(dir));
  }
  console.log(`${sources.length} illustration(s) source trouvée(s).\n`);

  let generated = 0;
  let skipped = 0;
  let totalBefore = 0;
  let totalAfter = 0;

  for (const source of sources) {
    const dir = dirname(source);
    const base = source.slice(dir.length + 1, -".webp".length);
    const sourceStat = await stat(source);
    totalBefore += sourceStat.size;

    for (const { suffix, width } of VARIANTS) {
      const target = join(dir, `${base}-${suffix}.webp`);
      if (!(await needsRegeneration(source, target))) {
        skipped += 1;
        totalAfter += (await stat(target)).size;
        continue;
      }
      await sharp(source)
        .resize(width, null, { withoutEnlargement: true, kernel: sharp.kernel.lanczos3 })
        .webp({ quality: 78 })
        .toFile(target);
      const targetSize = (await stat(target)).size;
      totalAfter += targetSize;
      generated += 1;
      console.log(`  ✓ ${base}-${suffix}.webp (${width}w, ${Math.round(targetSize / 1024)} Ko)`);
    }
  }

  console.log(
    `\n${generated} variante(s) générée(s), ${skipped} déjà à jour. Original conservé comme palier « large ».`,
  );
  console.log(`Poids original (paliers larges) : ${Math.round(totalBefore / 1024)} Ko.`);
}

main().catch((error) => {
  console.error(`\n✗ Échec de la génération : ${error.message}`);
  process.exit(1);
});
