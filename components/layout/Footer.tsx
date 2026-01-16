"use client";

import Link from "next/link";
import { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

const navigationLinks = [
    { label: "Accueil", href: "/" },
    { label: "Nos Miels", href: "/nos-miels" },
    { label: "Nos Ruchers", href: "/nos-ruchers" },
    { label: "À propos", href: "/a-propos" },
    { label: "Contact", href: "/contact" },
];

const infoLinks = [
    { label: "Livraison", href: "#" },
    { label: "Conditions générales", href: "#" },
    { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
    { label: "Mentions légales", href: "#" },
];

export function Footer() {
    const [email, setEmail] = useState("");

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Newsletter subscription:", email);
        setEmail("");
    };

    return (
        <footer className="bg-[#151515] pt-20 pb-10 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="flex flex-col gap-4">
                        <Logo variant="light" size="sm" />
                        <p className="text-text-muted-light text-sm leading-relaxed">
                            Miel artisanal 100% naturel, produit avec passion en Charente.
                            Découvrez l&apos;authenticité de nos saveurs.
                        </p>
                        <div className="flex flex-col gap-3 mt-4">
                            <a
                                href="tel:+33652791229"
                                className="flex items-center gap-2 text-text-muted-light hover:text-primary text-sm transition-colors"
                            >
                                <Phone size={16} />
                                +33 6 52 79 12 29
                            </a>
                            <a
                                href="mailto:contact@lerucherdahmed.fr"
                                className="flex items-center gap-2 text-text-muted-light hover:text-primary text-sm transition-colors"
                            >
                                <Mail size={16} />
                                contact@lerucherdahmed.fr
                            </a>
                            <div className="flex items-start gap-2 text-text-muted-light text-sm">
                                <MapPin size={16} className="mt-0.5 shrink-0" />
                                <span>Charente, France</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-6">Navigation</h3>
                        <ul className="space-y-3">
                            {navigationLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-text-muted-light hover:text-primary text-sm transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-6">Informations</h3>
                        <ul className="space-y-3">
                            {infoLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-text-muted-light hover:text-primary text-sm transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-6">Restez informé</h3>
                        <p className="text-text-muted-light text-sm mb-4">
                            Recevez nos actualités et nos offres exclusives directement dans votre boîte mail.
                        </p>
                        <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-3">
                            <Input
                                type="email"
                                placeholder="Votre email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-surface-dark border-white/10 text-white placeholder:text-white/30"
                                required
                            />
                            <Button type="submit" variant="primary" size="md" className="w-full">
                                <Send size={16} />
                                S&apos;inscrire
                            </Button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-text-muted-light text-xs">
                        © {new Date().getFullYear()} Le Rucher d&apos;Ahmed. Tous droits réservés.
                    </p>
                    <p className="text-text-muted-light text-xs">Fait avec 🐝 en Charente</p>
                </div>
            </div>
        </footer>
    );
}
