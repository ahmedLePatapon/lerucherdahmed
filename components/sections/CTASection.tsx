import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface CTASectionProps {
    title?: string;
    description?: string;
    primaryCTA?: {
        label: string;
        href: string;
    };
    secondaryCTA?: {
        label: string;
        href: string;
    };
}

export function CTASection({
    title = "Prêt à goûter l'authenticité ?",
    description = "Commandez dès maintenant et recevez votre miel artisanal directement chez vous.",
    primaryCTA = { label: "Commander", href: "/nos-miels" },
    secondaryCTA = { label: "Nous contacter", href: "/contact" },
}: CTASectionProps) {
    return (
        <section className="py-24 bg-primary">
            <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{title}</h2>
                <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">{description}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href={primaryCTA.href}>
                        <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                            {primaryCTA.label}
                        </Button>
                    </Link>
                    <Link href={secondaryCTA.href}>
                        <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                            {secondaryCTA.label}
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
