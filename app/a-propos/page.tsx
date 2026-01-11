import { PageHeader } from "../../components/sections/PageHeader";
import { StorySection } from "../../components/sections/StorySection";
import { TestimonialsSection } from "../../components/sections/TestimonialsSection";
import { CTASection } from "../../components/sections/CTASection";

export const metadata = {
    title: "À propos — Le Rucher d'Ahmed",
    description: "Notre histoire, nos valeurs et nos pratiques apicoles responsables.",
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
