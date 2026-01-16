import Link from "next/link";
import { ArrowRight, Leaf, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";

export interface HeroSectionProps {
    badge?: string;
    title: string;
    highlight?: string;
    backgroundImage?: string;
    description: string;
    date?: string;
}

export function HeroSection({
    badge = "Nouvelle récolte disponible",
    title = "L'Or de la Nature, ",
    highlight = "Directement de la Ruche",
    backgroundImage,
    description,
}: HeroSectionProps) {
    return (
        <section className="relative min-h-screen flex items-center pt-20 bg-background-dark">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-linear-to-r from-background-dark/90 via-background-dark/70 to-transparent z-10" />
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 w-full py-20">
                <div className="max-w-2xl flex flex-col gap-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md w-fit">
                        <span className="flex w-2 h-2 rounded-full bg-primary animate-pulse-dot" />
                        <span className="text-primary text-xs font-bold uppercase tracking-wide">{badge}</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight drop-shadow-lg">
                        {title} <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary-dark">{highlight}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-text-light/90 font-semibold max-w-xl drop-shadow-md">
                        {description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/nos-miels">
                            <Button size="lg" variant="primary" className="text-white">
                                Commander notre Miel
                                <span className="ml-2 inline-flex transition-transform group-hover:translate-x-1 text-white">
                                    <ArrowRight size={20} />
                                </span>
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button size="lg" variant="outline" className="border-white/30 text-white hover:border-primary hover:text-primary backdrop-blur-sm">
                                Nous Contacter
                            </Button>
                        </Link>
                    </div>

                    <div className="flex flex-wrap gap-6 mt-4">
                        <div className="flex items-center gap-2 text-white/80">
                            <Leaf size={20} className="text-primary" />
                            <span className="text-sm font-medium">100% Naturel</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/80">
                            <MapPin size={20} className="text-primary" />
                            <span className="text-sm font-medium">Production Locale</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
