import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingBag } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/data/products";

interface ProductCardProps {
    product: Product;
    className?: string;
}

const badgeVariants: Record<NonNullable<Product["badge"]>, "primary" | "accent" | "intense"> = {
    "best-seller": "primary",
    nouveau: "accent",
    douceur: "accent",
    intense: "intense",
};

const badgeLabels: Record<NonNullable<Product["badge"]>, string> = {
    "best-seller": "Best-seller",
    nouveau: "Nouveau",
    douceur: "Douceur",
    intense: "Intense",
};

export function ProductCard({ product, className }: ProductCardProps) {
    const formattedPrice = new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
    }).format(product.price);

    return (
        <div
            className={cn(
                "group bg-white rounded-2xl overflow-hidden border border-border-light hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1",
                className
            )}
        >
            <Link href={`/nos-miels/${product.slug}`} className="block">
                <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {product.badge && (
                        <div className="absolute top-4 left-4">
                            <Badge variant={badgeVariants[product.badge]}>
                                {badgeLabels[product.badge]}
                            </Badge>
                        </div>
                    )}
                </div>
            </Link>

            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <Link href={`/nos-miels/${product.slug}`}>
                        <h3 className="text-xl font-bold text-text-main group-hover:text-primary-dark transition-colors">
                            {product.name}
                        </h3>
                    </Link>
                    <div className="flex items-center gap-1 text-primary-dark text-sm">
                        <Star size={16} fill="currentColor" />
                        <span className="font-bold">{product.rating}</span>
                    </div>
                </div>

                <p className="text-text-muted text-sm mb-6 line-clamp-2">{product.shortDescription}</p>

                <div className="flex items-center justify-between mt-auto">
                    <div className="flex flex-col">
                        <span className="text-xs text-text-muted">Pot de {product.weight}</span>
                        <span className="text-2xl font-bold text-text-main">{formattedPrice}</span>
                    </div>
                    <button
                        className="bg-gray-100 hover:bg-primary hover:text-white text-text-main p-3 rounded-xl transition-all"
                        aria-label={`Ajouter ${product.name} au panier`}
                    >
                        <ShoppingBag size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
}
