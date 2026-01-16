// Carte réutilisable pour les finalités du traitement
import { ReactNode } from "react";
import { ShoppingBag, Headset, Mail, BarChart2 } from "lucide-react";

interface InfoCardProps {
    type: "order" | "support" | "marketing" | "analytics";
}

const cardData: Record<InfoCardProps["type"], {
    icon: ReactNode;
    title: string;
    description: string;
    bg?: string;
}> = {
    order: {
        icon: <ShoppingBag size={28} />,
        title: "Traitement des commandes",
        description: "Gestion des commandes, des paiements, des livraisons et des factures. Base légale : Exécution du contrat.",
    },
    support: {
        icon: <Headset size={28} />,
        title: "Service Client",
        description: "Répondre à vos demandes de contact, gérer les réclamations et le suivi après-vente.",
    },
    marketing: {
        icon: <Mail size={28} />,
        title: "Marketing & Newsletter",
        description: "Envoi d'offres promotionnelles et de nouveautés sur nos miels, uniquement si vous y avez consenti.",
    },
    analytics: {
        icon: <BarChart2 size={28} />,
        title: "Amélioration du site",
        description: "Analyses statistiques pour comprendre l'utilisation du site et améliorer l'expérience utilisateur.",
    },
};

export function InfoCard({ type }: InfoCardProps) {
    const { icon, title, description } = cardData[type];
    return (
        <div className="rounded-xl bg-white p-6 border border-surface-border border-gray-200">
            <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 p-2 text-primary">
                {icon}
            </div>
            <h3 className="mb-2 text-lg font-bold text-brand-black">{title}</h3>
            <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
        </div>
    );
}
