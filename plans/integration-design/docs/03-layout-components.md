# Étape 3 : Composants de Layout (Header, Footer, Logo)

## Goal
Créer les composants de layout réutilisables : Header avec navigation responsive, Footer avec newsletter, et Logo.

## Fichiers à créer
- `components/layout/Logo.tsx`
- `components/layout/Header.tsx`
- `components/layout/MobileMenu.tsx`
- `components/layout/Footer.tsx`
- `components/layout/index.ts`

---

## Step-by-Step Instructions

### 3.1 Créer le composant Logo

- [ ] Créer le fichier `components/layout/Logo.tsx` :

```tsx
import Link from "next/link";
import { Hexagon } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Logo({ variant = "dark", size = "md", className }: LogoProps) {
  const sizes = {
    sm: {
      icon: "w-8 h-8",
      iconSize: 16,
      text: "text-base",
    },
    md: {
      icon: "w-10 h-10",
      iconSize: 20,
      text: "text-xl",
    },
    lg: {
      icon: "w-12 h-12",
      iconSize: 24,
      text: "text-2xl",
    },
  };

  const textColor = variant === "light" ? "text-white" : "text-text-main";

  return (
    <Link href="/" className={cn("flex items-center gap-3", className)}>
      <div
        className={cn(
          "flex items-center justify-center bg-primary rounded-lg text-white",
          sizes[size].icon
        )}
      >
        <Hexagon size={sizes[size].iconSize} fill="currentColor" />
      </div>
      <span className={cn("font-bold", sizes[size].text, textColor)}>
        Le Rucher d&apos;Ahmed
      </span>
    </Link>
  );
}
```

### 3.2 Créer le composant MobileMenu

- [ ] Créer le fichier `components/layout/MobileMenu.tsx` :

```tsx
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

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
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
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden p-2 text-text-main hover:text-primary transition-colors"
        aria-label="Ouvrir le menu"
      >
        <Menu size={24} />
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity md:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-80 bg-white shadow-2xl transition-transform duration-300 md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
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

          {/* Navigation */}
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

          {/* CTA Button */}
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
```

### 3.3 Créer le composant Header

- [ ] Créer le fichier `components/layout/Header.tsx` :

```tsx
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
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-primary"
                    : "text-text-main"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <Link
            href="/nos-miels"
            className="hidden md:flex items-center gap-2 h-10 px-6 bg-primary hover:bg-primary-dark text-white text-sm font-bold rounded-lg transition-colors"
          >
            Commander
            <ArrowRight size={16} />
          </Link>

          {/* Mobile Menu */}
          <MobileMenu items={navItems} />
        </div>
      </div>
    </header>
  );
}
```

### 3.4 Créer le composant Footer

- [ ] Créer le fichier `components/layout/Footer.tsx` :

```tsx
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
  { label: "Politique de confidentialité", href: "#" },
  { label: "Mentions légales", href: "#" },
];

export function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer className="bg-[#151515] pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <Logo variant="light" size="sm" />
            <p className="text-text-muted-light text-sm leading-relaxed">
              Miel artisanal 100% naturel, produit avec passion en Charente. 
              Découvrez l&apos;authenticité de nos saveurs.
            </p>
            {/* Contact Info */}
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

          {/* Navigation Column */}
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

          {/* Informations Column */}
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

          {/* Newsletter Column */}
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

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted-light text-xs">
            © {new Date().getFullYear()} Le Rucher d&apos;Ahmed. Tous droits réservés.
          </p>
          <p className="text-text-muted-light text-xs">
            Fait avec 🐝 en Charente
          </p>
        </div>
      </div>
    </footer>
  );
}
```

### 3.5 Créer le fichier d'export index

- [ ] Créer le fichier `components/layout/index.ts` :

```ts
export { Logo } from "./Logo";
export { Header } from "./Header";
export { MobileMenu } from "./MobileMenu";
export { Footer } from "./Footer";
```

---

## Step 3 Verification Checklist

- [ ] Pas d'erreurs TypeScript
- [ ] Le Header s'affiche en haut de page avec :
  - [ ] Logo cliquable vers l'accueil
  - [ ] Navigation desktop visible sur écrans larges
  - [ ] Bouton "Commander" jaune
  - [ ] Menu hamburger sur mobile
- [ ] Le Footer affiche :
  - [ ] Logo et description
  - [ ] Informations de contact
  - [ ] Liens de navigation
  - [ ] Formulaire newsletter
- [ ] Le menu mobile s'ouvre/ferme correctement
- [ ] Les liens de navigation fonctionnent

---

## Step 3 STOP & COMMIT

**STOP & COMMIT:** Arrêtez-vous ici et attendez que l'utilisateur teste, stage et committe le changement.

```bash
git add .
git commit -m "feat: add layout components (Header, Footer, Logo, MobileMenu)"
```
