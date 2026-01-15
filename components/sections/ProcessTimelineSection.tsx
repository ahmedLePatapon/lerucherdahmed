import { ArrowRight } from "lucide-react"

interface TimelineStep {
    title: string
    description: string
    opacity?: number
}

interface ProcessTimelineSectionProps {
    badge?: string
    title: string
    titleHighlight?: string
    content: {
        paragraphs: string[]
    }
    ctaText?: string
    ctaHref?: string
    timeline: TimelineStep[]
    className?: string
}

export function ProcessTimelineSection({
    badge = "Chapitre 3",
    title,
    titleHighlight,
    content,
    ctaText,
    ctaHref = "#",
    timeline,
    className = "",
}: ProcessTimelineSectionProps) {
    return (
        <section className={`py-24 bg-background-dark text-text-light relative overflow-hidden ${className}`}>
            {/* Gradient blobs décoratifs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10 pointer-events-none">
                <div className="absolute top-10 left-10 w-96 h-96 bg-primary rounded-full blur-[100px]" />
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20">
                    {/* Contenu textuel */}
                    <div className="space-y-8">
                        <span className="text-primary font-bold uppercase tracking-wider text-sm">
                            {badge}
                        </span>

                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
                            {title} {titleHighlight && (
                                <>
                                    <br />
                                    <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary-dark">
                                        {titleHighlight}
                                    </span>
                                </>
                            )}
                        </h2>

                        <div className="space-y-6 text-text-muted-light text-lg">
                            {content.paragraphs.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>

                        {ctaText && (
                            <div className="pt-4">
                                <a
                                    className="inline-flex items-center gap-2 text-primary font-bold hover:text-white transition-colors border-b border-primary hover:border-white pb-1"
                                    href={ctaHref}
                                >
                                    {ctaText}
                                    <ArrowRight size={16} />
                                </a>
                            </div>
                        )}
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                        <div className="border-l-2 border-white/10 pl-8 space-y-12">
                            {timeline.map((step, index) => (
                                <div key={index} className="relative">
                                    <span
                                        className={`absolute -left-10.25 top-0 w-5 h-5 rounded-full border-4 border-background-dark ${step.opacity
                                            ? `bg-primary/${Math.round(step.opacity * 100)}`
                                            : 'bg-primary'
                                            }`}
                                    />
                                    <h4 className="text-xl font-bold text-white mb-2">
                                        {step.title}
                                    </h4>
                                    <p className="text-text-muted-light text-sm">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProcessTimelineSection