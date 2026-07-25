# Prompt d'intégration VS Code — Cours de Géographie (Sankofa)

Ouvre le projet Sankofa (`C:\kham-kham`) dans VS Code, puis copie-colle le texte de la section **« PROMPT À COPIER »** ci-dessous à ton assistant IA (Copilot Chat, Claude, etc.). Il convertira les 54 fiches-pays Markdown en données TypeScript, les branchera dans l'app, et adaptera l'affichage d'une leçon pour les fiches à 7 rubriques.

> ✅ État actuel : les **54 fichiers** `geographie-01-*.md` … `geographie-54-*.md` sont présents dans `docs/contenu geographie/`. Format : **un pays = un cours = une seule leçon** en 7 rubriques + un **quiz de 5 questions**. Le prompt est **idempotent** (relançable à l'identique).

> ⚠️ Différence clé avec l'Histoire : ici chaque cours n'a **qu'une seule leçon** (la fiche-pays), dont le contenu est structuré en **7 sous-titres**. Le prompt inclut donc une **petite adaptation de `LessonViewer`** pour afficher ces sous-titres — sans casser le rendu des cours d'Histoire.

---

## PROMPT À COPIER

Tu travailles dans le dépôt **Sankofa** (React 18 + Vite + TypeScript, alias `@/` → `src/`, Tailwind v4). Le contenu éditorial de la matière Géographie est fourni en Markdown dans `docs/contenu geographie/` (dossier avec une espace), un fichier par pays : `geographie-01-algerie.md`, `geographie-02-egypte.md`, … `geographie-54-zimbabwe.md`. Ta tâche : convertir **toutes les fiches `geographie-NN-slug.md` présentes** en objets `Course` TypeScript, les intégrer proprement, et adapter l'affichage d'une leçon — **sans casser l'existant** (notamment les cours d'Histoire déjà en place).

### 1. Types à respecter (définis dans `src/types/index.ts` — NE PAS les modifier)

```ts
interface Course { id: string; categoryId: string; title: string; description: string; emoji: string; lessons: Lesson[]; quiz: QuizQuestion[]; xp: number; }
interface Lesson { id: string; title: string; content: string; }
interface QuizQuestion { id: string; question: string; options: string[]; correctIndex: number; explanation: string; }
```

### 2. Anatomie d'une fiche-pays (rappel du format source)

Chaque fichier `geographie-NN-slug.md` contient :
- un titre H1 : `# Cours NN — <Pays>` ;
- un bloc de métadonnées en citation (`> **Matière :** … · **Emoji :** 🇩🇿 · **XP :** 40`, plus `> **Statut :**` et `> **Données datées vérifiées (2026) :**`) ;
- un paragraphe d'accroche sous la ligne en gras **Description (accroche affichée sur la carte du cours)** ;
- **une seule** section leçon : `## Leçon — <Pays> en bref`, suivie d'une ligne d'aide en italique (`*La fiche se lit d'une traite…*`), puis de **7 rubriques** en sous-titres `### 1. Situation territoriale` … `### 7. Repères et singularités`, chacune avec un paragraphe ;
- une section `## Quiz (5 questions)` avec 5 questions (options A–D, bonne réponse marquée `✅`, `*Explication :*`).

### 3. Règles de conversion (une fiche `geographie-NN-slug.md` → un objet `Course`)

- **id** : `"course-"` + nom du fichier sans extension. Ex. `geographie-01-algerie` → `"course-geographie-01-algerie"`.
- **categoryId** : `"geo"` pour tous (c'est l'`id` de la catégorie Géographie dans `src/data/categories.ts`).
- **emoji** : l'emoji de la ligne « Emoji : » du bloc de métadonnées (le drapeau, ex. `🇩🇿`). *(Voir la note d'affichage en fin de prompt.)*
- **xp** : le nombre de la ligne « XP : » (= 40).
- **title** : le texte du H1 après le tiret cadratin. Ex. `# Cours 01 — Algérie` → `Algérie`.
- **description** : le paragraphe situé sous la ligne en gras **Description (…)**.
- **lessons** : un tableau contenant **exactement UNE leçon** :
  - `id` = `` `${courseId}-lesson-1` `` ;
  - `title` = le texte après `## Leçon — ` (ex. `L'Algérie en bref`) ;
  - `content` = les **7 rubriques** assemblées en **une seule chaîne**, selon la convention ci-dessous. **Ignore** la ligne d'aide en italique (`*La fiche se lit d'une traite…*`).
- **quiz** : les 5 questions de la section `## Quiz`. Pour chacune :
  - `id` = `` `${courseId}-quiz-N` `` (N de 1 à 5) ;
  - `question` = l'énoncé, sans le préfixe « **Question N.** » ;
  - `options` = les 4 réponses **dans l'ordre A, B, C, D**. Retire les préfixes de lettre (« A. », « B. »…), les `**` de gras et le marqueur `✅` ;
  - `correctIndex` = l'index 0–3 de l'option marquée `✅` (A=0, B=1, C=2, D=3) ;
  - `explanation` = le texte en italique après *Explication :*. **Retire** la mention « (correctIndex : N) » si présente.

#### Convention pour le champ `content` de la leçon (IMPORTANT)

Assemble les 7 rubriques en **une seule chaîne**, chaque rubrique étant : une **ligne de titre préfixée par `#### `** (quatre dièses + espace), un retour à la ligne, puis le paragraphe. Sépare les rubriques par une **ligne vide** (`\n\n`). Conserve la numérotation « 1. » … « 7. » dans les titres.

Exemple (extrait, pour l'Algérie) — la valeur TypeScript de `content` doit ressembler à :

```ts
content:
  "#### 1. Situation territoriale\n" +
  "L'Algérie occupe le centre du Maghreb, en Afrique du Nord, avec une façade méditerranéenne au nord. Avec près de 2,38 millions de km², c'est le plus grand pays d'Afrique par la superficie. Elle partage ses frontières avec le Maroc, la Tunisie, la Libye, le Niger, le Mali, la Mauritanie et le Sahara occidental. Le Sahara couvre à lui seul plus de 80 % du territoire.\n\n" +
  "#### 2. Le milieu\n" +
  "Le nord, méditerranéen, connaît des hivers doux et pluvieux ; le sud, saharien, est brûlant et aride. …\n\n" +
  // … rubriques 3 à 6 …
  "#### 7. Repères et singularités\n" +
  "Capitale : Alger, surnommée « Alger la Blanche », dont la vieille Casbah est classée au patrimoine mondial de l'UNESCO. …",
```

(Tu peux aussi utiliser un template literal entre backticks avec de vrais retours à la ligne — au choix, du moment que les titres commencent bien par `#### ` et que les rubriques sont séparées par une ligne vide.)

#### Nettoyage du texte

Dans toutes les chaînes finales (paragraphes, questions, options, explications), **supprime le Markdown résiduel** : les `**` (gras) et `*` (italique), le marqueur `✅`, les préfixes de lettres du quiz. **Conserve** les guillemets français « », les accents, les tirets, les pourcentages. Le préfixe `#### ` des titres de rubriques est le **seul** balisage à conserver (il sert au rendu). Produis du TypeScript valide : échappe correctement les apostrophes/caractères spéciaux (backticks, ou guillemets doubles avec échappement).

### 4. Sortie attendue

1. **Crée** `src/data/courses/geographie.ts` :

   ```ts
   import type { Course } from "@/types";
   // 54 cours (01 → 54), triés par numéro de fichier croissant, un pays par cours
   export const GEOGRAPHIE_COURSES: Course[] = [ /* … */ ];
   ```

2. **Modifie** `src/data/courses.ts` pour intégrer ces cours dans le tableau exporté `COURSES`, **sans casser** l'export `COURSES` ni la fonction `getCourse` :
   - importe `GEOGRAPHIE_COURSES` depuis `@/data/courses/geographie` ;
   - insère-le dans `COURSES` via un spread, **après** `...HISTOIRE_COURSES` (ex. `...HISTOIRE_COURSES, ...GEOGRAPHIE_COURSES,`) ;
   - **supprime** l'ancien cours de démonstration de géographie **`course-geo-grand-continent`** (désormais remplacé par les 54 fiches-pays), pour éviter le doublon ;
   - **conserve** les autres cours de démonstration (`perso`, `arts`, `trad`, `actu`) et **ne touche pas** à `HISTOIRE_COURSES`.

3. **Adapte `src/components/features/LessonViewer.tsx`** pour afficher les 7 sous-titres de la fiche, tout en restant **rétrocompatible** avec les leçons d'Histoire (dont le `content` est un seul paragraphe sans `####`). Remplace uniquement la ligne qui rend le contenu :

   Actuellement :
   ```tsx
   <p className="mt-2.5 text-[15.5px] font-medium leading-relaxed text-[#5c554b]">{lesson.content}</p>
   ```

   Par un petit rendu ligne à ligne (les lignes `#### …` deviennent des sous-titres, les autres des paragraphes) :
   ```tsx
   <div>
     {lesson.content.split("\n").map((line, i) => {
       const t = line.trim();
       if (!t) return null;
       if (t.startsWith("#### ")) {
         return (
           <h3 key={i} className="mt-4 mb-1 font-heading text-[15px] font-extrabold text-ink">
             {t.slice(5)}
           </h3>
         );
       }
       return (
         <p key={i} className="mt-2.5 text-[15.5px] font-medium leading-relaxed text-[#5c554b]">
           {t}
         </p>
       );
     })}
   </div>
   ```
   Ne modifie **rien d'autre** dans `LessonViewer` (garde le compteur, la barre de progression, le titre `<h2>{lesson.title}</h2>` et les boutons de navigation). Comme les leçons d'Histoire n'ont pas de `####` et tiennent sur une seule ligne, elles continueront de s'afficher en un unique paragraphe, à l'identique.

   *(Optionnel, confort de lecture : dans `LessonViewer`, quand `totalLessons === 1`, tu peux masquer le libellé « Leçon 1 / 1 » et la barre de progression, puisqu'une fiche-pays est une page unique. À ne faire que si c'est trivial et sans risque.)*

### 5. Contraintes du projet

- Respecte l'alias `@/` → `src/` (déclaré dans `vite.config.ts` ET `tsconfig.app.json`).
- `src/data/` est en **lecture seule** à l'exécution : n'y mets que des données, aucune logique, aucune couleur en dur.
- Aucun `id` (de cours, de leçon ou de question) ne doit être dupliqué.
- Ne modifie ni les types (`src/types/index.ts`), ni le store, ni les autres écrans.

### 6. Vérification

- Compile sans erreur : `npx tsc -p tsconfig.app.json --noEmit` (ou `npm run build`). Corrige les erreurs de type éventuelles.
- Confirme que `GEOGRAPHIE_COURSES` contient **54 cours**, chacun avec **1 leçon** et **5 questions de quiz**.
- Lance `npm run dev`, va dans **Biblio → Géographie** : les 54 pays doivent s'afficher ; en ouvrant un cours (ex. Sénégal), la leçon unique doit montrer les **7 rubriques titrées** (Situation territoriale, Le milieu, Population, Société, Économie et ressources, Institutions et politique, Repères et singularités), puis le **quiz de 5 questions** (bonne réponse mise en évidence + explication).
- Vérifie qu'un **cours d'Histoire** s'ouvre toujours normalement (ses leçons s'affichent en paragraphes comme avant) : la modification de `LessonViewer` ne doit rien casser.

---

### Note d'affichage — les emojis drapeaux

L'emoji de chaque cours est le **drapeau** du pays (🇩🇿, 🇸🇳…). Sur certains systèmes (notamment Windows), les emojis drapeaux ne s'affichent pas comme un drapeau mais comme deux lettres (« DZ »). C'est **purement cosmétique** et n'empêche pas l'intégration. Deux options si tu veux un rendu drapeau garanti plus tard (hors de ce prompt) :
1. mapper chaque `course.id` vers une petite image/SVG de drapeau via `src/lib/courseImages.ts` (`getCourseImage`) ;
2. ou remplacer l'emoji par un pictogramme neutre commun (ex. `🗺️`).
Pour cette intégration, garde simplement l'emoji drapeau fourni dans les métadonnées.

---

*Fin du prompt.*
