# Composant StoryHero et Pages Rencontre

**Branch:** `feature/story-hero-rencontre-pages`
**Description:** Création d'un composant StoryHero flexible et des pages dynamiques /rencontre/[name] avec données JSON

## Goal
Créer un écosystème complet avec un composant StoryHero entièrement customisable et des pages dynamiques pour présenter différentes histoires/rencontres. Le composant aura une flexibilité totale (image, badge, titre, description) et les données seront gérées via JSON.

## Implementation Steps

### Step 1: Création du composant StoryHero avec flexibilité totale
**Files:** 
- `components/sections/StoryHero.tsx`
- `components/sections/index.ts`

**What:** 
Créer un composant React TypeScript avec props complètes pour customiser l'image de fond, le badge, le titre multi-ligne, et la description. Interface TypeScript robuste avec props optionnelles et valeurs par défaut.

**Testing:** 
- Vérifier le rendu avec différentes combinaisons de props
- Tester l'affichage d'images externes et locales
- Valider la responsive mobile/desktop

### Step 2: Création des données JSON et page dynamique
**Files:**
- `lib/data/rencontres.ts`
- `app/rencontre/[name]/page.tsx`

**What:**
Créer un système de données JSON pour les différentes rencontres et une page dynamique Next.js qui utilise StoryHero avec les données appropriées selon le paramètre [name].

**Testing:**
- Vérifier le routage `/rencontre/histoire-passion`
- Tester le chargement des données JSON
- Valider l'intégration StoryHero + données
- Confirmer la gestion des erreurs (rencontre inexistante)