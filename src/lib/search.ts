/** Où la correspondance a été trouvée dans le cours, par ordre de pertinence décroissante. */
export type SearchMatchLocation = "titre" | "description" | "leçon";

/**
 * Sous-ensemble minimal cherchable. Les champs de leçon sont optionnels : l'index léger de
 * métadonnées (`CourseMeta`, `@/data/coursesIndex.generated`) ne porte que l'`id` de chaque
 * leçon, pas son texte — la recherche y fonctionne quand même, simplement sans le palier
 * « leçon » (voir 5b, chargement à la demande du contenu par matière). Une fois le contenu
 * complet chargé (`Course[]`), ce palier devient disponible.
 */
interface SearchableLesson {
  id: string;
  title?: string;
  content?: string;
}
interface SearchableCourse {
  id: string;
  title: string;
  description: string;
  lessons: SearchableLesson[];
}

export interface CourseSearchResult<C> {
  course: C;
  matchLocation: SearchMatchLocation;
  /** Titre de la leçon correspondante, uniquement si `matchLocation === "leçon"` */
  matchedLessonTitle?: string;
}

/** Normalise pour une comparaison insensible aux accents et à la casse (NFD + suppression des diacritiques). */
const COMBINING_DIACRITICS = new RegExp("[\\u0300-\\u036f]", "g");

export function normalizeSearchText(text: string): string {
  return text.normalize("NFD").replace(COMBINING_DIACRITICS, "").toLowerCase();
}

const MATCH_PRIORITY: Record<SearchMatchLocation, number> = { titre: 0, description: 1, leçon: 2 };

/**
 * Recherche `query` dans le titre, la description puis le contenu des leçons de chaque cours,
 * insensible aux accents et à la casse. Un cours n'apparaît qu'une seule fois, avec la
 * localisation la plus pertinente de sa correspondance. Résultats triés par pertinence (titre
 * d'abord, puis description, puis leçon) : sur 98 cours, une correspondance perdue dans une
 * leçon d'un autre pays ne doit pas passer devant le cours dont c'est le titre.
 */
export function searchCourses<C extends SearchableCourse>(query: string, courses: C[]): CourseSearchResult<C>[] {
  const normalizedQuery = normalizeSearchText(query.trim());
  if (!normalizedQuery) return [];

  const results: CourseSearchResult<C>[] = [];
  for (const course of courses) {
    if (normalizeSearchText(course.title).includes(normalizedQuery)) {
      results.push({ course, matchLocation: "titre" });
      continue;
    }
    if (normalizeSearchText(course.description).includes(normalizedQuery)) {
      results.push({ course, matchLocation: "description" });
      continue;
    }
    const matchedLesson = course.lessons.find(
      (lesson) =>
        (lesson.title && normalizeSearchText(lesson.title).includes(normalizedQuery)) ||
        (lesson.content && normalizeSearchText(lesson.content).includes(normalizedQuery)),
    );
    if (matchedLesson) {
      results.push({ course, matchLocation: "leçon", matchedLessonTitle: matchedLesson.title });
    }
  }
  return results.sort((a, b) => MATCH_PRIORITY[a.matchLocation] - MATCH_PRIORITY[b.matchLocation]);
}
