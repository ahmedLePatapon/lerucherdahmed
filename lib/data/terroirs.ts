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
        image: "/images/terroir_cherves_richemont.jpg",
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
        flora: ["Colza", "Tournesol", "Ronce"],
        image: "/images/terroir_saint_amant_de_boixe.jpg",
    },
    {
        id: "2",
        name: "Vouharte",
        location: "Charente",
        postalCode: "16330",
        subtitle: "La Vallée de la Touvre",
        description:
            "Implantées au cœur d’une vallée verdoyante traversée par la Touvre, nos ruches de Vouharte bénéficient d’un environnement riche et équilibré. Prairies naturelles, haies bocagères et cultures raisonnées offrent aux abeilles une diversité florale idéale pour un miel doux et harmonieux.",
        characteristics: [
            "Vallée naturelle préservée",
            "Prairies et haies bocagères",
            "Environnement calme et rural",
        ],
        flora: ["Cèdre", "Acacia", "Colza"],
        image: "/images/terroir_vouharte.jpg",
    },
];
