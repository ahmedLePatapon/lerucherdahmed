// components/admin/AdminDashboard.tsx
'use client';
import React from 'react';
import HeaderAdmin from './HeaderAdmin';
import Sidebar from './Sidebar';
import ProductsTable from './ProductsTable';
import UpdatesList from './UpdatesList';
import LoginPrompt from './LoginPrompt';
import { isAuthenticated } from '../../lib/auth';

export default function AdminDashboard(): React.ReactElement {
    // const auth = isAuthenticated();

    // if (!auth.authenticated) {
    //     return <LoginPrompt message="Accès administrateur requis." />;
    // }

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
