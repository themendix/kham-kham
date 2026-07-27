/**
 * Validateur d'intégrité du contenu Sankofa.
 *
 * Contrôle neuf règles sur `src/data/*` (unicité des id, résolution des références
 * entre fichiers, validité des questions de quiz, présence des illustrations…).
 * Toutes les règles sont bloquantes sauf les règles 8 et 9 (illustrations),
 * qui restent des avertissements tant que les 4 cours hérités n'ont pas d'image.
 *
 * Usage : npm run validate
 * Intégré au script `build` et au workflow CI — un contenu invalide bloque le build.
 */
import { readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { COURSES } from "../src/data/courses";
import { PARCOURS } from "../src/data/parcours";
import { CATEGORIES } from "../src/data/categories";
import { CARDS } from "../src/data/cards";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

interface Issue {
  rule: string;
  message: string;
}

const errors: Issue[] = [];
const warnings: Issue[] = [];

function error(rule: string, message: string) {
  errors.push({ rule, message });
}

function warn(rule: string, message: string) {
  warnings.push({ rule, message });
}

/** Signale les id apparaissant plus d'une fois dans une liste, sous une règle donnée. */
function checkUnique(rule: string, ids: string[], describe: (id: string, count: number) => string) {
  const counts = new Map<string, number>();
  for (const id of ids) counts.set(id, (counts.get(id) ?? 0) + 1);
  for (const [id, count] of counts) {
    if (count > 1) error(rule, describe(id, count));
  }
}

// 1. Unicité des id de cours sur l'ensemble du catalogue.
checkUnique(
  "1. Unicité des id de cours",
  COURSES.map((c) => c.id),
  (id, count) => `"${id}" apparaît ${count} fois dans COURSES`,
);

// 2. Unicité des id de leçon à l'intérieur d'un même cours.
for (const course of COURSES) {
  checkUnique(
    "2. Unicité des id de leçon (par cours)",
    course.lessons.map((l) => l.id),
    (id, count) => `"${id}" apparaît ${count} fois dans ${course.id}`,
  );
}

// 3. Unicité des id de question à l'intérieur d'un même quiz.
for (const course of COURSES) {
  checkUnique(
    "3. Unicité des id de question (par quiz)",
    course.quiz.map((q) => q.id),
    (id, count) => `"${id}" apparaît ${count} fois dans le quiz de ${course.id}`,
  );
}

// 4. Tout courseId référencé par un parcours est résolvable dans COURSES.
const courseIds = new Set(COURSES.map((c) => c.id));
for (const parcours of PARCOURS) {
  for (const courseId of parcours.courseIds) {
    if (!courseIds.has(courseId)) {
      error(
        "4. Références de parcours résolvables",
        `${parcours.id} référence le cours "${courseId}", introuvable dans COURSES`,
      );
    }
  }
}

// 5. Tout categoryId référencé par un cours ou une carte existe dans CATEGORIES.
const categoryIds = new Set(CATEGORIES.map((c) => c.id));
for (const course of COURSES) {
  if (!categoryIds.has(course.categoryId)) {
    error(
      "5. Références de catégorie résolvables",
      `Le cours "${course.id}" référence la catégorie "${course.categoryId}", introuvable dans CATEGORIES`,
    );
  }
}
for (const card of CARDS) {
  if (!categoryIds.has(card.categoryId)) {
    error(
      "5. Références de catégorie résolvables",
      `La carte "${card.id}" référence la catégorie "${card.categoryId}", introuvable dans CATEGORIES`,
    );
  }
}

// 6. Chaque question de quiz : options ≥ 2, correctIndex dans les bornes, textes non vides.
for (const course of COURSES) {
  for (const q of course.quiz) {
    const ref = `${course.id} / ${q.id}`;
    if (q.options.length < 2) {
      error("6. Questions de quiz valides", `${ref} : ${q.options.length} option(s), au moins 2 attendues`);
    }
    if (q.correctIndex < 0 || q.correctIndex >= q.options.length) {
      error(
        "6. Questions de quiz valides",
        `${ref} : correctIndex=${q.correctIndex} hors des bornes (0-${q.options.length - 1})`,
      );
    }
    if (!q.question.trim()) {
      error("6. Questions de quiz valides", `${ref} : intitulé de question vide`);
    }
    if (!q.explanation.trim()) {
      error("6. Questions de quiz valides", `${ref} : explication vide`);
    }
  }
}

// 7. Chaque cours a au moins une leçon, et aucun texte de leçon n'est vide.
for (const course of COURSES) {
  if (course.lessons.length === 0) {
    error("7. Leçons non vides", `${course.id} n'a aucune leçon`);
    continue;
  }
  for (const lesson of course.lessons) {
    if (!lesson.content.trim()) {
      error("7. Leçons non vides", `${course.id} / ${lesson.id} : contenu vide`);
    }
  }
}

// 8 et 9. Illustrations : convention de nommage courseId ↔ fichier .webp (avertissements).
// Scan direct du système de fichiers (import.meta.glob, utilisé en runtime, est une API
// Vite indisponible ici — ce script tourne sous tsx, en dehors de tout bundler).
// Depuis le lot 5b (performance), seules les variantes de résolution `<courseId>-400w.webp` /
// `-800w.webp` (`npm run images:variants`) sont servies par l'app ; le fichier pleine résolution
// `<courseId>.webp` reste dans le dépôt comme source de régénération. On dérive donc le
// `courseId` en retirant le suffixe de variante avant de comparer au catalogue.
const VARIANT_SUFFIX = /-(400w|800w)$/;
const illustrationIds = new Set<string>();
function collectWebp(dir: string) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) collectWebp(full);
    else if (entry.name.endsWith(".webp")) {
      const name = entry.name.replace(/\.webp$/, "");
      illustrationIds.add(name.replace(VARIANT_SUFFIX, ""));
    }
  }
}
collectWebp(join(ROOT, "src", "assets", "cours"));

for (const course of COURSES) {
  if (!illustrationIds.has(course.id)) {
    warn("8. Illustration par cours", `${course.id} n'a pas d'illustration dans src/assets/cours/`);
  }
}
for (const id of illustrationIds) {
  if (!courseIds.has(id)) {
    warn("9. Illustrations orphelines", `${id}.webp ne correspond à aucun cours de COURSES`);
  }
}

// Rapport.
function printGroup(title: string, issues: Issue[]) {
  if (issues.length === 0) return;
  console.log(`\n${title} :`);
  const byRule = new Map<string, string[]>();
  for (const issue of issues) {
    if (!byRule.has(issue.rule)) byRule.set(issue.rule, []);
    byRule.get(issue.rule)!.push(issue.message);
  }
  for (const [rule, messages] of byRule) {
    console.log(`\n  ${rule} :`);
    for (const message of messages) console.log(`    - ${message}`);
  }
}

console.log("Validation du contenu Sankofa");
console.log("=".repeat(29));

printGroup("❌ ERREURS (bloquantes)", errors);
printGroup("⚠️  AVERTISSEMENTS (non bloquants)", warnings);

console.log(`\n${errors.length} erreur(s), ${warnings.length} avertissement(s).`);

if (errors.length > 0) {
  console.log("\n✗ Validation échouée.");
  process.exit(1);
}
console.log(`\n✓ Validation réussie${warnings.length > 0 ? " (avec avertissements)" : ""}.`);
