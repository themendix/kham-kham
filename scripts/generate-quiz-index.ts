/**
 * Génère l'index des questions de quiz (`src/data/quizIndex.generated.ts`) depuis le catalogue
 * complet (`src/data/courses.ts`), pour le module Quiz.
 *
 * Pourquoi un index séparé de `coursesIndex.generated.ts` : le module Quiz a besoin des
 * questions de **toutes** les matières à chaque partie. Les charger via `courseContent.ts`
 * reviendrait à tirer les quatre chunks de matière — donc le texte intégral de 564 leçons —
 * à chaque ouverture de l'onglet. Cet index ne porte que les questions (~35 Ko gzip) et se
 * charge seul.
 *
 * Chaque question porte sa clé stable `${courseId}:${questionId}` (clé de révision dans
 * `UserProgress`, même convention que `completedLessonIds`) et ses territoires.
 *
 * Usage : npm run gen:quiz (intégré à npm run build, avant la validation).
 * À relancer après toute modification des quiz du catalogue.
 */
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { COURSES } from "../src/data/courses";
import { getCourseTerritories } from "../src/lib/territories";
import { QUIZ_LESSON_MAP } from "../src/data/quizLessonMap";
import type { QuizEntry } from "../src/types";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

const index: QuizEntry[] = COURSES.flatMap((course) => {
  const territories = getCourseTerritories(course.id, course.categoryId);
  // Un cours dont le quiz compte autant de questions que de leçons suit l'ordre des leçons, une
  // question par leçon : le rattachement se dérive par position. Sinon, seule la table explicite
  // fait foi, et une question non déclarée reste sans leçon (le module renvoie vers le cours).
  const isAligned = course.quiz.length === course.lessons.length;
  return course.quiz.map((q, i) => {
    const key = `${course.id}:${q.id}`;
    const lessonId = QUIZ_LESSON_MAP[key] ?? (isAligned ? course.lessons[i].id : null);
    return {
      key,
      courseId: course.id,
      categoryId: course.categoryId,
      lessonId,
      territories,
      question: q.question,
      options: q.options,
      correctIndex: q.correctIndex,
      explanation: q.explanation,
    };
  });
});

const output = `/**
 * Fichier généré — ne pas éditer à la main.
 * Régénérer via \`npm run gen:quiz\` après toute modification des quiz du catalogue.
 * ${index.length} questions issues de ${COURSES.length} cours — voir docs/ARCHITECTURE.md § Module Quiz.
 */
import type { QuizEntry } from "@/types";

export const QUIZ_INDEX: QuizEntry[] = ${JSON.stringify(index, null, 2)};
`;

writeFileSync(join(ROOT, "src", "data", "quizIndex.generated.ts"), output);

// Second fichier, minuscule : les clés de questions par territoire. L'écran de sélection du module
// Quiz n'a besoin que de compter (questions d'un territoire, questions dues à révision) — lui faire
// importer l'index complet ferait payer ~82 Ko gzip pour afficher six compteurs, avant même qu'une
// partie ait commencé. L'index complet n'est chargé qu'au lancement d'une partie.
const keysByTerritory: Record<string, string[]> = {};
for (const entry of index) {
  for (const territoryId of entry.territories) {
    (keysByTerritory[territoryId] ??= []).push(entry.key);
  }
}

const keysOutput = `/**
 * Fichier généré — ne pas éditer à la main.
 * Régénérer via \`npm run gen:quiz\` (émis en même temps que quizIndex.generated.ts).
 * Clés de questions par territoire, pour les compteurs de l'écran de sélection du module Quiz —
 * voir docs/ARCHITECTURE.md § Module Quiz.
 */
import type { TerritoryId } from "@/lib/territories";

export const QUIZ_KEYS_BY_TERRITORY: Record<TerritoryId, string[]> = ${JSON.stringify(keysByTerritory, null, 2)};
`;

writeFileSync(join(ROOT, "src", "data", "quizKeys.generated.ts"), keysOutput);

const byTerritory = new Map<string, number>();
for (const entry of index) {
  for (const t of entry.territories) byTerritory.set(t, (byTerritory.get(t) ?? 0) + 1);
}
const repartition = [...byTerritory.entries()].map(([t, n]) => `${t} ${n}`).join(", ");

console.log(`✓ Index quiz généré : ${index.length} questions (src/data/quizIndex.generated.ts)`);
console.log(`  Répartition par territoire : ${repartition}`);

const withLesson = index.filter((e) => e.lessonId !== null).length;
console.log(
  `  Rattachées à une leçon : ${withLesson}/${index.length} (${index.length - withLesson} renvoient vers leur cours)`,
);
