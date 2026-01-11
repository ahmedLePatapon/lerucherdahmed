import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { testimonials } from "@/lib/data/testimonials";

export function TestimonialsSection() {
    return (
        <section className="py-24 bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary text-sm font-bold uppercase tracking-wider">Témoignages</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">Ce que disent nos clients</h2>
                    <p className="text-text-muted-light max-w-2xl mx-auto">Découvrez les avis de ceux qui ont goûté à l&apos;authenticité de notre miel artisanal.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
}
