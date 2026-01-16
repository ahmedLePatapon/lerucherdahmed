// Page Politique de Confidentialité - Le Rucher d'Ahmed
import { Accordion } from "@/components/ui/Accordion"
import { InfoCard } from "@/components/ui/InfoCard"
import { CookiePreferences } from "@/components/sections/CookiePreferences"
import { RightsList } from "@/components/sections/RightsList"
import { ContactDPO } from "@/components/sections/ContactDPO"
import { TableOfContents } from "@/components/sections/TableOfContents"
import { HeroSectionP } from "@/components/sections/HeroSectionP"

export const metadata = {
    title: "Politique de Confidentialité - Le Rucher d'Ahmed",
    description:
        "Découvrez comment nous protégeons vos données personnelles lorsque vous dégustez nos miels.",
}

const items = [
    { href: "#introduction", label: "Introduction", active: true },
    { href: "#data-collection", label: "Collecte des données" },
    { href: "#data-usage", label: "Usage & Finalités" },
    { href: "#cookies", label: "Cookies & Traceurs" },
    { href: "#rights", label: "Vos droits (RGPD)" },
    { href: "#contact", label: "Contact DPO" },
];

import type { AccordionItem } from "@/components/ui/Accordion";

const itemsAccordion: AccordionItem[] = [
    {
        icon: "person",
        title: "Informations d'identification",
        content:
            "Lorsque vous passez commande ou créez un compte, nous collectons : Nom, Prénom, Adresse e-mail, Numéro de téléphone. Ces données sont nécessaires pour la gestion de votre compte client.",
        open: true,
    },
    {
        icon: "local_shipping",
        title: "Données de livraison",
        content:
            "Adresse postale complète, digicode, étage et instructions de livraison. Ces données sont partagées avec nos partenaires logistiques uniquement pour assurer la bonne réception de vos miels.",
    },
    {
        icon: "credit_card",
        title: "Données de paiement",
        content:
            "Nous ne stockons aucune donnée bancaire complète. Les transactions sont traitées de manière sécurisée par nos prestataires de paiement (Stripe ou PayPal) qui sont certifiés PCI-DSS.",
    },
];

export default function PolitiqueConfidentialitePage() {
    return (
        <div className="grow">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 py-10 lg:py-20 scroll-mt-28" id="introduction">
                    <aside className="lg:col-span-3 hidden lg:block">
                        <TableOfContents items={items} />
                    </aside>
                    <main className="lg:col-span-9 flex flex-col gap-12">
                        <HeroSectionP
                            badge="Légal"
                            title="Politique de"
                            highlight="Confidentialité"
                            description="Chez Le Rucher d'Ahmed, la transparence est notre priorité. Découvrez comment nous protégeons vos données personnelles lorsque vous dégustez nos miels."
                            date="24 Octobre 2023"
                        />
                        {/* Intro */}
                        <div className="prose max-w-none">
                            <p className="text-lg leading-relaxed text-gray-800">
                                Cette politique de confidentialité décrit les pratiques de <strong className="text-brand-main">Le Rucher d'Ahmed SARL</strong> concernant la collecte, l'utilisation et la divulgation de vos informations que nous recueillons lorsque vous utilisez notre site web. En accédant au service, vous consentez à la collecte et à l'utilisation de vos informations conformément à cette politique de confidentialité.
                            </p>
                        </div>
                        {/* Accordéons collecte des données */}
                        <section id="data-collection" className="scroll-mt-28">
                            <Accordion items={itemsAccordion} titleAccueil={true} />
                        </section>
                        {/* Finalités du traitement */}
                        <section id="data-usage" className="scroll-mt-28">
                            <div className="mb-6 border-l-4 border-primary pl-4">
                                <h2 className="text-2xl font-bold text-brand-main">2. Finalités du traitement</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <InfoCard type="order" />
                                <InfoCard type="support" />
                                <InfoCard type="marketing" />
                                <InfoCard type="analytics" />
                            </div>
                        </section>
                        {/* Cookies */}
                        <section id="cookies" className="scroll-mt-28">
                            <CookiePreferences />
                        </section>
                        {/* Droits RGPD */}
                        <section id="rights" className="scroll-mt-28">
                            <RightsList />
                        </section>
                        {/* Contact DPO */}
                        <section id="contact" className="scroll-mt-28">
                            <ContactDPO />
                        </section>
                    </main>
                </div>
            </div>
        </div>
    )
}
