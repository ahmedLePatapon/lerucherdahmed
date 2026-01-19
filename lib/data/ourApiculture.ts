import { Rencontre } from "./rencontres";

export const ourApicultureContent: Rencontre = {
    id: "our-apiculture",
    slug: "notre-apiculture",
    title: "Une apiculture Artisanale",
    titleHighlight: "Respectueuse et responsable",
    badge: "Notre engagement",
    description: "Découvrez notre apiculture artisanale : respectueuse des abeilles et des terroirs, produisant un miel pur, local et non transformé.",
    backgroundImage: "https://images.unsplash.com/photo-1590334280707-9d5e0f60a539?w=1920&q=80&auto=format&fit=crop",

    chapterStory: {
        badge: "Notre philosophie",
        title: "Le respect du vivant au cœur de notre pratique",
        content: {
            paragraphs: [
                "Nous pratiquons une apiculture à taille humaine, centrée sur le bien-être des abeilles. Nos ruches sont implantées dans des zones préservées, garantissant un miel sain, local et non transformé.",
                "Chaque intervention est pensée pour respecter les cycles naturels des colonies, favoriser leur autonomie et préserver durablement les écosystèmes environnants."
            ]
        },
        image: {
            src: "https://images.unsplash.com/photo-1586194080857-4c24808227f7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Ruches installées dans un environnement naturel préservé"
        }
    },
    features: {
        badge: "Nos valeurs",
        title: "Une apiculture responsable",
        description: "Nos pratiques reposent sur des principes simples, exigeants et transparents.",
        items: [
            {
                icon: "stethoscope",
                title: "Bien-être des abeilles",
                description: "Des colonies respectées, sans exploitation intensive ni stress inutile."
            },
            {
                icon: "leaf",
                title: "Miel brut et naturel",
                description: "Un miel non chauffé, non transformé, conservant toutes ses qualités."
            },
            {
                icon: "mapPinned",
                title: "Ancrage local",
                description: "Une production locale, en lien direct avec les terroirs et la flore environnante."
            }
        ]
    },

    processTimeline: {
        badge: "Notre méthode",
        title: "De la ruche",
        titleHighlight: "au pot",
        content: {
            paragraphs: [
                "Chaque étape de notre travail est réalisée avec soin, dans le respect du rythme naturel des abeilles et des saisons."
            ]
        },
        ctaText: "Découvrir nos miels",
        ctaHref: "/nos-miels",
        timeline: [
            {
                title: "Implantation des ruches",
                description: "Sélection de zones naturelles riches en biodiversité et éloignées des sources de pollution.",
                opacity: 1
            },
            {
                title: "Suivi des colonies",
                description: "Observations régulières et interventions minimales pour accompagner le développement naturel.",
                opacity: 0.6
            },
            {
                title: "Récolte raisonnée",
                description: "Une récolte modérée, uniquement lorsque les colonies disposent de réserves suffisantes.",
                opacity: 0.4
            },
            {
                title: "Mise en pot",
                description: "Extraction douce et mise en pot sans transformation ni altération du miel.",
                opacity: 0.2
            }
        ]
    },
    gallery: {
        title: "Notre apiculture en images",
        subtitle: "Un savoir-faire artisanal au plus près de la nature",
        items: [
            {
                id: "ruches",
                src: "",
                alt: "Ruches en pleine nature",
                title: "Ruchers",
                subtitle: "Implantés dans des zones préservées"
            },
            {
                id: "abeilles",
                src: "",
                alt: "Abeilles sur une fleur",
                title: "Biodiversité",
                subtitle: "Une flore locale riche",
                className: ""
            },
            {
                id: "recolte",
                src: "",
                alt: "Récolte du miel",
                title: "Récolte",
                subtitle: "Un moment clé, réalisé avec précaution",
                className: ""
            },
            {
                id: "miel",
                src: "",
                alt: "Pot de miel",
                title: "Miel brut",
                subtitle: "Non transformé et local"
            }
        ]
    },

    content: {
        sections: [
            {
                type: "text",
                content: "Notre apiculture s’inscrit dans une démarche durable, respectueuse des abeilles, des hommes et de la nature."
            },
            {
                type: "quote",
                content: "Prendre soin des abeilles, c’est préserver l’équilibre du vivant.",
                author: "Notre engagement"
            },
            {
                type: "text",
                content: "Nous croyons qu’un miel de qualité est avant tout le fruit de pratiques responsables et d’un profond respect du rythme naturel."
            }
        ]
    }
}
