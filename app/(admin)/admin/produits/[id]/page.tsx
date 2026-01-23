import React from 'react';

type PageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function ProductAdminPage({ params }: PageProps): Promise<React.ReactElement> {
    const { id } = await params;

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">
                Détails du Produit - ID: {id}
            </h2>
        </div>
    );
}
