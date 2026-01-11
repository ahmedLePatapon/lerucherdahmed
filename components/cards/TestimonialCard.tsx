import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/lib/data/testimonials";

interface TestimonialCardProps {
    testimonial: Testimonial;
    className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
    return (
        <div
            className={cn(
                "bg-surface-dark p-8 rounded-2xl relative border border-white/5",
                className
            )}
        >
            <Quote size={48} className="text-white/5 absolute top-4 right-4" />
            <p className="text-text-muted-light mb-6 relative z-10 italic leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
            </p>
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold">
                    {testimonial.initial}
                </div>
                <div>
                    <p className="text-white font-bold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-text-muted-light">{testimonial.role}</p>
                </div>
            </div>
        </div>
    );
}
