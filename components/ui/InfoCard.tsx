// Carte réutilisable pour les finalités du traitement
import { ReactNode } from "react";

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
        icon: <span className="material-symbols-outlined">shopping_bag</span>,
        title: "Traitement des commandes",
        description: "Gestion des commandes, des paiements, des livraisons et des factures. Base légale : Exécution du contrat.",
    },
    support: {
        icon: <span className="material-symbols-outlined">support_agent</span>,
        title: "Service Client",
        description: "Répondre à vos demandes de contact, gérer les réclamations et le suivi après-vente.",
    },
    marketing: {
        icon: <span className="material-symbols-outlined">mail</span>,
        title: "Marketing & Newsletter",
        description: "Envoi d'offres promotionnelles et de nouveautés sur nos miels, uniquement si vous y avez consenti.",
    },
    analytics: {
        icon: <span className="material-symbols-outlined">analytics</span>,
        title: "Amélioration du site",
        description: "Analyses statistiques pour comprendre l'utilisation du site et améliorer l'expérience utilisateur.",
    },
};

export function InfoCard({ type }: InfoCardProps) {
    const { icon, title, description } = cardData[type];
    return (
        <div className="rounded-xl bg-white p-6 border border-surface-border">
            <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 p-2 text-primary">
                {icon}
            </div>
            <h3 className="mb-2 text-lg font-bold text-brand-black">{title}</h3>
            <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
        </div>
    );
}
