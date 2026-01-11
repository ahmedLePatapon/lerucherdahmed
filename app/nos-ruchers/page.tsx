import { Metadata } from "next";
import { RuchersHero } from "../../components/sections/RuchersHero";
import { RuchersBenefits } from "../../components/sections/RuchersBenefits";
import { TerroirDetails } from "../../components/sections/TerroirDetails";
import { MapSection } from "../../components/sections/MapSection";
import { CTASection } from "../../components/sections/CTASection";

export const metadata: Metadata = {
    title: "Nos Ruchers — Le Rucher d'Ahmed",
    description: "Découvrez nos ruchers, nos terroirs et notre savoir-faire apicole.",
    openGraph: {
        title: "Nos Ruchers — Le Rucher d'Ahmed",
        description: "Découvrez nos ruchers, nos terroirs et notre savoir-faire apicole.",
        url: "https://lerucherdahmed.fr/nos-ruchers",
        siteName: "Le Rucher d'Ahmed",
        images: [
            {
                url: "https://picsum.photos/seed/terroirs/1200/630",
                width: 1200,
                height: 630,
                alt: "Nos ruchers et terroirs",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Nos Ruchers — Le Rucher d'Ahmed",
        description: "Découvrez nos ruchers, nos terroirs et notre savoir-faire apicole.",
        images: ["https://picsum.photos/seed/terroirs/1200/630"],
    },
};

export default function RuchersPage() {
    return (
        <>
            <RuchersHero />
            <RuchersBenefits />
            <TerroirDetails />
            <MapSection />
            <CTASection
                title="Du terroir à votre tartine"
                description="Chaque pot raconte l'histoire de sa fleur et de son village. Goûtez la différence d'un miel artisanal, local et authentique."
                primaryCTA={{ label: "Commander nos miels", href: "/nos-miels" }}
            />
        </>
    );
}
