# Prompt d'intégration VS Code — Cours d'Histoire (Sankofa)

Ouvre le projet Sankofa (`C:\kham-kham`) dans VS Code, puis copie-colle le texte ci-dessous à ton assistant IA (Copilot Chat, Claude, etc.). Il convertira les fichiers Markdown des cours en données TypeScript et les branchera dans l'app.

> ✅ État actuel : les **30 fichiers** `histoire-01-*.md` à `histoire-30-*.md` sont présents dans `docs/contenu/`. Le prompt intègre tous les fichiers `histoire-NN-*.md` présents (idempotent : relançable à l'identique si tu en ajoutes d'autres plus tard).

---

## PROMPT À COPIER

Tu travailles dans le dépôt **Sankofa** (React 18 + Vite + TypeScript, alias `@/` → `src/`). Le contenu éditorial des cours d'histoire est fourni en Markdown dans `docs/contenu/`, un fichier par cours : `histoire-01-*.md`, `histoire-02-*.md`, … Ta tâche : convertir **tous les fichiers `histoire-NN-*.md` présents** en objets `Course` TypeScript et les intégrer proprement, sans casser l'existant.

### 1. Types à respecter (définis dans `src/types/index.ts` — ne pas les modifier)

```ts
interface Course { id: string; categoryId: string; title: string; description: string; emoji: string; lessons: Lesson[]; quiz: QuizQuestion[]; xp: number; }
interface Lesson { id: string; title: string; content: string; }
interface QuizQuestion { id: string; question: string; options: string[]; correctIndex: number; explanation: string; }
```

### 2. Règles de conversion (un fichier `histoire-NN-slug.md` → un objet `Course`)

- **id** : `"course-"` + nom du fichier sans extension. Ex. `histoire-01-egypte-antique` → `"course-histoire-01-egypte-antique"`.
- **categoryId** : `"histoire"` pour tous.
- **emoji** : l'emoji du bloc de métadonnées en tête de fichier (ligne « Emoji : »).
- **xp** : le nombre de la ligne « XP : » (= 50).
- **title** : le texte du titre H1 après le tiret. Ex. `# Cours 01 — L'Égypte antique` → `L'Égypte antique`.
- **description** : le paragraphe situé sous la ligne en gras **Description**.
- **lessons** : les 5 sections `## Leçon N — Titre`. Pour chacune : `id` = `` `${courseId}-lesson-N` ``, `title` = le texte après le tiret, `content` = le(s) paragraphe(s) de la leçon (texte brut, sans le titre).
- **quiz** : les 5 questions de la section `## Quiz`. Pour chacune :
  - `id` = `` `${courseId}-quiz-N` ``
  - `question` = l'énoncé (sans le « **Question N.** »)
  - `options` = les 4 réponses, **dans l'ordre A, B, C, D**. Retire les préfixes de lettre (« A. », « B. »…), les `**` de gras et le marqueur `✅`.
  - `correctIndex` = l'index 0-3 de l'option marquée `✅` (A=0, B=1, C=2, D=3).
  - `explanation` = le texte en italique après *Explication :*. Retire la mention « (correctIndex : N) » si elle est présente.

**Nettoyage** : dans toutes les chaînes finales, supprime le Markdown résiduel (`**`, `✅`, préfixes de lettres, « Explication : »). Échappe correctement les apostrophes et caractères spéciaux pour du TypeScript valide (utilise des guillemets doubles avec échappement, ou des backticks).

### 3. Sortie attendue

1. **Crée** `src/data/courses/histoire.ts` :
   ```ts
   import type { Course } from "@/types";
   // 30 cours, triés par numéro de fichier croissant (01 → 30)
   export const HISTOIRE_COURSES: Course[] = [ /* ... */ ];
   ```
2. **Modifie** `src/data/courses.ts` pour intégrer ces cours dans le tableau exporté `COURSES`, **sans casser** l'export `COURSES` ni la fonction `getCourse` :
   - importe `HISTOIRE_COURSES` depuis `@/data/courses/histoire`,
   - insère-le en tête du tableau `COURSES` via un spread (`...HISTOIRE_COURSES`),
   - conserve les cours de démonstration des autres catégories (`geo`, `perso`, `arts`, `trad`, `actu`).
3. **Supprime** l'ancien cours de démonstration d'histoire `course-empires-ouest-africain` (désormais couvert en détail par les nouveaux cours 5 à 8), pour éviter le doublon. Ne touche pas aux cours de démonstration des autres catégories.

### 4. Contraintes du projet

- Respecte l'alias `@/` → `src/` (voir `vite.config.ts` et `tsconfig.app.json`).
- `src/data/` est en **lecture seule** à l'exécution : uniquement des données, aucune logique.
- N'ajoute aucune couleur ni style ici.
- Aucun `id` de cours, de leçon ou de question ne doit être dupliqué.

### 5. Vérification

- Compile sans erreur : `npx tsc -p tsconfig.app.json --noEmit` (ou `npm run build`). Corrige les erreurs de type éventuelles.
- Lance `npm run dev`, va dans **Biblio → Histoire**, et confirme que tous les cours s'affichent, que chaque cours ouvre ses 5 leçons, et que le quiz de 5 questions fonctionne (bonne réponse mise en évidence + explication).

---

*Fin du prompt.*
