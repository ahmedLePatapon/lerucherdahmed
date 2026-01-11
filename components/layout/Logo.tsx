import Link from "next/link";
import { Hexagon } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
    variant?: "light" | "dark";
    size?: "sm" | "md" | "lg";
    className?: string;
}

export function Logo({ variant = "dark", size = "md", className }: LogoProps) {
    const sizes: Record<string, any> = {
        sm: {
            icon: "w-8 h-8",
            iconSize: 16,
            text: "text-base",
        },
        md: {
            icon: "w-10 h-10",
            iconSize: 20,
            text: "text-xl",
        },
        lg: {
            icon: "w-12 h-12",
            iconSize: 24,
            text: "text-2xl",
        },
    };

    const textColor = variant === "light" ? "text-white" : "text-text-main";

    return (
        <Link href="/" className={cn("flex items-center gap-3", className)}>
            <div
                className={cn(
                    "flex items-center justify-center bg-primary rounded-lg text-white",
                    sizes[size].icon
                )}
            >
                <Hexagon size={sizes[size].iconSize} fill="currentColor" />
            </div>
            <span className={cn("font-bold", sizes[size].text, textColor)}>
                Le Rucher d'Ahmed
            </span>
        </Link>
    );
}
