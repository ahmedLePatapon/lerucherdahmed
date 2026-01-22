# Admin Dashboard

**Branch:** `feature/admin-dashboard`
**Description:** Convertir la page HTML d'administration en composants Next.js et ajouter la route `/admin`.

## Goal
Convertir la page fournie en un composant Next.js réutilisable et créer une route `app/admin` qui hérite du layout du site (ou utilise un layout admin dédié si souhaité). Permettre une future protection/authentification.

## Implementation Steps

### Step 1: Ajouter la route admin (page) et placeholder
**Files:** `app/admin/page.tsx`
**What:** Créer la route `http://localhost:3000/admin` avec une page `.tsx` minimale qui importe et rend le composant `AdminDashboard`.
**Testing:** Lancer `npm run dev` et ouvrir `/admin`. Vérifier que la page s'affiche et hérite du layout global.

### Step 2: Ajouter composants UI admin
**Files:** `components/admin/AdminDashboard.tsx`, `components/admin/Sidebar.tsx`, `components/admin/HeaderAdmin.tsx`, `components/admin/ProductsTable.tsx`, `components/admin/UpdatesList.tsx`
**What:** Convertir la structure HTML fournie en composants TSX modulaires. Réutiliser les primitives existantes sous `components/ui` et les cards sous `components/cards`.
**Testing:** Vérifier l'affichage de la sidebar, du header admin, du tableau produits et de la liste des mises à jour sur `/admin`.

### Step 3: (Optionnel) Ajouter layout admin dédié
**Files:** `app/admin/layout.tsx`, modifications mineures dans `components/admin/AdminDashboard.tsx`
**What:** Si on veut un layout admin sans le `Header`/`Footer` global, créer `app/admin/layout.tsx` pour envelopper uniquement le contenu admin.
**Testing:** Ouvrir `/admin` et valider que le layout admin est utilisé (Header/Footer absents si choisi) ; tester responsive.

### Step 4: Ajouter placeholder d'authentification
**Files:** `lib/auth.ts` (helper), `components/admin/LoginPrompt.tsx`
**What:** Ajouter des placeholders pour futur middleware/auth (commentaires/TODO + composant d'invite de login). Ne pas implémenter l'auth complète.
**Testing:** Accéder `/admin` et vérifier l'affichage du prompt si nécessaire et l'absence d'erreurs TypeScript.

### Step 5: Tests & Commit
**Files:** tous les fichiers ci-dessus
**What:** Lancer le dev server, corriger les warnings, s'assurer que l'UI est cohérente et committer par étapes (voir commits recommandés).
**Testing:** `npm run dev` + navigation manuelle ; exécuter `npm run build` si souhaité.

## Questions / Points à clarifier
- [NEEDS CLARIFICATION] Voulez-vous que l'interface admin garde le `Header`/`Footer` global existant (héritage du layout) ou qu'elle utilise un layout admin dédié (`app/admin/layout.tsx`) sans Header/Footer ?
- [NEEDS CLARIFICATION] Faut-il implémenter une protection/authentification maintenant, ou laisser un placeholder pour l'intégration ultérieure ?

---

Une fois que vous confirmez les choix ci-dessus, je peux implémenter les fichiers et effectuer les commits détaillés.
