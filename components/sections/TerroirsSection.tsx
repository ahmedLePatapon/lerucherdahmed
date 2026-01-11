"use client";

import { TerroirCard } from "@/components/cards/TerroirCard";
import { terroirs } from "@/lib/data/terroirs";

export function TerroirsSection() {
    return (
        <section className="py-16 bg-background-light">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold">Nos ruchers & terroirs</h2>
                    <p className="text-text-muted mt-2">Découvrez les zones où nous installons nos ruches et les particularités de chaque terroir.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {terroirs.map((t) => (
                        <TerroirCard key={t.id} terroir={t} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TerroirsSection;
