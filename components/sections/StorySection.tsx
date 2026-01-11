import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function StorySection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80"
                                alt="Ahmed, apiculteur passionné"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                        <div className="absolute -bottom-8 -right-8 bg-primary p-6 rounded-2xl shadow-xl max-w-xs hidden lg:block">
                            <Quote size={24} className="text-white/30 mb-2" />
                            <p className="text-white text-sm italic leading-relaxed">&ldquo;Je ne suis pas le propriétaire de mes ruches, je n&apos;en suis que le gardien.&rdquo;</p>
                            <p className="text-white/80 text-xs mt-3">— Ahmed, Apiculteur depuis 1998</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
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
                            <Button variant="primary">
                                Découvrir notre histoire
                                <ArrowRight size={16} />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
