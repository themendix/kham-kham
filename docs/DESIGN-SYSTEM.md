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

## Typographies

- **Titres** (`font-heading`) : Poppins, graisses 700/800.
- **Corps de texte** (`font-body`, appliqué par défaut sur `body`) : Inter.
- Chargées via Google Fonts dans `index.html`.

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
