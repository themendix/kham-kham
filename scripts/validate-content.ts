/**
 * Validateur d'intégrité du contenu Sankofa.
 *
 * Contrôle les règles 1 à 9 (unicité des id, résolution des références entre fichiers,
 * validité des questions de quiz, présence des illustrations…) sur l'ensemble du catalogue,
 * plus les règles 10 à 19 de docs/CHARTE-LECONS.md § 9 (modèle de blocs typés des leçons).
 * La règle 10 est structurelle et bloquante pour tout le catalogue ; les règles 11 à 18 ne
 * s'appliquent qu'aux matières listées dans `CHARTE_APPLIQUEE` (§ 9.1 : activation progressive,
 * le contenu non encore réécrit ne respecte pas la charte éditoriale). Rules 8 et 9
 * (illustrations) et une partie de la règle 19 restent des avertissements.
 * Les règles 20 à 23 servent le module Quiz (voir src/lib/territories.ts).
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
import { COURSE_TERRITORIES } from "../src/data/courseTerritories";
import { QUIZ_LESSON_MAP } from "../src/data/quizLessonMap";
import { QUESTION_TERRITORIES } from "../src/data/questionTerritories";
import { TERRITORY_IDS } from "../src/lib/territories";
import { lessonPlainText, lessonWordCount, parseInline, type LessonBlock } from "../src/lib/lessonBlocks";
import type { Course } from "../src/types";

/**
 * Matières dont le contenu a subi la passe éditoriale de la charte (docs/CHARTE-LECONS.md).
 * Les règles 11 à 18 ne s'y appliquent qu'à ces matières. On étend cette liste à chaque
 * matière achevée — jamais avant.
 */
const CHARTE_APPLIQUEE: readonly string[] = ["histoire", "geo", "decouverte"];

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

// 7. Chaque cours a au moins une leçon, et aucune leçon n'a un texte visible vide.
for (const course of COURSES) {
  if (course.lessons.length === 0) {
    error("7. Leçons non vides", `${course.id} n'a aucune leçon`);
    continue;
  }
  for (const lesson of course.lessons) {
    if (!lessonPlainText(lesson.blocks).trim()) {
      error("7. Leçons non vides", `${course.id} / ${lesson.id} : contenu vide`);
    }
  }
}

// --- docs/CHARTE-LECONS.md § 9 — règles 10 à 19 ---

const WORD_LIMITS: Record<string, number> = {
  paragraphe: 50,
  aRetenirPoint: 14,
  leSavaisTu: 35,
  citation: 25,
  chiffreCleLegende: 10,
  friseEvenement: 10,
};

function words(text: string): number {
  const t = text.trim();
  return t ? t.split(/\s+/).filter(Boolean).length : 0;
}

// 10. Blocs bien formés — tout le catalogue, bloquante.
function checkBlocksWellFormed(ref: string, blocks: LessonBlock[]) {
  if (blocks.length === 0) {
    error("10. Blocs bien formés", `${ref} : aucun bloc`);
    return;
  }
  for (const [i, block] of blocks.entries()) {
    const at = `${ref} / bloc ${i + 1} (${block.type})`;
    switch (block.type) {
      case "paragraphe":
        if (!block.text.trim()) error("10. Blocs bien formés", `${at} : texte vide`);
        break;
      case "aRetenir":
        if (block.points.length === 0) error("10. Blocs bien formés", `${at} : aucune puce`);
        if (block.points.some((p) => !p.trim())) error("10. Blocs bien formés", `${at} : puce vide`);
        break;
      case "leSavaisTu":
        if (!block.text.trim()) error("10. Blocs bien formés", `${at} : texte vide`);
        break;
      case "chiffreCle":
        if (!block.valeur.trim()) error("10. Blocs bien formés", `${at} : valeur vide`);
        if (!block.legende.trim()) error("10. Blocs bien formés", `${at} : légende vide`);
        break;
      case "citation":
        if (!block.texte.trim()) error("10. Blocs bien formés", `${at} : texte vide`);
        if (!block.auteur.trim()) error("10. Blocs bien formés", `${at} : auteur vide`);
        break;
      case "frise":
        if (block.evenements.length === 0) error("10. Blocs bien formés", `${at} : aucun événement`);
        if (block.evenements.some((e) => !e.date.trim() || !e.texte.trim()))
          error("10. Blocs bien formés", `${at} : événement incomplet`);
        break;
      case "reperes":
        if (block.items.length === 0) error("10. Blocs bien formés", `${at} : aucun repère`);
        if (block.items.some((it) => !it.label.trim() || !it.valeur.trim()))
          error("10. Blocs bien formés", `${at} : repère incomplet`);
        break;
      case "image":
        if (!block.alt.trim()) error("10. Blocs bien formés", `${at} : alt vide`);
        break;
    }
  }
}

for (const course of COURSES) {
  for (const lesson of course.lessons) {
    checkBlocksWellFormed(`${course.id} / ${lesson.id}`, lesson.blocks);
  }
}

// 11 à 18 — uniquement sur les matières listées dans CHARTE_APPLIQUEE.
for (const course of COURSES) {
  if (!CHARTE_APPLIQUEE.includes(course.categoryId)) continue;

  for (const lesson of course.lessons) {
    const ref = `${course.id} / ${lesson.id}`;
    const blocks = lesson.blocks;
    const hasImage = blocks.some((b) => b.type === "image");

    // 11. Budget de mots.
    const wc = lessonWordCount(blocks);
    const [nominalMin, nominalMax] = hasImage ? [70, 110] : [90, 140];
    const [outerMin, outerMax] = hasImage ? [55, 125] : [70, 150];
    if (wc < outerMin || wc > outerMax) {
      error("11. Budget de mots", `${ref} : ${wc} mots, hors de [${outerMin}, ${outerMax}]`);
    } else if (wc < nominalMin || wc > nominalMax) {
      warn("11. Budget de mots", `${ref} : ${wc} mots, hors de la fourchette nominale [${nominalMin}, ${nominalMax}]`);
    }

    // 12. aRetenir obligatoire et unique.
    const aRetenirBlocks = blocks.filter((b) => b.type === "aRetenir");
    if (aRetenirBlocks.length !== 1) {
      error("12. À retenir obligatoire et unique", `${ref} : ${aRetenirBlocks.length} bloc(s) aRetenir, 1 attendu`);
    }

    // 13. Jamais deux paragraphes consécutifs.
    for (let i = 0; i < blocks.length - 1; i++) {
      if (blocks[i].type === "paragraphe" && blocks[i + 1].type === "paragraphe") {
        error("13. Jamais deux paragraphes consécutifs", `${ref} : blocs ${i + 1} et ${i + 2} sont deux paragraphes`);
      }
    }

    // 14. Nombre de blocs.
    if (blocks.length < 4 || blocks.length > 7) {
      error("14. Nombre de blocs", `${ref} : ${blocks.length} bloc(s), attendu entre 4 et 7`);
    }

    // 15. Ordre du squelette.
    if (blocks[0]?.type !== "paragraphe") {
      error("15. Ordre du squelette", `${ref} : le premier bloc n'est pas un paragraphe`);
    }
    const aRetenirIndex = blocks.findIndex((b) => b.type === "aRetenir");
    if (aRetenirIndex !== -1 && aRetenirIndex < blocks.length - 2) {
      error("15. Ordre du squelette", `${ref} : aRetenir n'est ni avant-dernier ni dernier`);
    }
    const leSavaisTuIndex = blocks.findIndex((b) => b.type === "leSavaisTu");
    if (leSavaisTuIndex !== -1 && leSavaisTuIndex !== blocks.length - 1) {
      error("15. Ordre du squelette", `${ref} : leSavaisTu n'est pas le dernier bloc`);
    }

    // 16. Contraintes de longueur fines.
    for (const block of blocks) {
      if (block.type === "paragraphe" && words(block.text) > WORD_LIMITS.paragraphe) {
        error("16. Contraintes de longueur fines", `${ref} : paragraphe de ${words(block.text)} mots (> 50)`);
      }
      if (block.type === "aRetenir") {
        if (block.points.length < 2 || block.points.length > 3) {
          error("16. Contraintes de longueur fines", `${ref} : ${block.points.length} puce(s) aRetenir, attendu 2 à 3`);
        }
        for (const point of block.points) {
          if (words(point) > WORD_LIMITS.aRetenirPoint) {
            error("16. Contraintes de longueur fines", `${ref} : puce aRetenir de ${words(point)} mots (> 14)`);
          }
        }
      }
      if (block.type === "leSavaisTu" && words(block.text) > WORD_LIMITS.leSavaisTu) {
        error("16. Contraintes de longueur fines", `${ref} : leSavaisTu de ${words(block.text)} mots (> 35)`);
      }
      if (block.type === "citation" && words(block.texte) > WORD_LIMITS.citation) {
        error("16. Contraintes de longueur fines", `${ref} : citation de ${words(block.texte)} mots (> 25)`);
      }
      if (block.type === "chiffreCle") {
        if (block.valeur.length > 15) {
          error("16. Contraintes de longueur fines", `${ref} : chiffreCle.valeur de ${block.valeur.length} caractères (> 15)`);
        }
        if (words(block.legende) > WORD_LIMITS.chiffreCleLegende) {
          error("16. Contraintes de longueur fines", `${ref} : chiffreCle.legende de ${words(block.legende)} mots (> 10)`);
        }
      }
      if (block.type === "frise") {
        if (block.evenements.length < 3 || block.evenements.length > 5) {
          error("16. Contraintes de longueur fines", `${ref} : ${block.evenements.length} événement(s) de frise, attendu 3 à 5`);
        }
        for (const evenement of block.evenements) {
          if (words(evenement.texte) > WORD_LIMITS.friseEvenement) {
            error("16. Contraintes de longueur fines", `${ref} : événement de frise de ${words(evenement.texte)} mots (> 10)`);
          }
        }
      }
      if (block.type === "reperes" && (block.items.length < 2 || block.items.length > 6)) {
        error("16. Contraintes de longueur fines", `${ref} : ${block.items.length} repère(s), attendu 2 à 6`);
      }
    }

    // 17. Densité de gras.
    const NO_INLINE_TYPES = new Set(["chiffreCle", "citation", "frise", "reperes"]);
    for (const block of blocks) {
      if (!NO_INLINE_TYPES.has(block.type)) continue;
      const texts =
        block.type === "chiffreCle"
          ? [block.legende]
          : block.type === "citation"
            ? [block.texte, block.auteur]
            : block.type === "frise"
              ? block.evenements.map((e) => e.texte)
              : block.items.map((it) => it.valeur);
      for (const t of texts) {
        if (t.includes("**")) {
          error("17. Densité de gras", `${ref} : balisage gras interdit dans un bloc ${block.type}`);
        }
      }
    }
    let paragrapheBoldCount = 0;
    for (const block of blocks) {
      if (block.type !== "paragraphe") continue;
      for (const segment of parseInline(block.text)) {
        if (!segment.bold) continue;
        paragrapheBoldCount++;
        if (words(segment.text) > 4) {
          error("17. Densité de gras", `${ref} : passage en gras de plus de 4 mots ("${segment.text}")`);
        }
      }
    }
    if (paragrapheBoldCount < 2 || paragrapheBoldCount > 5) {
      warn("17. Densité de gras", `${ref} : ${paragrapheBoldCount} passage(s) en gras dans les paragraphes, cible 2 à 5`);
    }
    for (const block of blocks) {
      if (block.type === "aRetenir") {
        for (const point of block.points) {
          const bold = parseInline(point).filter((s) => s.bold);
          if (bold.length > 1) warn("17. Densité de gras", `${ref} : une puce aRetenir a plus d'un passage en gras`);
          for (const segment of bold) {
            if (words(segment.text) > 4) error("17. Densité de gras", `${ref} : passage en gras de plus de 4 mots dans aRetenir`);
          }
        }
      }
      if (block.type === "leSavaisTu") {
        const bold = parseInline(block.text).filter((s) => s.bold);
        if (bold.length > 2) warn("17. Densité de gras", `${ref} : leSavaisTu a plus de 2 passages en gras`);
        for (const segment of bold) {
          if (words(segment.text) > 4) error("17. Densité de gras", `${ref} : passage en gras de plus de 4 mots dans leSavaisTu`);
        }
      }
    }

    // 19. Blocs image.
    const imageBlocks = blocks.filter((b) => b.type === "image");
    if (imageBlocks.length > 1) {
      error("19. Blocs image", `${ref} : ${imageBlocks.length} blocs image, au plus 1 attendu`);
    }
    for (const block of imageBlocks) {
      if (block.type === "image" && block.legende && block.alt.trim() === block.legende.trim()) {
        error("19. Blocs image", `${ref} : alt identique à la légende`);
      }
    }
  }

  // 18. Gabarit de matière.
  checkSubjectTemplate(course);
}

/** Règle 18 — gabarit de matière imposé (docs/CHARTE-LECONS.md § 7). */
function checkSubjectTemplate(course: Course) {
  const ref = course.id;
  const blocksOf = (i: number) => course.lessons[i]?.blocks ?? [];
  const has = (i: number, type: LessonBlock["type"]) => blocksOf(i).some((b) => b.type === type);
  const anyLessonHas = (type: LessonBlock["type"]) => course.lessons.some((l) => l.blocks.some((b) => b.type === type));

  if (course.categoryId === "histoire") {
    if (course.lessons.length < 5) return;
    if (!has(0, "chiffreCle") && !has(0, "frise")) {
      error("18. Gabarit de matière", `${ref} : leçon 1 sans chiffreCle ni frise`);
    }
    if (!has(4, "frise") && !has(4, "citation")) {
      error("18. Gabarit de matière", `${ref} : leçon 5 sans frise ni citation`);
    }
    if (!anyLessonHas("citation")) {
      error("18. Gabarit de matière", `${ref} : aucune citation sur les 5 leçons`);
    }
    if (!anyLessonHas("frise")) {
      error("18. Gabarit de matière", `${ref} : aucune frise sur les 5 leçons`);
    }
  }

  if (course.categoryId === "geo") {
    if (course.lessons.length < 3) return;
    if (!has(0, "chiffreCle")) {
      error("18. Gabarit de matière", `${ref} : leçon 1 (Le territoire) sans chiffreCle`);
    }
    if (!has(1, "chiffreCle") && !has(1, "citation")) {
      error("18. Gabarit de matière", `${ref} : leçon 2 (Population et société) sans chiffreCle ni citation`);
    }
    if (!has(2, "reperes")) {
      error("18. Gabarit de matière", `${ref} : leçon 3 (Économie, politique et repères) sans reperes`);
    }
  }

  if (course.categoryId === "perso") {
    if (course.lessons.length < 5) return;
    if (!has(0, "frise")) {
      error("18. Gabarit de matière", `${ref} : leçon 1 sans frise`);
    }
    if (!has(4, "citation")) {
      error("18. Gabarit de matière", `${ref} : leçon 5 (la postérité) sans citation`);
    }
    if (!anyLessonHas("citation")) {
      error("18. Gabarit de matière", `${ref} : aucune citation sur les 5 leçons`);
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

// 20. Unicité des id de question sur l'ensemble du catalogue.
// La règle 3 ne garantit l'unicité qu'à l'intérieur d'un même quiz, ce qui suffisait tant que les
// questions n'étaient lues que dans le contexte de leur cours. Le module Quiz mémorise la révision
// par question via la clé `${courseId}:${questionId}` : cette clé resterait unique même en cas de
// collision d'id entre deux cours, mais une collision resterait un piège pour toute lecture par id
// seul. On l'interdit donc explicitement.
checkUnique(
  "20. Unicité globale des id de question",
  COURSES.flatMap((c) => c.quiz.map((q) => q.id)),
  (id, count) => `"${id}" apparaît ${count} fois dans l'ensemble des quiz du catalogue`,
);

// 21. Rattachement territorial. Tout cours hors Géographie doit figurer dans COURSE_TERRITORIES ;
// les fiches Géographie dérivent leur territoire de leur numéro d'ordre et n'ont rien à déclarer.
// Depuis la dissolution du Baobab (la zone transversale), un tableau vide ne veut plus dire
// « transversal » mais « rattaché question par question » : le cours doit alors déclarer **toutes**
// ses questions dans QUESTION_TERRITORIES, faute de quoi elles ne seraient jouables nulle part.
const KNOWN_TERRITORIES = new Set<string>(TERRITORY_IDS);
for (const course of COURSES) {
  if (course.categoryId === "geo") {
    if (course.id in COURSE_TERRITORIES) {
      error(
        "21. Rattachement territorial",
        `${course.id} est une fiche Géographie : son territoire est dérivé, il ne doit pas être déclaré dans COURSE_TERRITORIES`,
      );
    }
    continue;
  }
  const territories = COURSE_TERRITORIES[course.id];
  if (territories === undefined) {
    error(
      "21. Rattachement territorial",
      `${course.id} n'est rattaché à aucun territoire — ajouter une entrée dans src/data/courseTerritories.ts (tableau vide pour un sujet transversal)`,
    );
    continue;
  }
  for (const territoryId of territories) {
    if (!KNOWN_TERRITORIES.has(territoryId)) {
      error("21. Rattachement territorial", `${course.id} : territoire inconnu "${territoryId}"`);
    }
  }
  if (new Set(territories).size !== territories.length) {
    error("21. Rattachement territorial", `${course.id} : territoire répété`);
  }
  if (territories.length === 0) {
    const orphelines = course.quiz.filter((q) => !(`${course.id}:${q.id}` in QUESTION_TERRITORIES));
    if (orphelines.length > 0) {
      error(
        "21. Rattachement territorial",
        `${course.id} a un rattachement vide mais ${orphelines.length} de ses questions ne sont pas déclarées dans src/data/questionTerritories.ts (${orphelines[0].id}…) — elles ne seraient jouables sur aucun territoire`,
      );
    }
  }
}

// Entrées de QUESTION_TERRITORIES qui ne correspondent à aucune question, ou visant un territoire
// inconnu. Le rattachement par question prime sur celui du cours : une clé périmée y serait muette.
const allQuestionKeys = new Set(COURSES.flatMap((c) => c.quiz.map((q) => `${c.id}:${q.id}`)));
for (const [key, territoryId] of Object.entries(QUESTION_TERRITORIES)) {
  if (!allQuestionKeys.has(key)) {
    error(
      "21. Rattachement territorial",
      `"${key}" est rattachée à un territoire mais ne correspond à aucune question du catalogue`,
    );
  }
  if (!KNOWN_TERRITORIES.has(territoryId)) {
    error("21. Rattachement territorial", `"${key}" : territoire inconnu "${territoryId}"`);
  }
}

// Entrées de COURSE_TERRITORIES ne correspondant à aucun cours (cours supprimé ou renommé).
const allCourseIds = new Set(COURSES.map((c) => c.id));
for (const id of Object.keys(COURSE_TERRITORIES)) {
  if (!allCourseIds.has(id)) {
    error(
      "21. Rattachement territorial",
      `"${id}" est rattaché à un territoire mais n'existe pas dans COURSES`,
    );
  }
}

// 22. Rattachement des questions à leur leçon (module Quiz).
// Deux régimes : un cours dont le quiz compte autant de questions que de leçons est « aligné » et
// son rattachement se dérive par position ; les autres doivent être déclarés dans QUIZ_LESSON_MAP.
// Une question non rattachée n'est pas bloquante (le module renvoie alors vers le cours), mais on
// en tient le compte pour que le reste à faire reste visible.
const coursesById = new Map(COURSES.map((c) => [c.id, c]));
for (const [questionKey, lessonId] of Object.entries(QUIZ_LESSON_MAP)) {
  const separator = questionKey.lastIndexOf(":");
  const courseId = separator === -1 ? "" : questionKey.slice(0, separator);
  const questionId = separator === -1 ? "" : questionKey.slice(separator + 1);
  const course = coursesById.get(courseId);
  if (!course) {
    error("22. Rattachement question → leçon", `"${questionKey}" ne référence aucun cours connu`);
    continue;
  }
  if (!course.quiz.some((q) => q.id === questionId)) {
    error(
      "22. Rattachement question → leçon",
      `"${questionKey}" ne référence aucune question du quiz de ${courseId}`,
    );
    continue;
  }
  if (!course.lessons.some((l) => l.id === lessonId)) {
    error(
      "22. Rattachement question → leçon",
      `"${questionKey}" renvoie vers "${lessonId}", qui n'est pas une leçon de ${courseId}`,
    );
  }
}

let unmappedQuestions = 0;
const unmappedCourses: string[] = [];
for (const course of COURSES) {
  if (course.quiz.length === course.lessons.length) continue;
  const missing = course.quiz.filter((q) => !(`${course.id}:${q.id}` in QUIZ_LESSON_MAP)).length;
  if (missing > 0) {
    unmappedQuestions += missing;
    unmappedCourses.push(course.id);
  }
}
if (unmappedQuestions > 0) {
  warn(
    "22. Rattachement question → leçon",
    `${unmappedQuestions} question(s) sur ${unmappedCourses.length} cours non alignés n'ont pas de leçon déclarée dans src/data/quizLessonMap.ts — le module Quiz renverra vers le cours au lieu de la leçon`,
  );
}

// 23. Question de quiz sans sujet nommé. Le module Quiz sert les questions hors contexte (Blitz,
// Survie, Défi du jour, révision) : une question qui ne désigne son sujet que par un pronom
// ("il", "sa mort"…) ou un démonstratif ("ce commerce", "ces royaumes"…) sans jamais le nommer
// devient incompréhensible seule. Heuristique volontairement simple — avertissement, pas erreur :
// elle ne comprend pas le français, elle repère un motif de surface (pronom/possessif de 3e
// personne ou démonstratif présent, aucun mot capitalisé au-delà du premier mot de la phrase) et
// se trompera parfois (faux positifs sur une question déjà correcte, faux négatifs sur une
// tournure qu'elle ne connaît pas). Le contenu se corrige à la main ; cette règle sert à ne pas
// laisser le bug revenir silencieusement.
const UNNAMED_SUBJECT_PATTERN =
  /\b(il|elle|ils|elles|lui|leur|leurs|sa|son|ses)\b|-t-(il|elle)\b|\b(cette|cet|ces)\b|\bce\b(?!\s+(que|qui))/i;
// "Qu'est-ce que/qui" est une tournure interrogative figée, pas un démonstratif anaphorique — on
// la retire avant le test pour ne pas la confondre avec "ce" employé comme déterminant.
const CE_IDIOM_PATTERN = /qu['’]est-ce|est-ce\s+(que|qui)/gi;
// "Lequel/Laquelle de ces X" renvoie aux options affichées avec la question (toujours servies
// ensemble) : le démonstratif y est légitime, pas anaphorique vers un contexte absent.
const CE_OPTIONS_IDIOM_PATTERN = /^(lequel|laquelle|lesquels|lesquelles)\s+de\s+ces\b/i;
// Pas de \b devant la majuscule : \b se fonde sur \w (ASCII), qui exclut les lettres accentuées —
// "É" en tête de mot ("Égyptiens", "Éthiopie"…) ne formerait alors jamais de frontière détectée.
const PROPER_NOUN_PATTERN = /(^|[^A-Za-zÀ-ÿ])[A-ZÀ-Ý][a-zà-ÿ'-]+/;
for (const course of COURSES) {
  for (const q of course.quiz) {
    const question = q.question.trim();
    if (!question) continue;
    if (CE_OPTIONS_IDIOM_PATTERN.test(question)) continue;
    const withoutIdioms = question.replace(CE_IDIOM_PATTERN, "");
    if (!UNNAMED_SUBJECT_PATTERN.test(withoutIdioms)) continue;
    // Ignore le premier mot (souvent capitalisé par simple position en début de phrase).
    const rest = question.slice(question.indexOf(" ") + 1);
    if (PROPER_NOUN_PATTERN.test(rest)) continue;
    warn(
      "23. Question de quiz sans sujet nommé",
      `${course.id} / ${q.id} : "${q.question}"`,
    );
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
