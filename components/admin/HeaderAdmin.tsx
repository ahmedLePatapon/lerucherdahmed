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
