// components/admin/HeaderAdmin.tsx
'use client';
import React from 'react';
import { Menu } from 'lucide-react';

type Props = {
    onOpenMobile?: () => void;
};

export default function HeaderAdmin({ onOpenMobile }: Props): React.ReactElement {
    return (
        <header className="flex items-center justify-between bg-white border-b border-[#e6e4db] dark:border-white/10 px-8 py-4 sticky top-0 z-40">
            <div className="flex items-center gap-4">
                <button className="p-2 rounded-lg md:hidden" onClick={onOpenMobile} aria-label="Ouvrir le menu">
                    <Menu size={20} />
                </button>
                <div>
                    <h2 className="text-sm font-medium">Tableau de bord</h2>
                </div>
            </div>
            <div>
                <button className="px-3 py-2 rounded-lg bg-primary/10 text-primary font-medium">Nouveau produit</button>
            </div>
        </header>
    );
}
