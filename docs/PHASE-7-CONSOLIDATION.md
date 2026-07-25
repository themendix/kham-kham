# Phase 7 — Consolidation

**Statut :** proposé, non démarré
**Date de rédaction :** 25 juillet 2026
**Périmètre :** dette technique, cohérence contenu ↔ règles du jeu, industrialisation, documentation
**Prérequis :** phases 1 à 6 livrées + enrichissement Histoire (40 cours) et Géographie (54 fiches)

---

## 0. Pourquoi cette phase

Les phases 1 à 6 ont construit un produit cohérent **pour un catalogue de 6 cours**. L'enrichissement éditorial qui a suivi (Histoire 40 cours, Géographie 54 fiches, soit **94 cours** au total) a multiplié le volume par ~15 **sans que les règles du jeu, les écrans de liste, ni la documentation ne soient révisés**.

Le projet est donc dans un état classique en fin de sprint de contenu : le contenu est riche, mais l'enveloppe applicative est calibrée pour l'ancien volume. Trois conséquences mesurables :

1. des **bugs fonctionnels** introduits par le remplacement du contenu Géographie (référence orpheline dans les parcours) ;
2. une **gamification qui sature** après ~10 % du catalogue, donc un produit qui cesse de motiver précisément quand le contenu devient intéressant ;
3. une **absence totale de filet** (aucun test, aucune validation d'intégrité, aucune CI) alors que la surface de contenu est désormais trop large pour une relecture manuelle.

La Phase 7 ne produit **aucun nouveau contenu éditorial** et **aucune nouvelle fonctionnalité**. Elle remet l'application au niveau de son catalogue. Elle doit être terminée avant toute Phase 8.

**Principe directeur :** on ne construit pas d'étage supplémentaire tant que les fondations ne supportent pas la charge actuelle.

---

## 1. Diagnostic — état constaté au 25/07/2026

Chaque constat ci-dessous a été vérifié dans le dépôt. Les références de fichiers sont exactes à la date de rédaction.

### 1.1 Niveau critique — anomalies fonctionnelles

| Réf | Constat | Fichier | Impact utilisateur |
|---|---|---|---|
| **C1** | `PARCOURS[2].courseIds` contient `course-geo-grand-continent`, cours **supprimé** lors du passage de la Géographie aux 54 pays. | `src/data/parcours.ts` | La collection « L'Afrique d'aujourd'hui et de toujours » affiche `0/2 cours` mais ne liste qu'un seul cours dépliable. Elle est **définitivement incomplétable**. |
| **C2** | `CollectionsScreen` filtre les cours introuvables (`.filter((c): c is Course => c !== undefined)`) sans jamais signaler l'anomalie. | `src/routes/CollectionsScreen.tsx` | L'erreur C1 est **masquée** : aucun symptôme visible en développement, aucune erreur console. C'est le mécanisme qui a permis à C1 de passer. |
| **C3** | `Parcours.xpReward` est **affiché** (`Badge` « ＋140 XP » dans `ParcoursCard`) mais **aucun code ne le crédite**. Aucune détection de complétion de parcours n'existe dans le store. | `src/components/features/ParcoursCard.tsx`, `src/store/useAppStore.ts` | Promesse non tenue : l'utilisateur termine les deux cours d'un parcours et ne reçoit rien. |
| **C4** | `CourseDetailScreen` initialise systématiquement `lessonIndex` à `0`, alors que `progress.completedLessonIds` contient l'information exacte de la dernière leçon lue. | `src/routes/CourseDetailScreen.tsx` | Sur les cours d'Histoire (5 leçons), l'utilisateur qui revient reprend au début et doit repaginer manuellement. |

### 1.2 Niveau élevé — désalignement contenu ↔ règles du jeu

Toutes les constantes de gamification ont été calibrées pour 6 cours. Elles n'ont pas été révisées.

| Réf | Constante | Valeur | Catalogue réel | Effet |
|---|---|---|---|---|
| **E1** | `LEVEL_TIERS` — dernier palier | `1 000 XP` → « Gardien du savoir » | ≈ **7 000 XP** disponibles (94 cours × ~70 XP + leçons × 10 XP) | Le rang maximal est atteint après ~14 % du catalogue. Passé ce point, **la progression n'affiche plus rien**. La boucle de motivation meurt au moment où le contenu devient dense. |
| **E2** | `MASTERY_PER_COURSE = 60`, `MASTERY_PER_CARD = 45`, plafond 100 | 2 cours suffisent à saturer une matière | 40 cours en Histoire, 54 en Géographie | Le radar de maîtrise du Profil affiche « Histoire 100 % » après **2 cours sur 40**. **L'indicateur est faux.** |
| **E3** | `CARDS` — fil Home | **18 cartes** (3 par catégorie) | 94 cours | Le fil est épuisé en une session ; l'écran de fin devient permanent. Le module central de la Home est mort après ~15 minutes d'usage. |

**Déséquilibre du catalogue (E4).** Répartition constatée :

| Matière | Cours |
|---|---|
| Géographie (`geo`) | 54 |
| Histoire (`histoire`) | 40 |
| Personnalités (`perso`) | **1** |
| Arts & Musique (`arts`) | **1** |
| Traditions & Sociétés (`trad`) | **1** |
| Afrique contemporaine (`actu`) | **1** |

Deux mécanismes en dépendent et se dégradent :

- **« À la une » (rotation inter-matières)** — `pickNextFeaturedLesson` tire une matière ayant encore ≥ 1 leçon non lue. Les 4 petites matières s'épuisent en une leçon chacune, puis la rotation se réduit mécaniquement à Histoire ↔ Géographie. La promesse de variété inter-matières ne tient que quelques minutes.
- **Recommandations** (`src/lib/recommendations.ts`) — le bonus « découverte » pousse vers les matières jamais touchées ; ces matières n'ayant qu'un cours, la recommandation devient répétitive et sans valeur.

**Incohérence de format (E5).** Une fiche Géographie = **1 leçon** (7 rubriques) + quiz de 5 questions. Un cours Histoire = **5 leçons** + quiz de 5 questions. Deux objets typés identiquement `Course`, valorisés très différemment (10 XP de leçons contre 50), sans que la règle soit ni documentée ni compensée dans le barème.

### 1.3 Niveau élevé — absence de filet de sécurité

| Réf | Constat | Conséquence |
|---|---|---|
| **F1** | **Aucune validation d'intégrité du contenu.** Rien ne vérifie : unicité des IDs de cours, résolution des `courseIds` de parcours, présence d'une illustration par cours, `correctIndex` dans les bornes de `options`, nombre d'options constant, non-vacuité des textes. | C'est exactement le trou par lequel **C1** est passé. Avec 94 cours et ~470 questions de quiz, la relecture manuelle n'est plus une méthode viable. |
| **F2** | **Aucun test.** Aucun runner installé (`package.json` : ni Vitest, ni Jest). | Le point le plus dangereux : les **migrations du store v1 → v5 n'ont jamais été exécutées contre un blob réel**. Une migration défaillante efface la progression d'un utilisateur existant, sans recours (pas de back-end, pas de sauvegarde). |
| **F3** | **Pas d'ESLint / Prettier / CI.** | Aucune barrière automatique. `npm run build` n'est lancé qu'à la main. |
| **F4** | **Git : 2 commits, et travail non sauvegardé.** À la date de rédaction : 7 fichiers modifiés non commités + `src/assets/cours/geographie/` (54 images, ~3,5 Mo) et 2 documents en `untracked`. | Une panne disque = perte de l'intégralité du lot Géographie. |
| **F5** | **Aucun déploiement.** Aucune configuration Vercel / Netlify / GitHub Pages, aucun `base` dans `vite.config.ts`. | Le projet n'est **visible par personne**. Pour un projet destiné au portfolio, c'est le point de non-valorisation le plus coûteux : le travail existe mais ne peut pas être montré. |

### 1.4 Niveau moyen — passage à l'échelle de l'interface

| Réf | Constat | Fichier |
|---|---|---|
| **M1** | `CategoryScreen` rend **les 54 cours de Géographie d'un seul bloc** : pas de pagination, pas de virtualisation, pas de tri alphabétique, pas de sous-groupement (par région, par exemple) alors que le contenu s'y prête. Le filtre par statut (Tout / À faire / En cours / Terminé) existe mais ne suffit pas. | `src/routes/CategoryScreen.tsx` |
| **M2** | La recherche Biblio porte **uniquement sur `course.title`** et **ne normalise pas les accents** : « senegal » ne trouve pas « Sénégal », « egypte » ne trouve pas « Égypte ». Elle ignore `description` et le contenu des leçons. | `src/routes/BiblioScreen.tsx` |
| **M3** | Aucun accès direct « par pays » ni carte / index alphabétique pour la Géographie, alors que c'est le mode de consultation naturel d'un catalogue de 54 pays. | — |

### 1.5 Niveau moyen — performance et distribution

| Réf | Constat | Mesure |
|---|---|---|
| **P1** | **Bundle JavaScript unique**, tout le catalogue étant importé statiquement par `src/data/courses.ts`. Aucun `React.lazy`, aucun découpage par route ni par matière. | `dist/assets/index-*.js` = **641 Ko** (non compressé) |
| **P2** | **Illustrations non optimisées pour le réseau** : 94 fichiers WebP en une seule résolution, sans `srcset`, sans variantes. `loading="lazy"` est bien présent sur `CourseCard` (bon point), mais les images restent lourdes. | `src/assets/cours/` = **8 Mo** |
| **P3** | **Aucun dossier `public/`** : pas de favicon, pas de `manifest.webmanifest`, pas d'`og:image`, pas d'icônes. | — |
| **P4** | **Pas de PWA / pas de mode hors-ligne**, alors que l'application est **100 % statique** (aucun back-end, progression en `localStorage`). C'est le cas d'usage idéal du service worker, et il est presque gratuit. | — |
| **P5** | Polices Google chargées en CDN bloquant dans `index.html`. | `index.html` |

**Pourquoi P1–P5 comptent pour ce projet précisément :** la cible déclarée est le grand public africain et la diaspora, donc une part majoritaire de trafic **mobile, sur réseau contraint**. Un premier chargement de ~650 Ko de JS avant le moindre pixel utile, sans cache offline, est incompatible avec cette cible. Ce n'est pas une optimisation cosmétique, c'est une condition d'usage.

### 1.6 Niveau moyen — documentation et fiabilité éditoriale

| Réf | Constat |
|---|---|
| **D1** | `CLAUDE.md` et `docs/ARCHITECTURE.md` (139 lignes) documentent fidèlement les phases 1 à 6, mais **ne mentionnent nulle part** : les 94 cours, les fichiers `src/data/courses/histoire.ts` et `geographie.ts`, la convention de nommage image ↔ `courseId` (`src/lib/courseImages.ts`), ni la règle de cadrage `LEFT_FLAG_COURSE_IDS`. Une session qui reprend le projet demain **ne sait pas comment ajouter un cours**. |
| **D2** | Aucune **procédure d'ajout de contenu** écrite (checklist : rédiger la fiche → générer l'image → nommer le fichier → insérer dans le fichier de matière → valider → commiter). Le savoir-faire n'existe que dans l'historique des conversations. |
| **D3** | `SOURCES-histoire.md` et `SOURCES-geographie.md` existent (bon point), mais **sans date de vérification** ni traçabilité par donnée. Les valeurs volatiles (population, PIB, capitale administrative) ne sont pas datées. |
| **D4** | Aucune relecture factuelle systématique des ~470 questions de quiz. Sur une application **éducative**, une erreur factuelle est le risque de réputation principal — plus grave qu'un bug d'affichage. |

**Écart de principe.** La règle fondatrice du projet est « la documentation est aussi importante que le projet lui-même ». D1–D2 sont donc, au regard des critères du projet, aussi prioritaires que les correctifs de code.

---

## 2. Chantiers

Six chantiers, notés **7.1** à **7.6**. Chacun est autonome, livrable, et validable indépendamment.

---

### Chantier 7.1 — Sécurisation et mise en ligne

**Objectif.** Rendre le travail existant irréversiblement sauvegardé et publiquement visible. Aucune ligne de logique métier n'est touchée.

**Justification.** Traite **F4** et **F5**. Placé en premier parce que c'est le seul chantier dont l'absence peut provoquer une perte définitive de travail, et parce que la mise en ligne débloque immédiatement la valeur portfolio de tout ce qui a déjà été fait.

**Contenu.**

1. Revue puis commit du travail en cours, en commits thématiques séparés (code / assets Géographie / documents de contenu), et non en un commit monolithique.
2. Vérification de `.gitignore` : confirmer que les assets applicatifs (`src/assets/`) sont bien suivis et que seul le matériel de référence local est exclu.
3. Ajout d'un dossier `public/` : favicon, icônes 192/512, `manifest.webmanifest`, `og:image` (traite **P3**).
4. Configuration de déploiement (une plateforme à choisir : Vercel, Netlify ou GitHub Pages) — avec ajustement du `base` de `vite.config.ts` si le sous-chemin l'exige.
5. CI GitHub Actions minimale : sur chaque `push` → `npm ci` → `npm run typecheck` → `npm run build`.

**Livrables.** Dépôt propre et poussé · URL publique fonctionnelle · badge de build.

**Critères de validation.** `git status` vide · l'URL publique sert la dernière version · un push volontairement cassant fait échouer la CI.

---

### Chantier 7.2 — Intégrité du contenu et correction des anomalies

**Objectif.** Corriger C1–C4 **et** installer le mécanisme qui empêche leur réapparition.

**Justification.** Traite **C1, C2, C3, C4, F1**. Corriger C1 sans construire le validateur reviendrait à réparer la conséquence en laissant la cause : le contenu continuera de croître et une deuxième référence orpheline surviendra.

**Contenu.**

1. **Validateur de contenu** — `scripts/validate-content.ts`, exécutable via `npm run validate`, intégré au script `build`. Règles de contrôle :
   - unicité des `id` de cours sur l'ensemble du catalogue ;
   - unicité des `id` de leçon **au sein d'un cours** (l'unicité globale n'est pas requise, la clé étant `${courseId}:${lessonId}`) ;
   - tout `courseId` référencé par un parcours est résolvable ;
   - tout `categoryId` référencé existe dans `CATEGORIES` ;
   - toute question de quiz : `options.length ≥ 2`, `0 ≤ correctIndex < options.length`, `explanation` non vide ;
   - tout cours possède une illustration (avertissement, non bloquant, tant que les 4 cours hérités n'en ont pas) ;
   - aucune illustration orpheline dans `src/assets/cours/`.

   Sortie : rapport lisible, code de sortie ≠ 0 si une règle bloquante échoue.

2. **Correction de C1** — arbitrage à faire : soit recomposer le parcours autour de fiches Géographie existantes, soit le retirer. Décision à documenter.

3. **Correction de C2** — remplacer le filtrage silencieux par un comportement explicite : en développement, échec bruyant ; en production, dégradation contrôlée. Le validateur devient la vraie barrière.

4. **Correction de C3** — implémenter la complétion de parcours : détection « tous les `courseIds` du parcours sont dans `completedCourseIds` », versement idempotent de `xpReward`, mémorisation dans `UserProgress` (`completedParcoursIds`), retour visuel dédié. **Impose une migration de store (v6).**

5. **Correction de C4** — reprise de lecture : initialiser `lessonIndex` sur la première leçon non présente dans `completedLessonIds`, avec repli sur `0`. Comportement à préciser pour un cours déjà terminé (relecture depuis le début, cohérente avec le mode révision existant).

**Livrables.** `scripts/validate-content.ts` · script npm `validate` · correctifs C1–C4 · migration de store v6.

**Critères de validation.** `npm run validate` passe sur le catalogue actuel · l'introduction volontaire d'un `courseId` inexistant fait échouer le build · tous les parcours sont complétables à 100 % · l'XP de parcours est versée **une seule fois** · la reprise de lecture fonctionne sur un cours partiellement lu.

---

### Chantier 7.3 — Recalibrage de la gamification

**Objectif.** Réaligner les règles du jeu sur un catalogue de 94 cours, et rendre les indicateurs de progression **exacts**.

**Justification.** Traite **E1, E2, E3, E4, E5**. Sans ce chantier, le produit cesse de motiver après ~10 % du contenu, et le Profil affiche des chiffres faux.

**Contenu.**

1. **Barème XP et rangs (E1).** Redéfinir `LEVEL_TIERS` sur l'XP réellement disponible. Deux options à arbitrer :
   - **(a)** conserver 5 rangs, en étalant les paliers sur ~7 000 XP ;
   - **(b)** passer à une progression **ouverte** : rangs nommés jusqu'à un seuil, puis niveaux numérotés sans plafond, avec une formule de palier croissante.

   *Recommandation : (b)* — un catalogue destiné à croître ne doit pas avoir de plafond dur. À arbitrer avant implémentation, car cela change le sens de `UserProgress.rank`.

2. **Maîtrise dérivée (E2).** Supprimer l'accumulation `masteryByCategory` et **dériver** la maîtrise du réel : `cours terminés dans la matière / cours de la matière`. C'est exactement le pattern déjà appliqué avec succès dans `src/lib/subjectProgress.ts` — on l'étend au radar du Profil. Conséquence : le champ persisté devient obsolète (migration), le radar devient un indicateur juste, et `recommendations.ts` qui lit `masteryByCategory` doit être adapté.

3. **Fil Home (E3).** Deux options :
   - **(a)** enrichir `CARDS` (contenu éditorial — hors périmètre de la Phase 7) ;
   - **(b)** **générer** les cartes du fil à partir des leçons du catalogue, le fil devenant une vue sur les 94 cours au lieu d'une liste parallèle à maintenir.

   *Recommandation : (b)* — supprime une source de données à maintenir en double et rend le fil inépuisable sans effort éditorial. `CARDS` est alors conservé comme sélection éditoriale prioritaire, puis complété.

4. **Équilibre du catalogue (E4).** Ne pas produire de contenu ici, mais **rendre le déséquilibre explicite et non pénalisant** : adapter `pickNextFeaturedLesson` et `recommendCourses` pour qu'une matière épuisée soit gérée proprement, et signaler dans l'UI les matières en cours de constitution plutôt que de les recommander en boucle.

5. **Format des cours (E5).** Trancher et **documenter** : une fiche Géographie à 1 leçon est-elle un `Course` au même titre qu'un cours Histoire à 5 leçons ? Options : introduire un champ `format` sur `Course`, ou pondérer l'XP par nombre de leçons. La décision doit apparaître dans `ARCHITECTURE.md`.

**Livrables.** `gamification.ts` recalibré · maîtrise dérivée · fil Home alimenté par le catalogue · migration de store · décision de format documentée.

**Critères de validation.** Un utilisateur ayant terminé 100 % du catalogue atteint le rang maximal et pas avant · le radar affiche des pourcentages cohérents avec les cours réellement terminés · le fil Home ne s'épuise plus · aucune régression de progression sur un `localStorage` existant.

---

### Chantier 7.4 — Filet de test

**Objectif.** Couvrir la logique dont une défaillance est **irrécupérable** ou invisible.

**Justification.** Traite **F2, F3**. Le projet n'a pas besoin d'une couverture exhaustive ; il a besoin de couvrir les zones où une régression est silencieuse et destructrice. La priorité absolue est la **chaîne de migration du store** : c'est le seul endroit du code où un bug détruit des données utilisateur sans possibilité de restauration.

**Contenu.**

1. Installation de Vitest (aligné sur Vite, coût de configuration minimal).
2. **Tests de migration du store** — priorité 1 : un blob `localStorage` figé par version (v1 → v6) et l'assertion qu'après migration, aucun champ n'est perdu et les valeurs par défaut sont correctement backfillées.
3. **Tests des fonctions pures** — `gamification.ts` (paliers, streak, bascule de jour, cas limites de fuseau), `daily.ts` (déterminisme journalier, changement de date), `featured.ts` (exclusion de la matière précédente, repli quand une seule matière reste, `null` quand tout est lu), `subjectProgress.ts`, `recommendations.ts`.
4. **Tests d'idempotence du store** — `completeLesson`, `completeCourse`, la nouvelle complétion de parcours : appelés deux fois, ils ne doivent créditer qu'une fois.
5. ESLint + Prettier, et ajout de `validate` et `test` à la CI du chantier 7.1.

**Livrables.** Vitest configuré · suite de tests · ESLint/Prettier · CI complétée.

**Critères de validation.** `npm test` vert · toute migration v1→v6 préserve les données · CI bloquante en cas d'échec.

---

### Chantier 7.5 — Passage à l'échelle de l'interface et performance

**Objectif.** Rendre un catalogue de 94 cours navigable, et l'application utilisable sur réseau contraint.

**Justification.** Traite **M1, M2, M3, P1, P2, P4, P5**.

**Contenu.**

1. **Recherche (M2)** — normalisation Unicode (`NFD` + suppression des diacritiques) pour rendre la recherche insensible aux accents, et extension du champ de recherche à `description` et, si pertinent, au contenu des leçons. Correctif à fort effet, coût faible.
2. **Écran de matière (M1)** — tri alphabétique, sous-groupement par région pour la Géographie, et affichage progressif (« Voir plus ») ou virtualisation au-delà d'un seuil.
3. **Index Géographie (M3)** — un accès dédié par pays (index alphabétique, à défaut de carte), la Géographie étant la matière la plus volumineuse et la plus consultée « par entrée ».
4. **Découpage du bundle (P1)** — `React.lazy` par route, et surtout **découpage du catalogue** : les données de matière ne doivent pas être toutes chargées au premier rendu. Objectif indicatif : diviser par 3 le JS du chargement initial.
5. **Images (P2)** — variantes de résolution + `srcset`, et vérification du budget par image.
6. **PWA / hors-ligne (P4)** — service worker, mise en cache du shell applicatif et des données, installabilité. L'application étant entièrement statique, le gain est disproportionné par rapport au coût.
7. **Polices (P5)** — auto-hébergement ou chargement non bloquant.
8. **Accessibilité** — passe dédiée : contrastes de la palette néo-brutaliste, visibilité du focus clavier, alternative clavier au geste de swipe (les boutons ✗/✓ existent, reste à garantir leur accessibilité et à l'annoncer), attributs ARIA du quiz.

**Livrables.** Recherche normalisée · écrans de liste tenant la charge · bundle découpé · PWA installable · rapport Lighthouse avant/après.

**Critères de validation.** « senegal » trouve « Sénégal » · l'écran Géographie reste fluide sur mobile d'entrée de gamme · JS initial nettement réduit · l'application se charge en mode avion après première visite · Lighthouse Performance et Accessibilité ≥ 90.

---

### Chantier 7.6 — Remise à niveau documentaire

**Objectif.** Rétablir l'invariant du projet : la documentation décrit l'état réel, et permet une reprise immédiate.

**Justification.** Traite **D1, D2, D3, D4**. À faire **en dernier**, pour documenter l'état d'arrivée et non un état intermédiaire — mais à faire **impérativement dans la phase**, sans quoi la Phase 7 reproduit le défaut qu'elle corrige.

**Contenu.**

1. **`CLAUDE.md`** — section « Enrichissement du catalogue » : volumétrie par matière, emplacement des fichiers de données, convention de nommage `courseId` ↔ fichier image, règle `LEFT_FLAG_COURSE_IDS`, format Géographie (1 leçon / 7 rubriques) vs Histoire (5 leçons). Plus la section Phase 7 elle-même.
2. **`docs/ARCHITECTURE.md`** — mise à jour des flux : découpage `data/courses/*`, résolution des images (`courseImages.ts`), maîtrise dérivée, complétion de parcours, chaîne de migrations v1→v6 avec le rôle de chaque version.
3. **`docs/PROCEDURE-AJOUT-CONTENU.md`** *(nouveau)* — la checklist d'ajout d'un cours, de bout en bout : rédaction de la fiche → sources → génération et nommage de l'illustration → insertion dans le fichier de matière → `npm run validate` → `npm test` → commit. C'est le document qui transforme un savoir-faire conversationnel en procédure réutilisable.
4. **`docs/DECISIONS.md`** *(nouveau, recommandé)* — journal des décisions structurantes et de leur motif (layout web plutôt que cadre mobile, séparation contenu/progression, barème XP retenu, format des fiches Géographie). Évite la relitigation des mêmes arbitrages à chaque phase.
5. **Fiabilité éditoriale (D3, D4)** — ajouter une **date de vérification** aux fichiers `SOURCES-*`, et définir un protocole de relecture factuelle par échantillonnage des quiz (par exemple : 10 % des questions par matière, avec traçabilité de la relecture). Le protocole est défini en Phase 7 ; son exécution complète peut être étalée.

**Livrables.** `CLAUDE.md` et `ARCHITECTURE.md` à jour · `PROCEDURE-AJOUT-CONTENU.md` · `DECISIONS.md` · `SOURCES-*` datés · protocole de relecture.

**Critère de validation — test de reprise à froid.** Une session neuve, disposant uniquement du dépôt et de sa documentation, doit pouvoir ajouter un cours complet **sans poser de question**. Si elle en pose une, la documentation est incomplète.

---

## 3. Ordre d'exécution et découpage en lots

L'ordre n'est pas négociable sur les deux premiers lots : 7.1 protège l'existant, 7.2 installe la barrière sans laquelle tout ajout ultérieur recrée de la dette.

| Lot | Chantiers | Conversation dédiée | Pourquoi à ce rang |
|---|---|---|---|
| **Lot 1** | 7.1 Sécurisation et mise en ligne | oui | Risque de perte de travail = risque non réversible. La mise en ligne débloque la valeur de tout l'existant. |
| **Lot 2** | 7.2 Intégrité et anomalies | oui | Corrige les bugs visibles et installe le validateur. Prérequis de tout ajout de contenu futur. |
| **Lot 3** | 7.3 Recalibrage gamification | oui | Nécessite des arbitrages produit (barème, fil Home, format). Migration de store : doit passer après 7.4 ? Non — mais **les tests de migration de 7.4 doivent être écrits en même temps** que la migration v6. |
| **Lot 4** | 7.4 Filet de test | oui | Couvre rétroactivement 7.2 et 7.3, puis verrouille via la CI. |
| **Lot 5** | 7.5 Échelle et performance | oui | Chantier le plus large ; peut être fractionné (7.5a navigation/recherche, 7.5b performance/PWA, 7.5c accessibilité). |
| **Lot 6** | 7.6 Documentation | oui | Documente l'état d'arrivée. |

**Règle de phase (inchangée depuis la Phase 1) :** un lot n'est clos que lorsqu'il est terminé, documenté et validé. Pas de chevauchement.

**Point d'attention inter-lots.** Les chantiers 7.2 et 7.3 introduisent chacun des changements de `UserProgress` (`completedParcoursIds`, refonte de `masteryByCategory`). **Regrouper ces changements en une seule migration v6** plutôt qu'en deux migrations successives : moins de surface de bug, un seul jeu de tests de migration à écrire.

---

## 4. Arbitrages à trancher avant implémentation

Ces quatre décisions conditionnent le code et doivent être prises explicitement, pas par défaut.

| # | Décision | Options | Recommandation |
|---|---|---|---|
| **A1** | Progression fermée ou ouverte | (a) 5 rangs étalés sur ~7 000 XP · (b) rangs nommés puis niveaux numérotés sans plafond | **(b)** — le catalogue est destiné à croître ; un plafond dur devra être re-recalibré à chaque enrichissement. |
| **A2** | Fil Home | (a) enrichir `CARDS` éditorialement · (b) générer le fil depuis les leçons du catalogue | **(b)** — supprime une source de données parallèle à maintenir, rend le fil inépuisable sans coût éditorial. |
| **A3** | Parcours orphelin (C1) | (a) recomposer autour de fiches existantes · (b) retirer le parcours | **(a)** — Collections ne compte que 3 parcours ; en retirer un appauvrit un onglet déjà mince. |
| **A4** | Statut des fiches Géographie | (a) `Course` standard · (b) champ `format` distinguant fiche et cours · (c) XP pondérée par nombre de leçons | **(c)** puis **(b)** si l'UI doit les présenter différemment. |

---

## 5. Critères de sortie de la Phase 7

La phase est close lorsque **tous** les points suivants sont vérifiés :

- [ ] `git status` vide, dépôt poussé, application en ligne à une URL publique stable.
- [ ] CI verte sur `typecheck` + `validate` + `test` + `build`, et bloquante en cas d'échec.
- [ ] `npm run validate` passe ; l'injection volontaire d'une référence orpheline fait échouer le build.
- [ ] Les 3 parcours sont complétables à 100 % et versent leur XP, une seule fois.
- [ ] La reprise de lecture d'un cours fonctionne.
- [ ] Un utilisateur ayant terminé l'intégralité du catalogue atteint — et n'atteint pas avant — le rang maximal.
- [ ] Le radar de maîtrise reflète les cours réellement terminés.
- [ ] Le fil Home ne s'épuise plus.
- [ ] Les tests de migration couvrent v1 → v6 sans perte de données.
- [ ] La recherche est insensible aux accents ; l'écran Géographie reste fluide sur mobile d'entrée de gamme.
- [ ] Lighthouse Performance ≥ 90 et Accessibilité ≥ 90 ; l'application se charge hors ligne après première visite.
- [ ] `CLAUDE.md`, `ARCHITECTURE.md`, `PROCEDURE-AJOUT-CONTENU.md`, `DECISIONS.md` à jour ; `SOURCES-*` datés.
- [ ] **Test de reprise à froid réussi.**

---

## 6. Ce que la Phase 7 ne fait pas

Explicitement hors périmètre, pour éviter la dérive :

- **Aucun nouveau contenu éditorial.** L'équilibrage du catalogue (E4) est *préparé* en Phase 7 ; il est *réalisé* en Phase 8.
- **Aucune authentification, aucun back-end, aucune synchronisation multi-appareil.** L'architecture sans back-end reste un invariant du projet.
- **Aucune nouvelle animation ni micro-interaction** au-delà de ce que l'accessibilité impose.
- **Aucune refonte visuelle.** Le design system reste celui des phases 1 à 6.

---

## 7. Phase 8 pressentie (pour mémoire, non engagée)

Une fois la Phase 7 close, l'ordre naturel serait :

1. **Équilibrage éditorial** — porter Personnalités, Arts & Musique, Traditions & Sociétés et Afrique contemporaine à un volume comparable, en appliquant la procédure d'ajout formalisée en 7.6 (et validée par le script de 7.2).
2. **Collections** — enrichir l'onglet, désormais que 94 cours permettent des parcours thématiques réellement transversaux.
3. **Boucle de rétention** — révision espacée des leçons lues, notifications locales via la PWA installée en 7.5.
