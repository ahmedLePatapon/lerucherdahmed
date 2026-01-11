---
title: "Implementation — Application Next.js 16 + Tailwind CSS 4"
feature: "application-nextjs-tailwind"
branch: "feat/init-nextjs-app"
---

# Application Next.js 16 + Tailwind CSS 4

## Goal
Initialiser l'application Next.js 16.1.1 avec TypeScript et Tailwind CSS 4, et configurer l'internationalisation FR/EN. Cette implémentation couvre l'étape 1 (initialisation complète) et l'étape 2 (i18n) du plan principal.

## Prerequisites
Assurez-vous d'être sur la branche `feat/init-nextjs-app`. Si elle n'existe pas, créez-la depuis `main`.

### Step-by-Step Instructions

#### Step 1: Initialisation du Projet Next.js
- [ ] Ouvrir un terminal à la racine du dépôt (`/Users/demha/Projets/perso/lerucherdahmed`).
- [ ] Exécuter les commandes d'initialisation ci-dessous pour créer les fichiers et installer les dépendances.
- [ ] Copier et coller les fichiers ci-dessous aux emplacements indiqués.

Copier et coller code: Créez les fichiers suivants avec le contenu exact.

- [ ] Créer `package.json`:

```json
{
  "name": "le-rucher-dahmed",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "prepare": "husky install"
  },
  "dependencies": {
    "next": "16.1.1",
    "react": "19.2.3",
    "react-dom": "19.2.3",
    "next-intl": "^2.0.0",
    "resend": "^1.0.0"
  },
  "devDependencies": {
    "typescript": "5.x",
    "tailwindcss": "4.x",
    "postcss": "8.x",
    "autoprefixer": "10.x",
    "eslint": "8.x",
    "eslint-config-next": "12.x",
    "@types/node": "^20.0.0"
  }
}
```

- [ ] Créer `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

- [ ] Créer `next.config.ts`:

```ts
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    formats: ['image/avif', 'image/webp']
  }
};

export default nextConfig;
```

- [ ] Créer `tailwind.config.ts`:

```ts
import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './design/**/*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F2B705',
        primaryDark: '#D98E04',
        accent: '#6B8E23',
        background: {
          light: '#FAF7F2',
          dark: '#1C1C1C'
        },
        text: {
          main: '#1C1C1C',
          muted: '#555555'
        }
      }
    }
  },
  plugins: []
};

export default config;
```

- [ ] Créer `postcss.config.mjs`:

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
};
```

- [ ] Créer `.eslintrc.json`:

```json
{
  "extends": ["next/core-web-vitals", "eslint:recommended"],
  "rules": {}
}
```

- [ ] Créer `.gitignore` (basic):

```
node_modules
.next
.env.local
dist
npm-debug.log
pnpm-lock.yaml
```

- [ ] Créer `.env.local.example`:

```
NEXT_PUBLIC_BASE_URL=http://localhost:3000
RESEND_API_KEY=re_xxx
CONTACT_EMAIL=contact@lerucherdahmed.com
```

- [ ] Installer les dépendances (exécuter):

```bash
pnpm install
```

##### Step 1 Verification Checklist
- [ ] `pnpm dev` démarre sans erreur
- [ ] `http://localhost:3000` affiche la page Next.js par défaut
- [ ] Les fichiers créés existent aux chemins indiqués

#### Step 1 STOP & COMMIT
**STOP & COMMIT:** Faites un commit avec le message `chore: initialize Next.js 16 with TypeScript and Tailwind CSS 4` puis poussez la branche. Une fois commité, revenez ici pour continuer.

#### Step 2: Configuration Internationalisation (i18n)
- [ ] Créer la configuration i18n et les fichiers de messages.
- [ ] Copier et coller les fichiers ci-dessous.

- [ ] Créer `middleware.ts` (détection de locale et redirection):

```ts
import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;
const SUPPORTED = ['fr', 'en'];
const DEFAULT_LOCALE = 'fr';

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  if (PUBLIC_FILE.test(pathname) || pathname.startsWith('/api')) {
    return;
  }

  const pathnameIsMissingLocale = SUPPORTED.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${DEFAULT_LOCALE}`, req.url));
  }

  if (pathnameIsMissingLocale) {
    // redirect to default locale preserving path
    return NextResponse.redirect(new URL(`/${DEFAULT_LOCALE}${pathname}`, req.url));
  }
}

export const config = {
  matcher: ['/((?!_next|static|api).*)']
};
```

- [ ] Créer `messages/fr.json`:

```json
{
  "nav": {
    "home": "Accueil",
    "honey": "Notre Miel",
    "about": "À propos",
    "contact": "Contact"
  },
  "common": {
    "order": "Commander"
  }
}
```

- [ ] Créer `messages/en.json`:

```json
{
  "nav": {
    "home": "Home",
    "honey": "Our Honey",
    "about": "About",
    "contact": "Contact"
  },
  "common": {
    "order": "Order"
  }
}
```

- [ ] Créer `app/[locale]/layout.tsx` (Server Component):

```tsx
import React from 'react';
import type { ReactNode } from 'react';

type Props = { params: { locale: string }; children: ReactNode };

export async function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'en' }];
}

export default async function LocaleLayout({ params, children }: Props) {
  const locale = params.locale;
  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body>
        {/* Fournir messages via contexte simple: wrapper minimal */}
        <div data-locale={locale} data-messages={JSON.stringify(messages)}>
          {children}
        </div>
      </body>
    </html>
  );
}
```

- [ ] Créer `app/[locale]/page.tsx` (page d'accueil locale minimale):

```tsx
import React from 'react';

type Props = { params: { locale: string } };

export default async function LocaleHome({ params }: Props) {
  const locale = params.locale;
  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold">{locale === 'fr' ? 'Le Rucher d\'Ahmed' : 'Ahmed\'s Apiary'}</h1>
        <p className="mt-4 text-lg">{messages.nav.home} — {messages.common.order}</p>
      </div>
    </main>
  );
}
```

##### Step 2 Verification Checklist
- [ ] Accéder à `/fr` et `/en` affiche la page correspondante
- [ ] `/` redirige vers `/fr`
- [ ] Les fichiers `messages/fr.json` et `messages/en.json` sont chargés sans erreur

#### Step 2 STOP & COMMIT
**STOP & COMMIT:** Faites un commit avec le message `feat: configure next-intl for FR/EN localization` puis poussez la branche. Après validation, continuer avec les étapes suivantes (extraction d'images, composants, pages).

---

## Vérifications additionnelles recommandées
- Linter: `pnpm lint` (configurer si nécessaire)
- Outils: configurer Prettier si désiré.

## Remarques finales
Ce document couvre les deux premières étapes critiques (initialisation et i18n) sous forme complètement copy-paste ready. Si vous validez ces commits, je peux générer les fichiers et composants pour les étapes suivantes (images, design system, navbar/footer, pages). Souhaitez-vous que je crée maintenant les fichiers sur le disque et lance `pnpm install` et `pnpm dev` pour vérifier le démarrage local ?
