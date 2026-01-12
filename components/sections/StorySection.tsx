import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function StorySection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative order-2 lg:order-1">
                        <div className="absolute -inset-4 bg-primary rounded-2xl rotate-3 opacity-20 blur-lg"></div>
                        <div className="relative aspect-square lg:aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcvNGgz0D5l81wOQgG8d8XYeClsZHJD4cqMifsiwerO4XpcGXo_XMg9cpx1HwLbBkK2F5QtLAQ6Re-9DUu0ZXrPTjIHUYjpp1tER9BnyXcbB_71ISsYhnUjr6f4Ych3Umny-kcF03LxQFOc0GZZPGeL5W1kDRVODq0i1IzeeQUI0n1pb92RTBim9osse_EfznKsL5Vz7ZuUCjzpiRLz82KaIo8xtow9ncy6MCxlikk5cRqPCoBQagLUmelZmc48aRlPJa1VDrx8uc"
                                alt="Ahmed, apiculteur passionné"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-8">
                                <p className="text-white text-lg font-medium">"Le respect de l'abeille est la clé d'un miel
                                    d'exception."</p>
                                <p className="text-primary mt-2 font-bold">— Ahmed</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 lg:order-2">
                        <span className="text-primary text-sm font-bold uppercase tracking-wider">Notre histoire</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-text-main">Une Rencontre, Une Vocation</h2>
                        <div className="space-y-4 text-text-muted leading-relaxed">
                            <p>
                                Tout a commencé en 1998, lorsqu&apos;Ahmed, ingénieur agronome de formation, a découvert l&apos;apiculture lors d&apos;un stage en Charente. Ce qui devait être une simple expérience professionnelle s&apos;est transformé en passion dévorante.
                            </p>
                            <p>
                                Aujourd&apos;hui, avec plus de 25 ans d&apos;expérience, Ahmed gère ses ruches avec une philosophie simple : respecter le rythme des abeilles et ne prélever que le surplus de miel, sans jamais compromettre la santé de ses colonies.
                            </p>
                        </div>

                        <div className="bg-background-light p-6 rounded-xl border-l-4 border-primary lg:hidden">
                            <p className="text-text-main italic">&ldquo;Je ne suis pas le propriétaire de mes ruches, je n&apos;en suis que le gardien.&rdquo;</p>
                            <p className="text-text-muted text-sm mt-2">— Ahmed, Apiculteur depuis 1998</p>
                        </div>

                        <Link href="/a-propos" className="w-fit">
                            <button
                                className="flex items-center gap-3 text-text-main font-bold hover:text-primary-dark transition-colors group w-fit">
                                <span className="border-b-2 border-primary pb-1">En savoir plus sur Ahmed <ArrowRight size={16} /></span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
