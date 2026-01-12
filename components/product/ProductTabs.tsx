"use client";

import { useState } from "react";
import ProductTestimonials from "@/components/product/ProductTestimonials";

interface Props {
    apiculteurNote?: string;
    specs?: Record<string, string>;
    nutrition?: Record<string, string>;
    productName?: string;
}

export default function ProductTabs({ apiculteurNote, specs, nutrition, productName }: Props) {
    const tabs = ["Mot de l'apiculteur", "Caractéristiques", "Avis clients"];
    const [active, setActive] = useState(0);

    return (
        <div>
            <div className="flex gap-2 mb-4">
                {tabs.map((t, i) => (
                    <button
                        key={t}
                        onClick={() => setActive(i)}
                        className={`px-4 py-2 rounded-md ${i === active ? "bg-primary text-white" : "bg-background-light"}`}
                    >
                        {t}
                    </button>
                ))}
            </div>

            <div>
                {active === 0 && (
                    <div>
                        <p className="text-text-muted">{apiculteurNote ?? "Aucune note fournie."}</p>
                    </div>
                )}

                {active === 1 && (
                    <div>
                        {specs ? (
                            <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {Object.entries(specs).map(([k, v]) => (
                                    <div key={k}>
                                        <dt className="text-sm text-text-muted">{k}</dt>
                                        <dd className="font-medium">{v}</dd>
                                    </div>
                                ))}
                            </dl>
                        ) : (
                            <p className="text-text-muted">Pas de caractéristiques disponibles.</p>
                        )}

                        {nutrition && (
                            <div className="mt-6">
                                <h4 className="font-bold mb-2">Informations nutritionnelles (pour 100g)</h4>
                                <dl className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {Object.entries(nutrition).map(([k, v]) => (
                                        <div key={k} className="text-sm text-text-muted">
                                            <span className="font-medium text-text-main">{k}:</span> {" "}
                                            <span>{v}</span>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        )}
                    </div>
                )}

                {active === 2 && (
                    <div>
                        <ProductTestimonials productName={productName} />
                    </div>
                )}
            </div>
        </div>
    );
}
"use client";

import React, { useState } from "react";
import { Product } from "@/lib/data/products";
import ProductTestimonials from "@/components/product/ProductTestimonials";

export interface ProductTabsProps {
    product: Product;
}

export default function ProductTabs({ product }: ProductTabsProps) {
    const [tab, setTab] = useState(0);

    return (
        <div className="bg-white p-6 rounded-md shadow">
            <div className="flex gap-4 border-b mb-4">
                <button
                    onClick={() => setTab(0)}
                    className={`py-2 ${tab === 0 ? "border-b-2 border-primary text-primary" : "text-text-muted"}`}
                >
                    Apiculteur
                </button>
                <button
                    onClick={() => setTab(1)}
                    className={`py-2 ${tab === 1 ? "border-b-2 border-primary text-primary" : "text-text-muted"}`}
                >
                    Caractéristiques
                </button>
                <button
                    onClick={() => setTab(2)}
                    className={`py-2 ${tab === 2 ? "border-b-2 border-primary text-primary" : "text-text-muted"}`}
                >
                    Avis clients
                </button>
            </div>

            <div>
                {tab === 0 && (
                    <div>
                        <h3 className="text-lg font-bold mb-2">Le mot de l'apiculteur</h3>
                        <p className="text-text-muted">{product.apiculteurNote ?? "Aucune note fournie pour ce produit."}</p>
                    </div>
                )}

                {tab === 1 && (
                    <div>
                        <h3 className="text-lg font-bold mb-4">Caractéristiques techniques</h3>
                        {product.specs ? (
                            <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {Object.entries(product.specs).map(([k, v]) => (
                                    <div key={k}>
                                        <dt className="text-sm text-text-muted">{k}</dt>
                                        <dd className="font-medium">{v}</dd>
                                    </div>
                                ))}
                            </dl>
                        ) : (
                            <p className="text-text-muted">Pas de caractéristiques disponibles.</p>
                        )}

                        {product.nutrition && (
                            <div className="mt-6">
                                <h4 className="text-md font-semibold mb-2">Valeurs nutritionnelles</h4>
                                <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {Object.entries(product.nutrition).map(([k, v]) => (
                                        <div key={k}>
                                            <dt className="text-sm text-text-muted">{k}</dt>
                                            <dd className="font-medium">{v}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        )}
                    </div>
                )}

                {tab === 2 && (
                    <div>
                        <h3 className="text-lg font-bold mb-4">Avis clients</h3>
                        <ProductTestimonials productName={product.name} />
                    </div>
                )}
            </div>
        </div>
    );
}
