import React from "react";
import { Button } from "@/components/ui/Button";

interface CTAButton {
    label: string;
    link: string;
}

interface FinalCTASectionProps {
    title: string;
    text: string;
    buttons?: CTAButton[];
}

const FinalCTASection: React.FC<FinalCTASectionProps> = ({ title, text, buttons = [] }) => {
    return (
        <section className="py-12 bg-primary/5">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <p className="text-base text-gray-700 mb-6">{text}</p>
                <div className="flex justify-center gap-4 flex-wrap">
                    {buttons.map((b, i) => (
                        <Button key={i} as="a" href={b.link} variant={i === 0 ? "secondary" : "outline"} size="md">
                            {b.label}
                        </Button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FinalCTASection;
