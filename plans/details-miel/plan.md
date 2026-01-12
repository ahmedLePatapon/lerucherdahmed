# Details Miel

**Branch:** `feature/integration-details-miel`
**Description:** Intégrer la page "détails d'un miel" basée sur le dossier `design/details miels` en réutilisant les composants existants.

## Goal
Intégrer une page produit détaillée (hero, galerie, caractéristiques, mot de l'apiculteur, avis clients, cross-sell) à partir des snippets HTML fournis dans `design/details miels`, en respectant les patterns du repo (app router, composants réutilisables).

## Implementation Steps

### Step 1: Page skeleton (route dynamique)
**Files:** app/nos-miels/[slug]/page.tsx
**What:** Créer la route dynamique `app/nos-miels/[slug]/page.tsx` (server component) qui récupère le produit depuis `lib/data/products.ts` et rend un squelette de page avec placeholders pour la galerie, les infos produit et les onglets.
**Testing:** Naviguer vers `/nos-miels/<slug-exemple>` et vérifier que la page s'affiche (ou retourne 404 si slug inconnu).

### Step 2: Composants UI principaux
**Files:** components/product/ProductGallery.tsx, components/product/ProductInfo.tsx
**What:** Ajouter `ProductGallery` (image principale + miniatures) et `ProductInfo` (titre, prix, rating, quick specs, quantité + bouton). Intégrer ces composants dans la page skeleton.
**Testing:** Vérifier rendu des images et des informations sur la page produit (statique).

### Step 3: Onglets de contenu (client interaction)
**Files:** components/product/ProductTabs.tsx, components/product/ProductTestimonials.tsx (optionnel)
**What:** Implémenter `ProductTabs` (onglets : mot apiculteur, caractéristiques techniques, avis clients). `ProductTabs` peut être un client component si interaction nécessaire. Ajouter un wrapper pour afficher/filtrer les avis du produit.
**Testing:** Tester le changement d'onglet et l'affichage du contenu correspondant (texte apiculteur, tableau de specs, liste d'avis).

### Step 4: Enrichir les données produit
**Files:** lib/data/products.ts
**What:** Étendre (optionnel) l'interface `Product` avec champs facultatifs `specs?: Record<string,string>`, `nutrition?: Record<string,string>`, `apiculteurNote?: string`. Ajouter un exemple de produit rempli pour vérifier l'affichage.
**Testing:** Vérifier que la tab "Caractéristiques" lit les données depuis `products.ts` et affiche correctement le tableau/nutrition.

### Step 5: Cross-sell & raccords UI
**Files:** sections/ProductsGrid.tsx (réutilisation) ou components/related/RelatedProducts.tsx
**What:** Réutiliser `ProductsGrid` ou créer un petit wrapper pour afficher "Vous aimerez aussi" en bas de la page.
**Testing:** Vérifier affichage des produits recommandés et liens vers leurs pages détails.

### Step 6: Assets et styles (optionnel)
**Files:** public/images/products/* (si nécessaire), globals.css ou petits utilitaires CSS
**What:** Ajouter images locales si requis et ajuster petites classes utilitaires pour correspondre au design (ou charger Material Symbols si souhaité).
**Testing:** Vérifier rendu visuel et icônes; valider mobile/desktop.

## Commits proposés

- Commit 1 — feat(product): add product detail route skeleton (`app/nos-miels/[slug]/page.tsx`)
- Commit 2 — feat(product-components): add `ProductGallery` and `ProductInfo`
- Commit 3 — feat(product-tabs): add `ProductTabs` (+ `ProductTestimonials` wrapper)
- Commit 4 — chore(data): extend `Product` interface and add sample product data
- Commit 5 — style: add small CSS utilities or load Material Symbols (optionnel)

## Questions / [NEEDS CLARIFICATION]

- Voulez‑vous que la route soit `/nos-miels/[slug]` (proposée) ou `/details-miel` (page statique) ? [NEEDS CLARIFICATION]
- Souhaitez‑vous charger la police/icon set « Material Symbols » du design ou utiliser `lucide-react`/icônes existantes ? [NEEDS CLARIFICATION]
- Faut‑il stocker les caractéristiques et la nutrition dans `lib/data/products.ts`, ou préférez‑vous un endpoint/CMS externe ? (je recommande `products.ts` pour la première itération) [NEEDS CLARIFICATION]
- Comportement du bloc « Avis » : simple liste, pagination côté client, ou chargement progressif « Charger plus » ? [NEEDS CLARIFICATION]
- Le bouton « Ajouter au panier » doit‑il se connecter à une logique panier existante (si oui, préciser) ou rester UI seulement ? [NEEDS CLARIFICATION]

## Testing / Vérification finale

- Vérifier que la route dynamique renvoie 200 pour un produit existant et 404 sinon.
- Vérifier rendu des sections principales : hero/gallery, info, onglets, avis, cross-sell.
- Tester interaction des onglets et bouton « Ajouter au panier » (UI).
- Vérifier responsive (mobile / desktop) et cohérence visuelle avec le design.

## Prochaine action

Après validation des choix [NEEDS CLARIFICATION], implémenter Commit 1 (squelette) puis itérer sur les composants.
