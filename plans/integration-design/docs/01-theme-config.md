# Étape 1 : Configuration du thème Tailwind et polices

## Goal
Configurer les couleurs personnalisées, les polices Google Fonts (Plus Jakarta Sans), et le système de design dans Tailwind CSS.

## Fichiers concernés
- `app/globals.css`
- `app/layout.tsx`

---

## Step-by-Step Instructions

### 1.1 Installer les dépendances

- [ ] Exécuter la commande suivante pour installer Lucide React (icônes) :

```bash
npm install lucide-react
```

### 1.2 Configurer globals.css

- [ ] Remplacer le contenu de `app/globals.css` par :

```css
@import "tailwindcss";

/* ===== CUSTOM THEME - LE RUCHER D'AHMED ===== */

@theme {
  /* Couleurs principales */
  --color-primary: #F2B705;
  --color-primary-dark: #D98E04;
  --color-accent: #6B8E23;
  
  /* Backgrounds */
  --color-background-light: #FAF7F2;
  --color-background-dark: #1C1C1C;
  
  /* Surfaces */
  --color-surface-light: #FFFFFF;
  --color-surface-dark: #2A2A2A;
  
  /* Textes */
  --color-text-main: #1C1C1C;
  --color-text-light: #FAF7F2;
  --color-text-muted: #555555;
  --color-text-muted-light: #cccccc;
  
  /* Bordures */
  --color-border-light: #E5E0D8;
  --color-border-dark: #333333;
  
  /* Fonts */
  --font-sans: "Plus Jakarta Sans", system-ui, sans-serif;
  --font-display: "Plus Jakarta Sans", system-ui, sans-serif;
}

/* ===== BASE STYLES ===== */

html {
  scroll-behavior: smooth;
}

body {
  @apply bg-background-light text-text-main font-sans antialiased;
}

/* ===== TYPOGRAPHY ===== */

h1, h2, h3, h4, h5, h6 {
  @apply font-display font-bold;
}

/* ===== UTILITIES ===== */

.text-balance {
  text-wrap: balance;
}

/* Animation pour badge "Nouvelle récolte" */
@keyframes pulse-dot {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse-dot {
  animation: pulse-dot 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Gradient text */
.text-gradient {
  @apply bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent;
}

/* Card hover effect */
.card-hover {
  @apply transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1;
}

/* Line clamp utilities */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

### 1.3 Configurer layout.tsx avec Google Fonts

- [ ] Remplacer le contenu de `app/layout.tsx` par :

```tsx
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
```

---

## Step 1 Verification Checklist

- [ ] Pas d'erreurs de build (`npm run dev` démarre sans erreur)
- [ ] La police Plus Jakarta Sans est chargée (vérifier dans l'onglet Network des DevTools)
- [ ] Les variables CSS sont disponibles dans l'inspecteur (`:root` ou `html`)
- [ ] La couleur de fond est `#FAF7F2` (blanc cassé)

---

## Step 1 STOP & COMMIT

**STOP & COMMIT:** Arrêtez-vous ici et attendez que l'utilisateur teste, stage et committe le changement.

```bash
git add .
git commit -m "feat: configure Tailwind theme and Google Fonts"
```
