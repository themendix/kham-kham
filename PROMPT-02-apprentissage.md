# PROMPT 02 — CŒUR D'APPRENTISSAGE (PHASE 2) — SANKOFA

> **Comment l'utiliser** : dans VS Code, ouvre le projet Sankofa et lance Claude Code, puis colle le bloc ci-dessous.
> Ce prompt suppose que la **Phase 1 (fondations) est déjà en place** (échafaudage, design system, 4 écrans, store, docs).
> Objectif de la Phase 2 : rendre l'app réellement **jouable** — lire un cours, passer un quiz, gagner de l'XP.

---

## LE PROMPT À COLLER

Tu es un **développeur front-end senior**. Nous continuons le projet **Sankofa** (application web de culture générale africaine, React 18 + Vite + TypeScript + Tailwind v4 + Zustand + React Router). La **Phase 1 (fondations) est terminée** : design system, 4 onglets, store persistant, contenu d'exemple, documentation.

### 0. AVANT D'ÉCRIRE LA MOINDRE LIGNE

Lis d'abord ces fichiers pour respecter l'existant et ne rien casser :
- `CLAUDE.md`, `docs/ARCHITECTURE.md`, `docs/DESIGN-SYSTEM.md`
- `src/types/index.ts`, `src/store/useAppStore.ts`, `src/lib/gamification.ts`
- `src/routes/*`, `src/data/courses.ts`, et les composants `components/ui/` et `components/features/`

Respecte **strictement** les conventions déjà en place :
- `src/data/` est en **lecture seule** à l'exécution ; seul le store (`UserProgress`) est mutable.
- Les composants `ui/` et `features/` sont **présentationnels** (reçoivent des props, n'accèdent pas au store). Ce sont les `routes/*` qui orchestrent (lecture données + store).
- Tous les tokens visuels viennent du design system (`styles/index.css`) — pas de couleurs codées en dur.
- Réutilise les composants existants (`Button`, `Card`, `Tag`, `Badge`, `ProgressBar`) et les actions du store existantes (`completeCourse`, `addXp`, `addMastery`, `updateStreak`).

### 1. OBJECTIF DE CETTE PHASE

Construire le **parcours d'apprentissage complet d'un cours**, de bout en bout :
1. Un **écran de détail de cours** (leçons paginées).
2. Un **quiz interactif** jouable, avec correction et explication.
3. Un **écran de résultat** qui attribue l'XP et met à jour la progression.
4. La **navigation** depuis la Biblio (et les Collections) vers ce détail.
5. L'affichage de l'**état « terminé »** des cours dans la Biblio.

### 2. PÉRIMÈTRE

**À construire** : détail de cours, quiz, résultat, navigation, intégration au store, et 3 nouveaux cours complets pour tester le flux.

**Ne PAS construire dans cette phase** : le vrai geste de swipe tactile sur Home (reste en Phase 3), l'authentification, un back-end, le catalogue de contenu complet (on ajoute juste quelques cours pour tester).

### 3. ÉCRAN DE DÉTAIL DU COURS

Crée une route `('/cours/:courseId')` et un écran `src/routes/CourseDetailScreen.tsx` qui orchestre. Structure de l'écran :
- **En-tête** : bandeau illustré (dégradé de la couleur de la matière + emoji du cours), `Tag` de catégorie, titre, description, et une ligne de méta (`📖 X leçons`, `✅ X quiz`, badge XP `＋{course.xp} XP`). Un bouton retour vers la Biblio.
- **Leçons paginées** : affiche **une leçon à la fois** (`lesson.title` + `lesson.content`), avec une `ProgressBar` de progression dans le cours et des boutons `Précédent` / `Suivant`. À la dernière leçon, le bouton devient **« Passer le quiz → »**.
- Crée un composant présentationnel `components/features/LessonViewer.tsx` (reçoit la leçon + l'état de pagination en props).

### 4. QUIZ INTERACTIF

Crée un composant présentationnel `components/features/QuizPlayer.tsx` qui reçoit `questions: QuizQuestion[]` et un callback `onFinish(score, total)`. Comportement :
- Affiche **une question à la fois** avec une `ProgressBar` (question k / n).
- Les **4 options** sont des boutons style néo-brutaliste (contour épais, ombre nette).
- Au clic sur une option : verrouille la sélection, colore en **vert** (`--success`) la bonne réponse et en **rouge** (`--danger`) la mauvaise si elle a été choisie, puis affiche une **carte d'explication** (`question.explanation`).
- Un bouton **« Question suivante → »** apparaît après réponse ; à la dernière question il devient **« Voir mon résultat »**.
- Comptabilise le score (nombre de bonnes réponses).

### 5. ÉCRAN / ÉTAT DE RÉSULTAT

À la fin du quiz, affiche un résultat : score `X / N`, pourcentage, message adapté (ex. ≥ 80 % « Excellent ! », ≥ 50 % « Bien joué », sinon « Continue à explorer »), et l'**XP gagné**. Signale si l'utilisateur **monte de rang** (compare `getLevelInfo` avant/après). Boutons : **« Refaire le quiz »** et **« Retour à la Biblio »**.

### 6. INTÉGRATION AU STORE (progression réelle)

- À la **réussite du cours** (quiz terminé), appelle `completeCourse(course.id, course.xp)` (déjà idempotent) puis `addMastery(course.categoryId, N)` (choisis une valeur cohérente, ex. score/total × 60) et `updateStreak()`.
- **Étends le modèle** pour rendre le Profil vivant :
  - Dans `types/index.ts`, ajoute `interface QuizResult { courseId: string; score: number; total: number; date: string }` et ajoute `quizResults: QuizResult[]` à `UserProgress`.
  - Dans le store, ajoute l'action `recordQuizResult(result: QuizResult)` (garde au plus les 10 derniers), et pense à l'initial state + la migration douce (si `quizResults` est absent du localStorage existant, le traiter comme `[]`).
  - Mets à jour `ProfilScreen` : le **taux de réussite** = somme des scores / somme des totaux des `quizResults` ; la section **« Mes quiz récents »** liste les derniers résultats (titre du cours + score). Garde l'état vide élégant s'il n'y en a pas encore.
- Dans la **Biblio**, affiche un marqueur **« Terminé ✓ »** (ou une coche) sur les cours dont l'`id` est dans `completedCourseIds`.

### 7. NAVIGATION

- Rends les **CourseCard** de la Biblio et le cours **« À la une »** cliquables → `navigate('/cours/:id')` (via `Link` ou `useNavigate`).
- Dans **Collections**, permets d'ouvrir un parcours et d'accéder à ses cours (au minimum : lister les cours du parcours via `courseIds` et les rendre cliquables vers le détail).
- Assure-toi que la barre de navigation (BottomNav / Sidebar) et le retour arrière fonctionnent correctement avec la nouvelle route.

### 8. CONTENU À AJOUTER (faits exacts obligatoires)

Ajoute **3 cours complets** (chacun : description + 3 leçons + quiz de 3-4 questions avec explications), dans des matières différentes, pour tester la variété. Suggestions :
- **Géographie** — *« Le grand continent »* : 54 pays ; le Sahara (plus grand désert chaud) ; le Kilimandjaro (5 895 m, plus haut sommet) ; le lac Victoria (plus grand lac) ; le Nigeria (pays le plus peuplé).
- **Personnalités** — *« Voix et plumes d'Afrique »* : Wole Soyinka (1er Africain prix Nobel de littérature, 1986) ; Chinua Achebe ; Léopold Sédar Senghor ; Naguib Mahfouz (Nobel 1988) ; Chimamanda Ngozi Adichie.
- **Arts & Musique** — *« Rythmes du continent »* : Afrobeat (Fela Kuti) ; Mbalax (Youssou N'Dour, Sénégal) ; Soukous (Congo) ; Amapiano (Afrique du Sud).

**Vérifie l'exactitude de chaque fait** (dates, noms, records). En cas de doute, choisis un fait plus sûr. Les cours vivent dans `src/data/courses.ts` en respectant le type `Course` existant.

### 9. STYLE

Tout doit rester cohérent avec le design system : cartes à contour `--ink`, ombres nettes, `rounded-card`, couleurs de matière pour les bandeaux, `Poppins` pour les titres. Le quiz et le résultat doivent ressembler à la même famille visuelle que le reste de l'app.

### 10. FAÇON DE TRAVAILLER

- **Commence par me proposer ton plan** (nouveaux fichiers, routes ajoutées, modifications du store et des types) et attends ma validation avant de coder.
- Code **typé, commenté, lisible** ; réutilise l'existant plutôt que de dupliquer.
- **Mets à jour la documentation** : `docs/ARCHITECTURE.md` (nouvelle route + flux quiz), et la section « Ce qui est en place / prochaines étapes » de `CLAUDE.md`.
- À la fin : vérifie que `npm run typecheck` et `npm run dev` passent **sans erreur**, teste mentalement le flux complet, et fais-moi un **récapitulatif** + les prochaines étapes (Phase 3).

**Definition of done** : depuis la Biblio, je peux ouvrir un cours, lire ses leçons, passer le quiz, voir mon résultat, gagner de l'XP, et retrouver ce cours marqué « terminé » + mon score dans le Profil — le tout sans erreur de type ni de console.
