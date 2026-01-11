# Intégration du Design - Le Rucher d'Ahmed

**Branch:** `feature/integration-design-html`
**Description:** Intégrer les maquettes HTML dans l'application Next.js avec composants réutilisables et pages complètes.

## Goal

Transformer les 5 pages de design HTML statiques (Accueil, À propos, Nos Miels, Nos Ruchers, Contact) en une application Next.js moderne avec composants React réutilisables, thème Tailwind personnalisé et structure optimisée pour le SEO.

## Implementation Steps

### Step 1: Configuration du thème Tailwind et polices
**Files:** `app/globals.css`, `app/layout.tsx`
**What:** Configurer les couleurs personnalisées (jaune miel #F2B705, vert naturel #6B8E23, etc.), les polices Plus Jakarta Sans via Google Fonts, et activer le dark mode dans Tailwind.
**Testing:** Vérifier que les variables CSS sont disponibles et que les polices se chargent correctement.

### Step 2: Composants UI de base
**Files:** `components/ui/Button.tsx`, `components/ui/Badge.tsx`, `components/ui/Input.tsx`, `components/ui/Card.tsx`
**What:** Créer les composants UI génériques avec variantes (primary, secondary, outline) et props TypeScript typés.
**Testing:** Importer et afficher chaque composant pour vérifier le rendu.

### Step 3: Composants de layout (Header, Footer, Logo)
**Files:** `components/layout/Header.tsx`, `components/layout/Footer.tsx`, `components/layout/Logo.tsx`, `components/layout/MobileMenu.tsx`
**What:** Créer le header avec navigation responsive (menu hamburger mobile), le footer avec newsletter et liens, et le composant Logo réutilisable.
**Testing:** Vérifier la navigation desktop et mobile, le rendu du footer sur toutes les tailles d'écran.

### Step 4: Layout principal et données statiques
**Files:** `app/layout.tsx`, `lib/data/navigation.ts`, `lib/data/products.ts`, `lib/data/testimonials.ts`
**What:** Intégrer Header/Footer dans le layout racine, créer les fichiers de données pour les produits (6 miels), témoignages et liens de navigation.
**Testing:** Naviguer entre les pages et vérifier que le layout persiste.

### Step 5: Page Accueil
**Files:** `app/page.tsx`, `components/sections/HeroSection.tsx`, `components/sections/FeaturesSection.tsx`, `components/sections/ProductsGrid.tsx`, `components/sections/TestimonialsSection.tsx`, `components/cards/ProductCard.tsx`, `components/cards/FeatureCard.tsx`, `components/cards/TestimonialCard.tsx`
**What:** Implémenter la page d'accueil complète avec hero immersif, section "Pourquoi choisir", grille de 3 produits vedettes, section histoire d'Ahmed, et témoignages clients.
**Testing:** Comparer visuellement avec le design HTML, tester le responsive sur mobile/tablette/desktop.

### Step 6: Page Nos Miels
**Files:** `app/nos-miels/page.tsx`, `components/sections/ProductFilters.tsx`
**What:** Créer la page catalogue avec filtres par saison et type de goût, grille de 6 produits avec badges (Nouveau, Best-seller), section avantages du miel artisanal.
**Testing:** Vérifier l'affichage des filtres, le rendu de tous les produits, les badges visibles.

### Step 7: Page À propos
**Files:** `app/a-propos/page.tsx`, `components/sections/GallerySection.tsx`, `components/sections/ProcessSection.tsx`
**What:** Implémenter la page avec l'histoire d'Ahmed, les 3 valeurs/philosophie, le processus apicole en étapes, et la galerie photos.
**Testing:** Vérifier tous les contenus textuels, les images de galerie, le responsive.

### Step 8: Page Nos Ruchers
**Files:** `app/nos-ruchers/page.tsx`, `components/cards/TerroirCard.tsx`
**What:** Créer la page présentant les 2 terroirs (Cherves-Richemont, Saint-Amant-de-Boixe) avec caractéristiques, carte de localisation (image statique ou embed), section CTA.
**Testing:** Vérifier les informations des terroirs, l'affichage de la carte.

### Step 9: Page Contact
**Files:** `app/contact/page.tsx`, `components/forms/ContactForm.tsx`, `app/api/contact/route.ts` (optionnel)
**What:** Implémenter le formulaire de contact (nom, email, sujet, message), afficher les informations de contact (téléphone, email, adresse), intégrer une carte de localisation.
**Testing:** Soumettre le formulaire, vérifier la validation des champs, affichage des infos contact.

### Step 10: SEO et métadonnées
**Files:** `app/layout.tsx`, `app/page.tsx`, `app/a-propos/page.tsx`, `app/nos-miels/page.tsx`, `app/nos-ruchers/page.tsx`, `app/contact/page.tsx`
**What:** Ajouter les métadonnées SEO (title, description, OpenGraph) pour chaque page, configurer les métadonnées partagées dans le layout.
**Testing:** Inspecter les balises meta dans le HTML rendu, tester les previews de partage.

---

## Décisions techniques

| Élément | Décision |
|---------|----------|
| **Images** | Placeholders temporaires (Unsplash/Pexels) |
| **Logo** | Créer un logo SVG simple (icône ruche + texte) |
| **Formulaire contact** | API Route Next.js |
| **Newsletter** | UI uniquement (non fonctionnel pour l'instant) |
| **E-commerce** | Affichage catalogue uniquement (panier pour plus tard) |
| **Carte** | Google Maps Embed |
