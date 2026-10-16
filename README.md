# Sankofa — React Native / Expo SDK 57

Le projet principal est désormais l’application mobile **Expo SDK 57** dans ce
dossier `kham-kham`. React 19.2.3 et React Native 0.86.3 sont verrouillés dans les
dépendances. Ce dossier est le projet de travail principal ; l’ancienne application web est conservée dans `web/`.

## Lancer l’application mobile

```powershell
cd "C:\IA BUSSINESS AND PROJECT\kham-kham"
npm ci
npm run start:clear   # Expo démarre en mode --tunnel
```

Ouvrir le QR code avec une version d’Expo Go compatible SDK 57 ou utiliser un
development build. `npm run android` et `npm run ios` lancent Expo pour la plateforme
choisie ; `npm run web` est l’aperçu navigateur de l’application Expo.

## Organisation

- `src/app/` : routes Expo Router.
- `src/screens/`, `src/components/`, `src/native/` : interfaces et adaptations natives.
- `src/data/`, `src/assets/` : cours, leçons, quiz, illustrations et polices.
- `src/store/`, `src/platform/` : progression, migrations et persistance SQLite.
- `web/` : ancienne application React 18 / Vite, conservée avec ses dépendances.
- `reference/source-manifest.json` : empreintes des contenus web repris.
- `docs/` : documentation historique ; les descriptions React/Vite concernent `web/`.

La base mobile déjà préparée a été reprise ici, avec ses écrans et contenus.
La parité visuelle et fonctionnelle complète reste à vérifier sur téléphone.
Les versions web et mobile possèdent leur propre stockage ; la progression du
navigateur n’est pas transférée automatiquement au téléphone. Les modifications
faites dans une version ne sont pas synchronisées automatiquement avec l’autre.

## Ancienne application web

```powershell
npm run install:web   # après un nouveau clonage
npm run dev:web
npm run build:web
```

`netlify.toml` utilise `web/` comme répertoire de base pour conserver la publication
de l’application web. La préparation locale ne déclenche aucun déploiement.

## Vérifications

```powershell
npm run typecheck
npm run verify:migration
npm test
npm run lint
npm run export:android
npm run export:ios
```

Le contrôle de migration vérifie les contenus et illustrations contre leurs
empreintes de référence. Les exports compilent le JavaScript et le bytecode Hermes ;
ils ne produisent pas de binaires signés destinés aux stores.

Les composants repris comportent encore des erreurs ESLint déjà présentes dans
`sankofa-mobile`. Le lint reste exécuté et visible dans la CI en contrôle consultatif
pendant cette préparation ; les autres contrôles mobiles et web restent bloquants.

Les contrôles web restent accessibles avec `npm run lint:web`,
`npm run typecheck:web`, `npm run test:web` et `npm run validate:web`.

La sauvegarde de l’application web précédant cette réorganisation est dans
`backups/kham-kham-web-before-expo57-20261016T020554Z.zip` (archive locale ignorée par Git).
