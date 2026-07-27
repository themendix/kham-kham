# Prompt de chantier — Géographie : passage à 3 leçons par cours + recalibrage de la gamification

> Ce fichier est un **prompt à copier-coller** en ouverture d'une nouvelle conversation dédiée à ce
> chantier. Il est autoportant : il contient l'objectif, les règles de découpage, les chiffres de
> recalibrage déjà calculés, la procédure d'exécution par lots et les critères d'acceptation.

---

## PROMPT (à copier à partir d'ici)

Tu travailles sur **Sankofa**, l'application de culture générale africaine du dépôt `kham-kham`.
Lis `CLAUDE.md` à la racine avant toute chose : il contient le contexte projet complet, les
conventions et l'historique des phases. Lis ensuite `docs/ARCHITECTURE.md` (§ *Découpage du bundle*,
§ *Recalibrage de la gamification*) et `docs/PHASE-7-CONSOLIDATION.md`.

### Objectif du chantier

La matière **Géographie** compte 54 cours (un par pays), chacun réduit à **une seule leçon
monobloc** de 7 rubriques. C'est une anomalie de format : l'Histoire, elle, a 5 leçons par cours.
Une fiche pays passe donc directement de « À faire » à « Terminé », sans jamais connaître l'état
« En cours », et l'utilisateur avale 7 rubriques d'un bloc.

**Ce chantier découpe chaque cours de Géographie en 3 leçons** et recalibre la gamification en
conséquence. Périmètre strictement limité à la Géographie et à la gamification : ne touche pas à
l'Histoire, ni aux 4 matières émergentes, ni au contenu éditorial de la Phase 8.

### Décisions déjà arbitrées — ne les remets pas en question

1. **3 leçons, pas 5.** Le découpage en 3 donne des leçons denses sans réécriture massive du
   contenu existant, et corrige déjà le défaut « fiche monobloc ». Arbitrage produit assumé.
2. **Regroupement imposé des 7 rubriques existantes :**

   | Leçon | Titre | Rubriques sources |
   |---|---|---|
   | 1 | **Le territoire** | 1. Situation territoriale + 2. Le milieu |
   | 2 | **Population et société** | 3. Population + 4. Société |
   | 3 | **Économie, politique et repères** | 5. Économie et ressources + 6. Institutions et politique + 7. Repères et singularités |

3. **Les identifiants de leçon suivent la convention existante** :
   `course-geographie-NN-pays-lesson-1|2|3`. **Garde impérativement `-lesson-1` pour la première
   leçon** : la clé `${courseId}:${lessonId}` est déjà enregistrée dans le `localStorage` des
   utilisateurs ayant lu la fiche. La renommer effacerait silencieusement leur lecture. Les leçons
   2 et 3 sont nouvelles et apparaîtront comme non lues — c'est le comportement voulu.
4. **Aucune migration de store.** Le schéma de `UserProgress` ne change pas : la version de
   persistance **reste à 7**. N'ajoute ni champ ni étape de migration.
5. **Les quiz ne bougent pas** : 5 questions par cours, mêmes identifiants, même contenu. Idem pour
   `id`, `categoryId`, `emoji`, `description` et les illustrations des cours.

### Règle éditoriale : découper **et** équilibrer

Le simple copier-coller des rubriques produirait une leçon 3 nettement plus longue que la leçon 1.
Chaque leçon doit être **substantielle et autonome** :

- Vise **un volume comparable entre les 3 leçons** d'un même cours (repère : 4 à 6 paragraphes
  utiles chacune, pas 2 lignes).
- La leçon 2 est la plus exposée au risque de maigreur (rubriques « Population » et « Société » sont
  courtes dans plusieurs fiches) : **enrichis-la** — répartition spatiale, urbanisation, jeunesse de
  la population, langues, religions, groupes ethniques, faits sociaux marquants.
- La rubrique « Institutions et politique » est souvent réduite à deux lignes ; en leçon 3 elle est
  adossée à l'économie et aux repères, ce qui suffit à l'équilibrer — mais tu peux l'étoffer
  (nature du régime, date d'indépendance, appartenance UEMOA/CEDEAO/UA, etc.).
- **Conserve le format markdown existant** : sous-titres `#### N. Titre`, **renumérotés de 1 à n à
  l'intérieur de chaque leçon** (la leçon 2 recommence à `#### 1.`).
- Chaque `lesson.title` est le titre du tableau ci-dessus, **pas** le nom du pays (aujourd'hui les
  54 leçons s'appellent toutes « L'Algérie », « L'Égypte »… — c'était cohérent avec une leçon
  unique, ça ne l'est plus).
- Ton, registre et niveau de détail : strictement ceux des fiches actuelles. Reste factuel, vérifie
  les chiffres (population, superficie, chef de l'État) et n'invente jamais une donnée. En cas de
  doute sur une donnée récente, garde celle déjà présente dans la fiche.

### Recalibrage de la gamification — chiffres déjà calculés

La règle `course.xp = 20 (bonus quiz fixe) + 10 × nombre de leçons` s'applique mécaniquement :
**un cours de Géographie passe de 30 à 50 XP.** Il faut donc mettre à jour le champ `xp` des 54
cours de `src/data/courses/geographie.ts`.

Impact sur le catalogue :

| | Avant | Après |
|---|---|---|
| Leçons Géographie | 54 | **162** |
| Leçons du catalogue | 266 | **374** |
| XP de complétion (tous cours) | 4 440 | **5 520** |
| XP de leçons | 2 660 | **3 740** |
| **XP total du catalogue** | **7 100** | **9 260** |

`LEVEL_TIERS` (`src/lib/gamification.ts`) cale « Gardien du savoir » exactement sur 100 % du
catalogue — décision du chantier 7.3, à préserver. Sans recalibrage, le rang maximal s'atteindrait
à 77 % du contenu. **Nouveau barème, conservant les proportions du barème actuel** (9,9 % / 29,6 % /
59,9 % / 100 % du total) :

```
{ minXp:    0, level: 1, rank: "Curieux" }
{ minXp:  900, level: 2, rank: "Éveillé" }
{ minXp: 2750, level: 3, rank: "Initié" }
{ minXp: 5550, level: 4, rank: "Sage" }
{ minXp: 9260, level: 5, rank: "Gardien du savoir" }
```

Écarts entre paliers : 900 / 1 850 / 2 800 / 3 710 — croissants, comme aujourd'hui.

**`OPEN_LEVEL_STEP` passe de 700 à 900**, pour conserver le même rapport au total du catalogue
(700/7100 ≈ 900/9260) et donc le même rythme de progression au-delà du dernier rang nommé. La
formule des niveaux ouverts elle-même ne change pas.

### Conséquences assumées — à documenter, pas à « corriger »

Ne cherche pas à rattraper rétroactivement ces trois points : le store ne recalcule jamais l'XP
déjà acquise (règle du projet, cf. chantier 7.3).

1. Un utilisateur existant verra son **niveau affiché redescendre**, les seuils ayant monté.
2. Un cours de Géographie déjà terminé a crédité 30 XP, mais l'écran de matière affichera 50 XP —
   cette valeur est **dérivée** de `course.xp`. Divergence bénigne entre l'XP par matière et l'XP
   totale du Profil, déjà inhérente au design actuel.
3. Le « % de leçons lues » du Profil chutera mécaniquement (dénominateur 284 → 392, en comptant les
   18 cartes éditoriales).

### Points techniques à ne pas rater

- **`npm run gen:index` est obligatoire** après modification du catalogue. `coursesIndex.generated.ts`
  porte `lessons: {id}[]` et alimente `pickNextFeaturedLesson`, `buildHomeFeed` et le compteur du
  Profil : oublier de le régénérer désynchronise silencieusement « À la une » et le fil Home.
- **N'importe jamais `src/data/courses.ts` depuis le code applicatif** — seuls les scripts de build
  et le validateur s'en servent. Utilise `COURSE_INDEX` et `src/data/courseContent.ts`.
- Dans `src/routes/CourseDetailScreen.tsx`, le cas spécial `if (course.lessons.length === 1)
  markCourseStarted(...)` devient sans objet pour la Géographie. **Laisse-le en place** (il couvre
  d'autres cas), mais vérifie que l'état « En cours » est bien atteint sur un cours de Géographie
  au passage de la leçon 1 à la leçon 2.
- `src/lib/gamification.test.ts` code des seuils **en dur** (le `700` du calcul de seuil du niveau 6,
  et la liste `samples` contenant 699/700/2099/2100/4249/4250/7099/7100/7800). Mets-les à jour.
- Vérifie que `getMasteryByCategory`, `getSubjectProgress` et le niveau de matière (54 cours / 3 =
  18 niveaux) sont **inchangés** — ils reposent sur les cours terminés, pas sur les leçons.
- Le chunk `geographie` va grossir. Il est chargé à la demande, donc le bundle d'entrée n'est pas
  affecté : mesure-le et signale-le, ne l'optimise pas.

### Procédure d'exécution — par lots, jamais d'un bloc

`geographie.ts` fait 54 cours. Ne tente pas de le réécrire en une passe.

1. **Lot pilote** : traite les **3 premiers pays** (Algérie, Égypte, +1). Régénère l'index, lance
   `npm run validate` et `npm test`, puis **arrête-toi et présente le résultat** — format des
   leçons, équilibre des volumes, rendu. J'valide le patron avant que tu ne déroules.
2. **Lots suivants** : par tranches de 8 à 10 pays, dans l'ordre des identifiants. Après chaque
   tranche : `npm run gen:index` puis `npm run validate`. Commit thématique par tranche.
3. **Recalibrage de la gamification** : en **dernier**, une fois les 54 pays traités — pas avant,
   sinon les paliers seraient calés sur un catalogue à moitié converti. Un commit dédié.
4. **Documentation** : mets à jour `CLAUDE.md` (nouvelle section de livraison, chiffres du
   catalogue) et `docs/ARCHITECTURE.md` § *Recalibrage de la gamification* (table, nouveaux totaux,
   impact sur un utilisateur existant). C'est une exigence du projet, pas une option.

### Critères d'acceptation

- [ ] Les 54 cours de Géographie ont exactement 3 leçons, `xp: 50`, quiz inchangés.
- [ ] La leçon 1 de chaque cours conserve son identifiant `-lesson-1` d'origine.
- [ ] Volumes équilibrés entre les 3 leçons ; aucune leçon squelettique.
- [ ] `src/data/coursesIndex.generated.ts` régénéré et cohérent (374 leçons au total).
- [ ] `LEVEL_TIERS` et `OPEN_LEVEL_STEP` recalibrés ; `gamification.test.ts` à jour et vert.
- [ ] `npm run validate` propre, `npm test` vert (102 tests + éventuels ajouts), `npm run typecheck`
      et `npm run build` sans erreur.
- [ ] Vérification manuelle : ouvrir un cours de Géographie, enchaîner les 3 leçons, constater
      l'état « En cours » après la leçon 1, puis le quiz et l'écran de résultat.
- [ ] `CLAUDE.md` et `docs/ARCHITECTURE.md` à jour.
- [ ] Aucune modification du schéma de `UserProgress` ; version de persistance toujours à 7.

### Attendu de ta part

Avant d'écrire la moindre ligne, **présente-moi ton plan de chantier** : ordre des lots, découpage
des commits, points sur lesquels tu anticipes une difficulté. Signale-moi toute incohérence ou tout
oubli que tu détectes dans ce prompt — je préfère un arbitrage en amont à une correction en aval.

## FIN DU PROMPT
