# Design System — Sankofa

Style **néo-brutaliste** : contours noirs épais, ombres portées nettes (sans flou), coins arrondis, typographie ronde et grasse — porté par une **palette africaine** (terre, ocre, or, vert savane, indigo) sur fond crème.

Tous les tokens sont déclarés dans un unique bloc `@theme` dans [`src/styles/index.css`](../src/styles/index.css), ce qui génère automatiquement les utilitaires Tailwind correspondants.

## Couleurs de base

| Token | Valeur | Usage |
|---|---|---|
| `--color-cream` → `bg-cream` | `#F6EEDD` | Fond de l'application |
| `--color-ink` → `bg-ink` / `text-ink` / `border-ink` | `#1E1B18` | Texte, contours |
| `--color-card` → `bg-card` | `#FFFFFF` | Fond des cartes |

## Accents

| Token | Valeur | Usage |
|---|---|---|
| `--color-primary` → `bg-primary` | `#E24C2B` | CTA (terre de Sienne) |
| `--color-gold` → `bg-gold` | `#F2B705` | XP |
| `--color-flame` → `bg-flame` | `#F27405` | Streak 🔥 |
| `--color-success` → `bg-success` | `#2E8B57` | Action ✓ |
| `--color-danger` → `bg-danger` | `#E4572E` | Action ✗ |
| `--color-indigo` → `bg-indigo` | `#2D3A8C` | Accent secondaire (bannières Collections) |

## Couleurs pastel par matière

| Catégorie | Token | Valeur |
|---|---|---|
| Histoire 🏛️ | `bg-histoire` | `#F3D9A4` |
| Géographie 🗺️ | `bg-geo` | `#BFE3B0` |
| Personnalités 👤 | `bg-perso` | `#C9C3F0` |
| Arts & Musique 🎶 | `bg-arts` | `#F6C2D0` |
| Traditions & Sociétés 🪘 | `bg-trad` | `#F4C3A8` |
| Afrique contemporaine 🌍 | `bg-actu` | `#A9E0DE` |

Ce mapping catégorie → couleur est défini dans `src/data/categories.ts` (champ `color`, de type `SubjectColor`).

## Textes secondaires (contraste AA)

| Token | Valeur | Contraste (cream / blanc) | Usage |
|---|---|---|---|
| `--color-ink-muted` → `text-ink-muted` | `#5C554B` | 6.4:1 / 7.4:1 | Texte secondaire lisible (descriptions, explications) |
| `--color-ink-faint` → `text-ink-faint` | `#726A5D` | 4.6:1 / 5.3:1 | Libellés discrets, compteurs, métadonnées |
| `--color-primary-text` → `text-primary-text` | `#B53D22` | 5.0:1 / 5.8:1 | Variante texte de `--color-primary` pour petits libellés en gras (≤ 13px) |

Introduits en Phase 7 (lot 5c) : remplacent cinq gris codés en dur dans les composants
(`#8a8071`, `#9b9284`, `#5c554b`, `#6d655a`, `#7a7266`), dont deux échouaient le contraste AA
(4.5:1) — audit Lighthouse mobile. **Ne jamais coder une couleur de texte secondaire en dur dans
un composant** : passer par ces tokens (ou en ajouter un nouveau ici si aucun ne convient).
`--color-primary` reste inchangé pour tout le reste (CTA, fonds de bouton, icônes) : ces usages
n'ont besoin que d'un contraste non-texte de 3:1, déjà respecté.

## Typographies

- **Titres** (`font-heading`) : Poppins, graisses 700/800.
- **Corps de texte** (`font-body`, appliqué par défaut sur `body`) : Inter.
- Auto-hébergées (`src/assets/fonts/`, `@font-face` dans `src/styles/index.css`) depuis la Phase 7
  (lot 5b) — plus de CDN Google Fonts. Sous-ensemble latin uniquement (app 100 % française).
  `font-display: optional` : les deux polices critiques sont préchargées (`index.html`), donc
  quasi toujours prêtes à temps ; `optional` évite un repaint tardif du texte déjà affiché dans
  la police de repli (voir `docs/ARCHITECTURE.md` § Polices).

## Échelle typographique des écrans de fin de cours

Les titres de la séquence de fin de cours (`OutroLayout` et les écrans qui l'utilisent :
`LearningDoneCard`, `LevelUpCard`, `CollectionProgressCard`, `QuizOutcomeCard`) utilisent une
échelle nettement au-dessus du reste de l'application, pour marquer ces écrans plein écran
comme un moment fort plutôt qu'un titre de carte parmi d'autres :

| Usage | Classe | Taille |
|---|---|---|
| Titre d'écran d'outro | `text-[34px] md:text-[40px]` (`font-heading`, 800) | ~34 px mobile / ~40 px desktop |
| Titre de carte standard (référence) | `text-2xl` | 24 px |

## Boutons pleine largeur (`Button` `size="lg"`)

`Button` accepte une prop `size?: "md" | "lg"` (défaut `"md"`, rendu strictement inchangé).
`size="lg"` produit une pilule **pleine largeur**, plus haute (`py-4` contre `py-3`) et au
libellé plus grand (`text-base` contre `text-[15px]`) — réservée au pied de page de la séquence
de fin de cours (`OutroLayout`), où chaque écran ne porte qu'un ou deux boutons empilés plutôt
que plusieurs actions côte à côte.

## Ombres et rayons

- `shadow-card` : `6px 6px 0 0 var(--color-ink)` — ombre large, cartes principales (swipe card, cours à la une, parcours).
- `shadow-sm` : `4px 4px 0 0 var(--color-ink)` — ombre discrète, blocs secondaires (boutons, badges, cartes de cours compactes).
- Aucune ombre ne doit utiliser de flou (`blur`) : c'est la signature du style néo-brutaliste — un décalage net, pas de dégradé.
- `rounded-card` (`--radius-card: 20px`) : rayon standard des grandes cartes. Les éléments plus petits (badges, boutons) utilisent `rounded-full`.

## Règles visuelles

- **Bordures** : `border-[3px] border-ink` sur les cartes principales, `border-[2.5px] border-ink` sur les éléments secondaires (badges, tags, avatars).
- **Pas de dégradé de flou** : les illustrations utilisent des dégradés linéaires plats (`bg-gradient-to-br`) entre deux teintes d'une même couleur pastel, jamais de `blur()`.
- **Effet d'appui** : boutons et actions swipe descendent de quelques pixels et perdent leur ombre au clic (`active:translate-y-[3px] active:shadow-none`), pour un retour tactile net.
- **Emoji comme illustration** : en l'absence d'illustrations dessinées, les cartes et cours utilisent un emoji large (`text-[96px]` pour le swipe, plus petit pour les cartes compactes) sur fond dégradé pastel.
- **Focus clavier** : un style global unique (`:focus-visible`, `src/styles/index.css`) — contour de 3px `--color-primary`, décalé de 2px, jamais de flou. Ne pas ajouter de `focus:outline-none` sans fournir un remplacement visible : ce serait invisible à la navigation clavier.

## Composants UI réutilisables (`src/components/ui/`)

| Composant | Rôle |
|---|---|
| `Button` | CTA principal/secondaire/ghost, contour épais, ombre `shadow-sm` |
| `Card` | Bloc de base (fond blanc, contour, ombre `card` ou `sm`) |
| `Tag` | Badge de catégorie (variante `dark` sur illustration, `subject` en liste) |
| `Badge` | Compteur mis en avant (XP, streak…) |
| `ProgressBar` | Barre de progression à piste crème et remplissage plat |

## Composants de layout (`src/components/layout/`)

| Composant | Rôle |
|---|---|
| `AppShell` | Ossature responsive : header + sidebar/bottom-nav + colonne de contenu |
| `TopBar` | Header sticky pleine largeur : logo Sankofa + compteur de streak |
| `Sidebar` | Navigation à 4 onglets en colonne fixe, visible desktop uniquement (`md:` et +) |
| `BottomNav` | Navigation à 4 onglets fixée en bas du viewport, visible mobile uniquement (< `md`) |

## Points de rupture (breakpoints)

Le seul breakpoint structurant de la navigation est `md` (768px, celui de Tailwind par défaut) :
- **< md (mobile)** : `Sidebar` masquée, `BottomNav` visible et fixée en bas ; les listes de cours défilent horizontalement (scroll-snap).
- **≥ md (desktop)** : `Sidebar` visible en colonne fixe à gauche, `BottomNav` masquée ; les listes de cours passent en grille qui s'enroule (`flex-wrap`), les parcours en grille 2 colonnes, le Profil en 2 colonnes.

Le contenu est toujours centré dans une colonne `max-w-6xl` (header et conteneur de page), pour éviter des lignes de texte trop larges sur très grand écran.
