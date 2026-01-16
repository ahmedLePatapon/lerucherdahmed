'use client';
import { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";
// Import de la police Material Symbols pour les icônes
import Head from "next/head";
// Table des matières réutilisable pour pages légales
const items = [
    { href: "#introduction", label: "Introduction" },
    { href: "#data-collection", label: "Collecte des données" },
    { href: "#data-usage", label: "Usage & Finalités" },
    { href: "#cookies", label: "Cookies & Traceurs" },
    { href: "#rights", label: "Vos droits (RGPD)" },
    { href: "#contact", label: "Contact DPO" },
];

export function TableOfContents() {
    const [active, setActive] = useState<string>(items[0].href);

    useEffect(() => {
        const sectionIds = items.map(item => item.href.replace('#', ''));
        const handleScroll = () => {
            let current = sectionIds[0];
            for (const id of sectionIds) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 120) {
                        current = `#${id}`;
                    }
                }
            }
            setActive(current);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="sticky top-28 space-y-8">
                <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-4 px-3">Sommaire</h3>
                    <nav className="flex flex-col space-y-1">
                        {items.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className={`block rounded-lg px-3 py-2 text-sm font-medium transition-all shadow-xs ${active === item.href ? "border-l-4 bg-white border-primary text-brand-black font-bold" : "text-gray-500 hover:bg-white hover:text-brand-black"}`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>
                <div className="rounded-xl bg-white p-4 border border-surface-border border-gray-200">
                    <div className="flex items-center gap-3 mb-3">
                        <ShieldCheck className="text-primary" />
                        <p className="text-sm font-bold text-brand-black">Données Sécurisées</p>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                        Vos informations sont cryptées et stockées sur des serveurs sécurisés en Europe.
                    </p>
                </div>
            </div>
        </>
    );
}
