interface PageHeaderProps {
    badge?: string;
    title: string;
    description?: string;
    centered?: boolean;
}

export function PageHeader({
    badge,
    title,
    description,
    centered = true,
}: PageHeaderProps) {
    return (
        <section className="pt-32 pb-16 bg-background-light">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className={centered ? "text-center" : ""}>
                    {badge && (
                        <span className="text-primary text-sm font-bold uppercase tracking-wider">
                            {badge}
                        </span>
                    )}
                    <h1 className="text-4xl md:text-5xl font-bold text-text-main mt-4 mb-6">
                        {title}
                    </h1>
                    {description && (
                        <p className="text-text-muted text-lg max-w-2xl mx-auto">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}
