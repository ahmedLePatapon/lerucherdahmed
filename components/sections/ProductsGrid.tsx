import Link from "next/link";
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
    title = "Découvrez nos miels d'exception",
    subtitle = "Chaque pot raconte l'histoire d'une saison et d'une floraison unique.",
    showViewAll = true,
    limit = 3,
}: ProductsGridProps) {
    const productsToShow = featuredProducts.slice(0, limit);

    return (
        // <section className="py-24 bg-background-light">
        //     <div className="max-w-7xl mx-auto px-4 lg:px-8">
        //         <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
        //             <div>
        //                 <span className="text-primary text-sm font-bold uppercase tracking-wider">Notre sélection</span>
        //                 <h2 className="text-3xl md:text-4xl font-bold text-text-main mt-4 mb-4">{title}</h2>
        //                 <p className="text-text-muted max-w-xl">{subtitle}</p>
        //             </div>
        //             {showViewAll && (
        //                 <Link href="/nos-miels" className="mt-6 md:mt-0">
        //                     <Button variant="outline" size="md">
        //                         Voir toute la boutique
        //                         <ArrowRight size={16} />
        //                     </Button>
        //                 </Link>
        //             )}
        //         </div>

        //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        //             {productsToShow.map((product) => (
        //                 <ProductCard key={product.id} product={product} />
        //             ))}
        //         </div>
        //     </div>
        // </section>
        <section className="py-24 bg-background-light relative overflow-hidden font-medium">
            <div
                className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2">
            </div>
            <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-accent font-bold uppercase tracking-wider text-sm mb-2 block">Nos Trésors</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-text-main mb-6">{title}</h2>
                    <p className="text-text-muted text-lg">{subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {productsToShow.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    {showViewAll && (
                        <Link href="/nos-miels" className="mt-6 md:mt-0">
                            <Button variant="outline" size="md" className="border-black rounded-lg">
                                Voir toute la boutique
                            </Button>
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
}
