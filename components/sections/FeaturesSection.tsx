import { Leaf, MapPin, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";
import { FeatureCard } from "@/components/cards/FeatureCard";

const features = [
    {
        icon: Leaf,
        title: "100% Naturel",
        description:
            "Aucun ajout, aucun traitement chimique, juste le pur nectar des fleurs transformé par nos abeilles.",
    },
    {
        icon: MapPin,
        title: "Production Locale",
        description:
            "Récolté et mis en pot directement au rucher, garantissant une fraîcheur et une traçabilité absolues.",
    },
    {
        icon: Heart,
        title: "Apiculture Durable",
        description:
            "Nous protégeons la biodiversité et nos colonies avant tout, en respectant leur cycle naturel.",
    },
];

export function FeaturesSection() {
    return (
        <section className="py-24 bg-white border-y border-[#e5e0d8]">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="flex flex-col md:flex-row gap-12 md:gap-20">
                    <div className="md:w-1/3 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-text-main">Pourquoi choisir notre miel ?</h2>
                        <p className="text-text-muted text-lg">
                            Une apiculture respectueuse des abeilles et de l&apos;environnement pour un produit d&apos;exception,
                            récolté avec patience et passion.
                        </p>
                        <Link href="/notre-apiculture" className="inline-flex items-center text-primary-dark font-bold hover:underline decoration-2 underline-offset-4">
                            En savoir plus sur notre méthode
                            <span className="ml-1 text-lg"><ArrowRight size={20} /></span>
                        </Link>
                    </div>
                    <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature) => (
                            <FeatureCard key={feature.title} icon={feature.icon} title={feature.title} description={feature.description} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
