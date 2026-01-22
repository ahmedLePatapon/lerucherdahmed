import { notFound } from "next/navigation"
import { getRencontreBySlug, getAllRencontres } from "@/lib/data/rencontres"
import {
    StoryHero,
    ChapterStorySection,
    ApicultureFeaturesSection,
    ProcessTimelineSection,
    RucherGallerySection,
    CTASection
} from "@/components/sections"

interface RencontrePageProps {
    params: Promise<{
        name: string
    }>
}

// Génération statique des routes
export async function generateStaticParams() {
    const rencontres = getAllRencontres()

    return rencontres.map((rencontre) => ({
        name: rencontre.slug,
    }))
}

// Métadonnées dynamiques
export async function generateMetadata({ params }: RencontrePageProps) {
    const { name } = await params
    const rencontre = getRencontreBySlug(name)

    if (!rencontre) {
        return {
            title: "Rencontre non trouvée - Le Rucher d'Ahmed"
        }
    }

    return {
        title: `${rencontre.title} ${rencontre.titleHighlight || ""} - Le Rucher d'Ahmed`.trim(),
        description: rencontre.description,
    }
}

export default async function RencontrePage({ params }: RencontrePageProps) {
    const { name } = await params
    const rencontre = getRencontreBySlug(name)

    // Si la rencontre n'existe pas, retourner 404
    if (!rencontre) {
        notFound()
    }

    return (
        <>
            {/* Hero Section avec les données de la rencontre */}
            <StoryHero
                backgroundImage={rencontre.backgroundImage}
                badge={rencontre.badge}
                title={rencontre.title}
                titleHighlight={rencontre.titleHighlight}
                description={rencontre.description}
            />

            {/* Chapter Story Section (Chapitre 1) */}
            {rencontre.chapterStory && (
                <ChapterStorySection
                    badge={rencontre.chapterStory.badge}
                    title={rencontre.chapterStory.title}
                    content={rencontre.chapterStory.content}
                    image={rencontre.chapterStory.image}
                    quote={rencontre.chapterStory.quote}
                />
            )}

            {/* Features Section (Chapitre 2) */}
            {rencontre.features && (
                <ApicultureFeaturesSection
                    badge={rencontre.features.badge}
                    title={rencontre.features.title}
                    description={rencontre.features.description}
                    features={rencontre.features.items}
                />
            )}

            {/* Process Timeline Section (Chapitre 3) */}
            {rencontre.processTimeline && (
                <ProcessTimelineSection
                    badge={rencontre.processTimeline.badge}
                    title={rencontre.processTimeline.title}
                    titleHighlight={rencontre.processTimeline.titleHighlight}
                    content={rencontre.processTimeline.content}
                    ctaText={rencontre.processTimeline.ctaText}
                    ctaHref={rencontre.processTimeline.ctaHref}
                    timeline={rencontre.processTimeline.timeline}
                />
            )}

            {/* Gallery Section */}
            {rencontre.gallery && (
                <RucherGallerySection
                    title={rencontre.gallery.title}
                    subtitle={rencontre.gallery.subtitle}
                    items={rencontre.gallery.items}
                />
            )}

            {/* CTA Section */}
            <CTASection
                title="Goûtez à l'authenticité de notre histoire"
                description="Chaque pot de miel que vous commandez soutient notre démarche et permet à nos colonies de prospérer."
                primaryCTA={{ label: "Visiter la boutique", href: "/nos-miels" }}
                secondaryCTA={{ label: "Nous contacter", href: "/contact" }}
            />

            {/* Contenu additionnel si disponible (ancien format pour compatibilité) */}
            {rencontre.content && (
                <section className="py-24 bg-background-light">
                    <div className="max-w-4xl mx-auto px-4 lg:px-8">
                        <div className="space-y-12">
                            {rencontre.content.sections.map((section, index) => (
                                <div key={index}>
                                    {section.type === 'text' && (
                                        <p className="text-lg text-text-muted leading-relaxed">
                                            {section.content}
                                        </p>
                                    )}

                                    {section.type === 'quote' && (
                                        <blockquote className="border-l-4 border-primary pl-6 py-4 my-8 bg-white rounded-r-lg">
                                            <p className="text-xl font-serif italic text-text-main mb-2">
                                                "{section.content}"
                                            </p>
                                            {section.author && (
                                                <cite className="text-primary font-bold text-sm">
                                                    — {section.author}
                                                </cite>
                                            )}
                                        </blockquote>
                                    )}

                                    {section.type === 'image' && section.imageUrl && (
                                        <div className="my-8">
                                            <img
                                                src={section.imageUrl}
                                                alt={section.content}
                                                className="w-full rounded-lg shadow-lg"
                                            />
                                            {section.content && (
                                                <p className="text-center text-sm text-text-muted mt-2 italic">
                                                    {section.content}
                                                </p>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Navigation vers d'autres rencontres */}
                        <div className="mt-16 pt-12 border-t border-gray-200">
                            <div className="text-center">
                                <h3 className="text-2xl font-serif font-bold text-text-main mb-8">
                                    Découvrez d'autres rencontres
                                </h3>
                                <div className="flex flex-wrap justify-center gap-4">
                                    {getAllRencontres()
                                        .filter(r => r.slug !== rencontre.slug)
                                        .map(r => (
                                            <a
                                                key={r.slug}
                                                href={`/rencontre/${r.slug}`}
                                                className="inline-flex items-center px-6 py-3 bg-primary/10 text-primary-dark font-semibold rounded-lg hover:bg-primary/20 transition-colors"
                                            >
                                                {r.title.replace(',', '')}
                                            </a>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}