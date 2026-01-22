// components/admin/ProductsTable.tsx
'use client';
import React from 'react';

type Product = { id: string; name: string; price: string; stock: number };

const SAMPLE_PRODUCTS: Product[] = [
    { id: 'p1', name: 'Miel de lavande', price: '12€', stock: 24 },
    { id: 'p2', name: 'Miel de châtaignier', price: '14€', stock: 8 },
    { id: 'p3', name: 'Miel toutes fleurs', price: '10€', stock: 42 },
];

export default function ProductsTable(): React.ReactElement {
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
