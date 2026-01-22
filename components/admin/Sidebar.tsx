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
