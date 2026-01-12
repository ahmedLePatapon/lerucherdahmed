"use client";

import React, { useState } from "react";
import { testimonials as allTestimonials, Testimonial } from "@/lib/data/testimonials";
import { Star } from "lucide-react";

export interface ProductTestimonialsProps {
    productName?: string;
}

export default function ProductTestimonials({ productName }: ProductTestimonialsProps) {
    const filtered: Testimonial[] = productName
        ? allTestimonials.filter((t) => t.product === productName)
        : allTestimonials;

    const [visible, setVisible] = useState(3);

    const visibleItems = filtered.slice(0, visible);

    return (
        <div>
            <div className="grid gap-4">
                {visibleItems.map((t) => (
                    <div key={t.id} className="p-4 border rounded-md bg-white">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-background-light flex items-center justify-center font-semibold">{t.initial}</div>
                                <div>
                                    <div className="font-medium">{t.name}</div>
                                    <div className="text-sm text-text-muted">{t.role}</div>
                                </div>
                            </div>
                            <div className="flex items-center text-yellow-500">
                                {Array.from({ length: Math.max(0, Math.floor(t.rating)) }).map((_, i) => (
                                    <Star key={i} size={14} />
                                ))}
                            </div>
                        </div>
                        <p className="text-text-muted">{t.text}</p>
                    </div>
                ))}
            </div>

            {visible < filtered.length && (
                <div className="mt-4">
                    <button
                        onClick={() => setVisible((v) => v + 3)}
                        className="px-4 py-2 bg-background-light rounded-md"
                    >
                        Charger plus d&apos;avis
                    </button>
                </div>
            )}
        </div>
    );
}
