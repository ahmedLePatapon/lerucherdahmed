"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    error?: string;
    options: { value: string; label: string }[];
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    ({ className, label, error, options, id, ...props }, ref) => {
        return (
            <div className="flex flex-col gap-2">
                {label && (
                    <label htmlFor={id} className="text-text-main text-sm font-semibold">
                        {label}
                    </label>
                )}
                <select
                    ref={ref}
                    id={id}
                    className={cn(
                        "w-full rounded-lg border border-border-light bg-white h-12 px-4",
                        "text-base text-text-main placeholder:text-text-muted/50",
                        "focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary",
                        "transition-all duration-200",
                        error && "border-red-500 focus:border-red-500 focus:ring-red-500",
                        className
                    )}
                    {...props}
                >
                    {options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
                {error && <span className="text-red-500 text-sm">{error}</span>}
            </div>
        );
    }
);

Select.displayName = "Select";

export { Select };
