# PROMPT — Refonte de la séquence de fin de cours (Sankofa)

> Prompt d'exécution autonome. Il contient l'intégralité du cahier des charges, l'état des lieux
> du code existant et les critères d'acceptation. À coller tel quel dans une nouvelle session.

---

## 0. Contexte

Sankofa est une application web de culture générale africaine (React 18 + Vite + TypeScript +
Tailwind v4 + React Router + Zustand persistant). Lire `CLAUDE.md`, `docs/ARCHITECTURE.md` et
`docs/DESIGN-SYSTEM.md` avant toute modification.

Quand l'utilisateur termine un cours, une séquence d'écrans de célébration s'enchaîne. Cette
séquence existe déjà mais elle est visuellement tassée, sa logique est éclatée en `if` en
cascade, et elle ne correspond pas au schéma voulu. **Ce lot la refond entièrement.**

Le schéma cible est inspiré d'une application de référence (micro-apprentissage gamifié) dont
on reprend **la structure, les proportions, le rythme vertical et la hiérarchie
typographique** — mais **en aucun cas les couleurs, contours, ombres ou polices**, qui restent
strictement ceux du design system néo-brutaliste de Sankofa (`src/styles/index.css` `@theme`).

Périmètre : uniquement la séquence de fin de cours. Pas de nouveau contenu éditorial, pas de
changement du modèle de données, **pas de migration du store** (la version de persistance reste
à 7).

---

## 1. Cahier des charges (décisions verrouillées — ne pas les rediscuter)

### 1.1 La séquence

La séquence se compose d'un **segment de célébration** (1 à 3 écrans) suivi d'une **queue**
(quiz et streak, tous deux conditionnels).

**Segment de célébration**, dans cet ordre :

| # | Écran | Condition d'affichage |
|---|---|---|
| 1 | « Apprentissage terminé ! » | toujours |
| 2 | « Niveau supérieur ! » | seulement si le cours vient de faire monter le **niveau de matière** |
| 3 | « Collection avancée ! » | seulement si le cours appartient à un parcours |

**Queue**, après le segment :

| # | Écran | Condition d'affichage |
|---|---|---|
| 4 | Résultat du quiz | seulement si l'utilisateur accepte de faire le quiz |
| 5 | Streak | seulement si la série a réellement progressé aujourd'hui |

### 1.2 Les boutons

Règle générale : **le dernier écran affiché porte toujours une sortie explicite vers
l'accueil.**

| Écran | Bouton principal | Bouton secondaire |
|---|---|---|
| Écran de célébration **non terminal** | `Continuer →` | — |
| **Dernier** écran de célébration | `Passer au quiz →` | `Retour à l'accueil` |
| Résultat du quiz, si le streak suit | `Continuer →` | `↻ Refaire le quiz` |
| Résultat du quiz, si le streak ne suit pas | `Retour à l'accueil` | `↻ Refaire le quiz` |
| Streak | `Retour à l'accueil 🏠` | — |

Le « dernier écran de célébration » porte **toujours** ces deux boutons, quel que soit le
reste : c'est le carrefour de décision. Si l'utilisateur clique sur `Retour à l'accueil` alors
qu'aucun écran ne suit (quiz sauté **et** streak déjà validé aujourd'hui), on navigue
directement vers `/`. C'est le seul chemin sans écran de clôture, et c'est voulu — d'où le
libellé explicite plutôt que l'actuelle croix `✗` dont la destination n'est pas devinable
(gain d'accessibilité au passage : plus de bouton dont le sens repose sur un seul `aria-label`).

### 1.3 Autres décisions

- **Bouton « Retour » (flèche en haut) : conservé et visible pendant toute la séquence.**
- **Rang global et niveau global** (Curieux → Éveillé → … / niveaux numérotés) : ils restent
  affichés en **pastilles sur l'écran 1**. Ils n'ont pas d'écran dédié — l'écran 2 est réservé
  au niveau de matière. Sans cette règle, un cours chanceux enchaînerait trois écrans de
  félicitations d'affilée.
- **Vignette de l'écran 1** : illustration réelle du cours, **carrée**, recadrage
  `object-cover` piloté par `getCourseImagePosition(course.id)`.

---

## 2. État des lieux du code

### 2.1 Fichiers concernés

| Fichier | État actuel |
|---|---|
| `src/routes/CourseDetailScreen.tsx` | Orchestre la séquence via `type Phase = "lessons" \| "learningDone" \| "quiz" \| "collection" \| "streak"` et des `if` dispersés |
| `src/components/features/LearningDoneCard.tsx` | Écran 1 — à refondre visuellement **et** à simplifier fortement |
| `src/components/features/CollectionProgressCard.tsx` | Écran 3 — à refondre visuellement, fond fonctionnel correct |
| `src/components/features/StreakCelebration.tsx` | Écran 5 — à refondre visuellement |
| `src/components/features/QuizPlayer.tsx` | Quiz — **n'a aucun écran de résultat** |
| `src/lib/subjectProgress.ts` | `getSubjectProgress`, `COURSES_PER_LEVEL = 3` — à utiliser tel quel |
| `src/lib/gamification.ts` | `updateStreak(streak, now?)` — à utiliser tel quel |
| `src/lib/courseImages.ts` | `getCourseImage`, `getCourseImagePosition` |
| `src/components/ui/Button.tsx` | Variantes `primary \| secondary \| ghost`, **pilule compacte uniquement** |

### 2.2 Trois constats importants relevés à l'analyse

**a) L'écran de résultat du quiz n'existe pas.** `QuizPlayer` appelle `onFinish(score, total)`
immédiatement après la dernière question, et `handleQuizFinish` enchaîne directement sur la
suite. L'écran 4 est donc **à créer**, pas à réutiliser. Un modèle existe cependant :
`src/routes/DailyChallengeScreen.tsx` lignes 83-96 affiche déjà un résultat inline
(« X / Y bonnes réponses », icône `Trophy`, pastille XP, bouton de sortie) — s'en inspirer pour
rester cohérent, sans le factoriser prématurément (les deux écrans divergent : le Défi accorde
un bonus XP, pas le quiz de cours).

**b) `LearningDoneCard` contient une machine à états devenue inutile.** Le type `LevelUpStage`
et ses quatre étapes (`fillingToFull` → `atFull` → `reset` → `fillingRemainder`, ~60 lignes avec
ses `useEffect` et ses constantes de délai) simulent aujourd'hui la montée de niveau **à
l'intérieur** de l'écran 1 : la barre monte à 100 %, le badge `NIV.` bascule, la barre repart de
zéro. **L'écran 2 remplace tout ce mécanisme.** À supprimer intégralement. La barre de l'écran 1
monte simplement de `subjectBefore.progressPct` vers sa valeur d'arrivée — 100 % s'il y a montée
de niveau, et elle s'arrête là.

**c) Le crédit d'XP a lieu avant le quiz.** `finishLearning()` appelle `completeCourse()` et
`updateStreak()` dès la fin des leçons ; `handleQuizFinish` n'appelle que `recordQuizResult()` et
n'accorde aucun XP. Le niveau affiché à l'écran 2 est donc déjà définitif, et l'ordre
« célébration avant quiz » ne pose aucun problème de cohérence.

---

## 3. Travail à réaliser

### 3.1 Logique de séquence — `src/lib/outroSequence.ts` (nouveau)

Extraire toute la décision d'enchaînement dans un module **pur** (aucun accès au store, aucun
import de composant), sur le modèle des autres helpers de `src/lib/`.

```ts
export type CelebrationScreen = "done" | "levelUp" | "collection";
export type OutroScreen = CelebrationScreen | "quiz" | "quizResult" | "streak";

/** Segment de célébration : 1 à 3 écrans, connu dès la fin des leçons. */
export function buildCelebrationSegment(input: {
  leveledUp: boolean;
  hasParcours: boolean;
}): CelebrationScreen[];

/**
 * Queue de la séquence, résolue au moment du clic (faire ou sauter le quiz est un choix
 * de l'utilisateur, inconnu au moment où le segment est calculé).
 * Renvoie [] | ["streak"] | ["quiz","quizResult"] | ["quiz","quizResult","streak"].
 */
export function resolveOutroTail(input: {
  takeQuiz: boolean;
  streakAdvanced: boolean;
}): OutroScreen[];
```

Le segment de célébration est **indépendant** du choix quiz/pas quiz : son dernier élément porte
toujours le carrefour de décision. Une queue vide signifie « le bouton `Retour à l'accueil` du
dernier écran de célébration navigue directement vers `/` ».

### 3.2 Détection du streak — `CourseDetailScreen.tsx`

`updateStreak(streak)` (`src/lib/gamification.ts`) renvoie l'objet **inchangé** quand
`streak.lastActiveDate === today`. Capturer le drapeau dans `finishLearning()`, **avant**
l'appel à `updateStreak()`, exactement comme sont déjà capturés `rankAtStart`, `levelAtStart` et
`subjectBefore` :

```ts
const todayISO = /* même format ISO que toISODate() dans gamification.ts */;
setStreakAdvanced(progress.streak.lastActiveDate !== todayISO);
```

Ne pas modifier la signature de l'action `updateStreak` du store.

### 3.3 Composant de mise en page — `src/components/features/OutroLayout.tsx` (nouveau)

Le rythme vertical est le cœur de la refonte ; il ne doit pas être recopié dans cinq composants.
Créer un conteneur commun assurant :

- **plein écran** — plus de `Card` englobante ni de bandeau de rappel du cours ;
- un **espace généreux en haut** (l'écran de référence laisse environ un quart de la hauteur
  vide avant le visuel) ;
- le **contenu centré verticalement**, le visuel en haut, le texte au milieu ;
- un **pied de page** portant les boutons, collé en bas sur mobile, avec une marge de sécurité.

Il reçoit en props le visuel, le contenu et les boutons (`primary`, `secondary?`), et n'accède
jamais au store.

### 3.4 Design system — `src/components/ui/Button.tsx` + `docs/DESIGN-SYSTEM.md`

Le motif « bouton pilule **pleine largeur** en pied d'écran » n'existe pas dans Sankofa :
`Button` est aujourd'hui `inline-flex … px-6 py-3 text-[15px]`, compact et centré. Ajouter une
prop (`fullWidth?: boolean` ou `size?: "md" | "lg"`) produisant une pilule pleine largeur, plus
haute (`py-4`) et au libellé plus grand (`text-base`), **sans changer le rendu par défaut** —
`Button` est utilisé partout dans l'application.

Documenter la nouvelle variante dans `docs/DESIGN-SYSTEM.md`, ainsi que l'échelle
typographique des titres d'outro (~34 px mobile / ~40 px desktop, Poppins 800), nettement
au-dessus du `text-2xl` (24 px) actuel.

### 3.5 Écran 1 — « Apprentissage terminé ! »

Refonte de `LearningDoneCard.tsx`.

**Visuel** : vignette **carrée** d'environ 180 px, coins très arrondis, contour `ink` de 3 px,
ombre nette du design system (`shadow-card`, pas d'ombre diffuse), contenant l'illustration du
cours en `object-cover`. Pastille de validation en `success`, cercle d'environ 44 px, contour
`ink` de 3 px, coche blanche, **débordant du coin bas-droit** de la vignette.

```tsx
const image = getCourseImage(course.id);
// object-position piloté par getCourseImagePosition(course.id)
// repli si `image` est undefined : emoji du cours sur SUBJECT_GRADIENT[category.color]
```

`OBJECT_POSITION` est aujourd'hui une constante locale de `CourseCard.tsx` (ligne 9) :
**l'extraire vers `src/lib/courseImages.ts`** et l'importer dans les deux composants plutôt que
de la dupliquer.

Utiliser `sizes="180px"` : le navigateur servira la variante 400w, adaptée à un affichage
180 px en 2×. **Aucune régénération d'image n'est nécessaire** — les 124 cours ont déjà leurs
variantes 400w/800w (`src/assets/cours/`, 54 Géographie + 40 Histoire + 30 Personnalités). Le
repli emoji ne concernera que les 4 cours hérités (Arts, Traditions, Afrique contemporaine,
Personnalités d'origine).

⚠️ **Point de vigilance visuel** : les illustrations sont en **3:2 paysage** (1200×805). Un
recadrage carré en supprime environ un tiers de la largeur. `getCourseImagePosition()` renvoie
`"right"` par défaut pour la Géographie (le drapeau national est à droite) — sur une vignette
carrée, cela mettra le drapeau au centre et coupera la scène. **Vérifier le rendu sur plusieurs
cours de Géographie, d'Histoire et de Personnalités avant de conclure**, et signaler à
l'utilisateur si un ajustement de la règle semble nécessaire.

**Contenu**, sous la vignette :

- titre `Apprentissage terminé !` dans la nouvelle échelle typographique ;
- le titre du cours en sous-titre discret (`text-ink-muted`) ;
- un bloc « matière » : emoji + nom de la catégorie, badge `NIV. X` (niveau de matière), ligne
  `★ {course.xp} XP` et `{coursesLeft} cours avant niv. {level + 1}`, puis la `ProgressBar` ;
- la barre s'anime de `subjectBefore.progressPct` vers sa valeur d'arrivée
  (`animated`, `from` — la `ProgressBar` gère déjà tout cela) ;
- les pastilles : `＋{course.xp} XP gagnés` (ou `↻ Révision` si `isRevision`),
  `🏅 Nouveau rang : {newRank}` si `rankedUp`, `⭐ Niveau {newLevel}` si `levelUp`.

**Supprimer** : tout le bloc `LevelUpStage` et ses constantes `FILL_DELAY_MS`,
`FILL_DURATION_MS`, `LEVEL_BUMP_PAUSE_MS`, `RESET_PAUSE_MS`, `stage`, et les `useEffect`
associés. Conserver l'animation du compteur d'XP (`xpDisplayed`) et le respect de
`useReducedMotion`.

### 3.6 Écran 2 — « Niveau supérieur ! » (nouveau)

`src/components/features/LevelUpCard.tsx`. Écran très épuré :

- visuel : carré arrondi pastel de la matière (`SUBJECT_BG[category.color]`) portant l'emoji de
  la catégorie, environ 150 px, contour `ink` ;
- titre `Niveau supérieur !` dans la nouvelle échelle typographique ;
- sous-titre : le nom de la matière, discret ;
- la comparaison, motif typographique nouveau : `NIV. {avant}` petit et grisé, une flèche, puis
  `NIV. {après}` **très grand et gras** — le contraste d'échelle porte tout l'effet ;
- bouton pleine largeur.

Composant purement présentationnel : il reçoit `category`, `fromLevel`, `toLevel` et ses
boutons. Aucun accès au store, aucun calcul de niveau.

### 3.7 Écran 3 — « Collection avancée ! »

Refonte visuelle de `CollectionProgressCard.tsx`. La logique (comptage, `justCompleted`,
XP de parcours) est correcte et ne change pas.

Changements de structure, par rapport au rendu actuel :

- le **titre passe au-dessus de l'illustration** (aujourd'hui : bannière emoji en haut, titre
  dessous) ;
- l'illustration devient un **bandeau large 16:9** à coins arrondis ;
- les pastilles de cours deviennent un **chemin** : pastilles **reliées par des traits**, celles
  des cours terminés remplies et cochées, les autres en creux — pas une simple rangée espacée ;
- conserver `{completedCount} / {total} cours terminés` en grand, la `ProgressBar`, et le mode
  `justCompleted` (« Parcours terminé ! 🎉 » + pastille `＋{parcours.xpReward} XP`).

⚠️ Les parcours de `src/data/parcours.ts` ne comptent aujourd'hui que **2 cours** chacun : le
chemin de pastilles doit rester lisible avec 2 éléments comme avec 5.

### 3.8 Écran 4 — Résultat du quiz (nouveau)

`src/components/features/QuizOutcomeCard.tsx` + branchement dans `CourseDetailScreen`.

`QuizPlayer` reste inchangé : il continue d'appeler `onFinish(score, total)`. C'est
`CourseDetailScreen` qui stocke le résultat et affiche le nouvel écran, comme le fait déjà
`DailyChallengeScreen` avec son état `result`.

Contenu : `{score} / {total} bonnes réponses`, un message d'encouragement modulé par le score,
et les deux boutons de la section 1.2. `↻ Refaire le quiz` relance `QuizPlayer` sur le même
cours (remise à zéro de son état interne — un changement de `key` suffit) ; une nouvelle
tentative doit être enregistrée via `recordQuizResult` comme aujourd'hui.

### 3.9 Écran 5 — Streak

Refonte visuelle de `StreakCelebration.tsx` au nouveau rythme vertical. Contenu inchangé :
flamme, compteur, `WeekDayRow`, message. Il **n'est plus affiché systématiquement** — voir 3.2.

### 3.10 Orchestration — `CourseDetailScreen.tsx`

- remplacer le `type Phase` actuel par un **index dans la séquence** résolue par
  `src/lib/outroSequence.ts` (garder un état `lessons` distinct pour la phase de lecture) ;
- **supprimer** le bandeau de rappel du cours rendu quand `phase !== "lessons"` (lignes ~170-188
  actuelles) : il casse l'effet plein écran ;
- **conserver** le bouton « Retour » en haut pendant toute la séquence ;
- passer à chaque écran son libellé de bouton et ses handlers ; **aucun composant d'écran ne
  doit savoir où il se situe dans la séquence.**

Cas `isRevision` (cours déjà terminé, refait) : pas de gain d'XP, donc pas de montée de niveau
et pas d'avancement de collection — la séquence tombe naturellement à un seul écran de
célébration. Vérifier que ce chemin reste cohérent (barre statique, pastille `↻ Révision`).

---

## 4. Tests

Créer `src/lib/outroSequence.test.ts` (Vitest, catalogues synthétiques, comme les autres tests
de `src/lib/`) :

- `buildCelebrationSegment` : les 4 combinaisons `leveledUp` × `hasParcours`, longueurs et ordre ;
- `resolveOutroTail` : les 4 combinaisons `takeQuiz` × `streakAdvanced`, dont la queue vide ;
- le cas révision (aucune montée, aucune collection) donne bien un segment d'un seul écran.

Les **102 tests existants doivent rester verts**. Aucune modification de
`src/store/useAppStore.ts` n'est attendue : si le lot en exige une, s'arrêter et le signaler
avant de l'écrire.

---

## 5. Critères d'acceptation

1. `npm run validate` — propre.
2. `npm test` — tous verts, nouveaux tests inclus.
3. `npm run typecheck` — aucune erreur.
4. `npm run build` — succès.
5. `npm run lint` — aucune nouvelle erreur.
6. Les 8 chemins de la séquence parcourus manuellement dans le navigateur :

   | Montée de niveau | Collection | Quiz | Streak | Écrans attendus |
   |---|---|---|---|---|
   | non | non | sauté | stagne | 1 seul écran, sortie directe vers `/` |
   | non | non | fait | stagne | 1 → quiz → résultat (sortie accueil) |
   | oui | non | sauté | progresse | 1 → 2 → streak |
   | non | oui | sauté | progresse | 1 → 3 → streak |
   | oui | oui | sauté | stagne | 1 → 2 → 3, sortie directe vers `/` |
   | oui | oui | fait | progresse | 1 → 2 → 3 → quiz → résultat → streak |
   | oui | oui | fait | stagne | 1 → 2 → 3 → quiz → résultat (sortie accueil) |
   | révision | — | fait | stagne | 1 (révision) → quiz → résultat |

7. Vérification visuelle de la vignette carrée sur au moins 6 cours répartis entre Géographie,
   Histoire et Personnalités (cf. le point de vigilance en 3.5).
8. Contraste et navigation clavier préservés : chaque bouton est atteignable au `Tab`, le
   `:focus-visible` global reste visible, aucun bouton ne repose sur un seul `aria-label` pour
   être compris. L'application est aujourd'hui à 100 en accessibilité Lighthouse — ne pas
   régresser.
9. `prefers-reduced-motion` respecté : aucune animation de barre ni de compteur dans ce mode
   (`useReducedMotion` est déjà en place).

---

## 6. Hors périmètre

- Toute migration du store (la version de persistance reste **7**).
- Le contenu éditorial, les illustrations, la régénération d'index ou de variantes d'images.
- Les écrans hors séquence de fin de cours (Home, Biblio, Collections, Profil, Défi du jour).
- Le reformatage Prettier global du dépôt.

---

## 7. Restitution attendue

À la fin du lot, produire un compte rendu court indiquant : les fichiers créés / modifiés /
supprimés, le résultat des cinq commandes de la section 5, les chemins de la section 5.6
réellement testés, et **tout écart assumé** par rapport à ce prompt avec sa justification.

Mettre à jour `CLAUDE.md` (nouvelle section de livraison) et `docs/ARCHITECTURE.md` (§ séquence
de fin de cours) une fois le lot terminé et validé.
