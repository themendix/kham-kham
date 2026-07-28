# Charte des leçons Sankofa

**Statut** : proposition, en attente de validation. Aucune ligne de code ni de contenu n'a été
modifiée sur la base de ce document.
**Date** : 28 juillet 2026.
**Portée** : modèle de données des leçons, catalogue des blocs, charte de rédaction, règles du
validateur, plan de migration du catalogue existant.

Ce document est la référence unique du chantier « leçons vivantes ». Il doit permettre à une
session future — humaine ou IA — de reprendre le chantier sans rien redécouvrir.

---

## Sommaire

1. [Objet et constat](#1-objet-et-constat)
2. [Principes directeurs](#2-principes-directeurs)
3. [Le modèle de données `LessonBlock`](#3-le-modèle-de-données-lessonblock)
4. [Catalogue des blocs](#4-catalogue-des-blocs)
5. [Balisage inline](#5-balisage-inline)
6. [Charte de rédaction](#6-charte-de-rédaction)
7. [Gabarits par matière](#7-gabarits-par-matière)
8. [Que faire du contenu supprimé](#8-que-faire-du-contenu-supprimé)
9. [Règles du validateur](#9-règles-du-validateur)
10. [Points d'impact dans le code](#10-points-dimpact-dans-le-code)
11. [Plan de migration](#11-plan-de-migration)
12. [Annexe A — Exemples avant / après](#annexe-a--exemples-avant--après)
13. [Annexe B — Questions ouvertes](#annexe-b--questions-ouvertes)
14. [Annexe C — Journal des décisions](#annexe-c--journal-des-décisions)

---

## 1. Objet et constat

### 1.1 Le problème rapporté

Les leçons sont ressenties comme ennuyeuses et non stimulantes. La lecture est monotone. Les
leçons sont trop longues pour un usage sur téléphone.

### 1.2 Le diagnostic technique

Le constat n'est pas d'abord éditorial, il est structurel. `Lesson.content` est **une simple
chaîne de caractères** (`src/types/index.ts`), et le moteur de rendu
(`src/components/features/LessonViewer.tsx`, fonction `renderLessonContent`) ne sait produire que
deux choses :

- une ligne commençant par `#### N. Titre` → une pastille à icône, un titre, **et un seul
  paragraphe** ;
- tout le reste → un `<p class="text-[15.5px] font-medium leading-relaxed text-ink-muted">`.

Quatre conséquences directes, toutes vérifiées dans le code :

| # | Constat | Preuve |
|---|---|---|
| D1 | **Aucun moyen d'écrire du gras.** Il n'existe aucun parseur ; `**Alger**` s'afficherait avec ses astérisques. | `renderLessonContent`, aucun traitement inline |
| D2 | **Bug de rattachement.** Seule la 1ʳᵉ ligne suivant un `####` est rattachée à sa rubrique. Les paragraphes suivants tombent en `<p>` orphelins, gris, sans lien visuel. | `LessonViewer.tsx` L40-42 : `const body = nextLine && !nextLine.startsWith("####") ? nextLine : null` |
| D3 | **Marqueurs bruts affichés à l'écran.** Deux écrans rendent `lesson.content` *directement*, sans passer par `renderLessonContent` : les `#### 1. Situation territoriale` des fiches Géographie s'y affichent **littéralement**. | `BiblioScreen.tsx` L254 (« À la une ») et `SwipeCard.tsx` L84 (fil Home, via `homeFeed.ts` L37) |
| D4 | **Aucun bloc typé.** Pas de « À retenir », pas de « Le savais-tu ? », pas de chiffre clé, pas de citation, pas de frise. | Type `Lesson` : `{ id, title, content }` |

**D3 est un bug utilisateur actif, visible aujourd'hui en production.** Il est corrigé
mécaniquement par la refonte, mais il faut savoir qu'il existe.

### 1.3 Le diagnostic éditorial

Deux formats coexistent, tous deux problématiques pour des raisons opposées :

| Matière | Format actuel | Volume constaté | Problème |
|---|---|---|---|
| **Histoire** (40 cours, 200 leçons) | **un seul paragraphe monolithique**, aucune coupure | ≈ **170-180 mots** d'un bloc | Le pire cas de mur de texte : rien ne respire, aucun point d'accroche visuel |
| **Personnalités** (31 cours, 153 leçons) | idem Histoire | ≈ **170-180 mots** d'un bloc | idem |
| **Géographie** (54 cours, 162 leçons) | 2-3 rubriques `####`, 4-5 paragraphes | ≈ **280-300 mots** | Volume double de la cible, plus le bug D2 qui casse la structure après la 1ʳᵉ phrase |
| **Héritées** (3 cours, 9 leçons) | paragraphes libres | variable | Relèvent de la Phase 8 |

**Total du catalogue : 128 cours, 524 leçons** (recompté dans `src/data/courses/*.ts`, la valeur
de 374 leçons inscrite dans `CLAUDE.md` datant d'avant l'intégration de Personnalités).

Sur un écran de 390 px de large, 170 mots ≈ 17 lignes, 290 mots ≈ 30 lignes. Une fiche
Géographie demande donc **3 à 4 écrans de défilement pour une seule leçon sur trois**.

Le ton, lui, est celui d'une notice encyclopédique. Exemple réel, ouverture de la fiche Algérie :

> « L'Algérie occupe le centre du Maghreb, en Afrique du Nord, avec une façade méditerranéenne au
> nord. »

C'est exact, sourcé, et parfaitement inerte. Il manque une accroche, des repères saillants et du
concret.

---

## 2. Principes directeurs

Six principes, dans cet ordre de priorité. En cas de conflit entre deux règles de ce document,
c'est le principe le plus haut qui tranche.

**P1 — Une leçon = un écran.** La cible est le téléphone. Si l'utilisateur doit faire défiler
plus d'un écran et demi, la leçon est trop longue. Ce n'est pas une préférence esthétique : c'est
la condition du micro-apprentissage.

**P2 — Le rythme prime sur l'exhaustivité.** Une leçon n'est pas un article d'encyclopédie. Ce
qui n'est pas mémorisable ne mérite pas d'être dans la leçon. Le détail a sa place — dans le
quiz, dans un « Le savais-tu ? », ou nulle part.

**P3 — Jamais deux paragraphes consécutifs.** C'est la règle anti-monotonie centrale. Entre deux
blocs de prose, il y a toujours quelque chose de visuellement différent.

**P4 — Le gras est une ressource rare.** Si tout est en gras, plus rien ne ressort. Le gras
signale exclusivement ce qui doit rester en mémoire : dates, chiffres, noms propres majeurs.

**P5 — Le contenu est structuré, pas balisé.** On ne code pas des astérisques dans une chaîne de
caractères : on décrit des blocs typés que TypeScript vérifie et que le validateur contrôle. La
structure est une donnée, pas une convention de rédaction.

**P6 — Un seul moteur de rendu.** Une leçon s'affiche à **quatre** endroits différents dans
l'application (page de cours, « À la une » en Biblio, fil Home, favoris — voir § 10). Ces quatre
endroits partagent le même composant. Aucune divergence tolérée : c'est précisément la divergence
actuelle qui a produit le bug D3.

---

## 3. Le modèle de données `LessonBlock`

### 3.1 Le type

Nouveau fichier `src/lib/lessonBlocks.ts` (types + fonctions pures), les types étant réexportés
depuis `src/types/index.ts` pour rester cohérents avec l'organisation existante.

```ts
/** Bloc élémentaire d'une leçon. Union discriminée sur `type`. */
export type LessonBlock =
  | ParagrapheBlock
  | ARetenirBlock
  | LeSavaisTuBlock
  | ChiffreCleBlock
  | CitationBlock
  | FriseBlock
  | ReperesBlock
  | ImageBlock;

/** Prose courante. `text` accepte le balisage inline `**gras**` (voir § 5). */
export interface ParagrapheBlock {
  type: "paragraphe";
  text: string;
}

/** Ancre mémorielle de fin de leçon. Obligatoire, une seule par leçon. */
export interface ARetenirBlock {
  type: "aRetenir";
  /** 2 à 3 puces, 14 mots maximum chacune. Balisage inline autorisé. */
  points: string[];
}

/** Anecdote surprenante. Optionnel, une seule par leçon, toujours en dernier. */
export interface LeSavaisTuBlock {
  type: "leSavaisTu";
  text: string;
}

/** Un nombre isolé, mis en scène. */
export interface ChiffreCleBlock {
  type: "chiffreCle";
  /** Le nombre et son unité, tel qu'affiché : "2,38 M km²", "3100 av. J.-C.", "80 %" */
  valeur: string;
  /** Ce que le nombre signifie, 10 mots maximum. Pas de balisage inline. */
  legende: string;
}

/** Parole rapportée, proverbe, devise. */
export interface CitationBlock {
  type: "citation";
  texte: string;
  auteur: string;
  /** Année ou période, affichée en petit sous l'auteur. Facultatif. */
  date?: string;
}

/** Suite chronologique. 3 à 5 événements. */
export interface FriseBlock {
  type: "frise";
  evenements: { date: string; texte: string }[];
  /**
   * Mention commune à toutes les dates ("av. J.-C."), affichée une seule fois sous la frise.
   * Les pastilles ne portent alors que le nombre. Sans ce champ, répéter « av. J.-C. » dans
   * chacune des 3 à 5 pastilles les fait déborder sur un écran de 360 px et gaspille jusqu'à
   * 10 mots de budget pour la même information (constaté à la maquette du 28/07/2026).
   */
  unite?: string;
}

/** Grille de repères factuels (capitale, monnaie, population…). 2 à 6 entrées. */
export interface ReperesBlock {
  type: "reperes";
  items: { label: string; valeur: string }[];
}

/**
 * Illustration intra-leçon. Le fichier n'est PAS référencé ici : il est résolu par convention
 * (`src/assets/lecons/<courseId>-<lessonId>-{400w,800w}.webp`), exactement comme les bannières
 * de cours le sont déjà par `src/lib/courseImages.ts` via `import.meta.glob`.
 *
 * Déclaré dès maintenant alors qu'aucune image n'existe encore (voir § 4.8) : le coût aujourd'hui
 * est de dix lignes de type, le coût d'un ajout ultérieur serait une seconde migration de données
 * sur 524 leçons.
 */
export interface ImageBlock {
  type: "image";
  /** Obligatoire, non vide, différent de la légende. */
  alt: string;
  /** Légende visible sous l'image. 12 mots maximum. */
  legende?: string;
  /** Attribution. Obligatoire pour toute image non produite pour le projet. */
  credit?: string;
}
```

Et le type `Lesson` devient :

```ts
export interface Lesson {
  id: string;
  title: string;
  blocks: LessonBlock[];
}
```

`content: string` **disparaît définitivement**. Aucun champ transitoire, aucune coexistence de
formats : le plan de migration (§ 11) convertit d'abord la totalité du catalogue, puis le champ
est supprimé dans le même lot.

### 3.2 Pourquoi une union discriminée plutôt qu'un mini-markdown

L'alternative écartée était de garder `content: string` avec une syntaxe maison (`> À retenir`,
`!> Le savais-tu`). Elle aurait rendu la migration indolore. Elle a été écartée pour trois
raisons :

1. **Le validateur ne peut pas contrôler une convention de rédaction.** Il peut contrôler un
   type. Or c'est le validateur qui doit garantir l'homogénéité sur 524 leçons, pas la
   discipline du rédacteur.
2. **Un parseur est du code à maintenir, à tester et à faire tourner à chaque rendu.** Une union
   discriminée est vérifiée par `tsc` une fois pour toutes, à coût nul à l'exécution.
3. **L'expérience du format actuel est déjà celle d'un mini-markdown raté** : la convention
   `#### N. Titre` a produit le bug D2 et le bug D3. On ne recommence pas.

### 3.3 Ce qui n'est pas concerné

`CourseMeta` (`src/data/coursesIndex.generated.ts`) ne porte que `lessons: { id: string }[]` — pas
le texte. **L'index léger et le découpage du bundle (chantier 7.5) ne sont donc pas touchés.**
C'est une bonne nouvelle : la refonte n'a aucun coût sur la performance de chargement initial.

---

## 4. Catalogue des blocs

Huit blocs. Le catalogue est **fermé** : ajouter un neuvième bloc est une décision de charte, pas
une initiative de rédaction.

Tous les rendus décrits ci-dessous n'emploient que des tokens existants de
`src/styles/index.css` — aucune couleur codée en dur, conformément à la règle du projet.

---

### 4.1 `paragraphe`

| | |
|---|---|
| **Rôle** | La prose. Le seul bloc qui porte le raisonnement, la causalité, le récit. |
| **Longueur** | 30 à 50 mots. Au-delà, c'est un mur de texte en miniature. |
| **Fréquence** | 2 par leçon (accroche + développement). 3 maximum. |
| **Balisage inline** | Oui. |

**Rendu** — `text-[15.5px] font-medium leading-relaxed text-ink-muted`, espacement `mt-3`.

Point de design important : le gras inline se rend en `font-bold text-ink` — c'est-à-dire **plus
sombre** que le texte courant (`text-ink-muted`, `#5c554b`). C'est ce contraste de valeur, et pas
seulement la graisse, qui fait ressortir les dates et les noms sur un petit écran.

---

### 4.2 `aRetenir`

| | |
|---|---|
| **Rôle** | L'ancre mémorielle. Ce que l'utilisateur doit encore savoir demain. |
| **Longueur** | 2 à 3 puces, 14 mots maximum par puce. |
| **Fréquence** | **Exactement une par leçon. Obligatoire.** |
| **Position** | Avant-dernier bloc (ou dernier si pas de « Le savais-tu ? »). |
| **Balisage inline** | Oui, mais réservé au chiffre ou à la date de la puce. |

**Rendu** — encadré `rounded-card border-[2.5px] border-ink shadow-sm`, fond
`SUBJECT_BG[accentColor]` (le pastel de la matière : `bg-histoire`, `bg-geo`, `bg-perso`…). Un
sur-titre « À RETENIR » en `font-heading text-xs font-bold uppercase tracking-wide text-ink`.
Puces marquées par un petit carré plein `bg-ink` (pas de `list-disc` : la signature
néo-brutaliste est anguleuse).

Le fond pastel de matière est ce qui donne à l'application sa **couleur perçue**. Aujourd'hui, une
leçon est un rectangle blanc de texte gris ; demain, une leçon d'Histoire est sable, une leçon de
Géographie est verte.

---

### 4.3 `leSavaisTu`

| | |
|---|---|
| **Rôle** | La surprise. C'est le bloc qui donne envie de swiper la carte suivante. |
| **Longueur** | 20 à 35 mots. Une seule idée. |
| **Fréquence** | Zéro ou une par leçon. **Fortement recommandé.** |
| **Position** | Toujours le dernier bloc. |
| **Balisage inline** | Oui. |

**Rendu** — encadré `rounded-card border-[2.5px] border-ink`, fond `bg-gold` à opacité réduite
(`bg-gold/30`), icône `Lightbulb` de `lucide-react` dans une pastille ronde bordée. Sur-titre
« LE SAVAIS-TU ? » en `font-heading text-xs uppercase`.

Le doré (`--color-gold`, `#f2b705`) est réservé à ce bloc dans tout le corps de leçon : il devient
un signal reconnaissable, quelle que soit la matière.

**Règle de contenu** : ce n'est pas un résumé, pas une précision, pas une note de bas de page.
C'est un fait qui provoque une réaction. S'il n'y a rien de surprenant à dire, on omet le bloc —
un « Le savais-tu ? » tiède est pire que pas de « Le savais-tu ? » du tout.

---

### 4.4 `chiffreCle`

| | |
|---|---|
| **Rôle** | Donner une échelle. Un nombre lu dans une phrase glisse ; un nombre isolé s'imprime. |
| **Longueur** | `valeur` ≤ 15 caractères, `legende` ≤ 10 mots. |
| **Fréquence** | Zéro ou une par leçon. |
| **Position** | Typiquement après l'accroche. |
| **Balisage inline** | Non. |

**Rendu** — bloc `bg-card border-[2.5px] border-ink rounded-card shadow-sm`, valeur en
`font-heading text-[34px] font-extrabold text-primary` (grande taille : `--color-primary` suffit
au contraste AA au-delà de 24 px), légende en `text-[13px] font-medium text-ink-faint`.

**Règle de contenu** : le chiffre doit être *frappant*, pas seulement exact. « 46 millions
d'habitants » n'apprend rien à personne ; « 80 % du pays est un désert » est une image.

---

### 4.5 `citation`

| | |
|---|---|
| **Rôle** | Faire entendre une voix. Indispensable en Histoire et en Personnalités. |
| **Longueur** | 25 mots maximum. Une citation longue n'est plus une citation. |
| **Fréquence** | Zéro ou une par leçon. |
| **Balisage inline** | Non (le bloc est déjà une emphase). |

**Rendu** — filet vertical gauche `border-l-[5px] border-ink pl-4`, texte en italique
`text-[15.5px] text-ink`, auteur en `font-heading text-[13px] font-bold text-ink`, date
éventuelle en `text-[12px] text-ink-faint`.

**Règle de contenu** : uniquement des citations attestées et sourçables. En cas de doute sur
l'authenticité d'une parole (fréquent pour les figures anciennes), on préfère un proverbe
identifié par son origine, ou on omet le bloc. Le champ `auteur` peut porter une origine
collective (« Proverbe akan ») plutôt qu'un nom.

---

### 4.6 `frise`

| | |
|---|---|
| **Rôle** | Rendre une chronologie lisible d'un coup d'œil. |
| **Longueur** | 3 à 5 événements, `texte` ≤ 10 mots chacun. |
| **Fréquence** | Zéro ou une par leçon. |
| **Balisage inline** | Non. |

**Rendu** — liste verticale, une ligne verticale `border-l-[2.5px] border-ink/25` reliant des
pastilles de date (fond `SUBJECT_BG[accentColor]`, bordure `border-[2px] border-ink`,
`font-heading text-[12px] font-bold`), texte de l'événement à droite en `text-[14px]`.

**Règle de contenu** : une frise remplace un paragraphe chronologique, elle ne le double pas. Si
la même succession de dates est déjà racontée en prose juste au-dessus, l'un des deux est de trop.

**Le champ `unite`** porte la mention commune à toutes les dates (`"av. J.-C."`), affichée une
seule fois en légende sous la frise ; les pastilles ne contiennent alors que le nombre. Sans lui,
`2700 av. J.-C.` déborde d'une pastille sur un écran de 360 px, et la mention est comptée trois à
cinq fois dans le budget de mots pour la même information. Découvert en maquettant le rendu, pas
en rédigeant la spécification.

---

### 4.7 `reperes`

| | |
|---|---|
| **Rôle** | La carte d'identité factuelle : capitale, monnaie, population, régime. |
| **Longueur** | 2 à 6 entrées, `valeur` ≤ 4 mots. |
| **Fréquence** | Zéro ou une par leçon. |
| **Balisage inline** | Non. |

**Rendu** — grille `grid-cols-2` de mini-fiches `bg-card border-[2px] border-ink rounded-[12px]`,
`label` en `font-heading text-[11px] uppercase tracking-wide text-ink-faint`, `valeur` en
`text-[15px] font-bold text-ink`.

C'est le bloc qui absorbe tout le contenu « fiche signalétique » aujourd'hui noyé dans la prose de
la rubrique *Institutions et politique* des fiches Géographie.

---

### 4.8 `image`

| | |
|---|---|
| **Rôle** | Un portrait, un artefact, un lieu. La forme la plus directe de rupture du texte. |
| **Fréquence** | Zéro ou une par leçon. |
| **Statut** | **Déclaré, non utilisé.** Aucune image de leçon n'existe à ce jour. |
| **Balisage inline** | Non. |

**Rendu** — image en `4:3` ou `16:9`, `border: 2.5px solid #ink`, `border-radius: 16px`,
`box-shadow: 3px 3px 0`, `srcset` sur les variantes `-400w`/`-800w`, `loading="lazy"`. Légende
éventuelle en `text-[12.5px] text-ink-faint` sous l'image, crédit en `text-[11px] text-ink-faint`.

**Résolution du fichier** : par convention, `src/assets/lecons/<courseId>-<lessonId>-{400w,800w}.webp`,
via `import.meta.glob` — même mécanisme que `src/lib/courseImages.ts` pour les bannières de cours.
Le bloc ne porte aucun chemin. Une seule image par leçon ; un suffixe `-2` serait nécessaire au-delà,
ce que la charte n'autorise pas.

#### Pourquoi le déclarer maintenant sans produire une seule image

Le coût aujourd'hui : dix lignes de type, un composant de rendu, deux règles de validateur. Le
coût si on l'oublie : **une seconde migration de données sur 524 leçons**, plus une nouvelle passe
sur le validateur et les quatre sites de rendu. La décision est asymétrique — on déclare.

#### Trois contraintes que l'image impose

**1. Elle mange de l'écran, pas des mots.** Une image 16:9 sur 360 px fait ~200 px, soit un tiers
d'écran. Le principe P1 impose donc un **budget réduit : 70 à 110 mots** pour une leçon qui
contient une image, au lieu de 90-140.

**2. Elle compte comme bloc visuel** au sens de la règle P3. Elle peut donc **remplacer** le
`chiffreCle` ou la `frise` du squelette — pas s'y ajouter.

**3. Le crédit est obligatoire pour toute image non produite pour le projet**, et le champ existe
dès la v1 précisément pour ça.

#### Ordre de production (chantier ultérieur)

| Priorité | Matière | Justification |
|---|---|---|
| 1 | **Personnalités** (~31 images) | Un portrait *est* le sujet. C'est là que l'image apporte le plus |
| 2 | **Histoire** (~40 images) | Les artefacts portent le récit : bronzes du Bénin, Grand Zimbabwe, Lalibela. Une par cours, pas une par leçon |
| 3 | **Géographie** | La bannière de pays suffit. Et une **carte** serait plus utile qu'une photo — c'est un autre bloc, un autre chantier |

**Sources pour Personnalités — décision : mixte selon l'époque.** Illustration produite pour le
projet (pipeline `docs/contenu */PROMPTS-IMAGES-*.md`) pour les figures anciennes dont aucun
portrait n'existe — Hatchepsout, Mansa Moussa, Nzinga ; photographie d'archive sous licence libre
pour le XXᵉ siècle — Senghor, Mandela, Sankara, Fela. C'est le choix le plus juste
historiquement : illustrer une photo qui existe serait une falsification douce.

*Réserve assumée* : deux esthétiques cohabiteront dans la même matière. Le traitement visuel
devra les rapprocher — cadrage, bordure et rayon identiques, et une conversion colorimétrique
homogène des photographies. À éprouver sur trois cas (une figure ancienne, une figure du XXᵉ, une
figure charnière) avant de lancer les 31.

**Aucune image n'est produite pendant le chantier de réécriture du texte.** Mélanger les deux
double le temps par lot et rend les revues confuses — on ne sait plus si l'on juge le texte ou
l'image.

---

## 5. Balisage inline

### 5.1 La syntaxe

Un seul balisage, dans les champs qui l'autorisent (`paragraphe.text`, `aRetenir.points[]`,
`leSavaisTu.text`) :

```
**texte en gras**
```

Rien d'autre. Pas d'italique (réservé au bloc `citation`), pas de lien, pas de titre, pas de
liste, pas de code. Le parseur tient en une dizaine de lignes et se teste exhaustivement.

### 5.2 Ce qui se met en gras

**Uniquement**, et par ordre de priorité :

1. **Les dates et les périodes** — `**1962**`, `**vers 3100 av. J.-C.**`, `**XVIIIᵉ siècle**`.
2. **Les chiffres porteurs de sens** — `**2,38 millions de km²**`, `**80 %**`.
3. **Les noms propres majeurs** — personnes (`**Narmer**`), lieux (`**Tombouctou**`), peuples
   (`**Kabyles**`), institutions (`**Sonatrach**`), œuvres.
4. **Les concepts nommés que la leçon introduit** — `**Kemet**`, `**la Maât**`, `**la Négritude**`.

### 5.3 Ce qui ne se met jamais en gras

- Une phrase entière, ou plus de **4 mots consécutifs**.
- Un adjectif ou un adverbe d'insistance (« **très** vaste », « **profondément** marqué »).
- Un nom propre déjà mis en gras plus tôt **dans le corps de la leçon** — on ne graisse qu'à la
  première occurrence. *Exception* : le bloc `aRetenir` peut regraisser un terme déjà vu, parce
  qu'il se lit isolément, comme un résumé détachable.
- Un mot dans un bloc `chiffreCle`, `citation`, `frise` ou `reperes` (le balisage y est interdit).

### 5.4 La densité

La densité se compte **par type de bloc**, et non globalement. Les encadrés (`aRetenir`,
`leSavaisTu`) portent déjà une emphase par leur fond coloré et leur bordure : y empiler du gras
revient à souligner ce qui est déjà surligné.

| Bloc | Passages en gras autorisés |
|---|---|
| `paragraphe` | **2 à 5 au total**, tous paragraphes de la leçon confondus |
| `aRetenir` | **1 au maximum par puce**, réservé au chiffre ou à la date de la puce |
| `leSavaisTu` | **2 au maximum** |
| `chiffreCle`, `citation`, `frise`, `reperes` | **0 — balisage interdit** |

En dessous de 2 passages dans les paragraphes, la leçon n'a aucun point d'accroche visuel. Au-delà
de 5, sur 70 à 100 mots de prose, le gras devient du bruit et ne signale plus rien.

---

## 6. Charte de rédaction

### 6.1 Le budget de mots

**90 à 140 mots par leçon, tout compris — 70 à 110 si la leçon contient un bloc `image`** (§ 4.8).

« Tout compris » signifie : la prose, les puces de l'« À retenir », le texte du « Le savais-tu ? »,
les légendes, les événements de frise, les valeurs de repères. Tout ce qui s'affiche à l'écran est
compté, parce que c'est l'écran qu'on cherche à tenir, pas un quota rédactionnel.

Répartition typique d'une leçon de 130 mots :

| Bloc | Mots |
|---|---|
| Accroche (`paragraphe`) | 35 |
| Bloc visuel (`chiffreCle`) | 10 |
| Développement (`paragraphe`) | 45 |
| `aRetenir` (3 puces) | 25 |
| `leSavaisTu` | 25 |
| **Total** | **140** |

Il reste donc **70 à 100 mots de prose réelle**. C'est peu, et c'est le point le plus difficile de
cette charte. Face aux 170-290 mots actuels, **on ne redistribue pas : on supprime**.

### 6.2 Ce que le budget n'autorise pas

Découper une fiche Géographie de 290 mots en sept leçons de 100 mots serait pire que le mal :
sept écrans au lieu de trois, pour le même volume total. Le budget s'applique **à nombre de
leçons constant**.

**Conséquence heureuse et volontaire** : puisque `course.xp = 20 + 10 × nombre de leçons` (règle
du chantier 7.3) et que le nombre de leçons ne bouge pas, **l'XP du catalogue est inchangée**.
Aucun recalibrage de `LEVEL_TIERS`, aucune migration du store, la version de persistance reste
à **7**. Ce serait le troisième recalibrage de la gamification ; l'éviter a de la valeur en soi.

| Matière | Leçons/cours avant | Après | XP/cours |
|---|---|---|---|
| Histoire | 5 | **5** | 70, inchangé |
| Personnalités | 5 | **5** | 70, inchangé |
| Géographie | 3 | **3** | 50, inchangé |
| Matières héritées | 3 | **3** | 50, inchangé |

### 6.3 Le squelette de leçon

Ordre imposé :

```
1. paragraphe          ← ACCROCHE            obligatoire
2. bloc visuel         ← chiffreCle | citation | frise | reperes
3. paragraphe          ← DÉVELOPPEMENT       obligatoire
4. aRetenir            ← ANCRE               obligatoire, unique
5. leSavaisTu          ← SURPRISE            optionnel, toujours en dernier
```

**4 à 7 blocs par leçon.** Une leçon plus riche peut insérer un second bloc visuel entre 3 et 4,
ou un troisième paragraphe — jamais deux paragraphes qui se suivent (P3).

### 6.4 L'accroche

C'est la phrase qui décide si la leçon est lue. Deux phrases maximum, 30 à 45 mots.

**Interdit** — l'ouverture par définition plate :

> ❌ « L'Algérie occupe le centre du Maghreb, en Afrique du Nord. »
> ❌ « Hatchepsout est la fille du pharaon Thoutmosis Iᵉʳ. »
> ❌ « L'Égypte antique s'est développée au nord-est de l'Afrique, le long du Nil. »

**Obligatoire** — l'un des quatre leviers :

| Levier | Exemple |
|---|---|
| **Le chiffre qui surprend** | « On pourrait poser la France **quatre fois** dans le seul Sahara algérien. » |
| **Le paradoxe** | « Elle a régné vingt ans sur l'Égypte. Puis on a effacé son nom de la pierre. » |
| **L'image concrète** | « Chaque été, le Nil débordait et recouvrait ses rives d'un limon noir. » |
| **La question** | « Comment une femme pouvait-elle occuper une fonction que la théologie disait masculine ? » |

### 6.5 Le ton

- **Présent de narration** en Histoire et en Personnalités. « Hatchepsout **assure** la régence »
  plutôt que « Hatchepsout assura la régence ». Le présent rend le récit immédiat.
- **Présent descriptif** en Géographie.
- **Tutoiement** dans l'accroche et le « Le savais-tu ? » uniquement — il est déjà en usage dans
  les descriptions de cours (« Découvre l'Algérie… »). Le corps factuel reste impersonnel.
- **Phrases courtes : 25 mots maximum.** Une idée par phrase.
- **Bannis** : « il convient de noter », « on peut souligner », « par ailleurs », « en effet »,
  « notamment » en début de phrase, « à travers le prisme de ».
- **Concret plutôt qu'abstrait.** « Le Sahara est très vaste » n'apprend rien. « On pourrait y
  poser la France quatre fois » se retient.
- **Une source, jamais une bibliographie.** Citer l'UNESCO une fois quand c'est décisif, pas à
  chaque leçon. Aujourd'hui, « l'Histoire générale de l'Afrique de l'UNESCO » revient dans un
  grand nombre de leçons et finit par sonner comme un tic.

### 6.6 Le titre de leçon

Inchangé dans son principe, mais soumis aux mêmes exigences : **6 mots maximum**, concret,
jamais un intitulé de rubrique administrative.

> ✅ « Se faire couronner pharaon » — ❌ « Institutions et politique »

---

## 7. Gabarits par matière

La charte est commune ; le bloc visuel obligatoire varie selon la nature du savoir.

### 7.1 Histoire — le récit

| Leçon | Bloc visuel imposé |
|---|---|
| 1 | `chiffreCle` (une date fondatrice) **ou** `frise` |
| 2 à 4 | libre parmi `citation`, `frise`, `chiffreCle` |
| 5 | `frise` de synthèse **ou** `citation` de clôture |

**Au moins une `citation` et au moins une `frise` par cours** (répartition libre sur les 5
leçons). La dernière leçon d'un cours se termine par une phrase de transition vers le cours
suivant — c'est déjà l'usage, il est conservé.

**Point de vigilance identifié.** Un cours d'Histoire est un récit : cause, déroulé, conséquence.
Un « À retenir » imposé à la fin de chacune des 5 leçons risque de casser la continuité narrative
et de sonner scolaire — exactement le défaut qu'on cherche à corriger, sous une autre forme.
**C'est la raison pour laquelle le pilote contient 3 cours d'Histoire.** Si la friction apparaît,
la réponse sera d'enrichir le catalogue de blocs pour le récit (par exemple un bloc `consequence`
ou `etEnsuite`), **pas** d'assouplir la règle.

### 7.2 Géographie — la fiche

Structure de la matière conservée (3 leçons : Le territoire / Population et société / Économie,
politique et repères).

| Leçon | Bloc visuel imposé |
|---|---|
| 1 — Le territoire | `chiffreCle` (superficie, altitude, part de désert…) |
| 2 — Population et société | `chiffreCle` (population, taux d'urbanisation) **ou** `citation` (proverbe local sourcé) |
| 3 — Économie, politique et repères | **`reperes` obligatoire** : capitale, monnaie, régime, indépendance |

Le bloc `reperes` de la leçon 3 absorbe intégralement le contenu « carte d'identité » actuellement
noyé en prose (« Régime : république. Chef de l'État (2026) : … Monnaie : le dinar algérien
(DZD). »). Cette prose disparaît.

**Note de maintenance** : les noms de chefs d'État datés « (2026) » dans le contenu actuel sont une
dette. Passés en `reperes`, ils restent une dette — mais localisée dans un champ identifiable, ce
qui rend une mise à jour de masse possible. À trancher séparément (Annexe B, Q4).

### 7.3 Personnalités — le portrait

| Leçon | Bloc visuel imposé |
|---|---|
| 1 — le contexte | `frise` (situer l'époque) |
| 2 à 4 | libre |
| 5 — la postérité | `citation` (de la personne, ou sur elle) |

**Au moins une `citation` par cours.** Si aucune parole attestée n'existe, la remplacer par une
`frise` des dates clés de la vie — jamais par une citation apocryphe.

### 7.4 Matières héritées

Arts & Musique, Traditions & Sociétés, Afrique contemporaine (1 cours chacune, 3 leçons). Gabarit
libre, squelette et budget identiques. Ces matières relèvent de la Phase 8 (équilibrage
éditorial) ; elles sont migrées en dernier.

---

## 8. Que faire du contenu supprimé

Passer de 170-290 mots à 90-140 signifie supprimer entre 40 % et 55 % du texte existant. Ce
contenu n'est pas mauvais — il est simplement au mauvais endroit. **Ordre de recyclage imposé :**

**1. Enrichir les `explanation` des questions de quiz existantes.** C'est la première
destination. Le champ `explanation` est lu au moment exact où l'utilisateur découvre s'il avait
juste ou faux — c'est le moment de rétention maximale de toute l'application, et il est
aujourd'hui sous-exploité.

**2. Alimenter les blocs `leSavaisTu`.** Les détails frappants (les 58 wilayas, la neige sur le
Hoggar, la XXVᵉ dynastie nubienne) sont exactement de la matière à « Le savais-tu ? ».

**3. Supprimer.** Sans regret. Les regs, les oueds, le Touat et Ouargla ne servent aucun des deux
usages précédents.

**Le nombre de questions de quiz est figé** — 5 par cours, à l'exception du cours hérité
`course-perso-voix-plumes-afrique` qui en compte 4 et les conserve. Ajouter des questions modifierait le
`total` des `QuizResult` déjà enregistrés dans le `localStorage` des utilisateurs et rendrait
l'historique du Profil incomparable dans le temps. On enrichit les explications, on n'ajoute pas
de questions.

---

## 9. Règles du validateur

Le validateur (`scripts/validate-content.ts`, `npm run validate`) porte aujourd'hui **9 règles**,
dont 7 bloquantes. La charte en ajoute **9**, numérotées 10 à 18.

### 9.1 Le mécanisme d'activation progressive

Les règles 11 à 18 ne peuvent pas être bloquantes dès le premier jour : les 519 leçons converties
mécaniquement (§ 11, étape 1) ne respectent pas la charte, et la CI est bloquante.

**Solution retenue** — une liste d'inclusion explicite en tête du validateur :

```ts
/**
 * Matières dont le contenu a subi la passe éditoriale de la charte (docs/CHARTE-LECONS.md).
 * Les règles 11 à 18 ne s'y appliquent qu'à ces matières. On étend cette liste à chaque
 * matière achevée — jamais avant.
 */
const CHARTE_APPLIQUEE: readonly string[] = [];
```

Pas de champ parasite dans les données, pas de format transitoire : une seule constante, explicite,
qu'on étend d'une matière à la fois. La règle 10, purement structurelle, s'applique dès le début à
tout le catalogue.

### 9.2 Les règles

| # | Règle | Portée | Sévérité |
|---|---|---|---|
| **10** | **Blocs bien formés** — chaque leçon a ≥ 1 bloc ; chaque bloc satisfait son schéma (`points` non vide, `evenements` non vide, `valeur`/`legende` non vides, aucun texte vide après `trim`) | tout le catalogue | **bloquante** |
| **11** | **Budget de mots** — 90 ≤ mots ≤ 140, ou 70 ≤ mots ≤ 110 si la leçon contient un bloc `image` | `CHARTE_APPLIQUEE` | **bloquante** hors [70, 150] (hors [55, 125] avec image), avertissement hors de la fourchette nominale |
| **12** | **`aRetenir` obligatoire et unique** — exactement un bloc `aRetenir` par leçon | `CHARTE_APPLIQUEE` | **bloquante** |
| **13** | **Jamais deux paragraphes consécutifs** (P3) | `CHARTE_APPLIQUEE` | **bloquante** |
| **14** | **Nombre de blocs** — 4 ≤ blocs ≤ 7 | `CHARTE_APPLIQUEE` | **bloquante** |
| **15** | **Ordre du squelette** — le 1ᵉʳ bloc est un `paragraphe` ; `aRetenir` est en avant-dernière ou dernière position ; `leSavaisTu`, s'il existe, est le dernier | `CHARTE_APPLIQUEE` | **bloquante** |
| **16** | **Contraintes de longueur fines** — puces d'`aRetenir` ≤ 14 mots et 2 ≤ puces ≤ 3 ; `paragraphe` ≤ 50 mots ; `leSavaisTu` ≤ 35 mots ; `citation.texte` ≤ 25 mots ; `chiffreCle.legende` ≤ 10 mots ; 3 ≤ `frise.evenements` ≤ 5 ; 2 ≤ `reperes.items` ≤ 6 | `CHARTE_APPLIQUEE` | **bloquante** |
| **17** | **Densité de gras** (§ 5.4) — 2 à 5 passages `**…**` dans les `paragraphe` d'une leçon ; ≤ 1 par puce d'`aRetenir` ; ≤ 2 dans `leSavaisTu` ; aucun passage > 4 mots ; aucun balisage dans un champ qui l'interdit (§ 5.3) | `CHARTE_APPLIQUEE` | avertissement pour la densité, **bloquante** pour le balisage interdit et les passages > 4 mots |
| **18** | **Gabarit de matière** (§ 7) — bloc visuel imposé présent à la bonne leçon ; `reperes` en leçon 3 de Géographie ; ≥ 1 `citation` par cours de Personnalités et d'Histoire ; ≥ 1 `frise` par cours d'Histoire | `CHARTE_APPLIQUEE` | **bloquante** |
| **19** | **Blocs image** — `alt` non vide et différent de `legende` ; au plus un `image` par leçon ; le fichier `src/assets/lecons/<courseId>-<lessonId>-{400w,800w}.webp` existe ; aucune variante orpheline | tout le catalogue | **bloquante** pour `alt` et l'unicité, avertissement pour les fichiers (comme les règles 8 et 9) |

**Non retenu** : la détection automatique des accroches plates (§ 6.4) par expression régulière
(`/^[A-ZÉÈ].{0,40}\b(est|était|se situe|est né)\b/`). Trop de faux positifs sur des ouvertures
légitimes, et une règle de validateur qu'on apprend à contourner mécaniquement ne protège plus
rien. L'accroche relève de la revue éditoriale humaine.

### 9.3 L'extracteur de texte brut

Une fonction pure, dans `src/lib/lessonBlocks.ts`, partagée par **trois** consommateurs :

```ts
/** Concatène tout le texte visible d'une leçon, balisage inline retiré. */
export function lessonPlainText(blocks: LessonBlock[]): string;

/** Nombre de mots visibles d'une leçon. Base de la règle 11. */
export function lessonWordCount(blocks: LessonBlock[]): number;
```

Consommateurs : `src/lib/search.ts` (règle 6 de la recherche), `scripts/validate-content.ts`
(règles 11 et 16), et le futur besoin d'extrait/résumé. **Une seule implémentation**, testée dans
`src/lib/lessonBlocks.test.ts` — c'est ce qui garantit que la recherche et le validateur ne
divergeront jamais sur ce qu'est « le texte d'une leçon ».

---

## 10. Points d'impact dans le code

Relevé exhaustif, obtenu par recherche de toutes les lectures de `.content` dans `src/`.

| # | Fichier | Ligne | Ce qui s'y passe | Action |
|---|---|---|---|---|
| I1 | `src/types/index.ts` | 35-39 | `Lesson.content: string` | → `blocks: LessonBlock[]` |
| I2 | `src/lib/lessonBlocks.ts` | — | *n'existe pas* | **à créer** : types, `lessonPlainText`, `lessonWordCount`, parseur inline |
| I3 | `src/components/features/LessonBlocks.tsx` | — | *n'existe pas* | **à créer** : le moteur de rendu unique (P6) |
| I4 | `src/components/features/LessonViewer.tsx` | 24-75, 95 | `renderLessonContent` | supprimée, remplacée par `<LessonBlocks>` |
| I5 | `src/routes/BiblioScreen.tsx` | 254 | rend `lesson.content` **brut** dans « À la une » — **bug D3** | `<LessonBlocks density="compact">` |
| I6 | `src/components/features/SwipeCard.tsx` | 84 | rend `card.content` **brut** dans le fil Home — **bug D3** | `<LessonBlocks density="compact">` |
| I7 | `src/lib/homeFeed.ts` | 37 | `content: lesson.content` → `SwipeCard.content` | voir décision ci-dessous |
| I8 | `src/routes/FavorisScreen.tsx` | 141 | rend `card.content` brut (cartes favorites) | `<LessonBlocks density="compact">` |
| I9 | `src/lib/search.ts` | 60-64 | cherche dans `lesson.content` | `lessonPlainText(lesson.blocks)` |
| I10 | `scripts/validate-content.ts` | 126-137 | règle 7, `lesson.content.trim()` | réécrite en règle 10 |
| I11 | `src/data/cards.ts` | — | 18 cartes éditoriales, `SwipeCard.content: string` | voir décision ci-dessous |
| I12 | `scripts/generate-course-index.ts` | — | produit `CourseMeta` (pas de texte de leçon) | **aucun impact** |
| I13 | `src/data/courses/*.ts` | — | 524 leçons | conversion mécanique (§ 11) |

### 10.1 Décision — `SwipeCard.content` devient lui aussi `LessonBlock[]`

`SwipeCard.content` est une `string`, et `homeFeed.ts` y injecte le contenu d'une vraie leçon
(I7). Deux options :

- **(a)** `SwipeCard.content` devient `LessonBlock[]`, et les **18 cartes éditoriales** de
  `src/data/cards.ts` migrent aussi ;
- **(b)** `homeFeed` extrait du texte brut via `lessonPlainText` et le fil Home reste en prose
  grise.

**Retenu : (a).** Le fil Home est l'écran d'entrée de l'application et le geste central du
produit — c'est le dernier endroit où l'on peut se permettre un rendu dégradé. (b) recréerait
exactement la monotonie qu'on cherche à supprimer, sur l'écran le plus vu.

Coût : 18 cartes éditoriales supplémentaires à migrer. Négligeable au regard des 524 leçons.

### 10.2 Le composant de rendu unique

```tsx
<LessonBlocks
  blocks={lesson.blocks}
  accent={category.color}          // SubjectColor, pour SUBJECT_BG
  density="full" | "compact"
/>
```

- `density="full"` — `LessonViewer` (page de cours). Espacements généreux, blocs pleine largeur.
- `density="compact"` — usages en ligne : « À la une » (I5), fil Home (I6), favoris (I8).
  Typographie réduite d'un cran, espacements resserrés, **mêmes blocs, même sémantique**.

Un seul composant, une seule vérité. C'est le principe P6, et c'est ce qui empêche la réapparition
du bug D3.

---

## 11. Plan de migration

### 11.1 Vue d'ensemble

```
Étape 0  Fondations techniques         (code, aucun contenu touché)
Étape 1  Conversion mécanique          (322 leçons — Géo, Perso, héritées)
Étape 2  Bascule du type               (content supprimé, typecheck vert)
Étape 3  PILOTE — 3 Histoire + 2 Géo   ← point de validation avec Mamadou
Étape 4  Règles 11-18 du validateur    (activation par matière)
Étape 5  Passes éditoriales            Histoire → Personnalités → Géographie → héritées
```

### 11.2 Étape 0 — Fondations

Créer `src/lib/lessonBlocks.ts` (I2), `src/components/features/LessonBlocks.tsx` (I3) et leurs
tests (`lessonBlocks.test.ts` : parseur inline, `lessonPlainText`, `lessonWordCount`, cas
dégradés — astérisque isolée, gras non fermé, chaîne vide).

Aucune donnée touchée. `npm test` et `npm run validate` restent verts.

### 11.3 Étape 1 — Conversion mécanique

**Périmètre : 322 leçons — Géographie, Personnalités, matières héritées. Pas l'Histoire.**

Les 200 leçons d'Histoire sont des paragraphes monolithiques : la conversion produirait un unique
bloc `paragraphe` que la réécriture éditoriale jetterait aussitôt. Elles sont enveloppées en une
ligne à l'étape 2, le temps que `tsc` passe, puis réécrites directement au bon format par les
8 lots de `docs/PROMPT-REECRITURE-HISTOIRE.md`. Personnalités partage ce format monolithique, mais
n'est réécrite qu'en 2ᵉ position — elle a donc besoin de la conversion pour tenir dans l'intervalle.

Script **jetable** `scripts/migrate-lessons-to-blocks.ts`, exécuté une fois, non conservé au
dépôt après usage (mentionné ici pour la traçabilité).

Règles de conversion :

| Entrée | Sortie |
|---|---|
| Un paragraphe (bloc séparé par `\n\n`) | `{ type: "paragraphe", text }` |
| Une ligne `#### N. Titre` suivie d'un paragraphe | `{ type: "paragraphe", text: "**Titre.** " + paragraphe }` |
| Leçon Histoire / Personnalités (un seul bloc de ~175 mots) | un unique `paragraphe` |

**Le titre de rubrique est fusionné en amorce grasse du paragraphe, pas supprimé.** Aucune perte
d'information, aucun bloc transitoire à inventer, et le rendu reste lisible (une amorce en gras
en tête de paragraphe est une convention typographique classique). La passe éditoriale supprimera
ensuite ces amorces en les remplaçant par de vrais blocs.

**Contrôle obligatoire avant validation de l'étape** : comparer `lessonPlainText(blocks)` au
`content` d'origine, leçon par leçon, sur les 524, en ignorant les espaces et les marqueurs
`####` — un diff vide sur l'ensemble du catalogue est la condition de passage à l'étape 2. C'est
ce contrôle automatique qui rend acceptable une conversion de masse sans relecture humaine.

### 11.4 Étape 2 — Bascule du type

Suppression de `content` de `Lesson`, application des impacts I1, I4 à I11. `npm run typecheck`
vert. Rendu visuellement **identique à aujourd'hui** pour Histoire et Personnalités, et
**corrigé** pour la Géographie (bugs D2 et D3 disparaissent : les marqueurs `####` ne s'affichent
plus en clair dans « À la une » et dans le fil Home).

À ce stade, aucun gain de rythme : c'est la fondation, pas le résultat.

### 11.5 Étape 3 — Le pilote

**5 cours, choisis pour couvrir les registres les plus différents :**

| Cours | Matière | Registre testé |
|---|---|---|
| `course-histoire-01-egypte-antique` | Histoire | Civilisation ancienne, 5 leçons, forte densité de dates |
| `course-histoire-24-traite-negriere-transatlantique` | Histoire | Phénomène long, sujet grave — teste la compatibilité du ton avec un sujet douloureux |
| `course-histoire-30-apartheid-mandela` | Histoire | Histoire récente + biographie, matière à `citation` |
| `course-geographie-20-senegal` | Géographie | Fiche pays, 3 leçons, gabarit `reperes` |
| `course-geographie-46-afrique-du-sud` | Géographie | Fiche pays complexe (plusieurs capitales, 11 langues) — teste les limites du gabarit |

**Le cours 24 est délibérément inclus.** Une charte qui prescrit « la surprise » et « le chiffre
frappant » doit être éprouvée sur la traite négrière avant d'être appliquée à 128 cours. Si le ton
prescrit s'avère déplacé sur ce sujet, la charte doit prévoir une exception explicite — c'est
mieux de le découvrir sur un cours que sur quarante.

**Point d'arrêt.** L'étape 3 se termine par une revue avec Mamadou, dans l'application. Aucune
autre matière n'est engagée avant cette revue.

### 11.6 Étape 4 — Activation du validateur

`CHARTE_APPLIQUEE` reste vide pendant le pilote (5 cours ne justifient pas d'activer une règle par
matière). Elle est renseignée matière par matière à mesure que l'étape 5 avance.

### 11.7 Étape 5 — Passes éditoriales

Ordre et justification :

| Ordre | Matière | Volume | Pourquoi ce rang |
|---|---|---|---|
| 1 | **Histoire** | 40 cours, 200 leçons | Le pire cas (paragraphe monolithique de 175 mots) et la vitrine du produit. C'est aussi là que la charte est la plus difficile à tenir — autant s'y confronter tôt |
| 2 | **Personnalités** | 31 cours, 153 leçons | Même format narratif que l'Histoire : réutilise directement une charte rodée |
| 3 | **Géographie** | 54 cours, 162 leçons | Le plus volumineux mais le plus mécanique (gabarit très régulier une fois fixé), donc le plus rapide au mot près |
| 4 | **Matières héritées** | 3 cours, 9 leçons | Relèvent de la Phase 8 (équilibrage éditorial), à traiter avec l'écriture des cours manquants |

Chaque matière achevée = un commit thématique + extension de `CHARTE_APPLIQUEE` + `npm run
validate` vert + `npm test` vert.

### 11.8 Ce que la migration ne touche pas

- Le store (`useAppStore`) et `UserProgress` — **aucune migration, version 7 conservée**.
- `LEVEL_TIERS` et la gamification — nombre de leçons inchangé (§ 6.2).
- Les identifiants de leçon (`${courseId}:${lessonId}`) — **strictement conservés**, donc la
  progression enregistrée dans le `localStorage` des utilisateurs reste valide.
- Les quiz — mêmes identifiants, mêmes questions, 5 par cours. Seules les `explanation`
  s'enrichissent (§ 8).
- `CourseMeta`, l'index généré et le découpage du bundle (§ 3.3).
- Les illustrations et leurs variantes.

---

## Annexe A — Exemples avant / après

### A.1 Histoire — `course-histoire-01-egypte-antique`, leçon 1

**Avant** — *« Une civilisation africaine née sur le Nil »*, **≈ 175 mots, un seul paragraphe** :

> L'Égypte antique s'est développée au nord-est de l'Afrique, le long du Nil, le fleuve qui la
> traverse du sud vers le nord. Chaque année, la crue déposait un limon noir et fertile sur ses
> rives : les Égyptiens appelaient leur pays Kemet, « la terre noire », par opposition au désert
> rouge qui l'entourait. Sans le Nil, aucune agriculture n'aurait été possible dans cette région
> aride — le fleuve était donc la source de toute vie. Dans sa Histoire générale de l'Afrique,
> l'UNESCO replace clairement l'Égypte au cœur de l'histoire africaine, dans ce qu'elle appelle le
> « corridor du Nil ». Vers 3100 av. J.-C., deux royaumes — la Haute-Égypte (au sud) et la
> Basse-Égypte (au nord, le delta) — furent unifiés en un seul État, un événement traditionnellement
> attribué au roi Narmer (souvent identifié à Ménès). Cette unification marque le début de près de
> trois mille ans d'histoire pharaonique.

**Après** — **≈ 135 mots, 5 blocs** :

```ts
blocks: [
  {
    type: "paragraphe",
    text: "Chaque été, le Nil débordait et recouvrait ses rives d'un limon noir. Les Égyptiens n'appelaient pas leur pays « Égypte » : ils l'appelaient **Kemet**, « la terre noire ».",
  },
  {
    type: "chiffreCle",
    valeur: "3100 av. J.-C.",
    legende: "l'unification qui ouvre 3 000 ans d'histoire pharaonique",
  },
  {
    type: "paragraphe",
    text: "Sans cette crue, rien n'aurait poussé dans une région aride. Deux royaumes — la Haute-Égypte au sud, la Basse-Égypte au nord — sont alors unifiés, un geste attribué au roi **Narmer**. L'UNESCO replace cette civilisation au cœur de l'Afrique, dans ce qu'elle nomme le « corridor du Nil ».",
  },
  {
    type: "aRetenir",
    points: [
      "Kemet, « la terre noire », doit tout à la crue du Nil",
      "Unification vers **3100 av. J.-C.**, attribuée au roi Narmer",
      "Une civilisation africaine, en dialogue avec le continent",
    ],
  },
  {
    type: "leSavaisTu",
    text: "Le désert qui entourait Kemet, les Égyptiens l'appelaient **Deshret** — « la terre rouge ». Deux mondes que tout opposait, séparés par une berge.",
  },
]
```

**Ce qui a été retiré, et où c'est allé** : « souvent identifié à Ménès » → `explanation` de la
question de quiz sur Narmer. « le fleuve qui la traverse du sud vers le nord » → supprimé.
« Ancien / Moyen / Nouvel Empire » → déjà en leçon 2, n'avait rien à faire ici.

### A.2 Géographie — `course-geographie-01-algerie`, leçon 1

**Avant** — *« Le territoire »*, **≈ 290 mots**, 2 rubriques `####` + 4 paragraphes, dont 2
orphelins à cause du bug D2, et des marqueurs `####` affichés en clair en « À la une » (bug D3).

**Après** — **≈ 138 mots, 5 blocs** :

```ts
blocks: [
  {
    type: "paragraphe",
    text: "On pourrait poser la France **quatre fois** dans le seul Sahara algérien. Avec **2,38 millions de km²**, l'Algérie est le plus grand pays d'Afrique — et le désert en occupe plus de **80 %**.",
  },
  {
    type: "chiffreCle",
    valeur: "2,38 M km²",
    legende: "le plus vaste pays du continent africain",
  },
  {
    type: "paragraphe",
    text: "Presque toute la population vit sur une mince bande au nord. Deux chaînes de l'**Atlas** — le tellien près de la côte, le saharien plus au sud — séparent le littoral fertile du désert. Entre les deux s'étendent les **Hauts Plateaux**, une steppe à moutons.",
  },
  {
    type: "aRetenir",
    points: [
      "Plus grand pays d'Afrique : **2,38 millions de km²**",
      "**80 %** du territoire est saharien",
      "Deux Atlas : le tellien (côte) et le saharien (sud)",
    ],
  },
  {
    type: "leSavaisTu",
    text: "Le massif du **Hoggar**, en plein Sahara, est un ancien volcan. Le mont Tahat y culmine à **2 900 m** — il y neige parfois, en plein désert.",
  },
]
```

**Ce qui a été retiré, et où c'est allé** : les 58 wilayas → `explanation` de quiz. Oran,
Constantine, Annaba → supprimés (la leçon 2 traite déjà de l'urbanisation). Ergs, regs, Touat,
Ouargla, oueds → supprimés. Le Hoggar et le Tahat, noyés en fin de rubrique 2, deviennent le
« Le savais-tu ? » — ils sont passés de détail à point culminant de la leçon.

### A.3 Ce que ces deux exemples démontrent

| | Avant | Après |
|---|---|---|
| Mots (Histoire) | 175 | ≈ 135 |
| Mots (Géographie) | 290 | ≈ 138 |
| Blocs visuels | 0 | 3 par leçon |
| Passages en gras | 0 (impossible) | 5-6 |
| Écrans de défilement | 2 à 4 | ≈ 1 |
| Marqueurs `####` affichés | oui (bug D3) | non |

---

## Annexe B — Questions ouvertes

Ces points ne bloquent pas le démarrage de l'étape 0, mais doivent être tranchés avant l'étape 5.

**Q1 — Les fichiers `docs/contenu histoire/*.md` et `docs/contenu geographie/*.md` sont-ils
maintenus ?**
Ils ont servi de brouillon de rédaction, puis ont été intégrés en TypeScript via les
`PROMPT-INTEGRATION-*.md`. Maintenir deux copies de 524 leçons à travers une réécriture complète
garantit une divergence. **Recommandation : acter que `src/data/courses/*.ts` devient la source
unique**, et archiver `docs/contenu */` en le signalant explicitement comme historique. Le
validateur, lui, ne lit que le TypeScript — c'est déjà la source de vérité de fait.

**Q2 — Faut-il un bloc `image` ? — TRANCHÉE le 28/07/2026.**
Oui, déclaré dès maintenant, aucune image produite. Voir § 4.8 pour le schéma, le rendu, le budget
réduit, l'ordre de production et la décision de sources mixtes pour Personnalités.

**Q3 — Le « Le savais-tu ? » doit-il être escamotable ?**
Aujourd'hui prévu déplié. S'il compte dans le budget de mots mais qu'il est replié par défaut, la
leçon visible descend à ~110 mots et l'utilisateur choisit d'en savoir plus. Risque : un bloc
replié est un bloc non lu, et c'est précisément celui qui donne envie de continuer.
**Recommandation : déplié**, décision à réévaluer après le pilote.

**Q4 — Les données datées des fiches Géographie.**
« Chef de l'État (2026) : … » sera faux dans deux ans, sur 54 fiches. Le bloc `reperes` localise
le problème sans le résoudre. Options : retirer les chefs d'État des `reperes` (le régime et la
capitale, eux, ne bougent pas), ou assumer une revue annuelle. À trancher lors de la passe
Géographie.

**Q5 — Exception de ton pour les sujets graves.**
Traite négrière, apartheid, génocide des Tutsi, colonisation. Le pilote inclut le cours 24
précisément pour éprouver ce point. Si la charte doit prévoir une exception (pas de « Le savais-tu
? », accroche par le fait et non par la surprise), elle sera écrite après la revue du pilote.

---

## Annexe C — Journal des décisions

| # | Décision | Alternative écartée | Raison |
|---|---|---|---|
| J1 | Blocs typés (`LessonBlock[]`) | Mini-markdown dans une `string` | Le validateur peut contrôler un type, pas une convention de rédaction (§ 3.2) |
| J2 | Aucun format transitoire : conversion mécanique de tout le catalogue **avant** la bascule du type | Coexistence `content?` / `blocks?` pendant la migration | Un champ déprécié « à retirer plus tard » n'est jamais retiré. La conversion de masse est acceptable parce qu'elle est vérifiable automatiquement (§ 11.3) |
| J3 | 90-140 mots, **nombre de leçons inchangé** | Découper les leçons pour tenir le budget | Découper ne réduit pas le volume total, et forcerait un 3ᵉ recalibrage de `LEVEL_TIERS` (§ 6.2) |
| J4 | `SwipeCard.content` migre aussi en blocs | Extraire du texte brut pour le fil Home | Le fil Home est l'écran le plus vu ; y laisser un rendu dégradé annule l'essentiel du gain (§ 10.1) |
| J5 | Titres de rubrique fusionnés en amorce grasse à la conversion | Les supprimer, ou créer un bloc `section` transitoire | Aucune perte d'information, aucun bloc à inventer puis à retirer (§ 11.3) |
| J6 | Activation du validateur par liste d'inclusion `CHARTE_APPLIQUEE` | Marqueur de version dans chaque leçon | Pas de champ parasite dans les données ; une constante explicite, extensible d'une matière à la fois (§ 9.1) |
| J7 | Quiz maintenus à 5 questions | Ajouter des questions pour absorber le contenu coupé | Changer `total` rendrait les `QuizResult` déjà persistés incomparables (§ 8) |
| J8 | Pas de détection automatique des accroches plates | Règle de validateur par expression régulière | Trop de faux positifs ; une règle qu'on apprend à contourner ne protège rien (§ 9.2) |
| J9 | Le pilote inclut un sujet grave (traite négrière) | Piloter sur 5 cours « faciles » | Une charte qui prescrit la surprise doit être éprouvée là où elle risque d'être déplacée (§ 11.5) |
| J10 | `ImageBlock` déclaré maintenant, aucune image produite | L'ajouter le jour où les images existent | Décision asymétrique : 10 lignes de type aujourd'hui contre une seconde migration sur 524 leçons plus tard (§ 4.8) |
| J11 | Sources d'images mixtes pour Personnalités : illustration pour les figures anciennes, archive pour le XXᵉ siècle | Tout illustrer, ou tout photographier | Illustrer une figure dont la photo existe serait une falsification douce. Réserve assumée : deux esthétiques à rapprocher par le traitement (§ 4.8) |
| J12 | `frise.unite` ajouté au schéma | Répéter « av. J.-C. » dans chaque pastille | Débordement à 360 px et jusqu'à 10 mots de budget gaspillés. Découvert en maquettant, pas en spécifiant (§ 4.6) |
| J13 | L'Histoire saute la conversion mécanique | Convertir les 524 leçons uniformément | Les 200 leçons d'Histoire sont des paragraphes monolithiques : la conversion produirait un bloc que la réécriture jetterait aussitôt. Voir `docs/PROMPT-REECRITURE-HISTOIRE.md` § 1 |

---

## Références internes

- `docs/ARCHITECTURE.md` — flux de données, découpage du bundle, recalibrage de la gamification
- `docs/DESIGN-SYSTEM.md` — tokens visuels, points de rupture, contraste
- `docs/PHASE-7-CONSOLIDATION.md` — historique des chantiers 7.1 à 7.5
- `CLAUDE.md` — état du projet et conventions
