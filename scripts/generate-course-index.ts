/**
 * Génère l'index léger de métadonnées (`src/data/coursesIndex.generated.ts`) depuis le
 * catalogue complet (`src/data/courses.ts`). Séparé du contenu complet (texte des leçons,
 * questions de quiz) pour que le bundle initial n'embarque que les métadonnées ; le contenu
 * complet est chargé à la demande par matière (`src/data/courseContent.ts`).
 *
 * Usage : npm run gen:index (intégré à npm run build, avant la validation).
 * À relancer après toute modification du catalogue.
 */
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { COURSES } from "../src/data/courses";
import type { CourseMeta } from "../src/types";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

const index: CourseMeta[] = COURSES.map((c) => ({
  id: c.id,
  categoryId: c.categoryId,
  title: c.title,
  description: c.description,
  emoji: c.emoji,
  xp: c.xp,
  lessons: c.lessons.map((l) => ({ id: l.id })),
  quizCount: c.quiz.length,
}));

const output = `/**
 * Fichier généré — ne pas éditer à la main.
 * Régénérer via \`npm run gen:index\` après toute modification du catalogue (${COURSES.length} cours).
 * Métadonnées seules (pas de contenu de leçon ni de quiz) — voir docs/ARCHITECTURE.md § Découpage du bundle.
 */
import type { CourseMeta } from "@/types";

export const COURSE_INDEX: CourseMeta[] = ${JSON.stringify(index, null, 2)};
`;

writeFileSync(join(ROOT, "src", "data", "coursesIndex.generated.ts"), output);

console.log(`✓ Index généré : ${index.length} cours (src/data/coursesIndex.generated.ts)`);
