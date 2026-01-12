export interface Product {
    id: string;
    name: string;
    slug: string;
    price: number;
    description: string;
    shortDescription: string;
    image: string;
    badge?: "best-seller" | "nouveau" | "douceur" | "intense";
    rating: number;
    weight: string;
    harvest?: string;
    usage?: string;
    season?: "printemps" | "été" | "automne" | "toutes";
    taste?: "doux" | "moyen" | "intense";
    inStock: boolean;
    featured: boolean;
    specs?: Record<string, string>;
    nutrition?: Record<string, string>;
    apiculteurNote?: string;
}

export const products: Product[] = [
    {
        id: "1",
        name: "Miel de Lavande",
        slug: "miel-de-lavande",
        price: 12.0,
        description:
            "Un miel crémeux aux notes florales délicates, récolté sur les plateaux ensoleillés de Provence. Sa couleur dorée et sa texture onctueuse en font un incontournable pour les amateurs de saveurs subtiles.",
        shortDescription:
            "Un miel crémeux aux notes florales délicates, récolté sur les plateaux ensoleillés de Provence.",
        // image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&q=80",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYkPLxTy8_0jXmFoYa53BEm3W3QISNDYkTf8y20zGEbK7LPL9h8Njm1EHzfHyinaY0lLM8OmyK1oQPQUOht4s6yw4tYre-5DX-aeuYBQ1ZS9YdFMJ2RFdR2A4Dc9kMk26FFpJSuNtUiYD0zcR2zojYdiz6hTAlo1LgtoYTueH5SfXQHyeNoGgqKxiBjKd1KnmYDhm3BLo40p0SP2L3lvgnp93Yq7Py0WwutaJ6yGok8mAngXk1caWgYrDwHxolQb8X7q3et2Dxt9c",
        badge: "best-seller",
        rating: 4.9,
        weight: "500g",
        harvest: "Juillet",
        usage: "Idéal sur tartines et dans le thé",
        season: "été",
        taste: "doux",
        inStock: true,
        featured: true,
    },
    {
        id: "2",
        name: "Miel d'Acacia",
        slug: "miel-acacia",
        price: 14.0,
        description:
            "Limpide et liquide, ce miel est apprécié pour sa grande douceur et son index glycémique modéré. Parfait pour sucrer les thés et infusions sans en altérer les saveurs.",
        shortDescription:
            "Limpide et liquide, apprécié pour sa grande douceur et son index glycémique modéré.",
        image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80",
        badge: "douceur",
        rating: 4.8,
        weight: "500g",
        harvest: "Mai",
        usage: "Pour sucrer les thés",
        season: "printemps",
        taste: "doux",
        inStock: true,
        featured: true,
    },
    {
        id: "3",
        name: "Miel de Châtaignier",
        slug: "miel-chataignier",
        price: 11.0,
        description:
            "Un miel de caractère, corsé et boisé, parfait pour les amateurs de saveurs puissantes. Sa couleur ambrée foncée et son goût persistant en font un allié idéal des fromages et plats rustiques.",
        shortDescription:
            "Un miel de caractère, corsé et boisé, parfait pour les amateurs de saveurs puissantes.",
        image: "https://images.unsplash.com/photo-1471943311424-646960669fbc?w=800&q=80",
        badge: "intense",
        rating: 5.0,
        weight: "500g",
        harvest: "Septembre",
        usage: "Accompagne les fromages",
        season: "automne",
        taste: "intense",
        inStock: true,
        featured: true,
    },
    {
        id: "4",
        name: "Miel de Printemps",
        slug: "miel-printemps",
        price: 12.5,
        description:
            "Un miel onctueux récolté en début de saison, aux notes florales délicates rappelant les vergers en fleurs. Sa texture crémeuse et son goût subtil en font un favori du petit-déjeuner.",
        shortDescription:
            "Un miel onctueux récolté en début de saison. Notes florales délicates.",
        image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&q=80",
        badge: "nouveau",
        rating: 4.7,
        weight: "500g",
        harvest: "Avril",
        usage: "Idéal sur tartines",
        season: "printemps",
        taste: "doux",
        inStock: true,
        featured: false,
        specs: {
            "Origine": "Rucher de Charente",
            "Poids net": "500g",
            "Récolte": "Avril",
            "DLUO": "24 mois",
        },
        nutrition: {
            "Énergie": "320 kcal / 100g",
            "Glucides": "80 g",
            "Protéines": "0.3 g",
            "Lipides": "0 g",
        },
        apiculteurNote:
            "Ce miel de printemps est issu des premières floraisons du verger. Il révèle des arômes fruités et une douceur légère, parfait sur des tartines ou dans un yaourt.",
    },
    {
        id: "5",
        name: "Miel de Colza",
        slug: "miel-colza",
        price: 11.0,
        description:
            "Un miel blanc à la texture fine et crémeuse, récolté sur les vastes champs dorés de colza. Son goût délicat et sa consistance en font un excellent ingrédient pour la cuisine et la pâtisserie.",
        shortDescription:
            "Un miel blanc à la texture fine, récolté sur les vastes champs dorés.",
        image: "https://picsum.photos/seed/miel-colza/800/600",
        rating: 4.6,
        weight: "500g",
        harvest: "Mai",
        usage: "Cuisine et pâtisserie",
        season: "printemps",
        taste: "doux",
        inStock: true,
        featured: false,
    },
    {
        id: "6",
        name: "Miel Toutes Fleurs",
        slug: "miel-toutes-fleurs",
        price: 13.5,
        description:
            "Le reflet de la biodiversité locale. Un mélange naturel des nectars de saison, offrant un bouquet de saveurs unique qui varie d'une récolte à l'autre.",
        shortDescription:
            "Le reflet de la biodiversité locale. Un mélange naturel des nectars de saison.",
        image: "https://picsum.photos/seed/miel-toutes-fleurs/800/600",
        rating: 4.8,
        weight: "500g",
        harvest: "Juin",
        usage: "Usage quotidien",
        season: "été",
        taste: "moyen",
        inStock: true,
        featured: false,
    },
];

export const featuredProducts = products.filter((p) => p.featured);

export function getProductBySlug(slug: string): Product | undefined {
    return products.find((p) => p.slug === slug);
}

export function getProductsByFilter(filters: {
    season?: Product["season"];
    taste?: Product["taste"];
}): Product[] {
    return products.filter((product) => {
        if (filters.season && product.season !== filters.season) return false;
        if (filters.taste && product.taste !== filters.taste) return false;
        return true;
    });
}
