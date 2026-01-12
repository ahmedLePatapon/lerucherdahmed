"use client";

import { useState } from "react";

interface Props {
    images: string[];
    alt?: string;
}

export default function ProductGallery({ images, alt }: Props) {
    const [active, setActive] = useState(0);

    return (
        <div>
            <div className="w-full h-96 bg-gray-100 rounded-md overflow-hidden">
                <img src={images[active]} alt={alt} className="object-cover w-full h-full" />
            </div>

            {images.length > 1 && (
                <div className="mt-4 flex gap-3">
                    {images.map((src, idx) => (
                        <button
                            key={src}
                            onClick={() => setActive(idx)}
                            className={`w-20 h-20 rounded-md overflow-hidden border ${idx === active ? "border-primary" : "border-transparent"}`}
                        >
                            <img src={src} alt={`${alt} ${idx + 1}`} className="object-cover w-full h-full" />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
"use client";

import React, { useState } from "react";
import { Product } from "@/lib/data/products";

export interface ProductGalleryProps {
    product: Product;
    images?: string[];
}

export default function ProductGallery({ product, images }: ProductGalleryProps) {
    const imgs = images && images.length > 0 ? images : [product.image];
    const [current, setCurrent] = useState(0);

    return (
        <div>
            <div className="w-full h-[480px] bg-gray-100 rounded-md overflow-hidden mb-4">
                <img src={imgs[current]} alt={product.name} className="object-cover w-full h-full" />
            </div>

            <div className="flex gap-3">
                {imgs.map((src, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`w-20 h-20 rounded-md overflow-hidden border ${i === current ? "border-primary" : "border-transparent"
                            }`}
                        aria-label={`Afficher image ${i + 1}`}
                    >
                        <img src={src} alt={`${product.name} ${i + 1}`} className="object-cover w-full h-full" />
                    </button>
                ))}
            </div>
        </div>
    );
}
