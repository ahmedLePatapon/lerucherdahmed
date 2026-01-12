"use client";

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
