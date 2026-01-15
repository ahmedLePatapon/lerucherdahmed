import { Leaf, Stethoscope, Scale } from "lucide-react"

interface FeatureItem {
    icon: "leaf" | "stethoscope" | "scale"
    title: string
    description: string
}

interface ApicultureFeaturesSectionProps {
    badge?: string
    title: string
    description?: string
    features: FeatureItem[]
    className?: string
}

const iconMap = {
    leaf: Leaf,
    stethoscope: Stethoscope,
    scale: Scale,
}

export function ApicultureFeaturesSection({
    badge = "Chapitre 2",
    title,
    description,
    features,
    className = "",
}: ApicultureFeaturesSectionProps) {
    return (
        <section className={`py-24 bg-white border-y border-[#e5e0d8] ${className}`}>
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                {/* En-tête */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-accent font-bold uppercase tracking-wider text-sm mb-3 block">
                        {badge}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-main mb-6">
                        {title}
                    </h2>
                    {description && (
                        <p className="text-text-muted text-lg">
                            {description}
                        </p>
                    )}
                </div>

                {/* Grille des features */}
                <div className="grid md:grid-cols-3 gap-12">
                    {features.map((feature, index) => {
                        const IconComponent = iconMap[feature.icon]

                        return (
                            <div key={index} className="flex flex-col items-center text-center group">
                                {/* Icône avec hover effect */}
                                <div className="w-20 h-20 bg-background-light rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <IconComponent size={32} />
                                </div>

                                {/* Titre */}
                                <h3 className="text-2xl font-serif font-bold text-text-main mb-4">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-text-muted">
                                    {feature.description}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default ApicultureFeaturesSection