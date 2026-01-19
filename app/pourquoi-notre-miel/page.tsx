import { whyOurHoneyContent } from "@/lib/data/whyOurHoneyContent";
import { HeroSection } from "@/components/sections/HeroSection";
import EngagementSection from "@/components/sections/EngagementSection";
import ValuesSection from "@/components/cards/ValuesSection";
import DifferenceSection from "@/components/sections/DifferenceSection";
import MethodSection from "@/components/sections/MethodSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

export default function WhyOurHoneyPage() {
    const { hero, engagement, values, difference, method, finalCta } = whyOurHoneyContent;
    return (
        <main>
            <HeroSection
                title={hero.title}
                highlight={hero.subtitle}
                description={hero.description}
                badge={(hero as any).badge}
                backgroundImage={(hero as any).backgroundImage}
            />
            <EngagementSection {...engagement} />
            <ValuesSection values={values} />
            <DifferenceSection {...difference} />
            <MethodSection {...method} />
            <FinalCTASection {...finalCta} />
        </main>
    );
}

export const metadata = {
    title: whyOurHoneyContent.seo.title,
    description: whyOurHoneyContent.seo.description,
};
