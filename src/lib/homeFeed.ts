import type { Category, Course, Lesson, SwipeCard as SwipeCardData } from "@/types";
import { CARDS } from "@/data/cards";
import { lessonKey, getLessonRef, pickNextFeaturedLesson } from "@/lib/featured";

/**
 * Identifiant de cours réservé aux 18 cartes éditoriales du fil Home (`src/data/cards.ts`).
 * Elles ne correspondent à aucun `Course` réel du catalogue, mais doivent compter comme des
 * leçons lues au même titre que les autres (convergence `seenCardIds`/`completedLessonIds`,
 * Phase 7 lot 3) : apprendre une carte appelle `completeLesson(EDITORIAL_COURSE_ID, card.id)`,
 * exactement comme une vraie leçon de cours.
 */
export const EDITORIAL_COURSE_ID = "editorial";

export interface FeedCard {
  /** Identifiants à passer tels quels à `completeLesson(courseId, lessonId)` */
  courseId: string;
  lessonId: string;
  /** Vue à afficher, compatible avec le composant `SwipeCard` existant */
  card: SwipeCardData;
}

function editorialFeedCard(card: SwipeCardData): FeedCard {
  return { courseId: EDITORIAL_COURSE_ID, lessonId: card.id, card };
}

/** Adapte une leçon de cours en carte swipable : le teaser reprend la description du cours
 * (courte et déjà rédigée), le contenu déplié reste celui, complet, de la leçon. */
function catalogFeedCard(course: Course, lesson: Lesson): FeedCard {
  return {
    courseId: course.id,
    lessonId: lesson.id,
    card: {
      id: lesson.id,
      categoryId: course.categoryId,
      title: lesson.title,
      teaser: course.description,
      content: lesson.content,
      emoji: course.emoji,
    },
  };
}

/**
 * Construit la file de cartes du fil Home pour une session : d'abord les cartes éditoriales
 * de `CARDS` non lues (sélection prioritaire), puis les leçons du catalogue non lues, en
 * rotation de matière — même logique que « À la une », mutualisée via `pickNextFeaturedLesson`
 * plutôt que dupliquée. `excludeKey` (la vedette Biblio courante) garantit que le fil Home et
 * « À la une » ne proposent jamais la même leçon en même temps.
 *
 * Construite une seule fois par montage du Home (pas un flux réactif) : un ordre de lecture
 * figé pour la durée de la visite, qui s'épuise seulement après avoir parcouru l'intégralité
 * du contenu non lu — largement inépuisable en une session vu la taille du catalogue.
 * Fonction pure : ne mute rien, ne lit aucun state externe au-delà de ses paramètres.
 */
export function buildHomeFeed(params: {
  completedLessonIds: string[];
  excludeKey?: string | null;
  allCourses: Course[];
  allCategories: Category[];
}): FeedCard[] {
  const { completedLessonIds, excludeKey, allCourses, allCategories } = params;
  const completed = new Set(completedLessonIds);

  const editorialCards = CARDS.filter((c) => !completed.has(lessonKey(EDITORIAL_COURSE_ID, c.id))).map(
    editorialFeedCard,
  );

  const simulated = new Set(completed);
  if (excludeKey) simulated.add(excludeKey);
  const catalogCards: FeedCard[] = [];
  let previousCategoryId: string | undefined;
  const maxLessons = allCourses.reduce((n, c) => n + c.lessons.length, 0);
  for (let i = 0; i < maxLessons; i++) {
    const nextKey = pickNextFeaturedLesson({
      completedLessonIds: [...simulated],
      previousCategoryId,
      allCourses,
      allCategories,
    });
    if (nextKey === null) break;
    const ref = getLessonRef(nextKey, allCourses);
    if (!ref) break;
    catalogCards.push(catalogFeedCard(ref.course, ref.lesson));
    simulated.add(nextKey);
    previousCategoryId = ref.course.categoryId;
  }

  return [...editorialCards, ...catalogCards];
}
