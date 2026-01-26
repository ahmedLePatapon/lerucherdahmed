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
    quantity?: number;
}

import raw from './products.json';

export const products: Product[] = ((raw as any).products ?? []) as Product[];

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
