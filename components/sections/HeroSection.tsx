import React from "react";

export interface HeroSectionProps {
    badge?: string;
    title: string;
    highlight?: string;
    description: string;
    date?: string;
}

export function HeroSection({
    badge = "Légal",
    title,
    highlight = "Confidentialité",
    description,
    date = "24 Octobre 2023",
}: HeroSectionProps) {
    return (
        <section className="relative overflow-hidden rounded-2xl bg-white p-8 md:p-12 border border-surface-border mb-8" id="introduction">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative z-10 flex flex-col gap-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 w-fit border border-primary/20">
                    <span className="flex h-2 w-2 rounded-full bg-primary"></span>
                    <span className="text-xs font-bold text-primary uppercase tracking-wide">{badge}</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-brand-main tracking-tight leading-tight">
                    {title} <span className="text-primary">{highlight}</span>
                </h1>
                <p className="text-gray-700 text-base md:text-lg font-normal leading-relaxed max-w-2xl mt-2">
                    {description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <span className="material-symbols-outlined text-[18px]">update</span>
                    <span>Dernière mise à jour : {date}</span>
                </div>
            </div>
        </section>
    );
}
