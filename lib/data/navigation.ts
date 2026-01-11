export interface NavItem {
    label: string;
    href: string;
}

export const mainNavigation: NavItem[] = [
    { label: "Accueil", href: "/" },
    { label: "Nos Miels", href: "/nos-miels" },
    { label: "Nos Ruchers", href: "/nos-ruchers" },
    { label: "À propos", href: "/a-propos" },
    { label: "Contact", href: "/contact" },
];

export const footerNavigation: NavItem[] = [
    { label: "Accueil", href: "/" },
    { label: "Nos Miels", href: "/nos-miels" },
    { label: "Nos Ruchers", href: "/nos-ruchers" },
    { label: "À propos", href: "/a-propos" },
    { label: "Contact", href: "/contact" },
];

export const footerInfoLinks: NavItem[] = [
    { label: "Livraison", href: "/livraison" },
    { label: "Conditions générales", href: "/cgv" },
    { label: "Politique de confidentialité", href: "/confidentialite" },
    { label: "Mentions légales", href: "/mentions-legales" },
];
