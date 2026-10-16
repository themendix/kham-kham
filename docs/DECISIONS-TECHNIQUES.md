# Décisions techniques actuelles

Synthèse du code présent au commit `daa0086`, le 16 octobre 2026.

## Le mobile est le projet principal

La racine utilise Expo SDK 57, React 19.2.3 et React Native 0.86.3, avec Expo Router
dans `src/app/`. NativeWind 4 utilise `tailwind.config.js` et `src/global.css`.
Les polices sont embarquées et chargées par `src/app/_layout.tsx`.
L'alias `@/` reste le point d'accès aux modules de `src/`.

L'application React 18 / Vite / Tailwind v4 reste dans `web/`, avec son propre
`package.json`, son lockfile et ses scripts. Ses styles sont dans
`web/src/styles/index.css`. Les deux applications ne doivent pas être traitées
comme un seul environnement de dépendances ou de rendu.

## Contenu et progression restent séparés

Les cours, leçons, quiz et médias sont des données applicatives statiques.
Les favoris, récompenses, résultats et complétions sont des données utilisateur
gérées par le store. Un changement de contenu ne doit pas effacer la progression
ou recréditer une récompense déjà versée.

La persistance métier utilise une enveloppe version 11 ; préserver les migrations,
la déduplication et les contrôles de version. Le mobile utilise l'adaptateur
`src/platform/progressEnvironment.native.ts` basé sur `expo-sqlite/kv-store` et
les opérations sérialisées de `src/platform/serializedProgress.ts`.
Le navigateur conserve son stockage propre. Aucun transfert automatique de
progression web vers mobile ni service de synchronisation n'est établi.

## Conserver une référence du contenu repris

`reference/source-manifest.json` enregistre les empreintes du contenu d'origine.
`scripts/verify-migration.ts` vérifie leur préservation ainsi que l'existence des
images natives référencées. Les modifications éditoriales ultérieures doivent
être distinguées des pertes accidentelles et expliquées avant toute évolution
de cette référence. Les écarts actuels sont listés dans [REPRISE.md](REPRISE.md).

## Les preuves ont un périmètre

Les tests, le contrôle TypeScript, le lint, les exports et la recette sur téléphone
vérifient des choses différentes. Un export Hermes n'est pas un binaire signé ni
une validation sur appareil. Le lint mobile reste visible mais consultatif dans
`.github/workflows/ci.yml` ; cette exception ne justifie pas de désactiver ses règles.

`netlify.toml` conserve `web/` comme base de publication web. Un push peut déclencher
la CI et, si une intégration distante est active, un déploiement automatique.
L'état de cette intégration distante n'a pas été vérifié dans cette session.

## Partager le contexte utile

Les consignes génériques sont dans [CONTRIBUTING.md](../CONTRIBUTING.md).
La documentation et les références de design utiles sont suivies ; les outils
propriétaires, sessions, secrets, archives et photos de travail restent exclus.
Ces exclusions communes sont inscrites dans `.gitignore` afin de suivre le dépôt
sur un autre poste.
