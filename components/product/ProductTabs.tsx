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
            <div className="flex gap-2 mb-6">
                {tabs.map((t, i) => (
                    <button
                        key={t}
                        onClick={() => setActive(i)}
                        className={`px-4 py-2 rounded-full border ${i === active ? "bg-primary text-white border-primary" : "bg-white border-background-light"}`}
                    >
                        {t}
                    </button>
                ))}
            </div>

            <div className="prose">
                {active === 0 && (
                    <div>
                        <p className="text-text-muted">{apiculteurNote ?? "Aucune note fournie."}</p>
                    </div>
                )}

                {active === 1 && (
                    <div>
                        {specs ? (
                            <table className="w-full text-sm">
                                <tbody>
                                    {Object.entries(specs).map(([k, v]) => (
                                        <tr key={k} className="border-b">
                                            <td className="py-3 text-text-muted w-1/3">{k}</td>
                                            <td className="py-3 font-medium">{v}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p className="text-text-muted">Pas de caractéristiques disponibles.</p>
                        )}

                        {nutrition && (
                            <div className="mt-6 p-4 bg-background-light rounded-md">
                                <h4 className="font-bold mb-2">Informations nutritionnelles (pour 100g)</h4>
                                <div className="grid grid-cols-2 gap-2 text-sm text-text-muted">
                                    {Object.entries(nutrition).map(([k, v]) => (
                                        <div key={k}>
                                            <span className="font-medium text-text-main">{k}:</span> {" "}
                                            <span>{v}</span>
                                        </div>
                                    ))}
                                </div>
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
