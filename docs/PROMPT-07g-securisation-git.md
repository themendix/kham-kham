# PROMPT 07g — SÉCURISATION GIT ET REMISE EN LIGNE (PHASE 7, LOT 7)

> **Comment l'utiliser** : dans VS Code, ouvre le projet Sankofa, lance Claude Code, puis colle le bloc « LE PROMPT À COLLER ».
> **Pré-requis** : aucun. Ce lot est **bloquant** — il précède le lot 07f (documentation) et toute la Phase 8.
> **Périmètre** : mettre l'état réel du disque sous contrôle de version et en ligne. **Aucune modification de code applicatif, aucune correction de bug, aucun ajout de contenu.**

---

## POURQUOI CE LOT EXISTE (constat du 27 juillet 2026)

Un audit du dépôt a révélé un écart grave entre la documentation et le contrôle de version :

| Constat | Détail |
|---|---|
| **Le code des chantiers 7.2 → 7.5 n'est pas commité** | 53 fichiers modifiés et 218 fichiers non suivis. Toute la suite Vitest, `eslint.config.js`, `.prettierrc.json`, `scripts/`, `src/lib/search.ts`, `src/data/coursesIndex.generated.ts`, `src/data/courseContent.ts`, `PwaUpdateToast.tsx`, les polices auto-hébergées et les 188 variantes d'images n'existent que sur le disque de Mamadou. |
| **La documentation, elle, est commitée** | `CLAUDE.md` et `docs/ARCHITECTURE.md` décrivent les lots 7.2 à 7.5 comme livrés. Le dépôt affirme donc une chose que son propre code ne contient pas. |
| **8 commits locaux non poussés** | `origin/main` est resté à `e8fe7ad` (fin du lot 7.1). |
| **Le site en ligne est périmé** | https://sankofaa.netlify.app/ sert la version 7.1 : pas de découpage du bundle, pas de PWA hors ligne, pas de recherche insensible aux accents, pas de Géographie à 3 leçons. |

**Risque encouru** : une panne de disque, un `git checkout` malheureux ou un nettoyage de dossier détruit trois chantiers de travail sans sauvegarde possible.

---

## LE PROMPT À COLLER

Tu es un **ingénieur de release senior**. Ta mission n'est pas d'écrire du code : c'est de faire passer, sans rien perdre et sans rien casser, un travail existant du disque local vers le dépôt distant et la production. Tu privilégies la **fiabilité sur l'élégance** : un historique lisible est souhaitable, un travail intact est obligatoire.

Projet : **Sankofa** (React 18 + Vite + TypeScript + Tailwind v4 + Zustand, aucun back-end). Dépôt `themendix/kham-kham`, branche `main`, déploiement Netlify automatique sur push.

### 0. ÉTAT DES LIEUX — AVANT TOUTE ACTION

1. Si un fichier `.git/index.lock` subsiste (vestige d'une session interrompue), **supprime-le** avant toute commande Git.
2. Exécute et **présente-moi le résultat brut** de : `git status --short`, `git status -sb`, `git log --oneline -10`, `git log origin/main --oneline -3`.
3. **Ne commite rien tant que je n'ai pas vu ce rapport.** Confirme d'abord le diagnostic ci-dessus : combien de fichiers modifiés, combien de non suivis, combien de commits d'avance sur `origin/main`.

### 1. BARRIÈRE QUALITÉ — AUCUN COMMIT AVANT QUE TOUT SOIT VERT

Dans cet ordre, en t'arrêtant au premier échec :

```
npm run gen:index      # l'index généré doit refléter le catalogue actuel
npm run validate       # intégrité du contenu (9 règles)
npm test               # suite Vitest
npm run typecheck
npm run build
npm run lint           # informatif : signale, ne bloque pas
```

Si `npm run gen:index` modifie `src/data/coursesIndex.generated.ts`, c'est **normal et attendu** — le catalogue a changé depuis sa dernière génération ; garde la version régénérée.

**En cas d'échec** : ne bricole pas pour faire passer la commande. Arrête-toi, explique la cause exacte, et propose-moi le correctif minimal avant de reprendre.

### 2. DÉCISIONS DE VERSIONNEMENT — APPLIQUE-LES TELLES QUELLES

Ces arbitrages sont déjà tranchés, ne les rediscute pas :

- **`src/data/coursesIndex.generated.ts` : COMMITÉ.** Bien qu'il soit généré, la CI exécute `npm run typecheck` **avant** `npm run build` (donc avant `gen:index`) : son absence casserait la CI.
- **Les 188 variantes `-400w`/`-800w` de `src/assets/cours/` : COMMITÉES.** Le script `build` n'appelle pas `images:variants` ; sans elles, le `srcset` de `CourseCard` casserait en production.
- **`src/assets/fonts/` (3 fichiers `.woff2`) : COMMITÉ.** Les polices sont auto-hébergées depuis le lot 7.5, le CDN Google a été retiré.
- **`brand/` (`logos.png`, `LISEZ-MOI.md`) : COMMITÉ.** C'est la source de marque dont `public/` est généré.
- **`scripts/` (4 fichiers) : COMMITÉ.** Outillage de build référencé par `package.json`.
- **Jamais commités** : `dist/`, `node_modules/`, `~$*.md`, `/picture/`, `/photo modele/`, `docs/contenu */photo/` — tous déjà couverts par `.gitignore`. Vérifie qu'aucun ne remonte dans `git status`.

### 3. DÉCOUPAGE EN COMMITS THÉMATIQUES

Plusieurs fichiers du cœur (`src/store/useAppStore.ts`, `src/data/courses.ts`) portent les modifications de **plusieurs chantiers à la fois**. **N'essaie pas de les découper hunk par hunk** : le risque d'introduire un état intermédiaire incohérent dépasse le bénéfice d'un historique parfait. Rattache chaque fichier partagé au commit du chantier qui le domine, et dis-le dans le message de commit.

Séquence imposée (7 commits, dans cet ordre) :

| # | Message (impératif, sans accent dans le sujet, cohérent avec l'historique existant) | Contenu |
|---|---|---|
| 1 | `Ajoute l'outillage de qualite (ESLint, Prettier, CI)` | `eslint.config.js`, `.prettierrc.json`, `package.json`, `package-lock.json`, `.github/workflows/ci.yml` |
| 2 | `Ajoute le validateur de contenu et l'index de catalogue genere` | `scripts/`, `src/data/coursesIndex.generated.ts`, `src/data/courseContent.ts`, `src/data/courseMeta.ts`, `src/data/courses/misc.ts`, `src/data/courses/histoire.ts`, `src/data/courses.ts`, `src/data/parcours.ts`, `src/lib/courseMeta.ts`, `src/hooks/useCatalogContent.ts` |
| 3 | `Recalibre la gamification et la progression derivee` | `src/store/useAppStore.ts`, `src/types/index.ts`, `src/lib/subjectProgress.ts`, `src/lib/recommendations.ts`, `src/lib/featured.ts`, `src/lib/homeFeed.ts`, `src/lib/parcoursProgress.ts` |
| 4 | `Ajoute le filet de test Vitest (102 tests)` | tous les `*.test.ts` (`src/lib/`, `src/store/`), `vite.config.ts` |
| 5 | `Passe a l'echelle : recherche, regions, PWA, polices, accessibilite` | `src/lib/search.ts`, `src/lib/geographieRegions.ts`, `src/lib/courseImages.ts`, `src/components/`, `src/routes/`, `src/App.tsx`, `src/styles/index.css`, `src/vite-env.d.ts`, `index.html`, `public/`, `src/assets/fonts/`, `docs/DESIGN-SYSTEM.md` |
| 6 | `Ajoute les variantes d'images 400w et 800w (94 cours)` | les 188 `.webp` de `src/assets/cours/` |
| 7 | `Ajoute la source de marque et les prompts de travail` | `brand/`, `PROMPT-07a-bis-logo.md`, `docs/PROMPT-geographie-3-lecons.md` |

Chaque message de commit comporte un **corps** de 2 à 4 lignes expliquant le *pourquoi*, dans le style des commits existants (`git log` te donne le ton).

Note assumée : les commits 1 à 4 pris isolément ne construisent pas forcément l'application (les chantiers sont interdépendants). C'est acceptable — GitHub Actions ne teste que le sommet de la branche au moment du push. **L'état final, lui, doit être vert.**

### 4. PUSH ET VÉRIFICATION DU DÉPLOIEMENT

1. `git push origin main` (les 8 commits en attente + les 7 nouveaux). **Jamais de `--force`, jamais de réécriture de l'historique déjà poussé.**
2. Vérifie que la CI GitHub Actions passe au vert sur les 4 étapes (`validate`, `test`, `typecheck`, `build`).
3. Vérifie que Netlify a bien redéployé, puis fais un **contrôle de fumée sur https://sankofaa.netlify.app/** :
   - accès direct à une route profonde (`/cours/course-geographie-20-senegal`) — le redirect SPA fonctionne ;
   - un cours de Géographie affiche bien **3 leçons** ;
   - la recherche « senegal » sans accent trouve « Sénégal » ;
   - les illustrations s'affichent (variantes `srcset` servies) ;
   - passage hors ligne après une première visite : l'application se charge encore ;
   - **un `localStorage` existant (version 6 ou antérieure) est migré sans perte** — XP conservé, favoris intacts.
4. Rapporte tout écart constaté **sans le corriger** dans ce lot.

### 5. NETTOYAGE DES RELIQUATS

- Supprime le dossier vide `docs/contenu-geographie` (doublon de `docs/contenu geographie`, avec espace).
- Supprime du disque les fichiers verrous Word `~$PROMPT-*.md` de la racine (déjà ignorés par Git, mais parasites).
- Complète le tableau récapitulatif de `docs/contenu geographie/SOURCES-geographie.md` : la colonne « chef d'État » est vide pour les régions **Centre, Est & Corne, Australe**. La donnée existe déjà dans l'en-tête de chaque fiche `geographie-NN-*.md` — recopie-la, datée du millésime 2026, **sans faire de recherche web**.
- Commit final : `Nettoie les reliquats de la Phase 7 et complete SOURCES-geographie`.

### 6. RAPPORT DE FIN DE LOT

Termine par un tableau : commit (hash court + sujet), nombre de fichiers, statut CI, statut Netlify, URL vérifiée, et la liste explicite de **ce qui reste ouvert** à l'issue du lot.

### CE QU'IL NE FAUT PAS FAIRE

- ❌ Lancer `npm run format` (reformatage global Prettier) — décision assumée, réservée à un commit dédié.
- ❌ Corriger un bug, refactorer ou « améliorer au passage » quoi que ce soit. Si tu repères une incohérence, **note-la dans le rapport final**, ne la corrige pas.
- ❌ Ajouter du contenu éditorial.
- ❌ `git add .` en un seul bloc : le découpage thématique du § 3 est le livrable.

---

## APRÈS CE LOT

1. Enchaîner avec **`PROMPT-07f-documentation.md`** (lot 7.6) : `docs/PROCEDURE-AJOUT-CONTENU.md` et `docs/DECISIONS.md` — prérequis de la Phase 8.
2. Passer les **critères de sortie de la Phase 7** (`docs/PHASE-7-CONSOLIDATION.md` § 5), dont le test de reprise à froid.
3. Ouvrir la **Phase 8 — équilibrage éditorial**, en commençant par la matière **Personnalités**, cible **30 cours** (format 5 leçons + quiz de 5 questions, comme l'Histoire).
