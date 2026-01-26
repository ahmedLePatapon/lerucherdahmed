"use client";

import { Input } from "@/components/ui/Input";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { ProductSchemaType } from "@/lib/schemas/productSchema";

interface ProductNutritionProps {
    register: UseFormRegister<ProductSchemaType>;
    errors: FieldErrors<ProductSchemaType>;
}

export function ProductNutrition({ register, errors }: ProductNutritionProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label className="block text-sm font-semibold text-text-main dark:text-text-light mb-2">Énergie</label>
                <div className="flex items-stretch">
                    <Input
                        {...register("energy")}
                        className="rounded-r-none"
                        placeholder="320"
                    />
                    <div className="inline-flex items-center px-3 bg-slate-50 border border-l-0 border-border-light rounded-r-lg">kcal</div>
                </div>
                {errors.energy && <span className="text-red-500 text-sm">{errors.energy.message as string}</span>}
            </div>

            <div>
                <label className="block text-sm font-semibold text-text-main dark:text-text-light mb-2">Glucides</label>
                <div className="flex items-stretch">
                    <Input
                        {...register("carbs")}
                        className="rounded-r-none"
                        placeholder="80"
                    />
                    <div className="inline-flex items-center px-3 bg-slate-50 border border-l-0 border-border-light rounded-r-lg">g</div>
                </div>
                {errors.carbs && <span className="text-red-500 text-sm">{errors.carbs.message as string}</span>}
            </div>

            <div>
                <label className="block text-sm font-semibold text-text-main dark:text-text-light mb-2">Protéines</label>
                <div className="flex items-stretch">
                    <Input
                        {...register("protein")}
                        className="rounded-r-none"
                        placeholder="0.3"
                    />
                    <div className="inline-flex items-center px-3 bg-slate-50 border border-l-0 border-border-light rounded-r-lg">g</div>
                </div>
                {errors.protein && <span className="text-red-500 text-sm">{errors.protein.message as string}</span>}
            </div>

            <div>
                <label className="block text-sm font-semibold text-text-main dark:text-text-light mb-2">Sucres</label>
                <div className="flex items-stretch">
                    <Input
                        {...register("sugars")}
                        className="rounded-r-none"
                        placeholder="78"
                    />
                    <div className="inline-flex items-center px-3 bg-slate-50 border border-l-0 border-border-light rounded-r-lg">g</div>
                </div>
                {errors.sugars && <span className="text-red-500 text-sm">{errors.sugars.message as string}</span>}
            </div>
        </div>
    );
}
