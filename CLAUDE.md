# CLAUDE.md — Contexte projet Sankofa

Ce fichier permet à toute future session (IA ou humaine) de reprendre le projet immédiatement.

## Vision

**Sankofa** est une application web de culture générale africaine, à destination du grand public et de la diaspora. Elle s'inspire structurellement d'une application existante nommée « Sophia » (micro-apprentissage gamifié : fil de cartes à swiper, bibliothèque de cours, parcours guidés, forte gamification), mais avec une **identité visuelle africaine** (néo-brutaliste, palette terre/ocre/or/vert savane/indigo) et un **contenu 100 % dédié à l'Afrique**.

Le nom *Sankofa* vient du concept akan « retourner chercher le savoir du passé » — c'est la mission de l'app, à utiliser partout (titre, logo, textes UI, documentation). Ce n'est pas un placeholder à remplacer.

L'app a 4 onglets (bottom nav) :
- **Home** : fil de cartes à swiper ✗ (passer) / ✓ (apprendre), une carte = un sujet culturel.
- **Biblio** : bibliothèque de cours par matière (À la une, groupés par catégorie).
- **Quiz** : carte de conquête de l'Afrique, modes Blitz et Survie par territoire, Défi du jour, révision espacée, et les parcours guidés en « Quêtes ». (A remplacé l'onglet Collections en Phase 9 ; s'est d'abord appelé « Jeu », renommé depuis — les chemins `/jeu…` cités dans les livraisons antérieures sont d'époque.)
- **Profil** : niveau/rang, streak hebdomadaire 🔥, statistiques, radar de maîtrise par matière.

## Conventions du projet

- **Stack imposée** : React 18 + Vite + TypeScript, Tailwind CSS v4 (config CSS-first via `@theme`, pas de `tailwind.config.js`), React Router, Zustand + `persist`, `lucide-react`, `vite-plugin-pwa` (service worker, Phase 7.5). Pas de back-end : contenu dans `src/data/*.ts`, progression en `localStorage`.
- **Alias `@/`** → `src/` (déclaré dans `vite.config.ts` ET `tsconfig.app.json` — toujours mettre à jour les deux si l'alias change).
- **Séparation stricte contenu / progression** : `src/data/` est en lecture seule à l'exécution (source éditoriale) ; seul `src/store/useAppStore.ts` (type `UserProgress`) est mutable et persisté. Ne jamais faire muter les fichiers `data/*.ts` depuis le store ou les composants.
- **Design system centralisé** : tous les tokens (couleurs, polices, ombres, rayons) vivent dans `src/styles/index.css` (`@theme`). Ne pas coder de couleurs en dur dans les composants sauf dégradés d'illustration (voir `docs/DESIGN-SYSTEM.md`).
- **Composants de présentation vs écrans** : `components/ui/` et `components/features/` reçoivent des props et n'accèdent pas au store (exceptions assumées : `TopBar` et le futur besoin d'affichage global). `routes/*.tsx` orchestrent (lecture données + store, appel des actions).
- Voir `docs/ARCHITECTURE.md` pour le détail des flux de données et `docs/DESIGN-SYSTEM.md` pour tous les tokens visuels.

## Ce qui est déjà en place (Phase 1 — Fondations)

- Échafaudage complet (Vite + React + TS + Tailwind v4 + Router + Zustand).
- Design system : tokens de couleurs/typo/ombres, composants UI de base (`Button`, `Card`, `Tag`, `Badge`, `ProgressBar`).
- **Layout responsive web** (pas un mockup de téléphone) : `AppShell` + `TopBar` (header sticky pleine largeur) + `Sidebar` (nav desktop, `md:` et +) + `BottomNav` (nav mobile fixée en bas, < `md`). Décision prise en cours de Phase 1 suite à un retour utilisateur : le rendu initial (cadre téléphone centré sur desktop) faisait trop "mockup d'app mobile" et pas assez "site web" — voir `docs/DESIGN-SYSTEM.md` § Points de rupture.
- Modèle de données complet (`src/types/index.ts`) : `Category`, `SwipeCard`, `Course`, `Lesson`, `QuizQuestion`, `QuizResult`, `Parcours`, `UserProgress`.
- Contenu : 6 catégories, 18 cartes swipe (3 par catégorie), 6 cours complets — un par catégorie (histoire, géographie, personnalités, arts & musique, traditions & sociétés, afrique contemporaine — chacun 3 leçons + quiz), 3 parcours (Collections) reliant chacun 2 cours de matières différentes autour d'un thème commun.
- Store Zustand persistant (`sankofa-progress` en `localStorage`) avec actions `markCardSeen`, `toggleFavorite`, `completeCourse`, `addXp`, `updateStreak`, `addMastery`, `recordQuizResult`. Migration douce (`version`/`migrate`) pour backfill `quizResults: []` sur les blobs `localStorage` antérieurs à son ajout.
- Logique de gamification (`src/lib/gamification.ts`) : paliers XP → niveau/rang (Curieux, Éveillé, Initié, Sage, Gardien du savoir), calcul de streak, `MASTERY_PER_CARD`/`MASTERY_PER_COURSE`.
- Les 4 écrans affichent le contenu d'exemple au bon style visuel (le swipe est simplifié : les boutons ✗/✓ font avancer la carte, sans geste tactile réel).

## Ce qui est déjà en place (Phase 2 — Cœur d'apprentissage)

- Écran de détail d'un cours (`/cours/:courseId`, `src/routes/CourseDetailScreen.tsx`) : leçons paginées (`LessonViewer`), quiz interactif (`QuizPlayer`, verrouillage + correction colorée + explication), écran de résultat (score, %, message, XP, détection de montée de rang), bouton "Refaire le quiz".
- Navigation Biblio → détail (cours à la une + `CourseCard`) et Collections → détail (parcours dépliable listant ses cours).
- Badge "Terminé ✓" sur les cours complétés (Biblio, Collections).
- Profil : taux de réussite réel (calculé sur `quizResults`) et section "Mes quiz récents" (5 dernières tentatives), avec état vide si aucun quiz n'a encore été passé.

## Ce qui est déjà en place (Phase 3 — Home « tableau de bord »)

- `HomeScreen` reconstruit en tableau de bord à 7 modules (voir `docs/ARCHITECTURE.md` § Home) : salutation + objectif du jour (`DailyGoalCard`), fil `SwipeCard` en vedette (avec tap pour révéler `card.content`), Défi du jour (`DailyChallengeCard` → route `/defi`, `DailyChallengeScreen`, réutilise `QuizPlayer`), Continue ton apprentissage (`ContinueLearningCard`), Explore par thème (`ThemeExplorer` → `/biblio?cat=<id>`, scroll dans `BiblioScreen`), Proverbe du jour (`ProverbCard`, `src/data/proverbs.ts`), Coup d'œil sur la progression (`ProgressGlance`).
- Suivi quotidien persisté (`UserProgress.daily` : cartes/XP du jour, défi relevé), remis à zéro automatiquement au changement de date (`src/lib/daily.ts`), plus `lastCourseId` (alimenté par `CourseDetailScreen`) et `totalCardsLearned` (cumulatif). Migration douce du store bumpée en version 2.
- Sélection déterministe du contenu « du jour » (proverbe, questions du Défi) via `src/lib/daily.ts`, basée sur le jour de l'année — stable toute la journée, change chaque jour.

## Ce qui est déjà en place (Phase 4 — Geste de swipe)

- Vrai geste de glissement (drag) souris + tactile sur `SwipeCard`, via Pointer Events natifs, extrait dans un hook réutilisable `useSwipeGesture` (`src/hooks/useSwipeGesture.ts`, présentationnel, aucune dépendance au domaine ni au store) : suivi du pointeur avec rotation proportionnelle, estampilles « APPRENDRE ✓ » / « PASSER ✗ » à opacité croissante, validation au-delà de ~30 % de la largeur de la carte ou par flick rapide (envol puis `onLearn`/`onPass`), retour élastique sinon. Les boutons ✗/✓ déclenchent la même animation d'envol (`triggerCommit`). Tap (« En savoir plus », favori) distingué du drag via un seuil de mouvement de 8 px. Respecte `prefers-reduced-motion` via `useReducedMotion` (`src/hooks/useReducedMotion.ts`). Voir `docs/ARCHITECTURE.md` § Geste de swipe.

## Ce qui est déjà en place (Phase 5 — Tableau de bord de matière)

- Écran de matière (`/biblio/:categoryId`, `src/routes/CategoryScreen.tsx`, atteint depuis « Voir plus → » en Biblio) transformé en tableau de bord : carte d'en-tête (avatar emoji, nom, badge « NIVEAU X », barre de progression, « X XP · Y/Z cours faits »), onglets de filtre Tout / À faire / En cours / Terminé, liste de cours filtrée.
- **Niveau propre à la matière** (distinct du niveau/rang global) : un niveau tous les `COURSES_PER_LEVEL` (= 3, ajustable) cours **terminés** dans la matière — `niveau = floor(coursTerminés / 3) + 1`, barre de progression = avancement dans le niveau courant. Le compteur « Y/Z cours faits » et l'« X XP » affiché sont entièrement **dérivés** des cours terminés de la matière (`course.xp` sommé), rien de plus n'est stocké.
- **États de cours** : Terminé (`completedCourseIds`, existant) > En cours (commencé, pas terminé) > À faire (ni l'un ni l'autre). « Commencé » = au moins une leçon lue au-delà de la 1ʳᵉ.
- Store : `UserProgress.startedCourseIds: string[]` + action `markCourseStarted(courseId)` (idempotente), câblée dans `CourseDetailScreen` dès le passage à la 2ᵉ leçon (ou dès validation de l'unique leçon d'un cours à une seule leçon). Migration douce du store bumpée en version 3 (backfill `startedCourseIds: []`).
- Nouveau helper `src/lib/subjectProgress.ts` : `COURSES_PER_LEVEL`, `getSubjectProgress(categoryId, progress, allCourses)`, `getCourseStatus(courseId, progress)`.
- `CourseCard` : nouvelle prop optionnelle `isStarted` → badge « En cours », en complément du badge « Terminé ✓ » déjà présent.

## Ce qui est déjà en place (Phase 6 — « À la une » par leçon, rotation inter-matières)

- **Correctif Biblio** : la barre de recherche n'avait que `mb-1` (4 px) au-dessus de la pastille « ✨ À la une », qui paraissait collée/rognée. Espacement passé à `mt-5` (même rythme que les autres sections de `BiblioScreen.tsx`) ; aucun `overflow-hidden` ni marge négative n'a été trouvé en cause côté layout.
- **« À la une » est désormais une LEÇON**, pas un cours figé. Elle se lit en ligne dans la carte (dépliage, comme le « En savoir plus » des `SwipeCard` du Home) puis se valide via « J'ai terminé ». La leçon suivante vient toujours d'une **autre matière tirée au sort**, et de cette matière on prend la **prochaine leçon non lue dans l'ordre du catalogue** (`COURSES` puis `lessons`). La vedette reste stable tant qu'elle n'est pas terminée (mémorisée dans le store, pas retirée à chaque rendu).
- **Store** (`UserProgress`) : `completedLessonIds: string[]` (clés `${courseId}:${lessonId}`, `lessonId` n'étant pas unique globalement) et `featuredLessonKey: string | null`. Version de persistance bumpée à **4**, migration douce backfillant les deux (`[]` / `null`) sans casser les backfills précédents (`startedCourseIds`, `quizResults`, `daily`…).
- **`XP_PER_LESSON = 10`** (`src/lib/gamification.ts`), modeste pour ne pas écraser l'XP des cours (attribué au quiz via `completeCourse`).
- **Action `completeLesson(courseId, lessonId)`** : idempotente comme `completeCourse` (no-op si la leçon est déjà dans `completedLessonIds`), sinon ajoute la clé, crédite `XP_PER_LESSON` (recalcule niveau/rang), marque le cours « commencé » (`startedCourseIds`, sauf s'il est déjà terminé) et, **seulement si la leçon complétée est la vedette courante**, recalcule `featuredLessonKey` via `pickNextFeaturedLesson` en excluant la matière qu'on vient de quitter. Appelée à la fois par la carte « À la une » et par `CourseDetailScreen`/`LessonViewer` (à chaque passage de leçon i → i+1, et sur la dernière leçon avant le quiz) — une leçon lue n'importe où compte comme lue partout, donc jamais reproposée à la une.
- **Action `ensureFeaturedLesson()`** : appelée au montage de la Biblio (même pattern que `checkDailyReset` au montage du Home). Si `featuredLessonKey` est `null`, pointe vers une leçon déjà lue, ou est irrésolvable → recalcule via `pickNextFeaturedLesson`.
- **Helper pur `src/lib/featured.ts`** (aucun accès au store) : `lessonKey`, `getLessonRef` (résout une clé en `{ course, lesson }`), `pickNextFeaturedLesson` (matières candidates = ayant encore ≥ 1 leçon non lue ; tirage aléatoire hors matière précédente, repli sur celle-ci si c'est la seule restante ; `null` si tout est lu).
- `BiblioScreen.tsx` orchestre : résout `featuredLessonKey` en `{ course, lesson, category }`, l'affiche via le composant `FeaturedLessonCard` (repli/dépliage local, keyé par `featuredLessonKey` pour repartir replié à chaque nouvelle vedette), affiche un état de fin bienveillant (« Tu as tout parcouru 🎉 ») si `featuredLessonKey` est `null`. Les recommandations excluent désormais le cours porteur de la leçon vedette (au lieu de l'ancien cours vedette figé).

## Ce qui est déjà en place (Phase — Favoris)

- **Favoris scindés en deux listes** (`UserProgress`) : `favoriteCardIds: string[]` (cartes du fil Home) et `favoriteCourseIds: string[]` (cours de la Biblio/Collections), remplaçant l'ancien champ unique `favoriteIds`. Migration douce du store bumpée en **version 5** : `favoriteCardIds` reprend l'ancien `favoriteIds` (les favoris de cartes existants sont conservés), `favoriteCourseIds` démarre à `[]`.
- Store : action `toggleFavorite` renommée en `toggleFavoriteCard(cardId)` ; nouvelle action `toggleFavoriteCourse(courseId)`, même logique idempotente (ajout/retrait) que l'existante.
- **Cœur de `CourseCard` rendu fonctionnel** (composant de présentation, reste sans accès au store) : nouvelles props optionnelles `isFavorite?: boolean` et `onToggleFavorite?: () => void` ; l'icône `Heart` (dans les deux variantes, avec et sans image) devient un vrai `<button>` qui stoppe la propagation/prévient la navigation du `<Link>` englobant (`e.preventDefault(); e.stopPropagation()`), rempli en rouge (`text-danger`, `fill="currentColor"`) quand favori. Câblé aux 4 sites d'affichage de `CourseCard` (`BiblioScreen.tsx` ×3, `CategoryScreen.tsx` ×1) depuis `progress.favoriteCourseIds` et `toggleFavoriteCourse`.
- **Favoris du Profil en deux temps** : le Profil (`ProfilScreen.tsx`, colonne droite, sous « Ta forme de culture ») n'affiche qu'un résumé cliquable (`components/features/FavoritesSummaryCard.tsx` : icône cœur, « Mes favoris », décompte « X cours · Y cartes sauvegardés », chevron) qui ouvre la nouvelle route **`/favoris`** (`routes/FavorisScreen.tsx`). Cette page liste en pleine page le détail : groupe Cours favoris (résolus via `getCourse`, cliquables vers `/cours/:id`, cœur de retrait) et groupe Cartes favorites (résolues via `CARDS`, dépliables pour lire `card.content` comme le « En savoir plus » du Home, via le composant local `FavoriteCardItem`, marque-page de retrait). État vide accueillant si les deux listes sont vides, avec liens vers Home et Biblio.

- **« Mes quiz récents » du Profil recentré sur la dernière tentative** : n'affiche plus qu'un seul résultat (le plus récent) via le composant partagé `components/features/QuizResultCard.tsx` (titre du cours, notation en étoiles `lucide-react` `Star` — remplies jusqu'à `score`, sur `total` — et bouton « ↻ Refaire » qui renvoie vers `/cours/:courseId`). Un lien « Voir plus → » (affiché seulement s'il existe au moins un résultat) ouvre la nouvelle route **`/quiz`** (`routes/QuizHistoryScreen.tsx`), qui réutilise `QuizResultCard` pour lister l'historique complet (plafonné aux 10 tentatives conservées par le store), le plus récent en premier.

## Livraison (Phase 7, chantier 7.1 — Sécurisation et mise en ligne)

- **Dépôt** : `https://github.com/themendix/kham-kham` (branche `main`). Tout le travail en cours (correctifs d'interface, assets et contenu Géographie, documentation Phase 7) a été commité en commits thématiques séparés — voir `git log`.
- **Identité web** (`public/`) : `favicon.svg` décliné en PNG 16/32/180/192/512, `icon-maskable-512.png` (zone sûre Android), `manifest.webmanifest` (installabilité, sans service worker — le mode hors-ligne appartient au lot 5 de la Phase 7), `og-image.png` (1200×630) pour l'aperçu de partage. Balises correspondantes dans `index.html`, `og:url`/`og:image` en URLs absolues vers l'URL publique ci-dessous.
- **Logo** : la source de marque vit dans `brand/` (voir `brand/LISEZ-MOI.md`) ; **tous** les fichiers d'icônes de `public/` en sont **générés** par `npm run icons` (`scripts/generate-icons.mjs`, dépendance `sharp`) — rognage du fond blanc, mise au carré sur le fond sombre, rééchantillonnage Lanczos. Ne jamais retoucher `public/` à la main. Le même logo sert de badge dans le `TopBar` (servi depuis `/icon-192.png`). Réserve connue : la source actuelle (`brand/logos.png`, 174×175) est de faible définition — `icon-512` et `og-image` sont agrandis ; déposer une source ≥ 1024 px ou un SVG et relancer `npm run icons` suffit à tout corriger.
- **CI** : `.github/workflows/ci.yml`, déclenchée sur `push`/`pull_request` — `npm ci` → `npm run typecheck` → `npm run build`, bloquante en cas d'échec. Emplacements commentés pour `npm run validate` (chantier 7.2) et `npm test` (chantier 7.4).
- **Déploiement — Netlify choisi** (parmi Vercel/Netlify/GitHub Pages). `netlify.toml` à la racine : build `npm run build`, publish `dist`, redirect SPA (`/* → /index.html`, statut 200) pour que les routes profondes de React Router (`/cours/:id`…) fonctionnent en accès direct. Aucun changement de `vite.config.ts` requis (`base` reste `/`, pas de sous-chemin).
  - **Procédure** : sur app.netlify.com → « Add new site » → « Import an existing project » → sélectionner le repo GitHub `themendix/kham-kham` → Netlify détecte `netlify.toml` (build/publish/redirects déjà configurés) → déployer. Chaque push sur `main` redéploie automatiquement.
- **URL publique** : **https://sankofaa.netlify.app/**

## Livraison (Phase 7, chantier 7.2 — Intégrité du contenu et correction des anomalies)

- **Validateur de contenu** : `scripts/validate-content.ts`, `npm run validate` (exécuté via `tsx --tsconfig tsconfig.app.json` — nécessaire pour résoudre l'alias `@/` des fichiers `src/data/*`, que `node`/`tsc` seuls ne résolvent pas à l'exécution ; `tsx` est une **devDependency**, absente du bundle applicatif). Neuf règles contrôlées sur `COURSES`/`PARCOURS`/`CATEGORIES`/`CARDS`/`src/assets/cours/` (unicité des id, résolution des références, validité des quiz, non-vacuité des leçons, illustrations manquantes/orphelines — ces deux dernières en avertissement non bloquant). Intégré au script `build` (avant `tsc -b`) et à la CI (avant `typecheck`) : un contenu invalide bloque désormais le build. Détail complet dans `docs/ARCHITECTURE.md` § Consolidation du contenu.
- **C1 (parcours orphelin) corrigé** : `PARCOURS[2]` référençait `course-geo-grand-continent`, supprimé lors du passage de la Géographie aux 54 pays. Recomposé autour de `course-geographie-01-algerie` (le pays le plus vaste d'Afrique, à cheval Méditerranée/Sahara — cohérent avec la description existante du parcours « Du Sahara aux hubs technologiques »). Les 2 autres parcours ont été vérifiés : aucune autre référence morte.
- **C2 (échec silencieux) corrigé** : `getCourseOrWarn(id, source, { strict? })` (`src/data/courses.ts`) remplace le filtrage muet des références de cours introuvables — bruyant (`throw` en dev) pour les données éditoriales (parcours), simple avertissement console pour les références issues de `UserProgress` qui peuvent légitimement devenir obsolètes (favoris, dernier cours, historique de quiz, `courseId` de route).
- **C3 (XP de parcours) corrigé** : `UserProgress.completedParcoursIds` + fonction pure `getNewlyCompletedParcours` (`src/lib/parcoursProgress.ts`), déclenchée dans l'action `completeCourse` du store (pas au montage d'un écran) et rattrapée rétroactivement dans la migration v6 pour les parcours déjà entièrement complétés avant l'ajout de ce champ. Retour visuel : badge « ✓ Parcours terminé » sur `ParcoursCard`, écran « Parcours terminé ! 🎉 » sur `CollectionProgressCard`.
- **C4 (reprise de lecture) corrigé** : `CourseDetailScreen` initialise `lessonIndex` sur la première leçon non lue (`completedLessonIds`), repli sur `0` pour un cours déjà terminé ou si tout est lu.
- **Migration du store bumpée en version 6** (backfill `completedParcoursIds: []` + rattrapage rétroactif décrit ci-dessus), testée manuellement contre un `localStorage` v5 existant avant conclusion.

## Livraison (Phase 7, chantier 7.3 — Recalibrage de la gamification)

- **Catalogue chiffré** ⚠️ *chiffres d'époque, périmés — voir § Catalogue et outillage, chiffres de référence pour l'état actuel* (calibrage sur des chiffres, pas au jugé) : 98 cours (40 Histoire, 54 Géographie, 4 hérités Personnalités/Arts/Traditions/Actu à 1 cours chacun), 266 leçons, **7100 XP total disponible** (4440 XP de complétion de cours + 2660 XP de leçons). L'ancien plafond (1000 XP) représentait 14 % de ce total — d'où la saturation quasi immédiate du rang maximal.
- **Barème recalibré (`src/lib/gamification.ts`)** : `LEVEL_TIERS` étalé sur les 7100 XP actuels (0 / 700 / 2100 / 4250 / 7100 — Curieux / Éveillé / Initié / Sage / Gardien du savoir), « Gardien du savoir » s'atteignant exactement à 100 % du catalogue. Au-delà, `getLevelInfo` bascule sur des **niveaux numérotés sans plafond**, formule de seuil croissant indépendante de la taille du catalogue (aucun recalibrage requis si la Phase 8 ajoute du contenu). `rank` se fige sur « Gardien du savoir » une fois ce régime atteint ; les écrans affichent niveau + rang ensemble. Détail complet (table, formule, impact sur un utilisateur existant) dans `docs/ARCHITECTURE.md` § Recalibrage de la gamification.
- **Maîtrise dérivée (E2)** : `addMastery`, `MASTERY_PER_CARD`, `MASTERY_PER_COURSE` supprimés. `getMasteryByCategory` (`src/lib/subjectProgress.ts`) calcule à la lecture `cours terminés / cours de la matière` par catégorie — même principe que `getSubjectProgress`, étendu au radar du Profil et à `recommendCourses`.
- **Matières émergentes (E4)** : `isSubjectEmerging` (seuil : < 3 cours) signale honnêtement en Biblio et sur l'écran de matière (badge « 🚧 En construction ») les matières encore réduites à un seul cours, et neutralise leur bonus de découverte dans les recommandations pour éviter qu'elles ne monopolisent la mise en avant tant qu'elles ne sont pas terminées.
- **XP pondérée par leçons (E5)** : `course.xp = 20 (bonus quiz fixe) + 10 × nombre de leçons`, appliqué aux 98 cours de `src/data/courses.ts`/`courses/histoire.ts`/`courses/geographie.ts`. Une fiche Géographie (1 leçon) vaut désormais 30 XP de complétion, un cours Histoire (5 leçons) 70 XP, un cours hérité (3 leçons) 50 XP — proportionnel au contenu réel.
- **Fil Home généré depuis le catalogue (A2)** : `CARDS` (18 cartes) devient une sélection éditoriale prioritaire servie en tête du fil ; une fois épuisée, `buildHomeFeed` (`src/lib/homeFeed.ts`) puise dans les leçons du catalogue, en mutualisant `pickNextFeaturedLesson` (`src/lib/featured.ts`) plutôt que de dupliquer sa rotation par matière. Le fil devient inépuisable et ne repropose jamais une leçon déjà lue ailleurs (ni la vedette Biblio courante, exclue explicitement).
- **Convergence cartes/leçons** : `seenCardIds` (champ mort, jamais lu par l'app) supprimé. Apprendre une carte du fil Home appelle désormais `completeLesson` comme une vraie leçon, sous le pseudo-cours réservé `EDITORIAL_COURSE_ID`. `XP_PER_CARD` supprimé ; `XP_PER_LESSON = 10` est l'unique constante pour ce geste, quel que soit l'écran.
- **Migration du store bumpée en version 7** : `masteryByCategory` et `seenCardIds` explicitement retirés. L'XP déjà accumulé par un utilisateur existant n'est jamais recalculé — seuls `level`/`rank` sont recalculés une fois via les nouveaux seuils, ce qui peut faire redescendre visiblement le niveau affiché (assumé, cf. `docs/ARCHITECTURE.md`). Testée manuellement contre un blob v6 synthétique (12 cours terminés dont un parcours entier) : XP préservé, rattrapage de parcours toujours actif, aucune perte de donnée ; rejeu du blob migré vérifié idempotent.

## Livraison (Phase 7, chantier 7.4 — Filet de test)

- **Vitest** (`npm test` / `npm run test:watch`), configuré au minimum dans `vite.config.ts` (bloc `test`, `environment: "jsdom"` — seule option nécessaire au-delà du défaut, requise parce que le store `persist` lit `localStorage`, absent en environnement `node`). Aucune autre dépendance de test (pas de `@testing-library`) : ce lot ne couvre aucun rendu de composant, volontairement hors périmètre.
- **`migrate` extrait de `persist({...})`** (`src/store/useAppStore.ts`, désormais exporté) : seul refactor du lot, comportement strictement inchangé, nécessaire pour tester la migration comme fonction pure sans passer par `localStorage`/la réhydratation Zustand.
- **Tests de migration** (`src/store/useAppStore.migration.test.ts`, priorité 1) : un blob figé par version historique (v1→v6, voir table de reconstitution ci-dessous), représentatif d'un utilisateur ayant progressé (XP, cours/parcours terminés, favoris, quiz, streak, suivi quotidien), vérifiant qu'aucun champ n'est perdu, que les champs ajoutés depuis sont backfillés avec les bons défauts, que la transformation `favoriteIds` → `favoriteCardIds`/`favoriteCourseIds` et le rattrapage rétroactif de parcours (v6) sont corrects, et que le résultat est cohérent (niveau/rang recalculés via `getLevelInfo`). Cas dégradés couverts : blob absent, `null`, sans clé `progress`, `progress` vide ou partiel, et un blob de version future avec des champs non reconnus — aucun de ces cas ne lève d'exception ni ne produit un état incohérent.
  - Note : `migrate` ignore volontairement son paramètre `version` — une seule fonction, indifférente à la version d'origine du blob, ramène n'importe quelle version passée à la forme actuelle (toutes les transformations historiques étant additives et à défaut sûr, sauf le renommage v5). C'est pour ça qu'un seul jeu de tests suffit pour toute la chaîne v1→v7.
- **Tests des fonctions pures de `src/lib/`** : `gamification.test.ts` (paliers nommés, formule des niveaux ouverts, monotonie, `updateStreak` avec date injectée — même jour/jour suivant/saut/changement de semaine/année), `daily.test.ts` (déterminisme journalier, `resetDailyIfNeeded`, `pickDailyQuestions`), `featured.test.ts` (exclusion de la matière précédente, repli à une seule matière, `null` si tout lu, `excludeKeys`), `subjectProgress.test.ts` (bornes de niveau de matière, statuts, maîtrise dérivée), `recommendations.test.ts` (exclusion des cours terminés, priorité de matière, stabilité du tri, matières émergentes), `homeFeed.test.ts` (pas de doublon avec les leçons déjà lues ni avec la vedette Biblio, non-épuisement), `parcoursProgress.test.ts` (détection et idempotence de la complétion de parcours). Toutes utilisent des catalogues de cours/catégories **synthétiques** (pas le catalogue réel) pour rester découplées du contenu éditorial — seuls les tests de migration et d'idempotence du store, qui dépendent réellement du catalogue via `PARCOURS`/`COURSES`, utilisent les données réelles.
- **Tests d'idempotence du store** (`src/store/useAppStore.idempotence.test.ts`) : `completeLesson`, `completeCourse` (y compris le crédit XP de parcours), `markCourseStarted` ne créditent/n'ajoutent qu'une fois lorsqu'appelés deux fois ; `toggleFavoriteCard`/`toggleFavoriteCourse` reviennent proprement à l'état initial sur un double appel ; `recordQuizResult` ne conserve que les 10 tentatives les plus récentes.
- **ESLint** (config plate `eslint.config.js`, `typescript-eslint` recommandé + `eslint-plugin-react-refresh` (préréglage `vite`) + seulement `react-hooks/rules-of-hooks` et `react-hooks/exhaustive-deps` de `eslint-plugin-react-hooks` — le préréglage `recommended` de la v7 de ce plugin embarque les règles du React Compiler (`set-state-in-effect`, `purity`…), hors sujet pour un projet React 18 sans Compiler, et qui signalait à tort des animations intentionnelles (`LearningDoneCard`, `ProgressBar`) comme des erreurs) + `eslint-config-prettier` (désactive les règles de style qui entreraient en conflit avec Prettier). **Prettier** configuré (`.prettierrc.json`, `printWidth: 100`) mais **aucun reformatage global du dépôt n'a été appliqué** dans ce lot (163 fichiers préexistants ne respectent pas le style par défaut) — `npm run format` est disponible, à lancer volontairement dans un commit dédié si un reformatage global est souhaité.
- **CI complétée** (`.github/workflows/ci.yml`) : `npm ci` → `npm run validate` → `npm test` → `npm run typecheck` → `npm run build`, bloquante en cas d'échec de l'une des quatre étapes. (`npm run lint` a été ajouté depuis, en tête — voir § Catalogue et outillage, chiffres de référence.)
- Scripts npm ajoutés : `test`, `test:watch`, `lint`, `format`.

**Reconstitution de la chaîne de versions du store** (base des tests de migration) :

| Version | Champs ajoutés | Champs transformés/retirés | Repère |
|---|---|---|---|
| v1 | `xp`, `level`, `rank`, `streak`, `completedCourseIds`, `favoriteIds`, `seenCardIds`, `masteryByCategory`, `quizResults` | — | Phase 1 |
| v2 | `daily`, `lastCourseId`, `totalCardsLearned` | — | Phase 3 |
| v3 | `startedCourseIds` | — | Phase 5 |
| v4 | `completedLessonIds`, `featuredLessonKey` | — | Phase 6 |
| v5 | `favoriteCourseIds` (nouveau, `[]`) | `favoriteIds` → `favoriteCardIds` | Phase 7.chantier Favoris |
| v6 | `completedParcoursIds` | Rattrapage rétroactif de l'XP des parcours déjà complets | Phase 7.2 |
| v7 | — | `masteryByCategory` et `seenCardIds` supprimés ; `level`/`rank` recalculés | Phase 7.3 |
| v8 (actuelle) | `quizGame` (cauris, révision par question, records par territoire, parties jouées) | — | Phase 9.1 |

## Livraison (Phase 7, chantier 7.5 — Passage à l'échelle et performance)

Catalogue à 94 cours devenu difficile à naviguer (recherche sourde aux accents, écran de matière
montant 54 cartes d'un bloc) et bundle JS unique (641 Ko) incompatible avec la cible (mobile,
réseau contraint). Détail complet dans `docs/ARCHITECTURE.md` § Passage à l'échelle et
performance ; corrections de contraste dans `docs/DESIGN-SYSTEM.md`.

- **Navigation (M1-M3)** : recherche insensible aux accents et étendue à la description/au
  contenu des leçons (`src/lib/search.ts`), avec indication d'où la correspondance a été
  trouvée ; écran de matière trié alphabétiquement, sous-groupé par région pour la Géographie
  (`src/lib/geographieRegions.ts`), avec affichage progressif (« Voir plus ») ; index A-Z dédié
  pour la Géographie.
- **Découpage du bundle (P1)** : index léger de métadonnées, généré au build
  (`scripts/generate-course-index.ts`, `npm run gen:index` → `src/data/coursesIndex.generated.ts`,
  **à régénérer après toute modification du catalogue**), chargé d'emblée ; contenu complet
  (leçons/quiz) chargé à la demande par matière (`src/data/courseContent.ts`, dynamic `import()`).
  Le store (`useAppStore`) ne dépend plus que de l'index léger — c'est ce qui a débloqué le
  découpage sans casser la rotation « à la une ». Routes en `React.lazy`. **Ne jamais importer
  `src/data/courses.ts` (catalogue complet) depuis le code applicatif** — seuls les scripts de
  build et le validateur s'en servent ; utiliser `COURSE_INDEX`
  (`@/data/coursesIndex.generated`) et `src/data/courseContent.ts`. Résultat : chunk d'entrée
  641 → 257 Ko (gzip 182 → 81 Ko).
- **Images (P2)** : variantes `-400w`/`-800w` générées à côté de chaque illustration
  (`scripts/generate-image-variants.mjs`, `npm run images:variants`, à relancer après ajout
  d'une illustration) ; `CourseCard` sert un `srcset`. Le fichier pleine résolution n'est jamais
  copié dans `dist/`.
- **PWA hors ligne (P4)** : `vite-plugin-pwa`, précache du shell + des chunks de matière,
  illustrations mises en cache au fil de l'eau (déjà vues seulement), mise à jour explicite
  (bandeau, jamais de rechargement silencieux — perdrait un quiz en cours).
- **Polices (P5)** : auto-hébergées (`src/assets/fonts/`), CDN Google retiré, préchargées,
  `font-display: optional`.
- **Accessibilité** : deux tokens de texte secondaire (`--color-ink-muted`, `--color-ink-faint`)
  et `--color-primary-text` remplacent des couleurs codées en dur qui échouaient le contraste AA ;
  focus clavier global et cohérent (`:focus-visible`) ; alternative clavier au swipe annoncée à
  l'écran ; ARIA du quiz (`radiogroup`/`radio`, résultat annoncé via `aria-live`) ; chaque écran a
  désormais un `<h1>` ; `robots.txt` ajouté.
- **Mesuré** (Lighthouse mobile, build de prod) : Accessibilité 95→**100**, Bonnes pratiques
  100→**100**, SEO 91→**100**, Performance 74→**~79-80** (mesures répétées, environnement de
  développement bruyant — voir le rapport de fin de lot pour le détail et les limites de cette
  mesure). Aucune régression : 102 tests toujours verts, `npm run validate` toujours propre.

## Livraison (chantier Géographie — passage à 3 leçons par cours)

Anomalie de format corrigée : les 54 cours de Géographie, réduits à une seule leçon monobloc de
7 rubriques, passaient directement de « À faire » à « Terminé » sans jamais connaître l'état
« En cours », et faisaient avaler 7 rubriques d'un bloc — alors que l'Histoire a 5 leçons par
cours. Détail complet (table des chiffres, seuils, impact utilisateur) dans
`docs/ARCHITECTURE.md` § *Recalibrage de la gamification* (sous-section « Second recalibrage »).

- **Découpage en 3 leçons** (`src/data/courses/geographie.ts`) : Le territoire (rubriques
  1 Situation territoriale + 2 Le milieu), Population et société (3 Population + 4 Société),
  Économie, politique et repères (5 Économie et ressources + 6 Institutions et politique +
  7 Repères et singularités). Sous-titres `#### N. Titre` renumérotés de 1 à n à l'intérieur de
  chaque leçon. Chaque leçon a été **enrichie** (paragraphes supplémentaires factuels — cadre
  administratif, urbanisation, indépendance/organisations régionales…), pas simplement
  recopiée-collée, pour que les 3 leçons d'un même cours restent d'un volume comparable
  (4-5 paragraphes chacune) plutôt que 2-3 paragraphes bruts.
- **Identifiants de leçon** : la leçon 1 de chaque cours **conserve** son id d'origine
  (`course-geographie-NN-pays-lesson-1`) — c'est la clé `${courseId}:${lessonId}` déjà présente
  dans le `localStorage` des utilisateurs ayant lu la fiche ; les leçons 2 et 3
  (`-lesson-2`/`-lesson-3`) sont nouvelles et apparaissent non lues, comportement voulu. `id`,
  `categoryId`, `emoji`, `description` et les 5 questions de quiz par cours (mêmes ids, même
  contenu) sont strictement inchangés.
- **XP recalculée** : `course.xp` passe de 30 à **50** pour les 54 cours (règle mécanique déjà
  en place, chantier 7.3 : `20 + 10 × nombre de leçons`).
- **Gamification recalibrée** ⚠️ *barème d'époque, recalibré depuis (Phase 8) — voir § Catalogue et outillage* (`src/lib/gamification.ts`) : `LEVEL_TIERS` (0/900/2750/5550/9260,
  contre 0/700/2100/4250/7100) et `OPEN_LEVEL_STEP` (700→900), en conservant les proportions du
  barème précédent — XP total du catalogue passé de 7100 à **9260** (374 leçons contre 266).
  Aucun changement de schéma de `UserProgress` : version de persistance toujours à **7**, aucune
  migration ajoutée. `gamification.test.ts` mis à jour (seuils en dur, échantillons de
  progression monotone).
- **Aucun changement** côté `getSubjectProgress`/`getMasteryByCategory`/niveau de matière
  (toujours basés sur `completedCourseIds`, jamais sur le nombre de leçons), côté Histoire, ni
  côté matières émergentes.
- Périmètre volontairement limité à la Géographie et à la gamification — pas de contenu Phase 8.

## Livraison (chantier Refonte des écrans de fin de cours)

La séquence de fin de cours (Phase 7) a été entièrement refondue : structure, rythme vertical et
hiérarchie typographique repris d'une application de référence, mais couleurs/contours/ombres/
polices restant strictement ceux du design system néo-brutaliste de Sankofa. Aucune migration du
store (version de persistance toujours **7**). Détail complet dans `docs/ARCHITECTURE.md` §
Séquence de fin de cours.

- **Segment de célébration (1 à 3 écrans) + queue conditionnelle**, au lieu de l'ancienne chaîne
  figée `learningDone → quiz → collection → streak` : « Apprentissage terminé ! » (toujours) →
  « Niveau supérieur ! » (nouveau, seulement si le **niveau de matière** vient de monter — distinct
  du rang/niveau global, resté en pastilles sur l'écran 1) → « Collection avancée ! » (seulement
  si le cours appartient à un parcours) → quiz optionnel avec **écran de résultat** (nouveau,
  n'existait pas) → streak (seulement si la série a réellement progressé aujourd'hui, plus
  affichée systématiquement). Logique d'enchaînement extraite en module pur testé
  (`src/lib/outroSequence.ts`, `buildCelebrationSegment`/`resolveOutroTail`).
- **Le dernier écran de célébration porte toujours le carrefour de décision** (`Passer au quiz →`
  / `Retour à l'accueil`) : sauter le quiz ne veut plus dire sortir immédiatement — si la série
  progresse, l'écran streak s'affiche quand même avant le retour à l'accueil. Seul chemin sans
  écran de clôture : quiz sauté **et** série déjà validée aujourd'hui.
- Nouveaux composants présentationnels : `OutroLayout` (mise en page plein écran commune, pied de
  page à boutons pleine largeur), `LevelUpCard` (écran « Niveau supérieur ! »), `QuizOutcomeCard`
  (écran de résultat du quiz). `LearningDoneCard`, `CollectionProgressCard`, `StreakCelebration`
  refondus visuellement (vignette carrée pour la première, bandeau 16:9 + chemin de pastilles pour
  la deuxième) ; la machine à états `LevelUpStage` de l'ancien `LearningDoneCard` (~60 lignes,
  simulait la montée de niveau dans cet écran) est supprimée, remplacée par l'écran dédié.
- `Button` gagne `size?: "md" | "lg"` (rendu par défaut inchangé) pour la pilule pleine largeur du
  pied de page de la séquence. `OBJECT_POSITION` (recadrage `object-position` d'une illustration
  de cours) déplacé de `CourseCard.tsx` vers `src/lib/courseImages.ts` pour être partagé avec
  `LearningDoneCard`.
- Bouton « Retour » toujours visible : un `window.scrollTo({ top: 0 })` à chaque changement
  d'écran de la séquence corrige un défaut réel trouvé en vérification navigateur (le scroll
  résiduel d'une leçon longue pouvait le masquer).
- Vérifié en navigateur (Playwright piloté manuellement, pas de nouvelle dépendance projet) : les
  8 combinaisons niveau/collection/quiz/streak du cahier des charges, plus la révision, plus la
  vignette carrée sur 9 cours répartis Histoire/Géographie/Personnalités (dont les pays à drapeau
  cadré à gauche) ; navigation clavier et `prefers-reduced-motion` vérifiés sans régression.

## Catalogue et outillage — chiffres de référence (au 25/08/2026)

Les chiffres cités dans les sections de livraison ci-dessus sont ceux **de leur époque**. Cette
section est la seule à faire foi sur l'état courant ; la remettre à jour après tout chantier de
contenu.

| Matière | Cours |
|---|---|
| Géographie | 54 |
| Histoire | 40 |
| Personnalités | 31 |
| Découverte | 11 |
| **Total** | **136** |

**572 leçons**, **680 questions de quiz**. **17 960 XP disponibles au total** : 8 520 de
complétion de cours + 5 720 de leçons (`XP_PER_LESSON = 10`) + 3 400 du module Quiz
(`XP_PER_QUESTION_LEARNED = 5`, à la 2ᵉ réussite) + 400 de parcours. C'est ce total qui calibre
`LEVEL_TIERS` — inchangé depuis le retrait des cartes éditoriales, dont la perte a été compensée
exactement par l'enrichissement des 4 cours hérités.

Découverte compte 11 cours, tous à **5 leçons** (`xp: 70`) : les 3 cours hérités ont rejoint ce
format en Phase 9. Seules les 54 fiches Géographie s'en écartent (3 leçons, 5 questions), ce qui
est leur format voulu.

> `LEVEL_TIERS` a été recalibré en Phase 9 sur 17 960 XP (module Quiz compris). À revoir
> consciemment à chaque ajout notable de contenu — les lots 2 à 4 de Découverte le nécessiteront.

- **Barème en vigueur** (`src/lib/gamification.ts`) : `LEVEL_TIERS` = 0 / 1 700 / 5 350 / 10 750 /
  17 960 (Curieux / Éveillé / Initié / Sage / Gardien du savoir), `OPEN_LEVEL_STEP = 1700`,
  recalibré en Phase 9 sur les 17 960 XP réellement disponibles (module Quiz compris). Le
  dernier rang nommé est fixé exactement au total du catalogue — **à recalibrer consciemment à
  chaque ajout notable de contenu**, sans quoi il devient atteignable avant d'avoir tout terminé.
  Le recalibrage ne touche pas au schéma de `UserProgress` (version de persistance **8** depuis le
  module Quiz) : l'XP acquise n'est jamais recalculée, seuls `level` et `rank` le sont.
- **Phase 8, chantier Personnalités** : `src/data/courses/personnalites.ts` (31 cours, ~150
  leçons), sorti du lot « matières émergentes ».
- **Fusion en « Découverte »** : les 3 matières restantes à 1 cours (Arts & Musique,
  Traditions & Sociétés, Afrique contemporaine) ont été fusionnées en une seule matière
  transversale `decouverte` (« Découverte », ✨, turquoise). Voir la section dédiée plus bas.
- **Charte des leçons** (`docs/CHARTE-LECONS.md`) : les leçons ne sont plus du Markdown libre mais
  des **blocs typés** (`src/lib/lessonBlocks.ts` : `paragraphe`, `aRetenir`, `leSavaisTu`,
  `chiffreCle`, `image`…), rendus par `src/components/features/LessonBlocks.tsx` et contrôlés par
  les règles 11 à 18 du validateur. Activation **progressive** par matière via `CHARTE_APPLIQUEE`
  (`scripts/validate-content.ts`), aujourd'hui `["histoire", "geo"]`.
- **État de santé mesuré** (au 26/08/2026) : `npm test` **233 tests / 18 fichiers** verts ·
  `npm run typecheck` propre · `npm run lint` propre · `npm run validate` **0 erreur**,
  **130 avertissements** (non bloquants : densité de gras, budget de mots, 4 cours sans
  illustration, 286 questions sans leçon rattachée) · `npm run gen:index` et `npm run gen:quiz`
  sans diff (index à jour) · `npm run build` propre.
  Note : les « 121 avertissements » cités précédemment étaient périmés — le chiffre réel sur
  `HEAD` avant ce chantier était déjà 129.
- **CI en vigueur** : `npm ci` → **vérification de fraîcheur des index générés** → `npm run lint`
  → `npm run validate` → `npm test` → `npm run typecheck` → `npm run build`, bloquante à chaque
  étape. Le garde-fou de fraîcheur existe parce que les tests et le typecheck tournent *avant* le
  build, donc sur les index commités : sans lui, un catalogue modifié sans régénération serait
  validé contre un index périmé.

## Livraison (Phase 8 — Fusion des matières résiduelles en « Découverte »)

Les 3 matières bloquées à 1 cours (Arts & Musique, Traditions & Sociétés, Afrique
contemporaine) ont été fusionnées en une matière transversale unique : **`decouverte`**,
« Découverte », emoji ✨, couleur turquoise `#a9e0de`.

- **Décision éditoriale assumée** : Découverte est un fourre-tout *revendiqué*, pas un
  reliquat. Le nom annonce l'hétérogénéité au lieu de la masquer — c'est ce qui rend le
  regroupement tenable là où un « Cultures & sociétés » aurait menti sur son contenu. La
  contrepartie : **le nom de la matière ne porte plus le sujet, ce sont les titres de cours
  qui doivent le faire**. À tenir sur tout ajout futur.
- **Effet mécanique immédiat** : 3 cours ≥ `EMERGING_SUBJECT_MAX_COURSES` (= 3), donc
  `isSubjectEmerging` est faux — les 3 badges « 🚧 En construction » disparaissent et le bonus
  de découverte des recommandations se réactive, sans une ligne de contenu ajoutée. Le
  déséquilibre de fond (125 cours contre 3) n'est pas résolu pour autant : c'est l'objet des
  lots de contenu à venir.
- **Aucune migration du store, version de persistance toujours 7.** `UserProgress` ne stocke
  aucun `categoryId` (depuis la v7, `masteryByCategory` est supprimé et la maîtrise est dérivée
  à la lecture via `getMasteryByCategory`). Changer la catégorie d'un cours n'invalide donc
  rien dans le `localStorage` existant.
- **Les identifiants de cours et de leçon sont volontairement inchangés**
  (`course-arts-rythmes-continent`, `lesson-trad-griots`, `quiz-actu-1`…) : ce sont des clés
  de `localStorage`, et les renommer par cohérence effacerait la progression réelle des
  utilisateurs pour un gain purement cosmétique. Les préfixes `arts`/`trad`/`actu` survivent
  donc dans les ids sans correspondre à aucune matière — c'est voulu, pas un oubli.
- **Points de contact** : `types/index.ts` (`SubjectColor`, 6 → 4 clés), `data/categories.ts`,
  `data/courses/misc.ts` (3 `categoryId`), `data/cards.ts` (9 cartes du fil Home),
  `lib/subjectStyles.ts`, `styles/index.css`, `routes/DailyChallengeScreen.tsx`. Index
  régénéré (`npm run gen:index`). `data/parcours.ts` n'a rien nécessité : les parcours
  référencent des `courseIds`, jamais des catégories.
- **Deux tokens de couleur séparés** : `--color-decouverte` (#a9e0de) est réservé à la
  matière ; `--color-accent-rose` (#f6c2d0, l'ancien `--color-arts`) est un accent purement
  décoratif, utilisé par `FavoritesSummaryCard` et une `StatCard` du Profil sans rapport avec
  une matière. La confusion des deux usages sur un même token était préexistante.
- **Conséquences visuelles à surveiller** : le radar du Profil passe de 6 axes (hexagone) à 4
  (losange) ; Découverte porte 9 cartes du fil Home contre 3 par autre matière ; et sa
  rotation « à la une » s'épuisera vite tant qu'elle n'a que 9 leçons
  (`pickNextFeaturedLesson` exclut les matières entièrement lues).
- **Découverte comme pépinière** : une famille de cours qui y atteint une masse critique
  (par exemple « Arts & création ») pourra en ressortir comme matière autonome — un
  `categoryId` ne coûte rien à changer, ce chantier vient de le démontrer.

## Livraison (Phase 8 — Découverte, lot 1 : Arts & création)

Premier des 4 lots portant Découverte de 3 à 30 cours. **8 cours neufs** (24 leçons,
40 questions de quiz), tous écrits directement sous la charte (`docs/CHARTE-LECONS.md`) :
Masques et sculptures · Tissus et parures · Architectures de terre · La photographie
africaine · Le cinéma d'auteur africain · Littératures africaines · Danses et corps en
mouvement · Mode et création contemporaine.

- **Les 3 cours hérités ont été réécrits dans le même mouvement.** Ils étaient encore au
  format d'avant la charte (une leçon = un unique bloc paragraphe), ce qui produisait
  30 erreurs de validation et aurait laissé 3 cours sur 11 visiblement en décalage dans la
  matière. Leurs **identifiants de cours, de leçon et de quiz sont inchangés**, ainsi que les
  questions de quiz : seuls les blocs de leçon et les titres de leçon ont été refaits.
- **`"decouverte"` ajouté à `CHARTE_APPLIQUEE`** : les règles 11 à 18 contrôlent désormais
  toute la matière, qui passe à **0 erreur**. Les seuls avertissements restants la concernant
  sont les 11 illustrations manquantes.
- **Prérequis fait avant d'écrire** : `misc.ts` renommé `decouverte.ts` et sorti du bundle du
  shell vers un chunk chargé à la demande (commit séparé). À 30 cours il aurait pesé ~110 Ko
  dans le chunk d'entrée.
- **Structure finale : 5 leçons par cours** (comme Histoire et Personnalités), donc `xp: 70`
  selon la règle `20 + 10 × leçons`. Les 3 cours hérités restent à 3 leçons sur décision
  explicite. Chaque leçon porte un thème autonome — nécessaire parce qu'une leçon est servie
  seule dans le fil Home et en vedette Biblio, hors du contexte de son cours.
- **Quiz : 5 questions, une par leçon** (même ratio qu'Histoire), refaits pour couvrir les
  leçons 4 et 5.
- **Titres explicites, pas des accroches.** Première version corrigée : « Ce que Picasso a
  vu » → « Les sculptures africaines et les peintres de Paris ». Un titre allusif ne dit pas
  son sujet quand la leçon apparaît seule dans un fil.
- **Trois règles de narration**, appliquées après un retour utilisateur sur la difficulté de
  lecture, et à tenir pour les lots suivants : (1) nommer le lieu, la personne ou l'objet dans
  la première phrase ; (2) une idée par phrase, aucune incise entre sujet et verbe ; (3) aucune
  construction « ce n'est pas X, c'est Y » — elle oblige à se représenter une idée fausse avant
  de la remplacer, et revenait dans presque toutes les leçons.
- **Contenu sourcé.** Les faits ont été vérifiés en ligne (recherche web) avant écriture, ce qui
  a corrigé trois erreurs réelles : le FESPACO date de 1972 et non 1969 (1969 = Semaine du
  cinéma africain) ; « premier long métrage subsaharien » pour La Noire de… est une formule
  contestable, remplacée par « premier long métrage de Sembène » ; et la dette du cubisme
  envers les sculptures africaines est un débat rouvert, pas un fait établi. Sources
  principales : UNESCO, Met Museum, Quai Branly, Smithsonian, Smarthistory, Persée, The Art
  Newspaper, RFI, Harvard Film Archive.
- **Ton calé sur Histoire et Géographie** : chaque leçon suit le squelette accroche →
  `chiffreCle`/`frise`/`reperes` → paragraphe de substance → `aRetenir`, avec `leSavaisTu`
  en clôture quand il y a une anecdote qui le mérite. La première phrase est un hameçon, pas
  une définition.

## Images des leçons (bloc `image`)

Distinct des bannières de cours (`src/assets/cours/`, illustrations **générées par IA** via
`npm run images:generate`) : il s'agit ici de **vraies photographies documentaires** affichées
dans le corps d'une leçon. **`docs/IMAGES-LECONS.md` fait foi** — règles de licence, convention
de nommage, procédure d'ajout, registre des images et liste de ce qui ne peut pas être illustré.

- Le bloc `image` existait dans le type depuis la charte mais n'était **ni utilisé ni rendu**
  (un rectangle vide). Le rendu réel est en place : `<img>` avec `srcset` 400w/800w, `alt`,
  chargement paresseux, **ratio naturel jamais recadré** (`object-contain`, hauteur plafonnée)
  et bande de légende/crédit **à l'intérieur du cadre**, séparée par une bordure — même famille
  visuelle que les autres blocs.
- Résolution **par convention de nommage** (`src/lib/lessonImages.ts`, calqué sur
  `courseImages.ts`) : `src/assets/lecons/<id de leçon>.webp`. Le fichier n'est jamais
  référencé dans les données. Repli propre sur le cadre vide si le fichier manque.
- `LessonBlocks` gagne une prop `imageKey` (id de leçon, ou id de carte pour le fil Home),
  câblée aux 4 sites d'affichage.
- `npm run images:variants` couvre désormais les deux dossiers et tolère l'absence de
  `src/assets/lecons/`.
- **Une image abaisse le budget de mots de 90-140 à 70-110** (règle 11, déjà en place) : toute
  leçon illustrée doit être raccourcie d'environ un quart, `alt` compris dans le décompte.
- **Règle de travail permanente** (`docs/IMAGES-LECONS.md` § 0) : pour toute leçon conçue ou
  réécrite, **chercher systématiquement une image**. Si elle existe et sert la leçon, l'ajouter
  sans demander ; si rien d'utilisable n'existe, le dire explicitement. « Sert la leçon » = elle
  montre le sujet, pas seulement le lieu.
- **14 images en place** : 4 objets du Met en CC0, 10 fichiers Wikimedia Commons (CC0, CC BY,
  CC BY-SA ou domaine public). Registre complet dans `docs/IMAGES-LECONS.md`.

## Livraison (Phase 9 — Module Quiz, lot 1 : socle de données)

L'onglet Collections sera remplacé par un module Quiz conçu comme un jeu. **Ce lot ne livre aucune
interface** : il pose les données, le contenu et la progression sur lesquels s'appuieront les lots
suivants. Détail complet dans `docs/ARCHITECTURE.md` § Module Quiz.

- **Pourquoi remplacer Collections** : 3 parcours de 2 cours, soit 6 cours sur 136 (4,4 % du
  catalogue) pour un quart de la barre de navigation. Surtout, l'app savait faire lire mais **rien
  ne faisait revenir sur ce qui avait été lu** — le module Quiz est d'abord la couche de rétention
  manquante, sa forme de jeu est le moyen.
- **Décisions de design arrêtées** : jeu **solo contre soi** (pas de back-end, donc pas de
  multijoueur ni de classement — records personnels, Blitz chronométré et Survie à 3 vies) ;
  **conquête = maîtrise + étoiles** (la maîtrise colore le territoire, les étoiles récompensent la
  performance) ; **parcours absorbés** dans le meta-game plutôt que supprimés (le store,
  `ParcoursCard` et l'écran « Collection avancée ! » restent utiles) ; **Défi du jour absorbé**,
  la carte du Home devenant un raccourci vers le module.
- **Territoires** (`src/lib/territories.ts`) : 5 régions (celles de `geographieRegions.ts`) plus
  une zone transversale, **Le Baobab**, qui recueille le panafricain, la diaspora et Découverte.
  Un territoire mélange les 4 matières — ce que les parcours promettaient sans le tenir.
  Rattachement dérivé pour la Géographie, déclaré pour les 82 autres cours dans
  `src/data/courseTerritories.ts` (tableau vide = transversal). Le Baobab compte **96 questions**,
  pas les 52 de Découverte qu'on craignait.
- **Index de questions** (`src/data/quizIndex.generated.ts`, `npm run gen:quiz`, **à régénérer
  après toute modification des quiz**) : 676 questions chargées seules, sans le texte des
  564 leçons que `courseContent.ts` aurait tiré à chaque ouverture de l'onglet.
- **Tout le catalogue servi d'emblée, et l'échec comme porte d'entrée** : se tromper déplie la
  leçon **sur place** dans la correction (jamais d'éjection vers `/cours/:id`, qui détruirait une
  partie chronométrée), et l'écran de fin liste toutes les leçons des questions ratées. Le quiz
  devient la porte d'entrée du catalogue.
- **Rattachement question → leçon** : 78 cours sont alignés (autant de questions que de leçons) et
  se dérivent par position ; les 58 autres — 54 fiches Géographie (3 leçons / 5 questions) et
  4 cours hérités — se déclarent dans `src/data/quizLessonMap.ts`. **390/676 rattachées**, les 286
  restantes dans un lot dédié ; sans rattachement le module renvoie vers le cours, jamais d'erreur.
- **Révision espacée** (`src/lib/quizReview.ts`) : boîtes de Leitner, rappel à J+1 / J+3 / J+7 puis
  acquise, retour au palier 0 à chaque échec. **Jamais nommée « révision » dans l'interface.**
- **Économie** : `XP_PER_QUESTION_LEARNED = 5` créditée à la **deuxième** réussite d'une question —
  pas la première, qui sur 4 options tombe une fois sur quatre par hasard et rendrait le stock
  farmable à l'aveugle. Les **cauris** sont la monnaie de jeu, sans effet sur le niveau ni le rang.
- **Store v8** : `UserProgress.quizGame` ajouté, backfillé champ par champ (`normalizeQuizGame`)
  pour qu'un blob partiel conserve ce qui est lisible. Actions `recordQuizAnswer` et
  `finishQuizGame`. Couverture de migration v7→v8 et v8→v8 ajoutée.
- **Validateur** : règles **20** (unicité globale des id de question — la règle 3 ne la garantissait
  que par quiz), **21** (rattachement territorial) et **22** (rattachement question → leçon).
- **CI** : garde-fou de fraîcheur des index générés, ajouté parce que `npm test` et
  `npm run typecheck` tournent avant `npm run build` et lisent donc les index commités.

## Livraison (Phase 9 — Module Quiz, lot 2 : moteur de partie)

Le module devient jouable, **toujours hors navigation** : routes `/jeu` (choix du territoire) et
`/jeu/:territoryId/:mode` (une partie). `/quiz` restant l'historique de quiz du Profil, le module
vit sur `/jeu`. Détail complet dans `docs/ARCHITECTURE.md` § Module Quiz (lot 2).

- **Deux modes** (`src/lib/quizGame.ts`, pur et testé) : **Blitz** (60 s, bonus de vitesse) et
  **Survie** (3 vies, bonus de vies restantes). Score = bonnes réponses dans les deux cas, donc
  comparable.
- **Le chronomètre du Blitz se met en pause pendant la correction.** Sans ça, lire la leçon d'une
  question ratée coûterait du temps de jeu et les joueurs apprendraient à ignorer les leçons —
  exactement l'inverse du but du module.
- **Aucune question n'est jamais exclue** : `buildGameQuestions` ne change que l'**ordre**. Blitz
  ouvre sur les questions dues puis part en découverte ; Survie monte en difficulté (acquis, puis
  dues, puis découverte).
- **`LessonReveal`** déplie la leçon sur place, charge le contenu **au clic seulement** et ne tire
  que le chunk de sa matière. Repli sur un lien vers le cours pour les 286 questions pas encore
  rattachées.
- **`QuizOptions` extrait de `QuizPlayer`** et partagé avec le moteur de partie : les règles
  d'accessibilité et le code couleur des réponses ne sont plus entretenus qu'à un seul endroit.
- **Poids maîtrisé** : l'écran de sélection n'importait l'index complet que pour afficher six
  compteurs (82 Ko gzip). Le générateur émet désormais `src/data/quizKeys.generated.ts` (clés par
  territoire) — sélection **5,6 Ko gzip**, partie 84,8 Ko, chunk d'entrée inchangé.
- **Vérifié en navigateur** (Playwright piloté manuellement, installé hors du dépôt — aucune
  dépendance ajoutée) : les deux modes de bout en bout, pause du chronomètre, chargement de la
  leçon sans quitter la partie, vies 3 → 2 → 1 → 0, écran de fin, persistance v8 (cauris, record,
  échéances de révision), et absence de fuite de la bonne réponse dans les `aria-label`. Zéro
  erreur console.
- **Défaut corrigé en cours de route** : la meilleure série était calculée par un `setBestStreak`
  appelé depuis l'updater de `setStreak` — un effet de bord que React peut rejouer en StrictMode,
  ce qui aurait faussé le bonus de cauris.
- **Jouer met à jour la série** (`updateStreak`) ; le reste du suivi quotidien sera branché au
  lot 3 avec l'absorption du Défi du jour.

## Livraison (Phase 9 — Module Quiz, lot 3 : révision et absorption du Défi du jour)

Le module devient le seul endroit où l'on répond à un quiz hors d'un cours. Toujours hors
navigation (lot 4). Détail complet dans `docs/ARCHITECTURE.md` § Module Quiz (lot 3).

- **Défi du jour absorbé** : `DailyChallengeScreen` supprimé, le défi devient `/jeu/defi`, une
  partie du module. **5 questions** au lieu de 3, **les questions dues en priorité** complétées par
  un tirage déterministe du jour — l'ancien défi ignorait totalement ce que l'utilisateur avait
  raté. Stable sur la journée mais personnalisé : deux utilisateurs n'ont pas les mêmes dues.
- **`/defi` reste en redirection** vers `/jeu/defi` (favori, PWA installée). La carte du Home
  devient un raccourci : le Home garde son point d'entrée quotidien, le quiz ne vit plus qu'à un
  seul endroit.
- **Gain de chargement** : l'ancien écran tirait le contenu complet des quatre matières (le texte
  de 564 leçons) uniquement pour atteindre leurs quiz. Le nouveau n'a besoin que de l'index.
- **`QuizPlayMode = QuizGameMode | "defi"`** : le défi ne se joue sur aucun territoire, il ne doit
  donc pas ouvrir une case de record. `finishQuizGame` prend désormais un champ `record` nullable
  (`{ territoryId, mode, score } | null`) plutôt que trois paramètres qu'un appelant devrait
  inventer. Côté cauris, `defi` n'a ni bonus de vitesse ni bonus de vies — il n'a ni chrono ni vies.
- **Suivi quotidien** : l'XP gagnée en jouant alimente `daily.xpEarned`, traité **dans**
  `recordQuizAnswer` parce que seul le store sait si une réponse a crédité de l'XP (deuxième
  réussite). Le compteur de cartes du jour n'est pas touché : une question de quiz n'est pas une
  carte apprise, et gonfler l'objectif du Home en jouant le viderait de son sens.
- **Vérifié en navigateur** sur un `localStorage` semé (une question due, une acquise) : la
  question due remonte en tête du Défi **et** du Blitz de son territoire, s'affiche dans les
  compteurs « à revoir », tandis que la **Survie amorce bien sur la question acquise** — la montée
  en difficulté du mode est effective. Redirection `/defi`, tirage stable au rechargement, écran
  « Défi relevé ! » (＋30 XP, cauris, pas de « Rejouer »), refus d'un second passage le même jour,
  persistance complète. Zéro erreur console.

## Livraison (Phase 9 — Module Quiz, lot 4 : carte de conquête, Collections remplacé)

Le module prend la place de Collections dans la navigation (`BottomNav`, `Sidebar`, icône
`Swords`). Détail complet dans `docs/ARCHITECTURE.md` § Module Quiz (lot 4).

- **Vraie carte de l'Afrique** générée depuis **Natural Earth** (domaine public) par
  `scripts/generate-africa-map.mjs` → `npm run gen:map` → `src/data/africaMap.generated.ts`
  (53 pays, 39 Ko de chemins SVG). Le script télécharge la source lui-même : aucune dépendance
  ajoutée, aucun fichier de 3 Mo commité. **Hors du `build` et de la CI** — la géographie de
  l'Afrique ne change pas à chaque commit.
- **Projection azimutale équivalente de Lambert**, pas Mercator. Décision éditoriale : Mercator
  étire l'Afrique d'environ 30 % et minore sa taille réelle — la distorsion que la critique
  panafricaine dénonce de longue date. Une application qui enseigne l'histoire africaine ne peut
  pas la dessiner dans la projection qui la déforme.
- **Cadrage** : les dépendances lointaines sont écartées du tracé (`MAP_BOUNDS`) — Natural Earth
  rattache à l'Afrique du Sud les îles du Prince-Édouard, à 46° S, ce qui laissait un grand vide
  sous la carte. Cadre passé de 800 × 998 à 800 × 856, le rapport réel du continent. Cap-Vert,
  Maurice et Seychelles ne sont pas dessinés (trop au large) mais restent dans leur territoire.
- **Teintes de la palette existante** (or, terre, vert savane, indigo, flamme) : la teinte dit le
  territoire, l'opacité dit la maîtrise. **Aucun token ajouté.** Plancher d'opacité volontairement
  haut (0,32) : en dessous, les cinq teintes se ressemblent et la carte ne dit plus *quel*
  territoire on regarde.
- **Conquête à deux axes** (`src/lib/conquest.ts`, pur) : la **maîtrise** (questions acquises /
  total) colore le territoire ; **trois étoiles indépendantes** (entamé · record de 12 · 80 % de
  maîtrise) récompensent l'engagement et la performance. Une seule note aurait forcé à choisir
  entre récompenser le savoir et récompenser l'adresse.
- **Parcours absorbés** : `CollectionsScreen` supprimé, `/collections` en redirection vers `/jeu`,
  et les 3 parcours deviennent la section **« Quêtes »** de l'écran du module, rendue par le même
  `ParcoursCard`. `completedParcoursIds` et l'écran « Collection avancée ! » de la fin de cours
  fonctionnent sans modification — c'est pourquoi l'absorption avait été préférée à la suppression.
- **Poids** : `JeuScreen` passe de 6,1 à 22,9 Ko gzip (la carte pèse ~12 Ko gzip), chunk d'entrée
  inchangé à 84,6 Ko gzip.
- **Vérifié en navigateur**, desktop et mobile, captures relues à chaque itération du tracé — c'est
  ainsi que le vide sous la carte et la confusion des teintes ont été trouvés. Sur un état semé
  (tout le Nord acquis, record de 14), le Nord affiche 3 étoiles et 100 % de maîtrise, l'Ouest 1
  étoile : une question rattachée à deux territoires compte dans les deux, conséquence assumée du
  multi-territoire.

## Livraison (Phase 9 — Module Quiz, lot 5 : soin visuel)

Dernier lot du module. Détail complet dans `docs/ARCHITECTURE.md` § Module Quiz (lot 5).

- **Six animations** ajoutées au design system (`src/styles/index.css`), toutes préfixées
  `sankofa-` dans la continuité de `sankofa-pop` : secousse sur mauvaise réponse, respiration sur
  bonne réponse, alerte du chronomètre dans les 10 dernières secondes, cœur de la vie perdue,
  entrée en cascade de l'écran de fin, pop des compteurs en partie.
- **Un filet de sécurité unique** : un seul bloc `@media (prefers-reduced-motion: reduce)`
  neutralise toutes les animations `sankofa-*`, **y compris `sankofa-pop`**, qui n'était jusqu'ici
  protégé que par les composants qui pensaient à l'utiliser.
- **`src/hooks/useCountUp.ts`** : compteur qui monte avec sortie amortie, utilisé pour le score
  puis les cauris de fin de partie **en deux temps** (300 ms puis 950 ms) — l'œil lit d'abord le
  résultat, la récompense tombe ensuite. Valeur finale immédiate sous `prefers-reduced-motion`.
- **La carte se colore au montage** : les territoires se remplissent du vide vers leur maîtrise
  réelle, en cascade (110 ms par territoire). Deux `requestAnimationFrame` d'attente avant de
  basculer l'état, sans quoi le navigateur peint directement l'état final — même précaution que
  celle déjà prise dans `ProgressBar`.
- **Le retour de réponse n'utilise ni `key` ni remontage** : la classe n'est posée que pendant que
  la réponse est verrouillée et disparaît à la question suivante ; ce cycle suffit à relancer
  l'animation sans faire clignoter le sous-arbre.
- **Vérifié en navigateur dans les deux modes** (Playwright, passe `no-preference` et passe
  `reduce`) : transition posée et opacité atteignant 0,95 sur un territoire acquis d'un côté ;
  **aucune** transition, `animationName: none` et score affiché d'emblée de l'autre. Zéro erreur
  console dans l'une comme dans l'autre.

## Livraison (Phase 9 — Rattachement des questions aux leçons et recalibrage du barème)

Deux dettes ouvertes par le module Quiz, soldées.

### Rattachement question → leçon : 657 / 676

Les 286 questions non alignées (54 fiches Géographie à 3 leçons pour 5 questions, 4 cours hérités
à 3 pour 4) ont été traitées. **267 sont désormais rattachées**, soit **657 des 676 questions du
catalogue** une fois les 390 dérivées par position comptées.

- **Méthode** : rapprochement de contenu — la réponse est-elle citée dans la leçon ? — avec une
  pondération discriminante (un mot présent dans les 3 leçons ne départage rien, un mot présent
  dans une seule la désigne). 222 questions citent leur réponse mot pour mot dans une seule leçon.
- **Découverte en chemin** : les leçons de Géographie **ne suivent plus** le template à 7 rubriques
  décrit plus haut dans ce fichier. Elles ont des titres narratifs (« Un lac qui vire au rose »),
  donc aucun rattachement par position n'était possible — c'est ce qui a imposé le rapprochement
  par contenu.
- **Relecture manuelle** des 12 rattachements les plus faibles : 1 correction (Ubuntu renvoyait
  vers « Rites de passage » au lieu de la leçon qui porte son nom) et 5 retraits, où
  l'automatisme avait accroché un mot incident — l'alliance AES captée par « Sahel », par exemple.
- **Les 19 questions restantes ne sont pas un oubli** : leur réponse ne figure dans *aucune* leçon
  de leur propre cours (langue officielle du Ghana, du Liberia et du Kenya ; devise du Cameroun ;
  sortie du Niger de la CEDEAO ; océan bordant l'Angola et Madagascar ; enclavement de neuf pays…).
  Les rattacher enverrait vers une leçon qui ne répond pas. **C'est un trou de contenu, pas un
  trou de données** : le correctif est éditorial. La règle 22 du validateur en tient le compte.

### `LEVEL_TIERS` recalibré sur 17 960 XP

Quatrième recalibrage. Le total réellement disponible a été **recompté source par source** :

| Source | XP |
|---|---|
| Complétion des 136 cours | 8 360 |
| 564 leçons × `XP_PER_LESSON` | 5 640 |
| Module Quiz : 676 questions × `XP_PER_QUESTION_LEARNED` | 3 380 |
| 3 parcours (`xpReward`) | 400 |
| 18 cartes éditoriales du fil Home | 180 |
| **Total** | **17 960** |

Sans recalibrage, « Gardien du savoir » serait tombé à **72,6 %** du catalogue. Nouveau barème,
**à proportions constantes** (0 / 9,6 / 29,9 / 59,8 / 100 %) : **0 / 1 700 / 5 350 / 10 750 /
17 960**, `OPEN_LEVEL_STEP` de 1 250 à **1 700**.

- **Aucune migration** : la version de persistance reste **8**. L'XP acquise n'est jamais
  recalculée ; seuls `level` et `rank` le sont, ce qui **fait redescendre d'un rang** un
  utilisateur proche d'une ancienne frontière (13 040 XP : « Gardien du savoir » → « Sage »).
  Assumé, et déjà le cas au recalibrage précédent.
- **Une limite documentée dans le code** : le Défi du jour rapporte 30 XP par jour indéfiniment,
  soit ~11 000 XP par an sans apprendre quoi que ce soit de neuf. La propriété « dernier rang =
  100 % du catalogue » ne vaut donc à la lettre que pour un utilisateur récent. Limite antérieure
  à ce recalibrage, désormais écrite noir sur blanc.
- **Les tests ne codent plus les seuils en dur** : `gamification.test.ts` dérive ses échantillons
  de `LEVEL_TIERS` et de `OPEN_LEVEL_STEP` (désormais exporté). Ils vérifient la frontière, pas une
  valeur d'époque, et survivront au prochain recalibrage.

## Livraison (Phase 9 — Retrait du contenu d'amorçage et alignement des cours hérités)

Deux lots liés : le fil du Home change de nature, et les 4 derniers cours au format d'origine
passent au format du catalogue.

### Lot 1 — Le fil du Home devient un fil de découverte de cours

`src/data/cards.ts` (18 cartes éditoriales de la Phase 1) est **supprimé**, ainsi que le
pseudo-cours `EDITORIAL_COURSE_ID`. Le fil ne sert plus des leçons à lire mais des **cours à
trier** : illustration du cours, matière, titre, description, puis ✗ « pas intéressé » /
✓ « intéressé ».

- **✓ met le cours en favori**, ✗ l'écarte **définitivement** (`dismissedCourseIds`, nouveau champ).
  Sans cette mémoire, le fil resservirait indéfiniment ce qu'on vient de refuser.
- **Swiper ne rapporte plus d'XP** : c'est du tri, pas de l'apprentissage. L'objectif du jour
  compte désormais les **leçons lues** (`daily.lessonsLearned`), où qu'elles l'aient été.
- **Le suivi quotidien est tenu par `completeLesson`**, et nulle part ailleurs : c'est le seul
  point du code qui sait qu'une leçon vient réellement d'être lue. Auparavant chaque écran appelait
  `addDailyProgress` de son côté, ce qui obligeait chaque nouvel appelant à y penser.
- **Gain technique** : une carte n'a besoin que de `COURSE_INDEX`. Le fil est complet dès le
  premier rendu, sans attendre le chargement du texte des leçons.
- **Un bug corrigé au passage** : depuis que le fil servait des leçons du catalogue, mettre une
  carte en favori écrivait un id de leçon nu dans `favoriteCardIds`, que l'écran Favoris résolvait
  uniquement contre `CARDS` — le favori disparaissait donc silencieusement. Il n'y a plus qu'une
  sorte de favori, le cours.
- **Migration v9** : `favoriteIds`/`favoriteCardIds`/`favoriteLessonKeys` sont résolus contre le
  catalogue et remontés vers `favoriteCourseIds` (un id de leçon remonte à son cours, l'intention
  est préservée) ; les id de cartes supprimées sont abandonnés ; les entrées `editorial:*` de
  `completedLessonIds` sont nettoyées ; `cardsLearned`/`totalCardsLearned` sont renommés.
  **L'XP acquise n'est jamais recalculée.**

### Lot 2 — Les 4 cours hérités passés à 5 leçons

Les derniers cours au format de la Phase 1 (3 leçons / 4 questions) rejoignent le format du
catalogue : **5 leçons, 5 questions, `xp: 70`**. Les id de cours, de leçons existantes et de
questions sont **inchangés** — ce sont des clés de `localStorage`.

| Cours | Leçons ajoutées |
|---|---|
| Rythmes du continent | Le soukous et la rumba congolaise · Le raï, la voix d'Oran |
| Griots et sagesses | La kora · L'arbre à palabres |
| L'Afrique qui innove | La ZLECAf · Les hubs technologiques (Yaba, Nairobi, Kigali) |
| Voix et plumes d'Afrique | Senghor et la Négritude · Naguib Mahfouz |

- **« Voix et plumes » a été entièrement réécrit** : ses leçons étaient encore des paragraphes
  uniques, hors charte. Il annonçait « cinq écrivains » et n'en traitait que trois ; il en traite
  désormais cinq, un par leçon.
- **Une erreur de fait corrigée** : le cours annonçait la ZLECAf « entrée en vigueur en 2021 »,
  jusque dans l'intitulé du quiz. Elle est entrée en vigueur le **30 mai 2019** ; seul le
  démantèlement tarifaire a démarré le 1ᵉʳ janvier 2021.
- **Effet mécanique** : les 4 cours deviennent *alignés*, donc leur rattachement question → leçon
  se dérive par position et leurs entrées disparaissent de `quizLessonMap`. Seules les 54 fiches
  Géographie restent non alignées, ce qui est le format voulu.
- **Aucun recalibrage de `LEVEL_TIERS`** : le retrait des cartes (−180 XP) et l'enrichissement des
  4 cours (+80 de complétion, +80 de leçons, +20 de questions) s'annulent exactement. Le total
  reste **17 960 XP**, la valeur sur laquelle le barème est calé.
- **Contenu sourcé** : rumba congolaise inscrite à l'UNESCO en 2021 et raï en 2022 (vérifiés),
  entrée de l'Union africaine au G20 le 9 septembre 2023 comme deuxième bloc régional après l'UE.

## Livraison (Phase 9 — L'onglet Jeu renommé Quiz)

L'onglet **Jeu** devient **Quiz**. Le mot « Jeu » promettait du divertissement au-dessus d'un
moteur de révision, alors que tout le code du module disait déjà « quiz » (`QuizGamePlayer`,
`quizGame`, `QUIZ_INDEX`…). Détail complet dans `docs/ARCHITECTURE.md` § Renommage de l'onglet Jeu
en Quiz.

- **Routes migrées** : `/quiz`, `/quiz/defi`, `/quiz/:territoryId/:mode`. Les anciennes (`/jeu…`,
  `/defi`, `/collections`) restent en redirection.
- **`/quiz` était déjà pris** par l'historique des tentatives : il vit désormais sous
  **`/profil/quiz`**, d'où il est de toute façon ouvert. Contrepartie assumée : un favori sur
  l'ancien `/quiz` tombe maintenant sur l'onglet, une adresse ne pouvant rediriger vers deux
  endroits.
- **`JeuRedirect`** (`App.tsx`) : `<Navigate>` ne sait pas reporter les paramètres d'URL, sa cible
  étant une chaîne figée. Ce petit composant relit `useParams()` pour rediriger
  `/jeu/:territoire/:mode` sans perdre le territoire ni le mode.
- **Fichiers renommés** : `JeuScreen`/`JeuPartieScreen`/`JeuDefiScreen` →
  `QuizScreen`/`QuizPartieScreen`/`QuizDefiScreen` (via `git mv`, l'historique est conservé).
- **Icône** : les épées croisées (`Swords`) cèdent la place à une cible (`Target`).
- **Aucune migration du store** : rien dans la progression ne stocke de chemin.

## Ce qui N'est PAS encore fait

- Animations avancées hors du module Quiz : le geste de swipe et le module Quiz sont animés, mais les transitions d'écran globales et les micro-interactions du Home, de la Biblio et du Profil restent à faire.
- Authentification / comptes utilisateurs / back-end / synchronisation multi-appareil.
- Reformatage global du dépôt par Prettier (outillage en place, non appliqué — voir chantier 7.4 ci-dessus).
- Tests de rendu de composants et tests end-to-end (hors périmètre du chantier 7.4, volontairement).
- Module Quiz : **terminé** (lots 1 à 5). Le module a remplacé l'onglet Collections et vit sur `/jeu`.
- Équilibrage éditorial du catalogue : **en cours**. Personnalités est passée de 1 à 31 cours, et les 3 matières restantes ont été fusionnées en « Découverte » (3 cours). L'objectif retenu est de porter Découverte à **30 cours**, par lots de 8, sur le modèle des chantiers Histoire et Géographie.
- Charte des leçons non activée sur Personnalités : `CHARTE_APPLIQUEE` (`scripts/validate-content.ts`) contient `histoire`, `geo` et `decouverte` — les 31 cours Personnalités restent hors du contrôle des règles 11 à 18.
- Illustrations manquantes : les 4 cours signalés par le validateur (3 dans Découverte, 1 dans Personnalités).
- Performance Lighthouse mobile < 90 (voir chantier 7.5 : le goulot restant est le coût d'exécution JS générique React/Router/Zustand sous throttling CPU simulé, pas le catalogue — nécessiterait une réduction plus profonde du bundle vendor ou un changement d'architecture de rendu, hors périmètre de ce lot).

## Prochaines étapes suggérées

1. **Combler les 19 trous de contenu du quiz** : ces questions n'ont leur réponse dans aucune leçon de leur cours (langue officielle du Ghana, du Liberia et du Kenya ; devise du Cameroun ; sortie du Niger de la CEDEAO ; océan bordant l'Angola et Madagascar ; équateur au Gabon ; frontière nord de la Guinée-Bissau ; enclavement de neuf pays). Ajouter le fait à la leçon, puis rattacher dans `src/data/quizLessonMap.ts`. Suivi par la règle 22 de `npm run validate`.
2. Poursuite de la Phase 8 : **lots 2 à 4 de Découverte** (11 → 30 cours). Lot 2 « Sociétés, croyances, quotidien », lot 3 « Savoirs & sciences », lot 4 à composer. Régénérer les index (`npm run gen:index`, `npm run gen:quiz`) après chaque lot, **et recalibrer `LEVEL_TIERS` en fin de chantier** — chaque cours ajouté déplace le total de 17 960 XP sur lequel le barème est calé.
3. Passer les 31 cours Personnalités sous la charte, puis ajouter `"perso"` à `CHARTE_APPLIQUEE`.
4. Résorber les avertissements du validateur (densité de gras, budget de mots) et fournir les 4 illustrations manquantes.
5. Éventuellement : reformatage global Prettier (commit dédié), tests de rendu/E2E, authentification si un compte utilisateur devient nécessaire, poursuite de l'optimisation Performance (chantier 7.5) si le score < 90 devient bloquant.
