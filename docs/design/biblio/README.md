# Référence visuelle historique — Biblio

Le [prototype HTML](Biblio%20-%20explorations.dc.html) est conservé depuis le dossier
local `design_handoff_biblio_redesign/`. Il illustre les choix de refonte du catalogue
et des écrans matière de l'ancienne application web. Ouvrir le fichier téléchargé
dans un navigateur pour consulter les variantes.

## Choix consignés dans le handoff d'origine

- Variante **1b** pour l'accueil Biblio : matières en blocs verticaux, recherche,
  leçon à la une et aperçus de cours en mosaïque.
- Variantes **2a / 2b / 2c** pour les matières Histoire, Géographie et Découverte :
  progression visible, filtres et cours disposés sur une piste sinueuse.
- Variantes **1a / 1c / 1d** exploratoires, écartées dans le handoff.
- Palette crème, contours marqués, ombres nettes et couleurs par matière.

## Utilisation actuelle

Cette référence documente une intention visuelle historique ; elle n'atteste pas
la parité de l'implémentation mobile. Le code applicatif courant reste dans
`src/screens/` pour le mobile et `web/src/routes/` pour l'ancienne application.
Les interactions HTML, filtres et indicateurs de progression du prototype sont
démonstratifs ; ils ne définissent pas les règles métier du store.

Pour une adaptation native, utiliser les composants existants et les tokens de
`tailwind.config.js`, puis vérifier sur téléphone. Consulter aussi
[DESIGN-SYSTEM.md](../../DESIGN-SYSTEM.md) pour les références de style et leur
distinction entre web et mobile.

Les ZIP et variantes TSX de travail restent dans leur dossier local d'origine ;
le prototype utile est partagé ici, hors des sources compilées.
