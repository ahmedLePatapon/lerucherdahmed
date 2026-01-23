import { ComponentType } from "react";
import { TrendingUp, TrendingDown } from 'lucide-react';

type SimpleCardProps = {
    title: string;
    value: string;
    icon: ComponentType<{ size?: number }>;
    percentage: string;
    description?: string;
};

export function SimpleCard({
    title,
    value,
    icon: Icon,
    percentage,
    description,
}: SimpleCardProps) {
    const isIncrease = percentage.startsWith("+") ?? false;

    return (
        <div className="bg-white p-6 rounded-xl border border-[#e6e4db] dark:border-white/10 shadow-sm">
            <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Icon size={18} />
                </div>
                <span
                    className={`text-sm font-bold flex items-center gap-1 ${isIncrease ? "text-[#078814]" : "text-red-500"
                        }`}
                >
                    <span className="material-symbols-outlined text-sm">
                        {isIncrease ? <TrendingUp /> : <TrendingDown />}
                    </span>
                    {percentage}
                </span>
            </div>
            <p className="text-gray-500 text-sm font-medium">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>

            {description && (
                <p className="mt-2 text-sm text-gray-400">{description}</p>
            )}
        </div>
    );
}
