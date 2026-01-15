import Link from "next/link"
import { getAllRencontres } from "@/lib/data/rencontres"
import { PageHeader } from "@/components/sections"

export const metadata = {
    title: "Nos Rencontres - Le Rucher d'Ahmed",
    description: "Découvrez toutes nos histoires et rencontres autour de l'apiculture et du miel artisanal.",
}

export default function RencontresPage() {
    const rencontres = getAllRencontres()

    return (
        <>
            <PageHeader
                title="Nos Rencontres"
                description="Plongez dans l'univers du Rucher d'Ahmed à travers nos histoires et rencontres"
            />

            <section className="py-20 bg-background-light">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {rencontres.map((rencontre) => (
                            <Link
                                key={rencontre.id}
                                href={`/rencontre/${rencontre.slug}`}
                                className="group"
                            >
                                <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                    {/* Image de fond */}
                                    <div className="h-48 bg-cover bg-center relative">
                                        <div
                                            className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                                            style={{ backgroundImage: `url('${rencontre.backgroundImage}')` }}
                                        />
                                        <div className="absolute inset-0 bg-background-dark/40" />

                                        {/* Badge */}
                                        {rencontre.badge && (
                                            <div className="absolute top-4 left-4">
                                                <span className="inline-flex items-center px-2 py-1 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-md">
                                                    <span className="text-primary text-xs font-bold uppercase tracking-wide">
                                                        {rencontre.badge}
                                                    </span>
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Contenu */}
                                    <div className="p-6">
                                        <h3 className="font-serif font-bold text-xl text-text-main mb-2 group-hover:text-primary-dark transition-colors">
                                            {rencontre.title} {rencontre.titleHighlight}
                                        </h3>
                                        <p className="text-text-muted text-sm leading-relaxed">
                                            {rencontre.description}
                                        </p>

                                        {/* Lien de lecture */}
                                        <div className="mt-4 pt-4 border-t border-gray-100">
                                            <span className="inline-flex items-center text-primary font-semibold text-sm group-hover:text-primary-dark transition-colors">
                                                Lire l'histoire
                                                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}