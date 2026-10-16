# Reprendre Sankofa

État documenté le 16 octobre 2026, à partir du commit applicatif `daa0086` et des
contrôles exécutés avant sa publication sur `main`.

## Base actuelle

- Application principale : Expo SDK 57, React 19.2.3, React Native 0.86.3,
  Expo Router et NativeWind 4, à la racine du dépôt.
- Ancienne application React 18 / Vite / Tailwind v4 conservée dans `web/`.
- Catalogue constaté par le vérificateur : 136 cours, 572 leçons et 680 questions.
- Progression locale ; aucune synchronisation automatique entre web et mobile.
- La parité complète et le rendu sur téléphone restent à vérifier. Les nouvelles
  photos et leur sélection restent en attente.

## Derniers contrôles exécutés

| Commande | Résultat avant le commit applicatif |
|---|---|
| `npm.cmd run typecheck` | Réussi |
| `npm.cmd test` | 29 fichiers, 411 tests réussis |
| `npm.cmd run lint` | Échec : 34 erreurs et 6 avertissements |
| `npm.cmd run verify:migration` | Échec : 832 empreintes conformes, 5 fichiers différents |

Les cinq écarts du manifeste concernent `src/data/courses/geographie.ts`,
`src/data/courses/histoire.ts`, `src/data/coursesIndex.generated.ts`,
`src/data/quizIndex.generated.ts` et `src/data/quizLessonMap.ts`.
Le vérificateur compare au contenu de référence du commit `90427a5` : ces écarts
doivent être examinés comme des modifications éditoriales et d'index, sans conclure
automatiquement à une perte de données. Ne pas écraser la référence pour masquer
les différences.

Le lint mobile est consultatif en CI ; le contrôle de migration reste bloquant.
Les anciens résultats de validation, d'exports ou de tests web ne constituent pas
une validation de ce commit. Aucun nouveau build ni recette sur téléphone n'a été
réalisé dans cette session de sauvegarde.

## Reprise sur un autre poste

1. Installer une version de Node compatible avec `package.json` (`>=22.13.0` ;
   la CI utilise Node 24), puis lancer `npm ci` à la racine.
2. Lancer `npm run start:clear` pour Expo, avec tunnel activé par défaut.
3. Pour l'ancienne application, lancer `npm run install:web`, puis `npm run dev:web`.
4. Relancer les contrôles adaptés à la modification envisagée et consulter
   [CONTRIBUTING.md](../CONTRIBUTING.md).

## Prochaines vérifications utiles

- Examiner les cinq différences de contenu/index et décider comment faire évoluer
  la référence de migration, en conservant la traçabilité du contenu d'origine.
- Corriger progressivement le lint mobile sans désactiver les règles.
- Vérifier sur téléphone : navigation, retour aux leçons, quiz, favoris,
  sauvegarde après fermeture, reprise après erreur et changement de jour local.
- Comparer les écrans natifs avec les références de design et vérifier lisibilité,
  petits écrans, zones sûres et réduction des animations.
- Reprendre la sélection photo avec ses crédits et licences.

Cette liste décrit le travail restant ; elle ne vaut pas validation produit ni
autorisation automatique d'une refonte ou d'un déploiement.

## Sauvegardes et limites

Les outils et historiques de session propriétaires restent locaux. Les informations
utiles au projet sont résumées ici et dans les
[décisions techniques](DECISIONS-TECHNIQUES.md).
Le [prototype Biblio](design/biblio/README.md), les chartes, les sources et les médias
applicatifs suivis sont disponibles dans Git.

Les dossiers de photos de travail, les ZIP et `backups/` nécessitent une sauvegarde
distincte. Le ZIP local de l'application web antérieure à la migration n'est pas
récupéré par un clonage. Les progressions personnelles ne sont pas sauvegardées
sur GitHub.

Lors du commit applicatif, la maintenance automatique Git a signalé une référence
locale `refs/codex/turn-diffs/checkpoints/...` invalide. Le commit et son push ont
réussi ; ce signal concerne la maintenance du dépôt local, sans diagnostic plus
large établi.
