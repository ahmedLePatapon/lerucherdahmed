interface StoryHeroProps {
    backgroundImage?: string
    badge?: string
    title: string
    titleHighlight?: string
    description?: string
    className?: string
}

export function StoryHero({
    backgroundImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuCcvNGgz0D5l81wOQgG8d8XYeClsZHJD4cqMifsiwerO4XpcGXo_XMg9cpx1HwLbBkK2F5QtLAQ6Re-9DUu0ZXrPTjIHUYjpp1tER9BnyXcbB_71ISsYhnUjr6f4Ych3Umny-kcF03LxQFOc0GZZPGeL5W1kDRVODq0i1IzeeQUI0n1pb92RTBim9osse_EfznKsL5Vz7ZuUCjzpiRLz82KaIo8xtow9ncy6MCxlikk5cRqPCoBQagLUmelZmc48aRlPJa1VDrx8uc",
    badge = "Depuis 2012",
    title = "Une Histoire de Passion,",
    titleHighlight = "au Rythme des Abeilles",
    description = "Découvrez comment un simple amour pour la nature s'est transformé en une vocation : préserver les abeilles et offrir un miel d'une pureté absolue.",
    className = "",
}: StoryHeroProps) {
    return (
        <div className={`relative min-h-[70vh] flex items-center pt-20 bg-background-dark ${className}`}>
            {/* Background avec overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-linear-to-r from-background-dark/90 via-background-dark/60 to-transparent z-10" />
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${backgroundImage}')` }}
                    role="img"
                    aria-label="Image de fond illustrant l'histoire"
                />
            </div>

            {/* Contenu */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 w-full py-20">
                <div className="max-w-3xl flex flex-col gap-8">
                    {/* Badge */}
                    {badge && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 w-fit backdrop-blur-md">
                            <span className="text-primary text-xs font-bold uppercase tracking-wide">
                                {badge}
                            </span>
                        </div>
                    )}

                    {/* Titre principal */}
                    <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] font-serif tracking-tight drop-shadow-lg" style={{ fontFamily: '"Playfair Display", serif' }}>
                        {title}
                        {titleHighlight && (
                            <>
                                <br />
                                <span className="italic text-transparent bg-clip-text leading-tight bg-linear-to-r from-primary to-primary-dark">{titleHighlight}</span>
                            </>
                        )}
                    </h1>

                    {/* Description */}
                    {description && (
                        <p className="text-lg md:text-xl text-text-light/90 max-w-xl leading-tight font-light">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </div >
    )
}

export default StoryHero