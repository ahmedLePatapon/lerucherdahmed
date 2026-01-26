// crée la page pr les produits
import React from 'react';
import Link from 'next/link';

import ProductsTable from '@/components/admin/ProductsTable';

const products = [
    {
        id: 'p1', name: 'Miel de lavande', price: '12€', stock: 24, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJxieGe_JTKdpNvaz6Nhb0mC7vSMnPQiMYkmpRUC_QheMMNGnsVB7Y7s7-gY1OnVbm4xR-wMNTKncBDMRMai6hADwyAuRUsno_RRYnkYqFTEZjfWPX9SZaJuSQnUvmfazw3OG3G2ZRmK6KtCvrrMTfcGBssAeLNrLyKDPOiKitikNrh6dC2QPpCjMX7I9ONVKvldL_fhPSIZKv7MbjR0eGcuZkfQAkHKEaIq_hN3vcb1zmEA3hSngt2OmDtdFOQFeRbxTOey57vG0"
    },
    {
        id: 'p2', name: 'Miel de châtaignier', price: '14€', stock: 0, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADhaGfu5v2PMalNfOgXHuCn5CrDdvTA79bi1APQRen9WhmqMkbvUT-5qYTTDTkpkWxYK1UcWq7Nv6BAN8AH2lzC_tqmJ1b6417-9sl8tbGMCH62WHGuvYX-7iOt_B4NbDXKva-dF8hQsoLTNIbgy802pKl1iHE47FRpSsrbqns1uBmEWysoK-LwTv1v5O1m_UKgMGDDgG6xnbt5inxETYTHxeduZgj2sJDQtRSfb8tAjI4urmZ1tU4KkekPznTc7MOENgovuTieH8"
    },
    {
        id: 'p3', name: 'Miel toutes fleurs', price: '10€', stock: 42, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_vjHRVQOZsUbhyxJYpyAbWav6cN954wKkJ6cyUnqjFFzA8Iz2VL5dEcGRgIaE4lOsn2UR13qtJWrgpkR2DOBJgjkUXQxdbuQwisON6axgTkHLW30zs0rFA9UWCMtSKFX7xNsRNq_pz4pPpFIRuKXLtOqM3vG8PPZh8krk5SgHgwY-3ozX2HRt7gYlDLhNn5yRB75Fock7w-jjmv7MjAzgUhXcf7nenm4YOMEPQN4D4ffng6RtcRpLmCFbiohBdOi85WoZQjvbFIg"
    },
];

export default function AdminProduitsPage(): React.ReactElement {
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