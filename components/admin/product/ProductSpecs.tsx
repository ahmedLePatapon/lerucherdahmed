"use client";

import { Input } from "@/components/ui/Input";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { ProductSchemaType } from "@/lib/schemas/productSchema";

interface ProductSpecsProps {
    register: UseFormRegister<ProductSchemaType>;
    errors: FieldErrors<ProductSchemaType>;
}

export function ProductSpecs({ register, errors }: ProductSpecsProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label className="block text-sm font-semibold text-text-main dark:text-text-light mb-2">Poids</label>
                <div className="flex items-stretch">
                    <Input
                        {...register("weight")}
                        className="rounded-r-none"
                        placeholder="500"
                    />
                    <div className="inline-flex items-center px-3 bg-slate-50 border border-l-0 border-border-light rounded-r-lg">g</div>
                </div>
                {errors.weight && <span className="text-red-500 text-sm">{errors.weight.message as string}</span>}
            </div>

            <div>
                <Input
                    label="Année de récolte"
                    {...register("harvestYear")}
                    error={errors.harvestYear?.message as string | undefined}
                />
            </div>

            <div>
                <Input
                    label="Saison"
                    {...register("season")}
                    error={errors.season?.message as string | undefined}
                />
            </div>

            <div>
                <Input
                    label="Profil de goût"
                    {...register("tasteProfile")}
                    error={errors.tasteProfile?.message as string | undefined}
                />
            </div>
        </div>
    );
}
