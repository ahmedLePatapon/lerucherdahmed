// app/(admin)/admin/layout.tsx
'use client';
import React from 'react';
import HeaderAdmin from '../../../components/admin/HeaderAdmin';
import Sidebar from '../../../components/admin/Sidebar';
import { usePathname } from 'next/navigation';


export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const pathname = usePathname();

    return (
        <>
            <Sidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
            <div className="min-h-screen md:pl-64 bg-background">
                <HeaderAdmin onOpenMobile={() => setMobileOpen(true)} pathname={pathname} />
                <main className="p-6">
                    {children}
                </main>
            </div>
        </>
    );
}
