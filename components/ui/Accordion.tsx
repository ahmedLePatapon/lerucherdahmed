import { User, Truck, CreditCard, Copyright, Server, FileUser, Cookie } from "lucide-react";

// mapping des icônes disponibles
const iconMap = {
    person: User,
    local_shipping: Truck,
    credit_card: CreditCard,
    copyright: Copyright,
    server: Server,
    cookie: Cookie,
    file_user: FileUser,
} as const;

// Accordéon réutilisable pour la collecte des données
export interface AccordionItem {
    icon: keyof typeof iconMap;
    title: string;
    content: string;
    open?: boolean;
    id?: string;
}


export function Accordion({ items, titleAccueil }: { items?: AccordionItem[], titleAccueil?: boolean }) {
    if (!items || items.length === 0) {
        return null;
    }

    return (
        <div>
            {
                titleAccueil && (
                    <>
                        <div className="mb-6 border-l-4 border-primary pl-4">
                            <h2 className="text-2xl font-bold text-brand-black">1. Collecte des données personnelles</h2>
                        </div>
                        <p className="mb-6 text-gray-700">
                            Nous recueillons différents types d'informations à diverses fins pour vous fournir et améliorer notre Service.
                        </p>
                    </>
                )
            }

            <div className="flex flex-col gap-3">
                {items.map((item, idx) => {
                    const LucideIcon = iconMap[item.icon];
                    return (
                        <details
                            id={item.id}
                            key={item.title}
                            className="flex flex-col rounded-xl border border-surface-border border-gray-200 bg-white px-5 py-2 group transition-all duration-200 hover:border-primary/50 open:ring-1 open:ring-primary/20"
                            open={item.open}
                        >
                            <summary className="flex cursor-pointer items-center justify-between gap-6 py-3 select-none">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-8 w-8 items-center justify-center bg-background-light rounded-full bg-off-white text-primary">
                                        {LucideIcon && <LucideIcon size={24} />}
                                    </div>
                                    <p className="text-brand-black text-base font-semibold leading-normal">{item.title}</p>
                                </div>
                                {/* Flèche Lucide pour l'ouverture/fermeture */}
                                <svg
                                    className="text-gray-400 transition-transform duration-300 group-open:rotate-180 group-open:text-primary"
                                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                >
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </summary>
                            <div className="pb-4 pt-1 pl-[44px] pr-4">
                                <div className="text-gray-700 text-sm font-normal leading-relaxed" dangerouslySetInnerHTML={{ __html: item.content }} />
                            </div>
                        </details>
                    );
                })}
            </div>
        </div>
    );
}
