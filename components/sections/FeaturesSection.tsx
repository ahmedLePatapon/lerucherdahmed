import { Leaf, MapPin, Heart } from "lucide-react";
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
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary text-sm font-bold uppercase tracking-wider">Nos engagements</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-text-main mt-4 mb-6">Pourquoi choisir notre miel ?</h2>
                    <p className="text-text-muted max-w-2xl mx-auto">Découvrez ce qui rend notre miel unique et pourquoi nos clients nous font confiance depuis des années.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <FeatureCard key={feature.title} icon={feature.icon} title={feature.title} description={feature.description} />
                    ))}
                </div>
            </div>
        </section>
    );
}
