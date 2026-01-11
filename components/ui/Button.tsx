import { forwardRef, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant = "primary",
            size = "md",
            isLoading = false,
            disabled,
            children,
            ...props
        },
        ref
    ) => {
        const baseStyles =
            "inline-flex items-center justify-center font-bold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

        const variants: Record<string, string> = {
            primary:
                "bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/20",
            secondary:
                "bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/20",
            outline:
                "bg-transparent border-2 border-text-main hover:border-primary text-text-main hover:text-primary",
            ghost:
                "bg-transparent hover:bg-primary/10 text-text-main hover:text-primary",
        };

        const sizes: Record<string, string> = {
            sm: "h-10 px-4 text-sm gap-2",
            md: "h-12 px-6 text-base gap-2",
            lg: "h-14 px-8 text-base gap-3",
        };

        return (
            <button
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                disabled={disabled || isLoading}
                {...props}
            >
                {isLoading ? (
                    <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                ) : null}
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";

export { Button };
