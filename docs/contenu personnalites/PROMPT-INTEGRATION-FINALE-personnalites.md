# Prompt d'intégration finale — Personnalités (Sankofa)

**Ce document remplace `PROMPT-INTEGRATION-VSCODE-personnalites.md`** : il couvre à la fois l'intégration du contenu TypeScript **et** les illustrations, dont le **cadrage** demande une correction de code qui n'était pas identifiée dans la version précédente.

Ouvre le projet Sankofa (`C:\kham-kham`) dans VS Code, puis copie-colle le texte de la section **« PROMPT À COPIER »** à ton assistant IA.

> ✅ **PRÊT À EXÉCUTER.** Les **30 fiches sont rédigées** dans `docs/contenu personnalites/` (`personnalites-01-hatchepsout.md` … `personnalites-30-wangari-maathai.md`). Format vérifié programmatiquement : 5 leçons d'un paragraphe unique chacune, 5 questions à 4 options, un seul `✅` par question dont la position correspond au `correctIndex` annoncé.

> ⚠️ **Quatre différences avec les intégrations Histoire et Géographie :**
> 1. **Aucun patch de `LessonViewer`** n'est nécessaire — les cours sont au format Histoire, `LessonViewer` gère déjà ce rendu.
> 2. Il faut **créer un chunk de matière** (`courseContent.ts`), **régénérer l'index** (`npm run gen:index`) et **recalibrer les paliers d'XP** — mécanismes introduits par la Phase 7, absents des prompts précédents.
> 3. **L'id d'un cours n'est pas le nom de son fichier** : le préfixe `personnalites-` devient `course-perso-` (table complète au § 5).
> 4. **Le cadrage des images demande une correction de `getCourseImagePosition`** (§ 8.1). Sans elle, les 30 illustrations seront rognées du mauvais côté.

> Le prompt est **idempotent** : relançable à l'identique sans rien dupliquer.

---

## PROMPT À COPIER

Tu travailles dans le dépôt **Sankofa** (React 18 + Vite + TypeScript, alias `@/` → `src/`, Tailwind v4). Le contenu éditorial de la matière **Personnalités** est fourni en Markdown dans `docs/contenu personnalites/` (dossier avec une espace), un fichier par figure : `personnalites-01-hatchepsout.md` … `personnalites-30-wangari-maathai.md`.

Ta tâche : convertir les **30 fiches** en objets `Course` TypeScript, les intégrer dans le catalogue et dans le découpage du bundle, recalibrer la gamification, et corriger le cadrage des illustrations — **sans casser l'existant** (Histoire, Géographie, matières héritées).

### 1. Types à respecter (définis dans `src/types/index.ts` — NE PAS les modifier)

```ts
interface Course { id: string; categoryId: string; title: string; description: string; emoji: string; lessons: Lesson[]; quiz: QuizQuestion[]; xp: number; }
interface Lesson { id: string; title: string; content: string; }
interface QuizQuestion { id: string; question: string; options: string[]; correctIndex: number; explanation: string; }
```

### 2. Anatomie exacte d'une fiche

```markdown
# Cours NN — <Titre du cours>

> **Matière :** Personnalités · **Emoji :** 👑 · **XP :** 70
> **Sources :** UNESCO — … (voir `SOURCES-personnalites.md`)

**Description**
<un paragraphe d'accroche>

---

## Leçon 1 — <Titre de la leçon>

<un seul paragraphe, sur une seule ligne>

… (jusqu'à la leçon 5)

---

## Quiz (5 questions)

**Question 1.** <énoncé de la question>
- A. <option>
- B. <option> ✅
- C. <option>
- D. <option>

*Explication :* <texte de l'explication> *(correctIndex : 1)*

… (jusqu'à la question 5)
```

La ligne `> **Sources :**` est une **note éditoriale** : elle ne doit **pas** être reprise dans les données (le type `Course` n'a volontairement aucun champ `sources`).

### 3. Règles de conversion (une fiche → un objet `Course`)

- **id** : `"course-perso-"` + le nom du fichier **privé de son préfixe `personnalites-` et de son extension**. Ex. `personnalites-01-hatchepsout.md` → `"course-perso-01-hatchepsout"`.
  > ⚠️ L'id **ne reprend pas** le nom de fichier tel quel, contrairement à l'Histoire et à la Géographie. **La table du § 5 donne les 30 id attendus : recopie-les depuis cette table plutôt que de les recalculer.**
- **categoryId** : `"perso"` pour tous.
- **emoji** : celui de la ligne « Emoji : ».
- **xp** : **toujours `70`** (règle mécanique du chantier 7.3 : `20 + 10 × 5 leçons`).
- **title** : le texte du H1 après le tiret cadratin.
- **description** : le paragraphe sous la ligne en gras `**Description**`.
- **lessons** : les 5 leçons, dans l'ordre :
  - `id` = `` `${courseId}-lesson-N` `` (N de 1 à 5) ;
  - `title` = le texte après `## Leçon N — ` ;
  - `content` = le paragraphe, **en une seule chaîne sur une seule ligne**, sans `####` ni retour à la ligne.
- **quiz** : les 5 questions. Pour chacune :
  - `id` = `` `${courseId}-quiz-N` `` ;
  - `question` = l'énoncé sans le préfixe `**Question N.** ` ;
  - `options` = les 4 réponses **dans l'ordre A, B, C, D**, préfixes, `**` et `✅` retirés ;
  - `correctIndex` = **la valeur annoncée** dans `(correctIndex : N)`. Elle a été vérifiée sur les 150 questions comme correspondant à la position du `✅` ; en cas de divergence, **arrête-toi et signale-la** au lieu de choisir toi-même ;
  - `explanation` = le texte après `*Explication :*`, sans la mention `*(correctIndex : N)*`.

**Nettoyage** : supprime `**`, `*`, `✅` et les préfixes de lettres. Conserve les guillemets français « », les accents, les tirets cadratins, les exposants (`XVIIIᵉ`, `Iᵉʳ`). Échappe correctement apostrophes et caractères spéciaux.

### 4. Sortie attendue

#### 4.1 Créer `src/data/courses/personnalites.ts`

```ts
import type { Course } from "@/types";

// 30 cours (01 → 30) + le cours hérité déplacé depuis misc.ts, soit 31 au total
export const PERSONNALITES_COURSES: Course[] = [ /* … */ ];
```

#### 4.2 Déplacer le cours hérité `course-perso-voix-plumes-afrique`

Le cours **« Voix et plumes d'Afrique »** (3 leçons, 50 XP) vit dans `src/data/courses/misc.ts`. Il doit **quitter `misc.ts` et rejoindre `personnalites.ts`**, en fin de tableau, tel quel (id, leçons, quiz et `xp: 50` inchangés).

Raison — ne pas se tromper ici :

- il est **référencé par `parcours-voix-et-sons`** (`src/data/parcours.ts`). Le supprimer sans recomposer le parcours ferait échouer `npm run validate` et lever une exception en développement via `getCourseOrWarn(..., { strict: true })` ;
- surtout, l'étape 4.3 donne à `perso` un chargeur dédié. Or `getSubjectContent` **ne retombe sur `MISC_COURSES` que pour les matières sans chargeur** : le cours deviendrait invisible au chargement du contenu tout en restant dans l'index — un **cours fantôme**, ouvrable mais vide.

Ne le laisse **pas** dans `misc.ts` et ne l'ajoute **pas** aux deux fichiers (doublon dans `preloadAllSubjectContent`). Après déplacement, `misc.ts` ne contient plus que `arts`, `trad` et `actu`.

*(Variante, sur décision explicite seulement : supprimer le cours hérité et remplacer sa référence dans `parcours-voix-et-sons` par `course-perso-29-miriam-makeba`, thématiquement proche de « Voix et sons du continent ».)*

#### 4.3 Brancher la matière

1. **`src/data/courses.ts`** : importer `PERSONNALITES_COURSES` et l'insérer dans `COURSES` via un spread, après `...GEOGRAPHIE_COURSES`. Ne pas toucher à `getCourse` ni `getCourseOrWarn`.

2. **`src/data/courseContent.ts`** : ajouter la matière à `SUBJECT_LOADERS` pour un chargement à la demande :

   ```ts
   const SUBJECT_LOADERS: Record<string, () => Promise<Course[]>> = {
     histoire: () => import("@/data/courses/histoire").then((m) => m.HISTOIRE_COURSES),
     geo: () => import("@/data/courses/geographie").then((m) => m.GEOGRAPHIE_COURSES),
     perso: () => import("@/data/courses/personnalites").then((m) => m.PERSONNALITES_COURSES),
   };
   ```

   Mets à jour le commentaire de tête, qui affirme encore que « les 4 matières émergentes (perso/arts/trad/actu) sont assez légères pour rester bundlées avec le shell » — faux désormais pour `perso`.

3. **Régénérer l'index** : `npm run gen:index` → `src/data/coursesIndex.generated.ts` (fichier généré, jamais édité à la main), qui doit passer de **98 à 128 cours**. Commite-le.

#### 4.4 Recalibrer la gamification

L'XP total du catalogue passe de **9 440** à **13 040** (128 cours, 524 leçons, 7 800 XP de complétion + 5 240 XP de leçons). Dans `src/lib/gamification.ts` :

```ts
export const LEVEL_TIERS: LevelTier[] = [
  { minXp: 0, level: 1, rank: "Curieux" },
  { minXp: 1250, level: 2, rank: "Éveillé" },
  { minXp: 3900, level: 3, rank: "Initié" },
  { minXp: 7800, level: 4, rank: "Sage" },
  { minXp: 13040, level: 5, rank: "Gardien du savoir" },
];
```

et `OPEN_LEVEL_STEP` porté de `900` à **`1250`**.

> **Corrige au passage une anomalie existante** : le dernier palier valait `9260` alors que le catalogue offrait `9440` — « Gardien du savoir » s'atteignait à 98 % du catalogue, non à 100 % comme l'annonce `CLAUDE.md`. Ne reconduis pas l'écart.

Mets à jour `src/lib/gamification.test.ts` (seuils en dur) :
- la valeur `900` du test de seuil du niveau 6 → `1250` ;
- le tableau `samples` → `[0, 100, 1249, 1250, 3899, 3900, 7799, 7800, 13039, 13040, 14290, 30_000, 100_000]`.

**Aucune migration de store** : la Phase 8 n'ajoute aucun champ à `UserProgress`. La version de persistance reste à **7**. Ne touche ni à `useAppStore.ts`, ni à `migrate`.

### 5. Table de correspondance des 30 cours

| Fichier source | `id` | `emoji` | `title` |
|---|---|---|---|
| `personnalites-01-hatchepsout.md` | `course-perso-01-hatchepsout` | 👑 | Hatchepsout, la femme qui régna en pharaon |
| `personnalites-02-taharqa.md` | `course-perso-02-taharqa` | 🏛️ | Taharqa, le pharaon venu de Koush |
| `personnalites-03-dihya.md` | `course-perso-03-dihya` | ⚔️ | Dihya, dite la Kahina, reine de l'Aurès |
| `personnalites-04-yennenga.md` | `course-perso-04-yennenga` | 🐎 | Yennenga, la princesse cavalière |
| `personnalites-05-ibn-khaldoun.md` | `course-perso-05-ibn-khaldoun` | 📜 | Ibn Khaldoun, l'invention de la science sociale |
| `personnalites-06-sayyida-al-hurra.md` | `course-perso-06-sayyida-al-hurra` | ⚓ | Sayyida al-Hurra, la gouverneure de Tétouan |
| `personnalites-07-kimpa-vita.md` | `course-perso-07-kimpa-vita` | 🕯️ | Kimpa Vita, la prophétesse du Kongo |
| `personnalites-08-nanny-marrons.md` | `course-perso-08-nanny-marrons` | 🌿 | Nanny et les Marrons de Jamaïque |
| `personnalites-09-toussaint-louverture.md` | `course-perso-09-toussaint-louverture` | ⛓️ | Toussaint Louverture et la révolution de Saint-Domingue |
| `personnalites-10-sojourner-truth.md` | `course-perso-10-sojourner-truth` | 🗣️ | Sojourner Truth, la parole affranchie |
| `personnalites-11-abd-el-kader.md` | `course-perso-11-abd-el-kader` | 🕌 | Abd el-Kader, l'émir et le savant |
| `personnalites-12-samori-toure.md` | `course-perso-12-samori-toure` | 🛡️ | Samori Touré, l'empire wassoulou |
| `personnalites-13-taytu-betul.md` | `course-perso-13-taytu-betul` | 👸 | Taytu Betul, l'impératrice d'Éthiopie |
| `personnalites-14-yaa-asantewaa.md` | `course-perso-14-yaa-asantewaa` | 🪑 | Yaa Asantewaa, reine-mère d'Asante |
| `personnalites-15-sarraounia.md` | `course-perso-15-sarraounia` | 🏹 | Sarraounia Mangou, la reine de Lougou |
| `personnalites-16-du-bois.md` | `course-perso-16-du-bois` | 🌍 | W. E. B. Du Bois et les congrès panafricains |
| `personnalites-17-cheikh-anta-diop.md` | `course-perso-17-cheikh-anta-diop` | 🔬 | Cheikh Anta Diop, réécrire l'histoire de l'Afrique |
| `personnalites-18-frantz-fanon.md` | `course-perso-18-frantz-fanon` | 🧠 | Frantz Fanon, la clinique et la révolution |
| `personnalites-19-amilcar-cabral.md` | `course-perso-19-amilcar-cabral` | 🌾 | Amílcar Cabral, l'agronome stratège |
| `personnalites-20-agostinho-neto.md` | `course-perso-20-agostinho-neto` | 🖋️ | Agostinho Neto, le poète et le président |
| `personnalites-21-kwame-nkrumah.md` | `course-perso-21-kwame-nkrumah` | ⭐ | Kwame Nkrumah, l'étoile noire |
| `personnalites-22-julius-nyerere.md` | `course-perso-22-julius-nyerere` | 📖 | Julius Nyerere, le Mwalimu |
| `personnalites-23-haile-selassie.md` | `course-perso-23-haile-selassie` | 🦁 | Haile Selassie et la naissance de l'OUA |
| `personnalites-24-patrice-lumumba.md` | `course-perso-24-patrice-lumumba` | 🕊️ | Patrice Lumumba, sept mois qui ont marqué le siècle |
| `personnalites-25-jeanne-martin-cisse.md` | `course-perso-25-jeanne-martin-cisse` | 🤝 | Jeanne Martin Cissé et les mères fondatrices |
| `personnalites-26-funmilayo-ransome-kuti.md` | `course-perso-26-funmilayo-ransome-kuti` | ✊ | Funmilayo Ransome-Kuti, la lionne d'Abeokuta |
| `personnalites-27-aoua-keita.md` | `course-perso-27-aoua-keita` | 🩺 | Aoua Keïta, sage-femme et députée |
| `personnalites-28-albertina-sisulu.md` | `course-perso-28-albertina-sisulu` | 🌺 | Albertina Sisulu, mère de la nation |
| `personnalites-29-miriam-makeba.md` | `course-perso-29-miriam-makeba` | 🎤 | Miriam Makeba, Mama Africa |
| `personnalites-30-wangari-maathai.md` | `course-perso-30-wangari-maathai` | 🌳 | Wangari Maathai, la ceinture verte |

### 6. Contraintes du projet

- Respecte l'alias `@/` → `src/` (déclaré dans `vite.config.ts` **et** `tsconfig.app.json`).
- **N'importe jamais `src/data/courses.ts` depuis le code applicatif** (routes/, components/, store/) : catalogue complet réservé aux scripts de build et au validateur. Le code applicatif utilise `COURSE_INDEX` et `src/data/courseContent.ts`.
- `src/data/` est en lecture seule à l'exécution : données uniquement, aucune logique, aucune couleur en dur.
- Aucun `id` (cours, leçon, question) dupliqué — le validateur le vérifie.
- Ne modifie ni `src/types/index.ts`, ni le store, ni `LessonViewer`.
- Ne reformate pas les fichiers que tu ne modifies pas (Prettier est configuré mais volontairement non appliqué au dépôt).

### 7. Vérification du code

Dans cet ordre — celui de la CI (`.github/workflows/ci.yml`), chaque étape bloquante :

```bash
npm run validate    # 9 règles d'intégrité du contenu
npm test            # suite Vitest (102 tests avant modification)
npm run typecheck
npm run build
```

Puis manuellement :

1. `PERSONNALITES_COURSES` contient **31 cours** (30 nouveaux + le cours hérité) ; les 30 nouveaux ont chacun **5 leçons** et **5 questions**.
2. `COURSE_INDEX` contient **128 cours**.
3. `npm run dev` → **Biblio → Personnalités** : les 31 cours s'affichent, le badge « 🚧 En construction » a **disparu** (automatique au-delà de 3 cours).
4. Ouvre un cours : les 5 leçons défilent en paragraphes simples, puis le quiz se joue.
5. Ouvre un cours d'**Histoire** et une fiche de **Géographie** : rien ne doit avoir changé.
6. Onglet **Collections** : « Voix et sons du continent » se résout toujours, aucune erreur en console.
7. **Profil** : le niveau affiché peut avoir baissé pour un utilisateur existant, du fait des nouveaux paliers. Comportement attendu, déjà assumé au chantier 7.3 — l'XP accumulée n'est jamais recalculée.

### 8. Illustrations et cadrage — À NE PAS SAUTER

Les 30 illustrations vivent dans **`src/assets/cours/personnalites/`** (nouveau sous-dossier, sur le modèle de `histoire/` et `geographie/`). Elles sont produites par `npm run images:generate`, qui les nomme automatiquement d'après les id du § 5 ; prompts et consignes dans `PROMPTS-IMAGES-personnalites.md`.

Deux points de **cadrage** doivent être traités, sans quoi les images seront mal recadrées à l'affichage.

#### 8.1 Corriger `getCourseImagePosition` — indispensable

`CourseCard` affiche l'illustration dans un en-tête de **150 px de haut** en **`object-cover`** : l'image est donc rognée, et c'est `getCourseImagePosition` (`src/lib/courseImages.ts`) qui décide de quel côté.

Cette fonction ne connaît aujourd'hui que deux valeurs et retourne **`"right"` par défaut** :

```ts
export function getCourseImagePosition(courseId: string): "left" | "right" {
  return LEFT_FLAG_COURSE_IDS.has(courseId) ? "left" : "right";
}
```

Ce défaut a été écrit pour la Géographie, dont les illustrations portent un **drapeau national sur le côté droit** qu'il fallait préserver au rognage. Les illustrations de Personnalités n'ont **aucun drapeau** et leur **sujet est centré** : `object-right` les décentrerait systématiquement et couperait la partie gauche de chaque scène.

Étends la fonction à une troisième valeur :

```ts
/** Côté vers lequel cadrer l'illustration (object-position) au recadrage `object-cover`. */
export function getCourseImagePosition(courseId: string): "left" | "right" | "center" {
  if (LEFT_FLAG_COURSE_IDS.has(courseId)) return "left";
  // Les illustrations de Personnalités sont des scènes au sujet centré, sans drapeau latéral
  // à préserver : les rogner à droite les décentrerait.
  if (courseId.startsWith("course-perso-")) return "center";
  return "right";
}
```

Puis adapte `src/components/features/CourseCard.tsx`, qui teste actuellement :

```tsx
getCourseImagePosition(course.id) === "left" ? "object-left" : "object-right"
```

Ce ternaire binaire enverrait `"center"` sur `object-right`. Remplace-le par une correspondance à trois cas (par exemple `{ left: "object-left", right: "object-right", center: "object-center" }`), **sans rien changer d'autre** dans le composant : le rendu de l'Histoire et de la Géographie doit rester strictement identique.

#### 8.2 Ratio des fichiers

`npm run images:generate` recadre déjà chaque image en **3:2 centré** (option `--aspect`, 1200×800 par défaut) : le modèle ne respecte pas toujours le « about 3:2 » du prompt. Si tu produis des images autrement, recadre-les à ce rapport avant de les déposer — sinon le rognage `object-cover` mangera le sujet.

#### 8.3 Chaîne complète

```bash
npm run images:generate      # 30 images, nommées et recadrées automatiquement
npm run images:variants      # variantes 400w/800w (seules servies par l'app)
npm run validate             # la règle 8 ne doit plus signaler aucun cours perso
```

Tant que les illustrations manquent, `npm run validate` émet un **avertissement non bloquant** (règle 8) et les cartes s'affichent sans en-tête image : l'intégration TypeScript reste valide sans elles, mais la pastille « Terminé ✓ » sera désalignée, comme constaté au chantier Géographie.

**Contrôle visuel obligatoire avant commit.** Ouvre la Biblio et parcours les 30 cartes :

1. Aucun **visage humain reconnaissable** — c'est la règle de fond de ce lot, et le seul contrôle qu'aucun script ne peut faire à ta place.
2. Aucun **texte parasite**, en priorité sur les douze scènes à support écrit : 05, 09, 10, 13, 16, 17, 19, 20, 22, 24, 25, 29.
3. Aucun **drapeau national** : aucun n'est décrit dans les prompts, donc tout drapeau visible est une invention du modèle.
4. Le **sujet de chaque image reste entier** dans l'en-tête de 150 px, ni coupé ni décentré — c'est ce que valide la correction du § 8.1.

### 9. Hors périmètre

- **Documentation** : mise à jour de `CLAUDE.md` et `docs/ARCHITECTURE.md` (section Phase 8, nouveaux chiffres de catalogue, recalibrage) — commit dédié.
- **Commits** : découpe en commits thématiques (contenu éditorial / branchement + index / gamification / illustrations + cadrage), comme au lot 07g.

---

*Fin du prompt.*
