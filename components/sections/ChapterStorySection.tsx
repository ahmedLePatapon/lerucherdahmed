interface ChapterStorySectionProps {
    badge?: string
    title: string
    content: {
        paragraphs: string[]
    }
    image: {
        src: string
        alt: string
    }
    quote?: {
        text: string
        author?: string
    }
    className?: string
}

export function ChapterStorySection({
    badge = "Chapitre 1",
    title,
    content,
    image,
    quote,
    className = "",
}: ChapterStorySectionProps) {
    return (
        <section className={`py-24 bg-background-light relative ${className}`}>
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image avec quote overlay */}
                    <div className="order-2 lg:order-1 relative">
                        <div className="aspect-4/5 rounded-2xl overflow-hidden shadow-xl border-8 border-white">
                            <div
                                className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700"
                                style={{ backgroundImage: `url('${image.src}')` }}
                                role="img"
                                aria-label={image.alt}
                            />
                        </div>

                        {/* Quote flottante */}
                        {quote && (
                            <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-lg shadow-lg max-w-xs hidden md:block">
                                <p className="font-serif text-xl italic text-primary-dark">
                                    "{quote.text}"
                                </p>
                                {quote.author && (
                                    <cite className="block mt-2 text-sm font-bold text-text-muted not-italic">
                                        — {quote.author}
                                    </cite>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Contenu textuel */}
                    <div className="order-1 lg:order-2 space-y-8">
                        {/* Badge chapitre */}
                        <span className="text-accent font-bold uppercase tracking-wider text-sm">
                            {badge}
                        </span>

                        {/* Titre */}
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-main md:mt-10" style={{ fontFamily: '"Playfair Display", serif' }}>
                            {title}
                        </h2>

                        {/* Paragraphes */}
                        <div className="space-y-6 text-text-muted text-lg leading-relaxed">
                            {content.paragraphs.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChapterStorySection