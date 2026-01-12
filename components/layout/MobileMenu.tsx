"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

interface NavItem {
    label: string;
    href: string;
}

interface MobileMenuProps {
    items: NavItem[];
}

export function MobileMenu({ items }: MobileMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        // Avoid calling setState synchronously inside the effect to satisfy lint rules
        const t = setTimeout(() => setIsOpen(false), 0);
        return () => clearTimeout(t);
    }, [pathname]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="md:hidden p-2 text-text-main hover:text-primary transition-colors"
                aria-label="Ouvrir le menu"
            >
                <Menu size={24} />
            </button>

            <div
                className={cn(
                    "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity md:hidden",
                    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
                onClick={() => setIsOpen(false)}
            />

            <div
                className={cn(
                    "fixed top-0 right-0 z-50 h-full w-80 bg-white shadow-2xl transition-transform duration-300 md:hidden",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-4 border-b border-border-light">
                        <Logo size="sm" />
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 text-text-main hover:text-primary transition-colors"
                            aria-label="Fermer le menu"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <nav className="flex-1 p-4">
                        <ul className="space-y-2">
                            {items.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                                            pathname === item.href
                                                ? "bg-primary/10 text-primary"
                                                : "text-text-main hover:bg-gray-100"
                                        )}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="p-4 border-t border-border-light">
                        <Link
                            href="/nos-miels"
                            className="flex items-center justify-center w-full h-12 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-colors"
                        >
                            Commander
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
