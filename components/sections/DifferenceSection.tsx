import React from "react";

interface DifferenceItem {
    title: string;
    text: string;
}

interface DifferenceSectionProps {
    title: string;
    items: DifferenceItem[];
}

const DifferenceSection: React.FC<DifferenceSectionProps> = ({ title, items }) => (
    <section className="py-12 bg-surface">
        <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">{title}</h2>
            <div className="grid gap-6 md:grid-cols-3">
                {items.map((item, idx) => (
                    <div key={idx} className="rounded-2xl p-6 shadow bg-white">
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-700">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default DifferenceSection;
