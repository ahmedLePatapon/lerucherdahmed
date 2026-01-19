import React from "react";
import { Leaf, MapPin, Heart } from "lucide-react";

const icons: Record<string, any> = { Leaf, MapPin, Heart };

interface ValueItem {
    icon: string;
    title: string;
    description: string;
}

interface ValuesSectionProps {
    values: ValueItem[];
}

const ValuesSection: React.FC<ValuesSectionProps> = ({ values }) => {
    return (
        <section className="py-12">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid gap-6 md:grid-cols-3">
                    {values.map((item, index) => {
                        const Icon = icons[item.icon] || Leaf;
                        return (
                            <div key={index} className="rounded-2xl p-6 shadow bg-white">
                                <Icon className="mb-4 h-8 w-8 text-primary" />
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p className="mt-2 text-sm text-gray-700">{item.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ValuesSection;
