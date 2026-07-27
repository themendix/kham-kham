# Prompt d'intégration VS Code — Cours de Personnalités (Sankofa)

Ouvre le projet Sankofa (`C:\kham-kham`) dans VS Code, puis copie-colle le texte de la section **« PROMPT À COPIER »** à ton assistant IA. Il convertira les 30 fiches Markdown en données TypeScript, les branchera dans l'app, créera le chunk de matière, régénérera l'index et recalibrera la gamification.

> ✅ **PRÊT À EXÉCUTER.** Les **30 fiches sont rédigées** dans `docs/contenu personnalites/` (`personnalites-01-hatchepsout.md` … `personnalites-30-wangari-maathai.md`). Format vérifié programmatiquement sur les 30 : 5 leçons d'un paragraphe unique chacune, 5 questions à 4 options, un seul `✅` par question dont la position correspond au `correctIndex` annoncé, en-tête de métadonnées et description conformes.

> ⚠️ **Trois différences avec les intégrations Histoire et Géographie** — à lire avant de commencer :
> 1. **Aucun patch de `LessonViewer` n'est nécessaire.** Les cours de Personnalités sont au format Histoire (5 leçons, un paragraphe par leçon, pas de sous-titres `####`). `LessonViewer` gère déjà les deux rendus.
> 2. Cette intégration doit en plus **créer un chunk de matière** (`courseContent.ts`), **régénérer l'index** (`npm run gen:index`) et **recalibrer les paliers d'XP** — trois mécanismes introduits par la Phase 7 et absents des prompts précédents. Ne les saute pas.
> 3. **L'id d'un cours n'est pas le nom de son fichier** (voir § 3 et la table du § 5). Le préfixe `personnalites-` devient `course-perso-`.

> Le prompt est **idempotent** : relançable à l'identique sans rien dupliquer.

---

## PROMPT À COPIER

Tu travailles dans le dépôt **Sankofa** (React 18 + Vite + TypeScript, alias `@/` → `src/`, Tailwind v4). Le contenu éditorial de la matière **Personnalités** est fourni en Markdown dans `docs/contenu personnalites/` (dossier avec une espace), un fichier par figure : `personnalites-01-hatchepsout.md` … `personnalites-30-wangari-maathai.md`.

Ta tâche : convertir les **30 fiches** en objets `Course` TypeScript, les intégrer proprement dans le catalogue et dans le découpage du bundle, puis recalibrer la gamification — **sans casser l'existant** (Histoire, Géographie, matières héritées).

### 1. Types à respecter (définis dans `src/types/index.ts` — NE PAS les modifier)

```ts
interface Course { id: string; categoryId: string; title: string; description: string; emoji: string; lessons: Lesson[]; quiz: QuizQuestion[]; xp: number; }
interface Lesson { id: string; title: string; content: string; }
interface QuizQuestion { id: string; question: string; options: string[]; correctIndex: number; explanation: string; }
```

### 2. Anatomie exacte d'une fiche

Chaque fichier `personnalites-NN-slug.md` est structuré ainsi, sans exception :

```markdown
# Cours NN — <Titre du cours>

> **Matière :** Personnalités · **Emoji :** 👑 · **XP :** 70
> **Sources :** UNESCO — … (voir `SOURCES-personnalites.md`)

**Description**
<un paragraphe d'accroche>

---

## Leçon 1 — <Titre de la leçon>

<un seul paragraphe, sur une seule ligne>

## Leçon 2 — <Titre de la leçon>

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
  > ⚠️ Ici l'id **ne reprend pas** le nom de fichier tel quel, contrairement à l'Histoire et à la Géographie. Le segment de catégorie est `perso`, pour rester cohérent avec `categoryId` et avec le cours hérité `course-perso-voix-plumes-afrique`. **La table du § 5 donne les 30 id attendus : recopie-les depuis cette table plutôt que de les recalculer.**
- **categoryId** : `"perso"` pour tous (id de la catégorie dans `src/data/categories.ts`).
- **emoji** : celui de la ligne « Emoji : » du bloc de métadonnées.
- **xp** : **toujours `70`** (règle mécanique du chantier 7.3 : `20 + 10 × 5 leçons`). C'est aussi la valeur écrite dans les fiches ; en cas de divergence, `70` fait foi.
- **title** : le texte du H1 après le tiret cadratin. Ex. `# Cours 01 — Hatchepsout, la femme qui régna en pharaon` → `Hatchepsout, la femme qui régna en pharaon`.
- **description** : le paragraphe situé sous la ligne en gras `**Description**`.
- **lessons** : les 5 leçons, dans l'ordre du fichier :
  - `id` = `` `${courseId}-lesson-N` `` (N de 1 à 5) ;
  - `title` = le texte après `## Leçon N — ` ;
  - `content` = le paragraphe de la leçon, **en une seule chaîne sur une seule ligne**, sans `####` ni retour à la ligne. C'est ce qui garantit que `LessonViewer` le rende comme une leçon d'Histoire, en paragraphe simple.
- **quiz** : les 5 questions. Pour chacune :
  - `id` = `` `${courseId}-quiz-N` `` (N de 1 à 5) ;
  - `question` = l'énoncé, sans le préfixe `**Question N.** ` ;
  - `options` = les 4 réponses **dans l'ordre A, B, C, D**, préfixes de lettre (`A. `, `B. `…), `**` et marqueur `✅` retirés ;
  - `correctIndex` = **la valeur annoncée entre parenthèses** dans la ligne d'explication (`(correctIndex : N)`). Elle a été vérifiée sur les 150 questions comme correspondant à la position du `✅` ; si tu rencontres malgré tout une divergence, **arrête-toi et signale-la** au lieu de choisir toi-même ;
  - `explanation` = le texte après `*Explication :*`, **sans** la mention `*(correctIndex : N)*`.

#### Nettoyage du texte

Dans toutes les chaînes finales, supprime le Markdown résiduel : `**` (gras), `*` (italique), `✅`, préfixes de lettres. **Conserve** les guillemets français « », les accents, les tirets cadratins, les pourcentages, les exposants (`XVIIIᵉ`, `Iᵉʳ`). Produis du TypeScript valide : échappe correctement apostrophes et caractères spéciaux.

### 4. Sortie attendue

#### 4.1 Créer `src/data/courses/personnalites.ts`

```ts
import type { Course } from "@/types";

// 30 cours (01 → 30) + le cours hérité déplacé depuis misc.ts, soit 31 au total
export const PERSONNALITES_COURSES: Course[] = [ /* … */ ];
```

#### 4.2 Déplacer le cours hérité `course-perso-voix-plumes-afrique`

Le cours de démonstration **« Voix et plumes d'Afrique »** (3 leçons, 50 XP) vit aujourd'hui dans `src/data/courses/misc.ts`. Il doit **quitter `misc.ts` et rejoindre `personnalites.ts`**, en **fin de tableau**, tel quel (id, leçons, quiz et `xp: 50` inchangés).

Raison — ne pas se tromper ici :

- il est **référencé par `parcours-voix-et-sons`** dans `src/data/parcours.ts`. Le supprimer sans recomposer le parcours ferait échouer `npm run validate` (règle de résolution des références) et lever une exception en développement via `getCourseOrWarn(..., { strict: true })` ;
- surtout, l'étape 4.3 donne à la matière `perso` un chargeur dédié. Or `getSubjectContent` **ne retombe sur `MISC_COURSES` que pour les matières sans chargeur** : si le cours restait dans `misc.ts`, il deviendrait invisible au chargement du contenu (leçons et quiz introuvables) tout en restant présent dans l'index — un cours fantôme, ouvrable mais vide.

Ne le laisse donc **pas** dans `misc.ts` et ne l'ajoute **pas** aux deux fichiers : cela le ferait apparaître en double dans `preloadAllSubjectContent`. Après ce déplacement, `misc.ts` ne contient plus que les 3 cours `arts`, `trad` et `actu`.

*(Variante si tu préfères repartir propre : supprimer purement et simplement `course-perso-voix-plumes-afrique` et remplacer, dans `parcours-voix-et-sons`, sa référence par un cours de Personnalités thématiquement proche — `course-perso-29-miriam-makeba` conviendrait au thème « Voix et sons du continent ». À ne faire que sur décision explicite : le déplacement ci-dessus est l'option par défaut, non destructive.)*

#### 4.3 Brancher la matière dans le catalogue et dans le découpage du bundle

1. **`src/data/courses.ts`** : importer `PERSONNALITES_COURSES` depuis `@/data/courses/personnalites` et l'insérer dans `COURSES` via un spread, après `...GEOGRAPHIE_COURSES`. Ne pas toucher à `getCourse` ni à `getCourseOrWarn`.

2. **`src/data/courseContent.ts`** : ajouter la matière à `SUBJECT_LOADERS` pour qu'elle soit chargée à la demande et non embarquée dans le bundle d'entrée :

   ```ts
   const SUBJECT_LOADERS: Record<string, () => Promise<Course[]>> = {
     histoire: () => import("@/data/courses/histoire").then((m) => m.HISTOIRE_COURSES),
     geo: () => import("@/data/courses/geographie").then((m) => m.GEOGRAPHIE_COURSES),
     perso: () => import("@/data/courses/personnalites").then((m) => m.PERSONNALITES_COURSES),
   };
   ```

   Mets à jour le commentaire de tête du fichier, qui affirme encore que « les 4 matières émergentes (perso/arts/trad/actu) sont assez légères pour rester bundlées avec le shell » — ce n'est plus vrai pour `perso`.

3. **Régénérer l'index léger** : `npm run gen:index`. Il réécrit `src/data/coursesIndex.generated.ts` (fichier généré, à ne jamais éditer à la main) et doit passer de **98 à 128 cours**. Commite le fichier régénéré.

#### 4.4 Recalibrer la gamification

Dans `src/lib/gamification.ts`, l'XP total du catalogue passe de **9 440** à **13 040** (mesuré : 128 cours, 524 leçons, 7 800 XP de complétion + 5 240 XP de leçons). Le dernier rang nommé doit rester atteignable exactement à 100 % du catalogue.

```ts
export const LEVEL_TIERS: LevelTier[] = [
  { minXp: 0, level: 1, rank: "Curieux" },
  { minXp: 1250, level: 2, rank: "Éveillé" },
  { minXp: 3900, level: 3, rank: "Initié" },
  { minXp: 7800, level: 4, rank: "Sage" },
  { minXp: 13040, level: 5, rank: "Gardien du savoir" },
];
```

et `OPEN_LEVEL_STEP` porté de `900` à **`1250`** (les proportions du barème précédent sont conservées).

> **Corrige au passage une anomalie existante** : le dernier palier valait `9260` alors que le catalogue offrait `9440` — « Gardien du savoir » s'atteignait à 98 % du catalogue, et non à 100 % comme l'annonce `CLAUDE.md`. Le nouveau chiffre `13040` est calculé sur le catalogue réel ; ne reconduis pas l'écart.

Mets à jour `src/lib/gamification.test.ts`, qui contient des seuils en dur :
- le commentaire et la valeur `900` du test de seuil du niveau 6 → `1250` ;
- le tableau `samples` (`[0, 100, 899, 900, 2749, 2750, 5549, 5550, 9259, 9260, 10160, 20_000, 100_000]`) → `[0, 100, 1249, 1250, 3899, 3900, 7799, 7800, 13039, 13040, 14290, 30_000, 100_000]`.

**Aucune migration de store** n'est nécessaire : la Phase 8 n'ajoute aucun champ à `UserProgress`. La version de persistance reste à **7**. Ne touche ni à `useAppStore.ts`, ni à `migrate`.

### 5. Table de correspondance des 30 cours

Utilise cette table comme référence : elle donne l'id, le titre et l'emoji attendus pour chaque fichier. Elle est extraite des fiches elles-mêmes.

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
- **N'importe jamais `src/data/courses.ts` depuis le code applicatif** (routes/, components/, store/) : c'est le catalogue complet, réservé aux scripts de build et au validateur. Le code applicatif utilise `COURSE_INDEX` et `src/data/courseContent.ts`.
- `src/data/` est en lecture seule à l'exécution : données uniquement, aucune logique, aucune couleur en dur.
- Aucun `id` (cours, leçon, question) ne doit être dupliqué — le validateur le vérifie.
- Ne modifie ni `src/types/index.ts`, ni le store, ni les écrans, ni `LessonViewer`.
- Ne reformate pas les fichiers que tu ne modifies pas (Prettier est configuré mais volontairement non appliqué au dépôt).

### 7. Vérification

Dans cet ordre — c'est celui de la CI (`.github/workflows/ci.yml`), et chaque étape est bloquante :

```bash
npm run validate    # 9 règles d'intégrité du contenu
npm test            # suite Vitest (102 tests avant modification)
npm run typecheck
npm run build
```

Puis contrôle manuellement :

1. `PERSONNALITES_COURSES` contient **31 cours** (30 nouveaux + le cours hérité déplacé) ; les 30 nouveaux ont chacun **5 leçons** et **5 questions**.
2. `COURSE_INDEX` (`src/data/coursesIndex.generated.ts`) contient **128 cours**.
3. `npm run dev` → **Biblio → Personnalités** : les 31 cours s'affichent, le badge « 🚧 En construction » a **disparu** (la matière n'est plus émergente au-delà de 3 cours — comportement automatique, rien à coder).
4. Ouvre un cours : les 5 leçons défilent en paragraphes simples, puis le quiz de 5 questions se joue (bonne réponse mise en évidence + explication).
5. Ouvre un cours d'**Histoire** et une fiche de **Géographie** : rien ne doit avoir changé dans leur rendu.
6. Onglet **Collections** : le parcours « Voix et sons du continent » se résout toujours (aucune erreur en console).
7. **Profil** : le niveau affiché peut avoir baissé pour un utilisateur existant, du fait des nouveaux paliers. C'est le comportement attendu et déjà assumé au chantier 7.3 — l'XP accumulée, elle, n'est jamais recalculée.

### 8. Hors périmètre de ce prompt

- **Illustrations** : déposer 30 fichiers `course-perso-NN-slug.webp` dans `src/assets/cours/` (nom de fichier = id du cours, exactement les id de la table du § 5), puis lancer `npm run images:variants`. Tant qu'elles manquent, `npm run validate` émet un **avertissement non bloquant** (règle 8) et les cartes n'ont pas d'en-tête image. Un jeu de 30 prompts d'illustration peut être livré séparément (`PROMPTS-IMAGES-personnalites.md`).
- **Documentation** : mise à jour de `CLAUDE.md` et `docs/ARCHITECTURE.md` (section Phase 8, nouveaux chiffres de catalogue, recalibrage) — commit dédié.
- **Commits** : découpe en commits thématiques (contenu éditorial / branchement + index / gamification), comme au lot 07g.

---

*Fin du prompt.*
