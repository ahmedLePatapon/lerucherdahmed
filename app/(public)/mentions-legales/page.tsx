import { HeroSectionP } from "@/components/sections/HeroSectionP";
import { TableOfContents } from "@/components/sections/TableOfContents";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { IdCard, Mail } from "lucide-react";

export const metadata = {
    title: "Mentions Légales - Le Rucher d'Ahmed",
    description: "Mentions légales du site Le Rucher d'Ahmed, informations légales, hébergement, propriété intellectuelle, RGPD et cookies.",
};

const itemsTableOfContents = [
    { href: "#introduction", label: "Introduction", active: true },
    { href: "#identite", label: "Identité de l'entreprise" },
    { href: "#hebergement", label: "Hébergement du site" },
    { href: "#propriete-intellectuelle", label: "Propriété Intellectuelle" },
    { href: "#rights", label: "Données Personnelles (RGPD)" },
    { href: "#cookies", label: "Cookies & Traceurs" },
];

const itemsAccordion = [
    {
        icon: "server",
        title: "Hébergement du site",
        id: "hebergement",
        content:
            `Le site Le Rucher d'Ahmed est hébergé par :<ul class="list-disc pl-5 mt-2"><li><strong>Hébergeur :</strong> OVH SAS</li><li><strong>Adresse :</strong> 2 rue Kellermann - 59100 Roubaix - France</li><li><strong>Site web :</strong> www.ovh.com</li></ul>`,
        open: true,
    },
    {
        icon: "copyright",
        title: "Propriété Intellectuelle",
        id: "propriete-intellectuelle",
        content:
            `L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques. <br><br>La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication. L'exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.`,
    },
    {
        icon: "file_user",
        title: "Données Personnelles (RGPD)",
        id: "rights",
        content:
            `En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l'article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995.
            <br><br>
            A l'occasion de l'utilisation du site Le Rucher d'Ahmed, peuvent êtres recueillies : l'URL des liens par l'intermédiaire desquels l'utilisateur a accédé au site, le fournisseur d'accès de l'utilisateur, l'adresse de protocole Internet (IP) de l'utilisateur.
            <br><br>
            En tout état de cause Le Rucher d'Ahmed ne collecte des informations personnelles relatives à l'utilisateur que pour le besoin de certains services proposés par le site (formulaire de contact, commande). L'utilisateur fournit ces informations en toute connaissance de cause, notamment lorsqu'il procède par lui-même à leur saisie.`,
    },
    {
        icon: "cookie",
        title: "Cookies & Traceurs",
        id: "cookies",
        content:
            "La navigation sur le site Le Rucher d'Ahmed est susceptible de provoquer l'installation de cookie(s) sur l'ordinateur de l'utilisateur. Un cookie est un fichier de petite taille, qui ne permet pas l'identification de l'utilisateur, mais qui enregistre des informations relatives à la navigation d'un ordinateur sur un site. Les données ainsi obtenues visent à faciliter la navigation ultérieure sur le site, et ont également vocation à permettre diverses mesures de fréquentation.",
    },
] as AccordionItem[];

export default function MentionsLegalesPage() {
    return (
        <div className="grow" >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 py-10 lg:py-20 scroll-mt-28" id="introduction">
                    <aside className="lg:col-span-3 hidden lg:block">
                        <TableOfContents items={itemsTableOfContents} />
                    </aside>
                    <main className="lg:col-span-9 flex flex-col gap-12">
                        <div className="w-full max-w-[800px] flex flex-col gap-10">
                            {/* Titre et date */}
                            <HeroSectionP
                                title="Mentions Légales"
                                description=""
                                date="Octobre 2023"
                            />
                            {/* Intro */}
                            <section>
                                <p className="text-base md:text-lg leading-relaxed text-text-main-light dark:text-text-main-dark opacity-90">
                                    Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique, dite L.C.E.N., nous portons à la connaissance des utilisateurs et visiteurs du site <span className="font-semibold text-primary">Le Rucher d'Ahmed</span> les informations suivantes :
                                </p>
                            </section>
                            {/* Identité entreprise */}
                            <section className="rounded-xl border border-gray-200 bg-surface-light overflow-hidden shadow-sm" id="identite">
                                <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
                                    <h2 className="text-lg font-bold flex items-center gap-2">
                                        <IdCard className="text-primary dark:text-primary" />
                                        Identité de l'entreprise
                                    </h2>
                                </div>
                                <div className="divide-y divide-border-light">
                                    <div className="grid grid-cols-1 md:grid-cols-[30%_1fr] p-5 gap-y-1">
                                        <dt className="text-text-secondary-light dark:text-text-secondary-dark font-medium text-sm">Raison Sociale</dt>
                                        <dd className="text-text-main-light dark:text-text-main-dark font-medium">Le Rucher d'Ahmed</dd>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-[30%_1fr] p-5 gap-y-1">
                                        <dt className="text-text-secondary-light dark:text-text-secondary-dark font-medium text-sm">Statut Juridique</dt>
                                        <dd className="text-text-main-light dark:text-text-main-dark font-medium">Auto-entrepreneur (Micro-entreprise)</dd>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-[30%_1fr] p-5 gap-y-1">
                                        <dt className="text-text-secondary-light dark:text-text-secondary-dark font-medium text-sm">Responsable de publication</dt>
                                        <dd className="text-text-main-light dark:text-text-main-dark font-medium">Ahmed Benali</dd>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-[30%_1fr] p-5 gap-y-1">
                                        <dt className="text-text-secondary-light dark:text-text-secondary-dark font-medium text-sm">Siège Social</dt>
                                        <dd className="text-text-main-light dark:text-text-main-dark font-medium">123 Route des Abeilles, 13000 Marseille, France</dd>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-[30%_1fr] p-5 gap-y-1">
                                        <dt className="text-text-secondary-light dark:text-text-secondary-dark font-medium text-sm">Numéro SIRET</dt>
                                        <dd className="text-text-main-light dark:text-text-main-dark font-medium">123 456 789 00012</dd>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-[30%_1fr] p-5 gap-y-1">
                                        <dt className="text-text-secondary-light dark:text-text-secondary-dark font-medium text-sm">Contact</dt>
                                        <dd className="text-text-main-light dark:text-text-main-dark font-medium">
                                            <a className="underline decoration-primary decoration-2 hover:bg-primary/20 transition-colors" href="mailto:contact@lerucherdahmed.fr">contact@lerucherdahmed.fr</a>
                                        </dd>
                                    </div>
                                </div>
                            </section>
                            {/* Accordéons */}
                            <section id="data-collection" className="scroll-mt-28">
                                <Accordion items={itemsAccordion} />
                            </section>
                            {/* Contact rapide */}
                            <section className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/20 text-center">
                                <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4">
                                    Vous avez une question spécifique concernant nos mentions légales ?
                                </p>
                                <a className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-[#ffc400] text-black font-bold rounded-lg transition-colors shadow-sm" href="mailto:contact@lerucherdahmed.fr">
                                    <Mail className="text-black" size={20} />
                                    Nous contacter
                                </a>
                            </section>
                        </div>
                    </main>
                </div>
            </div>
        </div >

    );
}