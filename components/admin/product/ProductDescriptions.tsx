"use client";

import { Textarea } from "@/components/ui/Textarea";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { ProductSchemaType } from "@/lib/schemas/productSchema";

interface ProductDescriptionsProps {
    register: UseFormRegister<ProductSchemaType>;
    errors: FieldErrors<ProductSchemaType>;
}

export function ProductDescriptions({ register, errors }: ProductDescriptionsProps) {
    return (
        <div className="space-y-6">
            <div>
                <Textarea
                    label="Description courte"
                    {...register("shortDescription")}
                    error={errors.shortDescription?.message as string | undefined}
                />
            </div>

            <div>
                <Textarea
                    label="Description complète"
                    {...register("description")}
                    error={errors.description?.message as string | undefined}
                />
            </div>
        </div>
    );
}
