export interface Rencontre {
    id: string
    slug: string
    title: string
    titleHighlight?: string
    badge?: string
    description: string
    backgroundImage: string
    chapterStory?: {
        badge: string
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
    }
    features?: {
        badge: string
        title: string
        description: string
        items: Array<{
            icon: "leaf" | "stethoscope" | "scale"
            title: string
            description: string
        }>
    }
    processTimeline?: {
        badge: string
        title: string
        titleHighlight?: string
        content: {
            paragraphs: string[]
        }
        ctaText?: string
        ctaHref?: string
        timeline: Array<{
            title: string
            description: string
            opacity?: number
        }>
    }
    gallery?: {
        title: string
        subtitle?: string
        items: Array<{
            id: string
            src: string
            alt: string
            title?: string
            subtitle?: string
            className?: string
        }>
    }
    content?: {
        sections: Array<{
            type: 'text' | 'quote' | 'image'
            content: string
            author?: string
            imageUrl?: string
        }>
    }
}

export const rencontres: Rencontre[] = [
    {
        id: "histoire-passion",
        slug: "histoire-passion",
        title: "Une Histoire de Passion,",
        titleHighlight: "au Rythme des Abeilles",
        badge: "Depuis 2012",
        description: "Découvrez comment un simple amour pour la nature s'est transformé en une vocation : préserver les abeilles et offrir un miel d'une pureté absolue.",
        backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcvNGgz0D5l81wOQgG8d8XYeClsZHJD4cqMifsiwerO4XpcGXo_XMg9cpx1HwLbBkK2F5QtLAQ6Re-9DUu0ZXrPTjIHUYjpp1tER9BnyXcbB_71ISsYhnUjr6f4Ych3Umny-kcF03LxQFOc0GZZPGeL5W1kDRVODq0i1IzeeQUI0n1pb92RTBim9osse_EfznKsL5Vz7ZuUCjzpiRLz82KaIo8xtow9ncy6MCxlikk5cRqPCoBQagLUmelZmc48aRlPJa1VDrx8uc",
        chapterStory: {
            badge: "Chapitre 1",
            title: "La Genèse d'une Vocation",
            content: {
                paragraphs: [
                    "Tout a commencé il y a plus de dix ans. Ahmed, alors ingénieur en agronomie, cherchait à renouer avec le concret, le vivant. C'est en installant sa première ruche au fond de son jardin que la fascination a opéré.",
                    "Le bourdonnement incessant, l'organisation parfaite de la colonie, et cette alchimie mystérieuse qui transforme le nectar en or liquide... Ce qui n'était qu'un passe-temps est rapidement devenu une évidence.",
                    "Quittant sa carrière, Ahmed a décidé de consacrer sa vie à comprendre et protéger ces sentinelles de l'environnement. Le \"Rucher d'Ahmed\" était né, avec une promesse simple : ne jamais compromettre la qualité pour la quantité."
                ]
            },
            image: {
                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuACb4vwKahhYOUUk8f5kL4WWdsi8cT7t90MFDnws2XpbxEpWe5oVY4PV4n2PxhpdqpOg6s0NRHOdCjXumx3C0k5JXKnNdCg-8_d2xWqbdqpnq1RRJJA9kqyDFsAzf0D7IOudcWQKX2Td69lSx-tRIB8fH6WINu3m7A4e1xxF5uAsX_odJ4X8tPp4ZP2pBEVfwXamtIaZ5MurjV4hSuqeUDBR2BrWsw0XE5pvmt8wePODo29j-dt_oCDwySISPM78HI2vgbul_J5xew",
                alt: "Ahmed dans son rucher, observant attentivement une ruche"
            },
            quote: {
                text: "L'apiculture n'est pas un métier, c'est une observation humble de la nature.",
                author: "Ahmed"
            }
        },
        features: {
            badge: "Chapitre 2",
            title: "Le Respect du Vivant avant tout",
            description: "Notre philosophie est simple : nous sommes les gardiens des abeilles, pas leurs exploiteurs.",
            items: [
                {
                    icon: "leaf",
                    title: "Sédentarité",
                    description: "Contrairement à l'apiculture intensive, nous ne déplaçons pas nos ruches. Nos abeilles vivent au rythme des saisons locales, sans le stress de la transhumance."
                },
                {
                    icon: "stethoscope",
                    title: "Soins Naturels",
                    description: "Nous refusons les traitements chimiques préventifs. La santé de nos colonies passe par des méthodes douces et l'utilisation de plantes médicinales."
                },
                {
                    icon: "scale",
                    title: "Récolte Raisonnée",
                    description: "Nous ne prélevons que l'excédent. Le miel est avant tout la nourriture des abeilles pour l'hiver. Si la saison est mauvaise, nous ne récoltons pas."
                }
            ]
        },
        processTimeline: {
            badge: "Chapitre 3",
            title: "Un Savoir-faire",
            titleHighlight: "Purement Artisanal",
            content: {
                paragraphs: [
                    "De la ruche au pot, chaque étape est réalisée à la main dans notre miellerie. Nous pratiquons l'extraction à froid, une méthode lente qui préserve toutes les qualités nutritionnelles et gustatives du miel.",
                    "Notre miel n'est ni chauffé, ni pasteurisé, ni mélangé. Il est le reflet pur et intact de la flore environnante au moment de la récolte. C'est pourquoi chaque lot est unique, avec ses propres nuances de couleur et de saveur."
                ]
            },
            ctaText: "Découvrir nos miels",
            ctaHref: "/nos-miels",
            timeline: [
                {
                    title: "La Récolte",
                    description: "Effectuée tôt le matin, cadre par cadre, en brossant doucement les abeilles pour ne pas les blesser.",
                    opacity: 1
                },
                {
                    title: "L'Extraction",
                    description: "Par force centrifuge uniquement, sans jamais chauffer le miel pour ne pas dégrader ses enzymes naturels.",
                    opacity: 0.6
                },
                {
                    title: "La Maturation",
                    description: "Le miel repose plusieurs jours dans des maturateurs en inox pour laisser remonter les dernières impuretés de cire.",
                    opacity: 0.4
                },
                {
                    title: "La Mise en Pot",
                    description: "Manuelle et minutieuse, elle garantit que chaque pot scellé contient un trésor de la nature intact.",
                    opacity: 0.2
                }
            ]
        },
        gallery: {
            title: "La Vie au Rucher",
            subtitle: "Instants volés au cœur de la nature.",
            items: [
                {
                    id: "lavande",
                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYkPLxTy8_0jXmFoYa53BEm3W3QISNDYkTf8y20zGEbK7LPL9h8Njm1EHzfHyinaY0lLM8OmyK1oQPQUOht4s6yw4tYre-5DX-aeuYBQ1ZS9YdFMJ2RFdR2A4Dc9kMk26FFpJSuNtUiYD0zcR2zojYdiz6hTAlo1LgtoYTueH5SfXQHyeNoGgqKxiBjKd1KnmYDhm3BLo40p0SP2L3lvgnp93Yq7Py0WwutaJ6yGok8mAngXk1caWgYrDwHxolQb8X7q3et2Dxt9c",
                    alt: "Champs de lavande en fleurs avec ruches",
                    title: "Champs de Lavande",
                    subtitle: "L'été en Provence"
                },
                {
                    id: "transparence",
                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuApHaDHy9FYFkgLFT3TUuPGN2K1t0S6DpX8OPQ6cEx7S7-2ClONY-zeI6GB15lhh7HSyHWFQrwEmjHtVNs4kFiWjKSjKbnatWE-Aenf5_WOl5OXHOVKcYiuMmQfuC1LWi6HCrIdqOVzOzwWrnHFxRmTblNKe-7x7QiwJCx-C5JcKsYJIPQ9DNdVvN-sRvDj00xIdcb6oU0cJ6-EyY_AS3klaMscuV-sGdiIpJVrSsigSeDaLpmi_kbT3_WrcgE9KHPYzUVFI6Xnyoo",
                    alt: "Miel doré coulant avec transparence dorée",
                    title: "Transparence",
                    subtitle: "La lumière à travers l'Acacia",
                    className: "lg:col-span-2"
                },
                {
                    id: "inspection",
                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcvNGgz0D5l81wOQgG8d8XYeClsZHJD4cqMifsiwerO4XpcGXo_XMg9cpx1HwLbBkK2F5QtLAQ6Re-9DUu0ZXrPTjIHUYjpp1tER9BnyXcbB_71ISsYhnUjr6f4Ych3Umny-kcF03LxQFOc0GZZPGeL5W1kDRVODq0i1IzeeQUI0n1pb92RTBim9osse_EfznKsL5Vz7ZuUCjzpiRLz82KaIo8xtow9ncy6MCxlikk5cRqPCoBQagLUmelZmc48aRlPJa1VDrx8uc",
                    alt: "Ahmed inspectant un cadre de ruche avec des abeilles",
                    title: "Inspection",
                    subtitle: "Veiller sur la reine",
                    className: "lg:col-span-2"
                },
                {
                    id: "ambre-noir",
                    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDR4tGQbBo4h9eAnmrFessczw06yz7qKiqB8NiVoZJVhdNG2VQToAIPEldzS-By2knaFU2Y308L8Juov_IbTpz01qRrY0-Ia-6JqftWaukb2tbAMwq_kZHcJXRO9t5cG_PREit3v7uuTYuv1vM144Gkoizw-fCl46ZHKDqZS7-LyN6peu_8TNczQBgtvXmLeY1TpRWy8BT9-jsvmnvajclVGC_bxhdqdE4NkQdH2--8Bf8EQ-HJHd0pos6LRewwDPDMqJAACET87CQ",
                    alt: "Pot de miel de châtaignier couleur ambre foncé",
                    title: "L'Ambre Noir",
                    subtitle: "Miel de Châtaignier"
                }
            ]
        },
        content: {
            sections: [
                {
                    type: "text",
                    content: "Tout a commencé il y a plus de dix ans. Ahmed, alors ingénieur en agronomie, cherchait à renouer avec le concret, le vivant. C'est en installant sa première ruche au fond de son jardin que la fascination a opéré."
                },
                {
                    type: "quote",
                    content: "L'apiculture n'est pas un métier, c'est une observation humble de la nature.",
                    author: "Ahmed"
                },
                {
                    type: "text",
                    content: "Le bourdonnement incessant, l'organisation parfaite de la colonie, et cette alchimie mystérieuse qui transforme le nectar en or liquide... Ce qui n'était qu'un passe-temps est rapidement devenu une évidence."
                }
            ]
        }
    },
    {
        id: "premier-miel",
        slug: "premier-miel",
        title: "La Première Récolte,",
        titleHighlight: "un Moment Magique",
        badge: "Été 2013",
        description: "Le récit émouvant de cette première extraction de miel qui a marqué le début d'une aventure extraordinaire.",
        backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuApHaDHy9FYFkgLFT3TUuPGN2K1t0S6DpX8OPQ6cEx7S7-2ClONY-zeI6GB15lhh7HSyHWFQrwEmjHtVNs4kFiWjKSjKbnatWE-Aenf5_WOl5OXHOVKcYiuMmQfuC1LWi6HCrIdqOVzOzwWrnHFxRmTblNKe-7x7QiwJCx-C5JcKsYJIPQ9DNdVvN-sRvDj00xIdcb6oU0cJ6-EyY_AS3klaMscuV-sGdiIpJVrSsigSeDaLpmi_kbT3_WrcgE9KHPYzUVFI6Xnyoo",
        content: {
            sections: [
                {
                    type: "text",
                    content: "Ce matin d'août 2013 restera gravé à jamais dans ma mémoire. Après des mois d'attente, les premières hausses étaient enfin prêtes pour la récolte."
                },
                {
                    type: "text",
                    content: "L'odeur enivrante du miel mûr, la couleur dorée qui coulait lentement de l'extracteur... J'avais les larmes aux yeux en goûtant ce premier miel, fruit du travail de mes abeilles."
                }
            ]
        }
    },
    {
        id: "philosophie-apiculture",
        slug: "philosophie-apiculture",
        title: "Notre Philosophie,",
        titleHighlight: "Respect et Durabilité",
        badge: "Notre Vision",
        description: "Comprendre notre approche unique de l'apiculture, basée sur le respect du vivant et la préservation de l'environnement.",
        backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuACb4vwKahhYOUUk8f5kL4WWdsi8cT7t90MFDnws2XpbxEpWe5oVY4PV4n2PxhpdqpOg6s0NRHOdCjXumx3C0k5JXKnNdCg-8_d2xWqbdqpnq1RRJJA9kqyDFsAzf0D7IOudcWQKX2Td69lSx-tRIB8fH6WINu3m7A4e1xxF5uAsX_odJ4X8tPp4ZP2pBEVfwXamtIaZ5MurjV4hSuqeUDBR2BrWsw0XE5pvmt8wePODo29j-dt_oCDwySISPM78HI2vgbul_J5xew",
        content: {
            sections: [
                {
                    type: "text",
                    content: "Nous refusons l'apiculture industrielle et ses compromis. Chaque décision est prise en pensant d'abord au bien-être de nos colonies."
                },
                {
                    type: "quote",
                    content: "Nous sommes les gardiens des abeilles, pas leurs exploiteurs.",
                    author: "Philosophie du Rucher d'Ahmed"
                }
            ]
        }
    }
]

export function getRencontreBySlug(slug: string): Rencontre | undefined {
    return rencontres.find(rencontre => rencontre.slug === slug)
}

export function getAllRencontres(): Rencontre[] {
    return rencontres
}