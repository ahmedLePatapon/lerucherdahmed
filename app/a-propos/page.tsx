import { PageHeader } from "../../components/sections/PageHeader";
import { StorySection } from "../../components/sections/StorySection";
import { TestimonialsSection } from "../../components/sections/TestimonialsSection";
import { CTASection } from "../../components/sections/CTASection";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "À propos — Le Rucher d'Ahmed",
    description: "Notre histoire, nos valeurs et nos pratiques apicoles responsables.",
    openGraph: {
        title: "À propos — Le Rucher d'Ahmed",
        description: "Notre histoire, nos valeurs et nos pratiques apicoles responsables.",
        url: "https://lerucherdahmed.fr/a-propos",
        siteName: "Le Rucher d'Ahmed",
        images: [
            {
                url: "https://picsum.photos/seed/apropos/1200/630",
                width: 1200,
                height: 630,
                alt: "À propos — Le Rucher d'Ahmed",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "À propos — Le Rucher d'Ahmed",
        description: "Notre histoire, nos valeurs et nos pratiques apicoles responsables.",
        images: ["https://picsum.photos/seed/apropos/1200/630"],
    },
};

export default function AboutPage() {
    return (
        <main className="container mx-auto py-16 px-4">
            <PageHeader title="À propos" description="Notre histoire et nos engagements envers la qualité et le terroir." />

            <section className="py-12">
                <StorySection />
            </section>

            <section className="py-12">
                <TestimonialsSection />
            </section>

            <section className="py-12">
                <CTASection />
            </section>
        </main>
    );
}
