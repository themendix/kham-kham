# Sources de marque — Sankofa

Ce dossier contient les **sources** de l'identité visuelle. Il n'est pas servi par l'application :
les fichiers effectivement distribués sont générés dans `public/` (voir « Chaîne de génération » ci-dessous).

## Fichier source

Source actuelle : **`logos.png`** — 174 × 175 px.

> ⚠ **Résolution insuffisante.** Cette source est une capture d'écran de faible définition, sur fond blanc.
> Les icônes 16 à 192 px sont correctes, mais `icon-512.png` et `og-image.png` sont **agrandis, donc flous**.
> Dépose une version **≥ 1024 × 1024** (ou un fichier vectoriel `.svg`) et relance `npm run icons` :
> tout sera regénéré proprement, sans autre intervention.

Sources reconnues par le script, par ordre de préférence :
`logo-sankofa.svg` → `logo-sankofa.png` → `logos.svg` → `logos.png`.
Un vecteur est toujours préférable : il reste net à toutes les tailles.

Convention : la source est la **référence**. Ne pas la retoucher une fois validée ;
toute déclinaison est **générée**, jamais modifiée à la main.

## Chaîne de génération

Commande : **`npm run icons`** (script `scripts/generate-icons.mjs`, dépendance `sharp`).

Traitement automatique appliqué à la source :

1. **rognage du fond blanc** qui entoure l'icône ;
2. **mise au carré sur le fond sombre** de l'icône — les coins arrondis blancs sont recouverts, car iOS et
   Android appliquent eux-mêmes leur propre masque d'arrondi ; fournir une icône déjà arrondie produirait
   des coins blancs disgracieux sur l'écran d'accueil ;
3. **rééchantillonnage Lanczos** vers chaque taille cible.

Fichiers produits dans `public/` :

| Fichier | Taille | Usage |
|---|---|---|
| `favicon.svg` | vectoriel | onglet navigateur (navigateurs modernes) |
| `favicon-16x16.png` | 16×16 | onglet navigateur (repli) |
| `favicon-32x32.png` | 32×32 | onglet navigateur, favoris |
| `apple-touch-icon.png` | 180×180 | écran d'accueil iOS |
| `icon-192.png` | 192×192 | PWA, écran d'accueil Android |
| `icon-512.png` | 512×512 | PWA, écran de démarrage |
| `icon-maskable-512.png` | 512×512 | Android, icône « maskable » (motif réduit à 80 % pour tenir dans la zone sûre) |
| `og-image.png` | 1200×630 | aperçu de partage (réseaux sociaux, messageries) |

Le logo est également utilisé **dans l'application**, dans le badge du `TopBar`
(`src/components/layout/TopBar.tsx`), servi depuis `/icon-192.png`.

## Décisions d'identité

- **Fond noir conservé** sur toutes les icônes système et l'image de partage : c'est ce qui reste le plus
  lisible sur un écran d'accueil de téléphone et dans un onglet. Le contraste avec l'interface crème de
  l'application est assumé.
- `theme_color` et `background_color` du `manifest.webmanifest` restent alignés sur la palette de
  l'interface, pas sur le fond de l'icône.
