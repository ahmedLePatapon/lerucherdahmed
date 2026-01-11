# Application Next.js 16 + Tailwind CSS 4 - Le Rucher d'Ahmed

**Branch:** `feat/init-nextjs-app`
**Description:** Création complète d'une application Next.js moderne avec Tailwind CSS pour le site vitrine Le Rucher d'Ahmed

## Goal

Créer une application Next.js 16.1.1 avec TypeScript, Tailwind CSS 4, et le App Router, en convertissant les designs HTML de référence (dossier `design/`) en composants React réutilisables. L'application comprendra 5 pages principales (Accueil, À propos, Nos Miels, Nos Ruchers, Contact) avec une navigation responsive et un design moderne aux couleurs miel (#F2B705) et vert naturel (#6B8E23).

## Décisions Produit

### ✅ Design de Référence
**Dossier : `design/`** - Design cohérent avec palette jaune miel/vert naturel

### ✅ Gestion des Images
**Extraction locale** - Toutes les images seront téléchargées, optimisées, et hébergées dans `/public/images/`

### ✅ Fonctionnalité E-commerce
**Vitrine simple** - Bouton "Commander" redirige vers le formulaire de contact (pas de panier/checkout)

### ✅ Formulaire de Contact
**Backend avec envoi d'emails réels** - API Route Next.js + service d'envoi (Resend/Nodemailer)

### ✅ Internationalisation
**Support FR/EN dès le départ** - Utilisation de `next-intl` ou solution i18n native Next.js 16

---

## Implementation Steps

### Step 1: Initialisation du Projet Next.js
**Commit :** `chore: initialize Next.js 16 with TypeScript and Tailwind CSS 4`

**Files:**
- `package.json` (nouveau)
- `next.config.ts` (nouveau)
- `tsconfig.json` (nouveau)
- `tailwind.config.ts` (nouveau)
- `postcss.config.mjs` (nouveau)
- `.eslintrc.json` (nouveau)
- `pnpm-lock.yaml` (nouveau)
- `.gitignore` (mise à jour)

**What:**
Initialiser le projet Next.js avec la dernière version (16.1.1) en utilisant `pnpm create next-app` avec TypeScript, Tailwind CSS 4, App Router, et ESLint. Configuration du path alias `@/*` pour les imports, installation des fonts Geist (ou Plus Jakarta Sans selon design), et setup de la structure de base. Installation de `next-intl` pour l'internationalisation FR/EN.

**Commands:**
```bash
# Initialiser Next.js dans le répertoire actuel
pnpm create next-app@latest . --typescript --tailwind --app --eslint --import-alias "@/*"

# Installer les dépendances supplémentaires
pnpm add next-intl
pnpm add -D @types/node

# Installer Resend pour l'envoi d'emails
pnpm add resend
```

**Testing:**
- Vérifier que `pnpm dev` démarre sans erreur
- Accéder à `http://localhost:3000` et voir la page par défaut Next.js
- Confirmer que le hot-reload fonctionne

---

### Step 2: Configuration Internationalisation (i18n)
**Commit :** `feat: configure next-intl for FR/EN localization`

**Files:**
- `middleware.ts` (nouveau)
- `i18n.ts` (nouveau)
- `messages/fr.json` (nouveau)
- `messages/en.json` (nouveau)
- `app/[locale]/layout.tsx` (nouveau)
- `app/[locale]/page.tsx` (nouveau)
- `next.config.ts` (modification)

**What:**
Configurer l'internationalisation avec `next-intl` pour supporter le français (par défaut) et l'anglais. Créer le middleware pour la détection de locale, structurer les routes avec le paramètre `[locale]`, et créer les fichiers de traductions JSON. Configuration du switching de langue dans la navbar.

**Locale Structure:**
- Français (fr) - langue par défaut
- Anglais (en) - langue secondaire
- Routes: `/` (redirige vers `/fr`) ou `/en`

**Messages JSON Structure:**
```json
{
  "nav": {
    "home": "Accueil",
    "honey": "Notre Miel",
    "about": "À propos",
    "contact": "Contact"
  },
  "common": {
    "order": "Commander"
  }
}
```

**Testing:**
- Accéder à `/fr` et `/en`
- Vérifier que les traductions s'affichent correctement
- Tester le basculement de langue
- Confirmer que `/` redirige vers `/fr`

---

### Step 3: Extraction et Optimisation des Images
**Commit :** `feat: extract and optimize design images`

**Files:**
- `public/images/hero/` (nouveau)
- `public/images/products/` (nouveau)
- `public/images/apiaries/` (nouveau)
- `public/images/about/` (nouveau)
- `scripts/extract-images.js` (nouveau - optionnel)

**What:**
Extraire toutes les images des fichiers HTML de `design/` et les télécharger localement dans `/public/images/`. Organiser par catégorie (hero, products, apiaries, about). Optimiser les images (compression, formats WebP avec fallback). Créer un script Node.js pour automatiser l'extraction si nécessaire.

**Image Organization:**
```
public/images/
├── hero/
│   ├── home-hero.jpg
│   └── bees-background.jpg
├── products/
│   ├── miel-acacia.jpg
│   ├── miel-chataignier.jpg
│   └── miel-lavande.jpg
├── apiaries/
│   ├── rucher-montagne.jpg
│   └── rucher-lavande.jpg
└── about/
    └── apiculteur.jpg
```

**Testing:**
- Vérifier que toutes les images sont téléchargées
- Tester l'affichage avec `next/image`
- Valider les formats WebP
- Confirmer les tailles optimisées (<500KB par image)

---

### Step 4: Configuration du Design System
**Commit :** `style: configure Tailwind theme with brand colors and typography`

**Files:**
- `tailwind.config.ts` (modification)
- `app/globals.css` (modification)
- `public/fonts/` (si fonts locales)

**What:**
Configurer Tailwind CSS avec la palette de couleurs du Rucher d'Ahmed (jaune miel #F2B705, ambre doré #D98E04, vert naturel #6B8E23), ajouter les CSS custom properties dans `globals.css`, intégrer la font Plus Jakarta Sans depuis Google Fonts (ou Geist comme alternative), et configurer les breakpoints responsive.

**Tailwind Colors:**
```js
colors: {
  primary: { DEFAULT: '#F2B705', dark: '#D98E04' },
  accent: '#6B8E23',
  background: { light: '#FAF7F2', dark: '#1C1C1C' },
  text: { main: '#1C1C1C', muted: '#555555' }
}
```

**Testing:**
- Créer un composant test avec les couleurs définies
- Vérifier que les classes Tailwind `bg-primary`, `text-accent` fonctionnent
- Tester le dark mode avec `dark:bg-background-dark`

---

### Step 3: Structure de Dossiers et Types
**Commit :** `chore: create project structure and TypeScript types`

**Files:**
- `types/index.ts` (nouveau)
- `lib/utils.ts` (nouveau)
- `components/.gitkeep` (structure)
- `components/layout/.gitkeep`
- `components/ui/.gitkeep`
- `components/sections/.gitkeep`

**What:**
Créer la structure de dossiers complète du projet (components/layout, components/ui, components/sections, lib/, types/). Définir les types TypeScript de base (Product, Apiary, ContactForm, NavLink). Ajouter les fonctions utilitaires (`cn()` pour classNames, helpers de formatage).

**Types principaux :**
```typescript
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'miel' | 'cire' | 'pollen';
}

interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}
```

**Testing:**
- Importer les types dans un fichier test
- Vérifier que TypeScript valide correctement
- Tester la fonction `cn()` avec des classes conditionnelles

---

### Step 4: Composants de Layout (Navbar + Footer)
**Commit :** `feat: create responsive Navbar and Footer components`

**Files:**
- `components/layout/Navbar.tsx` (nouveau)
- `components/layout/Footer.tsx` (nouveau)
- `components/layout/MobileMenu.tsx` (nouveau)
- `app/layout.tsx` (modification)

**What:**
Créer les composants de navigation et footer communs à toutes les pages. La Navbar inclut le logo avec icône ruche, menu desktop (Accueil | Notre Miel | À propos | Contact), bouton CTA "Commander", et menu hamburger mobile responsive. Le Footer contient le logo, description, liens de navigation, informations de contact, et réseaux sociaux.

**Navbar Features:**
- Logo SVG ou image
- Navigation desktop avec underline hover effect
- Bouton "Commander" en couleur primaire
- Menu mobile avec animation slide-in
- Sticky header avec effet scroll

**Testing:**
- Vérifier la navigation sur desktop (>768px)
- Tester le menu hamburger sur mobile (<768px)
- Cliquer sur les liens et vérifier la navigation
- Tester le sticky header en scrollant

---

### Step 5: Composants UI Réutilisables
**Commit :** `feat: create reusable UI components (Button, Card, Hero)`

**Files:**
- `components/ui/Button.tsx` (nouveau)
- `components/ui/Card.tsx` (nouveau)
- `components/ui/Hero.tsx` (nouveau)
- `components/ui/SectionHeader.tsx` (nouveau)

**What:**
Créer les composants UI de base réutilisables à travers l'application. Button avec variantes (primary, secondary, outline), Card pour afficher produits et ruchers, Hero section avec background image et overlay, SectionHeader avec titre et sous-titre stylisés.

**Button Variants:**
- `primary`: fond jaune miel, texte noir
- `secondary`: fond transparent, bordure verte
- `outline`: bordure jaune, texte jaune

**Testing:**
- Créer une page de démo avec tous les composants
- Tester toutes les variantes de Button
- Vérifier le responsive des Cards
- Tester Hero avec différentes images

---

### Step 6: Page d'Accueil (Home)
**Commit :** `feat: create home page with hero and product sections`

**Files:**
- `app/page.tsx` (modification)
- `components/sections/HeroSection.tsx` (nouveau)
- `components/sections/ProductShowcase.tsx` (nouveau)
- `components/sections/AboutPreview.tsx` (nouveau)
- `components/sections/CTASection.tsx` (nouveau)

**What:**
Convertir le design HTML de `design/accueil_-_le_rucher_d'ahmed/code.html` en composants React. Créer le hero avec image d'abeilles/ruches et texte d'accroche, section showcase des miels populaires (grille de 3 cards), aperçu "À propos" avec photo d'apiculteur, et CTA finale "Découvrez nos miels".

**Sections:**
1. Hero - "Le Miel Authentique du Rucher d'Ahmed"
2. Showcase - Top 3 miels avec images
3. À propos preview - Photo + court texte
4. CTA - Bouton vers boutique/contact

**Testing:**
- Accéder à `/` et voir toutes les sections
- Vérifier le responsive sur mobile/tablet/desktop
- Tester les liens vers les autres pages
- Valider que les images s'affichent correctement

---

### Step 7: Page À Propos
**Commit :** `feat: create about page with story and values`

**Files:**
- `app/a-propos/page.tsx` (nouveau)
- `components/sections/StorySection.tsx` (nouveau)
- `components/sections/ValuesSection.tsx` (nouveau)

**What:**
Créer la page "À propos" basée sur `design/à_propos_-_le_rucher_d'ahmed/code.html`. Inclure le hero avec titre "Notre Histoire", section story avec texte et photos, section valeurs (authenticité, qualité, durabilité) avec icônes, et timeline du parcours.

**Sections:**
1. Hero - "Notre Histoire"
2. Story - Photo d'Ahmed + texte narratif
3. Valeurs - 3 cards avec icônes
4. Processus - Étapes de production

**Testing:**
- Accéder à `/a-propos`
- Vérifier la lecture fluide du storytelling
- Tester le responsive des valeurs
- Valider l'accessibilité (headings, alt text)
- Tester le switching FR/EN sur cette page

---

### Step 8: Page Nos Miels (Catalogue Produits)
**Commit :** `feat: create product catalog page with filters`

**Files:**
- `app/nos-miels/page.tsx` (nouveau)
- `components/sections/ProductGrid.tsx` (nouveau)
- `components/ui/ProductCard.tsx` (nouveau)
- `components/ui/FilterBar.tsx` (nouveau - optionnel)
- `lib/products.ts` (données produits)

**What:**
Créer la page catalogue des miels basée sur `design/nos_miels_-_le_rucher_d'ahmed/code.html`. Afficher une grille responsive de ProductCards (6-9 produits), chaque card montre photo, nom, description courte, prix. Optionnel : filtres par type (miel de fleurs, acacia, châtaignier).

**Product Cards Include:**
- Image haute qualité du pot de miel
- Nom du produit (ex: "Miel d'Acacia")
- Description (2-3 lignes)
- Prix (ex: "12€ / 500g")
- Bouton "Commander"

**Testing:**
- Accéder à `/nos-miels`
- Vérifier la grille responsive (1 col mobile, 2 tablet, 3 desktop)
- Tester le hover effect sur les cards
- Vérifier que les données produits s'affichent correctement

---

### Step 9: Page Nos Ruchers (Apiaries)
**Commit :** `feat: create apiaries page with locations map`

**Files:**
- `app/nos-ruchers/page.tsx` (nouveau)
- `components/sections/ApiaryGrid.tsx` (nouveau)
- `components/ui/ApiaryCard.tsx` (nouveau)
- `lib/apiaries.ts` (données ruchers)

**What:**
Créer la page "Nos Ruchers" basée sur `design/nos_ruchers_-_le_rucher_d'ahmed/code.html`. Présenter les différents emplacements de ruches avec photos, descriptions de l'environnement, et types de miels produits. Format grille avec cards illustrant chaque rucher (ex: Rucher de Montagne, Rucher de Lavande).

**Apiary Cards Include:**
- Photo du rucher/paysage
- Nom de l'emplacement
- Description de la flore locale
- Types de miels produits
- Icône de localisation

**Testing:**
- Accéder à `/nos-ruchers`
- Vérifier l'affichage des cards
- Tester le responsive
- [OPTIONNEL] Vérifier la carte interactive si implémentée

---

### Step 10: Page Contact avec API Email
**Commit :** `feat: create contact page with email API route`

**Files:**
- `app/[locale]/contact/page.tsx` (nouveau)
- `components/forms/ContactForm.tsx` (nouveau)
- `components/sections/ContactInfo.tsx` (nouveau)
- `app/api/contact/route.ts` (nouveau - API Route)
- `lib/validation.ts` (validation formulaire)
- `lib/email.ts` (service email avec Resend)
- `.env.local.example` (nouveau)

**What:**
Créer la page contact basée sur `design/contact_-_le_rucher_d'ahmed/code.html`. Layout en 2 colonnes : formulaire de contact (nom, email, sujet, message) + informations de contact. Créer une API Route `/api/contact` qui utilise Resend pour envoyer des emails réels. Validation côté client et serveur avec messages d'erreur clairs.

**Form Fields:**
- Nom complet (required)
- Email (required, validation email)
- Sujet (required)
- Message (required, min 10 caractères)
- Bouton "Envoyer" avec état loading

**API Route (`/api/contact/route.ts`):**
```typescript
import { Resend } from 'resend';

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();
  
  // Validation serveur
  // Envoi email via Resend
  // Retour succès/erreur
}
```

**Environment Variables:**
```
RESEND_API_KEY=re_xxx
CONTACT_EMAIL=contact@lerucherdahmed.com
```

**Contact Info:**
- Adresse physique du rucher
- Numéro de téléphone
- Email de contact
- Horaires d'ouverture
- Réseaux sociaux

**Testing:**
- Accéder à `/fr/contact` et `/en/contact`
- Tester la validation du formulaire
- Envoyer un email test (vérifier réception réelle)
- Vérifier les messages d'erreur (rate limiting, échec envoi)
- Tester le state loading pendant l'envoi

---

### Step 11: Métadonnées SEO et Optimisation
**Commit :** `feat: add SEO metadata and performance optimizations`

**Files:**
- `app/layout.tsx` (modification)
- `app/page.tsx` (ajout metadata)
- `app/a-propos/page.tsx` (ajout metadata)
- `app/nos-miels/page.tsx` (ajout metadata)
- `app/nos-ruchers/page.tsx` (ajout metadata)
- `app/contact/page.tsx` (ajout metadata)
- `app/favicon.ico` (nouveau)
- `app/opengraph-image.png` (optionnel)

**What:**
Ajouter les métadonnées SEO pour chaque page (title, description, OpenGraph, Twitter Cards). Optimiser les images avec `next/image`, configurer le sitemap, ajouter le favicon et les icônes Apple Touch. Configurer les fonts pour éviter le Flash of Unstyled Text (FOUT).

**Metadata per Page:**
- Title unique et descriptif
- Description de 150-160 caractères
- Keywords pertinents
- OpenGraph pour partage social

**Performance:**
- Lazy loading des images
- Priority pour les images above-the-fold
- Font optimization
- Code splitting automatique Next.js

**Testing:**
- Vérifier les meta tags dans le source HTML
- Tester le partage sur Facebook/Twitter (OpenGraph)
- Valider avec Lighthouse (score >90)
- Vérifier favicon dans l'onglet navigateur

---

### Step 12: Responsive Testing & Accessibilité
**Commit :** `fix: improve responsive design and accessibility`

**Files:**
- Tous les fichiers components (modifications potentielles)
- `app/globals.css` (ajustements media queries)

**What:**
Tester et corriger le responsive design sur toutes les breakpoints (mobile 320px, tablet 768px, desktop 1024px+). Améliorer l'accessibilité : ajouter les attributs ARIA manquants, vérifier la navigation au clavier, contraste des couleurs WCAG AA, alt text sur toutes les images.

**Responsive Breakpoints:**
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

**Accessibility Checks:**
- [ ] Navigation au clavier fonctionnelle
- [ ] Focus visible sur tous les éléments interactifs
- [ ] Contraste texte/fond ≥ 4.5:1
- [ ] Alt text descriptif sur images
- [ ] Headings hiérarchiques (h1 → h6)
- [ ] Labels sur inputs de formulaires

**Testing:**
- Tester sur iPhone SE (320px)
- Tester sur iPad (768px)
- Tester sur desktop 1920px
- Valider avec axe DevTools ou WAVE
- Tester navigation au clavier uniquement

---

### Step 13: Documentation et Cleanup
**Commit :** `docs: add README with setup instructions and architecture`

**Files:**
- `README.md` (modification)
- `ARCHITECTURE.md` (nouveau)
- `.github/copilot-instructions.md` (mise à jour)
- `docs/CONTRIBUTING.md` (optionnel)

**What:**
Mettre à jour le README avec les instructions de setup, commandes de développement, et structure du projet. Créer un document d'architecture expliquant les choix techniques, la structure des composants, et le design system. Mettre à jour les instructions Copilot pour refléter l'état actuel.

**README Sections:**
1. Description du projet
2. Stack technique
3. Installation (pnpm install)
4. Commandes (dev, build, lint)
5. Structure des dossiers
6. Guide de contribution

**Testing:**
- Suivre le README depuis zéro dans un nouveau clone
- Vérifier que toutes les commandes fonctionnent
- Valider que la documentation est claire

---

## Récapitulatif

**Total Commits :** 15 commits (ajout i18n + extraction images + API email)
**Temps Estimé :** 12-18 heures de développement  
**Pages Créées :** 5 pages × 2 langues = 10 routes (Accueil, À propos, Nos Miels, Nos Ruchers, Contact)  
**Composants :** ~25 composants réutilisables  
**Langues :** Français (défaut) + Anglais

**Technologies Principales :**
- Next.js 16.1.1 (App Router)
- React 19.2.3
- TypeScript 5.x
- Tailwind CSS 4
- next-intl (i18n)
- Resend (emails)

**Fonctionnalités Clés :**
✅ Site multilingue FR/EN
✅ Images optimisées localement
✅ Formulaire de contact avec emails réels
✅ Bouton "Commander" → redirection vers contact
✅ Design responsive mobile/tablet/desktop
✅ SEO optimisé
✅ Accessibilité WCAG AA

**Prochaine Action :**
Lancement de l'implémentation - Step 1 : Initialisation du projet Next.js avec pnpm.
