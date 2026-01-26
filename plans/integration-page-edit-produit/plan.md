# Intégration Page Édition de Produit Admin

**Branch:** `feature/admin-product-edit-page`
**Description:** Intégration fidèle de la page HTML d'édition de produit dans l'interface admin Next.js

## Goal

Convertir la page HTML statique (design/admin_product/code.html) en une page Next.js fonctionnelle permettant aux administrateurs de modifier les détails d'un produit miel, incluant toutes les sections (infos générales, descriptions, médias, spécifications, nutrition, notes apiculture) avec un design fidèle au mockup.

## Décisions Architecturales

### ✅ 1. Gestion des Images
**Décision:** Mock initial (URLs hard-codées)
- Les images seront stockées temporairement dans `/public/images/products/`
- Upload simulé avec preview local
- À remplacer par un vrai système de stockage plus tard

### ✅ 2. Thème et Couleurs
**Décision:** Garder `#F2B705` (couleur actuelle)
- Cohérence avec le reste de l'application
- Pas de modification du `tailwind.config.ts` nécessaire

### ✅ 3. Bibliothèques de Formulaire
**Décision:** Approche robuste avec `react-hook-form` + `zod`
- Meilleure validation et gestion d'erreurs
- UX améliorée avec feedback en temps réel
- Packages à installer : `react-hook-form`, `@hookform/resolvers`, `zod`

### ✅ 4. Icônes
**Décision:** Convertir toutes les icônes en Lucide React
- Cohérence avec le reste de l'application
- Mapping Material Icons → Lucide React à effectuer

### ✅ 5. Structure de Code
**Décision:** Composants séparés par section
- Meilleure maintenabilité
- Réutilisabilité des composants
- 7-8 fichiers de composants à créer

### ✅ 6. Dark Mode
**Décision:** Pas de dark mode pour le moment
- Implémentation light mode uniquement
- Dark mode à ajouter dans une future itération si besoin

### ✅ 7. Données Backend
**Décision:** Fichier JSON local comme base de données temporaire
- Fichier `lib/data/products.json` pour stocker les produits
- Fonctions helper pour lire/écrire dans le JSON
- Migration facile vers une vraie DB plus tard

## Implementation Steps

### Step 1: Préparation - Composants UI de Base & Types
**Files:** 
- `components/ui/Select.tsx` (nouveau)
- `components/ui/Breadcrumbs.tsx` (nouveau)
- `components/ui/FormSection.tsx` (nouveau)
- `lib/types/product.ts` (nouveau)
- `tailwind.config.ts` (modification si nouvelle couleur)

**What:** 
Créer les composants UI manquants (Select, Breadcrumbs, FormSection wrapper) et définir les types TypeScript étendus pour les produits avec tous les nouveaux champs (images multiples, profil gustatif, nutrition détaillée, notes apiculteur). Installer les dépendances nécessaires : `react-hook-form`, `@hookform/resolvers`, `zod`.

**Testing:** 
Importer et afficher chaque composant dans une page de test pour vérifier le rendu et les variants. Vérifier que react-hook-form est correctement installé.

---

### Step 2: Structure de la Page & Layout
**Files:**
- `app/(admin)/admin/produits/[id]/page.tsx` (nouveau)
- `components/admin/product/ProductEditHeader.tsx` (nouveau si structure B)

**What:**
Créer la route dynamique `/admin/produits/[id]` avec le layout de base : header sticky avec actions Cancel/Save, breadcrumbs, titre de page, et conteneur du formulaire. Réutiliser le layout admin existant (Sidebar + HeaderAdmin).

**Testing:**
Naviguer vers `/admin/produits/test-123` et vérifier l'affichage du layout, du header sticky au scroll, et des breadcrumbs.

---

### Step 3: Section Informations Générales
**Files:**
- `components/admin/product/ProductGeneralInfo.tsx` (nouveau si structure B)
- `app/(admin)/admin/produits/[id]/page.tsx` (modification)

**What:**
Implémenter la section "Informations Générales" avec 4 champs : nom du produit (Input), slug URL (Input + bouton auto-génération avec icône Lucide `RefreshCw`), prix en DZD (Input number), et badge/statut (Select avec options: Aucun, Best Seller, Nouveau, Promotion). Intégrer react-hook-form pour la gestion d'état.

**Testing:**
Remplir les champs, tester la génération automatique du slug à partir du nom (bouton refresh), vérifier que le Select affiche correctement les options, valider que react-hook-form capture les valeurs.

---

### Step 4: Sections Descriptions & Notes Apiculture  
**Files:**
- `components/admin/product/ProductDescriptions.tsx` (nouveau si structure B)
- `components/admin/product/ProductApiNotes.tsx` (nouveau si structure B)
- `app/(admin)/admin/produits/[id]/page.tsx` (modification)

**What:**
Implémenter deux sections avec des Textarea : "Descriptions" (courte + détaillée) et "Notes d'Apiculture" (origine géographique + notes de l'apiculteur). Utiliser le composant FormSection pour l'encadrement cohérent.

**Testing:**
Saisir du texte dans chaque textarea, vérifier le comportement responsive et le comptage automatique de lignes.

---

### Step 5: Spécifications Techniques & Tableau Nutritionnel
**Files:**
- `components/admin/product/ProductSpecs.tsx` (nouveau si structure B)
- `components/admin/product/ProductNutrition.tsx` (nouveau si structure B)
- `app/(admin)/admin/produits/[id]/page.tsx` (modification)

**What:**
Créer la grille "Spécifications Techniques" (poids avec suffixe "g", année récolte, saison, profil gustatif) et le "Tableau Nutritionnel" (énergie kcal, glucides, protéines, sucres) avec des inputs de type number et text organisés en grilles responsive.

**Testing:**
Remplir les champs numériques, vérifier l'affichage du suffixe "g" pour le poids, tester la grille responsive sur mobile/desktop.

---

### Step 6: Upload et Gestion des Médias
**Files:**
- `components/admin/product/ProductMediaUpload.tsx` (nouveau)
- `components/ui/ImageUploadZone.tsx` (nouveau)
- `app/(admin)/admin/produits/[id]/page.tsx` (modification)

**What:**
Implémenter la section la plus complexe : zone d'upload d'images avec prévisualisation, possibilité de marquer une image comme "Principale", actions de suppression et visualisation au hover (icônes Lucide `Trash2` et `Eye`), et gestion de l'ordre des images. Upload simulé avec stockage temporaire dans `/public/images/products/`.

**Testing:**
Simuler l'upload de plusieurs images (ajouter des URLs), marquer l'une comme principale (badge jaune), tester les boutons supprimer/visualiser au hover, vérifier l'ordre d'affichage et la grid responsive.

---

### Step 7: Intégration Formulaire & État Global
**Files:**
- `app/(admin)/admin/produits/[id]/page.tsx` (modification)
- `lib/hooks/useProductForm.ts` (nouveau si react-hook-form)

**What:**
Connecter toutes les sections dans un formulaire unique avec gestion d'état via react-hook-form. Créer le schéma de validation Zod pour tous les champs. Implémenter les actions Save Changes et Cancel, avec validation, gestion des erreurs, et états de chargement.

**Testing:**
Modifier plusieurs champs, cliquer Save (validation + sauvegarde dans JSON local), tester Cancel (reset du formulaire), déclencher des erreurs de validation, vérifier que tous les champs sont correctement validés et collectés.

---

### Step 8: Routes API & Persistance JSON
**Files:**
- `app/api/products/[id]/route.ts` (nouveau)
- `lib/data/products.json` (nouveau)
- `lib/api/products.ts` (nouveau - fonctions helper pour JSON)

**What:**
Créer les API routes Next.js pour récupérer (`GET /api/products/[id]`) et mettre à jour (`PUT /api/products/[id]`) un produit en lisant/écrivant dans le fichier JSON local (`lib/data/products.json`). Implémenter les fonctions helper pour gérer les opérations CRUD sur le JSON.

**Testing:**
Appeler les routes via le formulaire, vérifier dans Network tab que les requêtes passent, tester la récupération d'un produit existant depuis le JSON, sauvegarder des modifications et vérifier que le fichier JSON est mis à jour.

---

### Step 9: Styling Final & Cohérence Visuelle
**Files:**
- Tous les composants créés (ajustements de style)

**What:**
Affiner tous les styles pour correspondre fidèlement au design HTML tout en gardant la couleur primaire `#F2B705`. Ajuster tous les espacements, borders, border-radius, hover states, focus states. Vérifier la cohérence avec les autres pages admin existantes. Pas de dark mode.

**Testing:**
Comparer visuellement avec le HTML original, tester tous les hover/focus states, vérifier la cohérence des couleurs avec le reste de l'app, tester sur différentes tailles d'écran (mobile, tablette, desktop).

---

### Step 10: Polish & Expérience Utilisateur
**Files:**
- Tous les composants de l'étape 1-9
- `components/ui/Toast.tsx` (nouveau - optionnel)

**What:**
Ajouter les touches finales : messages de succès/erreur lors de la sauvegarde, états de chargement (boutons disabled + spinner), transitions smooth, auto-save draft (optionnel), confirmation avant Cancel si modifications non sauvegardées.

**Testing:**
Tester tous les scénarios : sauvegarde réussie, erreur serveur, annulation avec/sans modifications, chargement initial, navigation vers "View Live Product", vérifier l'accessibilité (tab order, labels).

---

## Notes Techniques

### Composants UI à Créer
- **Select**: Dropdown customisé avec style dark mode
- **Breadcrumbs**: Navigation avec séparateurs "/"
- **FormSection**: Card wrapper avec header coloré
- **ImageUploadZone**: Zone drag & drop avec preview grid

### Dépendances à Installer
```bash
npm install react-hook-form @hookform/resolvers zod
```

### Mapping Icônes Material → Lucide
| Material Icon | Lucide React | Usage |
|---------------|--------------|-------|
| `hive` | `Hexagon` | Logo sidebar |
| `dashboard` | `LayoutDashboard` | Menu Dashboard |
| `inventory_2` | `Package` | Menu Inventory |
| `shopping_cart` | `ShoppingCart` | Menu Orders |
| `group` | `Users` | Menu Customers |
| `analytics` | `BarChart3` | Menu Analytics |
| `settings` | `Settings` | Menu Settings |
| `search` | `Search` | Header search |
| `visibility` | `Eye` | View/Preview |
| `refresh` | `RefreshCw` | Auto-generate slug |
| `add_photo_alternate` | `ImagePlus` | Add image |
| `delete` | `Trash2` | Delete image |

### Structure Finale des Fichiers (si CODE_STRUCTURE = Option B)
```
app/(admin)/admin/produits/[id]/page.tsx
components/
  admin/product/
    ├── ProductEditForm.tsx (container principal)
    ├── ProductEditHeader.tsx
    ├── ProductGeneralInfo.tsx
    ├── ProductDescriptions.tsx
    ├── ProductMediaUpload.tsx
    ├── ProductSpecs.tsx
    ├── ProductNutrition.tsx
    └── ProductApiNotes.tsx
  ui/
    ├── Select.tsx
    ├── Breadcrumbs.tsx
    ├── FormSection.tsx
    └── ImageUploadZone.tsx
```

### Patterns à Suivre
- Utiliser `"use client"` pour tous les composants interactifs
- Respecter la convention de nommage existante (PascalCase pour composants)
- Utiliser `clsx` ou `cn()` pour les classes conditionnelles
- Suivre le pattern de types existant dans `lib/types/`

## Estimation

- **Complexité**: COMPLEXE (10 étapes, multiples composants, interactions avancées)
- **Temps estimé**: 14-18 heures de développement
- **Risques**: Upload d'images (dépend de la stratégie choisie), validation formulaire (selon bibliothèque)
- **Dépendances**: Choix architecturaux à clarifier avant de commencer
