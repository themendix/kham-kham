# Prompt de réécriture — matière Géographie

**Objet** : réécrire les 162 leçons des 54 fiches-pays de Géographie au format `LessonBlock[]`,
en 7 lots régionaux.

**Comment s'en servir** : ouvrir une conversation neuve par lot, coller le bloc à partir de
[« Rôle »](#rôle) en remplaçant la liste des pays par celle du lot traité.

> **Ce prompt n'est pas une variante du prompt Histoire.** La Géographie souffre d'un autre mal et
> demande un autre style. Lire la section 2 avant tout.

---

## 1. Prérequis

| Point | État |
|---|---|
| `LessonBlock` existe, moteur de rendu en place | ✅ fait |
| Conversion mécanique des 162 leçons de Géographie | ✅ faite — chaque leçon est une suite de blocs `paragraphe`, les anciennes rubriques `#### N. Titre` étant devenues des amorces grasses (`**Situation territoriale.** L'Algérie occupe…`) |
| `CHARTE_APPLIQUEE` dans `scripts/validate-content.ts` | `["histoire"]` — **ajouter `"geo"` seulement quand les 54 fiches sont réécrites**, pas avant |

Le contenu à réécrire est dans `src/data/courses/geographie.ts`.

---

## 2. Pourquoi le style doit différer de l'Histoire

**En Histoire, la monotonie est dans la leçon** : un pavé de 175 mots sans respiration. On la casse
avec des blocs.

**En Géographie, la leçon est déjà découpée. La monotonie est entre les fiches.** Le lecteur
enchaîne l'Algérie, l'Angola, le Bénin : même squelette, même ordre, même vocabulaire — « occupe
le centre de », « est bordé par », « on distingue trois grandes zones ». Au cinquième pays, il
décroche, non parce qu'une leçon est longue, mais parce qu'il croit avoir déjà lu celle-là.

**Conséquence : appliquer un gabarit rigide à 54 fiches aggraverait le problème.** Ce qui sauve
l'Histoire — la régularité du squelette — tue la Géographie si elle se voit.

| | Histoire | Géographie |
|---|---|---|
| Nature du contenu | un récit | un état |
| Moteur d'attention | la tension narrative | le contraste et la comparaison |
| Blocs visuels naturels | `frise`, `citation` (parole attestée) | `chiffreCle`, `reperes`, `citation` (proverbe local) |
| Ennemi | le mur de texte | la répétition d'une fiche à l'autre |
| Temps | présent de narration | présent descriptif |
| Titres de leçon | propres au sujet | **propres au pays** — c'est le marqueur anti-répétition principal |

---

## 3. Les six marqueurs du style Géographie

### 3.1 Un angle unique par pays, décidé avant d'écrire

**Avant de rédiger une seule ligne, formule en une phrase ce qui distingue ce pays des 53 autres.**
Les 3 leçons servent cet angle.

| Pays | ❌ Sans angle | ✅ Avec angle |
|---|---|---|
| Algérie | « un pays d'Afrique du Nord » | un désert doté d'une côte |
| Égypte | « traversée par le Nil » | 95 % de la population sur 5 % du territoire |
| Lesotho | « un petit pays enclavé » | un royaume qui ne descend jamais sous 1 400 m |
| Gambie | « le plus petit pays continental » | un pays qui est un fleuve |
| Togo | « un pays du golfe de Guinée » | un couloir de 600 km qui traverse tous les climats |

**Annonce l'angle de chaque pays avant de rédiger ses leçons.** C'est le point de contrôle le plus
utile de ce chantier.

### 3.2 La comparaison remplace le superlatif

Un chiffre géographique isolé n'apprend rien. « 2,38 millions de km² » ne dit rien à personne ;
« quatre fois la France » se voit.

**Règle : la `legende` de tout `chiffreCle` porte une comparaison ou une conséquence, jamais une
reformulation du nombre.**

- ❌ `valeur: "2,38 M km²"`, `legende: "la superficie de l'Algérie"`
- ✅ `valeur: "2,38 M km²"`, `legende: "le plus vaste pays du continent africain"`
- ✅ `valeur: "1 400 m"`, `legende: "son point le plus bas — un record mondial"`

### 3.3 Le contraste interne comme moteur

Presque chaque pays africain porte une tension : nord/sud, côte/intérieur, désert/terres fertiles,
capitale/reste du pays, montagne/plaine. **C'est l'équivalent géographique de l'intrigue.**
Cherche-la, et fais-en l'ossature de la leçon 1.

### 3.4 Le proverbe local en bloc `citation`

C'est la signature culturelle de Sankofa — l'application existe pour « retourner chercher le savoir
du passé ».

**Règle stricte** : uniquement un proverbe **attesté** du pays ou du peuple concerné, avec son
origine dans `auteur` (« Proverbe bassotho », « Proverbe wolof », « Proverbe amharique »).

**Si aucun proverbe fiable n'est trouvé, la fiche s'en passe.** Le bloc est optionnel. **Un proverbe
inventé, approximatif ou attribué au hasard est une faute grave** : il trahit la mission de
l'application bien plus qu'il ne l'illustre. Dans le doute, on omet.

### 3.5 Le « Le savais-tu ? » devient la pièce maîtresse

En Histoire, c'est un supplément. **En Géographie, le fait surprenant est le contenu.**

Il doit être **humain et concret**, pas administratif :

- ❌ « Le pays compte 58 wilayas. »
- ✅ « Le poney du Basotho est encore un vrai moyen de transport : dans les villages de montagne, il passe là où aucune route ne monte. »
- ✅ « Depuis le centre de Lomé, on peut marcher jusqu'au Ghana. La frontière passe à quelques centaines de mètres du grand marché. »

Vise **un « Le savais-tu ? » sur les trois leçons au minimum**, idéalement deux.

### 3.6 Les titres de leçon deviennent propres au pays

« Le territoire », « Population et société », « Économie, politique et repères » sont des intitulés
administratifs — exactement ce que la charte interdit.

**La structure sous-jacente ne bouge pas** (leçon 1 = territoire, 2 = société, 3 = économie et
repères) : le lecteur doit pouvoir anticiper. **Mais la surface devient unique.** Squelette
invisible, façade singulière.

| Leçon | ❌ Générique | ✅ Propre au pays (Lesotho) | ✅ Propre au pays (Togo) |
|---|---|---|---|
| 1 | Le territoire | Le royaume dans le ciel | Un couloir de 600 kilomètres |
| 2 | Population et société | Vivre à 2 000 mètres | Quarante peuples sur un ruban |
| 3 | Économie, politique et repères | Vendre son eau au voisin | Le phosphate et le port |

6 mots maximum, concret, jamais une catégorie.

---

## 4. La règle de repli — à lire absolument

**L'angle unique favorise les pays spectaculaires.** Le Lesotho, le Cap-Vert, la RDC, la Namibie :
faciles. Le Togo, le Burkina Faso, la Guinée-Bissau, le Congo-Brazzaville, le Malawi : aucun record
mondial à dégainer.

Le réflexe paresseux est de se rabattre sur « l'un des plus grands / plus petits d'Afrique de
l'Ouest ». **C'est interdit** : c'est plat, et sur 54 fiches ça devient la répétition qu'on
cherchait à fuir.

**Quand aucun superlatif n'existe, prends dans cet ordre :**

1. **La forme du territoire** — un ruban, une île, un delta, un plateau, un couloir. Le Togo n'a
   aucun record, mais c'est un ruban de 600 km qui traverse tous les climats de la région.
2. **Le contraste interne** — le pays est-il coupé en deux par un fleuve, un climat, une montagne ?
3. **Un fait à échelle humaine** — à quoi ressemble une journée là-bas, ce qu'on voit depuis la
   capitale, ce qui se vend au marché.

**Une fiche sans angle est une fiche ratée.** Si tu n'en trouves pas, dis-le plutôt que de livrer du
générique.

---

## 5. Les règles communes à toute la charte

Elles ne changent pas. Rappel condensé — le détail est dans `docs/CHARTE-LECONS.md`.

### 5.1 Le budget

**90 à 140 mots par leçon, tout compris** — prose, puces, légendes, « le savais-tu ». Il reste
**70 à 100 mots de prose réelle**.

Les fiches actuelles font **280 à 300 mots**. **Tu ne redistribues pas : tu supprimes plus de la
moitié.** C'est la contrainte la plus difficile de ce travail.

**Le nombre de leçons ne change jamais : 3.**

### 5.2 Le squelette

```
1. paragraphe          ← ACCROCHE            obligatoire
2. bloc visuel         ← chiffreCle | reperes | citation
3. paragraphe          ← DÉVELOPPEMENT       obligatoire
4. aRetenir            ← ANCRE               obligatoire, exactement un
5. leSavaisTu          ← SURPRISE            optionnel, toujours en dernier
```

4 à 7 blocs. **Jamais deux paragraphes consécutifs.**

### 5.3 L'accroche

Deux phrases maximum, 30 à 45 mots. **Interdit** : l'ouverture par définition plate (« Le Lesotho
est un petit pays enclavé d'Afrique australe »). **Obligatoire** : un chiffre qui surprend, un
paradoxe, une image concrète ou une question.

### 5.4 Le gras

`**ainsi**`, autorisé dans `paragraphe.text`, `aRetenir.points[]` et `leSavaisTu.text` uniquement.

Réservé aux : dates, chiffres porteurs de sens, noms propres majeurs, concepts nommés. Jamais plus
de 4 mots consécutifs, jamais un adverbe d'insistance, jamais un nom déjà mis en gras plus haut
(sauf dans l'« à retenir », qui se lit isolément).

| Bloc | Passages en gras |
|---|---|
| `paragraphe` | 2 à 5 au total sur la leçon |
| `aRetenir` | 1 au maximum **par puce** |
| `leSavaisTu` | 2 au maximum |
| `chiffreCle`, `citation`, `reperes` | 0 — interdit |

### 5.5 Le ton

- **Présent descriptif**, phrases de 25 mots maximum, une idée par phrase.
- **Tutoiement** dans l'accroche et le « le savais-tu ? » seulement.
- **Bannis** : « occupe le centre de », « est bordé par », « se caractérise par », « on distingue
  trois grandes zones », « il convient de noter », « par ailleurs », « notamment » en tête de
  phrase.
- **Concret plutôt qu'abstrait.** « Le Sahara est très vaste » n'apprend rien.

---

## 6. Le gabarit Géographie

| Leçon | Contenu | Bloc visuel imposé |
|---|---|---|
| 1 — le territoire | relief, climat, forme du pays, contraste interne | `chiffreCle` |
| 2 — population et société | peuples, langues, religions, urbanisation | `chiffreCle` **ou** `citation` (proverbe) |
| 3 — économie et repères | ressources, économie, institutions, singularités | **`reperes` obligatoire** |

### Le bloc `reperes` de la leçon 3

Il absorbe toute la prose « carte d'identité » aujourd'hui noyée dans le paragraphe *Institutions
et politique*. **4 entrées, toujours les mêmes :**

```ts
{
  type: "reperes",
  items: [
    { label: "Capitale", valeur: "Alger" },
    { label: "Monnaie", valeur: "Dinar (DZD)" },
    { label: "Régime", valeur: "République" },
    { label: "Indépendance", valeur: "5 juillet 1962" },
  ],
}
```

**Le nom du chef de l'État est supprimé de toutes les fiches.** Les mentions actuelles du type
« Chef de l'État (2026) : … » seront fausses dans deux ans sur 54 fiches. Une application de
culture générale n'est pas un annuaire politique. Capitale, monnaie, régime et date
d'indépendance sont stables : eux restent.

---

## 7. Ce qui ne change jamais

| Champ | Règle |
|---|---|
| `course.id`, `categoryId`, `emoji`, `title`, `xp` | **inchangés** — `title` est le nom du pays |
| `course.description` | **inchangée** (texte de vitrine, hors périmètre) |
| **`lesson.id`** | **strictement inchangé** — clé `${courseId}:${lessonId}` déjà dans le `localStorage` des utilisateurs. La modifier leur ferait perdre leur progression |
| Nombre de leçons | **3** |
| `quiz[].id`, `question`, `options`, `correctIndex` | **inchangés** |
| `quiz[].explanation` | **à enrichir** |
| `lesson.title` | **à réécrire** (§ 3.6) |

### Le contenu supprimé

Tu vas retirer plus de la moitié du texte. Ordre de recyclage **imposé** :

1. **Enrichir les `explanation` du quiz** — c'est lu au moment où l'utilisateur découvre s'il avait
   juste ou faux, le moment de rétention maximale de l'application.
2. **Alimenter le `leSavaisTu`.**
3. **Supprimer**, sans regret : les listes de wilayas, les villes secondaires, les ergs et les regs.

**Un lot dont aucune `explanation` n'a bougé est un lot raté.**

### Exactitude

Tu réécris, tu ne réinventes pas. Chaque fait vient du contenu existant. Si une reformulation te
fait douter, garde la formulation d'origine. Pour les proverbes, voir § 3.4 — dans le doute, on
omet.

---

## 8. Découpage en lots

Regroupement **régional** : réécrire ensemble des pays voisins est le seul moyen de voir les
répétitions entre eux. Sans ça, « l'un des plus grands producteurs de cacao de la région » revient
trois fois dans le même lot.

| Lot | Région | Pays (numéros de `geographie.ts`) |
|---|---|---|
| **1** | **PILOTE** — Afrique du Nord + 2 cas difficiles | `01` Algérie · `02` Égypte · `03` Libye · `04` Maroc · `05` Mauritanie · `06` Soudan · `07` Tunisie · **`22` Togo** · **`26` Congo-Brazzaville** |
| 2 | Afrique de l'Ouest, façade atlantique | `08` Bénin · `09` Burkina Faso · `10` Cap-Vert · `11` Côte d'Ivoire · `12` Gambie · `13` Ghana · `14` Guinée · `15` Guinée-Bissau |
| 3 | Afrique de l'Ouest, Sahel et golfe | `16` Liberia · `17` Mali · `18` Niger · `19` Nigeria · `20` Sénégal · `21` Sierra Leone |
| 4 | Afrique centrale | `23` Angola · `24` Cameroun · `25` Centrafrique · `27` RD Congo · `28` Gabon · `29` Guinée équatoriale · `30` Sao Tomé-et-Principe · `31` Tchad |
| 5 | Afrique de l'Est I | `32` Burundi · `33` Comores · `34` Djibouti · `35` Érythrée · `36` Éthiopie · `37` Kenya · `38` Madagascar |
| 6 | Afrique de l'Est II | `39` Maurice · `40` Ouganda · `41` Rwanda · `42` Seychelles · `43` Somalie · `44` Soudan du Sud · `45` Tanzanie |
| 7 | Afrique australe | `46` Afrique du Sud · `47` Botswana · `48` Eswatini · `49` Lesotho · `50` Malawi · `51` Mozambique · `52` Namibie · `53` Zambie · `54` Zimbabwe |

Les 54 fiches sont couvertes une fois et une seule.

### Pourquoi le Togo et le Congo-Brazzaville sont dans le lot pilote

Ce sont deux pays **sans record mondial**. Le pilote doit prouver que la règle de repli (§ 4)
produit des fiches vivantes, pas seulement que la méthode fonctionne sur le Lesotho et l'Égypte.
Si le lot 1 rend le Togo terne, c'est la règle de repli qu'il faut corriger — avant les 45 fiches
suivantes.

---

## 9. Exemples de référence

**Figés. Ils ne changent jamais d'un lot à l'autre — ce sont eux qui tiennent le ton du lot 1 au
lot 7.**

### Exemple A — un pays « facile » : Lesotho, leçon 1

```ts
{
  id: "course-geographie-49-lesotho-lesson-1",
  title: "Le royaume dans le ciel",
  blocks: [
    {
      type: "paragraphe",
      text: "Aucun point du Lesotho ne descend sous **1 400 mètres**. C'est le seul pays au monde dans ce cas — et il est entièrement encerclé par un unique voisin, l'Afrique du Sud.",
    },
    {
      type: "chiffreCle",
      valeur: "1 400 m",
      legende: "son point le plus bas — un record mondial",
    },
    {
      type: "paragraphe",
      text: "Les monts **Maloti** structurent tout : le climat, les routes, la vie. Il y neige en hiver. Cette altitude, longtemps un handicap, est devenue une ressource — l'eau descend vers l'Afrique du Sud et se vend.",
    },
    {
      type: "aRetenir",
      points: [
        "Enclavé dans un seul pays : l'**Afrique du Sud**",
        "Aucun point sous **1 400 m**, unique au monde",
        "L'eau des montagnes est sa principale exportation",
      ],
    },
    {
      type: "leSavaisTu",
      text: "Le poney du Basotho est encore un vrai moyen de transport : dans les villages de montagne, il passe là où aucune route ne monte.",
    },
  ],
}
```

**125 mots.** Angle : l'altitude. Contraste interne : le handicap devenu ressource. « Le savais-tu »
humain et concret.

### Exemple B — un pays « difficile » : Togo, leçon 1

Aucun record mondial. L'angle vient de la **forme du territoire** (règle de repli n° 1).

```ts
{
  id: "course-geographie-22-togo-lesson-1",
  title: "Un couloir de 600 kilomètres",
  blocks: [
    {
      type: "paragraphe",
      text: "Le Togo fait **600 km** du nord au sud et parfois moins de **100 km** de large. Un couloir étroit qui traverse, en une journée de route, presque tous les paysages de l'Afrique de l'Ouest.",
    },
    {
      type: "chiffreCle",
      valeur: "600 × 100 km",
      legende: "de la lagune au sud à la savane au nord",
    },
    {
      type: "paragraphe",
      text: "Au sud, cocotiers et lagunes ; au centre, les monts du **Togo** couverts de forêt ; au nord, la savane sèche. La capitale, **Lomé**, est posée à l'extrême sud-ouest, contre la frontière ghanéenne.",
    },
    {
      type: "aRetenir",
      points: [
        "Un ruban de **600 km** du nord au sud",
        "Trois milieux enchaînés : lagune, montagne, savane",
        "Lomé, capitale posée sur la frontière ghanéenne",
      ],
    },
    {
      type: "leSavaisTu",
      text: "Depuis le centre de Lomé, on peut marcher jusqu'au Ghana. La frontière passe à quelques centaines de mètres du grand marché.",
    },
  ],
}
```

**128 mots.** Aucun superlatif. L'angle est la forme ; le « le savais-tu » est une image que le
lecteur peut se représenter.

### Contre-exemple — ce qu'il ne faut pas produire

> ❌ « Le Togo est un pays d'Afrique de l'Ouest bordé au sud par le golfe de Guinée. Il est
> frontalier du Ghana à l'ouest, du Bénin à l'est et du Burkina Faso au nord. On distingue
> plusieurs grandes zones de relief, des plaines côtières au sud aux savanes du nord. »

C'est exact, c'est sourcé, et c'est mort. Aucun angle, aucune image, aucune raison de lire la
suite.

---

## 10. Format de sortie

TypeScript complet de chaque fiche, prêt à remplacer l'objet existant dans
`src/data/courses/geographie.ts`.

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

Limites contrôlées par `npm run validate` :

| Champ | Limite |
|---|---|
| `paragraphe.text` | 50 mots |
| `aRetenir.points` | 2 à 3 puces, 14 mots par puce |
| `leSavaisTu.text` | 35 mots |
| `chiffreCle.valeur` | 15 caractères |
| `chiffreCle.legende` | 10 mots |
| `citation.texte` | 25 mots |
| `reperes.items` | 2 à 6 |

`frise` et `image` **ne sont pas utilisés en Géographie** : la frise appartient au récit
historique, l'image relève d'un chantier ultérieur.

### La procédure, pays par pays

1. **Annonce l'angle** du pays en une phrase.
2. Rends les 3 leçons réécrites + les `explanation` enrichies.
3. Donne **le compte de mots des 3 leçons**.
4. **Marque une pause** et attends la validation avant le pays suivant.

---

## 11. Fin de lot

1. `npm run validate` — vert.
2. `npm test` — vert.
3. `npm run typecheck` et `npm run build` — verts.
4. **Revue visuelle d'une fiche tirée au hasard** dans le lot, dans l'application.
5. Commit thématique + une ligne au journal de réécriture.

### La revue de répétition — propre à la Géographie

En fin de lot, **relis les accroches des 6 à 9 fiches du lot à la suite.** Si deux d'entre elles se
ressemblent — même tournure, même type de chiffre, même image —, l'une des deux est à refaire.
C'est le contrôle qui n'existe pas en Histoire et qui compte le plus ici.

### La leçon-étalon

En ouverture de chaque lot, relire les exemples A et B du § 9. L'exemple B surtout : c'est lui qui
tient la qualité des fiches sans record.

### En fin de matière

- Relire **8 fiches tirées au hasard sur les 54**, pas sur le dernier lot.
- Ajouter `"geo"` à `CHARTE_APPLIQUEE` dans `scripts/validate-content.ts`.
- Vérifier qu'aucune fiche ne mentionne plus de chef d'État.

---

## Références

- `docs/CHARTE-LECONS.md` — la référence complète
- `docs/PROMPT-REECRITURE-HISTOIRE.md` — le prompt jumeau, style narratif
- `src/data/courses/geographie.ts` — le contenu à réécrire
- `src/lib/geographieRegions.ts` — le découpage régional utilisé par l'application
