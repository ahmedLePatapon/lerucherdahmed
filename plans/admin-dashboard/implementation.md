# Admin Dashboard

## Goal
Convertir la page HTML d'administration en composants Next.js et créer la route `app/admin` avec composants réutilisables.

## Prerequisites
- Assurez-vous d'être sur la branche `feature/admin-dashboard`. Si elle n'existe pas, créez-la depuis `main`.

### Technology stack & commands
- Technologie: Next.js (app router) + React + TypeScript
- Commands:
  - Installer: `npm ci`
  - Dev: `npm run dev`
  - Build: `npm run build`
  - Start (prod): `npm run start`

---

### Step-by-Step Instructions

#### Step 1: Ajouter la route admin (page) et placeholder
 - [x] Créer le fichier `app/admin/page.tsx`.
 - [x] Copier le code ci‑dessous dans `app/admin/page.tsx`.

```tsx
// app/admin/page.tsx
import AdminDashboard from '../../components/admin/AdminDashboard';

export const metadata = {
  title: 'Admin — Le Rucher d\'Ahmed',
};

export default function AdminPage() {
  return <AdminDashboard />;
}
```

##### Step 1 Verification Checklist
- [ ] `npm run dev` démarre sans erreurs
- [ ] Ouvrir `http://localhost:3000/admin` affiche le composant `AdminDashboard`

#### Step 1 STOP & COMMIT
**STOP & COMMIT:** Stagez et commitez `app/admin/page.tsx`.

---

#### Step 2: Ajouter composants UI admin
 - [x] Créer dossier `components/admin/` si absent
 - [x] Créer et coller les fichiers ci-dessous:

1) `components/admin/AdminDashboard.tsx`

```tsx
// components/admin/AdminDashboard.tsx
'use client';
import React from 'react';
import HeaderAdmin from './HeaderAdmin';
import Sidebar from './Sidebar';
import ProductsTable from './ProductsTable';
import UpdatesList from './UpdatesList';
import LoginPrompt from './LoginPrompt';
import { isAuthenticated } from '../../lib/auth';

export default function AdminDashboard(): JSX.Element {
  const auth = isAuthenticated();

  if (!auth.authenticated) {
    return <LoginPrompt message="Accès administrateur requis." />;
  }

  return (
    <div className="admin-root" style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: 20 }}>
        <HeaderAdmin />
        <main style={{ marginTop: 20 }}>
          <section style={{ marginBottom: 24 }}>
            <h2>Produits</h2>
            <ProductsTable />
          </section>

          <section>
            <h2>Mises à jour récentes</h2>
            <UpdatesList />
          </section>
        </main>
      </div>
    </div>
  );
}
```

2) `components/admin/Sidebar.tsx`

```tsx
// components/admin/Sidebar.tsx
'use client';
import React from 'react';

export default function Sidebar(): JSX.Element {
  return (
    <aside style={{ width: 260, background: '#f8f9fb', padding: 20 }}>
      <div style={{ fontWeight: 700, marginBottom: 16 }}>Admin</div>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ marginBottom: 8 }}><a href="/admin">Tableau de bord</a></li>
          <li style={{ marginBottom: 8 }}><a href="/admin/products">Produits</a></li>
          <li style={{ marginBottom: 8 }}><a href="/admin/updates">Mises à jour</a></li>
          <li style={{ marginBottom: 8 }}><a href="/">Retour au site</a></li>
        </ul>
      </nav>
    </aside>
  );
}
```

3) `components/admin/HeaderAdmin.tsx`

```tsx
// components/admin/HeaderAdmin.tsx
'use client';
import React from 'react';

export default function HeaderAdmin(): JSX.Element {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <h1 style={{ margin: 0 }}>Tableau de bord</h1>
        <p style={{ margin: 0, color: '#666' }}>Vue d'administration</p>
      </div>
      <div>
        <button style={{ padding: '8px 12px' }}>Nouveau produit</button>
      </div>
    </header>
  );
}
```

4) `components/admin/ProductsTable.tsx`

```tsx
// components/admin/ProductsTable.tsx
'use client';
import React from 'react';

type Product = { id: string; name: string; price: string; stock: number };

const SAMPLE_PRODUCTS: Product[] = [
  { id: 'p1', name: 'Miel de lavande', price: '12€', stock: 24 },
  { id: 'p2', name: 'Miel de châtaignier', price: '14€', stock: 8 },
  { id: 'p3', name: 'Miel toutes fleurs', price: '10€', stock: 42 },
];

export default function ProductsTable(): JSX.Element {
  return (
    <div style={{ overflowX: 'auto', border: '1px solid #e6e9ee', borderRadius: 6 }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead style={{ background: '#fafafa' }}>
          <tr>
            <th style={{ textAlign: 'left', padding: 12 }}>Nom</th>
            <th style={{ textAlign: 'left', padding: 12 }}>Prix</th>
            <th style={{ textAlign: 'left', padding: 12 }}>Stock</th>
            <th style={{ textAlign: 'left', padding: 12 }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {SAMPLE_PRODUCTS.map((p) => (
            <tr key={p.id}>
              <td style={{ padding: 12 }}>{p.name}</td>
              <td style={{ padding: 12 }}>{p.price}</td>
              <td style={{ padding: 12 }}>{p.stock}</td>
              <td style={{ padding: 12 }}>
                <button style={{ marginRight: 8 }}>Éditer</button>
                <button>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```

5) `components/admin/UpdatesList.tsx`

```tsx
// components/admin/UpdatesList.tsx
'use client';
import React from 'react';

const UPDATES = [
  { id: 'u1', title: 'Commande #123 expédiée', time: '2h' },
  { id: 'u2', title: 'Nouveau produit ajouté', time: '1j' },
  { id: 'u3', title: 'Stock faible: Miel de châtaignier', time: '2j' },
];

export default function UpdatesList(): JSX.Element {
  return (
    <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
      {UPDATES.map((u) => (
        <li key={u.id} style={{ padding: 12, borderBottom: '1px solid #eee' }}>
          <div style={{ fontWeight: 600 }}>{u.title}</div>
          <div style={{ color: '#666', fontSize: 13 }}>{u.time}</div>
        </li>
      ))}
    </ul>
  );
}
```

6) `components/admin/LoginPrompt.tsx`

```tsx
// components/admin/LoginPrompt.tsx
'use client';
import React from 'react';

export default function LoginPrompt({ message }: { message?: string }): JSX.Element {
  return (
    <div style={{ padding: 40, textAlign: 'center' }}>
      <h2>Accès réservé</h2>
      <p>{message ?? 'Veuillez vous identifier pour accéder à l\'administration.'}</p>
      <div style={{ marginTop: 20 }}>
        <a href="/login"><button style={{ padding: '10px 16px' }}>Se connecter</button></a>
      </div>
    </div>
  );
}
```

##### Step 2 Verification Checklist
- [ ] `npm run dev` démarre sans erreurs
- [ ] Sur `/admin`, la sidebar, l'en-tête, le tableau produits et la liste des mises à jour s'affichent

#### Step 2 STOP & COMMIT
**STOP & COMMIT:** Stagez et commitez `components/admin/*`.

---

#### Step 3: (Optionnel) Ajouter layout admin dédié
- [ ] Si vous préférez un layout admin sans `Header`/`Footer` global, créez `app/admin/layout.tsx`.

```tsx
// app/admin/layout.tsx
import React from 'react';

export const metadata = {
  title: 'Admin — Le Rucher d\'Ahmed',
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <div className="admin-layout" style={{ display: 'flex' }}>
          {children}
        </div>
      </body>
    </html>
  );
}
```

##### Step 3 Verification Checklist
- [ ] Ouvrir `/admin` et vérifier que le layout admin est utilisé (Header/Footer global absents si c'est le but)

- [x] Si vous préférez un layout admin sans `Header`/`Footer` global, créez `app/admin/layout.tsx`.

##### Step 3 STOP & COMMIT
**STOP & COMMIT:** Stagez et commitez `app/admin/layout.tsx` si utilisé.

#### Step 3 STOP & COMMIT
**STOP & COMMIT:** Stagez et commitez `app/admin/layout.tsx` si utilisé.

---

#### Step 4: Ajouter placeholder d'authentification
- [ ] Créer `lib/auth.ts` et `components/admin/LoginPrompt.tsx` (si pas déjà créé).

1) `lib/auth.ts`

```ts
// lib/auth.ts
export function isAuthenticated(): { authenticated: boolean; user?: { id: string; name: string } } {
  // Placeholder simple — remplacer par intégration réelle (middleware/session/JWT)
  return { authenticated: false };
}
```

- [x] Créer `lib/auth.ts` et `components/admin/LoginPrompt.tsx` (si pas déjà créé).

##### Step 4 Verification Checklist
- [ ] Pas d'erreurs TypeScript
- [ ] `/admin` affiche `LoginPrompt` si l'utilisateur n'est pas authentifié

#### Step 4 STOP & COMMIT
**STOP & COMMIT:** Stagez et commitez `lib/auth.ts` et `components/admin/LoginPrompt.tsx`.

---

#### Step 5: Tests & Commit
- [ ] Lancer `npm run dev` et naviguer vers `/admin` pour vérifications.
- [ ] Corriger les warnings TypeScript/ESLint si présents.
- [ ] Exécuter `npm run build` pour vérifier la build de production.

##### Step 5 Verification Checklist
- [ ] `npm run dev` passe sans erreurs
- [ ] `npm run build` termine sans erreurs
- [ ] L'UI admin est responsive et cohérente

---

## Notes finales & recommandations
- Décidez si l'admin doit partager le `Header`/`Footer` global. Si non, utilisez `app/admin/layout.tsx` (voir Step 3).
- Pour la production, remplacez `lib/auth.ts` par une vérification serveur (middleware ou server component) pour protéger la route `/admin`.
- Pour des composants interactifs (forms, filtres), marquez-les `use client`.

---

## Fichiers créés (récapitulatif)
- app/admin/page.tsx
- (optionnel) app/admin/layout.tsx
- components/admin/AdminDashboard.tsx
- components/admin/Sidebar.tsx
- components/admin/HeaderAdmin.tsx
- components/admin/ProductsTable.tsx
- components/admin/UpdatesList.tsx
- components/admin/LoginPrompt.tsx
- lib/auth.ts

## Commandes rapides pour tester
```bash
npm ci
npm run dev
# ouvrir http://localhost:3000/admin
```



