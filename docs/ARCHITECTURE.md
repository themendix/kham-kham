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
- `UserProgress` : le seul état mutable et persisté — XP, niveau, rang, streak, cartes vues/favorites, cours terminés, parcours terminés (`completedParcoursIds`), maîtrise par catégorie, historique des tentatives de quiz (`quizResults`, 10 plus récentes), activité du jour (`daily`), dernier cours ouvert (`lastCourseId`), total cumulé de cartes apprises (`totalCardsLearned`), cours commencés (`startedCourseIds`), leçons lues (`completedLessonIds`, clés `courseId:lessonId`) et leçon actuellement mise en avant en Biblio (`featuredLessonKey`).

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

## Séquence de fin de cours (Phase 7, puis refonte)

`CourseDetailScreen` (route `/cours/:courseId`) enchaîne, après les leçons, un **segment de
célébration** (1 à 3 écrans plein écran, sans `Card` englobante) suivi d'une **queue**
conditionnelle (quiz optionnel puis streak) :

```
lessons → [done] → (levelUp, si le niveau de matière vient de monter)
                 → (collection, si le cours appartient à un Parcours)
                 → (quiz → quizResult, si l'utilisateur choisit de le faire)
                 → (streak, si la série a réellement progressé aujourd'hui)
                 → navigate("/")
```

Le **segment de célébration** est entièrement déterminé dès la fin des leçons (`finishLearning()`,
via la fonction pure `buildCelebrationSegment({ leveledUp, hasParcours })`,
`src/lib/outroSequence.ts`) : toujours `"done"`, puis `"levelUp"` et/ou `"collection"` selon le
cours. Le **dernier écran de ce segment porte toujours un carrefour de décision** — `Passer au
quiz →` (bouton principal) et `Retour à l'accueil` (bouton secondaire) — qui résout la **queue**
au clic, via la fonction pure `resolveOutroTail({ takeQuiz, streakAdvanced })` : `[]`,
`["streak"]`, `["quiz","quizResult"]` ou `["quiz","quizResult","streak"]`. Une queue vide
navigue directement vers `/` — c'est le seul chemin de sortie sans écran de clôture. Ces deux
fonctions et leurs types (`CelebrationScreen`, `OutroScreen`) sont testés indépendamment
(`src/lib/outroSequence.test.ts`) sur les 4 combinaisons de chaque fonction plus le cas révision.

`CourseDetailScreen` pilote l'ensemble avec un seul état `Stage = "lessons" | OutroScreen` (donc
directement `"done" | "levelUp" | "collection" | "quiz" | "quizResult" | "streak"`, sans état
intermédiaire « célébration » à part), plus `celebrationIndex`/`tailScreens`/`tailIndex` pour
savoir où on en est dans le segment puis la queue. `streakAdvanced` (capturé dans
`finishLearning()`, **avant** l'appel à `updateStreak()`, en comparant
`progress.streak.lastActiveDate` à `toISODate(new Date())`) conditionne à la fois l'écran streak
et le libellé du bouton principal de l'écran de résultat du quiz (`Continuer →` s'il suit,
`Retour à l'accueil` sinon). `↻ Refaire le quiz` (toujours présent sur l'écran de résultat)
incrémente un compteur `quizAttempt` utilisé comme `key` de `QuizPlayer` pour le remonter à zéro,
sans retoucher `tailScreens`. Chaque changement de `stage` déclenche un `window.scrollTo({top:0})`
: sans ça, le scroll résiduel d'une leçon longue masquait le bouton « Retour », censé rester
visible pendant toute la séquence.

L'XP et le crédit du cours restent attribués dans `finishLearning()` (avant même le premier
écran), inchangé depuis la Phase 7 initiale : `completeLesson`, `completeCourse`, `updateStreak`.
Ce qui a changé, c'est le déclencheur de l'écran « Niveau supérieur ! » : il porte spécifiquement
sur le **niveau de matière** (`getSubjectProgress(...).level`, avant/après crédit du cours), pas
sur le rang/niveau global (`rankedUp`/`levelUp`), qui restent affichés en pastilles sur l'écran 1
uniquement — sans quoi un cours chanceux pourrait enchaîner plusieurs écrans de félicitations
redondants. Cas révision (cours déjà terminé, refait) : aucun gain d'XP donc `leveledUp` et
`hasParcours` sont forcés à `false` dans `finishLearning()`, ramenant le segment à un seul écran
(`["done"]`) qui porte directement le carrefour.

**Composants** (`src/components/features/`), tous purement présentationnels (aucun accès au
store, props uniquement) :
- `OutroLayout` — mise en page commune à tous les écrans de la séquence (visuel/texte centrés,
  espace généreux au-dessus, pied de page à boutons pleine largeur type `Button size="lg"`,
  `sticky bottom-20` sur mobile pour rester au-dessus de la `BottomNav` fixe, `md:static` sur
  desktop où il n'y a pas de nav fixe en bas). Ne connaît ni l'ordre des écrans ni leurs
  conditions d'affichage : reçoit `children` (visuel + texte, chaque écran choisit son propre
  ordre interne) et les props des deux boutons.
- `LearningDoneCard` (écran « done », toujours affiché) — vignette carrée ~180px de
  l'illustration du cours (`getCourseImage`/`getCourseImagePosition`/`OBJECT_POSITION`, ces trois
  exports vivant dans `src/lib/courseImages.ts` — `OBJECT_POSITION` y a été déplacé depuis
  `CourseCard.tsx` pour être partagé), repli emoji sinon ; barre de progression de matière
  animée de `subjectBefore.progressPct` vers sa valeur d'arrivée (100 % si le niveau de matière
  vient de monter, auquel cas le badge `NIV.` affiché reste volontairement celui d'avant crédit
  — c'est l'écran « levelUp » qui célèbre seul le passage au niveau suivant, pour ne pas dupliquer
  l'effet). Machine à états `LevelUpStage` (fillingToFull/atFull/reset/fillingRemainder, ~60
  lignes) de l'ancienne version **supprimée** : elle simulait la montée de niveau à l'intérieur de
  cet écran, rôle repris par l'écran dédié.
- `LevelUpCard` (écran « levelUp », conditionnel — nouveau) — carré pastel de la matière, « NIV.
  {avant} → **NIV. {après}** » en contraste d'échelle typographique (le ressort visuel de l'écran).
- `CollectionProgressCard` (écran « collection », conditionnel) — titre au-dessus d'un bandeau
  16:9 (au lieu de la bannière emoji en tête utilisée auparavant), pastilles de cours du parcours
  reliées par un chemin (trait plein entre deux pastilles terminées, effacé sinon) plutôt qu'une
  rangée simplement espacée. Logique de comptage/`justCompleted` inchangée.
- `QuizOutcomeCard` (écran « quizResult », conditionnel — nouveau) — n'existait pas avant cette
  refonte : `QuizPlayer` (inchangé) continue d'appeler `onFinish(score, total)` immédiatement
  après la dernière question, sans afficher lui-même de résultat ; c'est `CourseDetailScreen` qui
  stocke `{ score, total }` et affiche cet écran, sur le modèle du résultat déjà inline de
  `DailyChallengeScreen` (qui reste un écran séparé, non factorisé, car il accorde un bonus XP
  que le quiz de cours n'accorde pas).
- `StreakCelebration` (écran « streak », conditionnel) — contenu inchangé (flamme, compteur,
  `WeekDayRow`), affiché seulement si la série a progressé, plus un seul bouton toujours terminal.

`Button` (`src/components/ui/Button.tsx`) gagne une prop `size?: "md" | "lg"` (défaut `"md"`,
rendu par défaut strictement inchangé) : `"lg"` produit la pilule pleine largeur du pied de page
de `OutroLayout`, motif qui n'existait pas ailleurs dans l'app.

Aucun champ n'a été ajouté à `UserProgress` et la version de persistance du store n'a pas bougé
(toujours **7**) : toute la séquence ne consomme que de l'état déjà existant, plus de l'état
d'UI éphémère local à `CourseDetailScreen`.

## Consolidation du contenu (Phase 7, lot 2)

L'enrichissement du catalogue (6 → 94 cours) a introduit des incohérences qu'aucun mécanisme ne détectait (référence de parcours orpheline, notamment). Ce lot installe un garde-fou et corrige quatre anomalies fonctionnelles.

**Validateur de contenu** (`scripts/validate-content.ts`, `npm run validate`) : script Node exécuté via `tsx --tsconfig tsconfig.app.json` (nécessaire pour résoudre l'alias `@/` utilisé par les fichiers de `src/data/*`, que `node`/`tsc` seuls ne savent pas résoudre à l'exécution). Contrôle neuf règles sur `COURSES`, `PARCOURS`, `CATEGORIES`, `CARDS` et `src/assets/cours/` : unicité des id (cours, leçons par cours, questions par quiz), résolution des références (`parcours.courseIds` → `COURSES`, `categoryId` → `CATEGORIES`), validité des questions de quiz (bornes, textes non vides), leçons non vides, et présence/orphelinat des illustrations (ces deux dernières règles sont des avertissements non bloquants, les 4 cours hérités n'ayant pas d'illustration). Sortie groupée par règle, code de sortie ≠ 0 si une règle bloquante échoue. Intégré au script `build` (avant `tsc -b`) et à la CI (avant `typecheck`) : un contenu invalide bloque le build.

**`getCourseOrWarn`** (`src/data/courses.ts`) remplace le filtrage silencieux des références de cours introuvables (c'est ce silence qui avait laissé passer la référence orpheline). Deux modes : `strict: true` pour les données éditoriales statiques (`CollectionsScreen` résolvant `parcours.courseIds`) — fait échouer bruyamment le rendu en développement, puisqu'une référence cassée dans `src/data/` ne devrait jamais exister ; par défaut (`strict: false`) pour les références issues de `UserProgress` (`favoriteCourseIds`, `lastCourseId`, `quizResults.courseId`, `courseId` de route) — ces id peuvent légitimement devenir obsolètes si le catalogue rétrécit après coup, donc simple `console.error` en développement et dégradation silencieuse (déjà présente) en production.

**Complétion de parcours** : `UserProgress.completedParcoursIds` et la fonction pure `getNewlyCompletedParcours` (`src/lib/parcoursProgress.ts`) déterminent, parmi les parcours pas encore marqués complets, ceux dont tous les `courseIds` sont désormais dans `completedCourseIds`. Cette fonction est appelée à deux endroits :
- dans l'action `completeCourse` du store, juste après l'ajout du cours à `completedCourseIds` — donc au moment exact de la complétion, jamais au montage d'un écran — pour créditer `xpReward` (une seule fois, `completedParcoursIds` empêchant tout doublon) et recalculer niveau/rang ;
- dans la migration v6 (rattrapage rétroactif) : un utilisateur ayant déjà terminé les deux cours d'un parcours **avant** l'existence de ce champ ne redéclenchera jamais `completeCourse` sur ces cours (action idempotente), donc sans ce rattrapage il ne serait jamais crédité.

Retour visuel : `ParcoursCard` (Collections) affiche un badge « ✓ Parcours terminé » et une coche à la place du pourcentage quand `completedParcoursIds` contient le parcours ; `CollectionProgressCard` (séquence de fin de cours) affiche « Parcours terminé ! 🎉 » + le badge XP gagné quand le cours qu'on vient de terminer complète le parcours à l'instant (détecté dans `CourseDetailScreen.finishLearning()` en comparant `completedParcoursIds` avant/après l'appel synchrone à `completeCourse`, via `useAppStore.getState()`).

**Reprise de lecture** : `CourseDetailScreen` initialise `lessonIndex` paresseusement (`useState(() => …)`) sur la première leçon dont la clé (`lessonKey(course.id, lesson.id)`, `src/lib/featured.ts`) n'est pas dans `completedLessonIds` ; repli sur `0` si le cours est déjà entièrement terminé (`completedCourseIds`, cohérent avec le mode révision `isRevision`) ou si aucune leçon non lue n'est trouvée.

**Chaîne de migrations du store** (`src/store/useAppStore.ts`) : v1 (état initial) → v3 (`startedCourseIds`) → v4 (`completedLessonIds`, `featuredLessonKey`) → v5 (scission `favoriteIds` en `favoriteCardIds`/`favoriteCourseIds`) → **v6** (`completedParcoursIds`, avec rattrapage rétroactif des parcours déjà complets). Chaque version ne fait qu'ajouter des champs backfillés par défaut ; aucune migration ne retire ni ne retraite les champs des versions précédentes.

## Recalibrage de la gamification (Phase 7, lot 3)

L'enrichissement du catalogue (6 → 98 cours : 40 Histoire, 54 Géographie, 4 hérités
Personnalités/Arts/Traditions/Actu) a rendu obsolètes toutes les constantes de progression
calibrées en Phase 1. XP total réellement disponible dans le catalogue actuel : **7100 XP**
(4440 XP de complétion de cours + 2660 XP de leçons, 266 leçons au total). Ce lot réaligne le
barème sur ces chiffres, dérive la maîtrise du réel plutôt que de l'accumuler, et fait du fil
Home une vue sur le catalogue plutôt qu'une liste parallèle figée à 18 cartes.

**Barème XP et rangs (E1, `src/lib/gamification.ts`)** — `LEVEL_TIERS` reste la table des 5
rangs nommés (Curieux, Éveillé, Initié, Sage, Gardien du savoir), mais ses seuils sont
recalibrés sur les 7100 XP du catalogue actuel (0 / 700 / 2100 / 4250 / 7100), de sorte que
« Gardien du savoir » ne s'atteint qu'en terminant 100 % du contenu, jamais avant. Au-delà,
`getLevelInfo` bascule sur un second régime : des **niveaux numérotés sans plafond**, par une
formule de seuil croissant (`OPEN_LEVEL_STEP × (n-5) × (n-4) / 2`, un nombre triangulaire),
indépendante de la taille du catalogue — un enrichissement futur du contenu (Phase 8) se
traduit directement en niveaux supplémentaires, sans recalibrage. `rank` reste figé sur
« Gardien du savoir » une fois ce régime atteint ; `level` (entier non borné) devient alors le
seul indicateur de progression. Les écrans affichent désormais **niveau + rang** ensemble.
`CourseDetailScreen` détecte la montée de niveau via `levelAtStart` (nombre) en complément de
`rankAtStart` (texte) : une célébration « ⭐ Niveau N » (`LearningDoneCard`) prend le relais de
« 🏅 Nouveau rang » une fois le dernier rang nommé dépassé, où ce dernier ne se déclenche plus
jamais.

**Maîtrise dérivée (E2)** — l'accumulation manuelle `masteryByCategory` (et les constantes
`addMastery`/`MASTERY_PER_CARD`/`MASTERY_PER_COURSE`) disparaît entièrement : la maîtrise
n'est plus jamais écrite, seulement calculée à la lecture. `getMasteryByCategory(progress,
allCourses, allCategories)` (`src/lib/subjectProgress.ts`) applique le même principe que
`getSubjectProgress` — `cours terminés / cours de la matière × 100` — à chaque catégorie.
Utilisée par `MasteryRadar` (Profil) et par `recommendCourses`. Le stat « Cartes → » du Profil
devient « Leçons → » : `completedLessonIds.length` sur le total de leçons disponibles
(18 cartes éditoriales + toutes les leçons du catalogue), cohérent avec la convergence
décrite ci-dessous.

**Matières émergentes (E4)** — `isSubjectEmerging(categoryId, allCourses)` (seuil : moins de
`COURSES_PER_LEVEL` = 3 cours) signale honnêtement, via un badge « 🚧 En construction »
(Biblio, écran de matière), les matières encore réduites à un seul cours plutôt que de les
traiter à égalité avec Histoire/Géographie. `recommendCourses` neutralise le bonus découverte
(`DISCOVERY_BONUS`) pour ces matières : avec une maîtrise dérivée, un cours jamais touché d'une
matière à 1 cours saute instantanément à 0 % de maîtrise, ce qui le maintiendrait en tête de
toute recommandation indéfiniment tant qu'il n'est pas terminé — faisant remonter en boucle les
mêmes 4 petits cours devant le reste du catalogue. `pickNextFeaturedLesson` n'a pas eu besoin
d'être modifié : une matière épuisée (plus de leçon non lue) est déjà exclue proprement des
candidats ; le repli mécanique de la rotation sur Histoire/Géographie une fois les petites
matières lues est le comportement correct, pas un bug, dès lors qu'il ne reste plus de contenu
ailleurs.

**Format des cours, XP pondérée (E5)** — arbitrage tranché : XP de complétion de cours
pondérée par le nombre de leçons plutôt que des valeurs incohérentes par cours. Nouvelle
règle, appliquée dans les données (`src/data/courses.ts`, `courses/histoire.ts`,
`courses/geographie.ts`) : `course.xp = 20 (bonus quiz fixe) + 10 × nombre de leçons`. Une
fiche Géographie (1 leçon) rapporte donc 30 XP de complétion (+10 XP de leçon = 40 XP total),
un cours Histoire (5 leçons) 70 XP (+50 XP de leçons = 120 XP total), un cours hérité
(3 leçons) 50 XP (+30 XP de leçons = 80 XP total) — une récompense proportionnelle au contenu
réel plutôt que des valeurs disparates sans règle écrite.

**Fil Home généré depuis le catalogue (A2, `src/lib/homeFeed.ts`)** — le fil Home n'est plus
la liste statique et finie de `CARDS` (18 cartes) : `buildHomeFeed` construit, au montage du
Home, une file figée pour la session (comme l'ancien `index` sur `CARDS`, mais sur un contenu
bien plus large) — d'abord les 18 cartes éditoriales de `CARDS` non lues (sélection
prioritaire, contenu conservé), puis les leçons du catalogue non lues, en rotation de matière.
La sélection catalogue **mutualise** `pickNextFeaturedLesson` (`src/lib/featured.ts`, étendu
d'un paramètre `excludeKeys`) plutôt que de dupliquer sa logique de rotation, et exclut la
vedette Biblio courante (`featuredLessonKey`) pour que le fil Home et « À la une » ne
proposent jamais la même leçon en même temps.

**Convergence cartes/leçons** — `seenCardIds` (jamais lu par l'application, un champ mort) est
supprimé : apprendre une carte éditoriale du fil Home appelle désormais `completeLesson`
exactement comme une leçon de cours, sous un pseudo-cours réservé
(`EDITORIAL_COURSE_ID = "editorial"`, `src/lib/homeFeed.ts`) — même tableau
`completedLessonIds`, même XP, même idempotence, qu'il s'agisse d'une carte du fil, de la
vedette Biblio ou d'une leçon lue dans un cours. `XP_PER_CARD` disparaît ; `XP_PER_LESSON = 10`
devient l'unique constante pour ce geste. `completeLesson` ignore explicitement
`EDITORIAL_COURSE_ID` dans sa mise à jour de `startedCourseIds`, ce pseudo-cours ne
correspondant à aucun `Course` réel.

**Migration du store (v6 → v7)** : `masteryByCategory` et `seenCardIds` sont retirés du blob
migré (explicitement supprimés, pas seulement ignorés). L'`xp` déjà accumulé par un
utilisateur existant **n'est jamais recalculé** — seule son interprétation change : `level` et
`rank` sont recalculés une fois, à la migration, via `getLevelInfo(xp)` avec les nouveaux
seuils. Effet possible et assumé : un utilisateur peut voir son niveau **redescendre**
visiblement (ex. un utilisateur à 900 XP était "Niveau 5 / Gardien du savoir" sous l'ancien
seuil à 1000 XP ; sous le barème recalibré sur 7100 XP, 900 XP correspond à "Niveau 3 /
Initié"). Testé manuellement contre un blob v6 synthétique (12 cours terminés dont un parcours
entier, favoris, historique de quiz, streak) : XP préservé, niveau/rang recalculés, rattrapage
rétroactif de parcours toujours actif, aucune perte de données ; rejeu du blob déjà migré
vérifié idempotent (pas de second crédit).

### Second recalibrage — Géographie passée à 3 leçons

Chaque cours de Géographie est passé d'une fiche monobloc à **3 leçons** (territoire /
population et société / économie-politique-repères), pour la faire correspondre au format de
l'Histoire (jusque-là seule matière multi-leçons) et permettre l'état « En cours » sur ces
cours. `course.xp = 20 + 10 × nombre de leçons` s'applique mécaniquement : un cours de
Géographie passe de 30 à **50 XP**. Aucun changement de schéma de `UserProgress` : version de
persistance toujours à **7**, aucune migration ajoutée — seuls les fichiers de contenu et les
constantes de `gamification.ts` changent.

Impact chiffré sur le catalogue :

| | Avant (Phase 7.3) | Après (Géographie 3 leçons) |
|---|---|---|
| Leçons Géographie | 54 | **162** |
| Leçons du catalogue | 266 | **374** |
| XP de complétion (tous cours) | 4 440 | **5 520** |
| XP de leçons | 2 660 | **3 740** |
| **XP total du catalogue** | **7 100** | **9 260** |

`LEVEL_TIERS` recalé en conservant les proportions du barème précédent (9,9 % / 29,6 % / 59,9 %
/ 100 % du total) :

```
{ minXp:    0, level: 1, rank: "Curieux" }
{ minXp:  900, level: 2, rank: "Éveillé" }
{ minXp: 2750, level: 3, rank: "Initié" }
{ minXp: 5550, level: 4, rank: "Sage" }
{ minXp: 9260, level: 5, rank: "Gardien du savoir" }
```

`OPEN_LEVEL_STEP` passe de 700 à **900** XP, pour conserver le même rythme de progression au-delà
du dernier rang nommé (700/7100 ≈ 900/9260). La formule des niveaux ouverts elle-même est
inchangée.

Conséquences assumées, non rattrapées rétroactivement (le store ne recalcule jamais l'XP déjà
acquise, cf. § ci-dessus) :

1. Un utilisateur existant voit son **niveau affiché redescendre** une deuxième fois, les seuils
   ayant à nouveau monté (même mécanisme que le recalibrage précédent).
2. Un cours de Géographie déjà terminé avant ce chantier a crédité 30 XP dans `UserProgress`,
   mais l'écran de matière affiche désormais 50 XP — cette valeur est **dérivée** de `course.xp`
   à la lecture, jamais stockée. Divergence bénigne entre l'XP par matière (dérivée, à jour) et
   l'XP totale du Profil (stockée, figée au moment du geste), déjà inhérente au design du
   chantier 7.3.
3. Le « % de leçons lues » du Profil chute mécaniquement (dénominateur 284 → 392, en comptant
   les 18 cartes éditoriales) pour un utilisateur qui n'a rien perdu en absolu.

`getMasteryByCategory`, `getSubjectProgress` et le niveau de matière (toujours `COURSES_PER_LEVEL
= 3`, donc 54 / 3 = 18 niveaux de matière pour la Géographie) sont **inchangés** : ces calculs
reposent sur les cours terminés (`completedCourseIds`), jamais sur le nombre de leçons.

Impact bundle : le chunk `geographie` (chargé à la demande par matière, cf. § *Découpage du
bundle*) passe d'un chunk buildé mesuré à 198 Ko sur le seul lot pilote (3 pays) à **283,8 Ko**
(gzip 73,9 Ko) une fois les 54 pays traités. Le chunk d'entrée `index` n'est quasiment pas
affecté (262,1 Ko contre 257,4 Ko) : `coursesIndex.generated.ts`, seul élément du chunk d'entrée
à dépendre du catalogue, ne porte que des identifiants de leçon (162 contre 54), pas leur
contenu.

## Filet de test (Phase 7, lot 4)

Le risque principal du projet n'est pas un bug d'affichage : c'est la **chaîne de migration du
store**. `UserProgress` ne vit que dans `localStorage`, sans back-end ni sauvegarde — une
migration défaillante détruit la progression d'un utilisateur sans recours. Ce lot installe
Vitest et couvre en priorité cette zone, puis les fonctions pures de `src/lib/` et l'idempotence
des actions du store.

**Vitest** (`vite.config.ts`, bloc `test: { environment: "jsdom" }`) — seule option ajoutée au
défaut, nécessaire parce que le store utilise `localStorage` via le middleware `persist`, absent
en environnement `node`. Aucune bibliothèque de rendu (`@testing-library`) : ce lot ne teste
aucun rendu de composant, volontairement.

**`migrate` exporté** (`src/store/useAppStore.ts`) — auparavant défini inline dans l'objet passé
à `persist({...})`, donc inaccessible aux tests sans passer par la réhydratation Zustand complète.
Extrait en fonction nommée exportée, comportement strictement inchangé : c'est le seul refactor
de code applicatif de ce lot. Elle ignore volontairement son paramètre `version` — chaque version
historique (v1→v6) n'ayant fait qu'ajouter des champs à défaut sûr (sauf le renommage `favoriteIds`
en v5 et les suppressions en v7), une seule fonction, indifférente à la version d'origine du blob,
suffit à ramener n'importe quel blob passé à la forme actuelle.

**Tests de migration** (`src/store/useAppStore.migration.test.ts`) — un blob figé par version
historique (v1→v6), représentatif d'un utilisateur ayant réellement progressé, vérifie : aucune
perte de champ, backfill correct des champs ajoutés depuis, transformations historiques
(`favoriteIds` → `favoriteCardIds`/`favoriteCourseIds`, rattrapage rétroactif de parcours),
cohérence du niveau/rang recalculé. Cas dégradés : blob absent, `null`, sans clé `progress`,
`progress` vide ou partiel, blob de version future avec champs non reconnus — aucun ne lève
d'exception. Ces tests utilisent le catalogue **réel** (`PARCOURS`, `COURSES`) puisque `migrate`
en dépend directement (rattrapage rétroactif de parcours).

**Tests des fonctions pures de `src/lib/`** — `gamification.test.ts`, `daily.test.ts`,
`featured.test.ts`, `subjectProgress.test.ts`, `recommendations.test.ts`, `homeFeed.test.ts`,
`parcoursProgress.test.ts`. Toutes les dates sont injectées (paramètre `now`) plutôt que de
dépendre de l'horloge réelle. Ces tests utilisent des catalogues de cours/catégories
**synthétiques**, pas le catalogue réel, pour rester découplés du contenu éditorial — seuls les
tests de migration et d'idempotence du store, qui dépendent réellement de `PARCOURS`/`COURSES`
dans le code testé, utilisent les données réelles.

**Tests d'idempotence du store** (`src/store/useAppStore.idempotence.test.ts`) — `completeLesson`,
`completeCourse` (y compris le crédit XP de parcours), `markCourseStarted` appelés deux fois ne
créditent/n'ajoutent qu'une fois ; `toggleFavoriteCard`/`toggleFavoriteCourse` reviennent à l'état
initial sur un double appel ; `recordQuizResult` plafonne à 10 tentatives. Le store étant un
singleton Zustand, chaque test réinitialise `progress` via `useAppStore.setState({ progress: ... })`
(fusion partielle, pas un remplacement complet de l'état, pour ne pas effacer les actions).

**ESLint** (`eslint.config.js`, config plate) — `typescript-eslint` recommandé,
`eslint-plugin-react-refresh` (préréglage `vite`), et seulement `react-hooks/rules-of-hooks` +
`react-hooks/exhaustive-deps` de `eslint-plugin-react-hooks` : le préréglage `recommended` de la
v7 de ce plugin embarque les règles orientées React Compiler (`set-state-in-effect`, `purity`…),
hors sujet pour ce projet (React 18, pas de Compiler), et qui signalait à tort des animations
pilotées par `useEffect` intentionnelles (`LearningDoneCard`, `ProgressBar`) comme des erreurs.
`eslint-config-prettier` désactive les règles de style en conflit avec Prettier. **Prettier**
configuré (`.prettierrc.json`) mais **aucun reformatage global n'a été appliqué** : le dépôt
préexistant ne respecte pas le style par défaut sur la majorité des fichiers ; `npm run format`
reste disponible pour un reformatage volontaire, dans un commit dédié séparé.

**CI** (`.github/workflows/ci.yml`) — `npm ci` → `npm run validate` → `npm test` →
`npm run typecheck` → `npm run build`, bloquante en cas d'échec de l'une des quatre étapes.

## Passage à l'échelle et performance (Phase 7, lot 5)

L'enrichissement du catalogue (94 cours) avait rendu la Biblio et l'écran de matière difficiles
à naviguer, et le bundle JavaScript unique (641 Ko, tout le catalogue importé statiquement)
incompatible avec la cible déclarée (mobile, réseau contraint). Ce lot ne touche ni au contenu,
ni à la gamification, ni au design system — il rend l'existant navigable et rapide.

### Navigation à l'échelle (5a)

- **Recherche** (`src/lib/search.ts`, `searchCourses`) : normalisation Unicode (`NFD` + suppression
  des diacritiques, `normalizeSearchText`) des deux côtés de la comparaison — insensible aux
  accents et à la casse. Cherche dans le titre, puis la description, puis le contenu des leçons
  (dans cet ordre de priorité ; les résultats sont triés en conséquence, sinon une correspondance
  perdue dans une leçon passerait devant le cours dont c'est le titre). Générique sur un type
  minimal (`SearchableCourse`) : fonctionne aussi bien sur l'index léger de métadonnées que sur le
  contenu complet une fois chargé (voir § Découpage du bundle ci-dessous).
- **Écran de matière** (`CategoryScreen`) : tri alphabétique par défaut (`localeCompare` FR).
  Pour la Géographie, sous-groupement par région (Nord/Ouest/Centrale/Est/Australe,
  `src/lib/geographieRegions.ts`) dérivé du numéro d'ordre déjà présent dans l'id du cours
  (`course-geographie-07-tunisie` → 7 → Afrique du Nord), sans dupliquer une table de 54 entrées.
  Affichage progressif (« Voir plus », `ProgressiveCourseGrid`) : chaque région (ou la liste
  plate pour les autres matières) ne monte qu'un nombre borné de cartes à la fois.
- **Index Géographie** (M3) : bascule « Par région » / « Index A-Z » dans `CategoryScreen` — la
  vue index regroupe les 54 fiches par lettre initiale (désaccentuée, `indexLetter`) avec une
  rangée de raccourcis de saut (`<a href="#geo-letter-X">`).

### Découpage du bundle (5b, P1)

**Constat de départ** : `src/store/useAppStore.ts` importait `COURSES` (catalogue complet,
leçons + quiz) au niveau module — et le store étant utilisé par tous les écrans, cela suffisait
à faire entrer tout le contenu (histoire.ts + geographie.ts, ~430 Ko de texte) dans le chunk
d'entrée, quel que soit le découpage par route.

**Stratégie retenue** : un index léger de métadonnées, statique et toujours chargé, plus le
contenu complet chargé à la demande par matière.

- `src/types/index.ts` — `CourseMeta` : sous-ensemble de `Course` sans le texte des leçons ni les
  questions de quiz (`lessons: { id: string }[]`, `quizCount: number` à la place de `quiz`).
- `scripts/generate-course-index.ts` (`npm run gen:index`, intégré à `npm run build` avant
  `validate`) : lit le catalogue complet (`src/data/courses.ts`, exécuté sous `tsx`, jamais
  bundlé) et génère `src/data/coursesIndex.generated.ts` (`COURSE_INDEX: CourseMeta[]`, fichier
  commité, ~57 Ko — à régénérer après toute modification du catalogue).
- `src/data/courses/misc.ts` : les 4 cours des matières émergentes (perso/arts/trad/actu),
  extraits de `courses.ts` — assez légers pour rester bundlés avec le shell, contrairement à
  Histoire et Géographie.
- `src/data/courseContent.ts` : `getSubjectContent(categoryId)` (dynamic `import()` de
  `histoire.ts`/`geographie.ts`, mis en cache par matière), `getFullCourse(courseId)` et
  `getFullLessonRef(key)` (résolvent l'id/la clé via `COURSE_INDEX` pour ne charger que le chunk
  de la matière concernée), `preloadAllSubjectContent()` (précharge les deux grosses matières en
  une fois, mémorisé). **`src/data/courses.ts` ne doit plus jamais être importé depuis le code
  applicatif** (routes/, components/, store/) — seuls les scripts de build et le validateur s'en
  servent.
- `src/lib/featured.ts`, `src/lib/subjectProgress.ts` (`CourseForProgress`), `src/lib/recommendations.ts`,
  `src/lib/search.ts` : rendus génériques sur un sous-ensemble minimal de champs (id/categoryId/xp,
  ou id/categoryId/lessons avec juste leur `id`) — ils fonctionnent indifféremment sur `Course[]`
  (contenu complet) ou `CourseMeta[]` (index léger), sans dupliquer la logique.
- `src/store/useAppStore.ts` importe désormais `COURSE_INDEX` (pas `COURSES`) : la rotation
  « à la une » (`pickNextFeaturedLesson`, `ensureFeaturedLesson`, `completeLesson`) ne dépend plus
  jamais du contenu complet des matières.
- Écrans : `CategoryScreen`/`BiblioScreen` (listes, recherche, recommandations) tournent sur
  `COURSE_INDEX` seul — visiter `/biblio/geo` ne charge plus le chunk Géographie. `CourseDetailScreen`
  charge le cours complet à la demande (`getFullCourse`, séparé en `CourseDetailScreen` — état de
  chargement — et `CourseDetailBody` — logique existante, inchangée, une fois le cours résolu).
  `BiblioScreen` charge la leçon vedette complète (`getFullLessonRef`) et enrichit la recherche
  avec le contenu des leçons dès que `useCatalogContent()` (préchargement en tâche de fond,
  `AppShell`) aboutit. `HomeScreen` construit son fil d'abord avec les seules cartes éditoriales
  (immédiat), puis l'étend avec les leçons du catalogue une fois le préchargement résolu.
  `DailyChallengeScreen` (tire ses questions de tout le catalogue) attend `useCatalogContent()`.
- **Préchargement en tâche de fond** (`AppShell`, `whenIdleAfterLoad`) : attend l'événement
  `load` puis `requestIdleCallback` avant de lancer `preloadAllSubjectContent()` — mesuré : sans
  cette attente, l'évaluation de ~367 Ko de JS (construction de centaines d'objets `Course`)
  entrait en contention avec la peinture initiale et retardait le LCP d'environ 1 s.
- **Routes** (`src/App.tsx`) : chaque écran est chargé via `React.lazy` + un unique `<Suspense>`
  dans `AppShell` — la navigation vers un onglet ne paie que son propre code.

Résultat mesuré : chunk d'entrée 641 Ko → 257 Ko (gzip 182 → 81 Ko) ; `histoire`/`geographie`
(175/192 Ko) et le contenu des autres écrans dans des chunks séparés, chargés à la demande.

### Images (5b, P2)

`scripts/generate-image-variants.mjs` (`npm run images:variants`) génère, à côté de chaque
illustration pleine résolution (~1000-1200 px, jusqu'à 175 Ko), deux variantes `-400w.webp` et
`-800w.webp` (qualité 78, `sharp`). `src/lib/courseImages.ts` ne glob-matche (`import.meta.glob`)
que ces deux variantes — le fichier pleine résolution reste dans le dépôt comme source de
régénération mais n'est **jamais** copié dans `dist/` ni référencé par l'app. `CourseCard` sert
`srcset="400w, 800w"` + `sizes` (fixe en rail défilant, proportionnel en grille fluide) : la
plupart des cartes chargent désormais 400w (~15-30 Ko) au lieu du fichier complet.

### PWA hors ligne (5b, P4)

`vite-plugin-pwa` (mode `generateSW`, `vite.config.ts`) :

- **Précache** : shell (JS/CSS/HTML) + chunks de matière (Histoire/Géographie) — le catalogue est
  donc disponible hors ligne dès la première visite, pas seulement les matières déjà ouvertes.
  Les illustrations (`.webp`) sont explicitement exclues du précache.
- **Cache d'exécution** (`runtimeCaching`) : les illustrations sont mises en cache au fil de l'eau
  (`CacheFirst`, cache dédié `sankofa-images`, plafonné) — seules celles réellement affichées,
  conformément à la consigne « déjà consultées ».
- **`navigateFallback: "/index.html"`** : une navigation directe hors ligne vers `/biblio`,
  `/cours/:id`… n'est pas un fichier précaché en soi ; ce repli sert le shell, à charge pour React
  Router de reprendre la main. Équivalent hors ligne du redirect `/* → /index.html` de
  `netlify.toml`.
- **`clientsClaim: true`** : le tout premier onglet devient hors-ligne sans rechargement manuel.
  Sans effet sur les mises à jour ultérieures.
- **Mise à jour explicite** : `registerType: "prompt"` + `useRegisterSW` (`PwaUpdateToast`,
  monté dans `AppShell`) — un bandeau informe qu'une nouvelle version est disponible ; le
  rechargement (`updateServiceWorker(true)`, seul déclencheur de `skipWaiting`) n'a lieu qu'au
  clic de l'utilisateur, jamais silencieusement (un rechargement forcé en plein quiz perdrait la
  progression de la tentative en cours). `localStorage` (progression) n'est ni lu ni intercepté
  par le service worker : aucune interférence possible.
- Vérifié par un test Playwright réel : shell + Biblio (recherche, listes) accessibles en mode
  avion après une première visite en ligne ; seules les illustrations jamais affichées échouent
  (comportement voulu).

### Polices (5b, P5)

Les polices (Inter, Poppins), auparavant chargées via un `<link rel="stylesheet">` bloquant vers
`fonts.googleapis.com`, sont auto-hébergées (`src/assets/fonts/`, `@font-face` dans
`src/styles/index.css`) : sous-ensemble **latin uniquement** (l'app est 100 % en français, les
sous-ensembles cyrillic/greek/vietnamese du CDN Google n'ont jamais d'usage ici), 3 fichiers réels
(`inter-variable.woff2`, police variable couvrant les poids 400-700 en un seul fichier de 47 Ko ;
`poppins-700.woff2` ; `poppins-800.woff2`, 8 Ko chacun). `index.html` précharge les deux polices
utilisées au-dessus de la ligne de flottaison (`<link rel="preload">`) — sans ce préchargement, la
police n'est découverte qu'à la lecture du CSS. `font-display: optional` (pas `swap`) : les
polices étant préchargées, elles arrivent presque toujours dans la fenêtre de 100 ms ; `swap`
aurait re-peint le texte visiblement plus tard une fois la police reçue, ce repaint tardif d'un
gros bloc de texte devenant le nouveau candidat LCP mesuré. `vite.config.ts` fixe des noms de
fichiers stables (sans hash) pour les polices, seul moyen de les précharger par un chemin connu
à l'avance depuis `index.html`.

### Accessibilité (5c)

- **Contrastes** (`src/styles/index.css`) : audit de la palette contre WCAG AA (4.5:1) a révélé
  deux teintes de texte secondaire en échec (`#8a8071` 3.36:1, `#9b9284` 2.66:1 sur fond cream) et
  la couleur d'accent `--color-primary` insuffisante utilisée comme texte de petite taille
  (3.4-4.0:1). Cinq gris codés en dur dans les composants sont remplacés par deux tokens
  (`--color-ink-muted`, `--color-ink-faint`, tous deux ≥ 4.5:1 sur cream et blanc) ; un token
  `--color-primary-text` (assombri, ≥ 4.5:1) sert aux rares libellés en petit texte sur fond
  clair — `--color-primary` reste inchangé partout ailleurs (CTA, fonds de bouton, icônes, qui
  n'ont besoin que de 3:1). Les icônes ✗/✓ du geste de swipe (sur fond pastel clair) passent de
  `text-danger`/`text-success` (2.16:1 / 2.97:1, sous le seuil non-texte de 3:1) à `text-ink`
  (≥ 10:1).
- **Focus clavier** : un seul style global (`:focus-visible { outline: 3px solid var(--color-primary); outline-offset: 2px; }`,
  `src/styles/index.css`) plutôt qu'annoté composant par composant — couvre uniformément boutons,
  liens (dont les cartes cliquables, des `<Link>`) et champs, y compris les cœurs de favori. Seul
  `focus:outline-none` du dépôt (champ de recherche Biblio) retiré, sans quoi il aurait shunté ce
  style global pour ce champ précis.
- **Alternative clavier au swipe** : les boutons ✗/✓ (`SwipeCard`) étaient déjà de vrais `<button>`
  avec `aria-label` — donc déjà atteignables et actionnables au clavier. Un texte visible
  (« Glisse la carte, ou utilise les boutons ✗ / ✓ ») annonce désormais explicitement cette
  alternative dans l'interface.
- **ARIA du quiz** (`QuizPlayer`) : les options forment un `role="radiogroup"` (`aria-labelledby`
  vers la question) de `role="radio"`/`aria-checked` ; une fois verrouillé, chaque option porte un
  `aria-label` enrichi (« …, bonne réponse » / « …, ta réponse, incorrecte ») en plus de la couleur
  et de l'icône ; le bloc d'explication devient une région `role="status" aria-live="polite"`
  (annoncée automatiquement, préfixée de « Bonne réponse. »/« Réponse incorrecte. »).
- **Structure de titres** : chaque écran a désormais un unique `<h1>` (visible quand il sert de
  titre de page — matière, cours —, sinon `sr-only` pour ne pas dupliquer visuellement une
  salutation ou un logo déjà présents — Home, Biblio, Défi du jour). Les pastilles de section de
  la Biblio (« À la une », « Matières »…) sont des `<h2>` plutôt que des `<span>`.
- `public/robots.txt` ajouté (`User-agent: * / Allow: /`), manquant jusqu'ici (aucun impact
  fonctionnel mais flaggé par l'audit SEO).



- **Tailwind CSS v4 (configuration CSS-first)** : les tokens du design system (couleurs, polices, ombres, rayon de coin) sont déclarés dans un unique bloc `@theme` (`src/styles/index.css`), ce qui génère automatiquement les utilitaires Tailwind correspondants (`bg-histoire`, `shadow-card`, `font-heading`…) sans fichier `tailwind.config.js` séparé — c'est la méthode recommandée par Tailwind v4, plus simple à maintenir qu'un fichier JS de config pour ce périmètre.
- **Zustand + `persist`** plutôt que Redux ou Context : l'application n'a qu'un seul état global (la progression utilisateur), Zustand permet de l'exposer sans provider ni boilerplate, et le middleware `persist` gère la sérialisation `localStorage` automatiquement.
- **Alias `@/`** pointant vers `src/` (configuré à la fois dans `vite.config.ts` et `tsconfig.app.json`) pour des imports lisibles indépendants de la profondeur des dossiers.
- **`react-router-dom`** : les 4 onglets sont des routes (`/`, `/biblio`, `/collections`, `/profil`), plus une 5ᵉ route `/cours/:courseId` pour le détail d'un cours (leçons paginées + quiz), ajoutée sans changer la structure de layout — `AppShell` reste le point d'entrée unique.
- **`src/lib/subjectStyles.ts`** : lookup partagé `SubjectColor → classe Tailwind` (dégradé de bannière, couleur pastel pleine), utilisé par les cartes swipe, les cartes de cours, `Tag` et l'écran de détail de cours, pour éviter de dupliquer ces mappings.
- **Pas de back-end** : tout le contenu est statique et versionné avec le code ; seule la progression utilisateur est en `localStorage`. Ce choix simplifie radicalement le déploiement pour cette phase (site statique) et pourra évoluer si un compte utilisateur / une synchronisation multi-appareil est ajoutée plus tard.

## Module Quiz (Phase 9, lot 1 — socle de données)

> ⚠️ **Les chemins `/jeu…` cités dans les cinq sections qui suivent sont d'époque.** L'onglet a
> été renommé « Quiz » depuis, et ses routes avec lui — voir § Renommage de l'onglet Jeu en Quiz.

Le module Quiz remplace l'onglet Collections. Ce lot ne livre **aucune interface** : il pose le
socle de données, de contenu et de progression sur lequel les lots suivants (moteur de partie,
révision, carte de conquête, soin visuel) viendront s'appuyer.

### Pourquoi remplacer Collections

L'onglet Collections affichait 3 parcours de 2 cours chacun, soit 6 cours sur 136 — 4,4 % du
catalogue pour un quart de la barre de navigation. Surtout, l'application savait faire lire (Home,
Biblio) mais **rien ne faisait revenir sur ce qui avait été lu** : un cours terminé, un quiz passé
une fois, et le savoir s'évapore. Le module Quiz est d'abord la **couche de rétention manquante** ;
sa forme de jeu est le moyen, pas la fin.

### Territoires (`src/lib/territories.ts`)

Le catalogue est redécoupé pour le jeu en **6 territoires** : les 5 régions déjà utilisées par la
Biblio (`geographieRegions.ts`) plus une zone transversale, **Le Baobab**.

Un territoire mélange les quatre matières — l'Afrique de l'Ouest sert une question sur le Sénégal,
une sur l'empire du Ghana et une sur Cheikh Anta Diop dans la même partie. C'est ce que les
parcours promettaient sans jamais le tenir au-delà de 6 cours.

Le rattachement suit deux régimes :

- **Géographie** : dérivé du numéro d'ordre de la fiche (`getGeographieRegion`), rien à maintenir.
- **Autres matières** : déclaré explicitement dans `src/data/courseTerritories.ts`, une table unique
  de 82 entrées — plus facile à relire d'un bloc qu'un champ dispersé sur 82 fichiers de contenu.
  Un tableau vide y signifie « transversal » et verse le cours dans Le Baobab.

Le multi-territoire est réservé aux sujets qui chevauchent réellement deux régions (le Kanem-Bornou
autour du lac Tchad, le commerce transsaharien entre Maghreb et Sahel), jamais comme échappatoire
pour éviter de trancher.

**Le Baobab n'est pas une zone de reliquat.** Il recueille les sujets panafricains (indépendances,
panafricanisme, conférence de Berlin), la diaspora (Toussaint Louverture, Nanny, Sojourner Truth)
et toute la matière Découverte. On craignait qu'il soit famélique avec les seules 52 questions de
Découverte : il en compte **96**, parce que l'histoire panafricaine et la diaspora l'alimentent.

Répartition mesurée des 676 questions (les cours multi-territoires comptent dans chacun) :

| Territoire | Questions |
|---|---|
| Afrique de l'Ouest | 235 |
| Afrique de l'Est | 115 |
| Le Baobab | 96 |
| Afrique du Nord | 90 |
| Afrique centrale | 80 |
| Afrique australe | 75 |

### Index des questions (`src/data/quizIndex.generated.ts`)

Généré au build par `scripts/generate-quiz-index.ts` (`npm run gen:quiz`, intégré à `npm run build`),
**à régénérer après toute modification des quiz du catalogue**.

Pourquoi un index distinct de `coursesIndex.generated.ts` : le module a besoin des questions de
**toutes** les matières à chaque partie. Les charger via `courseContent.ts` reviendrait à tirer les
quatre chunks de matière — donc le texte intégral de 564 leçons — à chaque ouverture de l'onglet.
C'est le compromis que `DailyChallengeScreen` accepte aujourd'hui pour un écran visité une fois par
jour ; il n'est pas tenable pour un onglet principal. Cet index ne porte que les questions,
augmentées de leur origine (cours, matière, leçon) et de leurs territoires.

Chaque entrée porte sa clé stable `` `${courseId}:${questionId}` ``, même convention que
`completedLessonIds` — un id de question n'est unique que par quiz au sens de la règle 3, la clé
composite l'est par construction.

### Révision espacée (`src/lib/quizReview.ts`)

Système de boîtes (Leitner simplifié), module pur avec date injectable :

| Palier | Signification | Prochain rappel |
|---|---|---|
| 0 | ratée, ou jamais réussie | J+1 |
| 1 | réussie une fois | J+3 |
| 2 | réussie deux fois d'affilée | J+7 |
| 3 | acquise | plus aucun rappel |

Une réussite monte d'un palier, un échec ramène à 0 — y compris depuis « acquise », qui redevient
donc rappelable. Une question jamais rencontrée n'est ni due ni acquise : c'est le vivier de
« découverte » dans lequel les parties puiseront leur minorité de questions inconnues.

**Ce système n'est jamais nommé « révision » dans l'interface** : l'utilisateur voit un jeu, et les
questions qu'il a ratées reviennent simplement plus souvent.

### Tout le catalogue, et l'échec comme porte d'entrée

Le module sert **les 676 questions dès la première partie**, sans filtrage par cours terminé. Une
première version du design réservait le jeu aux cours déjà lus pour ne pas « griller » le quiz de
fin de cours ; cette objection tombe ici, parce que se tromper sur un sujet non lu **est le
mécanisme** :

- **Pendant la partie**, le panneau de correction nomme la leçon qui donne la réponse et la déplie
  sur place — même pattern que le « En savoir plus » des cartes du Home et que la vedette « À la
  une » de la Biblio. On ne quitte jamais la partie : un renvoi qui éjecte vers `/cours/:id`
  détruirait un Blitz chronométré ou une série de Survie, et se ressentirait comme une sanction.
- **À la fin de la partie**, un écran liste toutes les leçons des questions ratées. Le même
  aiguillage, en lot — trois ou quatre leçons à explorer d'un coup, plus fort qu'une interruption
  isolée.

Le quiz devient ainsi la porte d'entrée du catalogue : on découvre 136 cours par curiosité, au lieu
de les parcourir en liste.

### Rattachement question → leçon (`src/data/quizLessonMap.ts`)

Ce renvoi suppose qu'une question sache de quelle leçon elle vient — ce que les données ne disaient
pas. Deux régimes cohabitent :

| | Cours | Rattachement |
|---|---|---|
| **Alignés** (autant de questions que de leçons) | 78 | Dérivé par position dans le générateur |
| **Non alignés** | 58 | Déclaré à la main dans `QUIZ_LESSON_MAP` |

Les 78 alignés sont les 40 cours d'Histoire, 30 Personnalités et 8 Découverte, tous à 5 leçons /
5 questions dans l'ordre. Les 58 autres sont les **54 fiches Géographie** (3 leçons pour
5 questions — aucune correspondance mécanique, le regroupement des 7 rubriques d'origine en
3 leçons doit être relu dans le contenu) et 4 cours hérités (3 leçons / 4 questions).

État actuel : **390 questions sur 676 rattachées**, 286 restantes traitées dans un lot dédié. Une
question sans leçon n'est jamais bloquante — le module renvoie alors vers le **cours**, dégradation
propre. La règle 22 du validateur vérifie l'intégrité des rattachements déclarés et tient le compte
de ce qui reste à faire.

### Économie : XP bornée, cauris libres

Le module est illimité — pas de compteur d'énergie ni de vies rechargeables. Sans back-end un
`localStorage.clear()` les contournerait de toute façon, et c'est un ressort qui n'a pas sa place
dans une application de savoir. La rareté vient du stock de questions dues, pas d'un verrou.

Ce qui protège la progression, c'est la séparation des deux monnaies :

- **XP** (`XP_PER_QUESTION_LEARNED = 5`) créditée à la **deuxième** réussite d'une question, jamais
  avant ni après. Pas la première : puisque tout le catalogue est servi d'emblée, une bonne réponse
  sur quatre tombe par hasard, et payer la première rendrait le stock entier farmable à l'aveugle.
  Une question réussie deux fois à plusieurs jours d'intervalle (la révision espacée écarte les
  rappels) ne relève plus de la chance. Le module ne peut donc injecter qu'un total borné par le
  nombre de questions du catalogue, et `LEVEL_TIERS` reste calibré sur le contenu.
- **Cauris**, monnaie de jeu sensible à la vitesse et aux séries, sans aucun effet sur le niveau ni
  sur le rang. C'est ce qu'on farme en jouant.

> ⚠️ Ce plafond (676 × 5 = 3 380 XP aujourd'hui) **s'ajoute au total du catalogue** et doit être
> intégré au prochain recalibrage de `LEVEL_TIERS`, déjà prévu en fin de chantier Découverte.

Les **records personnels** par territoire et par mode sont le seul classement possible sans
back-end, et le plus honnête.

### Store — version de persistance 8

`UserProgress` gagne un unique champ `quizGame` (`QuizGameState`) : `cauris`, `questions`
(statistiques de révision par clé), `records` (meilleur score par territoire et par mode),
`gamesPlayed`.

La migration reste la fonction unique et indifférente à la version d'origine décrite plus haut ;
elle backfille `quizGame` via `normalizeQuizGame`, écrit **champ par champ** plutôt qu'avec un
`?? initialProgress.quizGame` global : un blob v8 partiellement écrit doit conserver ce qui est
lisible — perdre les cauris d'un joueur parce que `records` manque serait pire que le trou lui-même.

Deux actions : `recordQuizAnswer(questionKey, isCorrect)` (reprogramme la révision, crédite l'XP à
la première réussite seulement) et `finishQuizGame({ territoryId, mode, score, cauris })` (crédite
les cauris, met à jour le record si le score le bat strictement).

### Validation

Trois règles ajoutées à `npm run validate` :

- **20. Unicité globale des id de question.** La règle 3 ne garantissait l'unicité qu'à l'intérieur
  d'un même quiz, ce qui suffisait tant que les questions n'étaient lues que dans le contexte de leur
  cours. Les 676 ids sont uniques dans les faits, mais rien ne l'imposait.
- **21. Rattachement territorial.** Tout cours hors Géographie doit figurer dans
  `COURSE_TERRITORIES` ; une fiche Géographie ne doit **pas** y figurer (son territoire est dérivé) ;
  les territoires déclarés doivent exister et ne pas se répéter ; une entrée ne correspondant à aucun
  cours est une erreur.
- **22. Rattachement question → leçon.** Vérifie que chaque entrée de `QUIZ_LESSON_MAP` désigne un
  cours, une question et une leçon qui existent réellement, et compte en avertissement les questions
  des cours non alignés qui n'ont pas encore de leçon déclarée.

La CI gagne par ailleurs un garde-fou de fraîcheur des index générés : `npm test` et
`npm run typecheck` tournent **avant** `npm run build`, donc sur les index commités — sans ce
contrôle, un catalogue modifié sans régénération serait validé contre un index périmé.

### Ce que ce lot ne fait pas

Aucun écran, aucune route, aucune modification de la navigation : l'onglet Collections est encore
en place et le module Quiz n'est accessible nulle part. `DailyChallengeScreen` est intact — son
absorption appartient au lot 3.

## Module Quiz (Phase 9, lot 2 — moteur de partie)

Le module devient jouable : deux modes, la correction qui déplie la leçon, l'écran de fin qui
aiguille vers le contenu. Toujours **hors navigation** — l'onglet Collections reste en place, le
remplacement appartient au lot 4. Le module s'atteint par `/jeu`.

`/quiz` étant déjà pris par l'historique de quiz du Profil, les routes du module sont **`/jeu`**
(choix du territoire) et **`/jeu/:territoryId/:mode`** (une partie).

### Deux modes (`src/lib/quizGame.ts`)

| | Blitz | Survie |
|---|---|---|
| Contrainte | 60 secondes | 3 vies |
| Score | bonnes réponses | bonnes réponses |
| Bonus de cauris | vitesse (réponse < 4 s) | vies restantes |

**Le chronomètre du Blitz se met en pause pendant la correction.** Sans cette pause, lire la leçon
d'une question ratée coûterait du temps de jeu : le geste que tout le module cherche à encourager
deviendrait un piège, et les joueurs apprendraient à ignorer les leçons pour préserver leur score.
Les 60 secondes mesurent donc le temps passé à *répondre*, pas le temps au mur.

### L'ordre des questions, pas leur sélection

`buildGameQuestions` ne retire **jamais** de question du vivier d'un territoire : tout le catalogue
est servi, y compris ce qui n'a jamais été lu. Ce qui change d'un mode à l'autre, c'est l'ordre :

- **Blitz** ouvre sur les questions dues à révision, puis part en découverte — soixante secondes
  servent d'abord à consolider.
- **Survie** monte en difficulté : acquis et déjà-vu d'abord, questions dues ensuite, découverte en
  dernier. Perdre ses trois vies sur la première question serait absurde.

À l'intérieur de chaque groupe, l'ordre est aléatoire (hasard injectable pour les tests) : deux
parties consécutives ne se ressemblent pas.

### Cauris

`base = bonnes réponses × 5`, plus `5` par palier de série de 3 atteint, plus le bonus de mode
(vitesse ou vies restantes). Monnaie de jeu pure : elle ne touche jamais l'XP ni le rang, ce qui
permet de la rendre généreuse sans déséquilibrer la progression.

### Composants

- **`QuizOptions`** — liste de réponses extraite de `QuizPlayer` et désormais partagée avec le
  moteur de partie. Deux flux très différents (l'un paginé et sans contrainte de temps, l'autre
  chronométré et à vies), exactement le même geste de réponse : les règles d'accessibilité
  (`radiogroup`/`radio`, état annoncé) et le code couleur ne sont entretenus qu'une fois.
- **`LessonReveal`** — déplie la leçon sur place, charge le contenu **au clic seulement** (une
  partie sans erreur ne télécharge rien) et ne tire que le chunk de la matière concernée. Repli sur
  un lien vers le cours quand la question n'a pas encore de leçon rattachée.
- **`QuizGamePlayer`** — le moteur : chronomètre, vies, série, réponses rapides, questions ratées.
- **`QuizGameOutcome`** — l'écran de fin, avec la section « Ce que tu peux aller voir ».

### Poids réel

L'écran de sélection n'a besoin que de compteurs, pas des 676 questions. Lui faire importer l'index
complet coûtait **82 Ko gzip pour afficher six chiffres**, avant même qu'une partie commence. Le
générateur émet donc un second fichier, `src/data/quizKeys.generated.ts` (les clés de questions par
territoire), qui suffit à compter les questions d'un territoire et celles dues à révision.

| Chunk | gzip |
|---|---|
| `JeuScreen` (sélection) | **5,6 Ko** |
| `JeuPartieScreen` (partie, porte l'index complet) | 84,8 Ko |

Le chunk d'entrée est inchangé : rien de tout cela n'est chargé tant qu'on n'ouvre pas `/jeu`.
Découper l'index par territoire ferait encore baisser le second chiffre — piste ouverte, non
nécessaire tant que le module est précaché par le service worker.

### Vérifié en navigateur

Playwright piloté manuellement (aucune dépendance ajoutée au dépôt — Playwright installé hors du
projet), sur les deux modes : 6 territoires listés, chronomètre qui décompte puis **se fige
pendant la correction**, leçon chargée et affichée sur place sans quitter la partie, vies
décrémentées 3 → 2 → 1 → 0, arrêt à la troisième erreur, écran de fin avec cauris et section
d'aiguillage, persistance en `localStorage` (version 8, cauris, record du territoire, échéances de
révision écrites). Vérifié aussi qu'aucun `aria-label` ne trahit la bonne réponse avant qu'on ait
répondu. Aucune erreur console.

### Ce que ce lot ne fait pas

Pas de carte de conquête, pas de maîtrise ni d'étoiles, pas de remplacement de l'onglet Collections
(lot 4). Le Défi du jour est intact et fait toujours doublon (lot 3). Jouer met à jour la série
(`updateStreak`) — c'est une activité du jour comme lire une leçon — mais le reste du suivi
quotidien (objectif, défi) sera branché avec l'absorption du Défi du jour.

## Module Quiz (Phase 9, lot 3 — révision et absorption du Défi du jour)

Le module devient le seul endroit où l'on répond à un quiz hors d'un cours. Toujours hors
navigation : le remplacement de l'onglet Collections appartient au lot 4.

### Le Défi du jour absorbé

L'ancien `/defi` (`DailyChallengeScreen`) faisait déjà un mini-quiz au Home : trois questions
tirées au hasard dans tout le catalogue, stables sur la journée, ＋30 XP, validation de la série.
Deux systèmes de quiz cohabitaient donc, avec deux endroits où corriger le même bug.

Le défi est maintenant **`/jeu/defi`**, une partie du module :

- **5 questions** au lieu de 3 — il porte désormais aussi la révision, il lui faut de quoi
  ramener plusieurs questions dues.
- **Les questions dues d'abord**, complétées par un tirage déterministe du jour. L'ancien défi
  ignorait totalement ce que l'utilisateur avait raté ; c'était un tirage au sort, pas un défi.
- **Stable sur la journée** (`pickDailyQuestions` est seedé par le jour de l'année) mais
  **personnalisé** : deux utilisateurs n'ont pas les mêmes dues, donc pas le même défi.
- Ni chronomètre ni vies : sa tension vient de l'unicité de la tentative quotidienne.

`DailyChallengeScreen` est supprimé. `/defi` **reste en redirection** vers `/jeu/defi` : la route a
pu être mise en favori ou ouverte depuis une PWA installée. La carte du Home
(`DailyChallengeCard`) devient un simple raccourci — le Home garde son point d'entrée quotidien,
le quiz ne vit plus qu'à un seul endroit.

**Gain secondaire notable** : l'ancien écran chargeait le contenu complet des quatre matières (le
texte de 564 leçons) pour n'en tirer que des quiz. Le nouveau n'a besoin que de l'index des
questions.

### `QuizPlayMode` — pourquoi le défi n'est pas un `QuizGameMode`

`QuizGameMode` (`blitz | survie`) est la clé des records par territoire : y ajouter `defi`
ouvrirait une case de record pour une partie qui ne se joue sur aucun territoire. Le moteur
travaille donc sur `QuizPlayMode = QuizGameMode | "defi"`, et `finishQuizGame` prend un champ
`record` nullable :

```ts
finishQuizGame({ cauris, record: { territoryId, mode, score } })  // partie sur un territoire
finishQuizGame({ cauris, record: null })                          // Défi du jour
```

Un seul champ nullable plutôt que trois paramètres à ignorer : il n'y a pas d'état intermédiaire à
représenter, et aucun appelant n'a besoin d'inventer un mode bidon. Le Défi du jour rapporte des
cauris et compte comme une partie, mais ne touche aucun record.

Côté cauris, `defi` n'a ni bonus de vitesse ni bonus de vies — il n'a ni chronomètre ni vies. Le
bonus de série, lui, s'applique partout.

### Suivi quotidien

L'XP gagnée en jouant alimente `daily.xpEarned`, comme celle d'une leçon lue. C'est traité
**dans `recordQuizAnswer`** plutôt que par un appel séparé à `addDailyProgress` depuis l'écran :
seul le store sait si une réponse a effectivement crédité de l'XP (deuxième réussite d'une
question), l'écran l'ignore. Divergence assumée avec `completeLesson`, qui laisse ce soin à son
appelant parce que le Home y compte aussi des cartes.

Le compteur de cartes du jour (`daily.cardsLearned`, l'objectif du Home) n'est pas touché : une
question de quiz n'est pas une carte apprise, et gonfler l'objectif quotidien en jouant le viderait
de son sens.

### Vérifié en navigateur

Playwright piloté manuellement, sur un `localStorage` semé avec une question ratée le 5 janvier
(donc due) et une question acquise dans le même territoire :

- La question due remonte partout où elle doit : compteur « 1 question à revoir » sur l'écran du
  module, « 1 à revoir » sur son territoire, **première question du Défi du jour**, **première
  question du Blitz** de son territoire.
- La **Survie amorce sur la question acquise**, pas sur la question due — la montée en difficulté
  du mode est donc bien effective.
- `/defi` redirige vers `/jeu/defi` ; la carte du Home y mène ; le tirage est stable au
  rechargement ; l'écran de fin affiche « Défi relevé ! », ＋30 XP et les cauris, sans bouton
  « Rejouer » ; un second passage le même jour est refusé ; `challengeDone`, `daily.xpEarned`, la
  série et l'historique de quiz sont bien persistés.

Aucune erreur console.

### Ce que ce lot ne fait pas

Pas de carte de conquête, pas de maîtrise ni d'étoiles, pas de remplacement de l'onglet
Collections (lot 4). Aucun soin d'animation (lot 5).

## Module Quiz (Phase 9, lot 4 — carte de conquête et remplacement de Collections)

Le module prend la place de Collections dans la navigation. C'est le lot qui lui donne son écran
d'accueil : une vraie carte de l'Afrique.

### La carte : vraies données, projection équivalente

Une première version dessinait cinq polygones à la main. Résultat : moche, et surtout faux. La
carte est désormais générée depuis **Natural Earth** (`ne_50m_admin_0_countries`, **domaine
public**) par `scripts/generate-africa-map.mjs` → `npm run gen:map` →
`src/data/africaMap.generated.ts`. Le script télécharge la source lui-même : aucune dépendance
ajoutée au projet, aucun fichier de 3 Mo commité, seulement 39 Ko de chemins SVG. Il est
volontairement **hors du `build` et de la CI** — la géographie de l'Afrique ne change pas à chaque
commit.

**La projection est une décision éditoriale, pas technique.** La première version utilisait
Mercator : elle étirait l'Afrique d'environ 30 % en hauteur et minorait sa taille réelle — la
distorsion que la critique panafricaine dénonce de longue date. Une application qui enseigne
l'histoire africaine ne peut pas dessiner l'Afrique dans la projection qui la déforme. La carte
utilise donc une **projection azimutale équivalente de Lambert** centrée sur le continent
(17° E, 3° N) : les aires y sont exactes.

Deux choix de cadrage, tous deux dictés par le rendu :

- **Les dépendances lointaines sont écartées du tracé** (`MAP_BOUNDS`). Natural Earth rattache à
  l'Afrique du Sud les îles du Prince-Édouard, à 46° S : un point invisible qui étirait la boîte
  englobante et laissait un grand vide sous la carte. Le cadre est passé de 800 × 998 à
  **800 × 856**, soit le rapport réel du continent.
- **Cap-Vert, Maurice et Seychelles ne sont pas dessinés** — trop au large pour un cadrage lisible.
  Ils restent pleinement dans leur territoire côté jeu.

Les **frontières nationales restent visibles**. Dans une application qui consacre 54 fiches aux
pays africains, pouvoir les distinguer est une qualité, pas du bruit.

Les cinq teintes viennent de la palette existante — or (Nord), terre (Ouest), vert savane
(Centrale), indigo (Est), flamme (Australe). **Aucun token n'a été ajouté** : la teinte dit le
territoire, l'opacité dit la maîtrise. Le plancher d'opacité est volontairement haut (0,32) : en
dessous, les cinq teintes se ressemblent et la carte cesse de dire *quel* territoire on regarde —
son premier travail. La progression, elle, est aussi portée par les étoiles et les barres.

**Accessibilité** : la carte est décorative (`aria-hidden`), cliquable au pointeur par commodité
(un clic fait défiler vers la carte du territoire). La liste de territoires qui la suit est le
contrôle réel, accessible au clavier et aux lecteurs d'écran. On évite ainsi de dupliquer les
tabulations et de bricoler une sémantique de bouton dans du SVG.

### Conquête : deux axes, pas une note

`src/lib/conquest.ts`, module pur travaillant sur les **clés** de questions (fichier léger), jamais
sur l'index complet.

- **Maîtrise** = questions montées au dernier palier de révision / questions du territoire. Elle
  colore le territoire sur la carte et remplit la barre de sa fiche.
- **Trois étoiles**, indépendantes : territoire entamé · record de 12 bonnes réponses en une partie
  · 80 % des questions acquises. Elles sont comptées séparément — on peut décrocher la troisième
  sans la deuxième (tout apprendre sans jamais faire un gros score), et bloquer une progression
  légitime derrière une autre n'aurait servi à rien.

Une seule note aurait forcé à choisir entre récompenser le savoir et récompenser l'adresse.

Effet de bord assumé et vérifié : une question rattachée à **deux** territoires (le commerce
transsaharien est Nord *et* Ouest) compte dans les deux. Maîtriser entièrement le Nord entame donc
l'Ouest, qui décroche son étoile « territoire entamé ». C'est la conséquence directe du
multi-territoire, pas un défaut.

### Collections remplacé, parcours absorbés

`CollectionsScreen` est supprimé ; `/collections` **reste en redirection** vers `/jeu`.
`BottomNav` et `Sidebar` remplacent l'onglet Collections par **Jeu** (icône `Swords`).

Les 3 parcours ne sont pas perdus : ils deviennent la section **« Quêtes »** de l'écran du module,
rendue par le même `ParcoursCard`. `completedParcoursIds`, `getNewlyCompletedParcours` et l'écran
« Collection avancée ! » de la séquence de fin de cours continuent de fonctionner sans modification
— c'est précisément pourquoi l'absorption avait été préférée à la suppression.

### Poids

`JeuScreen` passe de 6,1 à **22,9 Ko gzip** : la carte pèse ~12 Ko gzip. C'est le prix d'une vraie
carte de l'Afrique sur l'écran d'accueil du module, et il est payé une fois (chunk paresseux,
précaché par le service worker). Le chunk d'entrée est inchangé (84,6 Ko gzip).

### Vérifié en navigateur

Playwright piloté manuellement, desktop et mobile : l'onglet Jeu remplace Collections,
`/collections` redirige, les 53 pays sont tracés et nommés, cliquer un pays fait défiler vers la
fiche de son territoire, les six territoires et les trois quêtes sont listés, et sur un état semé
(tout le Nord acquis + record de 14) le Nord affiche bien 3 étoiles et 100 % de maîtrise tandis que
l'Ouest en affiche 1. Aucune erreur console. Captures relues à chaque itération du tracé — c'est
ainsi que le vide sous la carte et la confusion des teintes ont été trouvés.

## Module Quiz (Phase 9, lot 5 — soin visuel)

Dernier lot du module : les animations et micro-interactions qui font la différence entre un
écran qui *affiche* un résultat et un écran qui le *célèbre*.

### Une convention, un filet de sécurité

Toutes les animations sont des `@keyframes sankofa-*` déclarées dans `src/styles/index.css`, dans
la continuité de `sankofa-pop` qui existait déjà. Un unique bloc
`@media (prefers-reduced-motion: reduce)` les neutralise toutes — **y compris `sankofa-pop`**, qui
n'était jusqu'ici protégé que par les composants qui pensaient à l'utiliser. Les animations
pilotées en JavaScript (compteurs, remplissage de la carte) passent en plus par le hook
`useReducedMotion` existant.

| Animation | Où | Ce qu'elle dit |
|---|---|---|
| `sankofa-shake` | carte de question | mauvaise réponse — une secousse, un seul aller-retour |
| `sankofa-breathe` | carte de question | bonne réponse — la carte respire une fois |
| `sankofa-urgent` | chronomètre Blitz | les 10 dernières secondes |
| `sankofa-life-lost` | cœurs de Survie | la vie qu'on vient de perdre |
| `sankofa-rise` | écran de fin | entrée en cascade des blocs |
| `sankofa-pop` | compteurs en partie | le score et la série qui changent |

Le retour de réponse n'utilise **ni `key` ni remontage** : la classe n'est posée que pendant que la
réponse est verrouillée, et disparaît au passage à la question suivante. Ce cycle suffit à relancer
l'animation, sans faire clignoter le sous-arbre.

### `useCountUp`

`src/hooks/useCountUp.ts` fait monter un nombre de 0 vers sa valeur, avec une sortie amortie (la
montée ralentit en approchant du résultat plutôt que de s'arrêter net). Utilisé pour le score puis
les cauris de l'écran de fin, **en deux temps** (300 ms puis 950 ms) : l'œil lit d'abord le
résultat, la récompense tombe ensuite. Sous `prefers-reduced-motion`, la valeur finale s'affiche
immédiatement.

### La carte se colore

Au montage, les territoires se remplissent du vide vers leur maîtrise réelle, en cascade
(110 ms d'écart par territoire). Deux `requestAnimationFrame` d'attente avant de basculer l'état :
sans cela le navigateur peint directement l'état final et la transition ne se voit pas — même
précaution que celle déjà prise dans `ProgressBar`.

### Vérifié en navigateur, dans les deux modes

Playwright piloté manuellement, une passe `no-preference` et une passe `reduce` :

- Animations actives : transition `fill-opacity 850ms ease-out 220ms` posée sur les pays, opacité
  qui atteint 0,95 sur un territoire entièrement acquis, classe `sankofa-breathe`/`sankofa-shake`
  posée selon la réponse, `animationName` non nul, score qui monte.
- `prefers-reduced-motion: reduce` : **aucune** transition sur la carte, `animationName: none` sur
  la carte de question, score affiché d'emblée. La classe reste posée — c'est le CSS qui neutralise,
  pas le composant qui devine.

Aucune erreur console dans l'une ou l'autre passe.

## Rattachement des questions aux leçons et quatrième recalibrage (Phase 9, après le module Quiz)

### Rattachement question → leçon

Le module Quiz promet qu'une erreur ouvre la leçon qui donne la réponse. Encore faut-il savoir
laquelle. 390 questions le déduisaient déjà par position (cours à autant de questions que de
leçons) ; les 286 restantes — 54 fiches Géographie (3 leçons, 5 questions) et 4 cours hérités
(3 pour 4) — ont été traitées ici. **657 des 676 questions du catalogue sont désormais rattachées.**

**Le template attendu n'existait plus.** La section « chantier Géographie » de `CLAUDE.md` décrit
trois leçons génériques (Le territoire / Population et société / Économie, politique et repères).
En pratique les fiches ont depuis été réécrites sous la charte, avec des titres narratifs (« Un lac
qui vire au rose »). Aucun rattachement par position n'était donc possible : il a fallu rapprocher
par le contenu.

**Méthode.** Pour chaque question, on cherche dans quelle leçon figure la réponse :

1. réponse citée mot pour mot → signal fort ; répétée dans la leçon → signal plus fort encore
   (la leçon qui y revient en traite vraiment, celle qui la cite en passant non) ;
2. réponse figurant dans le **titre** de la leçon → décisif ;
3. sinon, recouvrement de vocabulaire, avec une **pondération discriminante** : un mot présent dans
   les trois leçons ne départage rien (poids ⅓), un mot présent dans une seule la désigne (poids 1).

Deux défauts ont été trouvés et corrigés en cours de route, tous deux visibles dans les résultats
avant de l'être dans le code :

- une **répartition trop penchée vers la leçon 3** a fait suspecter un biais de longueur ; mesure
  faite, les trois leçons font la même taille (128 / 119 / 122 mots) et les faits factuels
  (capitale, monnaie) sont réellement concentrés dans la troisième — le déséquilibre était vrai ;
- la présence d'un mot était testée par **sous-chaîne**, si bien que « or » matchait dans « encore »
  et « nord ». Corrigé par un test de début de mot.

**Relecture manuelle** des 12 rattachements les plus faibles : 1 correction (Ubuntu renvoyait vers
« Rites de passage » alors que seule la troisième leçon porte son nom) et 5 retraits, où
l'automatisme avait accroché un mot incident — l'alliance AES captée par le mot « Sahel ».

**Les 19 questions restées non rattachées sont un constat, pas un reste.** Leur réponse ne figure
dans aucune leçon de leur propre cours. Les rattacher quand même enverrait l'utilisateur vers une
leçon qui ne répond pas ; le module renvoie donc vers le cours. **Le correctif est éditorial**, pas
technique. Le cas symétrique confirme la règle : le Burkina Faso a bien une leçon sur son
enclavement (« À la merci des ports voisins »), et sa question y renvoie.

### Quatrième recalibrage de `LEVEL_TIERS`

Le total réellement atteignable a été recompté source par source plutôt que repris de la
documentation :

| Source | XP |
|---|---|
| Complétion des 136 cours | 8 360 |
| 564 leçons × `XP_PER_LESSON` | 5 640 |
| Module Quiz : 676 questions × `XP_PER_QUESTION_LEARNED` | 3 380 |
| 3 parcours (`xpReward`) | 400 |
| 18 cartes éditoriales du fil Home | 180 |
| **Total** | **17 960** |

Le barème calé sur 13 040 XP aurait donné le dernier rang à **72,6 %** du catalogue. Nouveau
barème, proportions inchangées (0 / 9,6 / 29,9 / 59,8 / 100 %) :

| Rang | Avant | Après |
|---|---|---|
| Curieux | 0 | 0 |
| Éveillé | 1 250 | 1 700 |
| Initié | 3 900 | 5 350 |
| Sage | 7 800 | 10 750 |
| Gardien du savoir | 13 040 | 17 960 |
| `OPEN_LEVEL_STEP` | 1 250 | 1 700 |

**Aucune migration** : la version de persistance reste 8. L'XP acquise n'est jamais recalculée,
seuls `level` et `rank` le sont — ce qui **fait redescendre d'un rang** un utilisateur assis sur
une ancienne frontière (13 040 XP passe de « Gardien du savoir » à « Sage »). Assumé, et déjà le
cas aux recalibrages précédents.

**Une limite désormais écrite dans le code** : le Défi du jour rapporte 30 XP par jour
indéfiniment, soit environ 11 000 XP par an sans apprendre quoi que ce soit de neuf. La propriété
« dernier rang = 100 % du catalogue » ne vaut donc à la lettre que pour un utilisateur récent.
Cette faille est antérieure au recalibrage ; elle n'était simplement écrite nulle part.

**Les tests ne codent plus les seuils en dur.** `gamification.test.ts` dérive ses échantillons de
`LEVEL_TIERS` et de `OPEN_LEVEL_STEP` (désormais exporté) : ils vérifient la frontière, pas une
valeur d'époque, et survivront au prochain recalibrage sans intervention.

## Retrait du contenu d'amorçage et fil de découverte (Phase 9)

### Pourquoi le fil du Home a changé deux fois

Le fil a porté trois choses successives, et c'est instructif :

1. **18 cartes éditoriales** (`src/data/cards.ts`), écrites en Phase 1 quand le catalogue était
   vide. Un tiers d'entre elles répétait un cours écrit depuis ; le reste vivait hors matière, hors
   charte des leçons et hors du module Quiz.
2. **Des leçons du catalogue**, une fois les cartes retirées. Cohérent, mais deux défauts :
   le fil restait vide tant que le texte des leçons n'était pas chargé, et surtout **lire une leçon
   au milieu d'un fil de tri n'a pas de sens** — on swipe pour trier, pas pour apprendre.
3. **Des cours à découvrir**, la forme actuelle : illustration, matière, titre, description, et
   deux gestes — ✓ « intéressé » (le cours rejoint les favoris) et ✗ « pas intéressé » (il est
   écarté définitivement).

La troisième forme est la seule où le geste et le contenu s'accordent. Elle a aussi le mérite de
n'avoir besoin que de `COURSE_INDEX` : le fil est complet dès le premier rendu.

### Ce que le changement a imposé ailleurs

- **`dismissedCourseIds`** : sans mémoire des refus, le fil resservirait indéfiniment ce qu'on
  vient d'écarter.
- **Plus d'XP au swipe.** Trier n'est pas apprendre ; en donner récompenserait un balayage.
- **L'objectif du jour compte les leçons lues**, et ce comptage est tenu **dans `completeLesson`**
  — le seul point du code qui sait qu'une leçon vient réellement d'être lue, et qui est déjà
  idempotent. Auparavant chaque écran appelait `addDailyProgress` de son côté.
- **Un bug corrigé** : depuis que le fil servait des leçons, mettre une carte en favori écrivait un
  id de leçon nu dans `favoriteCardIds`, résolu par l'écran Favoris contre les seules `CARDS` —
  le favori disparaissait sans bruit. Il n'y a plus qu'une sorte de favori, le cours.

### Migration v9

`favoriteIds` (v1), `favoriteCardIds` (v5) et `favoriteLessonKeys` (transitoire) sont résolus
contre le catalogue et remontés vers `favoriteCourseIds` : un id de cours est gardé, un id de leçon
remonte à son cours — l'intention « ce sujet m'intéresse » est préservée — et ce qui ne résout rien
est abandonné, c'est une carte supprimée. Les entrées `editorial:*` de `completedLessonIds` sont
nettoyées, `cardsLearned` devient `lessonsLearned` et `totalCardsLearned` devient
`totalLessonsLearned`. **L'XP acquise n'est jamais recalculée.**

### Les 4 cours hérités alignés

Les derniers cours au format de la Phase 1 (3 leçons / 4 questions) passent à 5 leçons /
5 questions / `xp: 70`. Les id de cours, de leçons existantes et de questions sont **inchangés** :
ce sont des clés de `localStorage`. Les leçons conservées ont pu être retitrées et réécrites — ce
que le lot 1 de Découverte avait déjà fait.

Deux effets qui dépassent le simple format :

- **Le rattachement question → leçon se dérive désormais par position** pour ces 4 cours, dont les
  entrées disparaissent de `quizLessonMap`. Il ne reste que les 54 fiches Géographie non alignées.
- **Le barème n'a pas bougé.** Le retrait des 18 cartes (−180 XP) et l'enrichissement des 4 cours
  (+80 de complétion, +80 de leçons, +20 de questions) s'annulent : le total reste très exactement
  **17 960 XP**, la valeur sur laquelle `LEVEL_TIERS` est calé.

Une erreur de fait a été corrigée en passant : le cours annonçait la ZLECAf « entrée en vigueur en
2021 », jusque dans l'intitulé de sa question de quiz. Elle est entrée en vigueur le **30 mai
2019** ; seul le démantèlement tarifaire a démarré le 1ᵉʳ janvier 2021.

## Renommage de l'onglet Jeu en Quiz (Phase 9)

L'onglet s'appelait **Jeu**. Le mot promettait du divertissement au-dessus d'un moteur de révision,
et travaillait contre la mission de l'application : quelqu'un qui vient chercher de l'histoire
africaine ne clique pas spontanément sur « Jeu ».

Le code, lui, disait déjà « quiz » partout — `QuizGamePlayer`, `QuizGameOutcome`, `quizGame` dans
la progression, `QUIZ_INDEX`, `quizLessonMap`. Seule l'étiquette visible disait autre chose. Le
renommage réconcilie l'interface avec ce qu'elle recouvre, et remet l'onglet dans le registre des
trois autres : Home, Biblio, **Quiz**, Profil — des mots courts et fonctionnels.

### Ce qu'il a fallu déplacer

`/quiz` était **déjà pris** par l'historique des tentatives, ouvert depuis le Profil. Il vit
désormais sous **`/profil/quiz`**, là où il est de toute façon atteint.

| Nouvelle route | Ancienne, conservée en redirection |
|---|---|
| `/quiz` | `/jeu`, et `/collections` |
| `/quiz/defi` | `/jeu/defi`, et `/defi` |
| `/quiz/:territoryId/:mode` | `/jeu/:territoryId/:mode` |

La dernière redirection ne pouvait pas être un simple `<Navigate>` : sa cible est une chaîne figée,
incapable de reporter les paramètres d'URL. D'où le petit composant `JeuRedirect` dans `App.tsx`,
qui relit `useParams()` et reconstruit l'adresse. `/collections` pointe directement sur `/quiz`
plutôt que d'enchaîner deux redirections.

`JeuScreen`, `JeuPartieScreen` et `JeuDefiScreen` deviennent `QuizScreen`, `QuizPartieScreen` et
`QuizDefiScreen` ; `QuizHistoryScreen` garde son nom. L'icône passe des épées croisées (`Swords`,
franchement « jeu vidéo ») à une cible (`Target`).

### Une perte assumée

Un favori pointant sur l'ancien `/quiz` — l'historique — tombe maintenant sur l'onglet : une même
adresse ne peut pas rediriger vers deux endroits. L'historique reste à un clic depuis le Profil.

**Aucune migration du store** : rien dans la progression ne stocke de chemin, et le champ interne
s'appelait déjà `quizGame`.

## Prochaines étapes (hors périmètre de cette phase)

Voir [CLAUDE.md](../CLAUDE.md) pour la feuille de route détaillée : contenu éditorial complet, système de quiz interactif, animations de swipe avancées, authentification, etc.
