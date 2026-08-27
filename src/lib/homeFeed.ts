import type { Category, CourseMeta } from "@/types";

export interface FeedCard {
  course: CourseMeta;
  category: Category;
}

export interface BuildHomeFeedParams {
  /** Cours déjà terminés : inutile de les proposer à la découverte */
  completedCourseIds: string[];
  /** Cours déjà mis de côté (« intéressé ») */
  favoriteCourseIds: string[];
  /** Cours écartés (« pas intéressé »), définitivement retirés du fil */
  dismissedCourseIds: string[];
  allCourses: CourseMeta[];
  allCategories: Category[];
}

/**
 * Construit le fil de découverte du Home : des **cours** à trier, pas des leçons.
 *
 * Le fil ne sert plus à apprendre mais à **faire découvrir le catalogue**. Une carte montre un
 * cours tel quel — son illustration, son titre, sa description — et l'utilisateur le met de côté
 * (✓ intéressé) ou l'écarte (✗). Rien n'est lu ni validé ici : c'est du tri, et c'est pour ça que
 * le geste ne rapporte aucune XP.
 *
 * Le fil portait auparavant des leçons (dépliables, validées par « j'ai appris »), et avant elles
 * 18 cartes éditoriales tenues dans un fichier à part (`src/data/cards.ts`) — le contenu
 * d'amorçage de la Phase 1, retiré une fois le catalogue à 136 cours.
 *
 * Conséquence technique agréable : une carte n'a besoin que des **métadonnées** d'un cours, donc
 * de `COURSE_INDEX` seul. Le fil est complet dès le premier rendu, sans attendre le chargement du
 * texte des leçons — ce que la version « leçons » ne savait pas faire.
 *
 * Ordre : tourniquet entre matières (une carte par matière à tour de rôle) plutôt que le catalogue
 * dans l'ordre, sinon on servirait 54 fiches Géographie d'affilée. Déterministe : deux appels avec
 * la même progression donnent le même fil.
 *
 * Fonction pure : ne mute rien, ne lit aucun state externe au-delà de ses paramètres.
 */
export function buildHomeFeed({
  completedCourseIds,
  favoriteCourseIds,
  dismissedCourseIds,
  allCourses,
  allCategories,
}: BuildHomeFeedParams): FeedCard[] {
  const seen = new Set([...completedCourseIds, ...favoriteCourseIds, ...dismissedCourseIds]);
  const categoryById = new Map(allCategories.map((c) => [c.id, c]));

  // File par matière, dans l'ordre du catalogue.
  const queues = allCategories.map((category) =>
    allCourses.filter((course) => course.categoryId === category.id && !seen.has(course.id)),
  );

  const feed: FeedCard[] = [];
  const total = queues.reduce((n, q) => n + q.length, 0);
  let cursor = 0;

  while (feed.length < total) {
    for (const queue of queues) {
      const course = queue[cursor];
      if (!course) continue;
      const category = categoryById.get(course.categoryId);
      if (category) feed.push({ course, category });
    }
    cursor += 1;
    // Garde-fou : `cursor` dépasse forcément la plus longue file, mais on ne veut pas d'une
    // boucle infinie si une catégorie disparaissait du référentiel entre deux versions.
    if (cursor > allCourses.length) break;
  }

  return feed;
}
