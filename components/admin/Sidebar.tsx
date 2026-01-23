// components/admin/Sidebar.tsx
"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import { Hexagon, Home, Users, Globe, User, Settings, LogOut, X, ShoppingBasket, PackageOpen } from 'lucide-react';
import { Logo } from '../layout';
import { NavItem } from './NavItem';


type Props = {
    mobileOpen?: boolean;
    onClose?: () => void;
};

const items = [
    { href: "/admin", label: "Dashboard", icon: Home, active: true },
    { href: "/admin/produits", label: "Produits", icon: PackageOpen },
    { href: "/admin/rencontres", label: "Rencontres", icon: Users },
    { href: "/admin/terroirs", label: "Terroirs", icon: Globe },
    { href: "/admin/utilisateurs", label: "Utilisateurs", icon: User },
    { href: "/admin/parametres", label: "Paramètres", icon: Settings },
];

export default function Sidebar({ mobileOpen, onClose }: Props): React.ReactElement {
    const pathname = usePathname();
    const isActive = (href: string) => {
        if (!pathname) return false;
        // treat root dashboard '/admin' as exact match only
        if (href === '/admin') return pathname === '/admin';
        return pathname === href || pathname.startsWith(href + '/');
    }
    return (
        <>
            {/* Desktop sidebar */}
            <aside className="hidden md:flex w-64 bg-background-dark text-white flex-col fixed h-full z-50">
                <div className="p-6">
                    <div className="flex items-center gap-3 mb-10">
                        <Logo admin={true} />
                    </div>
                    <nav className="flex flex-col gap-1">
                        {items.map(({ label, href, icon }) => (
                            <NavItem key={href} href={href} label={label} active={isActive(href)} icon={icon} />
                        ))}
                    </nav>
                </div>
                <div className="mt-auto p-6 border-t border-white/10">
                    <a className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-500/10 hover:text-red-400 transition-colors" href="#/logout">
                        <LogOut size={18} />
                        <span className="text-sm font-medium">Déconnexion</span>
                    </a>
                </div>
            </aside>

            {/* Mobile slide-over */}
            {mobileOpen ? (
                <div className="md:hidden fixed inset-0 z-50 flex">
                    <div className="absolute inset-0 bg-black/40" onClick={onClose} />
                    <div className="relative w-64 bg-background-dark text-white h-full">
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="size-10 bg-primary rounded-full flex items-center justify-center text-background-dark">
                                        <Hexagon className="text-background-dark" size={20} />
                                    </div>
                                    <div>
                                        <h1 className="text-white text-base font-bold leading-none">Le Rucher d'Ahmed</h1>
                                        <p className="text-gray-400 text-xs mt-1">Administration</p>
                                    </div>
                                </div>
                                <button onClick={onClose} aria-label="Fermer" className="p-2 rounded-md">
                                    <X size={20} />
                                </button>
                            </div>
                            <nav className="flex flex-col gap-1">
                                {items.map(({ label, href, icon }) => (
                                    <NavItem key={href} href={href} label={label} icon={icon} active={isActive(href)} onClick={onClose} />
                                ))}
                            </nav>
                        </div>
                        <div className="mt-auto p-6 border-t border-white/10">
                            <a className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-500/10 hover:text-red-400 transition-colors" href="#/logout" onClick={onClose}>
                                <LogOut size={18} />
                                <span className="text-sm font-medium">Déconnexion</span>
                            </a>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
}
