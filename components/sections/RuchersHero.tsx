export function RuchersHero() {
    return (
        <section className="relative flex min-h-[60vh] w-full flex-col justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                {/* Image de fond */}
                <div className="h-full w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(/images/bannier_cognac.jpg)` }} />
                {/* Overlay sombre pour contraste */}
                <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />
                {/* Overlay gradient existant */}
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-dark/60 via-neutral-dark/40 to-neutral-dark/70 z-20 pointer-events-none" />
            </div>

            <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-col items-center px-4 py-20 text-center sm:px-6 lg:px-8">
                <div className="mb-4 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-md border border-white/20">
                    <span className="mr-2 text-primary">📍</span>
                    Terroir Charentais
                </div>

                <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">Nos Ruchers</h1>

                <p className="max-w-2xl text-lg font-medium leading-relaxed text-gray-100 sm:text-xl">
                    Des abeilles heureuses en Charente. Découvrez les terroirs uniques qui donnent à notre miel son goût inimitable, entre vignes, bois et patrimoine.
                </p>

                <div className="mt-10">
                    <a href="#terroirs" className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-8 text-base font-bold text-neutral-dark transition-all hover:bg-primary-dark">
                        Explorer nos terroirs
                    </a>
                </div>
            </div>
        </section>
    );
}

export default RuchersHero;
