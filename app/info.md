1. Bloc d’introduction (hero / valeur centrale)

Titre
Pourquoi choisir notre miel ?

Accroche
Une apiculture respectueuse des abeilles et de l’environnement pour un miel authentique, récolté avec patience, exigence et passion.

Texte court
Chaque pot est le reflet de notre engagement : préserver les abeilles, respecter la nature et vous offrir un miel brut, local et sincère.

CTA
Découvrir notre méthode apicole
Voir nos miels

2. Mise en valeur de la méthode (section “Notre engagement”)

Titre
Une méthode artisanale, sans compromis

Texte
Nous pratiquons une apiculture à taille humaine, centrée sur le bien-être des abeilles. Nos ruches sont implantées dans des zones préservées, loin des cultures intensives, afin de garantir une production saine et durable.

Points clés

Respect du cycle naturel des colonies

Récoltes raisonnées, jamais excessives

Interventions limitées et non invasives

3. Cartes de valeurs (tes éléments existants, enrichis)

Tu peux conserver ta structure JSON et enrichir légèrement les descriptions ou ajouter une ligne secondaire (subtitle) pour plus d’impact visuel.

```{
    icon: Leaf,
    title: "100 % Naturel",
    description:
        "Aucun ajout, aucun traitement chimique. Un miel brut, non transformé, tel que les abeilles l’ont produit.",
},
{
    icon: MapPin,
    title: "Production Locale",
    description:
        "Récolté et mis en pot directement au rucher, pour une fraîcheur maximale et une traçabilité totale.",
},
{
    icon: Heart,
    title: "Apiculture Durable",
    description:
        "La protection des abeilles et de la biodiversité guide chacune de nos décisions.",
}
```
4. Section pédagogique (différenciation)

Titre
Ce qui fait vraiment la différence

Blocs possibles

Miel non chauffé
Préserve les enzymes, les arômes et les bienfaits naturels.

Extraction douce
Par centrifugation lente, sans filtration excessive.

Respect des saisons
Chaque miel reflète une floraison et un terroir précis.

5. Preuve de confiance (social proof)

Titre
Un miel apprécié pour son authenticité

Éléments possibles

Témoignages clients (courts, sincères)

Mention “Apiculteur récoltant”

Labels ou démarches (si existants)

Nombre de ruches / années d’expérience

Exemple de texte :

“Un miel au goût vrai, comme autrefois. On sent le respect du produit et des abeilles.”

6. Section “En savoir plus” (contenu approfondi)

Titre
Notre méthode, en détail

Texte
De l’installation des ruches à la mise en pot, chaque étape est maîtrisée par nos soins. Nous privilégions la lenteur, l’observation et l’adaptation aux besoins des colonies plutôt qu’une logique de rendement.

CTA
En savoir plus sur notre méthode
Visiter le rucher

7. Appel à l’action final

Titre
Goûtez la différence

Texte
Choisir notre miel, c’est soutenir une apiculture responsable et redécouvrir le vrai goût du miel.

Boutons
Découvrir nos miels
Commander en ligne

1. Arborescence complète de la page (UX)
/pourquoi-notre-miel
│
├─ HeroSection
│   ├─ H1 (SEO)
│   ├─ Texte d’accroche
│   └─ CTA principal
│
├─ EngagementSection
│   ├─ H2
│   ├─ Texte explicatif
│   └─ Liste de principes
│
├─ ValuesSection
│   ├─ Cartes (icône + titre + description)
│
├─ DifferenceSection
│   ├─ H2
│   ├─ Blocs pédagogiques
│
├─ MethodSection
│   ├─ H2
│   ├─ Texte détaillé
│   └─ CTA secondaire
│
├─ TrustSection
│   ├─ Témoignages / preuves
│
└─ FinalCTASection
    ├─ H2
    ├─ Texte
    └─ Boutons

Parcours logique : valeur → preuve → pédagogie → confiance → conversion

2. Textes optimisés SEO (prêts à l’emploi)
SEO – Mots-clés ciblés

miel artisanal

miel local

apiculteur récoltant

miel naturel non chauffé

apiculture durable

miel français

Hero (H1)

Pourquoi choisir notre miel artisanal et local ?

Meta description

Miel artisanal 100 % naturel, récolté localement par un apiculteur engagé. Découvrez une apiculture durable respectueuse des abeilles.

3. Contenu structuré en JSON (source unique)
```
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

4. Exemples de composants React
Page principale
```tsx
import { whyOurHoneyContent } from "@/data/whyOurHoneyContent";

export default function WhyOurHoneyPage() {
  const { hero, engagement, values, difference, method, finalCta } =
    whyOurHoneyContent;

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

ValuesSection (cartes)
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

Résultat

✅ Page SEO-friendly

✅ Contenu réutilisable (JSON-driven)

✅ UX claire et orientée conversion

✅ Facilement maintenable et scalable