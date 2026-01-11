# Step 1 — Initialisation du projet Next.js

Commit: `chore: initialize Next.js 16 with TypeScript and Tailwind CSS 4`

Objectif
--------
Initialiser le projet Next.js 16.1.1 avec TypeScript, Tailwind CSS 4, App Router et ESLint. Préparer la base de fichiers nécessaires pour démarrer le développement.

Fichiers à créer
-----------------
- `package.json`
- `next.config.ts`
- `tsconfig.json`
- `tailwind.config.ts`
- `postcss.config.mjs`
- `.eslintrc.json`
- `.gitignore`
- `app/layout.tsx` et `app/page.tsx` (squelettes)
- `app/globals.css`

Commandes recommandées
----------------------
Exécuter (pnpm requis) :

```bash
pnpm create next-app@latest . --typescript --tailwind --app --eslint --import-alias "@/*"
pnpm add next-intl
pnpm add -D @types/node
pnpm add resend
```

Tests rapides
-------------
- `pnpm dev` doit démarrer sans erreur
- Accéder à `http://localhost:3000`
- Vérifier le hot-reload

Notes
-----
- Configurer l'alias `@/*` dans `tsconfig.json`.
- Ne pas commit de secrets; utiliser `.env.local` pour les clés externes.
