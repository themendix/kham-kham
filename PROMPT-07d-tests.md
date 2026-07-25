# PROMPT 07d — FILET DE TEST (PHASE 7, LOT 4) — SANKOFA

> **Comment l'utiliser** : dans VS Code, ouvre le projet Sankofa, lance Claude Code, puis colle le bloc ci-dessous.
> **Pré-requis** : lots 1 à 3 (PROMPT-07a, 07b, 07c) terminés — donc migration de store à jour.
> **Périmètre** : couvrir la logique dont une défaillance est **irrécupérable ou invisible**. Pas de course à la couverture.

---

## LE PROMPT À COLLER

Tu es un **développeur front-end senior**, exigeant sur les tests **utiles** — ceux qui attrapent les régressions coûteuses, pas ceux qui gonflent un pourcentage. Nous poursuivons la **Phase 7 « Consolidation »** du projet **Sankofa** (React 18 + Vite + TypeScript + Tailwind v4 + Zustand, aucun back-end).

Le projet n'a **aucun test** aujourd'hui. Le risque numéro un n'est pas un bug d'affichage : c'est la **chaîne de migration du store**. La progression de l'utilisateur vit uniquement dans `localStorage`, sans back-end ni sauvegarde. Une migration défaillante **détruit des données sans recours**. C'est la priorité absolue de ce lot.

### 0. AVANT D'ÉCRIRE LA MOINDRE LIGNE

Lis : `docs/PHASE-7-CONSOLIDATION.md` (chantier 7.4), `CLAUDE.md`, `docs/ARCHITECTURE.md`, `package.json`, `src/store/useAppStore.ts` (en particulier `migrate` et l'historique des versions), `src/lib/gamification.ts`, `src/lib/daily.ts`, `src/lib/featured.ts`, `src/lib/subjectProgress.ts`, `src/lib/recommendations.ts`, `scripts/validate-content.ts`.

Puis **reconstitue l'historique des versions du store** (v1 → version actuelle) et présente-le-moi sous forme de tableau : pour chaque version, quels champs ont été ajoutés ou transformés. C'est la base des tests de migration.

### 1. OBJECTIF (PÉRIMÈTRE STRICT)

1. Installer **Vitest** (aligné sur Vite, configuration minimale — aucune autre option).
2. Écrire les tests de **migration du store** (priorité 1).
3. Écrire les tests des **fonctions pures** de `src/lib/`.
4. Écrire les tests d'**idempotence** des actions du store.
5. Ajouter **ESLint + Prettier**.
6. Compléter la **CI** avec `validate` et `test`.

**Ne PAS faire dans ce lot** : tests de rendu exhaustifs de tous les composants, tests end-to-end (Playwright/Cypress), refactor de code applicatif « pour le rendre testable » au-delà du strictement nécessaire — et si un refactor s'impose, **signale-le et attends mon accord**. Ne corrige pas les bugs que les tests révèlent sans me le dire d'abord.

### 2. TESTS DE MIGRATION — PRIORITÉ 1

- Constitue des **blobs `localStorage` figés**, un par version historique (v1 → version actuelle), représentatifs d'un utilisateur ayant réellement progressé (XP, cours terminés, favoris, résultats de quiz, streak, suivi quotidien).
- Pour chaque blob, teste que la migration :
  - **ne perd aucun champ** existant ;
  - **backfill correctement** tous les champs ajoutés depuis, avec les bonnes valeurs par défaut ;
  - traite bien les transformations historiques (notamment l'ancien `favoriteIds` → `favoriteCardIds`, et l'abandon de `masteryByCategory` au lot 3) ;
  - produit un état **cohérent** : niveau et rang recalculés en accord avec l'XP, aucune donnée orpheline.
- Teste aussi les cas dégradés : blob absent, blob corrompu, blob partiel, version inconnue (supérieure à la version courante). Aucun de ces cas ne doit provoquer d'écran blanc ni d'effacement silencieux.

### 3. TESTS DES FONCTIONS PURES

- **`gamification.ts`** : paliers de rangs nommés, formule de niveaux au-delà du plafond nominal (A1), monotonie de la progression, `updateStreak` — même jour, jour suivant, saut de plusieurs jours, changement de semaine, passage d'année. Injecte la date (`now`) plutôt que de dépendre de l'horloge réelle.
- **`daily.ts`** : déterminisme sur une même journée (deux appels = même résultat), changement de résultat au changement de date, `resetDailyIfNeeded`, `pickDailyQuestions` (nombre demandé, éléments distincts, pool plus petit que le nombre demandé).
- **`featured.ts`** : exclusion de la matière précédente, repli quand une seule matière reste, `null` quand tout est lu, résolution d'une clé `${courseId}:${lessonId}` valide et invalide.
- **`subjectProgress.ts`** : calcul de niveau de matière aux bornes (0 cours, exactement `COURSES_PER_LEVEL`, matière entièrement terminée), statuts À faire / En cours / Terminé.
- **`recommendations.ts`** : exclusion des cours terminés, priorité de la dernière matière ouverte, stabilité du tri à score égal, comportement quand la liste est vide.
- **Fil Home généré (A2)** : ne propose jamais une leçon déjà lue ailleurs, ne double pas la leçon « À la une », ne s'épuise pas tant qu'il reste des leçons.

### 4. TESTS D'IDEMPOTENCE DU STORE

`completeLesson`, `completeCourse`, `markCourseStarted`, la complétion de parcours du lot 2, `toggleFavoriteCard` / `toggleFavoriteCourse` : appelés **deux fois**, ils ne doivent créditer l'XP qu'une fois et ne pas dupliquer d'entrée. Teste également que `recordQuizResult` conserve bien les 10 résultats les plus récents.

### 5. OUTILLAGE ET CI

- **ESLint + Prettier** : configuration adaptée à React 18 + TypeScript + Vite, sans surenchère de règles. Corrige les avertissements réels, ne fais pas un reformatage massif du dépôt qui rendrait l'historique git illisible — **si un formatage global est souhaitable, propose-le en commit séparé et dédié**.
- **CI** : ajoute `npm run validate` et `npm test` au workflow existant, en plus de `typecheck` et `build`. Le workflow doit échouer si l'un des quatre échoue.
- Scripts npm : `test`, `test:watch`, `lint`, `format`.

### 6. FAÇON DE TRAVAILLER

- **Commence par le tableau des versions du store (§0) et ton plan de tests** (liste des fichiers de test, ce que chacun couvre) et **attends ma validation avant d'écrire les tests**.
- Un test doit **échouer pour une bonne raison** : montre-moi, pour au moins un test de migration, qu'il devient rouge si l'on casse volontairement la migration.
- Tests **en français** (noms de cas lisibles), organisés en miroir de `src/`.
- Mets à jour `CLAUDE.md` (section outillage : Vitest, ESLint, Prettier, CI) et `docs/ARCHITECTURE.md`.
- À la fin : `npm test`, `npm run lint`, `npm run validate`, `npm run typecheck`, `npm run build` tous verts, plus un **récapitulatif** — et la liste des bugs révélés par les tests, non corrigés sans mon accord.

**Definition of done** : toute migration v1 → version courante préserve les données et est couverte par un test · les fonctions pures de `src/lib/` sont testées, dates injectées · les actions du store sont prouvées idempotentes · ESLint et Prettier configurés · la CI exécute `typecheck` + `validate` + `test` + `build` et bloque en cas d'échec.
