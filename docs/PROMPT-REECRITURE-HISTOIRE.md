# Prompt de réécriture — matière Histoire

**Objet** : réécrire les 200 leçons des 40 cours d'Histoire au format `LessonBlock[]` défini par
`docs/CHARTE-LECONS.md`, en 8 lots de 5 cours.

**Comment s'en servir** : ouvrir une conversation neuve par lot, coller le bloc
[« Prompt à copier »](#le-prompt-à-copier) ci-dessous en remplaçant la liste des cours par celle
du lot traité. Ne rien ajouter d'autre — tout le contexte nécessaire est dans le prompt.

---

## 1. Prérequis — à lire avant le premier lot

Ce prompt produit du TypeScript qui référence le type `LessonBlock`. **Il n'est exécutable
qu'après les étapes 0 à 2 du plan de migration** (`docs/CHARTE-LECONS.md` § 11) :

| Étape | Ce qu'elle fait | Statut |
|---|---|---|
| 0 | `src/lib/lessonBlocks.ts` + `src/components/features/LessonBlocks.tsx` + tests | à faire |
| 1 | Conversion mécanique **de la Géographie, des Personnalités et des matières héritées** (322 leçons) | à faire |
| 2 | Suppression de `content` du type `Lesson`, application des impacts I1 à I11 | à faire |

### Une simplification propre à l'Histoire

**Les 200 leçons d'Histoire n'ont pas besoin de la conversion mécanique.** Elles sont des
paragraphes monolithiques : la conversion produirait un unique bloc `paragraphe` que la
réécriture éditoriale jetterait aussitôt. Deux fois le travail pour rien.

Il suffit, à l'étape 2, de les convertir en une ligne (`blocks: [{ type: "paragraphe", text:
<contenu> }]`) pour que `tsc` passe, puis de les réécrire lot par lot avec ce prompt. La
conversion mécanique soignée, avec son contrôle de non-régression du texte, ne concerne que les
322 leçons des trois autres matières.

---

## 2. Découpage en lots

Regroupement **thématique**, pas numérique : réécrire ensemble des cours voisins est le seul
moyen de repérer les redites entre eux — et sur 40 cours d'histoire africaine, il y en a.

| Lot | Thème | Cours |
|---|---|---|
| **1** | **PILOTE** — Afrique ancienne + épreuve de ton | `01` Égypte antique · `02` Koush-Méroé · `03` Aksoum · `04` Carthage · `24` **Traite négrière transatlantique** |
| 2 | Empires sahéliens | `05` Ghana · `06` Soundiata · `07` Mansa Moussa · `08` Songhaï · `09` Tombouctou-Djenné |
| 3 | Sahel, Sahara, océan Indien | `10` Kanem-Bornou · `11` Cités haoussa · `21` Commerce transsaharien · `22` Islamisation · `23` Côte swahilie |
| 4 | Golfe de Guinée et Kongo | `12` Bénin et bronzes · `13` Oyo · `14` Ashanti · `15` Dahomey · `16` Kongo |
| 5 | Afrique australe et figures de résistance | `17` Grand Zimbabwe · `18` Monomotapa · `19` Grands Lacs · `39` Nzinga · `40` Chaka |
| 6 | Éthiopie et conquête coloniale | `20` Éthiopie médiévale · `25` Conférence de Berlin · `26` Résistances · `27` Adoua · `34` Gorée et Saint-Louis |
| 7 | Sénégambie | `31` Tekrour · `32` Djolof · `33` Sérère · `35` Lat Dior · `36` Cheikh Ahmadou Bamba |
| 8 | Indépendances et postérité | `28` Indépendances · `29` Panafricanisme · `30` Apartheid-Mandela · `37` Aline Sitoé Diatta · `38` Senghor |

Les 40 cours sont couverts une fois et une seule (vérifié contre `src/data/courses/histoire.ts`).

### Pourquoi la traite négrière est dans le lot pilote

La charte prescrit « la surprise », « le chiffre frappant », « le paradoxe ». Ces consignes
doivent être éprouvées sur un sujet douloureux **avant** d'être appliquées à 39 autres cours. Si
le ton prescrit s'avère déplacé, la charte doit gagner une exception explicite — mieux vaut le
découvrir au lot 1 qu'au lot 6.

---

## 3. Le prompt à copier

> Tout ce qui suit est à coller tel quel dans une conversation neuve, en remplaçant la section
> « Cours de ce lot » par les cours du lot traité.

---

### Rôle

Tu réécris le contenu éditorial de l'application Sankofa (culture générale africaine, React +
TypeScript, dépôt `kham-kham`). Tu travailles sur la matière **Histoire**.

Tu n'es pas en train de résumer un article : tu écris pour un écran de téléphone, pour quelqu'un
qui a trente secondes et qui doit retenir quelque chose.

### Contexte du problème

Les leçons actuelles sont des paragraphes monolithiques de 170 à 180 mots, sans aucune coupure,
d'un ton encyclopédique. Elles sont ressenties comme ennuyeuses et ne tiennent pas sur un écran de
téléphone. On les remplace par des **blocs typés** : prose courte, chiffres mis en scène,
encadrés mémoriels, anecdotes.

### Avant de commencer

1. Lis `docs/CHARTE-LECONS.md` en entier — c'est la référence, ce prompt en est le condensé
   opérationnel.
2. Lis les cours du lot dans `src/data/courses/histoire.ts` : titre, description, les 5 leçons,
   les 5 questions de quiz.

---

### Règle 1 — Le budget

**90 à 140 mots par leçon, tout compris.** Sont comptés : la prose, les puces de l'« à retenir »,
le « le savais-tu ? », les légendes, les textes de frise. Tout ce qui s'affiche.

Il reste donc **70 à 100 mots de prose réelle**. Face aux 175 mots actuels, **tu ne redistribues
pas : tu supprimes.** C'est la contrainte la plus difficile de ce travail, et c'est celle qui
compte le plus.

**Le nombre de leçons par cours ne change jamais : 5.** Ne jamais fusionner ni scinder une leçon.

### Règle 2 — Le squelette

Ordre imposé, 4 à 7 blocs :

```
1. paragraphe          ← ACCROCHE            obligatoire
2. bloc visuel         ← chiffreCle | citation | frise
3. paragraphe          ← DÉVELOPPEMENT       obligatoire
4. aRetenir            ← ANCRE               obligatoire, exactement un
5. leSavaisTu          ← SURPRISE            optionnel, toujours en dernier
```

**Jamais deux paragraphes consécutifs.** C'est la règle anti-monotonie centrale. Un second bloc
visuel ou un troisième paragraphe peuvent s'insérer, mais toujours séparés par autre chose.

### Règle 3 — L'accroche

C'est la phrase qui décide si la leçon est lue. **Deux phrases maximum, 30 à 45 mots.**

Interdit — l'ouverture par définition plate :

- ❌ « L'Égypte antique s'est développée au nord-est de l'Afrique, le long du Nil. »
- ❌ « Le royaume du Ghana était un État d'Afrique de l'Ouest. »
- ❌ « Soundiata Keïta est le fondateur de l'empire du Mali. »

Obligatoire — l'un des quatre leviers :

| Levier | Exemple |
|---|---|
| Le chiffre qui surprend | « On pourrait poser la France **quatre fois** dans le seul Sahara algérien. » |
| Le paradoxe | « Elle a régné vingt ans sur l'Égypte. Puis on a effacé son nom de la pierre. » |
| L'image concrète | « Chaque été, le Nil débordait et recouvrait ses rives d'un limon noir. » |
| La question | « Comment un enfant qu'on disait infirme est-il devenu le fondateur d'un empire ? » |

### Règle 4 — Le gras

Le gras s'écrit `**ainsi**` dans les champs `paragraphe.text`, `aRetenir.points[]` et
`leSavaisTu.text`. Il est **interdit** dans `chiffreCle`, `citation` et `frise`.

**Ce qui se met en gras**, et rien d'autre :

1. les dates et les périodes — `**1962**`, `**vers 3100 av. J.-C.**` ;
2. les chiffres porteurs de sens — `**80 %**`, `**2,38 millions de km²**` ;
3. les noms propres majeurs — personnes, lieux, peuples, institutions ;
4. les concepts nommés que la leçon introduit — `**Kemet**`, `**la Maât**`, `**la Négritude**`.

**Jamais** : une phrase entière, plus de 4 mots consécutifs, un adverbe d'insistance, un nom
propre déjà mis en gras plus haut dans la même leçon (sauf dans l'« à retenir », qui se lit
isolément).

**Densité, par type de bloc :**

| Bloc | Passages en gras |
|---|---|
| `paragraphe` | 2 à 5 au total, tous paragraphes de la leçon confondus |
| `aRetenir` | 1 au maximum par puce, réservé au chiffre ou à la date |
| `leSavaisTu` | 2 au maximum |
| autres | 0 — interdit |

### Règle 5 — Le ton

- **Présent de narration.** « Soundiata **rassemble** ses alliés », pas « rassembla ».
- **Phrases courtes : 25 mots maximum.** Une idée par phrase.
- **Tutoiement** dans l'accroche et le « le savais-tu ? » uniquement. Le corps reste impersonnel.
- **Bannis** : « il convient de noter », « on peut souligner », « par ailleurs », « en effet »,
  « notamment » en début de phrase, « à travers le prisme de ».
- **Concret plutôt qu'abstrait.** « Le Sahara est très vaste » n'apprend rien ; « on pourrait y
  poser la France quatre fois » se retient.
- **L'UNESCO au maximum une fois par cours.** Aujourd'hui, « l'Histoire générale de l'Afrique de
  l'UNESCO » revient dans un très grand nombre de leçons et finit par sonner comme un tic. Cite-la
  quand elle apporte quelque chose de décisif, pas en signature.

### Règle 6 — Le titre de leçon

**6 mots maximum**, concret, jamais un intitulé de rubrique administrative. Le titre peut changer
— c'est même souvent souhaitable.

> ✅ « Se faire couronner pharaon » — ❌ « Religion et organisation de l'État »

### Règle 7 — Gabarit Histoire

| Leçon | Bloc visuel imposé |
|---|---|
| 1 | `chiffreCle` (une date ou un ordre de grandeur fondateur) **ou** `frise` |
| 2 à 4 | libre parmi `citation`, `frise`, `chiffreCle` |
| 5 | `frise` de synthèse **ou** `citation` de clôture |

**Sur l'ensemble des 5 leçons d'un cours : au moins une `citation` et au moins une `frise`.**

La dernière leçon se termine par une phrase de transition vers le cours suivant — c'est l'usage
actuel, il est conservé.

### Règle 8 — Que faire du contenu supprimé

Tu vas supprimer 40 à 50 % du texte. Ce contenu n'est pas mauvais, il est au mauvais endroit.
**Ordre de recyclage imposé :**

1. **Enrichir les `explanation` des questions de quiz existantes.** C'est la première
   destination : l'explication est lue au moment exact où l'utilisateur découvre s'il avait juste
   ou faux, le moment de rétention maximale de toute l'application. Elle est aujourd'hui
   sous-exploitée.
2. **Alimenter les blocs `leSavaisTu`.**
3. **Supprimer**, sans regret.

**Un lot dont aucune `explanation` n'a bougé est un lot raté** : cela signifie que le contenu a
été jeté, pas recyclé.

### Règle 9 — Ce qui ne change jamais

| Champ | Règle |
|---|---|
| `course.id`, `categoryId`, `emoji`, `xp` | **inchangés** |
| `course.description` | **inchangée** (c'est un texte de vitrine, hors périmètre) |
| **`lesson.id`** | **strictement inchangé** — c'est la clé `${courseId}:${lessonId}` déjà enregistrée dans le `localStorage` des utilisateurs. La modifier ferait perdre leur progression |
| Nombre de leçons | **5**, jamais plus, jamais moins |
| `quiz[].id`, `question`, `options`, `correctIndex` | **inchangés** |
| `quiz[].explanation` | **à enrichir** (règle 8) |

### Règle 10 — Exactitude

Tu réécris, tu ne réinventes pas. Chaque fait, chaque date, chaque nom doit provenir du contenu
existant du cours. Si une reformulation te fait douter d'un fait, garde la formulation d'origine.

**Citations** : uniquement des paroles attestées. En cas de doute sur l'authenticité — fréquent
pour les figures anciennes — utilise un proverbe identifié par son origine (`auteur: "Proverbe
mandingue"`) ou remplace le bloc par une `frise`. **Jamais de citation inventée ou approximative.**

---

### Le format de sortie

Rends le TypeScript complet de chaque cours, prêt à remplacer l'objet existant dans
`src/data/courses/histoire.ts`. Types disponibles :

```ts
type LessonBlock =
  | { type: "paragraphe"; text: string }
  | { type: "aRetenir"; points: string[] }
  | { type: "leSavaisTu"; text: string }
  | { type: "chiffreCle"; valeur: string; legende: string }
  | { type: "citation"; texte: string; auteur: string; date?: string }
  | { type: "frise"; evenements: { date: string; texte: string }[]; unite?: string }
  | { type: "reperes"; items: { label: string; valeur: string }[] }
  | { type: "image"; alt: string; legende?: string; credit?: string };
```

Contraintes de longueur contrôlées par `npm run validate` :

| Champ | Limite |
|---|---|
| `paragraphe.text` | 50 mots |
| `aRetenir.points` | 2 à 3 puces, 14 mots par puce |
| `leSavaisTu.text` | 35 mots |
| `chiffreCle.valeur` | 15 caractères |
| `chiffreCle.legende` | 10 mots |
| `citation.texte` | 25 mots |
| `frise.evenements` | 3 à 5, 10 mots par événement |

`frise.unite` porte la mention commune aux dates (`"av. J.-C."`) pour éviter de la répéter dans
chaque pastille — les pastilles ne portent alors que le nombre.

Les blocs `reperes` et `image` existent dans le type mais **ne sont pas utilisés en Histoire** :
`reperes` est réservé aux fiches-pays de Géographie, `image` à un chantier ultérieur.

**Après chaque cours, indique le compte de mots de chacune de ses 5 leçons.** C'est le contrôle
le plus rapide, et le plus souvent violé.

---

### Exemples de référence

**Ces deux exemples sont figés. Ils ne changent jamais d'un lot à l'autre — ce sont eux qui
tiennent le ton constant du lot 1 au lot 8.**

#### Exemple 1 — `course-histoire-01-egypte-antique`, leçon 1

**Avant** (≈ 175 mots, un seul paragraphe) :

> L'Égypte antique s'est développée au nord-est de l'Afrique, le long du Nil, le fleuve qui la
> traverse du sud vers le nord. Chaque année, la crue déposait un limon noir et fertile sur ses
> rives : les Égyptiens appelaient leur pays Kemet, « la terre noire », par opposition au désert
> rouge qui l'entourait. Sans le Nil, aucune agriculture n'aurait été possible dans cette région
> aride — le fleuve était donc la source de toute vie. Dans sa Histoire générale de l'Afrique,
> l'UNESCO replace clairement l'Égypte au cœur de l'histoire africaine, dans ce qu'elle appelle le
> « corridor du Nil ». Vers 3100 av. J.-C., deux royaumes — la Haute-Égypte (au sud) et la
> Basse-Égypte (au nord, le delta) — furent unifiés en un seul État, un événement
> traditionnellement attribué au roi Narmer (souvent identifié à Ménès). Cette unification marque
> le début de près de trois mille ans d'histoire pharaonique.

**Après** (132 mots, 5 blocs) :

```ts
{
  id: "course-histoire-01-egypte-antique-lesson-1",
  title: "Une civilisation née sur le Nil",
  blocks: [
    {
      type: "paragraphe",
      text: "Chaque été, le Nil débordait et recouvrait ses rives d'un limon noir. Les Égyptiens n'appelaient pas leur pays « Égypte » : ils l'appelaient **Kemet**, « la terre noire ».",
    },
    {
      type: "chiffreCle",
      valeur: "3100 av. J.-C.",
      legende: "l'unification qui ouvre 3 000 ans d'histoire pharaonique",
    },
    {
      type: "paragraphe",
      text: "Sans cette crue, rien n'aurait poussé dans une région aride. Deux royaumes — la Haute-Égypte au sud, la Basse-Égypte au nord — sont alors unifiés, un geste attribué au roi **Narmer**. L'UNESCO replace cette civilisation au cœur de l'Afrique, dans ce qu'elle nomme le « corridor du Nil ».",
    },
    {
      type: "aRetenir",
      points: [
        "Kemet, « la terre noire », doit tout à la crue du Nil",
        "Unification vers **3100 av. J.-C.**, attribuée au roi Narmer",
        "Une civilisation africaine, en dialogue avec le continent",
      ],
    },
    {
      type: "leSavaisTu",
      text: "Le désert qui entourait Kemet, les Égyptiens l'appelaient **Deshret** — « la terre rouge ». Deux mondes que tout opposait, séparés par une berge.",
    },
  ],
}
```

**Recyclage associé** : « souvent identifié à Ménès » part dans l'`explanation` de la question de
quiz sur Narmer. « le fleuve qui la traverse du sud vers le nord » est supprimé.

#### Exemple 2 — `course-histoire-01-egypte-antique`, leçon 2 (usage de la frise)

**Après** (138 mots, 5 blocs) :

```ts
{
  id: "course-histoire-01-egypte-antique-lesson-2",
  title: "Un dieu vivant à la tête de l'État",
  blocks: [
    {
      type: "paragraphe",
      text: "Le pharaon n'est pas un roi. C'est un dieu vivant, chargé de maintenir la **Maât** — l'ordre juste du monde. Tout l'État égyptien tient sur cette idée.",
    },
    {
      type: "frise",
      unite: "av. J.-C.",
      evenements: [
        { date: "2700", texte: "Ancien Empire : l'âge des pyramides" },
        { date: "2050", texte: "Moyen Empire : la reconstruction" },
        { date: "1550", texte: "Nouvel Empire : Hatchepsout, Ramsès II" },
      ],
    },
    {
      type: "paragraphe",
      text: "Sous lui, une administration redoutable : vizirs, gouverneurs, prêtres, et surtout des **scribes** qui comptent, taxent et enregistrent tout. Mobiliser des milliers d'ouvriers pendant vingt ans pour une pyramide suppose un État d'une organisation exceptionnelle.",
    },
    {
      type: "aRetenir",
      points: [
        "Le pharaon est un dieu vivant, garant de la **Maât**",
        "Trois grands Empires sur près de 3 000 ans",
        "Les scribes sont le vrai moteur de l'État",
      ],
    },
    {
      type: "leSavaisTu",
      text: "Un texte scolaire égyptien vante le métier de scribe : le seul, dit-il, où l'on ne se salit jamais les mains.",
    },
  ],
}
```

---

### Cours de ce lot

> *Remplacer par la liste du lot traité (voir § 2 de `docs/PROMPT-REECRITURE-HISTOIRE.md`).*

- `course-histoire-01-egypte-antique`
- `course-histoire-02-koush-meroe`
- `course-histoire-03-aksoum`
- `course-histoire-04-carthage-afrique-du-nord`
- `course-histoire-24-traite-negriere-transatlantique`

Traite-les **un par un**, dans l'ordre. Après chaque cours, marque une pause : donne le compte de
mots des 5 leçons et attends la validation avant de passer au suivant.

---

## 4. Ce qu'il faut faire à la fin de chaque lot

Quatre étapes, non négociables :

1. `npm run validate` — vert (règles 10 à 18 sur la matière déclarée dans `CHARTE_APPLIQUEE`).
2. `npm test` — vert.
3. **Revue visuelle d'un cours tiré au hasard** dans le lot, dans l'application. Pas le premier,
   pas celui dont on est le plus fier : un au hasard.
4. Commit thématique, puis une ligne dans le journal de réécriture (lot, cours, date, écarts
   constatés).

### La leçon-étalon

En ouverture de chaque lot, relire l'exemple 1 ci-dessus. Trente secondes. C'est ce qui empêche
le lot 8 de sonner autrement que le lot 1.

### La revue croisée de fin de matière

Une fois les 8 lots achevés, relire **5 leçons tirées au hasard sur l'ensemble des 200**, pas sur
le dernier lot. C'est le seul moment où une dérive de ton devient visible.

---

## 5. Le sujet grave — note pour le lot 1

`course-histoire-24-traite-negriere-transatlantique` est traité dans le lot pilote pour éprouver
la charte sur un sujet douloureux.

Ce qui reste valable : le budget, le squelette, la brièveté, le gras sur les dates et les
chiffres, l'« à retenir ».

Ce qui doit être manié autrement :

- **L'accroche** passe par le fait ou par l'échelle, jamais par l'effet de surprise. Un chiffre
  sur le nombre de personnes déportées n'est pas une « anecdote qui surprend » : c'est un constat.
- **Le « le savais-tu ? »** est à omettre, sauf s'il porte une résistance, une survivance
  culturelle ou une réparation — jamais un détail pittoresque sur l'organisation de la traite.
- **Aucun superlatif, aucune dramatisation.** Les faits sont suffisants ; les commenter les
  affaiblit.

**Si ces adaptations ne suffisent pas à rendre le résultat acceptable, il faut le dire et amender
la charte** — c'est exactement ce que le lot pilote sert à découvrir. Les cours concernés au-delà
du lot 1 : `25` Berlin, `26` Résistances, `30` Apartheid-Mandela, `34` Gorée et Saint-Louis.

---

## Références

- `docs/CHARTE-LECONS.md` — la référence complète (catalogue des blocs, règles du validateur, plan de migration)
- `src/data/courses/histoire.ts` — le contenu à réécrire
- `CLAUDE.md` — état du projet et conventions
