"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

const navItems = [
    { label: "Accueil", href: "/" },
    { label: "Nos Miels", href: "/nos-miels" },
    { label: "Nos Ruchers", href: "/nos-ruchers" },
    { label: "À propos", href: "/a-propos" },
    { label: "Contact", href: "/contact" },
];

export function Header() {
    const pathname = usePathname();

    return (
        <header className="fixed top-0 z-50 w-full bg-background-light/90 backdrop-blur-md border-b border-border-light">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Logo />

                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary",
                                    pathname === item.href ? "text-primary" : "text-text-main"
                                )}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <Link
                        href="/nos-miels"
                        className="hidden md:flex items-center gap-2 h-10 px-6 bg-primary hover:bg-primary-dark text-white text-sm font-bold rounded-lg transition-colors"
                    >
                        Commander
                        <ArrowRight size={16} />
                    </Link>

                    <MobileMenu items={navItems} />
                </div>
            </div>
        </header>
    );
}
