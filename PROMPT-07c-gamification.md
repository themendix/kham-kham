# PROMPT 07c — RECALIBRAGE DE LA GAMIFICATION (PHASE 7, LOT 3) — SANKOFA

> **Comment l'utiliser** : dans VS Code, ouvre le projet Sankofa, lance Claude Code, puis colle le bloc ci-dessous.
> **Pré-requis** : lots 1 et 2 (PROMPT-07a, PROMPT-07b) terminés.
> **Périmètre** : réaligner les règles du jeu sur un catalogue de 94 cours. **Deux arbitrages sont déjà tranchés** (A1 et A2) — ils sont dans le prompt, ne les rediscute pas.
> **C'est le lot le plus sensible de la Phase 7** : il touche `UserProgress` et donc la progression réelle des utilisateurs.

---

## LE PROMPT À COLLER

Tu es un **développeur front-end senior**, à l'aise avec les systèmes de progression et de gamification. Nous poursuivons la **Phase 7 « Consolidation »** du projet **Sankofa** (React 18 + Vite + TypeScript + Tailwind v4 + Zustand, aucun back-end).

**Le problème.** Toutes les constantes de gamification ont été calibrées pour un catalogue de **6 cours**. Il en compte aujourd'hui **94**. Conséquences mesurées :
- le rang maximal (« Gardien du savoir », 1 000 XP) est atteint après ~14 % du contenu, puis **plus rien ne progresse** ;
- `MASTERY_PER_COURSE = 60` avec un plafond de 100 fait afficher « Histoire 100 % » après **2 cours sur 40** : le radar du Profil est **faux** ;
- le fil Home est figé à **18 cartes** (`src/data/cards.ts`) et s'épuise en une session, pendant que 94 cours dorment à côté.

### 0. AVANT D'ÉCRIRE LA MOINDRE LIGNE

Lis : `docs/PHASE-7-CONSOLIDATION.md` (sections 1.2 et chantier 7.3), `CLAUDE.md`, `docs/ARCHITECTURE.md`, `src/lib/gamification.ts`, `src/lib/subjectProgress.ts`, `src/lib/featured.ts`, `src/lib/recommendations.ts`, `src/lib/daily.ts`, `src/store/useAppStore.ts`, `src/types/index.ts`, `src/data/cards.ts`, `src/routes/HomeScreen.tsx`, `src/routes/ProfilScreen.tsx`, `src/components/features/MasteryRadar.tsx`, `src/components/features/SwipeCard.tsx`.

**Puis chiffre l'existant et présente-le-moi** : XP total réellement disponible dans le catalogue (cours + leçons), par matière ; nombre de cours et de leçons par matière ; XP nécessaire à chaque palier actuel. On calibre sur des chiffres, pas au jugé.

### 1. DÉCISIONS DÉJÀ PRISES — À APPLIQUER, PAS À REDISCUTER

**A1 — Progression ouverte, sans plafond.**
- Les **5 rangs nommés existants** (Curieux, Éveillé, Initié, Sage, Gardien du savoir) sont **conservés** et **étalés** sur le catalogue actuel.
- Au-delà du dernier rang nommé, la progression **continue en niveaux numérotés, sans borne**, calculés par **formule de seuil croissante** (le coût d'un niveau augmente avec le niveau atteint) et non par table figée — ainsi, tout ajout futur de contenu ne demandera **aucun recalibrage**.
- `LEVEL_TIERS` reste la table de la zone « rangs nommés » ; la formule prend le relais ensuite. `getLevelInfo` doit gérer les deux régimes de façon transparente pour les écrans.
- Impacts à traiter : `UserProgress.level` devient un entier non borné ; `rank` cesse d'être un indicateur de progression une fois le dernier rang atteint. Les écrans qui n'affichent que `rank` (Profil, célébration de montée de rang dans `CourseDetailScreen`) doivent afficher **niveau + rang**. La détection `rankAtStart` ne déclenchera plus rien passé le dernier rang : **ajoute une célébration de montée de niveau** qui prend le relais.

**A2 — Fil Home généré depuis le catalogue.**
- Le fil Home est **dérivé des leçons des 94 cours**, sur le même principe que « À la une » (`src/lib/featured.ts`). Une carte = une leçon non lue, avec son cours et sa matière d'origine.
- **`CARDS` n'est pas supprimé** : les 18 cartes existantes deviennent une **sélection éditoriale prioritaire** servie en tête de fil, le catalogue prenant le relais ensuite. Aucun contenu n'est perdu et le fil devient inépuisable.
- **Cohérence obligatoire** : une leçon apprise dans le fil doit compter comme lue partout, et réciproquement — exactement la règle déjà en vigueur entre « À la une » et `CourseDetailScreen`. Fais **converger** `seenCardIds` et `completedLessonIds` plutôt que de maintenir deux compteurs parallèles ; propose-moi la stratégie de convergence avant de l'implémenter.
- **Point de vigilance** : `XP_PER_CARD = 15` et `XP_PER_LESSON = 10` récompensent désormais **le même geste**. Unifie-les, sinon la même leçon rapporte un montant différent selon l'écran.
- **Mutualise** la logique de sélection avec `pickNextFeaturedLesson` / `getLessonRef` au lieu de la dupliquer, et garantis que le fil et « À la une » ne proposent pas la même leçon au même moment.

### 2. RESTE À FAIRE DANS CE LOT

**Maîtrise dérivée (E2).** Supprime l'accumulation `masteryByCategory` et **dérive** la maîtrise du réel : `cours terminés dans la matière / cours de la matière`. C'est exactement le pattern déjà appliqué avec succès dans `src/lib/subjectProgress.ts` — étends-le au radar du Profil.
- Conséquence : le champ persisté `masteryByCategory` devient obsolète → migration.
- `src/lib/recommendations.ts` lit `masteryByCategory` : adapte-le à la valeur dérivée sans changer l'esprit du scoring (dernière matière ouverte > matière explorée > découverte).
- `addMastery`, `MASTERY_PER_CARD`, `MASTERY_PER_COURSE` disparaissent ou changent de rôle : dis-moi lequel.

**Catalogue déséquilibré (E4).** Le catalogue compte 54 cours en Géographie, 40 en Histoire, mais **1 seul** pour Personnalités, Arts & Musique, Traditions & Sociétés et Afrique contemporaine. **Ne produis aucun contenu ici** (c'est la Phase 8) : rends simplement le déséquilibre **non pénalisant**.
- `pickNextFeaturedLesson` : gérer proprement une matière épuisée sans dégrader la rotation en un aller-retour Histoire ↔ Géographie.
- `recommendCourses` : ne pas recommander en boucle les mêmes 4 cours.
- UI : signaler honnêtement une matière en cours de constitution plutôt que de faire semblant.

**Format des cours (E5).** Une fiche Géographie = **1 leçon** ; un cours Histoire = **5 leçons**. Deux objets typés `Course` de poids très différents (10 XP de leçons contre 50), sans règle écrite. **Propose-moi un arbitrage** (A4) : (a) statu quo, (b) champ `format` sur `Course`, (c) XP pondérée par nombre de leçons — *recommandation : (c)*. **Attends ma décision**, puis documente-la.

### 3. MIGRATION DU STORE — POINT CRITIQUE

Ce lot modifie `UserProgress` (maîtrise, convergence cartes/leçons, éventuellement format).

- **Regroupe tous les changements en une seule migration**, en coordination avec ce qui a été fait au lot 2 (`completedParcoursIds`).
- **Règle absolue : aucune progression existante ne doit être perdue.** Un utilisateur qui a terminé 12 cours doit les retrouver, avec un niveau cohérent après recalibrage. Explique-moi **explicitement** ce que devient le niveau d'un utilisateur existant après changement de barème (il peut « descendre » : c'est acceptable si c'est assumé et expliqué à l'écran, ce n'est pas acceptable en silence).
- La suite de tests de migration arrive au **lot 4** : ici, teste manuellement sur un `localStorage` réel et **décris-moi le protocole** que tu as suivi.

### 4. FAÇON DE TRAVAILLER

- **Commence par les chiffres (§0) et ton plan de recalibrage** — barème proposé avec la table des paliers et la formule au-delà, stratégie de convergence cartes/leçons, effet sur un utilisateur existant — et **attends ma validation avant de coder**.
- Respecte les conventions : `src/data/` en lecture seule à l'exécution, seul le store est mutable ; composants de présentation sans accès au store ; aucune couleur codée en dur.
- Code typé, commenté, en français.
- Mets à jour `docs/ARCHITECTURE.md` (nouveau barème, maîtrise dérivée, origine du fil Home) et `CLAUDE.md`.
- À la fin : `npm run validate`, `npm run typecheck`, `npm run build` sans erreur, plus un **récapitulatif** et la liste des constantes modifiées avec leur ancienne et leur nouvelle valeur.

**Definition of done** : un utilisateur ayant terminé 100 % du catalogue atteint le rang maximal — et pas avant · la progression continue au-delà, en niveaux numérotés · le radar de maîtrise reflète les cours réellement terminés · le fil Home ne s'épuise plus et ne repropose jamais une leçon déjà lue ailleurs · une leçon rapporte le même XP quel que soit l'écran · aucune progression existante perdue.
