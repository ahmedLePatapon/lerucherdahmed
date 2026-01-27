import { Skeleton } from "@/components/ui/Skeleton";

export default function LoadingNosMiels() {
    return (
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
            <div className="mb-8">
                <Skeleton className="h-8 w-48 mb-2" />
                <Skeleton className="h-5 w-96" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                    <Skeleton key={i} className="h-64 w-full rounded-xl" />
                ))}
            </div>
        </div>
    );
}
