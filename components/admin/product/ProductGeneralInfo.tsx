"use client";

import { RefreshCw } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { ProductSchemaType } from "@/lib/schemas/productSchema";

interface ProductGeneralInfoProps {
    register: UseFormRegister<ProductSchemaType>;
    errors: FieldErrors<ProductSchemaType>;
    onGenerateSlug: () => void;
}

const BADGE_OPTIONS = [
    { value: "none", label: "Aucun" },
    { value: "best-seller", label: "Best Seller" },
    { value: "nouveau", label: "Nouveau" },
    { value: "douceur", label: "Douceur" },
    { value: "intense", label: "Intense" },
];

export function ProductGeneralInfo({ register, errors, onGenerateSlug }: ProductGeneralInfoProps) {
    return (
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
                <Input
                    label="Nom du produit"
                    {...register("name")}
                    error={errors.name?.message as string | undefined}
                />
            </div>

            {/* corrige l'aignement des inputs de gauche et du bouton */}

            <div className="space-y-2">
                <div className="flex gap-2 items-end">
                    <div className="flex-1">
                        <Input
                            id="slug"
                            label="Slug"
                            {...register("slug")}
                        />

                    </div>
                    <Button variant="outline" size="md" onClick={onGenerateSlug} type="button" className="border border-border-light">
                        <RefreshCw className="w-4 h-4" />
                    </Button>
                </div>
                {errors.slug?.message && (
                    <span className="text-red-500 text-sm">{errors.slug?.message}</span>
                )}
            </div>

            <div>
                <Input
                    label="Prix (€)"
                    type="number"
                    step="0.01"
                    {...register("price", { valueAsNumber: true })}
                    error={errors.price?.message as string | undefined}
                />
            </div>

            <div>
                <Select
                    label="Badge"
                    options={BADGE_OPTIONS}
                    {...register("badge")}
                    defaultValue="none"
                />
            </div>
        </div>
    );
}
