// components/admin/ProductsTable.tsx
'use client';
import { FilePenLine } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
type Product = {
    id: string; name: string; price: string; stock: number, category?: string;
    image?: string;
};

export default function ProductsTable({ products = [] }: { products?: Product[] }): React.ReactElement {
    const renderRows = () => {
        if (products.length === 0) {
            return (
                <>
                    <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                                <div className="size-10 rounded-lg bg-gray-100 dark:bg-white/10 overflow-hidden">
                                    <img
                                        alt="Honey Product"
                                        className="w-full h-full object-cover"
                                        data-alt="Close up of a premium honey jar"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJxieGe_JTKdpNvaz6Nhb0mC7vSMnPQiMYkmpRUC_QheMMNGnsVB7Y7s7-gY1OnVbm4xR-wMNTKncBDMRMai6hADwyAuRUsno_RRYnkYqFTEZjfWPX9SZaJuSQnUvmfazw3OG3G2ZRmK6KtCvrrMTfcGBssAeLNrLyKDPOiKitikNrh6dC2QPpCjMX7I9ONVKvldL_fhPSIZKv7MbjR0eGcuZkfQAkHKEaIq_hN3vcb1zmEA3hSngt2OmDtdFOQFeRbxTOey57vG0"
                                    />
                                </div>
                                <span className="text-sm font-semibold">Miel de Thym Sauvage</span>
                            </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">Terroirs</td>
                        <td className="px-6 py-4 text-sm font-bold">24,00 €</td>
                        <td className="px-6 py-4">
                            <span className="px-2 py-1 rounded bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold">
                                En stock
                            </span>
                        </td>
                        <td className="px-6 py-4">
                            <div className="flex justify-end">
                                <button className="text-primary hover:text-primary/80">
                                    <span className="material-symbols-outlined">edit_note</span>
                                </button>
                            </div>
                        </td>
                    </tr>

                    <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                                <div className="size-10 rounded-lg bg-gray-100 dark:bg-white/10 overflow-hidden">
                                    <img
                                        alt="Honey Product"
                                        className="w-full h-full object-cover"
                                        data-alt="Clear honey pouring from a spoon"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuADhaGfu5v2PMalNfOgXHuCn5CrDdvTA79bi1APQRen9WhmqMkbvUT-5qYTTDTkpkWxYK1UcWq7Nv6BAN8AH2lzC_tqmJ1b6417-9sl8tbGMCH62WHGuvYX-7iOt_B4NbDXKva-dF8hQsoLTNIbgy802pKl1iHE47FRpSsrbqns1uBmEWysoK-LwTv1v5O1m_UKgMGDDgG6xnbt5inxETYTHxeduZgj2sJDQtRSfb8tAjI4urmZ1tU4KkekPznTc7MOENgovuTieH8"
                                    />
                                </div>
                                <span className="text-sm font-semibold">Miel d'Eucalyptus</span>
                            </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">Classiques</td>
                        <td className="px-6 py-4 text-sm font-bold">18,50 €</td>
                        <td className="px-6 py-4">
                            <span className="px-2 py-1 rounded bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-xs font-bold">Rupture</span>
                        </td>
                        <td className="px-6 py-4">
                            <div className="flex justify-end">
                                {/* <Link href={`/admin/products/${.id}`} className="text-primary hover:text-primary/80">
                                    <FilePenLine />
                                </Link> */}
                            </div>
                        </td>
                    </tr>

                    <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                                <div className="size-10 rounded-lg bg-gray-100 dark:bg-white/10 overflow-hidden">
                                    <img
                                        alt="Honey Product"
                                        className="w-full h-full object-cover"
                                        data-alt="Orange blossom honey in a jar"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_vjHRVQOZsUbhyxJYpyAbWav6cN954wKkJ6cyUnqjFFzA8Iz2VL5dEcGRgIaE4lOsn2UR13qtJWrgpkR2DOBJgjkUXQxdbuQwisON6axgTkHLW30zs0rFA9UWCMtSKFX7xNsRNq_pz4pPpFIRuKXLtOqM3vG8PPZh8krk5SgHgwY-3ozX2HRt7gYlDLhNn5yRB75Fock7w-jjmv7MjAzgUhXcf7nenm4YOMEPQN4D4ffng6RtcRpLmCFbiohBdOi85WoZQjvbFIg"
                                    />
                                </div>
                                <span className="text-sm font-semibold">Miel d'Oranger du Souss</span>
                            </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">Miels d'Eté</td>
                        <td className="px-6 py-4 text-sm font-bold">15,00 €</td>
                        <td className="px-6 py-4">
                            <span className="px-2 py-1 rounded bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-xs font-bold">Stock faible</span>
                        </td>
                        <td className="px-6 py-4">
                            <div className="flex justify-end">
                                {/* <Link href={`/admin/products/${p.id}`} className="text-primary hover:text-primary/80">
                                    <FilePenLine />
                                </Link> */}
                            </div>
                        </td>
                    </tr>
                </>
            );
        }

        return products.map((p) => (
            <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                        <div className="size-10 rounded-lg bg-gray-100 overflow-hidden">
                            <img alt={p.name} className="w-full h-full object-cover" src={p.image ?? ''} />
                        </div>
                        <span className="text-sm font-semibold">{p.name}</span>
                    </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{p.category ?? '—'}</td>
                <td className="px-6 py-4 text-sm font-bold">{p.price}</td>
                <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${p.stock > 5 ? 'bg-green-100 text-green-700 ' : p.stock > 0 ? 'bg-orange-100  text-orange-700 ' : 'bg-red-100  text-red-700 '}`}>
                        {p.stock > 5 ? 'En stock' : p.stock > 0 ? 'Stock faible' : 'Rupture'}
                    </span>
                </td>
                <td className="px-6 py-4">
                    <div className="flex justify-end">
                        <Link href={`/admin/produits/${p.id}`} className="text-primary hover:text-primary/80">
                            <FilePenLine />
                        </Link>
                    </div>
                </td>
            </tr>
        ));
    };

    return (
        <table className="w-full text-left">
            <thead className="bg-background-light dark:bg-white/5">
                <tr>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Produit</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Catégorie</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Prix</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Stock</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 text-right">Action</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-[#e6e4db] dark:divide-white/10">{renderRows()}</tbody>
        </table>
    );
}
