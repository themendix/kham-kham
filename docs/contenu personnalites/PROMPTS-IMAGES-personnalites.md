# Prompts d'images — Matière Personnalités (30 cours)

Ce document fournit, pour chacun des **30 cours de Personnalités** de Sankofa, un **prompt de génération d'image** prêt à copier-coller. Les prompts sont en **anglais** (meilleurs résultats sur DALL·E, Firefly, Nano Banana, Midjourney…) et **autonomes** : chaque prompt contient déjà le bloc de style, tu peux en copier n'importe lequel tel quel.

Base éditoriale : `AUDIT-VISUEL-personnalites.md`, § 3 et § 4.

---

## 1. Principe : une scène emblématique, jamais un portrait

Contrairement aux prompts d'Histoire et de Géographie, ceux-ci obéissent à une **règle absolue** : **aucun visage humain lisible**. Quand des personnes figurent dans l'image, elles sont vues **de dos**, **à distance** ou **cadrées sur les mains**.

Ce n'est pas un choix esthétique mais une exigence de justesse. Pour la plupart de ces trente figures, un générateur d'images produirait un visage africain générique — c'est-à-dire une **fausse identité présentée comme vraie** dans une application éducative. Six d'entre elles n'ont d'ailleurs aucun visage documenté, et dix n'ont jamais été photographiées. Chaque cours est donc identifié par un **lieu, un objet ou une scène attestés**.

Chaque prompt combine :

1. **La scène** — spécifique à la figure, tirée de l'audit visuel.
2. **Le bloc de style** — identique pour les 30, il garantit l'unité graphique avec l'Histoire et la Géographie.

### Bloc de style commun (référence)

> *flat vector editorial illustration, bold uniform black outlines (neo-brutalist), solid flat color fills with no blur and no photorealism, warm African palette of terracotta, ochre-gold, savanna green and deep indigo on a single flat background color with cream accents, clean geometric shapes, subtle flat grain texture, horizontal banner composition (about 3:2) with the main subject centred and clear of the edges, no portrait and no recognisable human face, no text, no lettering, no numbers, no watermark.*

Il diffère de celui de la Géographie sur deux points : **pas de drapeau**, et la mention `dark-brown-skinned figures with dignified heroic expressions` est **remplacée** par `no portrait and no recognisable human face`.

---

## 2. Consignes d'utilisation (à lire une fois)

- **Vérifie l'absence de visage à chaque image.** C'est le seul contrôle vraiment critique de ce lot. Si le générateur fait apparaître un visage identifiable, refais l'image — n'accepte pas « ça passe ».
- **Aucune œuvre identifiable ne doit être reproduite** : pas de statue moderne, pas de billet de banque, pas d'affiche de film, pas de photographie existante recomposée. Les pièges précis sont listés au § 4 de `AUDIT-VISUEL-personnalites.md`.
- **Zones de sécurité** : la carte pose une pastille en **haut-gauche** et un cœur en **haut-droite**. Garde ces deux coins **dégagés** (sujet centré ou légèrement bas). La mention `top corners kept clear` figure dans chaque prompt.
- **Format** : bannière paysage **~3:2**, sujet centré.
- **Fond uni** : un seul aplat de couleur en fond, jamais de dégradé flou (`blur`) — c'est la signature du style.
- **Pas de texte** : `no text, no lettering` est déjà dans chaque prompt ; refais l'image si des lettres parasites apparaissent. **Douze scènes sur trente contiennent un support écrit** et appellent une vigilance particulière : **05** (manuscrit), **09** (constitution), **10** (cartes photographiques), **13** (deux traités), **16** (bannières), **17** (carnet, flacons étiquetés), **19** et **22** (tableaux noirs), **20** (recueil de poèmes), **24** (feuillets de discours), **25** (cartons de délégation, carte murale), **29** (passeport tamponné). Le générateur sera tenté d'y écrire.
- **Aucun drapeau national n'est décrit dans ce lot**, contrairement à la Géographie où il était obligatoire et détaillé couleur par couleur. Un drapeau non décrit est un drapeau inventé — donc potentiellement faux dans une app éducative. Le cours 21 ne comporte que des **mâts nus**, volontairement. Si une image fait apparaître un drapeau reconnaissable, refais-la.
- **Une divergence assumée avec l'audit** : le motif du cours 22 y est décrit comme « tableau noir en swahili », mais le prompt ne demande aucun mot au tableau — précisément pour ne pas provoquer de texte illisible. La langue est portée par la leçon, pas par l'image.
- **Cohérence** : garde le **même générateur** (et si possible la même graine ou le même style de référence) pour les 30, comme pour l'Histoire et la Géographie.

### Génération automatisée (recommandé)

Plutôt que de copier les 30 prompts un par un, `scripts/generate-course-images.mjs` fait le travail : il lit ce document, appelle l'API Gemini et écrit chaque image **directement au bon nom** dans `src/assets/cours/personnalites/`. C'est ce qui élimine le seul risque sérieux de cette étape — une faute de slug produit une carte sans image, sans aucune erreur visible.

```powershell
$env:GEMINI_API_KEY="votre-clé"        # PowerShell ; ailleurs : export GEMINI_API_KEY=...
npm run images:generate -- --dry-run   # vérifie le parsing, aucun appel réseau
npm run images:generate                # les 30, 4 en parallèle
npm run images:generate -- --only 07,13  # refait seulement ces deux-là
npm run images:generate -- --force     # régénère tout, y compris les images déjà présentes
```

Par défaut le script saute les images déjà générées : on peut donc l'interrompre et le relancer sans perte. En cas d'échec, il affiche la commande `--only` exacte à rejouer. Autres options : `--model`, `--concurrency`, `--width`, `--quality`, `--prompts`, `--out`.

Ordre de grandeur du coût, aux tarifs de juillet 2026 : **environ 1 $ pour les 30 images**.

### Nommage & mise en place (aucune modification de code nécessaire)

- Exporte chaque image en **`.webp`**.
- Nomme le fichier **exactement d'après l'id du cours** : `course-perso-NN-slug.webp`.
  ⚠️ L'id **n'est pas** le nom du fichier Markdown : `personnalites-01-hatchepsout.md` → `course-perso-01-hatchepsout.webp`. Les noms exacts sont rappelés sous chaque prompt ci-dessous, et dans la table du § 5 de `PROMPT-INTEGRATION-VSCODE-personnalites.md`.
- Dépose les fichiers dans **`src/assets/cours/personnalites/`** — un nouveau sous-dossier, sur le modèle des sous-dossiers `histoire/` (40 images) et `geographie/` (54 images) déjà en place. `getCourseImage` utilise un glob récursif (`@/assets/cours/**/*-{400w,800w}.webp`), le sous-dossier est donc résolu automatiquement ; seul le **nom de fichier** compte.
- `getCourseImage` (`src/lib/courseImages.ts`) résout automatiquement l'image par le nom = id du cours : dès qu'un fichier est présent, la carte du cours bascule sur l'en-tête image de 150 px. Rien d'autre à câbler.
- Une fois les 30 déposées, lance **`npm run images:variants`** pour générer les variantes `-400w` et `-800w`, puis **`npm run validate`** : l'avertissement « illustration manquante » doit disparaître pour les 30 cours.

---

## 3. Les 30 prompts

### Bloc A — Afrique ancienne et médiévale

#### Cours 01 — Hatchepsout · `course-perso-01-hatchepsout.webp`
> The three colonnaded terraces of an ancient Egyptian mortuary temple built against a sheer limestone cliff, a long central ramp rising between them, and in the lower foreground two Egyptian seagoing ships with furled sails carrying potted incense trees back from an expedition, no people, top corners kept clear — flat vector editorial illustration, bold uniform black outlines (neo-brutalist), solid flat color fills with no blur and no photorealism, warm African palette of terracotta, ochre-gold, savanna green and deep indigo on a single flat background color with cream accents, clean geometric shapes, subtle flat grain texture, horizontal banner composition (about 3:2), no portrait and no recognisable human face, no text, no lettering, no numbers, no watermark.

#### Cours 02 — Taharqa · `course-perso-02-taharqa.webp`
> The steep flat-topped sandstone butte of a sacred Nubian mountain rising from the desert with a small pillared temple at its foot, and in the foreground a single tall standing Egyptian column with a papyrus capital, the last remnant of a great colonnade, no people, top corners kept clear — flat vector editorial illustration, bold uniform black outlines (neo-brutalist), solid flat color fills with no blur and no photorealism, warm African palette of terracotta, ochre-gold, savanna green and deep indigo on a single flat background color with cream accents, clean geometric shapes, subtle flat grain texture, horizontal banner composition (about 3:2), no portrait and no recognisable human face, no text, no lettering, no numbers, no watermark.

#### Cours 03 — Dihya · `course-perso-03-dihya.webp`
> Deep limestone gorges and jagged ridges of a North African mountain massif at dawn, a narrow path winding along a cliff face, terraced stone villages clinging to the slopes, cedar and scrub, entirely empty of people, top corners kept clear — flat vector editorial illustration, bold uniform black outlines (neo-brutalist), solid flat color fills with no blur and no photorealism, warm African palette of terracotta, ochre-gold, savanna green and deep indigo on a single flat background color with cream accents, clean geometric shapes, subtle flat grain texture, horizontal banner composition (about 3:2), no portrait and no recognisable human face, no text, no lettering, no numbers, no watermark.

#### Cours 04 — Yennenga · `course-perso-04-yennenga.webp`
> A single riderless dark stallion standing alert in tall Sudanian savanna grass at dusk, an empty patterned saddle blanket on its back and reins hanging loose, one lone acacia and low hills behind, no rider and no people, top corners kept clear — flat vector editorial illustration, bold uniform black outlines (neo-brutalist), solid flat color fills with no blur and no photorealism, warm African palette of terracotta, ochre-gold, savanna green and deep indigo on a single flat background color with cream accents, clean geometric shapes, subtle flat grain texture, horizontal banner composition (about 3:2), no portrait and no recognisable human face, no text, no lettering, no numbers, no watermark.

#### Cours 05 — Ibn Khaldoun · `course-perso-05-ibn-khaldoun.webp`
> An open handwritten manuscript with a reed pen and a brass inkwell on a low wooden writing desk in a fourteenth-century Maghrebi interior, horseshoe arches, geometric tilework on the lower walls and light falling through a pierced stucco window screen, no people, top corners kept clear — flat vector editorial illustration, bold uniform black outlines (neo-brutalist), solid flat color fills with no blur and no photorealism, warm African palette of terracotta, ochre-gold, savanna green and deep indigo on a single flat background color with cream accents, clean geometric shapes, subtle flat grain texture, horizontal banner composition (about 3:2), no portrait and no recognisable human face, no text, no lettering, no numbers, no watermark.

### Bloc B — Traite, marronnage et diasporas

#### Cours 06 — Sayyida al-Hurra · `course-perso-06-sayyida-al-hurra.webp`
> A walled Moroccan harbour town seen from its ramparts, whitewashed flat-roofed houses stepping down to the Mediterranean, a lateen-rigged sailing ship approaching the anchorage, watchtowers and the Rif mountains behind, no people, top corners kept clear — flat vector editorial illustration, bold uniform black outlines (neo-brutalist), solid flat color fills with no blur and no photorealism, warm African palette of terracotta, ochre-gold, savanna green and deep indigo on a single flat background color with cream accents, clean geometric shapes, subtle flat grain texture, horizontal banner composition (about 3:2), no portrait and no recognisable human face, no text, no lettering, no numbers, no watermark.

#### Cours 07 — Kimpa Vita · `course-perso-07-kimpa-vita.webp`
> The roofless stone ruins of an old church overgrown with vines and grass, cooking fires and simple palm-thatch shelters set up between the standing walls, a long-abandoned capital being resettled at dusk, a few distant small figures seen only from behind, top corners kept clear — flat vector editorial illustration, bold uniform black outlines (neo-brutalist), solid flat color fills with no blur and no photorealism, warm African palette of terracotta, ochre-gold, savanna green and deep indigo on a single flat background color with cream accents, clean geometric shapes, subtle flat grain texture, horizontal banner composition (about 3:2), no portrait and no recognisable human face, no text, no lettering, no numbers, no watermark.

#### Cours 08 — Nanny · `course-perso-08-nanny-marrons.webp`
> Steep forested limestone hills and deep sinkholes of a Caribbean interior under morning mist, dense green canopy with no visible path, and in the foreground a curved cow-horn signal trumpet resting on a mossy rock, no people, top corners kept clear — flat vector editorial illustration, bold uniform black outlines (neo-brutalist), solid flat color fills with no blur and no photorealism, warm African palette of terracotta, ochre-gold, savanna green and deep indigo on a single flat background color with cream accents, clean geometric shapes, subtle flat grain texture, horizontal banner composition (about 3:2), no portrait and no recognisable human face, no text, no lettering, no numbers, no watermark.

#### Cours 09 — Toussaint Louverture · `course-perso-09-toussaint-louverture.webp`
> A handwritten constitution document lying open on a wooden table with a quill and inkwell and a folded officer's sash beside it, and through a tall window in the background a distant stone mountain fortress under falling snow, no people, top corners kept clear — flat vector editorial illustration, bold uniform black outlines (neo-brutalist), solid flat color fills with no blur and no photorealism, warm African palette of terracotta, ochre-gold, savanna green and deep indigo on a single flat background color with cream accents, clean geometric shapes, subtle flat grain texture, horizontal banner composition (about 3:2), no portrait and no recognisable human face, no text, no lettering, no numbers, no watermark.

#### Cours 10 — Sojourner Truth · `course-perso-10-sojourner-truth.webp`
> A small nineteenth-century carte-de-visite photograph card lying face down and slightly angled on a wooden table so that no image is visible, beside it round wire spectacles, a ball of yarn and knitting needles, and a stack of identical blank cards tied with string, warm lamplight, no people, top corners kept clear — flat vector editorial illustration, bold uniform black outlines (neo-brutalist), solid flat color fills with no blur and no photorealism, warm African palette of terracotta, ochre-gold, savanna green and deep indigo on a single flat background color with cream accents, clean geometric shapes, subtle flat grain texture, horizontal banner composition (about 3:2), no portrait and no recognisable human face, no text, no lettering, no numbers, no watermark.

### Bloc C — Face à la conquête coloniale

#### Cours 11 — Abd el-Kader · `course-perso-11-abd-el-kader.webp`
> A vast encampment of tents pitched in ordered concentric rows across a high North African plateau, animal pens, a smoking forge and stacked supplies between them, plain banners on poles, seen from a slight rise at golden hour, a few distant figures only from behind, top corners kept clear — flat vector editorial illustration, bold uniform black outlines (neo-brutalist), solid flat color fills with no blur and no photorealism, warm African palette of terracotta, ochre-gold, savanna green and deep indigo on a single flat background color with cream accents, clean geometric shapes, subtle flat grain texture, horizontal banner composition (about 3:2), no portrait and no recognisable human face, no text, no lettering, no numbers, no watermark.

#### Cours 12 — Samori Touré · `course-perso-12-samori-toure.webp`
> A West African blacksmith workshop under a thatched shelter, a glowing charcoal forge with bellows, anvils, tongs and hammers, and on a heavy workbench disassembled rifle barrels and firing mechanisms being repaired and copied, only a pair of working hands visible at the bench, no faces, top corners kept clear — flat vector editorial illustration, bold uniform black outlines (neo-brutalist), solid flat color fills with no blur and no photorealism, warm African palette of terracotta, ochre-gold, savanna green and deep indigo on a single flat background color with cream accents, clean geometric shapes, subtle flat grain texture, horizontal banner composition (about 3:2), no portrait and no recognisable human face, no text, no lettering, no numbers, no watermark.

#### Cours 13 — Taytu Betul · `course-perso-13-taytu-betul.webp`
> Two nearly identical treaty documents lying side by side on a dark polished table, each with a wax seal and a trailing ribbon, their dense handwriting suggested by abstract ink strokes with no legible letters, and beyond an open window the tall eucalyptus trees and first tin-roofed houses of a newly founded highland town, no people, top corners kept clear — flat vector editorial illustration, bold uniform black outlines (neo-brutalist), solid flat color fills with no blur and no photorealism, warm African palette of terracotta, ochre-gold, savanna green and deep indigo on a single flat background color with cream accents, clean geometric shapes, subtle flat grain texture, horizontal banner composition (about 3:2), no portrait and no recognisable human face, no text, no lettering, no numbers, no watermark.

#### Cours 14 — Yaa Asantewaa · `course-perso-14-yaa-asantewaa.webp`
> An ornate golden West African ceremonial stool resting on its own low carved wooden seat in a forest clearing, a patterned cloth spread beneath it, dappled light falling through tall trees, hidden and unattended, no people, top corners kept clear — flat vector editorial illustration, bold uniform black outlines (neo-brutalist), solid flat color fills with no blur and no photorealism, warm African palette of terracotta, ochre-gold, savanna green and deep indigo on a single flat background color with cream accents, clean geometric shapes, subtle flat grain texture, horizontal banner composition (about 3:2), no portrait and no recognisable human face, no text, no lettering, no numbers, no watermark.

#### Cours 15 — Sarraounia · `course-perso-15-sarraounia.webp`
> A Sahelian village of round mud-brick houses with conical thatched roofs behind a tall wooden palisade, a huge baobab tree beside the gate, granaries and dry scrub stretching away, and a faint line of dust rising on the far horizon, no people, top corners kept clear — flat vector editorial illustration, bold uniform black outlines (neo-brutalist), solid flat color fills with no blur and no photorealism, warm African palette of terracotta, ochre-gold, savanna green and deep indigo on a single flat background color with cream accents, clean geometric shapes, subtle flat grain texture, horizontal banner composition (about 3:2), no portrait and no recognisable human face, no text, no lettering, no numbers, no watermark.

### Bloc D — Penser la libération

#### Cours 16 — W. E. B. Du Bois · `course-perso-16-du-bois.webp`
> An austere 1940s meeting hall with rows of empty wooden chairs facing a small raised stage, a long table with water glasses and a gavel, plain banners and pennants of colonised territories hanging on the wall, the room prepared before the delegates arrive, no people, top corners kept clear — flat vector editorial illustration, bold uniform black outlines (neo-brutalist), solid flat color fills with no blur and no photorealism, warm African palette of terracotta, ochre-gold, savanna green and deep indigo on a single flat background color with cream accents, clean geometric shapes, subtle flat grain texture, horizontal banner composition (about 3:2), no portrait and no recognisable human face, no text, no lettering, no numbers, no watermark.

#### Cours 17 — Cheikh Anta Diop · `course-perso-17-cheikh-anta-diop.webp`
> A 1970s scientific laboratory bench with radiocarbon dating apparatus, glass vacuum lines and stopcocks, labelled sample vials in a rack, a notebook and a slide rule, and a thick open scholarly volume at the end of the bench, warm lamplight, no people, top corners kept clear — flat vector editorial illustration, bold uniform black outlines (neo-brutalist), solid flat color fills with no blur and no photorealism, warm African palette of terracotta, ochre-gold, savanna green and deep indigo on a single flat background color with cream accents, clean geometric shapes, subtle flat grain texture, horizontal banner composition (about 3:2), no portrait and no recognisable human face, no text, no lettering, no numbers, no watermark.

#### Cours 18 — Frantz Fanon · `course-perso-18-frantz-fanon.webp`
> The open courtyard of a Mediterranean hospital, low whitewashed pavilions with their doors propped wide open, wooden chairs arranged in a wide circle under a plane tree, a stone bench and long afternoon shadows across the ground, no people, top corners kept clear — flat vector editorial illustration, bold uniform black outlines (neo-brutalist), solid flat color fills with no blur and no photorealism, warm African palette of terracotta, ochre-gold, savanna green and deep indigo on a single flat background color with cream accents, clean geometric shapes, subtle flat grain texture, horizontal banner composition (about 3:2), no portrait and no recognisable human face, no text, no lettering, no numbers, no watermark.

#### Cours 19 — Amílcar Cabral · `course-perso-19-amilcar-cabral.webp`
> An open-air school in a West African forest clearing, a blackboard propped against the buttressed trunk of a great kapok tree, rows of low wooden benches, exercise books and a box of chalk laid on them, tall grass at the edges, no people, top corners kept clear — flat vector editorial illustration, bold uniform black outlines (neo-brutalist), solid flat color fills with no blur and no photorealism, warm African palette of terracotta, ochre-gold, savanna green and deep indigo on a single flat background color with cream accents, clean geometric shapes, subtle flat grain texture, horizontal banner composition (about 3:2), no portrait and no recognisable human face, no text, no lettering, no numbers, no watermark.

#### Cours 20 — Agostinho Neto · `course-perso-20-agostinho-neto.webp`
> An open book of poems and a portable typewriter set on a wooden crate inside a shelter of branches and canvas in the Angolan bush, an oil lamp, a tin cup and a folded map beside them, night falling outside, no people, top corners kept clear — flat vector editorial illustration, bold uniform black outlines (neo-brutalist), solid flat color fills with no blur and no photorealism, warm African palette of terracotta, ochre-gold, savanna green and deep indigo on a single flat background color with cream accents, clean geometric shapes, subtle flat grain texture, horizontal banner composition (about 3:2), no portrait and no recognisable human face, no text, no lettering, no numbers, no watermark.

### Bloc E — Bâtir les indépendances

#### Cours 21 — Kwame Nkrumah · `course-perso-21-kwame-nkrumah.webp`
> A tall white independence arch standing on a wide open ceremonial square at dawn, a single black five-pointed star mounted at its summit, a row of bare flagpoles alongside, palm trees and the Atlantic ocean beyond, no people, top corners kept clear — flat vector editorial illustration, bold uniform black outlines (neo-brutalist), solid flat color fills with no blur and no photorealism, warm African palette of terracotta, ochre-gold, savanna green and deep indigo on a single flat background color with cream accents, clean geometric shapes, subtle flat grain texture, horizontal banner composition (about 3:2), no portrait and no recognisable human face, no text, no lettering, no numbers, no watermark.

#### Cours 22 — Julius Nyerere · `course-perso-22-julius-nyerere.webp`
> A village classroom with earth-plaster walls, a large blackboard on an easel, rows of worn wooden benches and desks, a globe and a stack of exercise books, sunlight entering through an unglazed window opening and chalk dust in the air, no people, top corners kept clear — flat vector editorial illustration, bold uniform black outlines (neo-brutalist), solid flat color fills with no blur and no photorealism, warm African palette of terracotta, ochre-gold, savanna green and deep indigo on a single flat background color with cream accents, clean geometric shapes, subtle flat grain texture, horizontal banner composition (about 3:2), no portrait and no recognisable human face, no text, no lettering, no numbers, no watermark.

#### Cours 23 — Haile Selassie · `course-perso-23-haile-selassie.webp`
> The empty speaker's rostrum of a 1930s international assembly hall, dark polished wood, two period microphones on curved stands, a glass of water, rows of curved seating rising beyond in shadow, cold northern light from high windows, no people, top corners kept clear — flat vector editorial illustration, bold uniform black outlines (neo-brutalist), solid flat color fills with no blur and no photorealism, warm African palette of terracotta, ochre-gold, savanna green and deep indigo on a single flat background color with cream accents, clean geometric shapes, subtle flat grain texture, horizontal banner composition (about 3:2), no portrait and no recognisable human face, no text, no lettering, no numbers, no watermark.

#### Cours 24 — Patrice Lumumba · `course-perso-24-patrice-lumumba.webp`
> A speaker's lectern crowded with period microphones, loose handwritten sheets of a speech resting on it, ceremonial bunting and palm fronds decorating the stone balustrade behind, and beyond it the wide Congo river and forested far bank at midday, no people, top corners kept clear — flat vector editorial illustration, bold uniform black outlines (neo-brutalist), solid flat color fills with no blur and no photorealism, warm African palette of terracotta, ochre-gold, savanna green and deep indigo on a single flat background color with cream accents, clean geometric shapes, subtle flat grain texture, horizontal banner composition (about 3:2), no portrait and no recognisable human face, no text, no lettering, no numbers, no watermark.

#### Cours 25 — Jeanne Martin Cissé · `course-perso-25-jeanne-martin-cisse.webp`
> A 1960s conference room with tables arranged in a horseshoe, blank delegation name cards, notebooks and water carafes at each empty place, and on the wall a large map of the African continent on which some territories are shaded differently from the others, no people, top corners kept clear — flat vector editorial illustration, bold uniform black outlines (neo-brutalist), solid flat color fills with no blur and no photorealism, warm African palette of terracotta, ochre-gold, savanna green and deep indigo on a single flat background color with cream accents, clean geometric shapes, subtle flat grain texture, horizontal banner composition (about 3:2), no portrait and no recognisable human face, no text, no lettering, no numbers, no watermark.

### Bloc F — Droits, voix et écologie

#### Cours 26 — Funmilayo Ransome-Kuti · `course-perso-26-funmilayo-ransome-kuti.webp`
> A dense crowd of West African market women seen entirely from behind, indigo and ochre wrappers and tied head-scarves, woven baskets set down on the ground around them, gathered in a standing vigil before the carved posts and earthen walls of a royal palace compound, no faces visible at all, top corners kept clear — flat vector editorial illustration, bold uniform black outlines (neo-brutalist), solid flat color fills with no blur and no photorealism, warm African palette of terracotta, ochre-gold, savanna green and deep indigo on a single flat background color with cream accents, clean geometric shapes, subtle flat grain texture, horizontal banner composition (about 3:2), no portrait and no recognisable human face, no text, no lettering, no numbers, no watermark.

#### Cours 27 — Aoua Keïta · `course-perso-27-aoua-keita.webp`
> A worn leather midwife's bag resting on the seat of a small motorbike at the edge of a red-earth bush track at sunrise, a water gourd strapped behind it, and a mud-brick dispensary with a tin roof and a lone tree in the middle distance, no people, top corners kept clear — flat vector editorial illustration, bold uniform black outlines (neo-brutalist), solid flat color fills with no blur and no photorealism, warm African palette of terracotta, ochre-gold, savanna green and deep indigo on a single flat background color with cream accents, clean geometric shapes, subtle flat grain texture, horizontal banner composition (about 3:2), no portrait and no recognisable human face, no text, no lettering, no numbers, no watermark.

#### Cours 28 — Albertina Sisulu · `course-perso-28-albertina-sisulu.webp`
> A long sandstone government building with two domed wings standing above wide terraced gardens, and on the broad stone steps in the foreground thousands of folded petition papers stacked in bundles, left there and unattended, no people, top corners kept clear — flat vector editorial illustration, bold uniform black outlines (neo-brutalist), solid flat color fills with no blur and no photorealism, warm African palette of terracotta, ochre-gold, savanna green and deep indigo on a single flat background color with cream accents, clean geometric shapes, subtle flat grain texture, horizontal banner composition (about 3:2), no portrait and no recognisable human face, no text, no lettering, no numbers, no watermark.

#### Cours 29 — Miriam Makeba · `course-perso-29-miriam-makeba.webp`
> A single standing microphone on a slender stand before the raised curved desk of an international assembly chamber, and lying open on the desk beside it a small passport, stamped and cancelled with a corner clipped, no people, top corners kept clear — flat vector editorial illustration, bold uniform black outlines (neo-brutalist), solid flat color fills with no blur and no photorealism, warm African palette of terracotta, ochre-gold, savanna green and deep indigo on a single flat background color with cream accents, clean geometric shapes, subtle flat grain texture, horizontal banner composition (about 3:2), no portrait and no recognisable human face, no text, no lettering, no numbers, no watermark.

#### Cours 30 — Wangari Maathai · `course-perso-30-wangari-maathai.webp`
> A tree nursery with long rows of black planting bags holding young indigenous seedlings, watering cans and a hoe resting between the rows, a single pair of women's hands cropped at the wrists firming soil around one seedling, and replanted green hills rising behind, no faces, top corners kept clear — flat vector editorial illustration, bold uniform black outlines (neo-brutalist), solid flat color fills with no blur and no photorealism, warm African palette of terracotta, ochre-gold, savanna green and deep indigo on a single flat background color with cream accents, clean geometric shapes, subtle flat grain texture, horizontal banner composition (about 3:2), no portrait and no recognisable human face, no text, no lettering, no numbers, no watermark.

---

## 4. Contrôle avant intégration

Une fois les 30 images produites et déposées dans `src/assets/cours/personnalites/` :

1. **Passe-les toutes en revue à la recherche d'un visage.** C'est le contrôle décisif de ce lot.
2. Vérifie qu'aucun **texte parasite** n'est apparu — en priorité sur les douze scènes à support écrit : 05, 09, 10, 13, 16, 17, 19, 20, 22, 24, 25, 29.
3. Vérifie qu'aucun **drapeau national reconnaissable** n'est apparu : aucun n'est décrit dans ce lot, donc tout drapeau visible est une invention du modèle.
4. Vérifie que les **coins supérieurs** sont dégagés sur chacune.
5. Lance `npm run images:variants`, puis `npm run validate` : la règle 8 (« Illustration par cours ») ne doit plus signaler aucun cours `perso`, et la règle 9 (« Illustrations orphelines ») aucun fichier en trop — ce qui confirmerait au passage que les 30 noms de fichiers sont exacts.

---

*Fin du document.*
