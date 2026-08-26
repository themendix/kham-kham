# Images des leçons — registre et procédure

Ce document fait foi sur **les photos intra-leçon** (bloc `image` de la charte, § 4.8). Il n'a
rien à voir avec les bannières de cours (`src/assets/cours/`), qui sont des illustrations
**générées par IA** via `npm run images:generate` et documentées dans
`docs/contenu <matière>/PROMPTS-IMAGES-<matière>.md`.

Ici, ce sont de **vraies photographies documentaires**, reprises de sources libres. Chaque
entrée du registre engage la conformité juridique du projet : ne jamais ajouter une image sans
remplir sa ligne.

---

## 0. Règle de travail — chercher une image pour chaque leçon

**Pour toute leçon conçue ou réécrite, chercher systématiquement une image**, sans attendre qu'on
le demande.

- Si une image libre existe **et sert la leçon**, l'ajouter — sans validation préalable.
- Si aucune image utilisable n'existe, **le dire explicitement** dans le compte rendu, plutôt que
  de rester silencieux ou de combler avec une image approchante.
- « Sert la leçon » veut dire : elle montre **le sujet**, pas seulement le lieu ou l'époque. Une
  photo juste de cadrage mais fausse de sujet ne vaut pas mieux qu'une absence d'image (voir § 5,
  le cas Bandiagara).

Ne jamais présumer qu'un sujet est sous droits sans vérifier : les portraits d'écrivains ont été
écartés du lot pilote sur cette présomption, alors que quatre sur cinq étaient disponibles, dont
deux en CC0 ou dans le domaine public.

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
| **OGL v1.0** (Open Government Licence, Royaume-Uni) | obligatoire | ✅ licence ouverte, réutilisation commerciale permise |
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
node -e "const s=require('sharp');s('/tmp/src.jpg').rotate().resize(1200,null,{withoutEnlargement:true,kernel:s.kernel.lanczos3}).webp({quality:82}).toFile('src/assets/lecons/<id>.webp')"
# `.rotate()` est OBLIGATOIRE : sans lui, sharp ignore l'orientation EXIF et une photo
# portrait ressort couchée. Vérifier que les dimensions de sortie correspondent bien à
# celles annoncées par Commons.

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

Trente-deux images. `MET` = The Metropolitan Museum of Art, domaine public (CC0).

| Leçon | Sujet | Source | Licence | Auteur | Source → webp |
|---|---|---|---|---|---|
| `…01-masques-sculptures-lesson-1` | Masque baoulé (performance *mblo*) | [Met 643506](https://www.metmuseum.org/art/collection/search/643506) | CC0 | — | 1200×1590 |
| `…01-masques-sculptures-lesson-2` | Plaque : l'*oba* à cheval, royaume du Bénin | [Met 310752](https://www.metmuseum.org/art/collection/search/310752) | CC0 | — | 1200×1487 |
| `…01-masques-sculptures-lesson-4` | Statue *eyema byeri*, Fang du Gabon | [Met 310870](https://www.metmuseum.org/art/collection/search/310870) | CC0 | — | 1200×1500 |
| `…02-tissus-parures-lesson-1` | Bandes de kente avant assemblage | [Commons](https://commons.wikimedia.org/wiki/File:Kente_strips.jpg) | CC BY-SA 4.0 | Mwintirew | 4080×3072 → 1200×904 |
| `…02-tissus-parures-lesson-2` | Bogolan bamana, Mali, 1954 | [Commons](https://commons.wikimedia.org/wiki/File:Mali,_bamana,_tessuto_dipinto_a_motivi_geometrici_bogolan,_1954_(mnpe).jpg) | CC BY-SA 4.0 | Sailko | 3116×1652 → 1200×636 |
| `…02-tissus-parures-lesson-3` | Motif de wax « Nsubura », Ghana | [Commons](https://commons.wikimedia.org/wiki/File:Nsubura_fabric.jpg) | CC BY-SA 4.0 | Naa2Darkoa | 1280×786 → 1200×737 |
| `…02-tissus-parures-lesson-4` | Poids akan à peser l'or, en tabouret | [Met 317686](https://www.metmuseum.org/art/collection/search/317686) | CC0 | — | 1200×856 |
| `…02-tissus-parures-lesson-5` | Panneau de raphia brodé, shoowa | [Commons](https://commons.wikimedia.org/wiki/File:Panel,_Shoowa_people,_raffia_palm_fiber,_plain_weave,_and_embroidery,_HMA.JPG) | CC0 | Hiart | 3430×2415 → 1200×845 |
| `…03-architectures-terre-lesson-1` | La Grande Mosquée de Djenné | [Commons](https://commons.wikimedia.org/wiki/File:MaliDjenn%C3%A9Mosqu%C3%A9e.JPG) | CC BY-SA 3.0 | BluesyPete | 4521×2094 → 1200×556 |
| `…03-architectures-terre-lesson-3` | Village dogon, falaises de Bandiagara | [Commons](https://commons.wikimedia.org/wiki/File:Dogon.jpg) | CC BY-SA 4.0 | Ondřej Havelka | 2000×816 → 1200×490 |
| `…06-litteratures-africaines-lesson-1` | Portrait de Ngugi wa Thiong'o | [Commons](https://commons.wikimedia.org/wiki/File:Ng%C5%A9g%C4%A9_wa_Thiong%27o_2019_(48139052733).jpg) | CC0 | Library of Congress Life | 3600×2400 → 1200×800 |
| `…06-litteratures-africaines-lesson-2` | Portrait de Chinua Achebe | [Commons](https://commons.wikimedia.org/wiki/File:Chinua_Achebe_-_Buffalo_25Sep2008_crop.jpg) | CC BY 3.0 | Stuart C. Shapiro | 1340×980 → 1200×878 |
| `…06-litteratures-africaines-lesson-3` | Portrait de Wole Soyinka | [Commons](https://commons.wikimedia.org/wiki/File:Wole_Soyinka_in_2018-5.jpg) | CC BY-SA 4.0 | Frankie Fouganthin | 2500×1671 → 1200×802 |
| `…06-litteratures-africaines-lesson-5` | Portrait de Mariama Bâ | [Commons](https://commons.wikimedia.org/wiki/File:Mariama_B%C3%A2_%C3%A0_l%27%C3%89cole_normale_de_Rufisque.jpg) | Domaine public | auteur inconnu | 923×690 |
| `course-perso-01-hatchepsout-lesson-3` | Statue agenouillée d'Hatchepsout | [Commons](https://commons.wikimedia.org/wiki/File:Large_Kneeling_Statue_of_Hatshepsut_MET_DP117949.jpg) | CC0 | Met Museum | 3554×4000 → 1200×1351 |
| `course-perso-02-taharqa-lesson-3` | Sanctuaire et sphinx de Taharqa | [Commons](https://commons.wikimedia.org/wiki/File:Shrine_%26_Sphinx_of_Taharqa.jpg) | CC BY-SA 2.0 | Aidan McRae Thomson | 2848×2136 → 1200×900 |
| `course-perso-03-dihya-lesson-3` | Les monts Aurès, en Algérie | [Commons](https://commons.wikimedia.org/wiki/File:Aur%C3%A8s_enneig%C3%A9s.JPG) | CC BY-SA 3.0 | Yelles | 3648×2736 → 1200×900 |
| `course-perso-05-ibn-khaldoun-lesson-2` | Manuscrit autographe de la Muqaddima | [Commons](https://commons.wikimedia.org/wiki/File:Ibn_Khald%C5%ABn_autograph,_al-Muqaddima,_MS_At%C4%B1f_Efendi_1936,_f._7a.png) | Domaine public | Ibn Khaldoun | 994×1464 |
| `course-perso-06-sayyida-al-hurra-lesson-2` | La médina de Tétouan | [Commons](https://commons.wikimedia.org/wiki/File:Tetouan,_near_the_Medina_and_Qasba.jpg) | CC BY-SA 4.0 | Ideophagous | 4080×3060 → 1200×900 |
| `course-perso-07-kimpa-vita-lesson-3` | Crucifix kongo en laiton | [Commons](https://commons.wikimedia.org/wiki/File:Clevelandart_2010.444.jpg) | CC0 | Cleveland Museum of Art | 2240×3400 → 1200×1821 |
| `course-perso-08-nanny-marrons-lesson-5` | Moore Town, village marron | [Commons](https://commons.wikimedia.org/wiki/File:JM_Moore_Town_1010_(6)_(17070794889).jpg) | CC BY-SA 2.0 | Diego Tirira | 800×535 |
| `course-perso-09-toussaint-louverture-lesson-3` | Toussaint Louverture, gravure de 1806 | [Commons](https://commons.wikimedia.org/wiki/File:Toussaint_Louverture._Kupfer,_1806.jpg) | CC BY-SA 4.0 | Regge & Meineck | 2293×4016 → 1200×2102 |
| `course-perso-10-sojourner-truth-lesson-3` | Sojourner Truth, photographie de 1870 | [Commons](https://commons.wikimedia.org/wiki/File:Sojourner_Truth,_1870_(cropped,_restored).jpg) | Domaine public | Randall Studio | 3035×4210 → 1200×1665 |
| `course-perso-13-taytu-betul-lesson-3` | L'impératrice Taytu Betul, gravure | [Commons](https://commons.wikimedia.org/wiki/File:Taytu_Betul.jpg) | Domaine public | H. Meyer, Le Petit Journal | 3734×5433 → 1200×1746 |
| `course-perso-16-du-bois-lesson-2` | W. E. B. Du Bois en 1907 | [Commons](https://commons.wikimedia.org/wiki/File:W.E.B._Du_Bois_by_James_E._Purdy,_1907_(3x4).jpg) | Domaine public | James E. Purdy | 2808×3744 → 1200×1600 |
| `course-perso-21-kwame-nkrumah-lesson-1` | Portrait de Kwame Nkrumah | [Commons](https://commons.wikimedia.org/wiki/File:Kwame_Nkrumah_-_The_National_Archives_UK_-_CO_1069-50-1-crop.jpg) | OGL v1.0 | The National Archives UK | 941×1254 |
| `course-perso-18-frantz-fanon-lesson-1` | Portrait de Frantz Fanon | [Commons](https://commons.wikimedia.org/wiki/File:Photograph_of_Frantz_Fanon_from_Black_Skin_White_Masks_(1967)_dust_jacket.webp) | Domaine public | auteur inconnu | 1400×1945 → 1200×1667 |
| `course-perso-19-amilcar-cabral-lesson-1` | Portrait d'Amílcar Cabral | [Commons](https://commons.wikimedia.org/wiki/File:Cabral_2.png) | Domaine public | auteur inconnu | 1834×1337 → 1200×875 |
| `course-perso-20-agostinho-neto-lesson-1` | Portrait d'Agostinho Neto | [Commons](https://commons.wikimedia.org/wiki/File:President_MPLA,_heer_Neto_door_Den_Uyl_ontvangen_premier_Den_Uyl_en_A_Neto_(r),_Bestanddeelnr_927-8518_(cropped).jpg) | CC0 | Rob Mieremet / Anefo | 1276×1702 → 1200×1601 |
| `course-perso-22-julius-nyerere-lesson-1` | Portrait de Julius Nyerere | [Commons](https://commons.wikimedia.org/wiki/File:President_Nyerere_van_Tanzania,_koppen,_Bestanddeelnr_928-2879_(cropped).jpg) | CC0 | Rob Mieremet / Anefo | 2323×3412 → 1200×1763 |
| `course-perso-23-haile-selassie-lesson-1` | L'empereur Haïlé Sélassié | [Commons](https://commons.wikimedia.org/wiki/File:Haile_Selassie_in_full_dress_(3x4_cropped).jpg) | Domaine public | auteur inconnu | 600×800 |
| `course-perso-24-patrice-lumumba-lesson-1` | Patrice Lumumba à Bruxelles, 1960 | [Commons](https://commons.wikimedia.org/wiki/File:LumumbaBrussel1960.jpg) | CC0 | Harry Pot | 3687×2388 → 1200×777 |

Crédits affichés dans l'application : `The Metropolitan Museum of Art, domaine public (CC0)` pour
les objets du Met, et `Photo <auteur>, <licence>, via Wikimedia Commons` pour les autres.

---

## 5. Trois refus et un recadrage, et pourquoi ils comptent

**Le panneau kuba du Met (objet 318389) n'est pas dans le domaine public.** Il figurait dans le
plan initial, choisi parce qu'il correspondait exactement à la leçon. La vérification
`isPublicDomain` l'a écarté au moment du téléchargement. Remplacé par un panneau shoowa du
Honolulu Museum of Art, en CC0 sur Commons. **Ne jamais présumer qu'un objet ancien dans un
grand musée est libre** : c'est la photo qui compte, pas l'objet.

**La leçon sur le *dama* dogon (`…07-danses-lesson-5`) reste sans photo.** Le seul candidat
correctement licencié sur Commons est intitulé « Eric Huyten is filming tourists among the masked
dancers, Sangha, 1994 » : il montre une représentation touristique, pas une levée de deuil.
L'illustrer avec cette image aurait menti sur le sujet de la leçon. Elle attendra une photo juste.

**Bandiagara a demandé trois essais.** Le premier choix (village de Teli, 2592×3872) donnait,
avec la règle « jamais de recadrage », une bande étroite au milieu du cadre. Le deuxième corrigeait
le format mais montrait surtout un paysage. Le troisième, un village dogon en panoramique
(2000×816), montre le bâti de terre et remplit toute la largeur du cadre.

Deux règles en sortent : **privilégier des sources entre 2,5:1 et 3:4** — au-delà en hauteur,
l'image se réduit à un filet ; et **vérifier que la photo montre le sujet de la leçon, pas
seulement le lieu**. Les photos d'objets de musée (masque, statue, plaque) restent verticales sans
gêne : le format y est attendu, et le fond crème les présente comme sur un socle.

**Le kente du Met (objet 85576) était en CC0 mais ne faisait que 298 px de large** — trop petit
pour la variante 800w, donc flou à l'affichage. Remplacé par une photo Commons de bandes de kente,
qui illustre en prime le tissage en bandes décrit dans la leçon.

---

## 5 bis. Personnalités sans portrait : ce qu'on montre à la place

Pour une figure dont **aucune image ne subsiste**, montrer ce qu'elle a bâti, gouverné ou défendu
reste honnête — à condition que **la légende le dise franchement**. « Les Aurès, refuge et base de
Dihya » ne laisse pas croire qu'on voit Dihya. C'est une extension assumée de la règle du § 0, pas
une entorse : la légende ne ment pas.

**Chercher les autres orthographes.** Pour les noms africains, essayer systématiquement les
variantes de transcription : le seul fichier Commons sur Yennenga est classé sous « Yennega », et
toutes les recherches sur la graphie usuelle passaient à côté.

**Cas Yennenga : leçon laissée sans image, décision de l'utilisateur.** Il existe bien une statue
monumentale de la princesse à Ouagadougou, œuvre du sculpteur Siriki Ky. Aucune photo n'en est
disponible sous licence libre : ni Commons, ni les articles Wikipédia français et anglais, qui
n'utilisent qu'un fichier de 265 × 320 px, inexploitable. Le trophée du FESPACO, qui représente
aussi Yennenga à cheval, a été proposé puis **écarté** : ce n'est pas la statue. La leçon reste
donc sans image.

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
