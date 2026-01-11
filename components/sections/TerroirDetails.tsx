import Image from "next/image";
import Link from "next/link";
import { terroirs } from "@/lib/data/terroirs";

export function TerroirDetails() {
    return (
        <div id="terroirs">
            {terroirs.map((t, idx) => (
                <section key={t.id} className="py-20 lg:py-28 overflow-hidden">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} lg:items-center lg:gap-20`}>
                            <div className="flex flex-col justify-center lg:w-1/2">
                                <div className="mb-4 flex items-center gap-2 text-secondary">
                                    <span className="text-sm font-bold uppercase tracking-wider">{t.name}</span>
                                </div>

                                <h2 className="mb-6 text-3xl font-bold leading-tight text-secondary sm:text-4xl lg:text-5xl">{t.subtitle}</h2>

                                <p className="mb-8 text-lg leading-relaxed text-neutral-dark/80">{t.description}</p>

                                <div className="mb-6">
                                    <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-neutral-dark/60">Dominantes florales</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {t.flora.map((f) => (
                                            <div key={f} className="group flex cursor-default items-center gap-2 rounded-xl bg-background-light border px-4 py-2 transition-colors hover:border-primary hover:bg-primary/10">
                                                <span className="text-primary text-xl">•</span>
                                                <span className="font-medium text-neutral-dark">{f}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <Link href={`/nos-miels`} className="inline-flex items-center gap-2 text-sm font-bold text-secondary hover:text-primary transition-colors">
                                        Voir les miels de ce terroir
                                        <span className="text-lg">→</span>
                                    </Link>
                                </div>
                            </div>

                            <div className="mt-12 lg:mt-0 lg:w-1/2">
                                <div className="relative rounded-2xl bg-[#EBE7DF] p-2">
                                    <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-200">
                                        <Image src={t.image} alt={t.name} fill className="object-cover" />
                                    </div>
                                    <div className="absolute -bottom-6 -left-6 hidden lg:flex h-32 w-32 flex-col items-center justify-center rounded-2xl bg-white p-2 shadow-xl border border-gray-100">
                                        <span className="text-center text-xs font-bold leading-tight text-neutral-dark">{t.postalCode}<br />{t.name.split(" ")[0]}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
}

export default TerroirDetails;
