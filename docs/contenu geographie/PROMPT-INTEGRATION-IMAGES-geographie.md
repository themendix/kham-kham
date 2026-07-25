# Prompt d'intégration des images — Matière Géographie (54 illustrations)

Ce document explique comment intégrer proprement les **54 illustrations** (`photo/p1.png` … `photo/p54.png`) dans l'app Sankofa, à la manière des images d'Histoire, avec **détourage du fond crème débordant (option A)**, conversion en **`.webp`**, renommage d'après l'id du cours et placement dans `src/assets/cours/`.

Ouvre le projet (`C:\kham-kham`) dans VS Code, puis suis la section **« SCRIPT À LANCER »** (ou copie le bloc à ton assistant IA).

---

## 1. Ce que fait l'intégration

- **Détourage (option A)** : on retire le **crème/blanc qui déborde autour** de chaque illustration (le « passe-partout »), en gardant le crème interne à la scène (il se fond avec le thème crème de l'app). Le détourage se fait avec une **tolérance** car le fond n'est pas blanc pur mais crème (~`#f6eedd`) avec un léger grain.
- **Conversion `.webp`** (le loader `getCourseImage` ne lit que le `.webp`) + réduction de poids (les PNG font ~1,5 Mo ; les webp feront quelques dizaines de Ko).
- **Renommage** d'après l'**id du cours** : `p1.png` → `course-geographie-01-algerie.webp`, … `p54.png` → `course-geographie-54-zimbabwe.webp`.
- **Placement** dans `src/assets/cours/geographie/`. Le glob de `src/lib/courseImages.ts` est **récursif** (`@/assets/cours/**/*.webp`) et indexe par **nom de fichier = id du cours** → les cartes basculent automatiquement sur l'en-tête image 150 px, **sans aucune modification de code**. Cela aligne aussi la pastille « Terminé » et supprime l'affichage « DZ/EG ».

> ⚠️ Prérequis : les cours de Géographie doivent déjà exister dans l'app (ids `course-geographie-NN-slug`), via le prompt `PROMPT-INTEGRATION-VSCODE-geographie.md`. Sinon, les images sont bien chargées mais ne s'attachent à aucune carte.

---

## 2. Correspondance image → cours (p → id)

| Image | Cours | Fichier de sortie |
|---|---|---|
| p1 | 01 Algérie | `course-geographie-01-algerie.webp` |
| p2 | 02 Égypte | `course-geographie-02-egypte.webp` |
| p3 | 03 Libye | `course-geographie-03-libye.webp` |
| p4 | 04 Maroc | `course-geographie-04-maroc.webp` |
| p5 | 05 Mauritanie | `course-geographie-05-mauritanie.webp` |
| p6 | 06 Soudan | `course-geographie-06-soudan.webp` |
| p7 | 07 Tunisie | `course-geographie-07-tunisie.webp` |
| p8 | 08 Bénin | `course-geographie-08-benin.webp` |
| p9 | 09 Burkina Faso | `course-geographie-09-burkina-faso.webp` |
| p10 | 10 Cap-Vert | `course-geographie-10-cap-vert.webp` |
| p11 | 11 Côte d'Ivoire | `course-geographie-11-cote-divoire.webp` |
| p12 | 12 Gambie | `course-geographie-12-gambie.webp` |
| p13 | 13 Ghana | `course-geographie-13-ghana.webp` |
| p14 | 14 Guinée | `course-geographie-14-guinee.webp` |
| p15 | 15 Guinée-Bissau | `course-geographie-15-guinee-bissau.webp` |
| p16 | 16 Liberia | `course-geographie-16-liberia.webp` |
| p17 | 17 Mali | `course-geographie-17-mali.webp` |
| p18 | 18 Niger | `course-geographie-18-niger.webp` |
| p19 | 19 Nigeria | `course-geographie-19-nigeria.webp` |
| p20 | 20 Sénégal | `course-geographie-20-senegal.webp` |
| p21 | 21 Sierra Leone | `course-geographie-21-sierra-leone.webp` |
| p22 | 22 Togo | `course-geographie-22-togo.webp` |
| p23 | 23 Angola | `course-geographie-23-angola.webp` |
| p24 | 24 Cameroun | `course-geographie-24-cameroun.webp` |
| p25 | 25 Centrafrique | `course-geographie-25-centrafrique.webp` |
| p26 | 26 Congo (Brazzaville) | `course-geographie-26-congo-brazzaville.webp` |
| p27 | 27 RD Congo | `course-geographie-27-rd-congo.webp` |
| p28 | 28 Gabon | `course-geographie-28-gabon.webp` |
| p29 | 29 Guinée équatoriale | `course-geographie-29-guinee-equatoriale.webp` |
| p30 | 30 São Tomé-et-Príncipe | `course-geographie-30-sao-tome-et-principe.webp` |
| p31 | 31 Tchad | `course-geographie-31-tchad.webp` |
| p32 | 32 Burundi | `course-geographie-32-burundi.webp` |
| p33 | 33 Comores | `course-geographie-33-comores.webp` |
| p34 | 34 Djibouti | `course-geographie-34-djibouti.webp` |
| p35 | 35 Érythrée | `course-geographie-35-erythree.webp` |
| p36 | 36 Éthiopie | `course-geographie-36-ethiopie.webp` |
| p37 | 37 Kenya | `course-geographie-37-kenya.webp` |
| p38 | 38 Madagascar | `course-geographie-38-madagascar.webp` |
| p39 | 39 Maurice | `course-geographie-39-maurice.webp` |
| p40 | 40 Ouganda | `course-geographie-40-ouganda.webp` |
| p41 | 41 Rwanda | `course-geographie-41-rwanda.webp` |
| p42 | 42 Seychelles | `course-geographie-42-seychelles.webp` |
| p43 | 43 Somalie | `course-geographie-43-somalie.webp` |
| p44 | 44 Soudan du Sud | `course-geographie-44-soudan-du-sud.webp` |
| p45 | 45 Tanzanie | `course-geographie-45-tanzanie.webp` |
| p46 | 46 Afrique du Sud | `course-geographie-46-afrique-du-sud.webp` |
| p47 | 47 Botswana | `course-geographie-47-botswana.webp` |
| p48 | 48 Eswatini | `course-geographie-48-eswatini.webp` |
| p49 | 49 Lesotho | `course-geographie-49-lesotho.webp` |
| p50 | 50 Malawi | `course-geographie-50-malawi.webp` |
| p51 | 51 Mozambique | `course-geographie-51-mozambique.webp` |
| p52 | 52 Namibie | `course-geographie-52-namibie.webp` |
| p53 | 53 Zambie | `course-geographie-53-zambie.webp` |
| p54 | 54 Zimbabwe | `course-geographie-54-zimbabwe.webp` |

---

## 3. SCRIPT À LANCER (Python + Pillow — recommandé, multiplateforme)

Depuis la racine du projet (`C:\kham-kham`), installe Pillow puis lance le script.

```bash
pip install pillow
python integrer_images_geo.py
```

Crée le fichier `integrer_images_geo.py` à la racine avec ce contenu :

```python
# -*- coding: utf-8 -*-
"""Détoure le fond crème débordant (option A), convertit en .webp,
renomme d'après l'id du cours et place dans src/assets/cours/geographie/."""
import os
from PIL import Image, ImageChops

SRC_DIR = os.path.join("docs", "contenu geographie", "photo")
DST_DIR = os.path.join("src", "assets", "cours", "geographie")

# Détourage : tolérance (0-255). Plus haut = coupe plus de crème (mais risque de
# mordre des éléments très clairs en bordure). 18 est un bon point de départ.
TOLERANCE = 18
MAX_WIDTH = 1000        # réduit le poids ; les cartes n'ont pas besoin de plus
NORMALIZE_32 = False    # True = recadre chaque image au format 3:2 (cartes uniformes)

MAPPING = {
    1: "course-geographie-01-algerie", 2: "course-geographie-02-egypte",
    3: "course-geographie-03-libye", 4: "course-geographie-04-maroc",
    5: "course-geographie-05-mauritanie", 6: "course-geographie-06-soudan",
    7: "course-geographie-07-tunisie", 8: "course-geographie-08-benin",
    9: "course-geographie-09-burkina-faso", 10: "course-geographie-10-cap-vert",
    11: "course-geographie-11-cote-divoire", 12: "course-geographie-12-gambie",
    13: "course-geographie-13-ghana", 14: "course-geographie-14-guinee",
    15: "course-geographie-15-guinee-bissau", 16: "course-geographie-16-liberia",
    17: "course-geographie-17-mali", 18: "course-geographie-18-niger",
    19: "course-geographie-19-nigeria", 20: "course-geographie-20-senegal",
    21: "course-geographie-21-sierra-leone", 22: "course-geographie-22-togo",
    23: "course-geographie-23-angola", 24: "course-geographie-24-cameroun",
    25: "course-geographie-25-centrafrique", 26: "course-geographie-26-congo-brazzaville",
    27: "course-geographie-27-rd-congo", 28: "course-geographie-28-gabon",
    29: "course-geographie-29-guinee-equatoriale", 30: "course-geographie-30-sao-tome-et-principe",
    31: "course-geographie-31-tchad", 32: "course-geographie-32-burundi",
    33: "course-geographie-33-comores", 34: "course-geographie-34-djibouti",
    35: "course-geographie-35-erythree", 36: "course-geographie-36-ethiopie",
    37: "course-geographie-37-kenya", 38: "course-geographie-38-madagascar",
    39: "course-geographie-39-maurice", 40: "course-geographie-40-ouganda",
    41: "course-geographie-41-rwanda", 42: "course-geographie-42-seychelles",
    43: "course-geographie-43-somalie", 44: "course-geographie-44-soudan-du-sud",
    45: "course-geographie-45-tanzanie", 46: "course-geographie-46-afrique-du-sud",
    47: "course-geographie-47-botswana", 48: "course-geographie-48-eswatini",
    49: "course-geographie-49-lesotho", 50: "course-geographie-50-malawi",
    51: "course-geographie-51-mozambique", 52: "course-geographie-52-namibie",
    53: "course-geographie-53-zambie", 54: "course-geographie-54-zimbabwe",
}

def trim_cream(im):
    """Coupe la marge de couleur uniforme (crème) tout autour du contenu dessiné."""
    im = im.convert("RGB")
    # Couleur de fond estimée depuis un coin (là où se trouve le passe-partout)
    bg_color = im.getpixel((2, 2))
    bg = Image.new("RGB", im.size, bg_color)
    diff = ImageChops.difference(im, bg).convert("L")
    mask = diff.point(lambda p: 255 if p > TOLERANCE else 0)
    bbox = mask.getbbox()
    return im.crop(bbox) if bbox else im

def to_32(im):
    """Recadre au format 3:2 (cover, centré) — optionnel."""
    target = 3 / 2
    w, h = im.size
    if w / h > target:                 # trop large -> on rogne les côtés
        nw = int(h * target)
        left = (w - nw) // 2
        return im.crop((left, 0, left + nw, h))
    else:                              # trop haut -> on rogne haut/bas
        nh = int(w / target)
        top = (h - nh) // 2
        return im.crop((0, top, w, top + nh))

def main():
    os.makedirs(DST_DIR, exist_ok=True)
    done = 0
    for n, name in MAPPING.items():
        src = os.path.join(SRC_DIR, "p%d.png" % n)
        if not os.path.exists(src):
            print("MANQUANT:", src)
            continue
        im = trim_cream(Image.open(src))
        if NORMALIZE_32:
            im = to_32(im)
        if im.width > MAX_WIDTH:
            nh = round(im.height * MAX_WIDTH / im.width)
            im = im.resize((MAX_WIDTH, nh), Image.LANCZOS)
        out = os.path.join(DST_DIR, name + ".webp")
        im.save(out, "WEBP", quality=88, method=6)
        print("OK", name, im.size)
        done += 1
    print("Terminé : %d/54 images générées dans %s" % (done, DST_DIR))

if __name__ == "__main__":
    main()
```

---

## 4. Variante ImageMagick (si tu préfères, sans Python)

Nécessite ImageMagick 7 (`magick`). À adapter selon ton shell ; exemple bash (WSL / Git Bash) :

```bash
mkdir -p "src/assets/cours/geographie"
# renseigne le même mapping p->nom (ex. via un tableau) puis, pour chaque paire :
magick "docs/contenu geographie/photo/p1.png" -fuzz 7% -trim +repage \
       -resize 1000x\> -quality 88 \
       "src/assets/cours/geographie/course-geographie-01-algerie.webp"
# ... répéter pour p2..p54 avec le bon nom de sortie.
```

`-fuzz 7% -trim` détoure la marge crème ; `+repage` réinitialise le cadre ; `-resize 1000x\>` réduit le poids sans agrandir.

---

## 5. Réglages & cas limites

- **Tolérance** (`TOLERANCE` / `-fuzz`) : si du crème reste autour, augmente (ex. 24 / 10 %). Si le détourage **mord** un élément clair en bordure (bâtiment blanc, écume…), baisse (ex. 12 / 5 %).
- **Fin liseré sombre** : quelques images ont un mince cadre dessiné autour de l'illustration. Le détourage retire le crème **à l'extérieur** de ce liseré mais garde le liseré (fin trait) — c'est voulu et discret.
- **Crème interne** (ciel où flotte le drapeau) : conservé (option A). Il se fond avec le thème crème de l'app ; le rendu « vide » est doux, pas blanc cru.
- **Cartes uniformes** : passe `NORMALIZE_32 = True` si tu veux que toutes les cartes aient exactement le même cadrage 3:2 (léger recadrage centré — vérifie que le drapeau, souvent en haut à droite, n'est pas trop rogné ; sinon laisse `False`).

---

## 6. Vérification

1. Le dossier `src/assets/cours/geographie/` contient **54 fichiers `.webp`**, un par `course-geographie-NN-slug`.
2. `npm run dev` → **Biblio → Géographie** : chaque carte affiche désormais son **illustration** (en-tête image 150 px), la pastille « Terminé » est alignée comme en Histoire, et le « DZ/EG » a disparu.
3. Ouvre 2-3 cartes de contrôle (Sénégal, Kenya, Zimbabwe) : l'image est nette, sans marge crème parasite autour.
4. Vérifie qu'une carte d'**Histoire** est inchangée (ses images vivent dans `src/assets/cours/…` et ne sont pas touchées).
5. `npx tsc -p tsconfig.app.json --noEmit` (ou `npm run build`) doit passer sans erreur.

*Fin du document.*
