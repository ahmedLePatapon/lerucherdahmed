import * as React from "react";
import { cn } from "@/lib/utils";

interface FormSectionProps extends React.HTMLAttributes<HTMLElement> {
    title: string;
    children: React.ReactNode;
}

export function FormSection({ title, children, className, ...props }: FormSectionProps) {
    return (
        <section
            className={cn(
                "bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-border-dark overflow-hidden",
                className
            )}
            {...props}
        >
            <div className="px-6 py-4 border-b border-slate-200 dark:border-border-dark bg-slate-50/50 dark:bg-white/5">
                <h3 className="text-lg font-bold text-text-main dark:text-text-light">{title}</h3>
            </div>
            <div className="p-6">
                {children}
            </div>
        </section>
    );
}
