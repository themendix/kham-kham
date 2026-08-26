/**
 * Modèle de données de Sankofa.
 * Tout le contenu de l'application (catégories, cartes, cours, parcours)
 * est typé ici et vit dans des fichiers `.ts` statiques sous `src/data/`.
 * Seule la progression de l'utilisateur (UserProgress) est mutable et
 * persistée en localStorage via le store Zustand.
 */

export type { LessonBlock } from "@/lib/lessonBlocks";
import type { LessonBlock } from "@/lib/lessonBlocks";
import type { TerritoryId } from "@/lib/territories";

/** Clé de couleur de matière, utilisée comme suffixe des tokens Tailwind (bg-histoire, text-geo…) */
export type SubjectColor = "histoire" | "geo" | "perso" | "decouverte";

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
  blocks: LessonBlock[];
  emoji: string;
}

export interface Lesson {
  id: string;
  title: string;
  blocks: LessonBlock[];
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

/**
 * Métadonnées légères d'un cours : tout `Course` sauf le contenu qui pèse lourd (texte des
 * leçons, questions de quiz). Généré au build (`scripts/generate-course-index.ts`) depuis le
 * catalogue complet, pour que le bundle initial n'embarque que ce qui est nécessaire aux écrans
 * de liste, à la recherche et à la logique de progression — le contenu complet est chargé à la
 * demande par matière (`src/data/courseContent.ts`). Voir docs/ARCHITECTURE.md § Découpage du bundle.
 */
export interface CourseMeta {
  id: string;
  categoryId: string;
  title: string;
  description: string;
  emoji: string;
  xp: number;
  lessons: { id: string }[];
  quizCount: number;
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

/** Modes de jeu portant un record par territoire */
export type QuizGameMode = "blitz" | "survie";

/**
 * Mode réellement joué par le moteur de partie : les deux modes à record, plus le Défi du jour.
 * Le défi est délibérément hors de `QuizGameMode` — il ne se joue sur aucun territoire en
 * particulier et ne doit donc pas ouvrir une case de record.
 */
export type QuizPlayMode = QuizGameMode | "defi";

/**
 * Une question de quiz telle que le module Quiz la consomme : la question elle-même, augmentée
 * de son origine (cours, matière) et de ses territoires. Générée au build
 * (`scripts/generate-quiz-index.ts`) dans `src/data/quizIndex.generated.ts`, chargée seule pour
 * ne pas tirer le texte des leçons — voir docs/ARCHITECTURE.md § Module Quiz.
 */
export interface QuizEntry {
  /** Clé stable `${courseId}:${questionId}`, clé de révision dans `UserProgress` (même convention que `completedLessonIds`) */
  key: string;
  courseId: string;
  categoryId: string;
  /** Leçon qui donne la réponse, dépliée sur place quand l'utilisateur se trompe ; `null` quand le
   * rattachement n'est pas encore fait — le module renvoie alors vers le cours (voir `src/data/quizLessonMap.ts`) */
  lessonId: string | null;
  territories: TerritoryId[];
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

/**
 * Suivi d'une question pour la révision espacée. Le palier (`box`) monte à chaque réussite et
 * retombe à 0 à chaque échec ; `dueDate` est la date à partir de laquelle la question doit
 * revenir en priorité dans une partie. Voir `src/lib/quizReview.ts`.
 */
export interface QuestionStat {
  correct: number;
  wrong: number;
  /** 0 → revoir à J+1, 1 → J+3, 2 → J+7, 3 → acquise (plus de rappel programmé) */
  box: number;
  /** Date ISO (YYYY-MM-DD) d'échéance de révision ; null quand la question est acquise */
  dueDate: string | null;
}

/** Meilleur score par mode, pour un territoire */
export type TerritoryRecords = Record<QuizGameMode, number>;

/** État du module Quiz, persisté dans `UserProgress` */
export interface QuizGameState {
  /** Monnaie du module Quiz, gagnée en partie — sans effet sur l'XP ni sur le rang */
  cauris: number;
  /** Statistiques par question, clé `${courseId}:${questionId}` */
  questions: Record<string, QuestionStat>;
  /** Meilleurs scores par territoire (clé = `TerritoryId`) */
  records: Record<string, TerritoryRecords>;
  /** Nombre total de parties terminées */
  gamesPlayed: number;
}

export interface UserProgress {
  xp: number;
  level: number;
  rank: string;
  streak: StreakState;
  completedCourseIds: string[];
  /** Parcours dont tous les cours sont terminés et dont l'XP (`xpReward`) a déjà été créditée (une seule fois) */
  completedParcoursIds: string[];
  favoriteCardIds: string[];
  favoriteCourseIds: string[];
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
  /** Leçons lues, clés `${courseId}:${lessonId}` (lessonId n'est pas unique globalement) — partagé
   * entre la vue cours, « À la une » et le fil Home (les 18 cartes éditoriales de `CARDS` sont
   * comptées sous le pseudo-cours réservé `EDITORIAL_COURSE_ID`, voir `src/lib/homeFeed.ts`) */
  completedLessonIds: string[];
  /** Leçon actuellement mise en avant dans « À la une » (Biblio), clé `${courseId}:${lessonId}`, null si tout est lu */
  featuredLessonKey: string | null;
  /** État du module Quiz (onglet Jeu) : cauris, révision espacée, records par territoire */
  quizGame: QuizGameState;
}
