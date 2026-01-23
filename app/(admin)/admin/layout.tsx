// app/(admin)/admin/layout.tsx
import React from 'react';

export const metadata = {
    title: "Admin — Le Rucher d'Ahmed",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="admin-layout" style={{ display: 'flex' }}>
            {children}
        </div>
    );
}
