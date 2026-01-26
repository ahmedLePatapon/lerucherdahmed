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
                "rounded-xl border border-gray-200 overflow-hidden bg-primary/10",
                className
            )}
            {...props}
        >
            <div className="px-6 py-4 border-b border-gray-200 bg-slate-50/50 dark:bg-white/5">
                <h3 className="text-lg font-bold text-text-main ">{title}</h3>
            </div>
            <div className="p-6 bg-white space-y-6">
                {children}
            </div>
        </section>
    );
}
