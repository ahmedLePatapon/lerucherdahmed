// components/admin/UpdatesList.tsx
'use client';
import React from 'react';

const UPDATES = [
    { id: 'u1', title: 'Commande #123 expédiée', time: '2h' },
    { id: 'u2', title: 'Nouveau produit ajouté', time: '1j' },
    { id: 'u3', title: 'Stock faible: Miel de châtaignier', time: '2j' },
];

export default function UpdatesList(): React.ReactElement {
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
