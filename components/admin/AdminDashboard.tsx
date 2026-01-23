// components/admin/AdminDashboard.tsx
"use client";
import React, { useState } from 'react';
import HeaderAdmin from './HeaderAdmin';
import Sidebar from './Sidebar';
import ProductsTable from './ProductsTable';
import UpdatesList from './UpdatesList';
import LoginPrompt from './LoginPrompt';
import { isAuthenticated } from '../../lib/auth';

export default function AdminDashboard(): React.ReactElement {
    // const auth = isAuthenticated();

    // if (!auth.authenticated) {
    //     return <LoginPrompt message="Accès administrateur requis." />;
    // }

    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div className="p-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div
                    className="bg-white dark:bg-[#221f10] p-6 rounded-xl border border-[#e6e4db] dark:border-white/10 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                            <span className="material-symbols-outlined">payments</span>
                        </div>
                        <span className="text-[#078814] text-sm font-bold flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">trending_up</span> +12.5%
                        </span>
                    </div>
                    <p className="text-gray-500 text-sm font-medium">Chiffre d'affaires</p>
                    <h3 className="text-2xl font-bold mt-1">12 450,00 €</h3>
                </div>
                <div
                    className="bg-white dark:bg-[#221f10] p-6 rounded-xl border border-[#e6e4db] dark:border-white/10 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                            <span className="material-symbols-outlined">shopping_cart</span>
                        </div>
                        <span className="text-[#078814] text-sm font-bold flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">trending_up</span> +5.2%
                        </span>
                    </div>
                    <p className="text-gray-500 text-sm font-medium">Total Commandes</p>
                    <h3 className="text-2xl font-bold mt-1">342</h3>
                </div>
                <div
                    className="bg-white dark:bg-[#221f10] p-6 rounded-xl border border-[#e6e4db] dark:border-white/10 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                            <span className="material-symbols-outlined">group</span>
                        </div>
                        <span className="text-red-500 text-sm font-bold flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">trending_down</span> -2.1%
                        </span>
                    </div>
                    <p className="text-gray-500 text-sm font-medium">Utilisateurs Actifs</p>
                    <h3 className="text-2xl font-bold mt-1">1 205</h3>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-bold">Produits Récents</h2>
                        <button className="text-sm text-primary font-bold hover:underline">Voir tout</button>
                    </div>
                    <div
                        className="bg-white dark:bg-[#221f10] rounded-xl border border-[#e6e4db] dark:border-white/10 overflow-hidden shadow-sm">
                        <table className="w-full text-left">
                            <thead className="bg-background-light dark:bg-white/5">
                                <tr>
                                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                                        Produit</th>
                                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                                        Catégorie</th>
                                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                                        Prix</th>
                                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                                        Stock</th>
                                    <th
                                        className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 text-right">
                                        Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#e6e4db] dark:divide-white/10">
                                <tr className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="size-10 rounded-lg bg-gray-100 dark:bg-white/10 overflow-hidden">
                                                <img alt="Honey Product" className="w-full h-full object-cover"
                                                    data-alt="Close up of a premium honey jar"
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJxieGe_JTKdpNvaz6Nhb0mC7vSMnPQiMYkmpRUC_QheMMNGnsVB7Y7s7-gY1OnVbm4xR-wMNTKncBDMRMai6hADwyAuRUsno_RRYnkYqFTEZjfWPX9SZaJuSQnUvmfazw3OG3G2ZRmK6KtCvrrMTfcGBssAeLNrLyKDPOiKitikNrh6dC2QPpCjMX7I9ONVKvldL_fhPSIZKv7MbjR0eGcuZkfQAkHKEaIq_hN3vcb1zmEA3hSngt2OmDtdFOQFeRbxTOey57vG0" />
                                            </div>
                                            <span className="text-sm font-semibold">Miel de Thym Sauvage</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">Terroirs</td>
                                    <td className="px-6 py-4 text-sm font-bold">24,00 €</td>
                                    <td className="px-6 py-4">
                                        <span
                                            className="px-2 py-1 rounded bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold">En
                                            stock</span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-primary hover:text-primary/80">
                                            <span className="material-symbols-outlined">edit_note</span>
                                        </button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="size-10 rounded-lg bg-gray-100 dark:bg-white/10 overflow-hidden">
                                                <img alt="Honey Product" className="w-full h-full object-cover"
                                                    data-alt="Clear honey pouring from a spoon"
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuADhaGfu5v2PMalNfOgXHuCn5CrDdvTA79bi1APQRen9WhmqMkbvUT-5qYTTDTkpkWxYK1UcWq7Nv6BAN8AH2lzC_tqmJ1b6417-9sl8tbGMCH62WHGuvYX-7iOt_B4NbDXKva-dF8hQsoLTNIbgy802pKl1iHE47FRpSsrbqns1uBmEWysoK-LwTv1v5O1m_UKgMGDDgG6xnbt5inxETYTHxeduZgj2sJDQtRSfb8tAjI4urmZ1tU4KkekPznTc7MOENgovuTieH8" />
                                            </div>
                                            <span className="text-sm font-semibold">Miel d'Eucalyptus</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">Classiques</td>
                                    <td className="px-6 py-4 text-sm font-bold">18,50 €</td>
                                    <td className="px-6 py-4">
                                        <span
                                            className="px-2 py-1 rounded bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-xs font-bold">Rupture</span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-primary hover:text-primary/80">
                                            <span className="material-symbols-outlined">edit_note</span>
                                        </button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="size-10 rounded-lg bg-gray-100 dark:bg-white/10 overflow-hidden">
                                                <img alt="Honey Product" className="w-full h-full object-cover"
                                                    data-alt="Orange blossom honey in a jar"
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_vjHRVQOZsUbhyxJYpyAbWav6cN954wKkJ6cyUnqjFFzA8Iz2VL5dEcGRgIaE4lOsn2UR13qtJWrgpkR2DOBJgjkUXQxdbuQwisON6axgTkHLW30zs0rFA9UWCMtSKFX7xNsRNq_pz4pPpFIRuKXLtOqM3vG8PPZh8krk5SgHgwY-3ozX2HRt7gYlDLhNn5yRB75Fock7w-jjmv7MjAzgUhXcf7nenm4YOMEPQN4D4ffng6RtcRpLmCFbiohBdOi85WoZQjvbFIg" />
                                            </div>
                                            <span className="text-sm font-semibold">Miel d'Oranger du Souss</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">Miels d'Eté</td>
                                    <td className="px-6 py-4 text-sm font-bold">15,00 €</td>
                                    <td className="px-6 py-4">
                                        <span
                                            className="px-2 py-1 rounded bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-xs font-bold">Stock
                                            faible</span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-primary hover:text-primary/80">
                                            <span className="material-symbols-outlined">edit_note</span>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-bold">Dernières Mises à Jour</h2>
                    </div>
                    <div
                        className="bg-white dark:bg-[#221f10] p-6 rounded-xl border border-[#e6e4db] dark:border-white/10 shadow-sm space-y-6">
                        <div className="flex gap-4">
                            <div
                                className="size-10 shrink-0 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600">
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
                                className="size-10 shrink-0 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center text-green-600">
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
                                className="size-10 shrink-0 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center text-yellow-600">
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
                                className="size-10 shrink-0 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600">
                                <span className="material-symbols-outlined">person_add</span>
                            </div>
                            <div>
                                <p className="text-sm"><span className="font-bold">Nouvel Utilisateur</span> inscrit : Marie
                                    Durand</p>
                                <p className="text-xs text-gray-500 mt-1">Le 23 Octobre 2023</p>
                            </div>
                        </div>
                        <button
                            className="w-full py-2 bg-background-light dark:bg-white/5 rounded-lg text-sm font-bold hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">
                            Voir tout le journal
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
