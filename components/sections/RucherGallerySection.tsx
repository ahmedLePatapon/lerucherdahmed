interface GalleryItem {
    id: string
    src: string
    alt: string
    title?: string
    subtitle?: string
    className?: string
}

interface RucherGallerySectionProps {
    title: string
    subtitle?: string
    items: GalleryItem[]
    className?: string
}

export function RucherGallerySection({
    title,
    subtitle,
    items,
    className = "",
}: RucherGallerySectionProps) {
    return (
        <section className={`py-24 bg-background-light ${className}`}>
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                {/* En-tête */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-main">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="mt-4 text-text-muted">
                            {subtitle}
                        </p>
                    )}
                </div>

                {/* Grille masonry */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className={`group relative rounded-xl overflow-hidden shadow-md cursor-pointer ${item.className || ''}`}
                        >
                            {/* Image de fond */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url('${item.src}')` }}
                                role="img"
                                aria-label={item.alt}
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />

                            {/* Contenu au hover */}
                            {(item.title || item.subtitle) && (
                                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                    {item.title && (
                                        <p className="font-bold font-serif">
                                            {item.title}
                                        </p>
                                    )}
                                    {item.subtitle && (
                                        <p className="text-xs">
                                            {item.subtitle}
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default RucherGallerySection