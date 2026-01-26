// crée la page pr les produits
import React from 'react';
import Link from 'next/link';

import ProductsTable from '@/components/admin/ProductsTable';
import { products as allProducts, Product } from '@/lib/data/products';

export default async function AdminProduitsPage(): Promise<React.ReactElement> {
    // Use local data module on server side instead of fetching a relative API URL.
    let products: Product[] = allProducts;
    return (
        <div className="p-8" >
            <h1 className="text-2xl font-bold mb-4">Gestion des Produits</h1>
            {/* Contenu de la page des produits */}
            <p> Bienvenue dans la section de gestion des produits.Ici, vous pouvez ajouter, modifier ou supprimer des produits.</p >
            <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold">Produits Récents</h2>
                    <Link href="/admin/produits" className="text-sm text-primary font-bold hover:underline">Voir tout</Link>
                </div>
                <div
                    className="bg-white rounded-xl border border-[#e6e4db] dark:border-white/10 overflow-hidden shadow-sm">
                    <ProductsTable products={products} />
                </div>
            </div>
        </div >
    );
}