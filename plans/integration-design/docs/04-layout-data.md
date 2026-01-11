# Étape 4 : Layout Principal et Données Statiques

## Goal
Intégrer Header/Footer dans le layout racine et créer les fichiers de données statiques pour les produits, témoignages et navigation.

## Fichiers à créer/modifier
- `app/layout.tsx` (modifier)
- `lib/data/navigation.ts`
- `lib/data/products.ts`
- `lib/data/testimonials.ts`
- `lib/data/index.ts`

---

## Step-by-Step Instructions

### 4.1 Créer les données de navigation

- [ ] Créer le fichier `lib/data/navigation.ts` :

```ts
export interface NavItem {
  label: string;
  href: string;
}

export const mainNavigation: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Nos Miels", href: "/nos-miels" },
  { label: "Nos Ruchers", href: "/nos-ruchers" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export const footerNavigation: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Nos Miels", href: "/nos-miels" },
  { label: "Nos Ruchers", href: "/nos-ruchers" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export const footerInfoLinks: NavItem[] = [
  { label: "Livraison", href: "/livraison" },
  { label: "Conditions générales", href: "/cgv" },
  { label: "Politique de confidentialité", href: "/confidentialite" },
  { label: "Mentions légales", href: "/mentions-legales" },
];
```

### 4.2 Créer les données des produits

- [ ] Créer le fichier `lib/data/products.ts` :

```ts
export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  description: string;
  shortDescription: string;
  image: string;
  badge?: "best-seller" | "nouveau" | "douceur" | "intense";
  rating: number;
  weight: string;
  harvest?: string;
  usage?: string;
  season?: "printemps" | "été" | "automne" | "toutes";
  taste?: "doux" | "moyen" | "intense";
  inStock: boolean;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Miel de Lavande",
    slug: "miel-de-lavande",
    price: 12.0,
    description:
      "Un miel crémeux aux notes florales délicates, récolté sur les plateaux ensoleillés de Provence. Sa couleur dorée et sa texture onctueuse en font un incontournable pour les amateurs de saveurs subtiles.",
    shortDescription:
      "Un miel crémeux aux notes florales délicates, récolté sur les plateaux ensoleillés de Provence.",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&q=80",
    badge: "best-seller",
    rating: 4.9,
    weight: "500g",
    harvest: "Juillet",
    usage: "Idéal sur tartines et dans le thé",
    season: "été",
    taste: "doux",
    inStock: true,
    featured: true,
  },
  {
    id: "2",
    name: "Miel d'Acacia",
    slug: "miel-acacia",
    price: 14.0,
    description:
      "Limpide et liquide, ce miel est apprécié pour sa grande douceur et son index glycémique modéré. Parfait pour sucrer les thés et infusions sans en altérer les saveurs.",
    shortDescription:
      "Limpide et liquide, apprécié pour sa grande douceur et son index glycémique modéré.",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80",
    badge: "douceur",
    rating: 4.8,
    weight: "500g",
    harvest: "Mai",
    usage: "Pour sucrer les thés",
    season: "printemps",
    taste: "doux",
    inStock: true,
    featured: true,
  },
  {
    id: "3",
    name: "Miel de Châtaignier",
    slug: "miel-chataignier",
    price: 11.0,
    description:
      "Un miel de caractère, corsé et boisé, parfait pour les amateurs de saveurs puissantes. Sa couleur ambrée foncée et son goût persistant en font un allié idéal des fromages et plats rustiques.",
    shortDescription:
      "Un miel de caractère, corsé et boisé, parfait pour les amateurs de saveurs puissantes.",
    image: "https://images.unsplash.com/photo-1471943311424-646960669fbc?w=800&q=80",
    badge: "intense",
    rating: 5.0,
    weight: "500g",
    harvest: "Septembre",
    usage: "Accompagne les fromages",
    season: "automne",
    taste: "intense",
    inStock: true,
    featured: true,
  },
  {
    id: "4",
    name: "Miel de Printemps",
    slug: "miel-printemps",
    price: 12.5,
    description:
      "Un miel onctueux récolté en début de saison, aux notes florales délicates rappelant les vergers en fleurs. Sa texture crémeuse et son goût subtil en font un favori du petit-déjeuner.",
    shortDescription:
      "Un miel onctueux récolté en début de saison. Notes florales délicates.",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&q=80",
    badge: "nouveau",
    rating: 4.7,
    weight: "500g",
    harvest: "Avril",
    usage: "Idéal sur tartines",
    season: "printemps",
    taste: "doux",
    inStock: true,
    featured: false,
  },
  {
    id: "5",
    name: "Miel de Colza",
    slug: "miel-colza",
    price: 11.0,
    description:
      "Un miel blanc à la texture fine et crémeuse, récolté sur les vastes champs dorés de colza. Son goût délicat et sa consistance en font un excellent ingrédient pour la cuisine et la pâtisserie.",
    shortDescription:
      "Un miel blanc à la texture fine, récolté sur les vastes champs dorés.",
    image: "https://images.unsplash.com/photo-1550411294-098a08f14d1a?w=800&q=80",
    rating: 4.6,
    weight: "500g",
    harvest: "Mai",
    usage: "Cuisine et pâtisserie",
    season: "printemps",
    taste: "doux",
    inStock: true,
    featured: false,
  },
  {
    id: "6",
    name: "Miel Toutes Fleurs",
    slug: "miel-toutes-fleurs",
    price: 13.5,
    description:
      "Le reflet de la biodiversité locale. Un mélange naturel des nectars de saison, offrant un bouquet de saveurs unique qui varie d'une récolte à l'autre.",
    shortDescription:
      "Le reflet de la biodiversité locale. Un mélange naturel des nectars de saison.",
    image: "https://images.unsplash.com/photo-1601063476271-1d1b2b1e0e5f?w=800&q=80",
    rating: 4.8,
    weight: "500g",
    harvest: "Juin",
    usage: "Usage quotidien",
    season: "été",
    taste: "moyen",
    inStock: true,
    featured: false,
  },
];

export const featuredProducts = products.filter((p) => p.featured);

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByFilter(filters: {
  season?: Product["season"];
  taste?: Product["taste"];
}): Product[] {
  return products.filter((product) => {
    if (filters.season && product.season !== filters.season) return false;
    if (filters.taste && product.taste !== filters.taste) return false;
    return true;
  });
}
```

### 4.3 Créer les données des témoignages

- [ ] Créer le fichier `lib/data/testimonials.ts` :

```ts
export interface Testimonial {
  id: string;
  name: string;
  initial: string;
  role: string;
  text: string;
  rating: number;
  product?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sophie Martin",
    initial: "S",
    role: "Cliente vérifiée",
    text: "Un miel incroyable. J'ai commandé le miel de châtaignier et le goût est incomparable avec ce qu'on trouve en supermarché. Bravo !",
    rating: 5,
    product: "Miel de Châtaignier",
  },
  {
    id: "2",
    name: "Thomas Dubois",
    initial: "T",
    role: "Client vérifié",
    text: "Livraison rapide et emballage soigné (zéro plastique !). Le miel d'Acacia est d'une douceur... mes enfants l'adorent.",
    rating: 5,
    product: "Miel d'Acacia",
  },
  {
    id: "3",
    name: "Marie Leroy",
    initial: "M",
    role: "Cliente vérifiée",
    text: "J'ai eu la chance de visiter le rucher lors d'une porte ouverte. Ahmed est passionnant et son miel respire l'authenticité.",
    rating: 5,
  },
];
```

### 4.4 Créer les données des terroirs

- [ ] Créer le fichier `lib/data/terroirs.ts` :

```ts
export interface Terroir {
  id: string;
  name: string;
  location: string;
  postalCode: string;
  subtitle: string;
  description: string;
  characteristics: string[];
  flora: string[];
  image: string;
  mapUrl?: string;
}

export const terroirs: Terroir[] = [
  {
    id: "1",
    name: "Cherves-Richemont",
    location: "Charente",
    postalCode: "16370",
    subtitle: "Le Cœur du Cognac",
    description:
      "Au cœur des vignobles de Cognac, nos abeilles butinent une flore exceptionnelle. La proximité des vignes et des bosquets d'acacias offre un miel aux arômes complexes et raffinés.",
    characteristics: [
      "Climat doux et ensoleillé",
      "Sols calcaires riches",
      "Proximité des vignobles",
    ],
    flora: ["Vignes", "Acacia", "Fleurs sauvages"],
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  },
  {
    id: "2",
    name: "Saint-Amant-de-Boixe",
    location: "Charente",
    postalCode: "16330",
    subtitle: "L'Ombre de l'Abbaye",
    description:
      "Dans ce terroir boisé proche de l'abbaye millénaire, nos ruches profitent d'une forêt préservée riche en châtaigniers et en essences variées. Un environnement idéal pour un miel de caractère.",
    characteristics: [
      "Forêts préservées",
      "Biodiversité exceptionnelle",
      "Zone naturelle protégée",
    ],
    flora: ["Châtaignier", "Forêt", "Ronce"],
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
  },
];
```

### 4.5 Créer les données de contact

- [ ] Créer le fichier `lib/data/contact.ts` :

```ts
export interface ContactInfo {
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  social: {
    facebook?: string;
    instagram?: string;
  };
  mapEmbedUrl: string;
}

export const contactInfo: ContactInfo = {
  phone: "+33 6 52 79 12 29",
  email: "contact@lerucherdahmed.fr",
  address: {
    street: "123 Route des Fleurs",
    city: "Cherves-Richemont",
    postalCode: "16370",
    country: "France",
  },
  social: {
    facebook: "https://facebook.com/lerucherdahmed",
    instagram: "https://instagram.com/lerucherdahmed",
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44832.75668773898!2d-0.2833333!3d45.7166667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48007e8e8e8e8e8e%3A0x8e8e8e8e8e8e8e8e!2s16370%20Cherves-Richemont!5e0!3m2!1sfr!2sfr!4v1234567890",
};
```

### 4.6 Créer le fichier d'export index des données

- [ ] Créer le fichier `lib/data/index.ts` :

```ts
export * from "./navigation";
export * from "./products";
export * from "./testimonials";
export * from "./terroirs";
export * from "./contact";
```

### 4.7 Mettre à jour le layout principal

- [ ] Modifier le fichier `app/layout.tsx` :

```tsx
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Le Rucher d'Ahmed - Miel Artisanal 100% Naturel",
    template: "%s | Le Rucher d'Ahmed",
  },
  description:
    "Découvrez nos miels artisanaux 100% naturels, récoltés avec passion en Charente. Miel de lavande, acacia, châtaignier et bien plus.",
  keywords: [
    "miel artisanal",
    "miel naturel",
    "apiculture",
    "Charente",
    "miel local",
    "Le Rucher d'Ahmed",
  ],
  authors: [{ name: "Le Rucher d'Ahmed" }],
  creator: "Le Rucher d'Ahmed",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://lerucherdahmed.fr",
    siteName: "Le Rucher d'Ahmed",
    title: "Le Rucher d'Ahmed - Miel Artisanal 100% Naturel",
    description:
      "Découvrez nos miels artisanaux 100% naturels, récoltés avec passion en Charente.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${plusJakartaSans.variable} font-sans`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

### 4.8 Configurer les alias TypeScript

- [ ] Vérifier que `tsconfig.json` contient les alias de chemin :

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

---

## Step 4 Verification Checklist

- [ ] Le Header s'affiche en haut de toutes les pages
- [ ] Le Footer s'affiche en bas de toutes les pages
- [ ] La navigation fonctionne entre les pages (même si elles n'existent pas encore)
- [ ] Les données peuvent être importées sans erreur :

```tsx
// Test dans n'importe quel fichier :
import { products, testimonials, terroirs } from "@/lib/data";
console.log(products.length); // 6
```

- [ ] Pas d'erreurs dans la console

## Step 4 Verification Results

- [x] Le Header s'affiche en haut de toutes les pages (importé dans `app/layout.tsx`)
- [x] Le Footer s'affiche en bas de toutes les pages (importé dans `app/layout.tsx`)
- [x] La navigation peut être importée et utilisée (voir `lib/data`)
- [x] Les données peuvent être importées sans erreur (`import { products, testimonials, terroirs } from "@/lib/data"`)
- [x] Pas d'erreurs de build (dev/build lancé avec succès)

---

## Step 4 STOP & COMMIT

**STOP & COMMIT:** Arrêtez-vous ici et attendez que l'utilisateur teste, stage et committe le changement.

```bash
git add .
git commit -m "feat: add main layout with Header/Footer and static data"
```
