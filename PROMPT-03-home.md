# PROMPT 03 — HOME « TABLEAU DE BORD » (PHASE 3) — SANKOFA

> **Comment l'utiliser** : dans VS Code, ouvre le projet Sankofa, lance Claude Code, puis colle le bloc ci-dessous.
> **Pré-requis** : la **Phase 2** (détail de cours + quiz interactif via `QuizPlayer`) devrait être en place, car deux modules du Home s'appuient dessus (le « Défi du jour » réutilise le moteur de quiz, « Continue ton apprentissage » ouvre un cours). Si la Phase 2 n'est pas encore faite, ces deux modules doivent se dégrader proprement (voir §6).

---

## LE PROMPT À COLLER

Tu es un **développeur front-end senior**. Nous continuons le projet **Sankofa** (React 18 + Vite + TypeScript + Tailwind v4 + Zustand + React Router). Les fondations (Phase 1) et le cœur d'apprentissage (Phase 2) sont en place. Cette phase transforme l'onglet **Home**, aujourd'hui trop vide (il n'affiche qu'une carte à swiper), en un **véritable tableau de bord d'accueil, vivant et attractif**.

### 0. AVANT D'ÉCRIRE LA MOINDRE LIGNE

Lis d'abord pour respecter l'existant : `CLAUDE.md`, `docs/ARCHITECTURE.md`, `docs/DESIGN-SYSTEM.md`, `src/types/index.ts`, `src/store/useAppStore.ts`, `src/lib/gamification.ts`, `src/routes/HomeScreen.tsx`, `src/components/features/SwipeCard.tsx`, `src/data/*`.

Respecte **strictement** les conventions :
- `src/data/` est en **lecture seule** ; seule la progression (`UserProgress` dans le store) est mutable et persistée.
- Les composants `features/` sont **présentationnels** (props en entrée, pas d'accès au store) ; c'est `HomeScreen` (route) qui orchestre (lecture données + store, navigation).
- Aucune couleur codée en dur : uniquement les tokens du design system.
- Réutilise l'existant (`Button`, `Card`, `Tag`, `Badge`, `ProgressBar`, `SwipeCard`, et le `QuizPlayer` de la Phase 2).

### 1. OBJECTIF DE CETTE PHASE

Reconstruire `HomeScreen` en un tableau de bord composé de plusieurs modules, **le fil à swiper restant la vedette**. Ordre des modules, de haut en bas :

1. **Salutation + objectif du jour**
2. **Ta découverte du jour** (le swipe, en héros)
3. **Défi du jour** (quiz éclair)
4. **Continue ton apprentissage**
5. **Explore par thème**
6. **Proverbe du jour**
7. **Coup d'œil sur ta progression**

### 2. PÉRIMÈTRE

**À construire** : les 7 modules ci-dessous, les composants présentationnels associés, les données de proverbes, et la logique d'état « du jour ».
**Ne PAS construire** : le vrai geste de swipe tactile (Phase 4), l'authentification, un back-end.

### 3. DÉTAIL DES MODULES

**① Salutation + objectif du jour** — composant `features/DailyGoalCard.tsx`.
- Salutation contextuelle selon l'heure (« Bonjour », « Bon après-midi », « Bonsoir ») + sous-titre motivant (« Prêt à explorer l'Afrique aujourd'hui ? »).
- Objectif quotidien : `X / OBJECTIF cartes apprises aujourd'hui` avec une `ProgressBar`, et la série 🔥 en évidence. Quand l'objectif est atteint, afficher un état de félicitation (ex. « Objectif atteint ! 🎉 »).

**② Ta découverte du jour** — le fil à swiper, en héros.
- Réutilise `SwipeCard`, précédé d'un petit titre de section (« ✨ Ta découverte du jour »).
- **Enrichis la carte** : permettre de **taper la carte pour révéler le contenu complet** (`card.content`, aujourd'hui inutilisé), puis de le replier. Garde les boutons ✗ / ✓ et le favori. L'état d'expansion est un état d'UI local (autorisé dans le composant présentationnel).
- Conserve le comportement actuel (✓ = apprendre → XP + maîtrise + comptage du jour ; ✗ = passer). À la fin du paquet, garder l'état « Tu as fait le tour ! ».

**③ Défi du jour** — composant `features/DailyChallengeCard.tsx` + intégration quiz.
- Une carte accrocheuse « Défi du jour — Quiz éclair » annonçant un bonus d'XP.
- Au clic, lance un quiz de **3 questions** tirées aléatoirement (mais **stables sur la journée**, voir §6) parmi les `quiz` de tous les cours, en **réutilisant le `QuizPlayer`** de la Phase 2 (dans une route dédiée `('/defi')` ou une vue plein écran).
- À la réussite, attribue un **bonus d'XP** (`addXp`) et enregistre le résultat (`recordQuizResult` si présent). Le défi n'est faisable **qu'une fois par jour** : une fois fait, la carte affiche « Défi relevé ✓ — reviens demain ».

**④ Continue ton apprentissage** — composant `features/ContinueLearningCard.tsx`.
- Affiche le cours à reprendre : en priorité le dernier cours ouvert (`lastCourseId` s'il existe dans le store), sinon le premier cours **non terminé** (absent de `completedCourseIds`).
- Carte cliquable qui navigue vers `('/cours/:id')`. Titre du cours, catégorie (`Tag`), et un libellé « Reprendre » (ou « Commencer » si jamais ouvert).
- Si **tous** les cours sont terminés, afficher un état positif (« Tu as tout terminé, bravo ! ») renvoyant vers la Biblio.

**⑤ Explore par thème** — composant `features/ThemeExplorer.tsx`.
- Une rangée de **6 pastilles** (une par catégorie), chacune avec l'emoji + le nom, sur sa **couleur de matière** (contour épais, ombre nette).
- Au clic, navigue vers la Biblio en **pré-filtrant sur la catégorie** (ex. `('/biblio?cat=histoire')`). Ajoute au besoin un filtrage simple par catégorie dans `BiblioScreen` (lecture du paramètre d'URL) ; si tu préfères, un défilement vers la section de la matière.

**⑥ Proverbe du jour** — composant `features/ProverbCard.tsx`.
- Affiche un proverbe africain + son origine/auteur, dans une carte élégante (guillemets stylés). Le proverbe est **déterministe pour la journée** (même proverbe toute la journée, voir §6).

**⑦ Coup d'œil sur ta progression** — composant `features/ProgressGlance.tsx`.
- 3 mini-statistiques compactes : **XP gagné aujourd'hui**, **série (jours)**, **cartes collectées** (total). Réutilise le style des `StatCard` si pertinent, en version condensée.

### 4. DONNÉES À AJOUTER

Crée `src/data/proverbs.ts` : un tableau `PROVERBS` d'environ **12 proverbes africains** typés (`{ id, text, origin }`). Exemples possibles (à **vérifier** et compléter) :
- « Seul, on va plus vite ; ensemble, on va plus loin. » — proverbe africain
- « Il faut tout un village pour élever un enfant. » — proverbe africain
- « Un vieillard qui meurt, c'est une bibliothèque qui brûle. » — Amadou Hampâté Bâ (Mali)
- « Quand tu ne sais pas où tu vas, souviens-toi d'où tu viens. » — proverbe akan (esprit *Sankofa*)
- « La pluie ne tombe pas sur un seul toit. » — proverbe (Cameroun)
- « Le savoir est une lumière. » — proverbe africain

Attribue prudemment : si l'origine précise est incertaine, indique « proverbe africain » plutôt qu'une attribution douteuse.

### 5. TYPES

Ajoute dans `types/index.ts` : `interface Proverb { id: string; text: string; origin: string }`. Étends `UserProgress` avec le suivi quotidien et le dernier cours (voir §6).

### 6. ÉTAT & LOGIQUE (store + lib)

- **Suivi quotidien** : ajoute à `UserProgress` un objet `daily: { date: string | null; cardsLearned: number; xpEarned: number; challengeDone: boolean }`. Ajoute une action (ex. `addDailyProgress({ cards?, xp? })`) qui **réinitialise automatiquement** ces compteurs quand on change de jour (helper dans `lib/`, réutilise la logique de date de `gamification.ts`). Quand une carte est apprise (✓) ou le défi réussi, mets à jour `daily` en plus des actions existantes.
- **Objectif du jour** : ajoute `export const DAILY_GOAL = 5;` dans `gamification.ts`.
- **Sélection déterministe par jour** (proverbe + questions du défi) : calcule un index à partir de la date du jour (ex. *jour de l'année* modulo la taille du tableau) pour que le proverbe et le défi restent **stables toute la journée** et changent chaque jour. Mets ce helper dans `lib/`.
- **Dernier cours ouvert** : ajoute `lastCourseId: string | null` à `UserProgress` et une action `setLastCourse(id)` appelée à l'ouverture d'un `CourseDetailScreen` (si la Phase 2 est là).
- **Migration douce** : les blobs `localStorage` existants n'ont pas `daily`, `lastCourseId` (ni `quizResults`). Traite les champs manquants comme leurs valeurs par défaut (valeurs initiales défensives et/ou `migrate` du middleware `persist`).
- **Dégradation si Phase 2 absente** : si `QuizPlayer` / la route de cours n'existent pas encore, le « Défi du jour » et « Continue ton apprentissage » doivent afficher un état neutre (« Bientôt disponible ») au lieu de casser le build.

### 7. STYLE

Tout reste cohérent avec le design system : cartes à contour `--ink`, ombres nettes, `rounded-card`, couleurs de matière pour les pastilles et bandeaux, `font-heading` (Poppins) pour les titres. Soigne la **hiérarchie visuelle** : le module ② (swipe) doit rester le plus proéminent ; les autres modules le nourrissent sans l'écraser. Espacement vertical généreux entre les sections.

### 8. FAÇON DE TRAVAILLER

- **Commence par me proposer ton plan** : liste des composants créés, forme exacte des ajouts au store/types, modules impactés — et attends ma validation avant de coder.
- Code **typé, commenté, lisible** ; `HomeScreen` orchestre, les modules restent présentationnels.
- **Mets à jour la documentation** : `docs/ARCHITECTURE.md` (nouvelle structure du Home + suivi quotidien) et la section « Ce qui est en place / prochaines étapes » de `CLAUDE.md`.
- À la fin : `npm run typecheck` et `npm run dev` **sans erreur**, puis récapitulatif + prochaines étapes (Phase 4 : vrai geste de swipe + enrichissement du catalogue).

**Definition of done** : en ouvrant le Home, je vois une page d'accueil vivante — salutation + objectif du jour qui avance quand j'apprends des cartes, le fil à swiper en vedette (avec contenu complet au tap), un défi du jour jouable une fois par jour, un bloc pour reprendre un cours, des pastilles de thèmes, un proverbe du jour stable, et un aperçu de ma progression — le tout sans erreur de type ni de console, et fidèle au design system.
