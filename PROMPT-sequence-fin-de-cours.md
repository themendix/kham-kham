# Prompt — Séquence de fin de cours (Sankofa)

> À coller tel quel dans l'assistant de code (VS Code). Le prompt est calé sur l'architecture réelle du projet (fichiers, actions du store, helpers déjà vérifiés). **Objectif : implémenter l'enchaînement d'écrans de fin de cours, sans casser la logique existante.**

---

## 1. Contexte

Dans Sankofa, ouvrir un cours affiche aujourd'hui les leçons paginées (`LessonViewer`), puis le quiz, puis un unique écran de résultat (`QuizResultView`). Machine à états actuelle dans `src/routes/CourseDetailScreen.tsx` : `phase = "lessons" | "quiz" | "result"`.

On remplace l'écran de résultat unique par une **séquence de fin de cours** enchaînée, inspirée de l'app de référence :

```
Leçons  →  « Apprentissage terminé ! »  →  (Mini Quiz, optionnel)  →  « Collection avancée ! » (conditionnel)  →  « Jour de suite »  →  Retour à l'accueil
```

## 2. Décision produit (à respecter à la lettre)

- **La fin des leçons = le moment où le cours est considéré comme terminé.** Le quiz devient un **bonus optionnel** (« Mini Quiz »), plus une étape obligatoire.
- L'écran **« Collection avancée !» ne s'affiche QUE si** le cours appartient à une collection (`PARCOURS`). Sinon, on le saute et on va directement à « Jour de suite ».
- Aucune nouvelle donnée persistée : tout s'appuie sur l'état déjà présent dans le store. **Pas de bump de version de persistance, pas de migration.**

## 3. Machine à états cible (`CourseDetailScreen.tsx`)

Remplacer le type `Phase` par :

```ts
type Phase = "lessons" | "learningDone" | "quiz" | "collection" | "streak";
```

Transitions :

1. **`lessons` → `learningDone`** : à la validation de la **dernière** leçon (dans `goNextLesson`, branche `else`), appeler une fonction `finishLearning()` au lieu de passer au quiz.
2. **`learningDone`** :
   - bouton **« Mini Quiz → »** → `phase = "quiz"`.
   - bouton **✗ (passer)** → `advanceOutro()`.
3. **`quiz` → outro** : dans `handleQuizFinish`, après `recordQuizResult`, appeler `advanceOutro()` (ne plus afficher l'ancien `QuizResultView`).
4. **`collection` → `streak`** : bouton « Continuer → ».
5. **`streak` → accueil** : bouton « Retour à l'accueil » → `navigate("/")`.

`advanceOutro()` :
```ts
function advanceOutro() {
  const parcours = PARCOURS.find((p) => p.courseIds.includes(course!.id));
  setPhase(parcours ? "collection" : "streak");
}
```

## 4. Logique de crédit (important — idempotence)

`finishLearning()` centralise le crédit, **une seule fois**, à l'entrée de « Apprentissage terminé » :

```ts
function finishLearning() {
  const alreadyCompleted = progress.completedCourseIds.includes(course!.id);
  setRankAtStart(progress.rank);                       // pour détecter une montée de rang
  completeLesson(course!.id, course!.lessons[lessonIndex].id); // dernière leçon (idempotent)
  completeCourse(course!.id, course!.xp);              // idempotent : marque terminé + crédite course.xp
  if (!alreadyCompleted) addMastery(course!.categoryId, MASTERY_PER_COURSE);
  updateStreak();                                      // met à jour progress.streak (1×/jour)
  setPhase("learningDone");
}
```

- `completeCourse`, `completeLesson` sont **déjà idempotents** : les rejouer (cours refait) ne double-crédite pas.
- Le quiz ne crédite plus la complétion : `handleQuizFinish` ne garde que `recordQuizResult(...)` (pour l'historique du Profil « Mes quiz récents »). **Ne pas rappeler `completeCourse` pour l'XP.**
- **Conséquence assumée** (ne pas « corriger ») : lire les leçons sans faire le quiz suffit à obtenir le badge « Terminé ✓», l'XP du cours, la maîtrise et le streak. C'est voulu.

## 5. Écrans à créer

Composants **présentationnels** dans `src/components/features/` : ils reçoivent des props, **n'accèdent pas au store** (convention du projet). Toute la lecture du store et la navigation restent dans `CourseDetailScreen.tsx`.

### 5.1 `LearningDoneCard.tsx` — « Apprentissage terminé ! »
Props : `{ course, category, subject, rankedUp, newRank, onMiniQuiz, onSkip }` où `subject` = résultat de `getSubjectProgress(course.categoryId, progress, COURSES)` **calculé après** `completeCourse` (il reflète donc le niveau qu'on vient d'atteindre).

Contenu :
- Illustration = `course.emoji` sur un fond dégradé `SUBJECT_GRADIENT[category.color]`, avec une pastille ✓ en coin.
- Titre : **« Apprentissage terminé ! »**.
- Carte de progression de matière :
  - `category.emoji` + `category.name` ; badge **`NIV. {subject.level}`**.
  - ligne : `★ {course.xp} XP` · `{COURSES_PER_LEVEL - subject.coursesIntoLevel} cours avant niv. {subject.level + 1}`.
  - `ProgressBar` avec `percent={subject.progressPct}` et `fillClassName={SUBJECT_BG[category.color]}`.
  - badge **`+{course.xp} XP gagnés`**.
  - si `rankedUp` : badge **`🏅 Nouveau rang : {newRank}`**.
- Deux boutons en bas : **✗** (secondaire, → `onSkip`) et **« Mini Quiz → »** (primaire, → `onMiniQuiz`).

### 5.2 `CollectionProgressCard.tsx` — « Collection avancée ! » (conditionnel)
Props : `{ parcours, completedCount, onContinue }` où `completedCount = parcours.courseIds.filter(id => progress.completedCourseIds.includes(id)).length`.

Contenu :
- Titre **« Collection avancée ! »** + sous-titre `parcours.title`.
- Illustration = `parcours.emoji` sur dégradé, pastille « + » (ou ✓) en coin.
- Carte : gros **`{completedCount}`** ` / {parcours.courseIds.length}` **cours terminés**, `ProgressBar` (`completedCount / total * 100`), et une **rangée de pastilles** (une par `courseIds`, cochée si le cours est terminé — style pastilles rondes `border-[2.5px] border-ink`, cochée = `bg-gold`/accent).
- Bouton **« Continuer → »** → `onContinue`.

### 5.3 `StreakCelebration.tsx` — « Jour de suite »
Props : `{ streak, subjectName, onHome }`.

Contenu :
- Grande flamme (`lucide-react` `Flame`, `fill="currentColor"`, teinte `text-flame`) au-dessus d'un gros nombre **`{streak.count}`**.
- Libellé **« {streak.count > 1 ? "Jours" : "Jour"} de suite »**.
- Phrase motivante : **« Tu deviens vraiment cultivé, tu deviens incollable en {subjectName} ! »**.
- Rangée L M M J V S D à partir de `streak.weekDays` (index 0 = lundi). Réutiliser le rendu des pastilles de `StreakTracker` — au besoin, extraire cette rangée dans un petit composant partagé pour éviter la duplication (optionnel).
- Bouton **« Retour à l'accueil 🏠 »** → `onHome`.

## 6. Ajustement de `LessonViewer` / label

Dans `CourseDetailScreen`, le `nextLabel` de la dernière leçon vaut aujourd'hui `"Commencer le quiz →"`. Le remplacer par quelque chose comme **`"J'ai terminé ✓"`** puisque la dernière leçon mène désormais à « Apprentissage terminé », plus au quiz.

## 7. Contraintes d'architecture (ne pas dévier)

- Stack : React 18 + TS strict + Tailwind v4 (tokens CSS-first via `@theme`, **pas** de `tailwind.config.js`). Alias `@/` → `src/`.
- **Design system centralisé** : style néo-brutaliste cohérent avec l'existant — cartes `rounded-card border-[3px] border-ink bg-card shadow-card`. **Aucune couleur en dur** hors dégradés d'illustration ; utiliser les tokens et `SUBJECT_GRADIENT` / `SUBJECT_BG` (`src/lib/subjectStyles`). Voir `docs/DESIGN-SYSTEM.md`.
- **Séparation stricte** : `components/features/*` présentationnels (props only, pas de store) ; `CourseDetailScreen.tsx` orchestre (store + navigation + machine à états).
- Si animation d'apparition : respecter `prefers-reduced-motion` via le hook existant `useReducedMotion` (`src/hooks/useReducedMotion.ts`).
- **Pas** de nouveau champ dans `UserProgress`, **pas** de bump de `version`/`migrate` du store : la séquence ne stocke que de l'état d'UI éphémère (`phase`).

## 8. Éléments existants à réutiliser (ne rien réinventer)

- Store `src/store/useAppStore.ts` : `completeCourse(courseId, xpReward)`, `completeLesson(courseId, lessonId)`, `addMastery(categoryId, amount)`, `updateStreak()`, `recordQuizResult(result)`, `markCourseStarted`, `setLastCourse`.
- `src/lib/subjectProgress.ts` : `getSubjectProgress(categoryId, progress, allCourses)` → `{ level, coursesIntoLevel, progressPct, xp, completedCount, totalCount }` ; `COURSES_PER_LEVEL` (= 3).
- `src/lib/gamification.ts` : `MASTERY_PER_COURSE`, rangs globaux.
- `src/data/parcours.ts` : `PARCOURS` (`Parcours[]`, chaque item a `courseIds`, `title`, `emoji`, `description`).
- `src/components/features/StreakTracker.tsx` : rendu des pastilles hebdo à partir de `StreakState { count, weekDays: boolean[] }`.
- `src/components/ui/` : `Card`, `Button`, `Tag`, `Badge`, `ProgressBar`.

## 9. Documentation

Après implémentation, ajouter une section **« Phase 7 — Séquence de fin de cours »** dans `C:\kham-kham\CLAUDE.md` (et un mot dans `docs/ARCHITECTURE.md` si pertinent) décrivant : la nouvelle machine à états, le déplacement de la complétion à la fin des leçons, le quiz devenu optionnel, et la condition d'affichage de l'écran Collection.

## 10. Critères de validation

1. `npm run build` (ou `tsc --noEmit`) passe sans erreur de type.
2. **Cours rattaché à une collection** (ex. `course-geo-grand-continent`) → la séquence inclut l'écran « Collection avancée ! » avec le bon `X / N`.
3. **Cours non rattaché** → l'écran Collection est sauté ; on passe directement de « Apprentissage terminé » (ou du quiz) à « Jour de suite ».
4. **Sauter le quiz (✗)** termine quand même le cours : badge « Terminé ✓ » en Biblio, XP crédité, streak mis à jour, maîtrise +.
5. **Faire le Mini Quiz** enregistre bien une tentative visible dans Profil → « Mes quiz récents ».
6. **Refaire un cours déjà terminé** ne double-crédite pas la maîtrise.
7. Le streak affiché reflète `progress.streak` et n'incrémente qu'une fois par jour.
```
