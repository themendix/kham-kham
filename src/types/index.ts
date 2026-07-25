/**
 * Modèle de données de Sankofa.
 * Tout le contenu de l'application (catégories, cartes, cours, parcours)
 * est typé ici et vit dans des fichiers `.ts` statiques sous `src/data/`.
 * Seule la progression de l'utilisateur (UserProgress) est mutable et
 * persistée en localStorage via le store Zustand.
 */

/** Clé de couleur de matière, utilisée comme suffixe des tokens Tailwind (bg-histoire, text-geo…) */
export type SubjectColor =
  | "histoire"
  | "geo"
  | "perso"
  | "arts"
  | "trad"
  | "actu";

export interface Category {
  id: string;
  name: string;
  emoji: string;
  color: SubjectColor;
}

/** Fiche du fil Home, swipée par l'utilisateur (✗ passer / ✓ apprendre) */
export interface SwipeCard {
  id: string;
  categoryId: string;
  title: string;
  teaser: string;
  content: string;
  emoji: string;
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

/** Résultat d'une tentative de quiz, conservé pour l'historique du Profil */
export interface QuizResult {
  courseId: string;
  score: number;
  total: number;
  /** Date ISO (résultat de `new Date().toISOString()`) */
  date: string;
}

export interface Course {
  id: string;
  categoryId: string;
  title: string;
  description: string;
  emoji: string;
  lessons: Lesson[];
  quiz: QuizQuestion[];
  xp: number;
}

/** Parcours guidé : enchaîne plusieurs cours autour d'un même thème */
export interface Parcours {
  id: string;
  title: string;
  description: string;
  courseIds: string[];
  xpReward: number;
  emoji: string;
}

export interface StreakState {
  count: number;
  /** Date ISO (YYYY-MM-DD) de la dernière activité, pour calculer les ruptures de série */
  lastActiveDate: string | null;
  /** Jours de la semaine en cours actifs, index 0 = lundi ... 6 = dimanche */
  weekDays: boolean[];
}

/** Proverbe africain affiché dans le module « Proverbe du jour » du Home */
export interface Proverb {
  id: string;
  text: string;
  origin: string;
}

/** Suivi de l'activité du jour (Home), remis à zéro automatiquement au changement de date */
export interface DailyState {
  /** Date ISO (YYYY-MM-DD) du dernier reset ; null avant toute activité */
  date: string | null;
  cardsLearned: number;
  xpEarned: number;
  challengeDone: boolean;
}

export interface UserProgress {
  xp: number;
  level: number;
  rank: string;
  streak: StreakState;
  completedCourseIds: string[];
  favoriteCardIds: string[];
  favoriteCourseIds: string[];
  seenCardIds: string[];
  /** Score de maîtrise 0-100 par catégorie, alimente le radar du Profil */
  masteryByCategory: Record<string, number>;
  /** Historique des tentatives de quiz, 10 plus récentes maximum, alimente le Profil */
  quizResults: QuizResult[];
  /** Activité du jour (objectif Home, défi quotidien) */
  daily: DailyState;
  /** Dernier cours ouvert dans CourseDetailScreen, alimente « Continue ton apprentissage » */
  lastCourseId: string | null;
  /** Nombre total de cartes apprises (✓) depuis toujours, ne se remet jamais à zéro */
  totalCardsLearned: number;
  /** Cours dont au moins une leçon a été lue (au-delà de la 1ʳᵉ), alimente l'état « En cours » du tableau de bord de matière */
  startedCourseIds: string[];
  /** Leçons lues, clés `${courseId}:${lessonId}` (lessonId n'est pas unique globalement) — partagé entre la vue cours et « À la une » */
  completedLessonIds: string[];
  /** Leçon actuellement mise en avant dans « À la une » (Biblio), clé `${courseId}:${lessonId}`, null si tout est lu */
  featuredLessonKey: string | null;
}
