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

## Prochaines étapes (hors périmètre de cette phase)

Voir [CLAUDE.md](../CLAUDE.md) pour la feuille de route détaillée : contenu éditorial complet, système de quiz interactif, animations de swipe avancées, authentification, etc.
