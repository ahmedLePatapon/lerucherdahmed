// app/(admin)/admin/layout.tsx
'use client';
import React from 'react';
import HeaderAdmin from '../../../components/admin/HeaderAdmin';
import Sidebar from '../../../components/admin/Sidebar';


export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    return (
        <>
            <Sidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
            <div className="min-h-screen md:pl-64 bg-background">
                <HeaderAdmin onOpenMobile={() => setMobileOpen(true)} />
                <main className="p-6">
                    {children}
                </main>
            </div>
        </>
    );
}
