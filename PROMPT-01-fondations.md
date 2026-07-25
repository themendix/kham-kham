# PROMPT 01 — FONDATIONS DU PROJET « SANKOFA »

> **Comment l'utiliser** : ouvre ton dossier de projet dans VS Code, lance Claude Code, et colle le bloc ci-dessous.
> Conseil : joins aussi les 12 captures d'écran du dossier `photo modele/` à Claude Code — il verra la cible visuelle exacte.
> Ce prompt ne construit QUE les fondations. Le contenu complet viendra dans des prompts suivants.

---

## LE PROMPT À COLLER

Tu es un **développeur front-end senior et architecte logiciel**. Nous démarrons un nouveau projet et je veux que tu poses des **fondations propres, documentées et professionnelles**. Travaille de façon méthodique : ce prompt sert uniquement à construire les BASES, pas les fonctionnalités complètes.

### 1. CONTEXTE DU PROJET

Je construis une **application web de culture générale africaine**, à destination du grand public et de la diaspora. Le concept s'inspire d'une application existante nommée « Sophia » (application de micro-apprentissage gamifiée, style Duolingo + fil de cartes à swiper + parcours guidés + forte gamification). Je veux reproduire **la même structure et les mêmes mécaniques**, mais avec une **identité visuelle africaine** et un **contenu 100 % dédié à l'Afrique**.

**Nom de l'application (définitif) : Sankofa.** Le nom vient du concept akan *Sankofa* — « retourner chercher le savoir du passé » — qui incarne exactement la mission de l'app. Utilise ce nom partout : titre de l'app, logo, `name` du `package.json`, `<title>` HTML, textes de l'interface et documentation. Ce n'est pas un placeholder.

L'application repose sur 4 onglets (barre de navigation en bas), identiques à la structure du modèle :
- **Home** : un fil de cartes à swiper (✗ / ✓), chaque carte présente un sujet (catégorie, illustration, titre, accroche).
- **Biblio** : bibliothèque de cours rangés par matière, avec « À la une », « Continue ton apprentissage », « Recommandé pour toi ».
- **Collections** : parcours guidés qui relient plusieurs cours entre eux, avec progression et XP.
- **Profil** : gamification — niveau, rang, streak hebdomadaire 🔥, % de réussite, collection de cartes, radar de maîtrise par matière.

### 2. OBJECTIF DE CE PROMPT (PÉRIMÈTRE STRICT)

Tu dois poser **uniquement les fondations** :
1. Échafauder le projet (init, dépendances, configuration).
2. Mettre en place le **design system** (couleurs, typographies, composants de base).
3. Définir l'**architecture des dossiers**.
4. Définir le **modèle de données** (types TypeScript).
5. Construire la **coquille de l'application** : cadre mobile + navigation à 4 onglets fonctionnelle + les 4 écrans qui affichent un **contenu d'exemple minimal**.
6. Mettre en place l'**état et la persistance** (store + localStorage).
7. Rédiger la **documentation** (README, ARCHITECTURE, DESIGN-SYSTEM, CLAUDE.md).

**Ne construis PAS** : le contenu complet (on se limite à quelques exemples), l'authentification, un back-end, les animations avancées, le système de quiz complet. On verra ça dans les prompts suivants.

### 3. STACK TECHNIQUE (imposée)

- **React 18 + Vite + TypeScript**
- **Tailwind CSS** (dernière version stable — configure le thème selon la méthode de la version installée)
- **React Router** pour les 4 onglets
- **Zustand** avec le middleware `persist` pour l'état + la persistance en `localStorage`
- **Aucun back-end** : toutes les données dans des fichiers `.ts` locaux, la progression utilisateur en `localStorage`
- Approche **mobile-first** : sur desktop, l'app s'affiche dans un cadre type téléphone centré ; sur mobile, plein écran.
- Icônes : `lucide-react`.
- Polices via Google Fonts : **Poppins** (700/800) pour les titres, **Inter** pour le corps.

### 4. IDENTITÉ VISUELLE / DESIGN SYSTEM

Reprends le **style « néo-brutaliste »** du modèle : cartes à contour noir épais, ombre portée nette (sans flou), coins arrondis, typographie ronde et grasse, fond crème. Mais avec une **palette africaine** (terre, ocre, or, vert savane, indigo).

Définis ces tokens (en variables CSS `:root` ET dans le thème Tailwind) :

**Couleurs de base**
- `--cream` (fond) : `#F6EEDD`
- `--ink` (texte/contours) : `#1E1B18`
- `--card` (blanc carte) : `#FFFFFF`

**Accents**
- `--primary` (CTA, terre de Sienne) : `#E24C2B`
- `--gold` (XP) : `#F2B705`
- `--flame` (streak) : `#F27405`
- `--success` (✓) : `#2E8B57`
- `--danger` (✗) : `#E4572E`
- `--indigo` (accent secondaire) : `#2D3A8C`

**Couleurs pastel par matière**
- Histoire → sable/ocre : `#F3D9A4`
- Géographie → vert savane : `#BFE3B0`
- Personnalités → indigo clair : `#C9C3F0`
- Arts & Musique → rose : `#F6C2D0`
- Traditions & Sociétés → terracotta clair : `#F4C3A8`
- Afrique contemporaine → turquoise : `#A9E0DE`

**Style des cartes** : bordure `3px solid var(--ink)`, `border-radius: 20px`, ombre `6px 6px 0 0 var(--ink)`, pas de dégradé de flou.

Crée des **composants UI réutilisables** : `Button`, `Card`, `Tag` (badge de catégorie), `Badge` (XP/streak), `ProgressBar`, `PhoneFrame`, `TopBar`, `BottomNav`.

### 5. ARCHITECTURE DES DOSSIERS

Mets en place cette structure et respecte-la :

```
src/
  main.tsx
  App.tsx
  routes/
    HomeScreen.tsx
    BiblioScreen.tsx
    CollectionsScreen.tsx
    ProfilScreen.tsx
  components/
    layout/    (PhoneFrame, TopBar, BottomNav)
    ui/        (Button, Card, Tag, Badge, ProgressBar)
    features/  (SwipeCard, CourseCard, ParcoursCard, StatCard, StreakTracker, MasteryRadar)
  data/
    categories.ts
    cards.ts
    courses.ts
    parcours.ts
  store/
    useAppStore.ts
  types/
    index.ts
  lib/
    gamification.ts   (calcul XP → niveau/rang, logique de streak)
  styles/
    index.css
docs/
  ARCHITECTURE.md
  DESIGN-SYSTEM.md
CLAUDE.md
README.md
```

### 6. MODÈLE DE DONNÉES (types TypeScript dans `types/index.ts`)

- `Category` : `id`, `name`, `emoji`, `color` (clé de la palette matière).
- `SwipeCard` (fiche du fil Home) : `id`, `categoryId`, `title`, `teaser`, `content`, `emoji` (placeholder d'illustration).
- `Course` : `id`, `categoryId`, `title`, `description`, `lessons: Lesson[]`, `quiz: QuizQuestion[]`, `xp`.
- `Lesson` : `id`, `title`, `content`.
- `QuizQuestion` : `id`, `question`, `options: string[]`, `correctIndex`, `explanation`.
- `Parcours` : `id`, `title`, `description`, `courseIds: string[]`, `xpReward`, `emoji`.
- `UserProgress` : `xp`, `level`, `rank`, `streak { count, lastActiveDate, weekDays }`, `completedCourseIds`, `favoriteIds`, `seenCardIds`, `masteryByCategory` (record catégorie → score 0-100).

### 7. CONTENU DE DÉPART (exemples minimaux, faits réels)

Crée **6 catégories** : Histoire 🏛️, Géographie 🗺️, Personnalités 👤, Arts & Musique 🎶, Traditions & Sociétés 🪘, Afrique contemporaine 🌍.

Crée **6 SwipeCards d'exemple** (une par catégorie), par ex. :
- *L'empire du Mali* (Histoire) — Au XIVe siècle, sous Mansa Moussa, le Mali devint l'un des États les plus riches de l'histoire.
- *Le fleuve Nil* (Géographie) — Le plus long fleuve d'Afrique, environ 6 650 km.
- *Wangari Maathai* (Personnalités) — Première femme africaine à recevoir le prix Nobel de la paix (2004).
- *L'Afrobeat de Fela Kuti* (Arts & Musique) — Genre né au Nigeria dans les années 1970.
- *Le griot* (Traditions) — Gardien de la mémoire, conteur et musicien en Afrique de l'Ouest.
- *La « Silicon Savannah »* (Afrique contemporaine) — Nairobi, l'un des pôles technologiques du continent.

Crée **1 Course d'exemple** : « Les grands empires de l'Afrique de l'Ouest » (Ghana, Mali, Songhaï) avec 3 leçons et un quiz de 3 questions.
Crée **1 Parcours d'exemple** : « Racines : les civilisations africaines » regroupant ce cours, `+125 XP`.

Tu es libre d'ajuster les faits, mais **ils doivent être exacts**.

### 8. LES 4 ÉCRANS À ÉCHAFAUDER

- **Home** : TopBar (logo « Sankofa » + compteur de streak 🔥). En dessous, une `SwipeCard` affichée avec ses boutons ✗ / ✓ et un bouton favori. Le swipe peut être simplifié (les boutons font passer à la carte suivante et incrémentent `seenCardIds`).
- **Biblio** : barre de recherche (visuelle), section « À la une » (le cours d'exemple mis en avant), puis les cours groupés par matière en scroll horizontal, avec `Tag` de couleur.
- **Collections** : titre + sous-titre, puis la liste des `ParcoursCard` avec barre de progression et badge XP.
- **Profil** : carte de niveau/rang, `StreakTracker` (L M M J V S D), deux `StatCard` (cours terminés, % réussite), barre « cartes collectées », et un `MasteryRadar` (hexagone à 6 axes — une version simple/placeholder suffit pour l'instant).

### 9. ÉTAT & PERSISTANCE (`store/useAppStore.ts`)

Store Zustand persistant en `localStorage` contenant `UserProgress` et les actions : `markCardSeen`, `toggleFavorite`, `completeCourse`, `addXp`, `updateStreak`. Mets `lib/gamification.ts` pour convertir l'XP en niveau/rang (ex. paliers 0/100/250/500… ; rangs « Curieux », « Éveillé », « Initié », « Sage »…).

### 10. DOCUMENTATION À PRODUIRE

- **README.md** : présentation, stack, installation (`npm install`, `npm run dev`), structure.
- **docs/ARCHITECTURE.md** : vue d'ensemble, rôle de chaque dossier, flux de données, modèle de données, choix techniques et pourquoi.
- **docs/DESIGN-SYSTEM.md** : tokens de couleurs, typographies, style des composants, règles visuelles.
- **CLAUDE.md** : contexte du projet pour toute future session (vision, conventions, périmètre déjà fait, prochaines étapes). Objectif : qu'une autre session d'IA puisse reprendre immédiatement.

### 11. FAÇON DE TRAVAILLER (important)

- **Commence par me proposer le plan** (arborescence + liste des fichiers que tu vas créer) et attends ma validation avant d'écrire le code.
- Ensuite, échafaude proprement, avec du code **typé, commenté et lisible**.
- **Documente au fur et à mesure**, pas à la fin.
- Reste dans le périmètre : **fondations seulement**, pas le contenu complet.
- À la fin, vérifie que `npm run dev` démarre sans erreur, puis fais-moi un **récapitulatif** : ce qui est en place, comment lancer, et les prochaines étapes suggérées (Phase 2).

**Livrable attendu (definition of done)** : un projet qui se lance, avec les 4 onglets navigables affichant le contenu d'exemple au bon style, un store persistant fonctionnel, et la documentation complète.
