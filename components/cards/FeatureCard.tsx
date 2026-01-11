import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    className?: string;
}

export function FeatureCard({ icon: Icon, title, description, className }: FeatureCardProps) {
    return (
        <div
            className={cn(
                "bg-background-light p-6 rounded-xl border border-primary/10 hover:border-primary transition-colors group shadow-sm",
                className
            )}
        >
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 text-primary shadow-sm border border-gray-100 group-hover:bg-primary group-hover:text-white transition-colors">
                <Icon size={24} />
            </div>
            <h3 className="text-text-main text-lg font-bold mb-2">{title}</h3>
            <p className="text-text-muted text-sm leading-relaxed">{description}</p>
        </div>
    );
}
