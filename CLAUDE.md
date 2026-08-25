# CLAUDE.md — Contexte projet Sankofa

Ce fichier permet à toute future session (IA ou humaine) de reprendre le projet immédiatement.

## Vision

**Sankofa** est une application web de culture générale africaine, à destination du grand public et de la diaspora. Elle s'inspire structurellement d'une application existante nommée « Sophia » (micro-apprentissage gamifié : fil de cartes à swiper, bibliothèque de cours, parcours guidés, forte gamification), mais avec une **identité visuelle africaine** (néo-brutaliste, palette terre/ocre/or/vert savane/indigo) et un **contenu 100 % dédié à l'Afrique**.

Le nom *Sankofa* vient du concept akan « retourner chercher le savoir du passé » — c'est la mission de l'app, à utiliser partout (titre, logo, textes UI, documentation). Ce n'est pas un placeholder à remplacer.

L'app a 4 onglets (bottom nav) :
- **Home** : fil de cartes à swiper ✗ (passer) / ✓ (apprendre), une carte = un sujet culturel.
- **Biblio** : bibliothèque de cours par matière (À la une, groupés par catégorie).
- **Collections** : parcours guidés reliant plusieurs cours, avec progression et XP.
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

- **Catalogue chiffré** (calibrage sur des chiffres, pas au jugé) : 98 cours (40 Histoire, 54 Géographie, 4 hérités Personnalités/Arts/Traditions/Actu à 1 cours chacun), 266 leçons, **7100 XP total disponible** (4440 XP de complétion de cours + 2660 XP de leçons). L'ancien plafond (1000 XP) représentait 14 % de ce total — d'où la saturation quasi immédiate du rang maximal.
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
- **CI complétée** (`.github/workflows/ci.yml`) : `npm ci` → `npm run validate` → `npm test` → `npm run typecheck` → `npm run build`, bloquante en cas d'échec de l'une des quatre étapes.
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
| v7 (actuelle) | — | `masteryByCategory` et `seenCardIds` supprimés ; `level`/`rank` recalculés | Phase 7.3 |

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
- **Gamification recalibrée** (`src/lib/gamification.ts`) : `LEVEL_TIERS` (0/900/2750/5550/9260,
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

## Ce qui N'est PAS encore fait

- Animations avancées au-delà du geste de swipe (transitions d'écran, micro-interactions).
- Authentification / comptes utilisateurs / back-end / synchronisation multi-appareil.
- Reformatage global du dépôt par Prettier (outillage en place, non appliqué — voir chantier 7.4 ci-dessus).
- Tests de rendu de composants et tests end-to-end (hors périmètre du chantier 7.4, volontairement).
- Équilibrage éditorial du catalogue (Personnalités, Arts & Musique, Traditions & Sociétés, Afrique contemporaine n'ont encore qu'un seul cours chacun — Phase 8, la Phase 7 se contente de rendre ce déséquilibre non pénalisant).
- Performance Lighthouse mobile < 90 (voir chantier 7.5 : le goulot restant est le coût d'exécution JS générique React/Router/Zustand sous throttling CPU simulé, pas le catalogue — nécessiterait une réduction plus profonde du bundle vendor ou un changement d'architecture de rendu, hors périmètre de ce lot).

## Prochaines étapes suggérées

1. Phase 8 : équilibrage éditorial des 4 matières à 1 seul cours, en s'appuyant sur la procédure d'ajout de contenu et le validateur (`npm run validate`).
2. Éventuellement : reformatage global Prettier (commit dédié), tests de rendu/E2E, authentification si un compte utilisateur devient nécessaire, poursuite de l'optimisation Performance (chantier 7.5) si le score < 90 devient bloquant.
