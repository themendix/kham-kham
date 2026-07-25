# PROMPT 07e — ÉCHELLE, PERFORMANCE & ACCESSIBILITÉ (PHASE 7, LOT 5) — SANKOFA

> **Comment l'utiliser** : dans VS Code, ouvre le projet Sankofa, lance Claude Code, puis colle le bloc ci-dessous.
> **Pré-requis** : lots 1 à 4 (PROMPT-07a à 07d) terminés — donc tests et CI en place pour détecter les régressions.
> **Périmètre** : rendre 94 cours navigables et l'application utilisable sur réseau contraint. **Lot fractionnable** en 3 sous-lots (5a navigation, 5b performance, 5c accessibilité) si le volume est trop important pour une seule session.

---

## LE PROMPT À COLLER

Tu es un **développeur front-end senior**, spécialiste de la performance web et de l'accessibilité. Nous poursuivons la **Phase 7 « Consolidation »** du projet **Sankofa** (React 18 + Vite + TypeScript + Tailwind v4 + Zustand, aucun back-end, application 100 % statique).

**Le contexte qui commande tout.** La cible de Sankofa est le grand public africain et la diaspora : trafic majoritairement **mobile, sur réseau contraint**. Or l'application sert aujourd'hui un **bundle JavaScript unique de ~641 Ko** (tout le catalogue importé statiquement) et **8 Mo d'illustrations**, sans mode hors-ligne. Ce n'est pas un détail d'optimisation : c'est une condition d'usage.

Par ailleurs, l'écran de matière rend **54 cours d'un seul bloc** et la recherche **ne gère pas les accents** — « senegal » ne trouve pas « Sénégal ».

### 0. AVANT D'ÉCRIRE LA MOINDRE LIGNE

Lis : `docs/PHASE-7-CONSOLIDATION.md` (sections 1.4, 1.5 et chantier 7.5), `CLAUDE.md`, `docs/ARCHITECTURE.md`, `docs/DESIGN-SYSTEM.md`, `vite.config.ts`, `index.html`, `src/App.tsx`, `src/routes/BiblioScreen.tsx`, `src/routes/CategoryScreen.tsx`, `src/components/features/CourseCard.tsx`, `src/lib/courseImages.ts`, `src/data/courses.ts`.

Puis **établis une mesure de départ et présente-la-moi** : `npm run build` avec la taille de chaque chunk, poids total des assets, et un rapport **Lighthouse mobile** (Performance, Accessibilité, Bonnes pratiques, SEO) sur le build de production. **Sans mesure initiale, on ne saura pas si le lot a servi à quelque chose.**

### 1. OBJECTIF (PÉRIMÈTRE STRICT)

**5a — Navigation à l'échelle** : recherche, écran de matière, index Géographie.
**5b — Performance** : découpage du bundle, images, PWA hors-ligne, polices.
**5c — Accessibilité** : contrastes, focus, alternative clavier au swipe, ARIA du quiz.

**Ne PAS faire dans ce lot** : ajouter du contenu, modifier la gamification ou le store, refondre le design system, changer l'identité visuelle. On optimise et on rend navigable **l'existant**.

### 2. SOUS-LOT 5a — NAVIGATION À L'ÉCHELLE

**Recherche (M2) — correctif à fort effet, coût faible, à faire en premier.**
- Normalisation Unicode (`NFD` + suppression des diacritiques) des deux côtés de la comparaison : la recherche devient insensible aux accents et à la casse.
- Étends le champ de recherche à `description` et, si le coût reste raisonnable, au contenu des leçons — avec indication de **où** la correspondance a été trouvée.
- Affiche la matière de chaque résultat : sur 94 cours, « Mali » peut être un cours d'Histoire ou une fiche de Géographie.

**Écran de matière (M1).**
- Tri alphabétique par défaut, et **sous-groupement par région** pour la Géographie (Afrique du Nord, Ouest, Centrale, Est, Australe — l'ordre actuel des fiches suit déjà cette logique, exploite-le au lieu de le réinventer).
- Affichage progressif (« Voir plus ») ou virtualisation au-delà d'un seuil : ne pas monter 54 cartes d'un coup.
- Conserve le tableau de bord de matière existant (niveau, barre de progression, filtres Tout / À faire / En cours / Terminé) — tu l'améliores, tu ne le remplaces pas.

**Index Géographie (M3).**
- Un accès direct par pays : index alphabétique (à défaut de carte interactive, hors périmètre). C'est le mode de consultation naturel d'un catalogue de 54 pays.

### 3. SOUS-LOT 5b — PERFORMANCE

**Découpage du bundle (P1).**
- `React.lazy` + `Suspense` par route.
- Surtout : **découpe le catalogue**. `src/data/courses.ts` importe statiquement Histoire et Géographie, donc tout le contenu est chargé au premier rendu. Charge les données de matière **à la demande**.
- **Contrainte forte** : le store (`useAppStore`) importe `COURSES` et `CATEGORIES` pour `pickNextFeaturedLesson`. Un découpage naïf casserait cette logique ou la rendrait asynchrone. **Propose-moi ta stratégie avant de coder** : index léger de métadonnées chargé d'emblée (id, titre, matière, nombre de leçons) et contenu des leçons chargé à la demande, ou autre approche que tu justifieras.
- Objectif indicatif : **diviser par 3 le JavaScript du chargement initial**.

**Images (P2).**
- Variantes de résolution + `srcset` / `sizes`. `loading="lazy"` est déjà présent sur `CourseCard` — conserve-le.
- Vérifie le budget par image (certaines dépassent 170 Ko) et propose une cible.
- Ne casse pas la convention `courseId` = nom de fichier, ni la règle de cadrage `LEFT_FLAG_COURSE_IDS` de `src/lib/courseImages.ts`.

**PWA hors-ligne (P4) — le meilleur rapport bénéfice/coût du lot.**
- Service worker : mise en cache du shell applicatif, des données de catalogue et des illustrations déjà consultées.
- L'application doit se charger **en mode avion** après une première visite. Le `manifest.webmanifest` existe déjà (lot 1) : complète l'installabilité.
- Stratégie de mise à jour explicite : l'utilisateur ne doit pas rester bloqué sur une version périmée.
- **Attention** : la progression vit dans `localStorage`. Vérifie qu'aucune stratégie de cache n'interfère avec elle.

**Polices (P5).** Auto-hébergement ou chargement non bloquant des polices actuellement servies par le CDN Google dans `index.html`.

### 4. SOUS-LOT 5c — ACCESSIBILITÉ

- **Contrastes** : audite la palette néo-brutaliste (terre/ocre/or/vert savane/indigo) contre WCAG AA. Si un token échoue, **propose une correction dans `src/styles/index.css`** — pas de couleur codée en dur dans les composants.
- **Focus clavier** visible et cohérent sur tous les éléments interactifs, y compris les cartes cliquables et les cœurs de favori.
- **Swipe** : les boutons ✗ / ✓ existent déjà comme voie alternative — garantis qu'ils sont pleinement atteignables et actionnables au clavier, correctement libellés pour un lecteur d'écran, et **annonce l'alternative** dans l'interface. `prefers-reduced-motion` est déjà respecté via `useReducedMotion` : vérifie que ça tient sur les nouveaux écrans.
- **Quiz** : rôles et attributs ARIA (groupe de réponses, état sélectionné, annonce du résultat et de l'explication après validation).
- **Navigation** : structure de titres cohérente, `alt` d'images pertinents (aujourd'hui `alt={course.title}`, ce qui est correct), langue du document.

### 5. FAÇON DE TRAVAILLER

- **Commence par la mesure de départ (§0) et ton plan**, sous-lot par sous-lot, avec l'ordre que tu recommandes et **attends ma validation**. Si tu juges le lot trop volumineux pour une seule session, **dis-le** et propose un découpage 5a / 5b / 5c.
- **Mesure après chaque sous-lot** et compare à la référence. Aucun gain annoncé sans chiffre.
- Ne casse aucun test du lot 4 : `npm test` reste vert à chaque étape.
- Respecte les conventions : tokens du design system centralisés, composants de présentation sans accès au store.
- Mets à jour `docs/ARCHITECTURE.md` (découpage du bundle, chargement des données, service worker) et `docs/DESIGN-SYSTEM.md` (corrections de contraste éventuelles) et `CLAUDE.md`.
- À la fin : tableau **avant / après** (taille des chunks, poids des assets, scores Lighthouse) et **récapitulatif**.

**Definition of done** : « senegal » trouve « Sénégal » · l'écran Géographie reste fluide sur mobile d'entrée de gamme · le JavaScript initial est nettement réduit, chiffres à l'appui · l'application se charge hors ligne après une première visite · **Lighthouse mobile ≥ 90 en Performance et en Accessibilité** · aucun test en échec, aucune régression fonctionnelle.
