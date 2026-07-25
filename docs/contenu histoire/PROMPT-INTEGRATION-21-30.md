# Prompt d'intégration VS Code — Cours d'Histoire 21 à 30 (Sankofa)

Les cours **1 à 20 sont déjà intégrés** dans l'app (`src/data/courses/histoire.ts`). Ce prompt sert à **ajouter uniquement les cours 21 à 30**. Ouvre `C:\kham-kham` dans VS Code, puis copie-colle à ton assistant IA (Claude, Copilot…) le bloc ci-dessous.

---

## PROMPT À COPIER

Tu travailles dans le dépôt **Sankofa** (React 18 + Vite + TypeScript, alias `@/` → `src/`).

**État actuel — NE PAS y toucher :** les cours d'histoire 1 à 20 sont déjà intégrés dans `src/data/courses/histoire.ts`, qui exporte `HISTOIRE_COURSES: Course[]` (20 objets, ids `course-histoire-01-…` à `course-histoire-20-…`). Ce fichier est déjà importé et branché dans `src/data/courses.ts` via `...HISTOIRE_COURSES`. **Ne modifie ni `courses.ts`, ni les cours 1 à 20, ni les cours des autres catégories.**

**Ta tâche :** ajouter **uniquement les 10 cours restants (21 à 30)** à la fin du tableau `HISTOIRE_COURSES`, en te basant sur les fichiers Markdown `docs/contenu/histoire-21-*.md` à `docs/contenu/histoire-30-*.md`.

### 1. Types (définis dans `src/types/index.ts` — ne pas les modifier)

```ts
interface Course { id: string; categoryId: string; title: string; description: string; emoji: string; lessons: Lesson[]; quiz: QuizQuestion[]; xp: number; }
interface Lesson { id: string; title: string; content: string; }
interface QuizQuestion { id: string; question: string; options: string[]; correctIndex: number; explanation: string; }
```

### 2. Règles de conversion (un fichier `histoire-NN-slug.md` → un objet `Course`), IDENTIQUES à celles des cours 1 à 20

- **id** : `"course-"` + nom du fichier sans extension. Ex. `histoire-21-commerce-transsaharien` → `"course-histoire-21-commerce-transsaharien"`.
- **categoryId** : `"histoire"`.
- **emoji** : l'emoji du bloc de métadonnées en tête de fichier (ligne « Emoji : »).
- **xp** : le nombre de la ligne « XP : » (= 50).
- **title** : le texte du titre H1 après le tiret. Ex. `# Cours 21 — Le commerce transsaharien` → `Le commerce transsaharien`.
- **description** : le paragraphe sous la ligne en gras **Description**.
- **lessons** : les 5 sections `## Leçon N — Titre`. Pour chacune : `id` = `` `${courseId}-lesson-N` ``, `title` = le texte après le tiret, `content` = le(s) paragraphe(s) de la leçon.
- **quiz** : les 5 questions de la section `## Quiz`. Pour chacune :
  - `id` = `` `${courseId}-quiz-N` ``
  - `question` = l'énoncé (sans « **Question N.** »)
  - `options` = les 4 réponses dans l'ordre A, B, C, D (retire les préfixes « A. », « B. »…, les `**` et le `✅`)
  - `correctIndex` = l'index 0-3 de l'option marquée `✅` (A=0, B=1, C=2, D=3)
  - `explanation` = le texte en italique après *Explication :* (retire la mention « (correctIndex : N) »)

Nettoie tout Markdown résiduel (`**`, `✅`, préfixes de lettres, « Explication : ») et échappe correctement les apostrophes/accents pour du TypeScript valide.

### 3. Sortie attendue

- **Ajoute les 10 nouveaux objets `Course` (cours 21 à 30, dans l'ordre) à la fin du tableau `HISTOIRE_COURSES`**, juste après le cours 20, dans `src/data/courses/histoire.ts`.
- Mets à jour le commentaire en tête du tableau s'il indique « 20 cours » → « 30 cours (01 → 30) ».
- **Ne touche à rien d'autre** : ni `courses.ts` (déjà branché via le spread), ni les cours existants.

Les 10 fichiers à convertir, dans cet ordre :
`histoire-21-commerce-transsaharien.md`, `histoire-22-islamisation-afrique-ouest.md`, `histoire-23-cote-swahilie.md`, `histoire-24-traite-negriere-transatlantique.md`, `histoire-25-conference-berlin.md`, `histoire-26-resistances-colonisation.md`, `histoire-27-bataille-adoua.md`, `histoire-28-independances-africaines.md`, `histoire-29-panafricanisme-union-africaine.md`, `histoire-30-apartheid-mandela.md`.

### 4. Contraintes & vérification

- `src/data/` = données uniquement, aucune logique ; respecte l'alias `@/`.
- Aucun `id` dupliqué (les cours 1 à 20 ne doivent pas être recréés).
- Compile sans erreur : `npx tsc -p tsconfig.app.json --noEmit` (ou `npm run build`).
- Lance `npm run dev`, va dans **Biblio → Histoire** et confirme que **30 cours** s'affichent au total, chacun avec ses 5 leçons et son quiz de 5 questions fonctionnel.

---

*Fin du prompt.*
