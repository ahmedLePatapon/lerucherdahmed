import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/cards/ProductCard";
import { Button } from "@/components/ui/Button";
import { featuredProducts } from "@/lib/data/products";

interface ProductsGridProps {
    title?: string;
    subtitle?: string;
    showViewAll?: boolean;
    limit?: number;
}

export function ProductsGrid({
    title = "Nos Miels Artisanaux",
    subtitle = "Découvrez notre sélection de miels récoltés avec passion dans nos ruchers charentais.",
    showViewAll = true,
    limit = 3,
}: ProductsGridProps) {
    const productsToShow = featuredProducts.slice(0, limit);

    return (
        <section className="py-24 bg-background-light">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
                    <div>
                        <span className="text-primary text-sm font-bold uppercase tracking-wider">Notre sélection</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-text-main mt-4 mb-4">{title}</h2>
                        <p className="text-text-muted max-w-xl">{subtitle}</p>
                    </div>
                    {showViewAll && (
                        <Link href="/nos-miels" className="mt-6 md:mt-0">
                            <Button variant="outline" size="md">
                                Voir toute la boutique
                                <ArrowRight size={16} />
                            </Button>
                        </Link>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {productsToShow.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
