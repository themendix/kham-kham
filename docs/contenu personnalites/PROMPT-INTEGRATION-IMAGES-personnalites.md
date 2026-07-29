# Prompt d'intégration des images — Personnalités (Sankofa)

Prompt **dédié aux 30 illustrations** de la matière Personnalités. Il ne touche ni au contenu des cours, ni à la gamification — cela relève de `PROMPT-INTEGRATION-FINALE-personnalites.md`.

Ouvre le projet Sankofa (`C:\kham-kham`) dans VS Code, puis copie-colle le texte de la section **« PROMPT À COPIER »**.

> **Prérequis** : les 30 fichiers `.webp` sont générés (`npm run images:generate`) ou déposés à la main. Ce prompt peut être joué **avant ou après** l'intégration du contenu — les deux sont indépendants.

> ⚠️ **Le point central de ce prompt n'est pas le dépôt des fichiers, c'est une correction de code.** `getCourseImagePosition` retourne `"right"` par défaut ; sans correctif, les 30 images seront rognées du mauvais côté.

---

## PROMPT À COPIER

Tu travailles dans le dépôt **Sankofa** (React 18 + Vite + TypeScript, alias `@/` → `src/`, Tailwind v4). Trente illustrations viennent d'être produites pour la matière **Personnalités**. Ta tâche : les intégrer proprement et **corriger leur cadrage**, sans modifier le rendu des matières Histoire et Géographie.

### 1. Comment les images sont résolues (contexte à connaître)

- `src/lib/courseImages.ts` fait un glob récursif `@/assets/cours/**/*-{400w,800w}.webp` et associe chaque image à un cours **par son nom de fichier**, qui doit être **exactement l'id du cours**. Une faute de slug ne produit aucune erreur : la carte s'affiche simplement sans image.
- **Seules les variantes `-400w` et `-800w` sont servies** par l'application. Le fichier pleine résolution reste dans le dépôt comme source pour `npm run images:variants`, et n'est jamais copié dans `dist/`.
- `CourseCard` affiche l'image dans un en-tête de **150 px de haut**, en **`object-cover`** : l'image est donc **rognée**, et `getCourseImagePosition` décide de quel côté.

### 2. Vérifier l'emplacement et les noms

Les 30 fichiers pleine résolution doivent être dans **`src/assets/cours/personnalites/`** — un sous-dossier à créer s'il n'existe pas, sur le modèle des sous-dossiers `histoire/` (40 images) et `geographie/` (54 images) déjà en place.

Noms attendus, exactement ceux-ci :

```
course-perso-01-hatchepsout.webp            course-perso-16-du-bois.webp
course-perso-02-taharqa.webp                course-perso-17-cheikh-anta-diop.webp
course-perso-03-dihya.webp                  course-perso-18-frantz-fanon.webp
course-perso-04-yennenga.webp               course-perso-19-amilcar-cabral.webp
course-perso-05-ibn-khaldoun.webp           course-perso-20-agostinho-neto.webp
course-perso-06-sayyida-al-hurra.webp       course-perso-21-kwame-nkrumah.webp
course-perso-07-kimpa-vita.webp             course-perso-22-julius-nyerere.webp
course-perso-08-nanny-marrons.webp          course-perso-23-haile-selassie.webp
course-perso-09-toussaint-louverture.webp   course-perso-24-patrice-lumumba.webp
course-perso-10-sojourner-truth.webp        course-perso-25-jeanne-martin-cisse.webp
course-perso-11-abd-el-kader.webp           course-perso-26-funmilayo-ransome-kuti.webp
course-perso-12-samori-toure.webp           course-perso-27-aoua-keita.webp
course-perso-13-taytu-betul.webp            course-perso-28-albertina-sisulu.webp
course-perso-14-yaa-asantewaa.webp          course-perso-29-miriam-makeba.webp
course-perso-15-sarraounia.webp             course-perso-30-wangari-maathai.webp
```

⚠️ Le nom du fichier **n'est pas** celui de la fiche Markdown : `personnalites-01-hatchepsout.md` → `course-perso-01-hatchepsout.webp`. Le préfixe `personnalites-` devient `course-perso-`.

Signale (sans le corriger toi-même) tout fichier manquant, mal nommé ou en trop.

### 3. Corriger le cadrage — c'est le cœur de ce prompt

#### 3.1 `src/lib/courseImages.ts`

La fonction ne connaît aujourd'hui que deux positions, et **`"right"` est le défaut** :

```ts
export function getCourseImagePosition(courseId: string): "left" | "right" {
  return LEFT_FLAG_COURSE_IDS.has(courseId) ? "left" : "right";
}
```

Ce défaut a été écrit pour la **Géographie**, dont chaque illustration porte un **drapeau national sur le côté droit** qu'il fallait préserver au rognage (`LEFT_FLAG_COURSE_IDS` liste les dix pays où il est à gauche).

Les illustrations de **Personnalités** sont d'une nature différente : ce sont des **scènes au sujet centré, sans aucun drapeau**. Les rogner à droite les décentrerait toutes et couperait la partie gauche de chaque scène. Étends donc la fonction à une troisième valeur :

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

Mets aussi à jour le commentaire qui précède `LEFT_FLAG_COURSE_IDS` — il dit « Dans ce lot d'illustrations, le drapeau national est presque toujours à droite », ce qui ne vaut désormais que pour la Géographie.

#### 3.2 `src/components/features/CourseCard.tsx`

Le composant applique la position par un **ternaire binaire**, qui enverrait `"center"` sur `object-right` :

```tsx
className={`absolute inset-0 h-full w-full object-cover ${
  getCourseImagePosition(course.id) === "left" ? "object-left" : "object-right"
}`}
```

Remplace-le par une correspondance à trois cas, par exemple une table de constantes déclarée en tête de module :

```tsx
const OBJECT_POSITION = {
  left: "object-left",
  right: "object-right",
  center: "object-center",
} as const;
```

puis, dans le JSX :

```tsx
className={`absolute inset-0 h-full w-full object-cover ${OBJECT_POSITION[getCourseImagePosition(course.id)]}`}
```

**Ne change rien d'autre** dans `CourseCard` : ni la hauteur `h-[150px]`, ni `sizes`, ni `loading="lazy"`, ni les badges. Le rendu de l'Histoire et de la Géographie doit rester **strictement identique** — c'est vérifiable, aucun de leurs cours ne renvoie `"center"`.

#### 3.3 Ajouter un test

`getCourseImagePosition` n'est aujourd'hui couvert par aucun test, alors que le projet en compte 102. Ajoute `src/lib/courseImages.test.ts` (Vitest, même style que `src/lib/*.test.ts`) vérifiant les trois cas :

- un id de `LEFT_FLAG_COURSE_IDS` (ex. `course-geographie-27-rd-congo`) → `"left"` ;
- un id `course-perso-…` → `"center"` ;
- tout autre id de Géographie ou d'Histoire → `"right"`.

Ce test empêche qu'une future modification du défaut ne recasse silencieusement le cadrage d'une matière entière.

### 4. Générer les variantes et valider

```bash
npm run images:variants   # crée les -400w et -800w à côté de chaque original
npm run validate          # règles 8 et 9 : illustrations manquantes / orphelines
npm test
npm run typecheck
npm run build
```

Attendu :

- `npm run images:variants` produit **60 fichiers** (30 × deux variantes) dans `src/assets/cours/personnalites/` ;
- `npm run validate` ne signale **plus aucun cours `perso`** en règle 8 (« Illustration par cours ») **ni aucun fichier orphelin** en règle 9 — c'est ce second point qui confirme que les 30 noms sont exacts ;
- les 102 tests passent, plus celui du § 3.3.

### 5. Contrôle visuel — obligatoire avant commit

`npm run dev`, puis **Biblio → Personnalités**, et parcours les 30 cartes.

1. **Aucun visage humain reconnaissable.** C'est la règle de fond de ce lot d'illustrations : pour la plupart de ces figures, un visage généré serait une fausse identité présentée comme vraie dans une application éducative. Six d'entre elles n'ont d'ailleurs aucun visage documenté. Toute image montrant un visage doit être régénérée, pas retouchée.
2. **Aucun texte parasite**, en priorité sur les douze scènes contenant un support écrit : 05, 09, 10, 13, 16, 17, 19, 20, 22, 24, 25, 29.
3. **Aucun drapeau national.** Aucun n'est décrit dans les prompts, donc tout drapeau visible est une invention du modèle — et probablement faux.
4. **Le sujet reste entier dans l'en-tête de 150 px**, ni coupé ni décentré. C'est ce que valide la correction du § 3. Contrôle-le aussi bien en **liste horizontale** (cartes de 210 px, « À la une », recommandations) qu'en **grille fluide** (écran de matière, où la carte peut atteindre ~350 px) : le rognage n'est pas le même.
5. **La pastille « Terminé ✓ »** (en haut à gauche) et le **cœur des favoris** (en haut à droite) restent lisibles sur l'image. Si un élément de la scène les gêne, c'est que les coins supérieurs n'étaient pas assez dégagés — régénère cette image.

Pour régénérer une seule image : `npm run images:generate -- --only 07,13` (voir `PROMPTS-IMAGES-personnalites.md`).

### 6. Contraintes

- Ne modifie **aucune image d'Histoire ou de Géographie**, ni leurs variantes.
- Ne touche pas à `scripts/generate-image-variants.mjs` : il parcourt déjà `src/assets/cours/**` récursivement, le nouveau sous-dossier est pris en compte sans modification.
- Ne commite **pas** les fichiers pleine résolution dans `dist/` — ils restent uniquement dans `src/assets/cours/personnalites/`.
- Ne reformate pas les fichiers que tu ne modifies pas (Prettier est configuré mais volontairement non appliqué au dépôt).
- Commit suggéré : `Ajoute les 30 illustrations de Personnalites et corrige leur cadrage`.

---

*Fin du prompt.*
