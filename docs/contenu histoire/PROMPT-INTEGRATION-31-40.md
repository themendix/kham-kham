# Prompt d'intégration VS Code — Cours d'Histoire 31 à 40 (Sankofa)

Ce prompt ajoute les cours **31 à 40** (histoire du Sénégal + Nzinga et Chaka) à l'app, sans toucher aux cours déjà intégrés. Ouvre `C:\kham-kham` dans VS Code, puis copie-colle à ton assistant IA le bloc ci-dessous.

> ℹ️ À lancer **après** avoir intégré les cours 21 à 30. Le prompt est prudent : il n'ajoute que les cours **manquants** jusqu'au n° 40, sans jamais dupliquer ni modifier ceux déjà présents. (Si les cours 21-30 ne sont pas encore intégrés, il les ajoutera aussi.)

---

## PROMPT À COPIER

Tu travailles dans le dépôt **Sankofa** (React 18 + Vite + TypeScript, alias `@/` → `src/`).

**État actuel :** les cours d'histoire sont dans `src/data/courses/histoire.ts`, qui exporte `HISTOIRE_COURSES: Course[]` (ids `course-histoire-NN-slug`), déjà branché dans `src/data/courses.ts` via `...HISTOIRE_COURSES`. Les cours 1 à 20 (au minimum, peut-être jusqu'à 30) sont déjà présents.

**Ta tâche :** t'assurer que `HISTOIRE_COURSES` contienne bien **les 40 cours** correspondant aux fichiers `docs/contenu/histoire-01-*.md` à `histoire-40-*.md`. Pour cela, **ajoute uniquement les cours manquants** (numéros non encore présents), à la fin du tableau, dans l'ordre croissant. **Ne duplique jamais et ne modifie pas** les cours déjà présents, ni `courses.ts`, ni les autres catégories.

Fichiers à intégrer s'ils manquent (dans cet ordre) :
`histoire-31-tekrour-islam.md`, `histoire-32-djolof-royaumes-wolof.md`, `histoire-33-royaumes-serer-sine-saloum.md`, `histoire-34-goree-saint-louis.md`, `histoire-35-lat-dior-cayor.md`, `histoire-36-cheikh-ahmadou-bamba-mouridisme.md`, `histoire-37-aline-sitoe-diatta.md`, `histoire-38-senghor-negritude-independance.md`, `histoire-39-reine-nzinga-angola.md`, `histoire-40-chaka-zoulou.md`
(et, s'ils ne sont pas déjà présents, `histoire-21` à `histoire-30`.)

### Types (dans `src/types/index.ts` — ne pas modifier)

```ts
interface Course { id: string; categoryId: string; title: string; description: string; emoji: string; lessons: Lesson[]; quiz: QuizQuestion[]; xp: number; }
interface Lesson { id: string; title: string; content: string; }
interface QuizQuestion { id: string; question: string; options: string[]; correctIndex: number; explanation: string; }
```

### Règles de conversion (un fichier `histoire-NN-slug.md` → un objet `Course`), IDENTIQUES aux cours déjà intégrés

- **id** : `"course-"` + nom du fichier sans extension (ex. `histoire-31-tekrour-islam` → `"course-histoire-31-tekrour-islam"`).
- **categoryId** : `"histoire"`.
- **emoji** : ligne « Emoji : » des métadonnées ; **xp** : ligne « XP : » (= 50).
- **title** : titre H1 après le tiret. **description** : paragraphe sous la ligne **Description**.
- **lessons** : 5 sections `## Leçon N — Titre` → `id` = `` `${courseId}-lesson-N` ``, `title` après le tiret, `content` = le paragraphe.
- **quiz** : 5 questions de `## Quiz` → `id` = `` `${courseId}-quiz-N` ``, `question` = énoncé, `options` = les 4 réponses A-D (sans préfixes de lettre, sans `**`, sans `✅`), `correctIndex` = index 0-3 de l'option marquée `✅`, `explanation` = texte après *Explication :* (sans la mention « (correctIndex : N) »).

Nettoie le Markdown résiduel et échappe correctement apostrophes/accents pour du TypeScript valide.

### Sortie et vérification

- Ajoute les objets `Course` manquants à la fin de `HISTOIRE_COURSES`, en ordre croissant, et mets à jour le commentaire de tête (« 40 cours (01 → 40) »).
- Aucun `id` dupliqué ; `src/data/` reste données uniquement ; respecte l'alias `@/`.
- Compile : `npx tsc -p tsconfig.app.json --noEmit` (ou `npm run build`).
- Lance `npm run dev`, va dans **Biblio → Histoire** et confirme **40 cours** au total, chacun avec 5 leçons et un quiz de 5 questions fonctionnel.

---

*Fin du prompt.*
