# Architecture — Sankofa

## Vue d'ensemble

Sankofa est une application 100 % front-end (aucun back-end). Elle est structurée en quatre couches :

1. **Données statiques** (`src/data/`) — le contenu éditorial (catégories, cartes, cours, parcours), sous forme de fichiers TypeScript typés. Ajouter du contenu revient à ajouter des entrées dans ces fichiers, sans toucher au code applicatif.
2. **Modèle de données** (`src/types/`) — les interfaces TypeScript qui décrivent à la fois le contenu statique et la progression utilisateur.
3. **État & persistance** (`src/store/`) — un store Zustand unique contenant la progression utilisateur (`UserProgress`), persistée automatiquement en `localStorage` via le middleware `persist`.
4. **UI** (`src/components/`, `src/routes/`) — composants de présentation qui lisent les données statiques et le store, sans logique métier propre.
5. **Hooks réutilisables** (`src/hooks/`) — logique d'interaction générique, sans connaissance du domaine Sankofa ni accès au store (ex. `useSwipeGesture`, `useReducedMotion`).

## Flux de données

```
data/*.ts (contenu statique, en lecture seule)
        │
        ▼
routes/*.tsx (écrans) ──lit──► store/useAppStore (progression, persistée)
        │                              ▲
        ▼                              │
components/features/*  ──déclenche actions (markCardSeen, addXp…)
```

- Le contenu (`data/`) ne change jamais à l'exécution : c'est la source de vérité éditoriale.
- La progression (`store/`) est la seule chose qui change et qui doit survivre à un rafraîchissement de page : XP, niveau, streak, cartes vues/favorites, cours terminés, maîtrise par catégorie.
- Les composants d'écran (`routes/`) orchestrent : ils lisent le contenu statique correspondant, lisent la progression via `useAppStore`, et appellent les actions du store en réponse aux interactions (swipe, favori, complétion de cours).
- Flux du quiz : `CourseDetailScreen` (route `/cours/:courseId`) enchaîne `LessonViewer` (leçons paginées) puis `QuizPlayer` ; quand `QuizPlayer` appelle `onFinish(score, total)`, l'écran déclenche `recordQuizResult` (historique, à chaque tentative), `completeCourse` (XP, idempotent) puis `addMastery` uniquement si le cours n'était pas déjà terminé. `CourseDetailScreen` appelle aussi `setLastCourse(course.id)` à l'ouverture, pour alimenter le module « Continue ton apprentissage » du Home.
- Flux du Home (tableau de bord) : voir § dédiée ci-dessous.
- Les composants `ui/` et `features/` sont des composants de présentation : ils reçoivent des props et n'accèdent jamais directement au store ou aux données (à l'exception de `MasteryRadar`, qui a besoin de connaître l'ordre des catégories pour dessiner ses axes, et de `TopBar`, qui affiche le streak global).

## Ossature responsive (web, pas mobile-only)

L'application est un vrai site web responsive, pas un mockup de téléphone : sur desktop, la navigation principale est une **sidebar** fixe à gauche (`components/layout/Sidebar.tsx`) et le contenu utilise toute la largeur disponible (grilles de cours/parcours) ; sur mobile, la sidebar est masquée et remplacée par une barre d'onglets fixée en bas (`components/layout/BottomNav.tsx`). Les deux composants de navigation sont montés en permanence dans le DOM et basculent via des classes Tailwind responsive (`hidden md:flex` / `md:hidden`) plutôt que par une détection JS de la taille d'écran.

`components/layout/AppShell.tsx` assemble `TopBar` (header sticky pleine largeur), `Sidebar`, le contenu de la route active, et `BottomNav`. C'est le seul point d'entrée de layout utilisé par `App.tsx`.

## Modèle de données

Voir `src/types/index.ts` pour la définition complète. Résumé :

- `Category` : une matière (Histoire, Géographie…), avec son emoji et sa couleur pastel.
- `SwipeCard` : une fiche du fil Home, rattachée à une catégorie.
- `Course` : un cours de la Biblio, composé de `Lesson[]` et d'un `QuizQuestion[]`.
- `Parcours` : un regroupement de cours (par `courseIds`), avec une récompense XP globale.
- `QuizResult` : le résultat d'une tentative de quiz (`courseId`, `score`, `total`, `date`), historisé côté `UserProgress`.
- `Proverb` : un proverbe africain (`text`, `origin`), affiché dans le module « Proverbe du jour » du Home.
- `DailyState` : le suivi de l'activité du jour (`cardsLearned`, `xpEarned`, `challengeDone`, `date` du dernier reset), stocké dans `UserProgress.daily`.
- `UserProgress` : le seul état mutable et persisté — XP, niveau, rang, streak, cartes vues/favorites, cours terminés, maîtrise par catégorie, historique des tentatives de quiz (`quizResults`, 10 plus récentes), activité du jour (`daily`), dernier cours ouvert (`lastCourseId`), total cumulé de cartes apprises (`totalCardsLearned`), cours commencés (`startedCourseIds`), leçons lues (`completedLessonIds`, clés `courseId:lessonId`) et leçon actuellement mise en avant en Biblio (`featuredLessonKey`).

## Home — tableau de bord (Phase 3)

`HomeScreen` (route `/`) est l'orchestrateur d'un tableau de bord à 7 modules, assemblés dans cet ordre : `DailyGoalCard` (salutation + objectif du jour), le fil `SwipeCard` (en vedette, avec tap pour révéler `card.content`), `DailyChallengeCard` (lien vers `/defi`), `ContinueLearningCard`, `ThemeExplorer` (pastilles de matières → `/biblio?cat=<id>`, scroll dans `BiblioScreen`), `ProverbCard`, `ProgressGlance`. Tous ces composants (`src/components/features/`) sont présentationnels ; `HomeScreen` lit `useAppStore` et les fichiers `data/` puis leur passe des props.

**Suivi quotidien** (`UserProgress.daily`) : remis à zéro automatiquement dès que la date change, via `resetDailyIfNeeded` (`src/lib/daily.ts`), appliqué paresseusement à chaque action qui touche `daily` (`addDailyProgress`, `markChallengeDone`) et explicitement au montage du Home (`checkDailyReset`, même pattern que `updateStreak`). Une carte apprise (✓) appelle `addDailyProgress({ cards: 1, xp: XP_PER_CARD })`, qui incrémente à la fois le compteur du jour et `totalCardsLearned` (cumulatif, jamais remis à zéro).

**Sélection déterministe du jour** (`src/lib/daily.ts`) : `pickDailyIndex` (proverbe) et `pickDailyQuestions` (3 questions du Défi du jour, tirées de `COURSES.flatMap(c => c.quiz)`) dérivent toutes deux du jour de l'année (`dayOfYear`), donc stables toute la journée et différentes le lendemain, sans état supplémentaire à persister.

**Défi du jour** : route `/defi` (`routes/DailyChallengeScreen.tsx`), réutilise directement `QuizPlayer` comme `CourseDetailScreen`. À la réussite : `recordQuizResult` (avec un `courseId` synthétique `"defi-quotidien"`), `addXp`/`addDailyProgress` (bonus `DAILY_CHALLENGE_XP_BONUS`), `markChallengeDone`. Un seul défi par jour ; au-delà, l'écran affiche un état verrouillé.

## Geste de swipe (Phase 4)

Le fil `SwipeCard` du Home se glisse réellement à la souris et au tactile, via un hook
réutilisable `useSwipeGesture` (`src/hooks/useSwipeGesture.ts`), branché sur un seul
wrapper englobant toute la `Card` (illustration, favori, "En savoir plus"). Ce hook est
purement impératif pendant le drag : aucune mise à jour de state React à chaque
`pointermove` — la position/rotation de la carte et l'opacité des estampilles
« APPRENDRE ✓ » / « PASSER ✗ » sont écrites directement sur le DOM (`style.transform`
et des CSS custom properties `--sankofa-learn-opacity` / `--sankofa-pass-opacity`,
héritées par les enfants). React ne re-render qu'au début et à la fin de chaque geste
(état `isDragging`, pour le curseur `grab`/`grabbing`).

Au relâchement, si le déplacement dépasse ~30 % de la largeur de la carte (ou qu'un
flick rapide est détecté même sous ce seuil), la carte s'envole (transition CSS) puis
`onLearn`/`onPass` est appelé une fois l'animation terminée ; sinon elle revient
élastiquement au centre. Les boutons ✗/✓ déclenchent la même fonction `triggerCommit`
que le geste, donc la même animation d'envol. Un tap sur "En savoir plus" ou le favori
n'est pas confondu avec un drag : un seuil de mouvement (~8 px) détermine si le clic
qui suit le relâchement doit être laissé passer ou avalé (`onClickCapture` en phase
capture sur le wrapper). `useReducedMotion` (`src/hooks/useReducedMotion.ts`) lit
`prefers-reduced-motion` et désactive la rotation et l'envol appuyé au profit d'un
simple fondu/translation. `SwipeCard` reste un composant de présentation pur : il
consomme ces hooks mais n'accède toujours pas au store.

## Tableau de bord de matière (Phase 5)

`CategoryScreen` (route `/biblio/:categoryId`, accessible depuis « Voir plus → » en Biblio) affiche un niveau, une XP et une progression **propres à la matière**, entièrement dérivés des cours de cette catégorie et de `UserProgress` — rien de plus n'est stocké pour l'XP ou le niveau de matière. Le calcul vit dans `src/lib/subjectProgress.ts` :

- `getSubjectProgress(categoryId, progress, allCourses)` : filtre `COURSES` par `categoryId`, puis dérive `completedCount` (cours de la matière dans `completedCourseIds`), `xp` (somme de `course.xp` des cours terminés), `level` = `floor(completedCount / COURSES_PER_LEVEL) + 1` et `progressPct` = avancement dans le niveau courant (`(completedCount % COURSES_PER_LEVEL) / COURSES_PER_LEVEL`). `COURSES_PER_LEVEL = 3`, ajustable à un seul endroit.
- `getCourseStatus(courseId, progress)` : renvoie `'termine' | 'encours' | 'afaire'`, priorité terminé > en cours > à faire. « En cours » repose sur `UserProgress.startedCourseIds`, distinct de `completedCourseIds`.

**Déclencheur « En cours »** : l'action `markCourseStarted(courseId)` (additive, idempotente comme `markCardSeen`) est appelée par `CourseDetailScreen` dès que l'utilisateur avance à la 2ᵉ leçon d'un cours (`goNextLesson`, transition d'index 0→1), ou immédiatement s'il valide l'unique leçon d'un cours à une seule leçon. Elle n'est jamais déclenchée par le simple affichage de la 1ʳᵉ leçon. `startedCourseIds` a été ajouté au store en version de persistance 3 (backfill `[]` pour les blobs `localStorage` antérieurs, même schéma de migration douce que `quizResults`/`daily`).

`CategoryScreen` orchestre : en-tête (niveau/XP/progression de la matière), onglets de filtre (Tout/À faire/En cours/Terminé, état local) et liste de `CourseCard` filtrée via `getCourseStatus`. `CourseCard` reste un composant de présentation : elle reçoit `isStarted` en plus de `isCompleted` pour afficher un badge « En cours » optionnel.

## « À la une » par leçon, rotation inter-matières (Phase 6)

La carte « À la une » de la Biblio (`BiblioScreen`, route `/biblio`) ne met plus en avant un cours figé, mais **une leçon à la fois**, résolue depuis `UserProgress.featuredLessonKey` (clé `courseId:lessonId`). Toute la logique de sélection est pure et vit dans `src/lib/featured.ts` :

- `lessonKey(courseId, lessonId)` / `getLessonRef(key, allCourses)` : construction et résolution de la clé (`lessonId` n'est pas unique globalement, d'où la composition avec `courseId`).
- `pickNextFeaturedLesson({ completedLessonIds, previousCategoryId, allCourses, allCategories })` : matières candidates = catégories ayant encore ≥ 1 leçon hors de `completedLessonIds` ; tirage aléatoire (`Math.random`) parmi celles différentes de `previousCategoryId` (repli sur `previousCategoryId` si c'est la seule restante, `null` si tout est lu) ; dans la matière choisie, renvoie la clé de la première leçon non lue en parcourant `COURSES` puis `lessons` dans l'ordre du catalogue.

**Store** : l'action `completeLesson(courseId, lessonId)` est idempotente (même schéma que `completeCourse` avec `completedCourseIds`) — elle ajoute la clé à `completedLessonIds`, crédite `XP_PER_LESSON` (`src/lib/gamification.ts`), marque le cours « commencé » (réutilise la logique de `markCourseStarted`), et **seulement si la leçon complétée est la vedette courante** (`key === featuredLessonKey`), recalcule celle-ci via `pickNextFeaturedLesson` en excluant la matière qu'on vient de quitter. `ensureFeaturedLesson()` (appelée au montage de la Biblio, même pattern que `checkDailyReset` au montage du Home) répare `featuredLessonKey` s'il est `null`, périmé (leçon déjà lue) ou irrésolvable.

**Synchronisation avec la vue cours** : `CourseDetailScreen` appelle aussi `completeLesson` à chaque transition de leçon (`goNextLesson`, y compris sur la dernière leçon avant le quiz). Comme l'action est idempotente et que `completedLessonIds` est un seul état partagé, une leçon lue dans la vue cours n'est plus jamais proposée à la une, et inversement — sans double comptage d'XP.

**Persistance** : `completedLessonIds` et `featuredLessonKey` ont été ajoutés en version de persistance **4** (migration douce, backfill `[]` / `null`).

`BiblioScreen` orchestre (résolution de la clé vedette, appel des actions) ; le rendu de la carte est un composant local `FeaturedLessonCard` (repli/dépliage du contenu de la leçon), keyé par `featuredLessonKey` pour repartir replié à chaque nouvelle vedette sans `useEffect` dédié.

## Séquence de fin de cours (Phase 7)

`CourseDetailScreen` (route `/cours/:courseId`) ne se termine plus sur un unique écran de résultat de quiz : après les leçons, une **séquence de fin de cours** enchaîne plusieurs écrans, pilotée par une machine à états locale (`Phase = "lessons" | "learningDone" | "quiz" | "collection" | "streak"`) :

```
lessons → learningDone → (quiz, optionnel) → collection (si le cours appartient à un Parcours) → streak → navigate("/")
```

- **`lessons → learningDone`** : `goNextLesson` appelle `finishLearning()` sur la dernière leçon au lieu d'enchaîner vers un quiz obligatoire. `finishLearning()` centralise tout le crédit en une fois — `completeLesson` (dernière leçon), `completeCourse` (XP, idempotent), `addMastery` (seulement si le cours n'était pas déjà terminé) et `updateStreak` — donc **le cours est considéré terminé dès la fin des leçons**, avant même le quiz.
- **`learningDone`** : le quiz devient un bonus optionnel (« Mini Quiz »). Le bouton ✗ saute directement à la suite (`advanceOutro()`), sans perdre le crédit déjà accordé.
- **`quiz → outro`** : si l'utilisateur fait le Mini Quiz, `handleQuizFinish` ne fait plus qu'un `recordQuizResult` (historique du Profil) puis appelle `advanceOutro()` — il ne crédite plus l'XP/la maîtrise, déjà attribués par `finishLearning()`.
- **`advanceOutro()`** : cherche un `Parcours` contenant le cours (`PARCOURS.find(p => p.courseIds.includes(course.id))`) ; s'il en trouve un, passe par l'écran « Collection avancée ! » (`collection`), sinon saute directement à « Jour de suite » (`streak`).

Trois nouveaux composants présentationnels dans `src/components/features/` habillent la séquence : `LearningDoneCard` (résumé du cours + progression de matière via `getSubjectProgress`, calculée après `completeCourse` donc à jour du niveau qu'on vient d'atteindre), `CollectionProgressCard` (nombre de cours terminés du parcours + pastilles cochées via `progress.completedCourseIds`), `StreakCelebration` (streak courant + rangée hebdomadaire). Cette dernière réutilise `WeekDayRow` (`src/components/features/WeekDayRow.tsx`), extrait de `StreakTracker` pour ne pas dupliquer le rendu des pastilles L-M-M-J-V-S-D.

Aucun champ n'a été ajouté à `UserProgress` et la version de persistance du store n'a pas bougé : toute la séquence ne consomme que de l'état déjà existant, plus de l'état d'UI éphémère (`phase`, `lessonIndex`, `rankAtStart`) local à `CourseDetailScreen`.

## Choix techniques et pourquoi

- **Tailwind CSS v4 (configuration CSS-first)** : les tokens du design system (couleurs, polices, ombres, rayon de coin) sont déclarés dans un unique bloc `@theme` (`src/styles/index.css`), ce qui génère automatiquement les utilitaires Tailwind correspondants (`bg-histoire`, `shadow-card`, `font-heading`…) sans fichier `tailwind.config.js` séparé — c'est la méthode recommandée par Tailwind v4, plus simple à maintenir qu'un fichier JS de config pour ce périmètre.
- **Zustand + `persist`** plutôt que Redux ou Context : l'application n'a qu'un seul état global (la progression utilisateur), Zustand permet de l'exposer sans provider ni boilerplate, et le middleware `persist` gère la sérialisation `localStorage` automatiquement.
- **Alias `@/`** pointant vers `src/` (configuré à la fois dans `vite.config.ts` et `tsconfig.app.json`) pour des imports lisibles indépendants de la profondeur des dossiers.
- **`react-router-dom`** : les 4 onglets sont des routes (`/`, `/biblio`, `/collections`, `/profil`), plus une 5ᵉ route `/cours/:courseId` pour le détail d'un cours (leçons paginées + quiz), ajoutée sans changer la structure de layout — `AppShell` reste le point d'entrée unique.
- **`src/lib/subjectStyles.ts`** : lookup partagé `SubjectColor → classe Tailwind` (dégradé de bannière, couleur pastel pleine), utilisé par les cartes swipe, les cartes de cours, `Tag` et l'écran de détail de cours, pour éviter de dupliquer ces mappings.
- **Pas de back-end** : tout le contenu est statique et versionné avec le code ; seule la progression utilisateur est en `localStorage`. Ce choix simplifie radicalement le déploiement pour cette phase (site statique) et pourra évoluer si un compte utilisateur / une synchronisation multi-appareil est ajoutée plus tard.

## Prochaines étapes (hors périmètre de cette phase)

Voir [CLAUDE.md](../CLAUDE.md) pour la feuille de route détaillée : contenu éditorial complet, système de quiz interactif, animations de swipe avancées, authentification, etc.
