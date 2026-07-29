# Prompt — Mise au propre du dépôt, push et en-têtes de sécurité

> **Mode d'emploi** : ouvrir une conversation neuve dans VS Code, à la racine de `kham-kham`, et
> coller tout ce qui suit à partir de « Contexte ». Le prompt est autonome.

---

## Contexte

Dépôt : `kham-kham` (`https://github.com/themendix/kham-kham`), branche `main`, site public
`https://sankofaa.netlify.app/` déployé automatiquement à chaque push sur `main`.

État au moment d'écrire ce prompt :

- **7 commits d'avance sur `origin/main`** — les lots 1 à 3 de la réécriture Histoire, le modèle
  de blocs typés, le contenu Personnalités, le recalibrage de la gamification. Ils sont commités
  mais jamais poussés.
- **Du travail non commité**, qui tourne autour des **images de Personnalités** :

| Fichier | État |
|---|---|
| `scripts/generate-course-images.mjs` | nouveau |
| `src/lib/courseImages.ts` | modifié |
| `src/lib/courseImages.test.ts` | nouveau |
| `src/assets/cours/personnalites/` | nouveau — 90 fichiers, 4,6 Mo |
| `docs/contenu personnalites/PROMPTS-IMAGES-personnalites.md` | nouveau |
| `docs/contenu personnalites/PROMPT-INTEGRATION-IMAGES-personnalites.md` | nouveau |
| `docs/contenu personnalites/PROMPT-INTEGRATION-FINALE-personnalites.md` | nouveau |
| `docs/contenu personnalites/AUDIT-VISUEL-personnalites.md` | nouveau |
| `docs/contenu personnalites/photo/` | nouveau — **30 fichiers, 50 Mo** |
| `src/components/features/CourseCard.tsx` | modifié |
| `src/data/parcours.ts` | modifié (58 lignes) |
| `src/lib/subjectProgress.ts` | modifié (**202 lignes**) |
| `package.json` | modifié (1 ligne) |
| `PROMPT-07g-securisation-git.md` | nouveau, **à la racine du dépôt** |

## Objectif

Trois choses, dans cet ordre :

1. Mettre le dépôt au propre et commiter le travail en cours en **commits thématiques séparés**
   (convention du projet, voir `git log`).
2. Ajouter les **en-têtes de sécurité HTTP** dans `netlify.toml`.
3. Pousser sur `main` et vérifier que le déploiement Netlify est effectif et que les en-têtes sont
   bien servis.

---

## Étape 1 — Audit avant de commiter quoi que ce soit

**Ne commite rien avant d'avoir rendu compte de ces cinq points.** Chacun est un piège identifié,
pas une formalité.

### 1.1 Les deux gros diffs sont-ils intentionnels ?

`src/lib/subjectProgress.ts` change de **202 lignes** et `src/data/parcours.ts` de **58 lignes**.
C'est beaucoup pour un chantier d'images.

Le projet a Prettier configuré (`.prettierrc.json`, `printWidth: 100`) mais a **explicitement
décidé de ne pas reformater le dépôt** (chantier 7.4) : 163 fichiers ne respectent pas le style
par défaut, et `npm run format` ne doit être lancé que dans un commit dédié.

Lance `git diff --stat -w src/lib/subjectProgress.ts src/data/parcours.ts` (l'option `-w` ignore
les espaces). Si le diff s'effondre à quelques lignes, **c'est un reformatage accidentel** :
sépare-le dans son propre commit de formatage, ou annule-le. Sinon, décris ce qui a changé
fonctionnellement.

### 1.2 Le dossier `photo/` — 50 Mo, point d'arrêt

30 fichiers, 50 Mo, soit ~1,7 Mo par image : ce sont des originaux pleine résolution.

**Un fichier commité entre définitivement dans l'historique Git.** Le supprimer plus tard n'allège
rien — il faut réécrire l'historique. Pour un dépôt dont le bundle applicatif fait 257 Ko, 50 Mo
de sources est un choix qui s'assume une seule fois.

Rends compte de :

- le poids et le format exact de chaque fichier ;
- s'il existe une trace de **provenance et de licence** pour chacun. La charte
  (`docs/CHARTE-LECONS.md`, décision J11) prévoit des archives sous licence libre pour les figures
  du XXᵉ siècle, avec **attribution obligatoire**. Une photo sans provenance tracée ne doit pas
  être commitée.

Puis propose l'une des trois voies, avec ta recommandation :

| Voie | Effet |
|---|---|
| **A** — réduire les sources (≤ 1600 px, ~300 Ko chacune) puis commiter | ~10 Mo au lieu de 50, sources conservées et régénérables. Cohérent avec `brand/` qui héberge déjà la source de marque |
| **B** — `.gitignore` le dossier, ne versionner que `src/assets/` | Dépôt léger, mais les sources ne survivent qu'en local — le jour où il faut régénérer, elles ont disparu |
| **C** — commiter tel quel | 50 Mo irréversibles dans l'historique |

**N'exécute rien sur ce point sans validation explicite.**

### 1.3 `PROMPT-07g-securisation-git.md` est à la racine

Tous les autres documents de ce type vivent dans `docs/`. Déplace-le en `docs/`, sauf raison
contraire que tu identifierais en le lisant.

### 1.4 Le fichier de provenance des images

Vérifie s'il existe un fichier recensant, pour chaque illustration de Personnalités, son origine
(générée pour le projet / archive sous licence libre) et son attribution le cas échéant. S'il
n'existe pas, signale-le : il devra être écrit avant la mise en ligne des images, pas après.

### 1.5 L'état vert

Lance et rends compte, dans cet ordre :

```
npm run validate
npm test
npm run typecheck
npm run build
```

**Si l'une des quatre échoue, arrête-toi et rends compte.** Ne commite pas par-dessus une erreur :
la CI (`.github/workflows/ci.yml`) enchaîne exactement ces quatre étapes et bloquera de toute
façon.

---

## Étape 2 — Commits thématiques

Un commit = un sujet. Découpage proposé, à ajuster selon ce que l'audit a révélé :

1. **Pipeline de génération des illustrations de cours** — `scripts/generate-course-images.mjs`,
   `src/lib/courseImages.ts`, `src/lib/courseImages.test.ts`, la ligne de `package.json`.
2. **Illustrations Personnalités** — `src/assets/cours/personnalites/` et les documents
   `docs/contenu personnalites/*.md` liés aux images.
3. **Affichage** — `src/components/features/CourseCard.tsx`, si le changement est fonctionnel.
4. **Parcours et progression de matière** — `src/data/parcours.ts`, `src/lib/subjectProgress.ts`,
   **uniquement si les changements sont fonctionnels**. Si c'est du reformatage, commit séparé et
   nommé comme tel.
5. **Rangement** — déplacement de `PROMPT-07g-securisation-git.md` vers `docs/`.
6. **En-têtes de sécurité** — `netlify.toml` (étape 3).

Messages de commit : impératif, en français, sans accent (c'est la convention observable dans
`git log`), une ligne de sujet + un corps expliquant le **pourquoi** quand ce n'est pas évident.

---

## Étape 3 — En-têtes de sécurité HTTP

`netlify.toml` ne contient aujourd'hui qu'un en-tête, sur le `Content-Type` du manifeste. Ajoute
un bloc `[[headers]]` pour `/*`.

### Ce qu'il faut ajouter

```toml
[[headers]]
  for = "/*"
  [headers.values]
    Strict-Transport-Security = "max-age=31536000; includeSubDomains; preload"
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "DENY"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "camera=(), microphone=(), geolocation=(), payment=(), usb=()"
    Content-Security-Policy = "default-src 'self'; img-src 'self' data: blob:; style-src 'self' 'unsafe-inline'; script-src 'self'; font-src 'self'; connect-src 'self'; manifest-src 'self'; worker-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'; form-action 'self'; upgrade-insecure-requests"
```

### Les justifications, à ne pas contourner sans réfléchir

- **`font-src 'self'` suffit** parce que les polices ont été auto-hébergées au chantier 7.5 et que
  le CDN Google a été retiré. C'est le bénéfice concret de ce travail : la CSP n'a besoin
  d'autoriser **aucune origine externe**.
- **`style-src` garde `'unsafe-inline'`** : Vite injecte des styles en ligne et l'application
  utilise des attributs `style=`. Le retirer casse le rendu. C'est un assouplissement assumé, pas
  un oubli.
- **`worker-src 'self'`** est nécessaire au service worker de la PWA (`vite-plugin-pwa`).
- **`frame-ancestors 'none'`** fait doublon avec `X-Frame-Options`, volontairement : le premier
  est la forme moderne, le second couvre les navigateurs anciens.
- **`Strict-Transport-Security` avec `preload`** : le domaine `.netlify.app` sert déjà en HTTPS.
  Note que `preload` engage une soumission au préchargement HSTS — si tu prévois un jour un
  sous-domaine sans HTTPS, retire `includeSubDomains; preload`.

### Vérification obligatoire avant de pousser

Une CSP mal calibrée casse une application en silence — le site se charge, et les écrans sont
blancs.

```
npm run build
npm run preview
```

Ouvre le site en local, **console du navigateur ouverte**, et parcours au minimum : le fil Home
(swipe), la Biblio (« À la une », recherche), un cours complet avec son quiz, le Profil.
**Zéro violation CSP dans la console.** Rends compte de ce que tu as vu. Si une violation
apparaît, corrige la directive concernée en expliquant pourquoi, plutôt que d'élargir la CSP au
hasard.

---

## Étape 4 — Push et contrôle du déploiement

1. `git push origin main` — les 7 commits d'avance partent avec les nouveaux.
2. Netlify redéploie automatiquement. Attends la fin du build.
3. Vérifie que les en-têtes sont bien servis :

```
curl -sI https://sankofaa.netlify.app/ | grep -iE "strict-transport|content-security|x-frame|x-content-type|referrer-policy|permissions-policy"
```

Les six doivent apparaître. **Netlify n'applique pas les `[[headers]]` aux erreurs 404 ni à
certains fichiers servis depuis le CDN** — si l'un manque, dis-le plutôt que de le supposer
appliqué.

4. Ouvre `https://sankofaa.netlify.app/` et confirme que le site fonctionne et reflète bien les
   lots 1 à 3 d'Histoire.

---

## Ce qu'il ne faut pas faire

- **Ne pas lancer `npm run format`** sur l'ensemble du dépôt. Décision explicite du chantier 7.4.
- **Ne pas modifier `src/data/courses/*.ts`** — ce prompt ne touche pas au contenu éditorial.
- **Ne pas toucher aux identifiants de leçon ni au schéma de `UserProgress`** : la version de
  persistance reste à 7, aucune migration n'est prévue dans ce lot.
- **Ne pas commiter le dossier `photo/`** avant validation explicite du point 1.2.
- **Ne pas élargir la CSP** pour faire taire une erreur sans comprendre son origine.
- **Ne pas forcer le push** (`--force`), jamais, sur `main`.

## Rends compte à la fin

- Le découpage des commits réellement effectué, avec les messages.
- Le résultat des quatre commandes de l'étape 1.5.
- Ce que l'audit a révélé sur les points 1.1 à 1.4, et les décisions prises.
- Le résultat du `curl` de l'étape 4.
- Ce qui reste ouvert.
