# 🍯 Intégration du Design - Le Rucher d'Ahmed

## Vue d'ensemble

Ce dossier contient la documentation d'implémentation complète pour intégrer les maquettes HTML dans l'application Next.js.

## Prérequis

Assurez-vous d'être sur la branche `feature/integration-design-html` avant de commencer.

```bash
git checkout feature/integration-design-html
# ou créer la branche si elle n'existe pas :
git checkout -b feature/integration-design-html main
```

## Structure des fichiers de documentation

| Fichier | Étape | Description |
|---------|-------|-------------|
| [01-theme-config.md](./01-theme-config.md) | 1 | Configuration du thème Tailwind et polices |
| [02-ui-components.md](./02-ui-components.md) | 2 | Composants UI de base (Button, Badge, Input, Card) |
| [03-layout-components.md](./03-layout-components.md) | 3 | Composants de layout (Header, Footer, Logo) |
| [04-layout-data.md](./04-layout-data.md) | 4 | Layout principal et données statiques |
| [05-page-accueil.md](./05-page-accueil.md) | 5 | Page Accueil complète |
| [06-page-nos-miels.md](./06-page-nos-miels.md) | 6 | Page Nos Miels (catalogue) |
| [07-page-a-propos.md](./07-page-a-propos.md) | 7 | Page À propos |
| [08-page-nos-ruchers.md](./08-page-nos-ruchers.md) | 8 | Page Nos Ruchers |
| [09-page-contact.md](./09-page-contact.md) | 9 | Page Contact |
| [10-seo-metadata.md](./10-seo-metadata.md) | 10 | SEO et métadonnées |

## Design System de référence

### Palette de couleurs

| Variable | Valeur | Usage |
|----------|--------|-------|
| `--primary` | `#F2B705` | Jaune miel - Couleur principale |
| `--primary-dark` | `#D98E04` | Ambre doré - Hover states |
| `--accent` | `#6B8E23` | Vert naturel - Badges, icônes nature |
| `--background-light` | `#FAF7F2` | Blanc cassé - Fond clair |
| `--background-dark` | `#1C1C1C` | Noir profond - Fond sombre |
| `--surface-light` | `#FFFFFF` | Blanc pur - Cards mode clair |
| `--surface-dark` | `#2A2A2A` | Noir léger - Cards mode sombre |
| `--text-main` | `#1C1C1C` | Noir - Texte principal |
| `--text-light` | `#FAF7F2` | Blanc cassé - Texte sur fond sombre |
| `--text-muted` | `#555555` | Gris - Texte secondaire |

### Typographie

- **Police principale** : Plus Jakarta Sans
- **Poids** : 400 (normal), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)

### Icônes

Utilisation de **Lucide React** comme alternative à Material Symbols.

## Workflow d'implémentation

1. Suivre les étapes **dans l'ordre** (1 → 10)
2. À chaque **STOP & COMMIT**, tester et committer le changement
3. Vérifier chaque checklist avant de passer à l'étape suivante

## Commandes utiles

```bash
# Démarrer le serveur de développement
npm run dev

# Build de production
npm run build

# Linting
npm run lint
```
