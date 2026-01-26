export interface Product {
    id: string;
    name: string;
    slug: string;
    price: number;
    description: string;
    shortDescription: string;
    image: string;
    images?: string[]; // Images supplémentaires
    badge?: "best-seller" | "nouveau" | "douceur" | "intense" | "none";
    rating: number;
    weight: string;
    harvest?: string;
    usage?: string;
    season?: "printemps" | "été" | "automne" | "toutes";
    taste?: "doux" | "moyen" | "intense";
    inStock: boolean;
    featured: boolean;
    specs?: {
        weight?: string;
        harvestYear?: string;
        season?: string;
        tasteProfile?: string;
    };
    nutrition?: {
        energy?: string;
        carbs?: string;
        protein?: string;
        sugars?: string;
    };
    apicultureNotes?: {
        geographicalOrigin?: string;
        beekeeperNotes?: string;
    };
    quantity?: number;
}

export interface ProductFormData {
    name: string;
    slug: string;
    price: number;
    badge: "best-seller" | "nouveau" | "douceur" | "intense" | "none";
    shortDescription: string;
    description: string;
    images: string[];
    mainImageIndex: number;
    weight: string;
    harvestYear: string;
    season: string;
    tasteProfile: string;
    energy: string;
    carbs: string;
    protein: string;
    sugars: string;
    geographicalOrigin: string;
    beekeeperNotes: string;
}
