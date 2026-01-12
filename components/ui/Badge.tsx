import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
    variant?: "primary" | "accent" | "intense" | "new" | "outline";
}

function Badge({ className, variant = "primary", children, ...props }: BadgeProps) {
    const variants: Record<string, string> = {
        primary: "bg-primary text-white",
        accent: "bg-accent text-white",
        intense: "bg-[#5D4037] text-white border border-white/20",
        new: "bg-accent text-white",
        outline: "bg-transparent border border-primary text-primary",
    };

    return (
        <div
            className={cn(
                "inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export { Badge };
