"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ExternalLink, Save, X } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { FormSection } from "@/components/ui/FormSection";
import { ProductGeneralInfo } from "@/components/admin/product/ProductGeneralInfo";
import { ProductDescriptions } from "@/components/admin/product/ProductDescriptions";
import { ProductMediaUpload } from "@/components/admin/product/ProductMediaUpload";
import { ProductSpecs } from "@/components/admin/product/ProductSpecs";
import { ProductNutrition } from "@/components/admin/product/ProductNutrition";
import { ProductApiNotes } from "@/components/admin/product/ProductApiNotes";
import { productSchema, ProductSchemaType } from "@/lib/schemas/productSchema";
import { Product } from "@/lib/types/product";

type PageProps = {
    params: Promise<{ id: string }>;
};

export default function ProductEditPage({ params }: PageProps) {
    const router = useRouter();
    const [productId, setProductId] = useState<string>("");
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [saveSuccess, setSaveSuccess] = useState(false);
    const [saveError, setSaveError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors, isDirty },
        setValue,
        watch,
        reset,
    } = useForm<ProductSchemaType>({
        resolver: zodResolver(productSchema),
        defaultValues: {
            name: "",
            slug: "",
            price: 0,
            badge: "none",
            shortDescription: "",
            description: "",
            images: [],
            mainImageIndex: 0,
            weight: "",
            harvestYear: "",
            season: "",
            tasteProfile: "",
            energy: "",
            carbs: "",
            protein: "",
            sugars: "",
            geographicalOrigin: "",
            beekeeperNotes: "",
        },
    });

    const images = watch("images");
    const mainImageIndex = watch("mainImageIndex");
    const productName = watch("name");

    useEffect(() => {
        async function loadProduct() {
            const { id } = await params;
            setProductId(id);

            try {
                const res = await fetch(`/api/products/${id}`);
                if (!res.ok) throw new Error("Not found");
                const data: Product = await res.json();

                // map product to form fields
                reset({
                    name: data.name || "",
                    slug: data.slug || "",
                    price: data.price || 0,
                    badge: (data.badge as any) || "none",
                    shortDescription: data.shortDescription || "",
                    description: data.description || "",
                    images: data.images || (data.image ? [data.image] : []),
                    mainImageIndex: 0,
                    weight: data.weight || "",
                    harvestYear: data.specs?.harvestYear || "",
                    season: data.specs?.season || "",
                    tasteProfile: data.specs?.tasteProfile || "",
                    energy: data.nutrition?.energy || "",
                    carbs: data.nutrition?.carbs || "",
                    protein: data.nutrition?.protein || "",
                    sugars: data.nutrition?.sugars || "",
                    geographicalOrigin: data.apicultureNotes?.geographicalOrigin || "",
                    beekeeperNotes: data.apicultureNotes?.beekeeperNotes || "",
                });
            } catch (error) {
                console.error("Error loading product:", error);
            } finally {
                setIsLoading(false);
            }
        }

        loadProduct();
    }, [params, reset]);

    const generateSlug = () => {
        const slug = productName
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")
            .replace(/^-+|-+$/g, "");
        setValue("slug", slug, { shouldValidate: true });
    };

    const onSubmit = async (data: ProductSchemaType) => {
        setIsSaving(true);
        setSaveError(null);
        setSaveSuccess(false);

        try {
            const payload: Partial<Product> = {
                name: data.name,
                slug: data.slug,
                price: data.price,
                badge: data.badge as any,
                shortDescription: data.shortDescription,
                description: data.description,
                images: data.images,
                image: data.images && data.images.length > 0 ? data.images[0] : "",
                weight: data.weight,
                specs: {
                    weight: data.weight,
                    harvestYear: data.harvestYear,
                    season: data.season,
                    tasteProfile: data.tasteProfile,
                },
                nutrition: {
                    energy: data.energy,
                    carbs: data.carbs,
                    protein: data.protein,
                    sugars: data.sugars,
                },
                apicultureNotes: {
                    geographicalOrigin: data.geographicalOrigin,
                    beekeeperNotes: data.beekeeperNotes,
                },
            };

            const res = await fetch(`/api/products/${productId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!res.ok) throw new Error("Save failed");

            setSaveSuccess(true);
            setTimeout(() => setSaveSuccess(false), 3000);
        } catch (error) {
            console.error("Error saving product:", error);
            setSaveError("Erreur lors de l'enregistrement");
        } finally {
            setIsSaving(false);
        }
    };

    const handleCancel = () => {
        if (isDirty) {
            if (!confirm("Vous avez des modifications non sauvegardées. Voulez-vous vraiment quitter ?")) return;
        }
        router.push("/admin/produits");
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                Chargement...
            </div>
        );
    }

    return (
        <div className="flex-1 flex flex-col min-w-0">
            <header className="sticky top-0 bg-white z-10 border-b p-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <Breadcrumbs items={[{ label: "Admin", href: "/admin" }, { label: "Produits", href: "/admin/produits" }, { label: "Édition" }]} />
                </div>

                <div className="flex items-center gap-2">
                    <Button variant="ghost" onClick={() => router.push(`/produit/${productId}`)}>
                        <ExternalLink className="w-4 h-4 mr-2" /> Voir le produit public
                    </Button>
                    <Button variant="outline" onClick={handleCancel}>
                        <X className="w-4 h-4 mr-2" /> Annuler
                    </Button>
                    <Button variant="primary" onClick={handleSubmit(onSubmit)} isLoading={isSaving}>
                        <Save className="w-4 h-4 mr-2" /> Enregistrer
                    </Button>
                </div>
            </header>

            <main className="p-6 space-y-6">
                <form onSubmit={(e) => e.preventDefault()}>
                    <FormSection title="Informations générales">
                        <ProductGeneralInfo register={register} errors={errors} onGenerateSlug={generateSlug} />
                    </FormSection>

                    <FormSection title="Descriptions">
                        <ProductDescriptions register={register} errors={errors} />
                    </FormSection>

                    <FormSection title="Médias">
                        <ProductMediaUpload
                            images={images}
                            mainImageIndex={mainImageIndex}
                            onImagesChange={(imgs) => setValue("images", imgs)}
                            onMainImageChange={(i) => setValue("mainImageIndex", i)}
                        />
                    </FormSection>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <FormSection title="Spécifications techniques">
                            <ProductSpecs register={register} errors={errors} />
                        </FormSection>

                        <FormSection title="Tableau nutritionnel">
                            <ProductNutrition register={register} errors={errors} />
                        </FormSection>
                    </div>

                </form>
            </main>
        </div>
    );
}
