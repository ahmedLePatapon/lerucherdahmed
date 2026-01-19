import React from "react";

interface EngagementSectionProps {
    title: string;
    text: string;
    points?: string[];
}

const EngagementSection: React.FC<EngagementSectionProps> = ({ title, text, points = [] }) => {
    return (
        <section className="py-12">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <p className="text-base text-gray-700 mb-6">{text}</p>
                {points.length > 0 && (
                    <ul className="grid gap-3 sm:grid-cols-2">
                        {points.map((p, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
                                <span className="text-sm text-gray-700">{p}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
};

export default EngagementSection;
