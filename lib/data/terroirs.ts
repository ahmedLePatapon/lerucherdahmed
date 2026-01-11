export interface Terroir {
    id: string;
    name: string;
    location: string;
    postalCode: string;
    subtitle: string;
    description: string;
    characteristics: string[];
    flora: string[];
    image: string;
    mapUrl?: string;
}

export const terroirs: Terroir[] = [
    {
        id: "1",
        name: "Cherves-Richemont",
        location: "Charente",
        postalCode: "16370",
        subtitle: "Le Cœur du Cognac",
        description:
            "Au cœur des vignobles de Cognac, nos abeilles butinent une flore exceptionnelle. La proximité des vignes et des bosquets d'acacias offre un miel aux arômes complexes et raffinés.",
        characteristics: [
            "Climat doux et ensoleillé",
            "Sols calcaires riches",
            "Proximité des vignobles",
        ],
        flora: ["Vignes", "Acacia", "Fleurs sauvages"],
        image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
    },
    {
        id: "2",
        name: "Saint-Amant-de-Boixe",
        location: "Charente",
        postalCode: "16330",
        subtitle: "L'Ombre de l'Abbaye",
        description:
            "Dans ce terroir boisé proche de l'abbaye millénaire, nos ruches profitent d'une forêt préservée riche en châtaigniers et en essences variées. Un environnement idéal pour un miel de caractère.",
        characteristics: [
            "Forêts préservées",
            "Biodiversité exceptionnelle",
            "Zone naturelle protégée",
        ],
        flora: ["Châtaignier", "Forêt", "Ronce"],
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    },
];
