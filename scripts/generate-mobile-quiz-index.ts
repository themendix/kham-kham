/** Mobile quiz index. Use --category geo to preserve other subjects' local indexes. */
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { COURSES } from "../src/data/courses";
import { QUIZ_LESSON_MAP } from "../src/data/quizLessonMap";
import { QUIZ_INDEX as previousIndex } from "../src/data/quizIndex.generated";
import { getQuestionTerritories } from "../src/lib/territories";
import type { QuizEntry } from "../src/types";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const categoryArgument = process.argv.indexOf("--category");
const category = categoryArgument < 0 ? undefined : process.argv[categoryArgument + 1];
if (categoryArgument >= 0 && !COURSES.some(course => course.categoryId === category)) {
  throw new Error(`Unknown category: ${category ?? "(missing)"}`);
}

const fresh: QuizEntry[] = COURSES.filter(course => !category || course.categoryId === category).flatMap(course => course.quiz.map((question, i) => {
  const key = `${course.id}:${question.id}`;
  return {
    key, courseId: course.id, categoryId: course.categoryId,
    lessonId: QUIZ_LESSON_MAP[key] ?? (course.quiz.length === course.lessons.length ? course.lessons[i].id : null),
    territories: getQuestionTerritories(key, course.id, course.categoryId),
    question: question.question, options: question.options, correctIndex: question.correctIndex, explanation: question.explanation,
  };
}));
const byKey = new Map(fresh.map(entry => [entry.key, entry]));
const index = category ? previousIndex.flatMap(entry => {
  if (entry.categoryId !== category) return [entry];
  const replacement = byKey.get(entry.key);
  byKey.delete(entry.key);
  return replacement ? [replacement] : [];
}).concat([...byKey.values()]) : fresh;

writeFileSync(join(root, "src/data/quizIndex.generated.ts"), `/**
 * Fichier généré — ne pas éditer à la main.
 * Régénérer via \`npm run gen:quiz\` après toute modification des quiz du catalogue.
 * ${index.length} questions issues de ${COURSES.length} cours — voir docs/ARCHITECTURE.md § Module Quiz.
 */
import type { QuizEntry } from "@/types";

export const QUIZ_INDEX: QuizEntry[] = ${JSON.stringify(index, null, 2)};
`);

const keysByTerritory: Record<string, string[]> = {};
for (const entry of index) for (const territory of entry.territories) (keysByTerritory[territory] ??= []).push(entry.key);
writeFileSync(join(root, "src/data/quizKeys.generated.ts"), `/**
 * Fichier généré — ne pas éditer à la main.
 * Régénérer via \`npm run gen:quiz\` (émis en même temps que quizIndex.generated.ts).
 * Clés de questions par territoire, pour les compteurs de l'écran de sélection du module Quiz —
 * voir docs/ARCHITECTURE.md § Module Quiz.
 */
import type { TerritoryId } from "@/lib/territories";

export const QUIZ_KEYS_BY_TERRITORY: Record<TerritoryId, string[]> = ${JSON.stringify(keysByTerritory, null, 2)};
`);
console.log(`Quiz index: ${category ?? "all subjects"}, ${fresh.length} questions refreshed.`);
