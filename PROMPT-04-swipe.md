# PROMPT 04 — GESTE DE SWIPE TACTILE (PHASE 4) — SANKOFA

> **Comment l'utiliser** : dans VS Code, ouvre le projet Sankofa, lance Claude Code, puis colle le bloc ci-dessous.
> **Pré-requis** : Phases 1 à 3 en place. Cette phase est **volontairement étroite** : elle ne concerne QUE le geste de swipe sur la carte du Home. On n'ajoute pas de contenu et on ne touche pas aux autres écrans.

---

## LE PROMPT À COLLER

Tu es un **développeur front-end senior**, spécialiste des interactions gestuelles. Nous continuons le projet **Sankofa** (React 18 + Vite + TypeScript + Tailwind v4 + Zustand). Aujourd'hui, la carte du fil Home (`SwipeCard`) ne se « swipe » pas vraiment : on avance uniquement via les boutons ✗ / ✓. Objectif de cette phase : ajouter un **vrai geste de glissement (drag) tactile et souris**, fluide et naturel — **et rien d'autre**.

### 0. AVANT D'ÉCRIRE LA MOINDRE LIGNE

Lis d'abord : `CLAUDE.md`, `docs/ARCHITECTURE.md`, `docs/DESIGN-SYSTEM.md`, `src/components/features/SwipeCard.tsx`, `src/routes/HomeScreen.tsx`.

Respecte l'existant :
- `SwipeCard` est **présentationnel** (props en entrée, pas d'accès au store). Il reçoit déjà `onPass`, `onLearn`, `onToggleFavorite`, `isFavorite`, et gère en interne l'expansion du contenu (« En savoir plus » / « Replier »).
- Ne change pas la logique d'avancement du paquet dans `HomeScreen` (c'est lui qui incrémente l'index et appelle `advance`) — tu ne fais que **déclencher `onPass` / `onLearn` au bon moment**.
- Aucune couleur codée en dur : indicateurs en `--success` (✓) et `--danger` (✗).

### 1. OBJECTIF (PÉRIMÈTRE STRICT)

Ajouter le **geste de swipe** sur `SwipeCard` :
- glisser la carte horizontalement à la **souris ET au tactile** ;
- **relâcher au-delà d'un seuil** valide la carte (droite = apprendre → `onLearn`, gauche = passer → `onPass`) ;
- **en deçà du seuil**, la carte revient **élastiquement** au centre.

**Ne PAS faire dans cette phase** : ajouter du contenu (cartes, cours), toucher aux autres écrans, changer le store, ajouter l'authentification. Uniquement le geste.

### 2. COMPORTEMENT ATTENDU DU GESTE

- **Suivi du pointeur** : pendant le glissement, la carte suit le doigt/curseur en `translateX`, avec une **légère rotation** proportionnelle au déplacement (effet « carte tenue en main »).
- **Indicateurs visuels** : afficher une estampille **« APPRENDRE ✓ » verte** quand on glisse vers la droite, **« PASSER ✗ » rouge** vers la gauche, avec une **opacité croissante** selon la distance parcourue.
- **Seuil de validation** : si le déplacement dépasse ~**30 % de la largeur de la carte** (ou ~100 px), la carte **s'envole** dans la direction correspondante puis déclenche `onLearn` / `onPass`. Un **flick rapide** (vitesse élevée) valide aussi, même sous le seuil.
- **Retour élastique** : en deçà du seuil et sans flick, la carte **revient au centre** avec une transition douce, sans rien déclencher.
- **Boutons ✗ / ✓** : ils doivent déclencher **la même animation d'envol** que le geste (pas de disparition sèche), puis appeler le callback correspondant.

### 3. CONTRAINTES TECHNIQUES

- **Aucune nouvelle dépendance** : implémente le geste **nativement** avec les **Pointer Events** (`onPointerDown/Move/Up`, `setPointerCapture`) — un seul code pour souris et tactile — et des **transforms CSS**. N'ajoute pas de librairie d'animation.
- **Performance** : pendant le glissement, **ne fais pas de `setState` à chaque `pointermove`** ; manipule le `transform` directement via une `ref` sur l'élément (et, si besoin, `requestAnimationFrame`). Ne « commits » l'état React qu'au relâchement. La carte doit rester fluide (60 fps).
- **Séparation propre** : extrais la logique gestuelle dans un **hook réutilisable** `useSwipeGesture` (dans `src/hooks/` — crée le dossier — ou `src/lib/`), qui renvoie les handlers de pointeur, l'état de drag et la position. `SwipeCard` reste présentationnel et sans accès au store.
- **Tap ≠ drag** : un simple tap sur « En savoir plus » ou sur le bouton favori **ne doit pas** déclencher de swipe. Distingue tap et glissement via un **seuil de mouvement** (ex. < 8 px = tap). L'expansion du contenu et le favori doivent rester parfaitement fonctionnels.
- Empêche la **sélection de texte** et le **scroll de la page** pendant le glissement horizontal (`touch-action`, `user-select`).

### 4. ACCESSIBILITÉ & CONFORT

- **Conserve les boutons** ✗ / ✓ pour qui ne veut pas swiper (ils restent la voie clavier/clic).
- Respecte **`prefers-reduced-motion`** : si l'utilisateur le demande, désactive la rotation et les animations d'envol appuyées (garde un simple fondu/translation minimal).
- Sur desktop, affiche un **curseur `grab` / `grabbing`** pour signaler que la carte est saisissable.

### 5. STYLE

Les estampilles et l'envol doivent rester cohérents avec le design system (contours `--ink`, couleurs `--success` / `--danger`, `font-heading`). L'effet doit être ludique mais soigné, dans l'esprit des cartes néo-brutalistes de Sankofa.

### 6. FAÇON DE TRAVAILLER

- **Commence par me proposer ton plan** (hook créé, modifications de `SwipeCard`, gestion de l'animation d'envol, façon de distinguer tap/drag) et attends ma validation avant de coder.
- Code **typé, commenté, lisible**.
- **Mets à jour la documentation** : `docs/ARCHITECTURE.md` (mention du geste + du hook) et la section « Ce qui est en place / prochaines étapes » de `CLAUDE.md` (déplace « vrai geste de swipe » de *à faire* vers *fait*).
- À la fin : `npm run typecheck` et `npm run dev` **sans erreur**, et un **récapitulatif** de ce qui a changé.

**Definition of done** : sur le Home, je peux **saisir la carte à la souris et au doigt**, la glisser, voir les estampilles ✓ / ✗ apparaître, la **valider en dépassant le seuil** (envol + carte suivante) ou la **relâcher avant le seuil** (retour élastique). Les boutons ✗ / ✓ produisent le même envol. Le dépli « En savoir plus » et le favori fonctionnent toujours. Aucun jank, aucune erreur de type ni de console.
