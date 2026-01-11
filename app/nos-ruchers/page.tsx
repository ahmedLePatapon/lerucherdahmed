import { PageHeader } from "../../components/sections/PageHeader";
import { TerroirsSection } from "../../components/sections/TerroirsSection";
import { CTASection } from "../../components/sections/CTASection";

export const metadata = {
    title: "Nos Ruchers — Le Rucher d'Ahmed",
    description: "Découvrez nos ruchers, nos terroirs et notre savoir-faire apicole.",
};

export default function RuchersPage() {
    return (
        <main className="container mx-auto py-16 px-4">
            <PageHeader title="Nos Ruchers" description="Nos emplacements, terroirs et pratiques apicoles." />

            <section className="py-8">
                <TerroirsSection />
            </section>

            <section className="py-12">
                <CTASection />
            </section>
        </main>
    );
}
