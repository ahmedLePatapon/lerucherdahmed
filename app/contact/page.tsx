import { PageHeader } from "../../components/sections/PageHeader";
import { contactInfo } from "@/lib/data/contact";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

export const metadata = {
    title: "Contact — Le Rucher d'Ahmed",
    description: "Contactez-nous pour commandes, visites ou questions sur nos miels.",
};

export default function ContactPage() {
    return (
        <main className="container mx-auto py-16 px-4">
            <PageHeader title="Contact" description="Nous sommes là pour répondre à vos questions." />

            <div className="max-w-7xl mx-auto lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-xl font-bold mb-4">Nous contacter</h3>
                    <p className="text-text-muted mb-4">Par téléphone : <strong>{contactInfo.phone}</strong></p>
                    <p className="text-text-muted mb-4">Par e-mail : <strong>{contactInfo.email}</strong></p>

                    <form className="space-y-4 mt-6">
                        <Input label="Nom" name="name" />
                        <Input label="Email" name="email" type="email" />
                        <Textarea label="Message" name="message" rows={6} />
                        <Button type="submit">Envoyer</Button>
                    </form>
                </div>

                <div>
                    <h3 className="text-xl font-bold mb-4">Nos coordonnées</h3>
                    <p className="text-text-muted">{contactInfo.address.street}</p>
                    <p className="text-text-muted">{contactInfo.address.postalCode} {contactInfo.address.city}</p>
                    <div className="mt-6 w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
                        <iframe
                            src={contactInfo.mapEmbedUrl}
                            width="100%"
                            height="100%"
                            loading="lazy"
                            title="Carte du rucher"
                            className="border-0"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
