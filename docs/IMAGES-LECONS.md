# Images des leçons — registre et procédure

Ce document fait foi sur **les photos intra-leçon** (bloc `image` de la charte, § 4.8). Il n'a
rien à voir avec les bannières de cours (`src/assets/cours/`), qui sont des illustrations
**générées par IA** via `npm run images:generate` et documentées dans
`docs/contenu <matière>/PROMPTS-IMAGES-<matière>.md`.

Ici, ce sont de **vraies photographies documentaires**, reprises de sources libres. Chaque
entrée du registre engage la conformité juridique du projet : ne jamais ajouter une image sans
remplir sa ligne.

---

## 1. Règle de licence

**Une photo d'objet ou de bâtiment est elle-même une œuvre protégée**, même quand le sujet a
sept cents ans. Un bronze du Bénin est dans le domaine public ; la photo qu'un tiers en a prise
ne l'est pas forcément.

Licences acceptées :

| Licence | Attribution | Statut |
|---|---|---|
| **CC0** / domaine public | facultative (on la met quand même) | ✅ idéal |
| **CC BY** | obligatoire | ✅ |
| **CC BY-SA** | obligatoire | ✅ (la page qui affiche l'image ne devient pas une œuvre dérivée) |
| CC BY-**NC** | — | ❌ non commercial : exclu |
| CC BY-**ND** | — | ❌ sans modification : on redimensionne, donc exclu |
| « libre de droits » sans licence nommée | — | ❌ formule commerciale, sans valeur juridique |

**Sources recommandées**, par ordre de sûreté :

1. **The Met Open Access** — CC0, ~490 000 images, très riche en arts d'Afrique.
   API : `https://collectionapi.metmuseum.org/public/collection/v1/objects/<id>` ;
   le champ `isPublicDomain: true` fait foi.
2. **Smithsonian Open Access** — CC0, inclut le National Museum of African Art.
3. **Cleveland Museum of Art**, **Rijksmuseum**, **Art Institute of Chicago** — CC0.
4. **Wikimedia Commons** — licences **mélangées, à vérifier fichier par fichier** via l'API :
   `https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url|extmetadata&titles=File:<nom>`
   Lire `LicenseShortName` et `Artist`.

> ⚠️ Le certificat TLS de l'installation Python locale est expiré : les appels réseau échouent
> depuis `urllib`. Passer par `curl`, qui fonctionne.

---

## 2. Convention de nommage

Le fichier n'est **jamais référencé dans les données**. Il est résolu par convention
(`src/lib/lessonImages.ts`), à partir de l'identifiant du porteur des blocs :

```
src/assets/lecons/<id de la leçon>.webp          ← source, ~1200 px de large
src/assets/lecons/<id de la leçon>-400w.webp     ← généré
src/assets/lecons/<id de la leçon>-800w.webp     ← généré
```

Pour une carte du fil Home, c'est l'id de la carte (`card-…`) qui sert de clé.

**Un fichier mal nommé donne une leçon sans photo, sans aucune erreur visible** — d'où
l'importance du registre ci-dessous.

Contrainte : les ids de leçon ne sont pas garantis uniques à l'échelle du catalogue (c'est
pourquoi le store utilise la clé composite `courseId:lessonId`). Ceux des leçons illustrées le
sont, car ils portent leur id de cours en préfixe. **À vérifier avant d'illustrer une leçon
héritée** (`lesson-trad-griots`, `lesson-actu-nollywood`…).

---

## 3. Procédure d'ajout

```bash
# 1. Vérifier la licence AVANT de télécharger
curl -s "https://collectionapi.metmuseum.org/public/collection/v1/objects/310870" | grep isPublicDomain

# 2. Télécharger la source
curl -sL -A "SankofaEdu/0.1 (educational app)" "<url>" -o /tmp/src.jpg

# 3. Convertir en webp ~1200 px, au nom exact de la leçon
node -e "require('sharp')('/tmp/src.jpg').resize(1200,null,{withoutEnlargement:true,kernel:require('sharp').kernel.lanczos3}).webp({quality:82}).toFile('src/assets/lecons/<id>.webp')"

# 4. Générer les variantes 400w/800w
npm run images:variants

# 5. Ajouter le bloc image dans la leçon, raccourcir le texte, valider
npm run gen:index && npm run validate
```

**Conséquence éditoriale à ne pas oublier** : la règle 11 du validateur abaisse le budget de mots
de **90-140 à 70-110** dès qu'une leçon porte une image. Le texte doit donc être raccourci
d'environ un quart. L'attribut `alt` compte dans ce total — le garder court et descriptif.

Contraintes du bloc (charte § 4.8, règle 19) : `alt` obligatoire, non vide, **différent de la
légende** ; légende de 12 mots maximum ; `credit` obligatoire pour toute image non produite pour
le projet ; **une seule image par leçon**.

---

## 4. Registre des images

| Leçon | Sujet | Source | Licence | Auteur | Dimensions |
|---|---|---|---|---|---|
| `course-decouverte-03-architectures-terre-lesson-1` | La Grande Mosquée de Djenné | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:MaliDjenn%C3%A9Mosqu%C3%A9e.JPG) | CC BY-SA 3.0 | BluesyPete | source 4521×2094 → webp 1200×556 |

Crédit affiché dans l'application : `Photo BluesyPete, CC BY-SA 3.0, via Wikimedia Commons`.

---

## 5. Lot pilote — état

Objectif : 8 à 10 images, pour valider la chaîne complète avant d'illustrer plus largement.

| # | Leçon visée | Sujet | Source pressentie | État |
|---|---|---|---|---|
| 1 | `…03-architectures-terre-lesson-1` | Mosquée de Djenné | Wikimedia, CC BY-SA | ✅ **fait** |
| 2 | `…01-masques-sculptures-lesson-4` | Statue fang *eyema byeri* | Met, objet 310870 (CC0 confirmé) | à faire |
| 3 | `…02-tissus-parures-lesson-5` | Panneau de raphia kuba shoowa | Met, objet 318389 | à faire |
| 4 | `…02-tissus-parures-lesson-4` | Poids akan à peser l'or | Met | à faire |
| 5 | `…01-masques-sculptures-lesson-2` | Plaque ou tête de bronze du Bénin | Met | à faire |
| 6 | `…01-masques-sculptures-lesson-1` | Masque dogon ou baoulé | Met | à faire |
| 7 | `…02-tissus-parures-lesson-1` | Tissu kente | Met | à faire |
| 8 | `…02-tissus-parures-lesson-2` | Bogolan malien | Met ou Smithsonian | à faire |
| 9 | `…07-danses-lesson-5` | Danseurs dogon sur échasses, Sangha | Wikimedia, licence à vérifier | à faire |
| 10 | `…03-architectures-terre-lesson-3` | Falaises de Bandiagara | Wikimedia, licence à vérifier | à faire |

---

## 6. Ce qui ne peut pas être illustré

Une partie du lot 1 est **hors de portée juridique**, et c'est le versant contemporain :

- **Photographie** : Seydou Keïta, Malick Sidibé, Zanele Muholi, Omar Victor Diop — sous droits,
  ayants droit actifs.
- **Cinéma** : photogrammes de Sembène, Mambéty, Safi Faye — sous droits.
- **Architecture contemporaine** : les bâtiments de Francis Kéré sont photographiés par des
  auteurs identifiés (Simeon Duchoud, Erik-Jan Ouwerkerk).
- **Mode** : Lagos Fashion Week, créations de Chris Seydou.

L'ironie mérite d'être notée : **le cours sur la photographie africaine est celui qu'on ne peut
pas illustrer.** Ne pas contourner la difficulté avec une image approchante ou générée : une
leçon sans photo vaut mieux qu'une photo qui ment sur son sujet.
