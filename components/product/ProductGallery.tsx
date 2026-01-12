"use client";

import React, { useState } from "react";

interface Props {
    images?: string[];
    alt?: string;
}

export default function ProductGallery({ images = [], alt }: Props) {
    const imgs = images.length > 0 ? images : [];
    const [current, setCurrent] = useState(0);

    if (imgs.length === 0) {
        return (
            <div className="w-full h-96 bg-gray-100 rounded-md flex items-center justify-center">
                <span className="text-text-muted">Aucune image disponible</span>
            </div>
        );
    }

    return (
        <div>
            <div className="w-full h-[560px] bg-gray-100 rounded-md overflow-hidden mb-4">
                <img src={imgs[current]} alt={alt ?? `image-${current + 1}`} className="object-cover w-full h-full" />
            </div>

            {imgs.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                    {imgs.map((src, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`w-24 h-24 rounded-md overflow-hidden border-2 ${i === current ? "border-primary" : "border-transparent"}`}
                            aria-label={`Afficher image ${i + 1}`}>
                            <img src={src} alt={`${alt ?? "product"} ${i + 1}`} className="object-cover w-full h-full" />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
