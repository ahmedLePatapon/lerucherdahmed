import { Metadata } from "next";
import { Leaf, Award, Truck } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { ProductCard } from "@/components/cards/ProductCard";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { CTASection } from "@/components/sections/CTASection";
import { products } from "@/lib/data/products";

export const metadata: Metadata = {
    title: "Nos Miels",
    description:
        "Découvrez notre gamme de miels artisanaux : miel de lavande, acacia, châtaignier et plus encore. 100% naturel, récolté en Charente.",
};

const advantages = [
    {
        icon: Leaf,
        title: "100% Pur & Naturel",
        description:
            "Nos miels sont récoltés et mis en pot sans aucun traitement ni ajout. La pureté à l'état brut.",
    },
    {
        icon: Award,
        title: "Qualité Artisanale",
        description:
            "Chaque pot est le fruit d'un savoir-faire transmis et perfectionné depuis plus de 25 ans.",
    },
    {
        icon: Truck,
        title: "Livraison Soignée",
        description:
            "Emballage écologique et livraison rapide pour vous garantir un miel en parfait état.",
    },
];

export default function NosMielsPage() {
    return (
        <>
            <PageHeader
                badge="Notre boutique"
                title="Nos Miels Artisanaux"
                description="Découvrez notre sélection de miels récoltés avec passion dans nos ruchers charentais. Chaque variété a son caractère unique."
            />

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="flex items-center justify-between mb-8">
                        <p className="text-text-muted">
                            <span className="font-bold text-text-main">{products.length}</span> miels disponibles
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-background-light">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-primary text-sm font-bold uppercase tracking-wider">Pourquoi nous choisir</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-text-main mt-4 mb-6">Les avantages du miel artisanal</h2>
                        <p className="text-text-muted max-w-2xl mx-auto">En choisissant Le Rucher d'Ahmed, vous optez pour un miel d'exception, produit dans le respect de la nature et des abeilles.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {advantages.map((advantage) => (
                            <FeatureCard key={advantage.title} icon={advantage.icon} title={advantage.title} description={advantage.description} />
                        ))}
                    </div>
                </div>
            </section>

            <CTASection
                title="Une question sur nos miels ?"
                description="N'hésitez pas à nous contacter pour en savoir plus sur nos produits et notre méthode de production."
                primaryCTA={{ label: "Nous contacter", href: "/contact" }}
                secondaryCTA={{ label: "Découvrir nos ruchers", href: "/nos-ruchers" }}
            />
        </>
    );
}
