# PROMPT 04b — MICRO-CORRECTIF : SCROLL VERTICAL SUR LA CARTE — SANKOFA

> **Comment l'utiliser** : dans VS Code, lance Claude Code et colle le bloc ci-dessous. Correctif minimal, une seule ligne de code impactée.

---

## LE PROMPT À COLLER

Petit correctif d'ergonomie mobile sur **Sankofa**. Aujourd'hui, la carte du Home (`src/components/features/SwipeCard.tsx`) porte la classe **`touch-none`** (`touch-action: none`) sur son conteneur glissable. Problème : quand l'utilisateur pose le doigt **sur la carte** pour faire défiler la page (le Home est long), le **scroll vertical est bloqué**, car `touch-action: none` capte tous les gestes.

### Ce que tu dois faire

Dans `SwipeCard.tsx`, sur le `div` glissable (celui qui porte `ref`, `{...handlers}` et la classe `touch-none select-none ...`), **remplace `touch-none` par `touch-pan-y`** (soit `touch-action: pan-y`).

Objectif : laisser le **navigateur gérer le défilement vertical**, tout en conservant la capture du **geste horizontal** par le hook `useSwipeGesture` (qui n'agit que sur l'axe X via les Pointer Events). Ne change **rien d'autre** : ni le hook, ni la logique de swipe, ni les autres composants.

### Vérifications (definition of done)

- Le **swipe horizontal** fonctionne toujours (glisser gauche/droite, estampilles ✓/✗, seuil, envol, retour élastique, boutons ✗/✓).
- Sur mobile (ou en émulation tactile dans les DevTools), on peut désormais **faire défiler la page verticalement** en partant d'un geste sur la carte.
- `npm run typecheck` et `npm run dev` passent **sans erreur**.

Confirme en une phrase le changement effectué.
