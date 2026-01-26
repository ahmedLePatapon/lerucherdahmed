"use client";

import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { ProductSchemaType } from "@/lib/schemas/productSchema";

interface ProductApiNotesProps {
    register: UseFormRegister<ProductSchemaType>;
    errors: FieldErrors<ProductSchemaType>;
}

export function ProductApiNotes({ register, errors }: ProductApiNotesProps) {
    return (
        <div className="space-y-6">
            <div>
                <Input
                    label="Origine géographique"
                    {...register("geographicalOrigin")}
                    error={errors.geographicalOrigin?.message as string | undefined}
                />
            </div>

            <div>
                <Textarea
                    label="Notes de l'apiculteur"
                    {...register("beekeeperNotes")}
                    error={errors.beekeeperNotes?.message as string | undefined}
                />
            </div>
        </div>
    );
}
