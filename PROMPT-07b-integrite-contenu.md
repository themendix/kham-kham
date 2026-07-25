# PROMPT 07b — INTÉGRITÉ DU CONTENU & ANOMALIES (PHASE 7, LOT 2) — SANKOFA

> **Comment l'utiliser** : dans VS Code, ouvre le projet Sankofa, lance Claude Code, puis colle le bloc ci-dessous.
> **Pré-requis** : lot 1 (PROMPT-07a) terminé — dépôt propre, CI en place.
> **Périmètre** : corriger les 4 anomalies fonctionnelles identifiées **et** installer la barrière automatique qui empêche leur réapparition. Pas de refonte, pas de nouveau contenu.

---

## LE PROMPT À COLLER

Tu es un **développeur front-end senior**, rigoureux sur l'intégrité des données. Nous poursuivons la **Phase 7 « Consolidation »** du projet **Sankofa** (React 18 + Vite + TypeScript + Tailwind v4 + Zustand, aucun back-end, contenu statique dans `src/data/`).

Le catalogue est passé de 6 à **94 cours** (40 Histoire, 54 Géographie, plus 4 cours hérités). Cette croissance a introduit des incohérences qu'aucun mécanisme ne détecte. Ce lot corrige les anomalies **et** construit le garde-fou.

### 0. AVANT D'ÉCRIRE LA MOINDRE LIGNE

Lis : `docs/PHASE-7-CONSOLIDATION.md` (sections 1.1 et chantier 7.2), `CLAUDE.md`, `docs/ARCHITECTURE.md`, `src/types/index.ts`, `src/data/parcours.ts`, `src/data/courses.ts`, `src/data/courses/histoire.ts`, `src/data/courses/geographie.ts`, `src/lib/courseImages.ts`, `src/routes/CollectionsScreen.tsx`, `src/routes/CourseDetailScreen.tsx`, `src/store/useAppStore.ts`.

### 1. OBJECTIF (PÉRIMÈTRE STRICT)

**A. Construire un validateur de contenu** exécuté au build.
**B. Corriger 4 anomalies** : C1 (parcours orphelin), C2 (échec silencieux), C3 (XP de parcours jamais versée), C4 (pas de reprise de lecture).

**Ne PAS faire dans ce lot** : recalibrer la gamification (lot 3), écrire la suite de tests (lot 4), toucher aux performances ou aux écrans de liste (lot 5), ajouter du contenu éditorial.

### 2. VALIDATEUR DE CONTENU

Crée `scripts/validate-content.ts`, exposé par un script npm `validate`, et **ajoute-le au script `build`** ainsi qu'au workflow CI.

Règles à contrôler (bloquantes sauf mention contraire) :

1. **Unicité** des `id` de cours sur l'ensemble du catalogue.
2. **Unicité** des `id` de leçon **à l'intérieur d'un même cours** (l'unicité globale n'est pas requise : la clé de progression est `${courseId}:${lessonId}`).
3. **Unicité** des `id` de question à l'intérieur d'un même quiz.
4. Tout `courseId` référencé dans `src/data/parcours.ts` est **résolvable** dans `COURSES`.
5. Tout `categoryId` référencé par un cours ou une carte existe dans `CATEGORIES`.
6. Pour chaque question de quiz : `options.length >= 2`, `0 <= correctIndex < options.length`, `question` / `explanation` non vides.
7. Chaque cours a **au moins une leçon**, et aucun texte de leçon vide.
8. Chaque cours possède une **illustration** résolvable par la convention de nommage (`courseId` = nom de fichier `.webp`) — **avertissement non bloquant**, les 4 cours hérités n'en ayant pas.
9. Aucune **illustration orpheline** dans `src/assets/cours/` — avertissement non bloquant.

Contraintes :
- **Aucune nouvelle dépendance runtime.** Utilise l'outillage déjà présent (TypeScript/Node) ; si un exécuteur est nécessaire, préfère la solution la plus légère et justifie-la.
- Sortie **lisible en français** : une ligne par anomalie, groupée par règle, avec le fichier concerné ; un récapitulatif final `X erreurs, Y avertissements` ; **code de sortie ≠ 0** si au moins une règle bloquante échoue.

### 3. CORRECTION DES ANOMALIES

**C1 — Parcours orphelin.** `PARCOURS[2]` (« L'Afrique d'aujourd'hui et de toujours ») référence `course-geo-grand-continent`, cours supprimé lors du passage de la Géographie aux 54 pays. Le parcours affiche `0/2` mais ne liste qu'un cours : il est incomplétable.
→ **Propose-moi deux options** : (a) recomposer le parcours autour d'une fiche Géographie existante et pertinente (recommandé), (b) retirer le parcours. **Attends mon arbitrage.** Passe ensuite en revue **les 3 parcours** pour vérifier qu'aucune autre référence n'est morte.

**C2 — Échec silencieux.** `CollectionsScreen` filtre les cours introuvables (`.filter((c): c is Course => c !== undefined)`) sans rien signaler : c'est ce qui a laissé passer C1.
→ Remplace par un comportement **explicite** : en développement, échec bruyant (`throw` ou `console.error` très visible) ; en production, dégradation contrôlée sans écran blanc. Applique le même principe partout où un `getCourse(...)` peut renvoyer `undefined`.

**C3 — XP de parcours jamais versée.** `Parcours.xpReward` est affiché dans `ParcoursCard` (badge « ＋140 XP ») mais aucun code ne le crédite.
→ Implémente la complétion de parcours dans le store :
- nouveau champ `UserProgress.completedParcoursIds: string[]` ;
- action **idempotente** (même pattern que `completeCourse` / `completeLesson`) : quand tous les `courseIds` d'un parcours passent dans `completedCourseIds`, verser `xpReward` **une seule fois** et recalculer niveau/rang ;
- déclenchement au bon endroit : à la complétion d'un cours, vérifier les parcours qui le contiennent — pas au montage d'un écran, sinon la récompense dépendrait de la navigation ;
- retour visuel : état « Parcours terminé » sur `ParcoursCard` et, idéalement, une reconnaissance à l'écran de fin de cours.

**C4 — Pas de reprise de lecture.** `CourseDetailScreen` initialise toujours `lessonIndex` à `0`, alors que `progress.completedLessonIds` sait où l'utilisateur s'est arrêté.
→ Initialise sur la **première leçon non lue** du cours, avec repli sur `0`. Pour un cours **déjà terminé**, repartir de la leçon 1 (cohérent avec le mode révision `isRevision` existant). Ne casse pas le flux `lessons → quiz → résultat` ni les appels existants à `completeLesson` / `markCourseStarted`.

### 4. MIGRATION DU STORE

L'ajout de `completedParcoursIds` impose une migration.

- **Important** : le lot 3 modifiera lui aussi `UserProgress`. Pour éviter deux migrations successives, **prépare la structure** mais discute avec moi du **numéro de version** : soit tu passes en `version: 6` maintenant, soit tu regroupes avec le lot 3. **Propose et attends ma décision.**
- La migration doit **conserver toutes les progressions existantes** et backfiller les nouveaux champs sans casser les backfills précédents (`favoriteCardIds`/`favoriteCourseIds`, `quizResults`, `daily`, `startedCourseIds`, `completedLessonIds`, `featuredLessonKey`).
- Teste-la manuellement sur un `localStorage` existant avant de conclure (la suite de tests automatisée arrive au lot 4).

### 5. FAÇON DE TRAVAILLER

- **Commence par ton plan** (architecture du validateur, liste exhaustive des anomalies détectées à sa première exécution, approche pour chaque correctif) et **attends ma validation** avant de coder.
- Lance le validateur **avant** de corriger, et montre-moi son rapport : il doit détecter C1 tout seul. C'est le test du validateur.
- Code typé, commenté, en français, conforme aux conventions du projet (composants de présentation sans accès au store, `src/data/` en lecture seule à l'exécution).
- Mets à jour `docs/ARCHITECTURE.md` (validateur, complétion de parcours, reprise de lecture) et `CLAUDE.md`.
- À la fin : `npm run validate`, `npm run typecheck`, `npm run build` sans erreur, et un **récapitulatif**.

**Definition of done** : le validateur détecte une référence orpheline injectée volontairement et fait échouer le build · les 3 parcours sont complétables à 100 % · l'XP de parcours est versée exactement une fois · rouvrir un cours partiellement lu reprend à la bonne leçon · aucune progression existante n'est perdue.
