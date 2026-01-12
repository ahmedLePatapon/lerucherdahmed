# Étape 7 : Page À propos

## Goal
Implémenter la page À propos avec l'histoire d'Ahmed, les valeurs/philosophie, le processus apicole en étapes, et une galerie photos.

## Fichiers à créer
- `app/a-propos/page.tsx`
- `components/sections/ProcessSection.tsx`
- `components/sections/ValuesSection.tsx`
- `components/sections/GallerySection.tsx`

---

## Step-by-Step Instructions

### 7.1 Créer la section Valeurs/Philosophie

- [ ] Créer le fichier `components/sections/ValuesSection.tsx` :

```tsx
import { RefreshCw, MapPin, Droplets } from "lucide-react";

const values = [
  {
    icon: RefreshCw,
    title: "Respect du Cycle",
    description:
      "Nous prélevons uniquement le surplus de miel, respectant le besoin vital des abeilles pour leur propre alimentation.",
  },
  {
    icon: MapPin,
    title: "Terroir Local",
    description:
      "Nos ruches sont sédentaires, implantées dans des zones préservées de Charente, garantissant un miel authentique et traçable.",
  },
  {
    icon: Droplets,
    title: "Méthode Douce",
    description:
      "Extraction à froid, sans chauffage ni filtration excessive, préservant toutes les qualités nutritives du miel.",
  },
];

export function ValuesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-bold uppercase tracking-wider">
            Notre philosophie
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mt-4 mb-6">
            Trois piliers fondamentaux
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Notre approche de l&apos;apiculture repose sur des valeurs simples mais
            essentielles : le respect de la nature et le bien-être de nos abeilles.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="relative p-8 rounded-2xl bg-background-light border border-border-light"
            >
              {/* Number */}
              <span className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                {index + 1}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm mb-6">
                <value.icon size={28} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-text-main mb-3">
                {value.title}
              </h3>
              <p className="text-text-muted leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### 7.2 Créer la section Processus

- [ ] Créer le fichier `components/sections/ProcessSection.tsx` :

```tsx
import { Flower2, Timer, Hand } from "lucide-react";

const steps = [
  {
    icon: Flower2,
    title: "Le Butinage",
    description:
      "Les abeilles parcourent jusqu'à 3 km autour de la ruche, visitant des milliers de fleurs pour collecter le précieux nectar.",
  },
  {
    icon: Timer,
    title: "La Maturation",
    description:
      "Dans la ruche, les abeilles ventilent le nectar pour réduire son humidité. Ce processus naturel peut prendre plusieurs semaines.",
  },
  {
    icon: Hand,
    title: "La Récolte Respectueuse",
    description:
      "Nous récoltons cadre par cadre, sans fumée excessive, en vérifiant que la colonie dispose de réserves suffisantes.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-bold uppercase tracking-wider">
            Notre savoir-faire
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
            L&apos;Art de l&apos;Apiculture
          </h2>
          <p className="text-text-muted-light max-w-2xl mx-auto">
            De la fleur au pot, découvrez les étapes qui font la qualité de notre
            miel artisanal.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Connector Line (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -translate-x-8 z-0" />
              )}

              <div className="relative z-10 bg-surface-dark p-8 rounded-2xl border border-white/5">
                {/* Step Number */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                    <step.icon size={24} />
                  </div>
                  <span className="text-primary font-bold text-sm uppercase tracking-wider">
                    Étape {index + 1}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-text-muted-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### 7.3 Créer la section Galerie

- [ ] Créer le fichier `components/sections/GallerySection.tsx` :

```tsx
import Image from "next/image";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80",
    alt: "Abeilles sur un rayon de miel",
  },
  {
    src: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&q=80",
    alt: "Pot de miel artisanal",
  },
  {
    src: "https://images.unsplash.com/photo-1471943311424-646960669fbc?w=800&q=80",
    alt: "Ruches dans la nature",
  },
  {
    src: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&q=80",
    alt: "Extraction du miel",
  },
];

export function GallerySection() {
  return (
    <section className="py-24 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-bold uppercase tracking-wider">
            En images
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mt-4 mb-6">
            La vie au rucher
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Quelques instants capturés au fil des saisons, témoins de notre
            passion pour l&apos;apiculture.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl group ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <div
                className={`relative ${
                  index === 0 ? "aspect-square" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes={
                    index === 0
                      ? "(max-width: 768px) 100vw, 50vw"
                      : "(max-width: 768px) 50vw, 25vw"
                  }
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### 7.4 Mettre à jour le fichier d'export des sections

- [ ] Modifier le fichier `components/sections/index.ts` pour ajouter :

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
```

### 7.5 Créer la page À propos

- [ ] Créer le fichier `app/a-propos/page.tsx` :

```tsx
import { Metadata } from "next";
import Image from "next/image";
import { Quote } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez l'histoire d'Ahmed, apiculteur passionné en Charente depuis 1998. Notre philosophie, nos valeurs et notre engagement pour une apiculture durable.",
};

export default function AProposPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-20 bg-background-dark">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark/95 via-background-dark/80 to-background-dark/60 z-10" />
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
          <div className="max-w-2xl">
            <span className="text-primary text-sm font-bold uppercase tracking-wider">
              Notre histoire
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mt-4 mb-8 leading-tight">
              Le Gardien des Abeilles
            </h1>
            <blockquote className="border-l-4 border-primary pl-6">
              <p className="text-xl text-text-muted-light italic leading-relaxed">
                &ldquo;L&apos;apiculture n&apos;est pas une exploitation, c&apos;est
                une collaboration silencieuse avec le vivant.&rdquo;
              </p>
              <footer className="mt-4 text-white font-medium">
                — Ahmed, Apiculteur depuis 1998
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80"
                  alt="Ahmed dans son rucher"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/10 rounded-2xl -z-10" />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="text-primary text-sm font-bold uppercase tracking-wider">
                Une rencontre, une vocation
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text-main mt-4 mb-8">
                L&apos;histoire d&apos;Ahmed
              </h2>

              <div className="space-y-6 text-text-muted leading-relaxed">
                <p>
                  Tout a commencé en 1998, lorsqu&apos;Ahmed, ingénieur agronome de
                  formation, a découvert l&apos;apiculture lors d&apos;un stage en
                  Charente. Ce qui devait être une simple expérience professionnelle
                  s&apos;est transformé en passion dévorante.
                </p>
                <p>
                  &ldquo;La première fois que j&apos;ai ouvert une ruche, j&apos;ai
                  été fasciné par l&apos;organisation parfaite de la colonie. Chaque
                  abeille connaît son rôle, chaque geste a un sens. C&apos;est une
                  société millénaire dont nous avons tant à apprendre.&rdquo;
                </p>
                <p>
                  Aujourd&apos;hui, avec plus de 25 ans d&apos;expérience, Ahmed gère
                  ses ruches avec une philosophie simple : respecter le rythme des
                  abeilles et ne prélever que le surplus de miel, sans jamais
                  compromettre la santé de ses colonies.
                </p>
              </div>

              {/* Quote Card */}
              <div className="mt-8 bg-background-light p-6 rounded-xl border-l-4 border-primary">
                <Quote size={24} className="text-primary/30 mb-2" />
                <p className="text-text-main italic">
                  &ldquo;Je ne suis pas le propriétaire de mes ruches, je n&apos;en
                  suis que le gardien. Mon rôle est de protéger leur habitat, et en
                  échange, elles m&apos;offrent ce qu&apos;elles ont de plus
                  précieux.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ValuesSection />
      <ProcessSection />
      <GallerySection />

      <CTASection
        title="Envie de visiter nos ruchers ?"
        description="Contactez-nous pour organiser une visite et découvrir notre univers de plus près."
        primaryCTA={{ label: "Nous contacter", href: "/contact" }}
        secondaryCTA={{ label: "Voir nos ruchers", href: "/nos-ruchers" }}
      />
    </>
  );
}
```

---

## Step 7 Verification Checklist

- [ ] La page `/a-propos` s'affiche sans erreur
- [ ] Le hero affiche :
  - [ ] Titre "Le Gardien des Abeilles"
  - [ ] Citation d'Ahmed
  - [ ] Image de fond
- [ ] La section histoire affiche :
  - [ ] Image d'Ahmed
  - [ ] Texte de l'histoire
  - [ ] Citation encadrée
- [ ] La section "Trois piliers fondamentaux" affiche 3 cartes numérotées
- [ ] La section "L'Art de l'Apiculture" affiche 3 étapes sur fond sombre
- [ ] La galerie photos affiche 4 images (1 grande + 3 petites)
- [ ] La section CTA est visible en bas de page

---

## Step 7 STOP & COMMIT

**STOP & COMMIT:** Arrêtez-vous ici et attendez que l'utilisateur teste, stage et committe le changement.

```bash
git add .
git commit -m "feat: implement À propos page with story, values, process and gallery"
```
