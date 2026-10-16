# Contribuer à Sankofa

Le projet principal est l'application mobile Expo à la racine. L'application
React/Vite conservée dans `web/` dispose de ses propres dépendances et contrôles.
Lire le [README](README.md) et la [fiche de reprise](docs/REPRISE.md) avant de modifier
le projet. Le code et ses tests priment sur les anciens rapports.

## Principes de travail

- Préserver les changements locaux et limiter les modifications au besoin traité.
- Conserver l'alias `@/`, la séparation contenu/progression et les migrations du store.
- Ne pas transférer des composants DOM ou des dépendances web dans l'interface native.
- Pour l'UI mobile, consulter `tailwind.config.js`, `src/global.css`, les composants
  concernés et les précisions de [DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md).
- Pour les leçons et images, respecter [la charte](docs/CHARTE-LECONS.md) et
  [les règles des illustrations](docs/IMAGES-LECONS.md). Préserver sources, crédits
  et licences ; vérifier les droits avant de publier de nouveaux médias.

## Vérifier une modification

Choisir les commandes pertinentes depuis la racine :

```powershell
npm.cmd run typecheck
npm.cmd test
npm.cmd run lint
npm.cmd run verify:migration
```

Les contrôles web ont le suffixe `:web`. Le build web régénère des index : examiner
les changements produits avant de les inclure. Les exports mobiles compilent le
JavaScript et Hermes ; ils ne remplacent pas une recette sur appareil.

Le lint et le manifeste de migration ont des écarts connus, décrits dans la fiche
de reprise. Ne pas désactiver les règles ou recalculer les empreintes uniquement
pour obtenir un résultat vert.

## Ce que le dépôt partage

Versionner les sources, tests, configurations reproductibles, documents utiles et
médias applicatifs autorisés. Le `.gitignore` conserve hors du dépôt les outils
propriétaires, sessions locales, secrets, dépendances, caches, archives et photos
de travail. Les consignes locales éventuelles complètent ce document.

GitHub sauvegarde les fichiers suivis, pas la progression d'un utilisateur dans
SQLite ou dans son navigateur. Conserver une sauvegarde distincte des originaux
photo et du matériel local indispensable.
