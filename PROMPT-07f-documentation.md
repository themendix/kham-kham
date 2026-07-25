# PROMPT 07f — REMISE À NIVEAU DOCUMENTAIRE (PHASE 7, LOT 6) — SANKOFA

> **Comment l'utiliser** : dans VS Code, ouvre le projet Sankofa, lance Claude Code, puis colle le bloc ci-dessous.
> **Pré-requis** : lots 1 à 5 (PROMPT-07a à 07e) terminés. Ce lot documente **l'état d'arrivée**, pas un état intermédiaire.
> **Périmètre** : rétablir l'invariant du projet — la documentation décrit la réalité et permet une reprise immédiate. Aucune modification de code applicatif.

---

## LE PROMPT À COLLER

Tu es un **consultant technique senior**, spécialiste de la documentation d'ingénierie — celle qu'on lit pour reprendre un projet, pas celle qu'on écrit pour cocher une case. Nous clôturons la **Phase 7 « Consolidation »** du projet **Sankofa** (React 18 + Vite + TypeScript + Tailwind v4 + Zustand, aucun back-end).

**Le problème.** La règle fondatrice du projet est : *« la documentation est aussi importante que le projet lui-même »*. Or `CLAUDE.md` et `docs/ARCHITECTURE.md` documentent fidèlement les phases 1 à 6 mais **ne mentionnent nulle part** : les 94 cours du catalogue, les fichiers `src/data/courses/histoire.ts` et `geographie.ts`, la convention de nommage `courseId` ↔ fichier image (`src/lib/courseImages.ts`), ni la règle de cadrage `LEFT_FLAG_COURSE_IDS`. Une session qui reprend le projet **ne sait pas comment ajouter un cours**.

À cela s'ajoutent tous les changements des lots 1 à 5, non encore documentés.

### 0. AVANT D'ÉCRIRE LA MOINDRE LIGNE

Lis : `docs/PHASE-7-CONSOLIDATION.md` (chantier 7.6), `CLAUDE.md`, `docs/ARCHITECTURE.md`, `docs/DESIGN-SYSTEM.md`, `README.md`, `docs/contenu histoire/SOURCES-histoire.md`, `docs/contenu geographie/SOURCES-geographie.md`, puis **parcours le code réel** (`src/data/`, `src/lib/`, `src/store/`, `scripts/`).

Puis **présente-moi un tableau des écarts** : ce que la documentation affirme d'un côté, ce que le code fait réellement de l'autre. On documente à partir du code, pas à partir de la documentation précédente.

### 1. OBJECTIF (PÉRIMÈTRE STRICT)

Produire ou mettre à jour cinq documents :

1. `CLAUDE.md` — contexte de reprise
2. `docs/ARCHITECTURE.md` — flux techniques
3. `docs/PROCEDURE-AJOUT-CONTENU.md` *(nouveau)*
4. `docs/DECISIONS.md` *(nouveau)*
5. `SOURCES-*` — traçabilité éditoriale

**Ne PAS faire dans ce lot** : modifier du code applicatif, corriger des bugs, ajouter du contenu. Si tu découvres une incohérence de code en documentant, **note-la**, ne la corrige pas.

### 2. `CLAUDE.md`

Ajoute et mets à jour :
- **Section « Catalogue »** : volumétrie par matière (Histoire 40, Géographie 54, 4 cours hérités), emplacement des fichiers de données et logique d'agrégation dans `src/data/courses.ts`.
- **Convention des illustrations** : `courseId` = nom du fichier `.webp`, résolution par `import.meta.glob` dans `src/lib/courseImages.ts`, règle de cadrage `LEFT_FLAG_COURSE_IDS` (drapeau à gauche pour un sous-ensemble Afrique centrale / Grands Lacs) — **et pourquoi** cette règle existe.
- **Formats de contenu** : fiche Géographie (1 leçon, 7 rubriques, quiz de 5) vs cours Histoire (5 leçons, quiz de 5), et l'arbitrage retenu au lot 3 sur leur valorisation en XP.
- **Section « Phase 7 — Consolidation »** sur le modèle des phases précédentes : ce qui est désormais en place, lot par lot.
- **Section « Livraison »** : dépôt, CI, URL publique, procédure de déploiement.
- **Mise à jour de « Ce qui n'est PAS encore fait »** : retirer ce qui a été livré (ESLint/Prettier, tests, déploiement), et refléter honnêtement ce qui reste — au premier rang, l'équilibrage éditorial des 4 matières à un seul cours.

### 3. `docs/ARCHITECTURE.md`

Mets à jour les flux réellement modifiés en Phase 7 :
- découpage `src/data/courses/*` et chargement des données après le lot 5 ;
- résolution des illustrations (`courseImages.ts`) ;
- **validateur de contenu** : règles appliquées, moment d'exécution, comportement en échec ;
- **complétion de parcours** et versement de `xpReward` ;
- **reprise de lecture** d'un cours ;
- **barème XP ouvert** : table des rangs nommés puis formule de niveaux sans plafond ;
- **maîtrise dérivée** (et disparition de l'accumulation `masteryByCategory`) ;
- **fil Home généré depuis le catalogue** et convergence avec `completedLessonIds` ;
- **chaîne de migrations du store**, version par version, avec le rôle de chacune — c'est le point le plus important pour une reprise à froid ;
- service worker et stratégie de cache.

### 4. `docs/PROCEDURE-AJOUT-CONTENU.md` *(nouveau)*

**C'est le document le plus utile de ce lot** : il transforme un savoir-faire conversationnel en procédure réutilisable. Rédige-le comme un mode opératoire numéroté, exécutable sans poser de question :

1. Rédiger la fiche ou le cours (format attendu selon la matière, longueur, ton, structure des leçons).
2. Sourcer l'information et consigner les sources.
3. Générer l'illustration (format, dimensions, style, contrainte de cadrage du drapeau).
4. Nommer le fichier image selon la convention et le placer au bon endroit.
5. Insérer l'objet `Course` dans le fichier de matière (conventions d'`id`, de numérotation, d'ordre).
6. Lancer `npm run validate`, puis `npm test`, puis `npm run build`.
7. Vérifier visuellement dans l'application (Biblio, écran de matière, détail du cours, quiz).
8. Committer (format de message attendu).

Ajoute une **checklist finale cochable** et la liste des **erreurs fréquentes** à éviter.

### 5. `docs/DECISIONS.md` *(nouveau)*

Journal des décisions structurantes, chacune en 5 lignes : **contexte → options → décision → motif → conséquences**. Au minimum :
- layout web pleine largeur plutôt que cadre téléphone centré (décidé en Phase 1) ;
- séparation stricte contenu (`src/data/`, lecture seule) / progression (store, persisté) ;
- absence volontaire de back-end ;
- **A1 — progression ouverte sans plafond** (Phase 7) ;
- **A2 — fil Home généré depuis le catalogue** (Phase 7) ;
- **A3** — sort du parcours orphelin ;
- **A4** — statut des fiches Géographie ;
- plateforme de déploiement retenue.

But : ne plus rejouer les mêmes arbitrages à chaque phase.

### 6. TRAÇABILITÉ ÉDITORIALE (`SOURCES-*`)

- Ajoute une **date de vérification** aux fichiers `SOURCES-histoire.md` et `SOURCES-geographie.md`, et signale explicitement les **données volatiles** (population, PIB, capitale administrative) qui devront être revérifiées périodiquement.
- Rédige un **protocole de relecture factuelle** des quiz : sur ~470 questions, propose un échantillonnage réaliste (par exemple 10 % par matière), une méthode de traçabilité de la relecture, et une cadence. **Définis le protocole ici ; son exécution complète pourra être étalée.**
- C'est le risque le plus sérieux d'une application **éducative** : une erreur factuelle coûte plus cher qu'un bug d'affichage.

### 7. FAÇON DE TRAVAILLER

- **Commence par le tableau des écarts (§0) et ton plan de rédaction**, puis **attends ma validation**.
- Écris **en français**, dans le style des documents existants : structuré, hiérarchisé, professionnel, pédagogique. Explique la **logique** et les **raisons**, pas seulement le **quoi**.
- Ne recopie pas le code dans la documentation : décris les flux, les invariants et les points d'attention.
- Coche les critères de sortie dans `docs/PHASE-7-CONSOLIDATION.md` et déclare la phase close si tous sont satisfaits — sinon, liste précisément ce qui manque.

### 8. TEST DE VALIDATION FINAL — OBLIGATOIRE

**Test de reprise à froid.** Une fois la documentation écrite, mets-toi dans la peau d'une session neuve ne disposant que du dépôt et de sa documentation, et **essaie réellement d'ajouter un cours de bout en bout** en suivant `PROCEDURE-AJOUT-CONTENU.md`.

- Si tu dois **deviner** quoi que ce soit ou poser une question, la documentation est incomplète : **complète-la et recommence**.
- Rends-moi compte de ce test : ce qui a bloqué, ce que tu as dû ajouter.

**Definition of done** : `CLAUDE.md` et `ARCHITECTURE.md` décrivent l'état réel du code · `PROCEDURE-AJOUT-CONTENU.md` et `DECISIONS.md` existent et sont exploitables · les `SOURCES-*` sont datés et le protocole de relecture est défini · le **test de reprise à froid est réussi** · les critères de sortie de la Phase 7 sont cochés.
