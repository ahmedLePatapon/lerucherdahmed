# Étape 6 : Page Nos Miels (Catalogue)

## Goal
Créer la page catalogue avec grille de tous les produits, badges, et section avantages du miel artisanal.

## Fichiers à créer
- `app/nos-miels/page.tsx`
- `components/sections/PageHeader.tsx`

---

## Step-by-Step Instructions

### 6.1 Créer le composant PageHeader

- [ ] Créer le fichier `components/sections/PageHeader.tsx` :

```tsx
interface PageHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function PageHeader({
  badge,
  title,
  description,
  centered = true,
}: PageHeaderProps) {
  return (
    <section className="pt-32 pb-16 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className={centered ? "text-center" : ""}>
          {badge && (
            <span className="text-primary text-sm font-bold uppercase tracking-wider">
              {badge}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl font-bold text-text-main mt-4 mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
```

### 6.2 Mettre à jour le fichier d'export des sections

- [ ] Modifier le fichier `components/sections/index.ts` pour ajouter :

```ts
export { HeroSection } from "./HeroSection";
export { FeaturesSection } from "./FeaturesSection";
export { ProductsGrid } from "./ProductsGrid";
export { StorySection } from "./StorySection";
export { TestimonialsSection } from "./TestimonialsSection";
export { CTASection } from "./CTASection";
export { PageHeader } from "./PageHeader";
```

### 6.3 Créer la page Nos Miels

- [ ] Créer le fichier `app/nos-miels/page.tsx` :

```tsx
import { Metadata } from "next";
import { Leaf, Award, Truck } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { ProductCard } from "@/components/cards/ProductCard";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { CTASection } from "@/components/sections/CTASection";
import { products } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Nos Miels",
  description:
    "Découvrez notre gamme de miels artisanaux : miel de lavande, acacia, châtaignier et plus encore. 100% naturel, récolté en Charente.",
};

const advantages = [
  {
    icon: Leaf,
    title: "100% Pur & Naturel",
    description:
      "Nos miels sont récoltés et mis en pot sans aucun traitement ni ajout. La pureté à l'état brut.",
  },
  {
    icon: Award,
    title: "Qualité Artisanale",
    description:
      "Chaque pot est le fruit d'un savoir-faire transmis et perfectionné depuis plus de 25 ans.",
  },
  {
    icon: Truck,
    title: "Livraison Soignée",
    description:
      "Emballage écologique et livraison rapide pour vous garantir un miel en parfait état.",
  },
];

export default function NosMielsPage() {
  return (
    <>
      <PageHeader
        badge="Notre boutique"
        title="Nos Miels Artisanaux"
        description="Découvrez notre sélection de miels récoltés avec passion dans nos ruchers charentais. Chaque variété a son caractère unique."
      />

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Products Count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-text-muted">
              <span className="font-bold text-text-main">{products.length}</span> miels disponibles
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-bold uppercase tracking-wider">
              Pourquoi nous choisir
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mt-4 mb-6">
              Les avantages du miel artisanal
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              En choisissant Le Rucher d&apos;Ahmed, vous optez pour un miel
              d&apos;exception, produit dans le respect de la nature et des abeilles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage) => (
              <FeatureCard
                key={advantage.title}
                icon={advantage.icon}
                title={advantage.title}
                description={advantage.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Une question sur nos miels ?"
        description="N'hésitez pas à nous contacter pour en savoir plus sur nos produits et notre méthode de production."
        primaryCTA={{ label: "Nous contacter", href: "/contact" }}
        secondaryCTA={{ label: "Découvrir nos ruchers", href: "/nos-ruchers" }}
      />
    </>
  );
}
```

---

## Step 6 Verification Checklist

- [ ] La page `/nos-miels` s'affiche sans erreur
- [ ] Le header de page affiche le titre "Nos Miels Artisanaux"
- [ ] Le compteur de produits affiche "6 miels disponibles"
- [ ] Tous les 6 produits sont affichés en grille
- [ ] Les badges (Best-seller, Nouveau, etc.) sont visibles sur les cartes
- [ ] Les prix sont formatés en euros (12,00 €)
- [ ] La section "Avantages du miel artisanal" affiche 3 cartes
- [ ] La section CTA est visible en bas de page
- [ ] Les images se chargent correctement

## Step 6 Verification Results

- [x] La page `/nos-miels` s'affiche sans erreur (build/dev lancé)
- [x] Le header de page affiche le titre "Nos Miels Artisanaux"
- [x] Le compteur de produits affiche "6 miels disponibles"
- [x] Tous les 6 produits sont affichés en grille
- [x] Les badges (Best-seller, Nouveau, etc.) sont visibles sur les cartes
- [x] Les prix sont formatés en euros (`Intl.NumberFormat` utilisé)
- [x] La section "Avantages du miel artisanal" affiche 3 cartes
- [x] La section CTA est visible en bas de page
- [ ] Les images se chargent correctement (Vérifier les domaines autorisés dans `next.config.ts` si nécessaire)

---

## Step 6 STOP & COMMIT

**STOP & COMMIT:** Arrêtez-vous ici et attendez que l'utilisateur teste, stage et committe le changement.

```bash
git add .
git commit -m "feat: implement Nos Miels page with products catalog"
```
