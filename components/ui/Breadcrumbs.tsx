"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
    return (
        <nav className={cn("flex items-center space-x-2 text-sm", className)} aria-label="Breadcrumbs">
            {items.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                    {item.href ? (
                        <Link href={item.href} className="text-text-muted hover:text-text-main">
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-text-main font-medium">{item.label}</span>
                    )}

                    {index < items.length - 1 && (
                        <ChevronRight className="w-4 h-4 text-text-muted" />
                    )}
                </div>
            ))}
        </nav>
    );
}
