# Étape 8 : Page Nos Ruchers

## Goal
Créer la page présentant les 2 terroirs (Cherves-Richemont, Saint-Amant-de-Boixe) avec leurs caractéristiques et une carte de localisation.

## Fichiers à créer
- `app/nos-ruchers/page.tsx`
- `components/cards/TerroirCard.tsx`
- `components/sections/MapSection.tsx`

---

## Step-by-Step Instructions

### 8.1 Créer le composant TerroirCard

- [ ] Créer le fichier `components/cards/TerroirCard.tsx` :

```tsx
import Image from "next/image";
import { MapPin, Flower2, TreeDeciduous, Sun } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { Terroir } from "@/lib/data/terroirs";

interface TerroirCardProps {
  terroir: Terroir;
  reversed?: boolean;
}

const floraIcons: Record<string, typeof Flower2> = {
  Vignes: Sun,
  Acacia: TreeDeciduous,
  "Fleurs sauvages": Flower2,
  Châtaignier: TreeDeciduous,
  Forêt: TreeDeciduous,
  Ronce: Flower2,
};

export function TerroirCard({ terroir, reversed = false }: TerroirCardProps) {
  return (
    <div
      className={`grid lg:grid-cols-2 gap-12 items-center ${
        reversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <div className={`relative ${reversed ? "lg:order-2" : ""}`}>
        <div className="aspect-[4/3] rounded-2xl overflow-hidden">
          <Image
            src={terroir.image}
            alt={`Rucher de ${terroir.name}`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        {/* Location Badge */}
        <div className="absolute top-4 left-4">
          <Badge variant="primary" className="flex items-center gap-2">
            <MapPin size={14} />
            {terroir.postalCode}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className={reversed ? "lg:order-1" : ""}>
        <span className="text-primary text-sm font-bold uppercase tracking-wider">
          {terroir.location}
        </span>
        <h3 className="text-3xl font-bold text-text-main mt-2 mb-2">
          {terroir.name}
        </h3>
        <p className="text-accent font-semibold text-lg mb-6">
          {terroir.subtitle}
        </p>

        <p className="text-text-muted leading-relaxed mb-8">
          {terroir.description}
        </p>

        {/* Characteristics */}
        <div className="mb-8">
          <h4 className="text-sm font-bold text-text-main uppercase tracking-wider mb-4">
            Caractéristiques
          </h4>
          <ul className="space-y-3">
            {terroir.characteristics.map((char) => (
              <li key={char} className="flex items-center gap-3 text-text-muted">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {char}
              </li>
            ))}
          </ul>
        </div>

        {/* Flora */}
        <div>
          <h4 className="text-sm font-bold text-text-main uppercase tracking-wider mb-4">
            Flore mellifère
          </h4>
          <div className="flex flex-wrap gap-3">
            {terroir.flora.map((plant) => {
              const Icon = floraIcons[plant] || Flower2;
              return (
                <div
                  key={plant}
                  className="flex items-center gap-2 px-4 py-2 bg-background-light rounded-full border border-border-light"
                >
                  <Icon size={16} className="text-accent" />
                  <span className="text-sm font-medium text-text-main">
                    {plant}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
```

### 8.2 Créer la section Map

- [ ] Créer le fichier `components/sections/MapSection.tsx` :

```tsx
interface MapSectionProps {
  embedUrl?: string;
}

export function MapSection({ embedUrl }: MapSectionProps) {
  // Default embed URL for Charente region
  const defaultUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178621.6789!2d-0.3!3d45.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDQyJzAwLjAiTiAwwrAxOCcwMC4wIlc!5e0!3m2!1sfr!2sfr!4v1234567890";

  return (
    <section className="py-24 bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-bold uppercase tracking-wider">
            Localisation
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
            Nos ruchers en Charente
          </h2>
          <p className="text-text-muted-light max-w-2xl mx-auto">
            Situés dans le département de la Charente, nos ruchers bénéficient
            d&apos;un environnement préservé et d&apos;une flore exceptionnelle.
          </p>
        </div>

        {/* Map */}
        <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-white/10">
          <iframe
            src={embedUrl || defaultUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localisation de nos ruchers"
            className="absolute inset-0"
          />
        </div>

        {/* Location Info */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-surface-dark p-6 rounded-xl border border-white/5">
            <h3 className="text-white font-bold mb-2">Cherves-Richemont</h3>
            <p className="text-text-muted-light text-sm">
              16370 • Région du Cognac
            </p>
          </div>
          <div className="bg-surface-dark p-6 rounded-xl border border-white/5">
            <h3 className="text-white font-bold mb-2">Saint-Amant-de-Boixe</h3>
            <p className="text-text-muted-light text-sm">
              16330 • Proche de l&apos;Abbaye
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### 8.3 Mettre à jour le fichier d'export

- [ ] Mettre à jour `components/cards/index.ts` :

```ts
export { FeatureCard } from "./FeatureCard";
export { ProductCard } from "./ProductCard";
export { TestimonialCard } from "./TestimonialCard";
export { TerroirCard } from "./TerroirCard";
```

- [ ] Mettre à jour `components/sections/index.ts` :

```ts
export { HeroSection } from "./HeroSection";
export { FeaturesSection } from "./FeaturesSection";
export { ProductsGrid } from "./ProductsGrid";
export { StorySection } from "./StorySection";
export { TestimonialsSection } from "./TestimonialsSection";
export { CTASection } from "./CTASection";
export { PageHeader } from "./PageHeader";
export { ValuesSection } from "./ValuesSection";
export { ProcessSection } from "./ProcessSection";
export { GallerySection } from "./GallerySection";
export { MapSection } from "./MapSection";
```

### 8.4 Créer la page Nos Ruchers

- [ ] Créer le fichier `app/nos-ruchers/page.tsx` :

```tsx
import { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { MapSection } from "@/components/sections/MapSection";
import { CTASection } from "@/components/sections/CTASection";
import { TerroirCard } from "@/components/cards/TerroirCard";
import { terroirs } from "@/lib/data/terroirs";

export const metadata: Metadata = {
  title: "Nos Ruchers",
  description:
    "Découvrez nos ruchers en Charente : Cherves-Richemont au cœur du Cognac et Saint-Amant-de-Boixe près de l'abbaye millénaire.",
};

export default function NosRuchersPage() {
  return (
    <>
      <PageHeader
        badge="Nos terroirs"
        title="Nos Ruchers en Charente"
        description="Découvrez les terroirs d'exception où nos abeilles butinent une flore riche et variée, pour produire des miels aux caractères uniques."
      />

      {/* Terroirs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="space-y-24">
            {terroirs.map((terroir, index) => (
              <TerroirCard
                key={terroir.id}
                terroir={terroir}
                reversed={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Environment Section */}
      <section className="py-24 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-bold uppercase tracking-wider">
              Environnement préservé
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mt-4 mb-6">
              Un écosystème respecté
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Nos ruches sont implantées loin des zones de culture intensive,
              dans des espaces naturels préservés où la biodiversité s&apos;épanouit.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "25+", label: "Années d'expérience" },
              { value: "50+", label: "Ruches actives" },
              { value: "2", label: "Terroirs" },
              { value: "100%", label: "Naturel" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-white rounded-xl border border-border-light"
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-text-muted text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MapSection />

      <CTASection
        title="Envie de découvrir nos ruchers ?"
        description="Contactez-nous pour organiser une visite guidée et découvrir le monde fascinant des abeilles."
        primaryCTA={{ label: "Nous contacter", href: "/contact" }}
        secondaryCTA={{ label: "Voir nos miels", href: "/nos-miels" }}
      />
    </>
  );
}
```

---

## Step 8 Verification Checklist

- [ ] La page `/nos-ruchers` s'affiche sans erreur
- [ ] Le header affiche "Nos Ruchers en Charente"
- [ ] Les 2 terroirs sont affichés en alternance (image gauche/droite)
- [ ] Pour chaque terroir :
  - [ ] Badge avec code postal
  - [ ] Nom et sous-titre
  - [ ] Description
  - [ ] Liste des caractéristiques
  - [ ] Tags de flore mellifère
- [ ] La section statistiques affiche 4 chiffres clés
- [ ] La carte Google Maps s'affiche
- [ ] Les 2 localisations sont indiquées sous la carte
- [ ] La section CTA est visible en bas de page

---

## Step 8 STOP & COMMIT

**STOP & COMMIT:** Arrêtez-vous ici et attendez que l'utilisateur teste, stage et committe le changement.

```bash
git add .
git commit -m "feat: implement Nos Ruchers page with terroirs and map"
```
