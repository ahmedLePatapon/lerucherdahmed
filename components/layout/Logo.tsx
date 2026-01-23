import Link from "next/link";
import { Hexagon } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
    variant?: "light" | "dark";
    size?: "sm" | "md" | "lg";
    className?: string;
    admin?: boolean;
    href?: string;
}

type SizeKey = "sm" | "md" | "lg";
type SizeSpec = {
    icon: string;
    iconSize: number;
    text: string;
};

export function Logo({ variant = "dark", size = "md", className, admin = false, href = "/" }: LogoProps) {
    const sizes: Record<SizeKey, SizeSpec> = {
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
        <Link href={href} className={cn("flex items-center gap-3", className)}>
            <div
                className={cn(
                    "flex items-center justify-center bg-primary rounded-lg text-white",
                    sizes[size].icon
                )}
            >
                <Hexagon size={sizes[size].iconSize} fill="currentColor" />
            </div>
            {
                admin ? (
                    <div>
                        <h3 className="text-white text-base font-bold leading-none">Le Rucher d'Ahmed</h3>
                        <p className="text-gray-400 text-xs mt-1">Administration</p>
                    </div>
                ) : (
                    <span className={cn("font-bold", sizes[size].text, textColor)}>
                        Le Rucher d&apos;Ahmed
                    </span>
                )
            }
        </Link>
    );
}
