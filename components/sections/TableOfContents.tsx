// Table des matières réutilisable pour pages légales
const items = [
    { href: "#introduction", label: "Introduction", active: true },
    { href: "#data-collection", label: "Collecte des données" },
    { href: "#data-usage", label: "Usage & Finalités" },
    { href: "#cookies", label: "Cookies & Traceurs" },
    { href: "#rights", label: "Vos droits (RGPD)" },
    { href: "#contact", label: "Contact DPO" },
];

export function TableOfContents() {
    return (
        <div className="sticky top-28 space-y-8">
            <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-4 px-3">Sommaire</h3>
                <nav className="flex flex-col space-y-1">
                    {items.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className={`block rounded-lg px-3 py-2 text-sm hover:bg-white hover:text-brand-black transition-all shadow-xs ${item.active ? "border-primary border-l-4 bg-white text-brand-black font-bold" : "text-gray-500"}`}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            </div>
            <div className="rounded-xl bg-surface-dark p-4 border border-surface-border">
                <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-primary">verified_user</span>
                    <p className="text-sm font-bold text-white">Données Sécurisées</p>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                    Vos informations sont cryptées et stockées sur des serveurs sécurisés en Europe.
                </p>
            </div>
        </div>
    );
}
