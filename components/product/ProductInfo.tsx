import { useState } from "react";
import { Star } from "lucide-react";

interface Props {
    name: string;
    price: number;
    rating: number;
    weight?: string;
}

export default function ProductInfo({ name, price, rating, weight }: Props) {
    const [qty, setQty] = useState(1);

    return (
        <div>
            <h1 className="text-3xl font-bold mb-2">{name}</h1>

            <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center text-yellow-500">
                    <Star size={16} />
                    <span className="ml-1 font-medium">{rating.toFixed(1)}</span>
                </div>
                {weight && <span className="text-text-muted">• {weight}</span>}
            </div>

            <p className="text-xl font-semibold mb-4">{price} €</p>

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

            <button className="w-full bg-primary text-white py-3 rounded-md">Ajouter au panier</button>
        </div>
    );
}
"use client";

import React, { useState } from "react";
import { Product } from "@/lib/data/products";
import { Star } from "lucide-react";

export interface ProductInfoProps {
    product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
    const [qty, setQty] = useState(1);

    const fullStars = Math.floor(product.rating || 0);
    const hasHalf = (product.rating || 0) - fullStars >= 0.5;

    return (
        <div className="sticky top-24 bg-white p-6 rounded-md shadow">
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <p className="text-text-muted mb-4">{product.description}</p>

            <div className="flex items-center gap-3 mb-4">
                <p className="text-2xl font-semibold">{product.price.toFixed(2)} €</p>
                <div className="flex items-center text-yellow-500">
                    {Array.from({ length: fullStars }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                    {hasHalf && <Star className="w-4 h-4" />}
                    <span className="ml-2 text-sm text-text-muted">{product.rating.toFixed(1)}</span>
                </div>
            </div>

            <div className="mb-4">
                <span className="inline-block bg-background-light px-3 py-1 rounded-full text-sm">{product.weight}</span>
            </div>

            <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center border rounded-md overflow-hidden">
                    <button
                        onClick={() => setQty((q) => Math.max(1, q - 1))}
                        className="px-3 py-2 bg-background-light"
                        aria-label="Diminuer la quantité"
                    >
                        -
                    </button>
                    <div className="px-4">{qty}</div>
                    <button
                        onClick={() => setQty((q) => q + 1)}
                        className="px-3 py-2 bg-background-light"
                        aria-label="Augmenter la quantité"
                    >
                        +
                    </button>
                </div>

                <button className="ml-auto bg-primary text-white py-3 px-4 rounded-md">Ajouter au panier</button>
            </div>
        </div>
    );
}
