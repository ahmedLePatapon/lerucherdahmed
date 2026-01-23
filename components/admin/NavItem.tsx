"use client";

import { ComponentType } from "react";

type NavItemProps = {
    href: string;
    label: string;
    icon: ComponentType<{ size?: number }>;
    active?: boolean;
    onClick?: () => void;
};

export function NavItem({
    href,
    label,
    icon: Icon,
    active,
    onClick,
}: NavItemProps) {
    return (
        <a
            href={href}
            onClick={onClick}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors hover:bg-white/5 ${active ? "active-nav" : ""
                }`}
        >
            <Icon size={18} />
            <span className="text-sm font-medium">{label}</span>
        </a>
    );
}
