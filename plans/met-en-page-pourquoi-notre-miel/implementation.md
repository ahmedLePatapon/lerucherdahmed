# Mise en page – Pourquoi notre miel

## Goal
Créer la page /pourquoi-notre-miel avec contenu statique structuré, composants réutilisables, SEO optimisé et design cohérent avec /histoire-passion.

## Prerequisites
Assure-toi d’être sur la branche `mise-en-page-pourquoi-notre-miel` avant de commencer. Si elle n’existe pas, crée-la à partir de main.

### Step-by-Step Instructions

#### Step 1: Préparer le contenu structuré (JSON)
 - [x] Crée le fichier `lib/data/whyOurHoneyContent.ts`
 - [x] Copie et colle le code suivant dans `lib/data/whyOurHoneyContent.ts` :

```typescript
export const whyOurHoneyContent = {
  seo: {
    title: "Pourquoi choisir notre miel artisanal et local",
    description:
      "Découvrez un miel 100 % naturel, local et durable, produit par un apiculteur récoltant respectueux des abeilles.",
  },
  hero: {
    title: "Pourquoi choisir notre miel artisanal et local ?",
    subtitle:
      "Une apiculture respectueuse des abeilles et de l’environnement pour un miel authentique et naturel.",
    cta: {
      label: "Découvrir notre méthode",
      link: "/notre-methode",
    },
  },
  engagement: {
    title: "Une apiculture artisanale, respectueuse et responsable",
    text:
      "Nous pratiquons une apiculture à taille humaine, centrée sur le bien-être des abeilles. Nos ruches sont implantées dans des zones préservées, garantissant un miel sain, local et non transformé.",
    points: [
      "Respect du cycle naturel des colonies",
      "Récoltes raisonnées et non intensives",
      "Aucune recherche de rendement excessif",
    ],
  },
  values: [
    {
      icon: "Leaf",
      title: "100 % Naturel",
      description:
        "Aucun ajout, aucun traitement chimique. Un miel brut, non chauffé, riche en arômes et bienfaits.",
    },
    {
      icon: "MapPin",
      title: "Production Locale",
      description:
        "Récolté et mis en pot directement au rucher, garantissant fraîcheur, qualité et traçabilité.",
    },
    {
      icon: "Heart",
      title: "Apiculture Durable",
      description:
        "La protection des abeilles et de la biodiversité est au cœur de notre engagement.",
    },
  ],
  difference: {
    title: "Ce qui rend notre miel unique",
    items: [
      {
        title: "Miel non chauffé",
        text:
          "La cristallisation naturelle est respectée afin de préserver enzymes et qualités nutritionnelles.",
      },
      {
        title: "Extraction douce",
        text:
          "Le miel est extrait lentement par centrifugation, sans filtration excessive.",
      },
      {
        title: "Respect des saisons",
        text:
          "Chaque miel reflète une floraison et un terroir précis.",
      },
    ],
  },
  method: {
    title: "Notre méthode apicole en détail",
    text:
      "De l’installation des ruches à la mise en pot, toutes les étapes sont réalisées par nos soins dans le respect des abeilles et du rythme naturel.",
    cta: {
      label: "En savoir plus sur notre méthode",
      link: "/notre-methode",
    },
  },
  finalCta: {
    title: "Goûtez la différence d’un vrai miel artisanal",
    text:
      "En choisissant notre miel, vous soutenez une apiculture durable et redécouvrez le goût authentique du miel.",
    buttons: [
      { label: "Découvrir nos miels", link: "/boutique" },
      { label: "Commander en ligne", link: "/boutique" },
    ],
  },
};
```

##### Step 1 Verification Checklist
- [ ] Aucun message d’erreur à l’import
- [ ] Le contenu est accessible dans une page ou un composant de test

#### Step 1 STOP & COMMIT
**STOP & COMMIT:** Teste, stage et commit ce fichier avant de poursuivre.

#### Step 2: Créer la page /pourquoi-notre-miel
- [ ] Crée le fichier `app/pourquoi-notre-miel/page.tsx`
- [ ] Copie et colle le code suivant dans `app/pourquoi-notre-miel/page.tsx` :
 - [x] Crée le fichier `app/pourquoi-notre-miel/page.tsx`
 - [x] Copie et colle le code suivant dans `app/pourquoi-notre-miel/page.tsx` :

```tsx
import { whyOurHoneyContent } from "@/lib/data/whyOurHoneyContent";
import HeroSection from "@/components/sections/HeroSection";
import EngagementSection from "@/components/sections/EngagementSection";
import ValuesSection from "@/components/cards/ValuesSection";
import DifferenceSection from "@/components/sections/DifferenceSection";
import MethodSection from "@/components/sections/MethodSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

export default function WhyOurHoneyPage() {
  const { hero, engagement, values, difference, method, finalCta } = whyOurHoneyContent;
  return (
    <main>
      <HeroSection {...hero} />
      <EngagementSection {...engagement} />
      <ValuesSection values={values} />
      <DifferenceSection {...difference} />
      <MethodSection {...method} />
      <FinalCTASection {...finalCta} />
    </main>
  );
}
```

##### Step 2 Verification Checklist
- [ ] La page /pourquoi-notre-miel s’affiche sans erreur
- [ ] Toutes les sections sont présentes et reçoivent le bon contenu

#### Step 2 STOP & COMMIT
**STOP & COMMIT:** Teste, stage et commit ce fichier avant de poursuivre.

#### Step 3: Adapter ou créer les composants de section manquants
- [ ] Vérifie la présence des composants : EngagementSection, DifferenceSection, MethodSection, FinalCTASection dans `components/sections/`
- [ ] Si un composant manque, crée-le dans `components/sections/` avec la structure suivante :
 - [x] Vérifie la présence des composants : EngagementSection, DifferenceSection, MethodSection, FinalCTASection dans `components/sections/`
 - [x] Si un composant manque, crée-le dans `components/sections/` avec la structure suivante :

```tsx
// Exemple pour DifferenceSection
import React from "react";

interface DifferenceItem {
  title: string;
  text: string;
}

interface DifferenceSectionProps {
  title: string;
  items: DifferenceItem[];
}

const DifferenceSection: React.FC<DifferenceSectionProps> = ({ title, items }) => (
  <section className="py-12">
    <h2 className="text-2xl font-bold mb-6">{title}</h2>
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((item, idx) => (
        <div key={idx} className="rounded-2xl p-6 shadow bg-white">
          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
          <p className="text-sm text-gray-700">{item.text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default DifferenceSection;
```

- [ ] Adapte le style pour coller à /histoire-passion (espacement, couleurs, typographies)
- [ ] Répète pour chaque section manquante
 - [x] Adapte le style pour coller à /histoire-passion (espacement, couleurs, typographies)
 - [x] Répète pour chaque section manquante

##### Step 3 Verification Checklist
- [ ] Tous les composants sont présents et stylés de façon cohérente
- [ ] Les props sont bien typées et le contenu s’affiche correctement

#### Step 3 STOP & COMMIT
**STOP & COMMIT:** Teste, stage et commit chaque composant avant de poursuivre.

#### Step 4: Intégrer les icônes et styles spécifiques
- [ ] Vérifie que les icônes (Leaf, MapPin, Heart) sont importées dans `components/cards/ValuesSection.tsx` :
 - [x] Vérifie que les icônes (Leaf, MapPin, Heart) sont importées dans `components/cards/ValuesSection.tsx` :

```tsx
import { Leaf, MapPin, Heart } from "lucide-react";

const icons = { Leaf, MapPin, Heart };

export function ValuesSection({ values }) {
  return (
    <section className="grid gap-6 md:grid-cols-3">
      {values.map((item, index) => {
        const Icon = icons[item.icon];
        return (
          <div key={index} className="rounded-2xl p-6 shadow">
            <Icon className="mb-4 h-8 w-8" />
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm">{item.description}</p>
          </div>
        );
      })}
    </section>
  );
}
```

- [ ] Harmonise les styles pour cohérence avec /histoire-passion
 - [x] Harmonise les styles pour cohérence avec /histoire-passion

##### Step 4 Verification Checklist
- [ ] Les icônes s’affichent correctement
- [ ] Les styles sont cohérents sur desktop et mobile
 - [x] Les icônes s’affichent correctement
 - [x] Les styles sont cohérents sur desktop et mobile

#### Step 4 STOP & COMMIT
**STOP & COMMIT:** Teste, stage et commit les modifications avant de poursuivre.

#### Step 5: Optimisation SEO et accessibilité
- [ ] Ajoute les balises SEO dans la page :
 - [x] Ajoute les balises SEO dans la page :

```tsx
// En haut de app/pourquoi-notre-miel/page.tsx
export const metadata = {
  title: whyOurHoneyContent.seo.title,
  description: whyOurHoneyContent.seo.description,
};
```

- [ ] Structure les titres (H1, H2, etc.) dans chaque section
- [ ] Vérifie l’accessibilité (aria-labels, contrastes, navigation clavier)
 - [x] Structure les titres (H1, H2, etc.) dans chaque section
 - [x] Vérifie l’accessibilité (aria-labels, contrastes, navigation clavier)

##### Step 5 Verification Checklist
- [ ] Les balises SEO sont présentes dans le <head>
- [ ] Les titres sont bien structurés
- [ ] La page est navigable au clavier et lisible par un lecteur d’écran

#### Step 5 STOP & COMMIT
**STOP & COMMIT:** Teste, stage et commit les modifications avant de poursuivre.

#### Step 6: Tests finaux et revue UX
- [ ] Relis la page, ajuste les textes si besoin
- [ ] Vérifie la responsivité sur desktop et mobile
- [ ] Clique sur tous les liens CTA
- [ ] Relis tous les textes pour éviter les fautes

##### Step 6 Verification Checklist
- [ ] La page est parfaite sur tous les appareils
- [ ] Tous les liens fonctionnent
- [ ] Les textes sont corrects et engageants

#### Step 6 STOP & COMMIT
**STOP & COMMIT:** Teste, stage et commit la version finale.
