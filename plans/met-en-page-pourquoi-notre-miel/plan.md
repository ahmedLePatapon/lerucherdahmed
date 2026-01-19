# Mise en page – Pourquoi notre miel

**Branch:** `mise-en-page-pourquoi-notre-miel`
**Description:** Création de la page “Pourquoi notre miel” avec contenu structuré, composants réutilisables et SEO optimisé.

## Goal
Mettre en place une page dédiée “Pourquoi notre miel” en s’appuyant sur le contenu structuré du fichier info.md, en utilisant des composants réutilisables et une logique pilotée par des données JSON, pour une UX claire, SEO-friendly et facilement maintenable. Le design suivra celui de la page /histoire-passion.

## Implementation Steps

### Step 1: Préparer le contenu structuré (JSON)
**Files:** lib/data/whyOurHoneyContent.ts (ou .js)
**What:** Extraire et structurer le contenu de info.md dans un fichier d’export unique (format JSON/TS), prêt à être importé dans la page et les composants.
**Testing:** Vérifier l’import et la validité du contenu dans un composant de test.

### Step 2: Créer la page /pourquoi-notre-miel
**Files:** app/pourquoi-notre-miel/page.tsx
**What:** Créer la page Next.js, importer le contenu structuré, assembler les sections principales avec les composants existants (HeroSection, EngagementSection, ValuesSection, DifferenceSection, MethodSection, FinalCTASection), en reprenant le design de /histoire-passion.
**Testing:** Accéder à /pourquoi-notre-miel et vérifier le rendu global, la présence de chaque section et l’intégration du contenu.

### Step 3: Adapter ou créer les composants de section manquants
**Files:** components/sections/ (ajouts ou adaptations selon besoins)
**What:** Vérifier la présence des composants nécessaires (ex : EngagementSection, DifferenceSection, MethodSection, FinalCTASection). Créer ou adapter ceux qui manquent, en respectant la structure de props et le style global du site, en cohérence avec /histoire-passion.
**Testing:** Tester chaque section indépendamment avec des données fictives, puis valider l’intégration sur la page finale.

### Step 4: Intégrer les icônes et styles spécifiques
**Files:** components/cards/ValuesSection.tsx, styles globaux si besoin
**What:** S’assurer que les icônes (Leaf, MapPin, Heart) sont bien importées et utilisées, harmoniser les styles pour cohérence visuelle avec le reste du site et le design de /histoire-passion.
**Testing:** Vérifier l’affichage des icônes et la cohérence graphique sur desktop et mobile.

### Step 5: Optimisation SEO et accessibilité
**Files:** app/pourquoi-notre-miel/page.tsx, lib/data/whyOurHoneyContent.ts
**What:** Ajouter les balises SEO (title, meta description), structurer les titres (H1, H2…), vérifier l’accessibilité (aria-labels, contrastes, navigation clavier).
**Testing:** Contrôler le rendu SEO (balises dans le head), tester l’accessibilité avec un outil dédié.

### Step 6: Tests finaux et revue UX
**Files:** app/pourquoi-notre-miel/page.tsx, components/sections/*
**What:** Relire la page, ajuster les textes, vérifier la navigation, les liens CTA, la responsivité et la cohérence UX.
**Testing:** Parcourir la page sur différents appareils, cliquer sur tous les liens, relire les textes.
