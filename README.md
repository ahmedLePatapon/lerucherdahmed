# 🐝 Le Rucher d'Ahmed

Site web officiel du **Rucher d'Ahmed** — Miels artisanaux récoltés avec soin en Charente, directement du producteur.

## 📖 À propos du projet

Application web Next.js présentant notre exploitation apicole, nos miels artisanaux et notre approche durable de l'apiculture. Le site permet aux visiteurs de découvrir nos produits, nos ruchers et notre histoire.

## ✨ Fonctionnalités principales

- **Catalogue de miels** : Présentation détaillée de nos différents miels (acacia, châtaignier, toutes fleurs, etc.)
- **Nos ruchers** : Découverte de nos emplacements et terroirs en Charente
- **Notre apiculture** : Explication de nos pratiques apicoles responsables
- **Histoire & rencontres** : Présentation de notre parcours et nos valeurs
- **Interface d'administration** : Gestion des produits et commandes
- **Design responsive** : Optimisé pour tous les appareils

## 🛠️ Technologies utilisées

- **Framework** : [Next.js 16](https://nextjs.org/) (App Router)
- **Language** : TypeScript
- **Styling** : [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components** : 
  - Lucide React (icônes)
  - clsx & tailwind-merge (gestion des classes)
- **React** : Version 19.2.3

## 🚀 Installation et démarrage

### Prérequis
- Node.js 20+
- npm, yarn, pnpm ou bun

### Installation

```bash
# Cloner le repository
git clone https://github.com/ahmedLePatapon/lerucherdahmed.git

# Se déplacer dans le dossier
cd lerucherdahmed

# Installer les dépendances
npm install
```

### Lancement en développement

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Build de production

```bash
npm run build
npm start
```

## 📁 Structure du projet

```
lerucherdahmed/
├── app/                      # Routes Next.js (App Router)
│   ├── (public)/            # Pages publiques
│   │   ├── page.tsx         # Page d'accueil
│   │   ├── nos-miels/       # Catalogue de miels
│   │   ├── nos-ruchers/     # Présentation des ruchers
│   │   ├── notre-apiculture/ # Nos pratiques apicoles
│   │   ├── a-propos/        # À propos
│   │   └── rencontre/       # Pages de rencontres
│   └── admin/               # Interface d'administration
├── components/              # Composants React réutilisables
│   ├── sections/           # Sections de page (Hero, Features, etc.)
│   ├── cards/              # Cartes de contenu
│   └── admin/              # Composants d'administration
├── lib/                     # Utilitaires et données
│   ├── data/               # Données statiques (miels, ruchers, etc.)
│   └── auth.ts             # Authentification
├── design/                  # Prototypes HTML statiques
├── public/                  # Assets statiques
└── plans/                   # Documentation et plans
```

## 🎨 Design

Le design utilise une palette de couleurs naturelles et chaleureuses :
- **Primaire** : Tons ambrés (miel)
- **Secondaire** : Turquoise doux
- **Typographie** : Plus Jakarta Sans (corps) et Playfair Display (titres)

Les prototypes HTML statiques sont disponibles dans le dossier `/design`.

## 🌍 Pages principales

- `/` - Accueil
- `/nos-miels` - Catalogue de nos miels
- `/nos-ruchers` - Présentation de nos ruchers et terroirs
- `/notre-apiculture` - Nos méthodes et pratiques
- `/a-propos` - Notre histoire
- `/contact` - Nous contacter
- `/admin` - Interface d'administration (protégée)

## 🔧 Scripts disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm start        # Lancer en production
npm run lint     # Vérifier le code avec ESLint
```

## 📝 License

Ce projet est privé et appartient au Rucher d'Ahmed.

## 📧 Contact

Pour toute question : [Le Rucher d'Ahmed](https://lerucherdahmed.fr)

---

Fait avec 🐝 et 🍯 en Charente