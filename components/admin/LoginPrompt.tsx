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
