import React from "react";
import { Button } from "@/components/ui/Button";

interface MethodSectionProps {
    title: string;
    text: string;
    cta?: { label: string; link: string };
}

const MethodSection: React.FC<MethodSectionProps> = ({ title, text, cta }) => {
    return (
        <section className="py-12">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <p className="text-base text-gray-700 mb-6">{text}</p>
                {cta && (
                    <Button as="a" href={cta.link} variant="secondary" size="md">
                        {cta.label}
                    </Button>
                )}
            </div>
        </section>
    );
};

export default MethodSection;
