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

- **Stack imposée** : React 18 + Vite + TypeScript, Tailwind CSS v4 (config CSS-first via `@theme`, pas de `tailwind.config.js`), React Router, Zustand + `persist`, `lucide-react`. Pas de back-end : contenu dans `src/data/*.ts`, progression en `localStorage`.
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
- **Identité web** (`public/`) : `favicon.svg` (source vectorielle du logo, même motif que le badge du `TopBar`) décliné en PNG 16/32/180/192/512, `manifest.webmanifest` (installabilité, sans service worker — le mode hors-ligne appartient au lot 5 de la Phase 7), `og-image.png` (1200×630) pour l'aperçu de partage. Balises correspondantes dans `index.html`, `og:url`/`og:image` en URLs absolues vers l'URL publique ci-dessous.
- **CI** : `.github/workflows/ci.yml`, déclenchée sur `push`/`pull_request` — `npm ci` → `npm run typecheck` → `npm run build`, bloquante en cas d'échec. Emplacements commentés pour `npm run validate` (chantier 7.2) et `npm test` (chantier 7.4).
- **Déploiement — Netlify choisi** (parmi Vercel/Netlify/GitHub Pages). `netlify.toml` à la racine : build `npm run build`, publish `dist`, redirect SPA (`/* → /index.html`, statut 200) pour que les routes profondes de React Router (`/cours/:id`…) fonctionnent en accès direct. Aucun changement de `vite.config.ts` requis (`base` reste `/`, pas de sous-chemin).
  - **Procédure** : sur app.netlify.com → « Add new site » → « Import an existing project » → sélectionner le repo GitHub `themendix/kham-kham` → Netlify détecte `netlify.toml` (build/publish/redirects déjà configurés) → déployer. Chaque push sur `main` redéploie automatiquement.
- **URL publique** : **https://sankofaa.netlify.app/**

## Ce qui N'est PAS encore fait

- Animations avancées au-delà du geste de swipe (transitions d'écran, micro-interactions).
- Authentification / comptes utilisateurs / back-end / synchronisation multi-appareil.
- ESLint/Prettier (non configurés volontairement — à ajouter si besoin).
- Plus d'un cours par catégorie (chaque matière n'a pour l'instant qu'un seul cours).

## Prochaines étapes suggérées

1. Éventuellement, un 2ᵉ cours par matière si le catalogue doit encore grossir (au-delà d'1 cours/catégorie actuellement).
2. Éventuellement : ESLint/Prettier, tests, authentification si un compte utilisateur devient nécessaire.
