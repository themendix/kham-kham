import type { Course } from "../src/types";

/** Alternatives de postérité approuvées le 15/10/2026, charte §7.3.
 * Liste explicite : un nouveau portrait sans citation ne reçoit pas de dérogation implicite.
 */
export const PORTRAIT_POSTERITY_ALTERNATIVES = {
  "course-perso-04-yennenga": "reperes",
  "course-perso-05-ibn-khaldoun": "chiffreCle",
  "course-perso-06-sayyida-al-hurra": "reperes",
  "course-perso-07-kimpa-vita": "reperes",
  "course-perso-08-nanny-marrons": "image",
  "course-perso-11-abd-el-kader": "chiffreCle",
  "course-perso-12-samori-toure": "reperes",
  "course-perso-13-taytu-betul": "reperes",
  "course-perso-14-yaa-asantewaa": "reperes",
  "course-perso-15-sarraounia": "reperes",
  "course-perso-17-cheikh-anta-diop": "reperes",
  "course-perso-19-amilcar-cabral": "chiffreCle",
  "course-perso-20-agostinho-neto": "reperes",
  "course-perso-22-julius-nyerere": "reperes",
  "course-perso-25-jeanne-martin-cisse": "reperes",
  "course-perso-26-funmilayo-ransome-kuti": "chiffreCle",
  "course-perso-27-aoua-keita": "chiffreCle",
  "course-perso-28-albertina-sisulu": "reperes",
} as const;

export function personalityTemplateIssues(course: Course): string[] {
  if (course.categoryId !== "perso") return [];
  const issues: string[] = [];
  const has = (index: number, type: string) => course.lessons[index]?.blocks.some((b) => b.type === type) ?? false;
  if (course.lessons.length !== 5) issues.push(`${course.id} : ${course.lessons.length} leçons, attendu 5`);

  // Anthologie de cinq auteurs : ni frise de vie commune ni parole d'une personne unique.
  // Les règles communes de structure, budget, balisage et images restent contrôlées.
  if (course.id === "course-perso-voix-plumes-afrique") {
    if (!has(4, "reperes")) issues.push(`${course.id} : conclusion thématique sans reperes`);
    return issues;
  }

  if (!has(0, "frise")) issues.push(`${course.id} : leçon 1 sans frise`);
  const alternative = (PORTRAIT_POSTERITY_ALTERNATIVES as Record<string, string>)[course.id];
  if (!has(4, "citation") && !has(4, "frise") && !(alternative && has(4, alternative))) {
    issues.push(`${course.id} : leçon 5 (la postérité) sans citation, frise ni alternative approuvée${alternative ? ` (${alternative})` : ""}`);
  }
  return issues;
}
