# PROMPT 07a-bis — INTÉGRATION DU LOGO SANKOFA — SANKOFA

> **Comment l'utiliser** : dans VS Code, ouvre le projet Sankofa, lance Claude Code, puis colle le bloc ci-dessous.
> **Pré-requis** : lot 07a terminé (`public/`, `manifest.webmanifest`, CI, Netlify en place).
> **Contexte** : le logo définitif a été déposé dans `brand/`. La chaîne de génération (`scripts/generate-icons.mjs`), l'entrée `maskable` du manifest et le badge du `TopBar` ont **déjà été préparés** — ce prompt les exécute, les vérifie et étend le logo au reste de l'application.
> **Périmètre** : identité visuelle uniquement. Aucune logique métier.

---

## LE PROMPT À COLLER

Tu es un **développeur front-end senior**, attentif au détail visuel et à la cohérence d'une identité de marque sur toutes ses surfaces. Nous intégrons le **logo définitif de Sankofa** (React 18 + Vite + TypeScript + Tailwind v4, application 100 % statique).

Le logo : **motif or sur fond noir** — silhouette du continent africain à motifs, profil de visage, ampoule, livre ouvert. Il est déposé dans `brand/` (source de référence, jamais retouchée à la main). L'interface, elle, est **crème et néo-brutaliste** (contours noirs épais, ombres portées dures). **Le contraste entre l'icône sombre et l'interface claire est assumé** : ne « corrige » pas le logo pour l'éclaircir, ne le détoure pas, ne change pas la palette de l'application.

### 0. AVANT D'ÉCRIRE LA MOINDRE LIGNE

Lis : `brand/LISEZ-MOI.md`, `scripts/generate-icons.mjs`, `public/manifest.webmanifest`, `index.html`, `CLAUDE.md` (§ Livraison), `docs/DESIGN-SYSTEM.md`, `src/components/layout/TopBar.tsx`, `src/components/layout/Sidebar.tsx`, `src/components/layout/AppShell.tsx`, `src/components/layout/BottomNav.tsx`.

Puis exécute :

```
npm install
npm run icons
```

et **rends-moi compte** : la liste des fichiers générés dans `public/`, leur poids, et l'avertissement de résolution si le script en émet un.

### 1. VÉRIFICATION DE LA GÉNÉRATION — À FAIRE AVANT TOUTE INTÉGRATION

Le script rogne le fond blanc de la source, remet le motif au carré sur le fond sombre et rééchantillonne. **Ouvre réellement les fichiers produits et regarde-les** — ne te contente pas de constater qu'ils existent :

- `favicon-16x16.png` : à 16 px, l'ampoule et le livre risquent de se brouiller en une tache dorée. **Dis-moi honnêtement si c'est lisible.** Si ça ne l'est pas, propose une **variante simplifiée réservée aux petites tailles** (motif épuré, contraste renforcé), plutôt qu'une réduction brutale du motif complet.
- `apple-touch-icon.png`, `icon-192.png`, `icon-512.png` : aucun liseré blanc résiduel dans les angles (signe d'un rognage incomplet des coins arrondis), pas de bord coupé.
- `icon-maskable-512.png` : le motif doit tenir dans la zone sûre (80 %) — simule le masque circulaire d'Android et vérifie que **le livre en bas et le sommet du continent ne sont pas rognés**.
- `og-image.png` : logo et texte alignés, aucun débordement, texte lisible en aperçu réduit.

**Réserve connue** : la source actuelle est de faible définition. Si `icon-512.png` et `og-image.png` sont visiblement flous, **signale-le explicitement** dans ton compte rendu — c'est un défaut de source, à corriger en déposant un fichier ≥ 1024 px ou un SVG dans `brand/` puis en relançant `npm run icons`. **N'essaie pas de compenser par un filtre de netteté agressif**, qui produirait des halos.

### 2. SURFACES À COUVRIR DANS L'APPLICATION

Le badge du `TopBar` a déjà été câblé sur `/icon-192.png`. **Vérifie-le d'abord dans le navigateur** (taille, arrondi, bordure `--ink`, ombre, alignement avec le mot « Sankofa », rendu sur mobile et sur desktop), puis complète les surfaces manquantes.

**Fais d'abord l'inventaire et présente-le-moi** : recense **toutes** les surfaces où la marque devrait apparaître, en distinguant celles qui existent déjà de celles qui manquent. Points à examiner au minimum :

- **`Sidebar`** (desktop) : elle ne contient aujourd'hui que les 4 liens de navigation, sans aucune marque, alors que le `TopBar` porte le logo. Regarde le rendu réel et dis-moi si un rappel de marque y est justifié — ou si ce serait une redondance visuelle. **Argumente, ne présume pas.**
- **`BottomNav`** (mobile) : vérifie qu'aucun ajout n'y est pertinent (l'espace y est compté).
- **Écrans d'état vide** : « Tu as tout parcouru 🎉 » en Biblio, page Favoris vide, historique de quiz vide. Un logo discret peut y remplacer une zone nue — à évaluer écran par écran, sans le plaquer partout.
- **Écran de chargement / premier rendu** : l'application affiche actuellement un blanc avant le montage de React. Un court écran de démarrage aux couleurs de la marque, directement dans `index.html` (donc affiché **avant** que le JavaScript ne soit chargé), améliorerait nettement la perception sur réseau lent — cible réelle du projet. **Propose-le, garde-le sobre**, et assure-toi qu'il disparaît proprement au montage.
- **Page 404 / route inconnue** : vérifie si une route de repli existe ; sinon, signale-le sans l'implémenter (hors périmètre).
- **`README.md`** : le logo en en-tête, avec le lien vers l'application en ligne.

### 3. RÈGLES D'INTÉGRATION

- **Une seule source pour le logo dans l'app** : les fichiers de `public/`, servis par chemin absolu (`/icon-192.png`…). **Ne duplique pas** le logo dans `src/assets/`, et ne l'inline pas en base64 dans un composant.
- **Sobriété.** Le logo ne doit pas apparaître deux fois sur le même écran. En cas de doute entre « ajouter » et « ne pas ajouter », **ne pas ajouter** — et me dire pourquoi.
- **Design system respecté** : bordures `--ink`, ombres et rayons issus des tokens de `src/styles/index.css`. **Aucune couleur codée en dur** ; si l'or du logo doit devenir un token (par exemple pour un futur accent de marque), **propose-le comme token** plutôt que comme valeur littérale.
- **Accessibilité** : le logo est **décoratif** partout où le mot « Sankofa » l'accompagne déjà → `alt=""` et `aria-hidden="true"`, pour éviter que le lecteur d'écran n'annonce deux fois la marque. Là où il apparaît **seul**, il porte l'information → `alt="Sankofa"`.
- **Performance** : attributs `width` et `height` explicites sur chaque `<img>` (pas de décalage de mise en page au chargement), `loading="lazy"` sauf pour le logo du `TopBar`, visible d'emblée.
- **Ne touche pas** à `theme_color` (`#E24C2B`) ni à `background_color` (`#F6EEDD`) du manifest : ils sont alignés sur l'interface, pas sur le fond de l'icône. C'est volontaire.

### 4. VÉRIFICATIONS FINALES

1. `npm run dev` : logo net dans le `TopBar`, en mobile comme en desktop, sans décalage de mise en page.
2. **Onglet du navigateur** : le favicon s'affiche, y compris après vidage du cache.
3. `npm run build` puis `npm run preview` : toutes les images se chargent, aucune 404 dans la console ni dans l'onglet réseau.
4. **Aperçu de partage** : vérifie que `og:image` et `og:url` dans `index.html` pointent bien vers des **URL absolues** de l'adresse publique (une URL relative casse l'aperçu sur la plupart des messageries).
5. **Installation PWA** : installe l'application depuis le navigateur et regarde l'icône obtenue sur l'écran d'accueil — c'est le seul test réel de l'icône `maskable`.
6. Aucune régression visuelle sur les 4 écrans principaux.

### 5. FAÇON DE TRAVAILLER

- **Commence par exécuter §0, vérifier §1 et me présenter l'inventaire de §2 avec tes recommandations** (ce que tu ajoutes, ce que tu écartes et pourquoi). **Attends ma validation avant de modifier des composants.**
- Code typé, commenté en français, conforme aux conventions du projet (composants de présentation sans accès au store).
- **Documente** : mets à jour `brand/LISEZ-MOI.md` si la chaîne de génération évolue, la section « Logo » de `CLAUDE.md` (surfaces couvertes), et `docs/DESIGN-SYSTEM.md` (usage de la marque : tailles, marges, ce qu'on ne fait pas — ne pas déformer, ne pas recolorer, ne pas incliner le motif).
- Commit dédié, message explicite.
- À la fin : `npm run typecheck` et `npm run build` sans erreur, plus un **récapitulatif** des surfaces couvertes et des points qui restent à améliorer.

**Definition of done** : le logo est généré depuis `brand/` par `npm run icons` et présent sur toutes les surfaces retenues · le favicon est lisible à 16 px, ou une variante simplifiée est proposée · l'icône `maskable` n'est pas rognée à l'installation · l'aperçu de partage fonctionne avec des URL absolues · aucune duplication du fichier logo dans le dépôt · aucune régression visuelle · documentation à jour.
