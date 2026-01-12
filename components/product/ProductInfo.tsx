"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { Product } from "@/lib/data/products";

interface Props {
    product: Product;
}

export default function ProductInfo({ product }: Props) {
    const [qty, setQty] = useState(1);

    const formattedPrice = new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
    }).format(product.price);

    return (
        <div>
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold">{product.name}</h1>
                {product.badge && (
                    <Badge variant={product.badge === "best-seller" ? "primary" : product.badge === "intense" ? "intense" : "accent"}>
                        {product.badge}
                    </Badge>
                )}
            </div>

            <p className="text-text-muted mb-4">{product.shortDescription}</p>

            <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center text-yellow-500">
                    <Star size={16} />
                    <span className="ml-1 font-medium">{product.rating.toFixed(1)}</span>
                </div>
                {product.weight && <span className="text-text-muted">• {product.weight}</span>}
            </div>

            <div className="text-2xl font-bold mb-4">{formattedPrice}</div>

            <div className="grid grid-cols-2 gap-2 text-sm text-text-muted mb-4">
                {product.harvest && <div>Récolte: <span className="font-medium text-text-main">{product.harvest}</span></div>}
                {product.usage && <div>Usage: <span className="font-medium text-text-main">{product.usage}</span></div>}
            </div>

            <div className="flex items-center gap-3 mb-4">
                <label className="text-sm text-text-muted">Quantité</label>
                <div className="flex items-center border rounded-md overflow-hidden">
                    <button
                        onClick={() => setQty((q) => Math.max(1, q - 1))}
                        className="px-3 py-2"
                        aria-label="Réduire quantité"
                    >
                        -
                    </button>
                    <div className="px-4 py-2">{qty}</div>
                    <button
                        onClick={() => setQty((q) => q + 1)}
                        className="px-3 py-2"
                        aria-label="Augmenter quantité"
                    >
                        +
                    </button>
                </div>
            </div>

            <div className="mb-4">
                {product.inStock ? (
                    <span className="text-sm text-green-600 font-medium">En stock</span>
                ) : (
                    <span className="text-sm text-red-600 font-medium">Rupture de stock</span>
                )}
            </div>

            <button className="w-full bg-primary text-white py-3 rounded-md text-lg">Ajouter au panier</button>
        </div>
    );
}
