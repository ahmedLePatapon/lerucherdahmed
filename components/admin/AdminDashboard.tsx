// components/admin/AdminDashboard.tsx
"use client";
import React, { useState } from 'react';
import ProductsTable from './ProductsTable';
import UpdatesList from './UpdatesList';
import LoginPrompt from './LoginPrompt';
import { isAuthenticated } from '../../lib/auth';
import { Banknote, ShoppingCart, Users } from 'lucide-react';
import { SimpleCard } from '../cards/SimpleCard';
import Link from 'next/link';

const simpleDashboardItems = [
    {
        title: "Chiffre d'affaires",
        value: "12 450,00 €",
        icon: Banknote,
        percentage: "+12.5%",
    },
    {
        title: "Total Commandes",
        value: "342",
        icon: ShoppingCart,
        percentage: "+5.2%",
    },
    {
        title: "Utilisateurs Actifs",
        value: "1 205",
        icon: Users,
        percentage: "-2.1%",
    }
]

const products = [
    {
        id: 'p1',
        name: 'Miel de lavande',
        slug: 'miel-de-lavande',
        price: 12.0,
        description: 'Miel de lavande, goût délicat.',
        shortDescription: 'Miel de lavande',
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJxieGe_JTKdpNvaz6Nhb0mC7vSMnPQiMYkmpRUC_QheMMNGnsVB7Y7s7-gY1OnVbm4xR-wMNTKncBDMRMai6hADwyAuRUsno_RRYnkYqFTEZjfWPX9SZaJuSQnUvmfazw3OG3G2ZRmK6KtCvrrMTfcGBssAeLNrLyKDPOiKitikNrh6dC2QPpCjMX7I9ONVKvldL_fhPSIZKv7MbjR0eGcuZkfQAkHKEaIq_hN3vcb1zmEA3hSngt2OmDtdFOQFeRbxTOey57vG0",
        rating: 4.5,
        weight: '500g',
        inStock: true,
        featured: false,
    },
    {
        id: 'p2',
        name: 'Miel de châtaignier',
        slug: 'miel-chataignier',
        price: 14.0,
        description: 'Miel corsé, notes boisées.',
        shortDescription: 'Miel de châtaignier',
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADhaGfu5v2PMalNfOgXHuCn5CrDdvTA79bi1APQRen9WhmqMkbvUT-5qYTTDTkpkWxYK1UcWq7Nv6BAN8AH2lzC_tqmJ1b6417-9sl8tbGMCH62WHGuvYX-7iOt_B4NbDXKva-dF8hQsoLTNIbgy802pKl1iHE47FRpSsrbqns1uBmEWysoK-LwTv1v5O1m_UKgMGDDgG6xnbt5inxETYTHxeduZgj2sJDQtRSfb8tAjI4urmZ1tU4KkekPznTc7MOENgovuTieH8",
        rating: 4.8,
        weight: '500g',
        inStock: false,
        featured: false,
    },
    {
        id: 'p3',
        name: 'Miel toutes fleurs',
        slug: 'miel-toutes-fleurs',
        price: 10.0,
        description: 'Miel parfumé, mélange de nectars.',
        shortDescription: 'Miel toutes fleurs',
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_vjHRVQOZsUbhyxJYpyAbWav6cN954wKkJ6cyUnqjFFzA8Iz2VL5dEcGRgIaE4lOsn2UR13qtJWrgpkR2DOBJgjkUXQxdbuQwisON6axgTkHLW30zs0rFA9UWCMtSKFX7xNsRNq_pz4pPpFIRuKXLtOqM3vG8PPZh8krk5SgHgwY-3ozX2HRt7gYlDLhNn5yRB75Fock7w-jjmv7MjAzgUhXcf7nenm4YOMEPQN4D4ffng6RtcRpLmCFbiohBdOi85WoZQjvbFIg",
        rating: 4.2,
        weight: '500g',
        inStock: true,
        featured: false,
    },
];


export default function AdminDashboard(): React.ReactElement {
    // const auth = isAuthenticated();

    // if (!auth.authenticated) {
    //     return <LoginPrompt message="Accès administrateur requis." />;
    // }

    return (
        <div className="p-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {simpleDashboardItems.map((item, index) => <SimpleCard {...item} key={index} />)}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-bold">Dernières Mises à Jour</h2>
                    </div>
                    <div
                        className="bg-white p-6 rounded-xl border border-[#e6e4db] shadow-sm space-y-6">
                        <div className="flex gap-4">
                            <div
                                className="size-10 shrink-0 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                                <span className="material-symbols-outlined">groups</span>
                            </div>
                            <div>
                                <p className="text-sm"><span className="font-bold">Nouvelle Rencontre</span> ajoutée :
                                    "L'Apiculteur de l'Atlas"</p>
                                <p className="text-xs text-gray-500 mt-1">Il y a 2 heures</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div
                                className="size-10 shrink-0 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                                <span className="material-symbols-outlined">public</span>
                            </div>
                            <div>
                                <p className="text-sm"><span className="font-bold">Terroir mis à jour</span> : Zone de
                                    récolte Miel d'Arganier</p>
                                <p className="text-xs text-gray-500 mt-1">Hier à 14:30</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div
                                className="size-10 shrink-0 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600">
                                <span className="material-symbols-outlined">edit</span>
                            </div>
                            <div>
                                <p className="text-sm"><span className="font-bold">Modification Blog</span> : "Les vertus du
                                    miel de thym"</p>
                                <p className="text-xs text-gray-500 mt-1">Le 24 Octobre 2023</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div
                                className="size-10 shrink-0 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                                <span className="material-symbols-outlined">person_add</span>
                            </div>
                            <div>
                                <p className="text-sm"><span className="font-bold">Nouvel Utilisateur</span> inscrit : Marie
                                    Durand</p>
                                <p className="text-xs text-gray-500 mt-1">Le 23 Octobre 2023</p>
                            </div>
                        </div>
                        <button
                            className="w-full py-2 bg-background-light rounded-lg text-sm font-bold hover:bg-gray-200 transition-colors">
                            Voir tout le journal
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
