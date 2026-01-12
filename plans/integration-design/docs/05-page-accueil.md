# Étape 5 : Page Accueil

## Goal
Implémenter la page d'accueil complète avec hero immersif, section "Pourquoi choisir", grille de produits vedettes, section histoire et témoignages clients.

## Fichiers à créer
- `components/sections/HeroSection.tsx`
- `components/sections/FeaturesSection.tsx`
- `components/sections/ProductsGrid.tsx`
- `components/sections/TestimonialsSection.tsx`
- `components/sections/StorySection.tsx`
- `components/sections/CTASection.tsx`
- `components/cards/ProductCard.tsx`
- `components/cards/FeatureCard.tsx`
- `components/cards/TestimonialCard.tsx`
- `components/sections/index.ts`
- `components/cards/index.ts`
- `app/page.tsx`

---

## Step-by-Step Instructions

### 5.1 Créer le composant FeatureCard

- [x] Créer le fichier `components/cards/FeatureCard.tsx` :

```tsx
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "bg-background-light p-6 rounded-xl border border-primary/10 hover:border-primary transition-colors group shadow-sm",
        className
      )}
    >
      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 text-primary shadow-sm border border-gray-100 group-hover:bg-primary group-hover:text-white transition-colors">
        <Icon size={24} />
      </div>
      <h3 className="text-text-main text-lg font-bold mb-2">{title}</h3>
      <p className="text-text-muted text-sm leading-relaxed">{description}</p>
    </div>
  );
}
```

### 5.2 Créer le composant ProductCard

- [x] Créer le fichier `components/cards/ProductCard.tsx` :

```tsx
import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingBag } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/data/products";

interface ProductCardProps {
  product: Product;
  className?: string;
}

const badgeVariants: Record<NonNullable<Product["badge"]>, "primary" | "accent" | "intense"> = {
  "best-seller": "primary",
  nouveau: "accent",
  douceur: "accent",
  intense: "intense",
};

const badgeLabels: Record<NonNullable<Product["badge"]>, string> = {
  "best-seller": "Best-seller",
  nouveau: "Nouveau",
  douceur: "Douceur",
  intense: "Intense",
};

export function ProductCard({ product, className }: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(product.price);

  return (
    <div
      className={cn(
        "group bg-white rounded-2xl overflow-hidden border border-border-light hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1",
        className
      )}
    >
      {/* Image */}
      <Link href={`/nos-miels/${product.slug}`} className="block">
        <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Badge */}
          {product.badge && (
            <div className="absolute top-4 left-4">
              <Badge variant={badgeVariants[product.badge]}>
                {badgeLabels[product.badge]}
              </Badge>
            </div>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <Link href={`/nos-miels/${product.slug}`}>
            <h3 className="text-xl font-bold text-text-main group-hover:text-primary-dark transition-colors">
              {product.name}
            </h3>
          </Link>
          <div className="flex items-center gap-1 text-primary-dark text-sm">
            <Star size={16} fill="currentColor" />
            <span className="font-bold">{product.rating}</span>
          </div>
        </div>

        <p className="text-text-muted text-sm mb-6 line-clamp-2">
          {product.shortDescription}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            <span className="text-xs text-text-muted">Pot de {product.weight}</span>
            <span className="text-2xl font-bold text-text-main">{formattedPrice}</span>
          </div>
          <button
            className="bg-gray-100 hover:bg-primary hover:text-white text-text-main p-3 rounded-xl transition-all"
            aria-label={`Ajouter ${product.name} au panier`}
          >
            <ShoppingBag size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
```

### 5.3 Créer le composant TestimonialCard

- [x] Créer le fichier `components/cards/TestimonialCard.tsx` :

```tsx
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/lib/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "bg-surface-dark p-8 rounded-2xl relative border border-white/5",
        className
      )}
    >
      <Quote
        size={48}
        className="text-white/5 absolute top-4 right-4"
      />
      <p className="text-text-muted-light mb-6 relative z-10 italic leading-relaxed">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold">
          {testimonial.initial}
        </div>
        <div>
          <p className="text-white font-bold text-sm">{testimonial.name}</p>
          <p className="text-xs text-text-muted-light">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
```

### 5.4 Créer le fichier d'export des cards

- [x] Créer le fichier `components/cards/index.ts` :

```ts
export { FeatureCard } from "./FeatureCard";
export { ProductCard } from "./ProductCard";
export { TestimonialCard } from "./TestimonialCard";
```

### 5.5 Créer la section Hero

- [x] Créer le fichier `components/sections/HeroSection.tsx` :

```tsx
import Link from "next/link";
import { ArrowRight, Leaf, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-background-dark">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background-dark/90 via-background-dark/70 to-transparent z-10" />
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=1920&q=80')",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 w-full py-20">
        <div className="max-w-2xl flex flex-col gap-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md w-fit">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-dot" />
            <span className="text-primary text-xs font-bold uppercase tracking-wide">
              Nouvelle récolte disponible
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight">
            L&apos;Or de la Nature,{" "}
            <span className="text-gradient">Directement de la Ruche</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-text-muted-light max-w-xl leading-relaxed">
            Miel artisanal 100% local produit par Le Rucher d&apos;Ahmed. Découvrez
            l&apos;authenticité de nos saveurs et soutenez une apiculture durable.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/nos-miels">
              <Button size="lg" variant="primary">
                Commander notre Miel
                <ArrowRight size={20} />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:border-primary hover:text-primary backdrop-blur-sm"
              >
                Nous Contacter
              </Button>
            </Link>
          </div>

          {/* USPs */}
          <div className="flex flex-wrap gap-6 mt-4">
            <div className="flex items-center gap-2 text-white/80">
              <Leaf size={20} className="text-primary" />
              <span className="text-sm font-medium">100% Naturel</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <MapPin size={20} className="text-primary" />
              <span className="text-sm font-medium">Production Locale</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### 5.6 Créer la section Features

- [x] Créer le fichier `components/sections/FeaturesSection.tsx` :

```tsx
import { Leaf, MapPin, Heart } from "lucide-react";
import { FeatureCard } from "@/components/cards/FeatureCard";

const features = [
  {
    icon: Leaf,
    title: "100% Naturel",
    description:
      "Aucun ajout, aucun traitement chimique, juste le pur nectar des fleurs transformé par nos abeilles.",
  },
  {
    icon: MapPin,
    title: "Production Locale",
    description:
      "Récolté et mis en pot directement au rucher, garantissant une fraîcheur et une traçabilité absolues.",
  },
  {
    icon: Heart,
    title: "Apiculture Durable",
    description:
      "Nous protégeons la biodiversité et nos colonies avant tout, en respectant leur cycle naturel.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-bold uppercase tracking-wider">
            Nos engagements
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mt-4 mb-6">
            Pourquoi choisir notre miel ?
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Découvrez ce qui rend notre miel unique et pourquoi nos clients nous font
            confiance depuis des années.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
```

### 5.7 Créer la section ProductsGrid

- [x] Créer le fichier `components/sections/ProductsGrid.tsx` :

```tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/cards/ProductCard";
import { Button } from "@/components/ui/Button";
import { featuredProducts } from "@/lib/data/products";

interface ProductsGridProps {
  title?: string;
  subtitle?: string;
  showViewAll?: boolean;
  limit?: number;
}

export function ProductsGrid({
  title = "Nos Miels Artisanaux",
  subtitle = "Découvrez notre sélection de miels récoltés avec passion dans nos ruchers charentais.",
  showViewAll = true,
  limit = 3,
}: ProductsGridProps) {
  const productsToShow = featuredProducts.slice(0, limit);

  return (
    <section className="py-24 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-primary text-sm font-bold uppercase tracking-wider">
              Notre sélection
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mt-4 mb-4">
              {title}
            </h2>
            <p className="text-text-muted max-w-xl">{subtitle}</p>
          </div>
          {showViewAll && (
            <Link href="/nos-miels" className="mt-6 md:mt-0">
              <Button variant="outline" size="md">
                Voir toute la boutique
                <ArrowRight size={16} />
              </Button>
            </Link>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsToShow.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

### 5.8 Créer la section Story (Histoire d'Ahmed)

- [x] Créer le fichier `components/sections/StorySection.tsx` :

```tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function StorySection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80"
                alt="Ahmed, apiculteur passionné"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Quote Card */}
            <div className="absolute -bottom-8 -right-8 bg-primary p-6 rounded-2xl shadow-xl max-w-xs hidden lg:block">
              <Quote size={24} className="text-white/30 mb-2" />
              <p className="text-white text-sm italic leading-relaxed">
                &ldquo;Je ne suis pas le propriétaire de mes ruches, je n&apos;en suis
                que le gardien.&rdquo;
              </p>
              <p className="text-white/80 text-xs mt-3">— Ahmed, Apiculteur depuis 1998</p>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <span className="text-primary text-sm font-bold uppercase tracking-wider">
              Notre histoire
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-main">
              Une Rencontre, Une Vocation
            </h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                Tout a commencé en 1998, lorsqu&apos;Ahmed, ingénieur agronome de
                formation, a découvert l&apos;apiculture lors d&apos;un stage en
                Charente. Ce qui devait être une simple expérience professionnelle
                s&apos;est transformé en passion dévorante.
              </p>
              <p>
                Aujourd&apos;hui, avec plus de 25 ans d&apos;expérience, Ahmed gère
                ses ruches avec une philosophie simple : respecter le rythme des
                abeilles et ne prélever que le surplus de miel, sans jamais
                compromettre la santé de ses colonies.
              </p>
            </div>

            {/* Quote for mobile */}
            <div className="bg-background-light p-6 rounded-xl border-l-4 border-primary lg:hidden">
              <p className="text-text-main italic">
                &ldquo;Je ne suis pas le propriétaire de mes ruches, je n&apos;en suis
                que le gardien.&rdquo;
              </p>
              <p className="text-text-muted text-sm mt-2">— Ahmed, Apiculteur depuis 1998</p>
            </div>

            <Link href="/a-propos" className="w-fit">
              <Button variant="primary">
                Découvrir notre histoire
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### 5.9 Créer la section Testimonials

- [x] Créer le fichier `components/sections/TestimonialsSection.tsx` :

```tsx
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { testimonials } from "@/lib/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-bold uppercase tracking-wider">
            Témoignages
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
            Ce que disent nos clients
          </h2>
          <p className="text-text-muted-light max-w-2xl mx-auto">
            Découvrez les avis de ceux qui ont goûté à l&apos;authenticité de notre
            miel artisanal.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

### 5.10 Créer la section CTA

- [x] Créer le fichier `components/sections/CTASection.tsx` :

```tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCTA?: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
}

export function CTASection({
  title = "Prêt à goûter l'authenticité ?",
  description = "Commandez dès maintenant et recevez votre miel artisanal directement chez vous.",
  primaryCTA = { label: "Commander", href: "/nos-miels" },
  secondaryCTA = { label: "Nous contacter", href: "/contact" },
}: CTASectionProps) {
  return (
    <section className="py-24 bg-primary">
      <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{title}</h2>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={primaryCTA.href}>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              {primaryCTA.label}
              <ArrowRight size={20} />
            </Button>
          </Link>
          <Link href={secondaryCTA.href}>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
            >
              {secondaryCTA.label}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
```

### 5.11 Créer le fichier d'export des sections

- [x] Créer le fichier `components/sections/index.ts` :

```ts
export { HeroSection } from "./HeroSection";
export { FeaturesSection } from "./FeaturesSection";
export { ProductsGrid } from "./ProductsGrid";
export { StorySection } from "./StorySection";
export { TestimonialsSection } from "./TestimonialsSection";
export { CTASection } from "./CTASection";
```

### 5.12 Créer la page d'accueil

- [x] Remplacer le contenu de `app/page.tsx` par :

```tsx
import {
  HeroSection,
  FeaturesSection,
  ProductsGrid,
  StorySection,
  TestimonialsSection,
  CTASection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ProductsGrid />
      <StorySection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
```

---

## Step 5 Verification Checklist

- [ ] La page d'accueil s'affiche sans erreur
- [ ] Le hero section affiche :
  - [ ] Badge "Nouvelle récolte disponible"
  - [ ] Titre avec dégradé
  - [ ] Boutons CTA
  - [ ] USPs (100% Naturel, Production Locale)
- [ ] La section Features affiche 3 cartes
- [ ] La grille de produits affiche 3 miels vedettes
- [ ] La section Histoire affiche l'image et la citation
- [ ] Les témoignages sont affichés sur fond sombre
- [ ] La section CTA est visible en bas de page
- [ ] Navigation responsive fonctionne
- [ ] Les images se chargent correctement

---

## Step 5 STOP & COMMIT

**STOP & COMMIT:** Arrêtez-vous ici et attendez que l'utilisateur teste, stage et committe le changement.

```bash
git add .
git commit -m "feat: implement homepage with all sections"
```
