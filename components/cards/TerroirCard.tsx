import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Terroir } from "@/lib/data/terroirs";

interface TerroirCardProps {
    terroir: Terroir;
    className?: string;
}

export function TerroirCard({ terroir, className }: TerroirCardProps) {
    return (
        <div className={cn("bg-white rounded-2xl overflow-hidden border border-border-light", className)}>
            <div className="aspect-[4/3] relative bg-gray-100 overflow-hidden">
                <Image src={terroir.image} alt={terroir.name} fill className="object-cover" />
            </div>

            <div className="p-6">
                <h3 className="text-lg font-bold text-text-main">{terroir.name}</h3>
                <p className="text-sm text-text-muted">{terroir.subtitle} — {terroir.location}</p>

                <p className="mt-4 text-sm text-text-muted line-clamp-3">{terroir.description}</p>

                <div className="mt-4 flex items-center gap-3 text-sm text-text-muted">
                    <span className="font-medium">Flore :</span>
                    <span>{terroir.flora.join(", ")}</span>
                </div>
            </div>
        </div>
    );
}
