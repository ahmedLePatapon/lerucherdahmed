# Étape 10 : SEO et Métadonnées

## Goal
Optimiser le SEO de toutes les pages avec des métadonnées complètes (title, description, OpenGraph) et ajouter les fichiers SEO standards.

## Fichiers à créer/modifier
- `app/layout.tsx` (modifier)
- `app/robots.ts`
- `app/sitemap.ts`
- `app/opengraph-image.tsx` (optionnel)
- `public/favicon.ico`

---

## Step-by-Step Instructions

### 10.1 Mettre à jour le layout principal avec métadonnées complètes

- [ ] Remplacer le contenu de `app/layout.tsx` par :

```tsx
import type { Metadata, Viewport } from "next";
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://lerucherdahmed.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Le Rucher d'Ahmed - Miel Artisanal 100% Naturel en Charente",
    template: "%s | Le Rucher d'Ahmed",
  },
  description:
    "Découvrez nos miels artisanaux 100% naturels, récoltés avec passion en Charente depuis 1998. Miel de lavande, acacia, châtaignier et plus encore. Livraison en France.",
  keywords: [
    "miel artisanal",
    "miel naturel",
    "miel bio",
    "apiculture",
    "Charente",
    "miel local",
    "Le Rucher d'Ahmed",
    "miel de lavande",
    "miel d'acacia",
    "miel de châtaignier",
    "apiculteur",
    "miel français",
    "miel producteur",
  ],
  authors: [{ name: "Le Rucher d'Ahmed", url: siteUrl }],
  creator: "Le Rucher d'Ahmed",
  publisher: "Le Rucher d'Ahmed",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Le Rucher d'Ahmed",
    title: "Le Rucher d'Ahmed - Miel Artisanal 100% Naturel",
    description:
      "Découvrez nos miels artisanaux 100% naturels, récoltés avec passion en Charente depuis 1998.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Le Rucher d'Ahmed - Miel artisanal de Charente",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Le Rucher d'Ahmed - Miel Artisanal 100% Naturel",
    description:
      "Découvrez nos miels artisanaux 100% naturels, récoltés avec passion en Charente.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "food",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF7F2" },
    { media: "(prefers-color-scheme: dark)", color: "#1C1C1C" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${plusJakartaSans.variable} font-sans`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

### 10.2 Créer le fichier robots.ts

- [ ] Créer le fichier `app/robots.ts` :

```ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://lerucherdahmed.fr";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
```

### 10.3 Créer le fichier sitemap.ts

- [ ] Créer le fichier `app/sitemap.ts` :

```ts
import type { MetadataRoute } from "next";
import { products } from "@/lib/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://lerucherdahmed.fr";

  // Static pages
  const staticPages = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${siteUrl}/nos-miels`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${siteUrl}/nos-ruchers`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/a-propos`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  // Product pages (if you have individual product pages)
  const productPages = products.map((product) => ({
    url: `${siteUrl}/nos-miels/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...productPages];
}
```

### 10.4 Créer le fichier manifest.json

- [ ] Créer le fichier `public/manifest.json` :

```json
{
  "name": "Le Rucher d'Ahmed",
  "short_name": "Rucher Ahmed",
  "description": "Miel artisanal 100% naturel de Charente",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#FAF7F2",
  "theme_color": "#F2B705",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### 10.5 Vérifier les métadonnées de chaque page

Les métadonnées de chaque page ont déjà été ajoutées dans les étapes précédentes. Voici un récapitulatif pour vérification :

#### Page Accueil (`app/page.tsx`)
Utilise les métadonnées par défaut du layout.

#### Page Nos Miels (`app/nos-miels/page.tsx`)
```tsx
export const metadata: Metadata = {
  title: "Nos Miels",
  description:
    "Découvrez notre gamme de miels artisanaux : miel de lavande, acacia, châtaignier et plus encore. 100% naturel, récolté en Charente.",
};
```

#### Page À propos (`app/a-propos/page.tsx`)
```tsx
export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez l'histoire d'Ahmed, apiculteur passionné en Charente depuis 1998. Notre philosophie, nos valeurs et notre engagement pour une apiculture durable.",
};
```

#### Page Nos Ruchers (`app/nos-ruchers/page.tsx`)
```tsx
export const metadata: Metadata = {
  title: "Nos Ruchers",
  description:
    "Découvrez nos ruchers en Charente : Cherves-Richemont au cœur du Cognac et Saint-Amant-de-Boixe près de l'abbaye millénaire.",
};
```

#### Page Contact (`app/contact/page.tsx`)
```tsx
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Le Rucher d'Ahmed pour toute question sur nos miels artisanaux, commander ou organiser une visite de nos ruchers en Charente.",
};
```

### 10.6 Ajouter le fichier d'environnement

- [ ] Créer le fichier `.env.local` (ne pas committer ce fichier) :

```env
NEXT_PUBLIC_SITE_URL=https://lerucherdahmed.fr
```

- [ ] Ajouter `.env.local` au `.gitignore` s'il n'y est pas déjà.

### 10.7 Créer les images placeholder pour SEO

- [ ] Créer une image OpenGraph placeholder `public/og-image.jpg` :

Pour l'instant, vous pouvez télécharger une image placeholder ou créer une image de 1200x630 pixels avec :
- Fond couleur miel (#F2B705)
- Logo "Le Rucher d'Ahmed"
- Texte "Miel artisanal de Charente"

**Note:** Cette image sera à remplacer par une vraie image de branding plus tard.

### 10.8 Ajouter le JSON-LD pour le SEO structuré (optionnel mais recommandé)

- [ ] Créer le fichier `components/seo/JsonLd.tsx` :

```tsx
interface LocalBusinessProps {
  name: string;
  description: string;
  url: string;
  telephone: string;
  email: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
}

export function LocalBusinessJsonLd({
  name,
  description,
  url,
  telephone,
  email,
  address,
}: LocalBusinessProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name,
    description,
    url,
    telephone,
    email,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      postalCode: address.postalCode,
      addressCountry: address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.7167,
      longitude: -0.2833,
    },
    priceRange: "€€",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface ProductProps {
  name: string;
  description: string;
  image: string;
  price: number;
  currency?: string;
  availability?: string;
}

export function ProductJsonLd({
  name,
  description,
  image,
  price,
  currency = "EUR",
  availability = "https://schema.org/InStock",
}: ProductProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image,
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: currency,
      availability,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
```

---

## Step 10 Verification Checklist

- [ ] Le layout principal contient les métadonnées complètes
- [ ] Le fichier `robots.txt` est généré à `/robots.txt`
- [ ] Le fichier `sitemap.xml` est généré à `/sitemap.xml`
- [ ] Le fichier `manifest.json` existe dans public
- [ ] Vérifier les balises meta dans le HTML :

```bash
# Démarrer le serveur de dev
npm run dev

# Ouvrir http://localhost:3000 et inspecter le HTML (Cmd+U ou View Source)
# Vérifier la présence de :
# - <title>
# - <meta name="description">
# - <meta property="og:title">
# - <meta property="og:description">
# - <meta property="og:image">
# - <link rel="canonical">
```

- [ ] Tester le preview de partage :
  - Utiliser https://www.opengraph.xyz/ pour tester l'URL en production
  - Ou vérifier manuellement les balises og:*

- [ ] Chaque page a un title unique :
  - [ ] Accueil : "Le Rucher d'Ahmed - Miel Artisanal 100% Naturel en Charente"
  - [ ] Nos Miels : "Nos Miels | Le Rucher d'Ahmed"
  - [ ] À propos : "À propos | Le Rucher d'Ahmed"
  - [ ] Nos Ruchers : "Nos Ruchers | Le Rucher d'Ahmed"
  - [ ] Contact : "Contact | Le Rucher d'Ahmed"

---

## Step 10 STOP & COMMIT

**STOP & COMMIT:** Arrêtez-vous ici et attendez que l'utilisateur teste, stage et committe le changement.

```bash
git add .
git commit -m "feat: add SEO metadata, robots.txt, sitemap, and manifest"
```

---

## 🎉 Intégration Terminée !

Félicitations ! L'intégration du design HTML dans Next.js est maintenant complète.

### Récapitulatif des fonctionnalités implémentées :

1. ✅ Configuration du thème Tailwind avec couleurs personnalisées
2. ✅ Composants UI de base (Button, Badge, Input, Card)
3. ✅ Layout avec Header responsive et Footer
4. ✅ Données statiques (produits, témoignages, terroirs)
5. ✅ Page Accueil complète
6. ✅ Page Nos Miels (catalogue)
7. ✅ Page À propos
8. ✅ Page Nos Ruchers
9. ✅ Page Contact avec formulaire fonctionnel
10. ✅ SEO et métadonnées optimisées

### Prochaines étapes suggérées :

- [ ] Ajouter les vraies images de produits
- [ ] Créer les pages individuelles de produits (`/nos-miels/[slug]`)
- [ ] Configurer un service d'envoi d'emails (Resend, SendGrid)
- [ ] Ajouter un système de panier (si e-commerce)
- [ ] Déployer sur Vercel
