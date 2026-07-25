# Sankofa

[![CI](https://github.com/themendix/kham-kham/actions/workflows/ci.yml/badge.svg)](https://github.com/themendix/kham-kham/actions/workflows/ci.yml)

**Sankofa** est une application web de culture générale africaine, gamifiée façon micro-apprentissage : fil de cartes à swiper, bibliothèque de cours, parcours guidés et suivi de progression (XP, niveau, streak).

Le nom vient du concept akan *Sankofa* — « retourner chercher le savoir du passé ».

## Stack technique

- **React 18** + **Vite** + **TypeScript**
- **Tailwind CSS v4** (configuration CSS-first via `@theme`, plugin `@tailwindcss/vite`)
- **React Router** pour la navigation à 4 onglets
- **Zustand** (+ middleware `persist`) pour l'état et la persistance `localStorage`
- **lucide-react** pour les icônes
- Aucun back-end : tout le contenu vit dans `src/data/*.ts`, seule la progression utilisateur est persistée côté client

## Installation

```bash
npm install
npm run dev
```

L'application est accessible sur `http://localhost:5173`. C'est un vrai site web responsive : navigation en sidebar à gauche sur desktop, en barre d'onglets fixée en bas sur mobile, contenu qui utilise toute la largeur disponible (grilles de cours et de parcours sur grand écran).

Autres commandes :

```bash
npm run build      # build de production (tsc + vite build)
npm run typecheck  # vérification TypeScript seule
npm run preview    # sert le build de production en local
```

## Structure du projet

```
src/
  routes/       les 4 écrans (Home, Biblio, Collections, Profil)
  components/
    layout/     AppShell, TopBar, Sidebar (desktop), BottomNav (mobile)
    ui/         Button, Card, Tag, Badge, ProgressBar
    features/   SwipeCard, CourseCard, ParcoursCard, StatCard, StreakTracker, MasteryRadar
  data/         contenu statique (catégories, cartes, cours, parcours)
  store/        store Zustand persistant (progression utilisateur)
  types/        modèle de données TypeScript
  lib/          logique de gamification (XP → niveau/rang, streak)
  styles/       design system (tokens Tailwind v4)
docs/
  ARCHITECTURE.md    vue d'ensemble technique et flux de données
  DESIGN-SYSTEM.md   tokens de couleurs, typographies, style des composants
CLAUDE.md            contexte projet pour les futures sessions IA
```

Voir [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) et [docs/DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md) pour le détail.

## État actuel du projet

Cette base pose les **fondations** : échafaudage, design system, architecture, modèle de données, navigation à 4 onglets fonctionnelle avec contenu d'exemple minimal, et store persistant. Le contenu complet, le système de quiz interactif et les animations avancées sont prévus dans les phases suivantes (voir [CLAUDE.md](CLAUDE.md)).
