import { Leaf, Droplet, Church } from "lucide-react";

export function RuchersBenefits() {
    const items = [
        { icon: Leaf, title: "Biodiversité", text: "Des zones protégées pour une flore riche et variée." },
        { icon: Droplet, title: "Miel 100% Naturel", text: "Récolté à froid pour préserver toutes ses vertus." },
        { icon: Church, title: "Patrimoine Local", text: "Ancré dans l'histoire de la Charente." },
    ];

    return (
        <section className="bg-white py-12 border-b border-[#E8E4DB] dark:bg-background-dark dark:border-white/5">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {items.map((it) => (
                        <div key={it.title} className="flex flex-col items-center text-center p-6 rounded-2xl bg-background-light">
                            <it.icon className="mb-4 text-4xl text-accent" />
                            <h3 className="mb-2 text-lg font-bold text-secondary">{it.title}</h3>
                            <p className="text-sm text-neutral-dark/80">{it.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default RuchersBenefits;
