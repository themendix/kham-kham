# PROMPT 07a — SÉCURISATION & MISE EN LIGNE (PHASE 7, LOT 1) — SANKOFA

> **Comment l'utiliser** : dans VS Code, ouvre le projet Sankofa, lance Claude Code, puis colle le bloc ci-dessous.
> **Pré-requis** : phases 1 à 6 livrées + enrichissement Histoire (40 cours) et Géographie (54 fiches). Lire d'abord `docs/PHASE-7-CONSOLIDATION.md`.
> **Périmètre** : ce lot ne touche **aucune logique métier**. Il sécurise l'existant et le met en ligne. C'est volontairement le lot le moins risqué et le plus urgent.

---

## LE PROMPT À COLLER

Tu es un **ingénieur front-end senior, spécialiste de la chaîne de livraison** (git, CI, déploiement de sites statiques). Nous entrons dans la **Phase 7 « Consolidation »** du projet **Sankofa** (React 18 + Vite + TypeScript + Tailwind v4 + Zustand, aucun back-end). Ce lot 1 a un seul but : **plus rien ne peut être perdu, et l'application est visible en ligne**.

### 0. AVANT D'ÉCRIRE LA MOINDRE LIGNE

Lis : `docs/PHASE-7-CONSOLIDATION.md` (sections 1.3 F4/F5 et chantier 7.1), `CLAUDE.md`, `.gitignore`, `vite.config.ts`, `index.html`, `package.json`.

Puis **fais un état des lieux et présente-le-moi** avant toute action :
- `git status` complet et `git log --oneline` ;
- liste des fichiers modifiés non commités et des fichiers non suivis, **avec leur poids** ;
- pour chacun : est-ce du **code**, du **contenu applicatif** (assets utilisés par l'app), ou du **matériel de référence local** (à ignorer) ?

### 1. OBJECTIF (PÉRIMÈTRE STRICT)

1. Committer proprement tout le travail en cours.
2. Ajouter les fichiers d'identité web manquants (`public/`).
3. Mettre en place une CI GitHub Actions.
4. Déployer l'application à une URL publique.

**Ne PAS faire dans ce lot** : corriger des bugs, toucher au store, modifier la gamification, refactorer des composants, ajouter du contenu, optimiser les performances. Tout cela appartient aux lots suivants. Si tu repères un bug, **note-le dans ton récapitulatif final** au lieu de le corriger.

### 2. COMMITS

- **Ne fais pas un commit monolithique.** Découpe en commits thématiques et lisibles, par exemple : correctifs d'interface en cours · assets Géographie · documents de contenu Géographie · documentation Phase 7.
- Messages de commit **en français**, à l'impératif, une ligne de sujet courte + corps explicatif si le lot est substantiel.
- Vérifie `.gitignore` avant de committer : les **assets applicatifs** (`src/assets/**`) doivent être suivis ; le **matériel de référence local** (`/picture/`, `/photo modele/`, `docs/**/photo/`) doit rester exclu. Si un fichier lourd est sur le point d'entrer dans l'historique par erreur, **arrête-toi et signale-le-moi**.
- Supprime les fichiers verrous Office résiduels s'il y en a (`~$*`).

### 3. IDENTITÉ WEB (`public/`)

Crée le dossier `public/` avec :
- un **favicon** et des icônes **192×192** et **512×512** cohérents avec l'identité Sankofa (néo-brutaliste, palette terre/ocre/or/vert savane/indigo — voir `docs/DESIGN-SYSTEM.md`) ;
- un `manifest.webmanifest` : nom « Sankofa », nom court, description, `theme_color`, `background_color`, `display: standalone`, icônes ;
- une image de partage `og-image` ;
- les balises correspondantes dans `index.html` : `<link rel="icon">`, `<link rel="manifest">`, `<meta name="theme-color">`, balises Open Graph et Twitter Card.

**Ne mets pas en place le service worker ici** — la PWA complète appartient au lot 5. On prépare seulement l'installabilité et le partage.

### 4. INTÉGRATION CONTINUE

Crée `.github/workflows/ci.yml` :
- déclenchement sur `push` et `pull_request` ;
- Node LTS, cache npm, `npm ci` ;
- étapes : `npm run typecheck` puis `npm run build` ;
- le workflow doit **échouer** si l'une des deux échoue.

Prévois le workflow de façon à pouvoir y **ajouter facilement `npm run validate` et `npm test`** aux lots 2 et 4 (commente les emplacements).

### 5. DÉPLOIEMENT

- **Propose-moi les options** (Vercel, Netlify, GitHub Pages) avec, pour chacune, en 3 lignes : ce que j'ai à faire manuellement, les contraintes de configuration, et l'impact éventuel sur `vite.config.ts` (notamment le `base` en cas de sous-chemin).
- **Attends mon choix**, puis mets en place la configuration correspondante et écris la procédure de déploiement dans le fichier de documentation.
- Vérifie que le routage **React Router en mode history** fonctionne sur la plateforme choisie (redirection de toutes les routes vers `index.html`), sinon un accès direct à `/cours/:id` renverra un 404.

### 6. FAÇON DE TRAVAILLER

- **Commence par l'état des lieux (§0) et ton plan de découpage en commits, puis attends ma validation** avant de committer quoi que ce soit.
- Ne force jamais de push, ne réécris jamais l'historique.
- Documente : ajoute à `CLAUDE.md` une courte section « Livraison » (dépôt, CI, URL publique, procédure de déploiement) et coche le lot 1 dans `docs/PHASE-7-CONSOLIDATION.md`.
- À la fin : `npm run typecheck` et `npm run build` sans erreur, plus un **récapitulatif** listant les commits créés et les bugs repérés mais volontairement non corrigés.

**Definition of done** : `git status` est vide, tout est poussé, la CI est verte et bloque en cas d'échec, l'application est accessible à une URL publique où l'accès direct à une route profonde fonctionne, et le favicon et l'aperçu de partage s'affichent correctement.
