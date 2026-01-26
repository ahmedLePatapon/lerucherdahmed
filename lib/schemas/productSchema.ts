import { z } from "zod";

export const productSchema = z.object({
    name: z.string().min(3, "Le nom doit contenir au moins 3 caractères"),
    slug: z.string().min(3, "Le slug doit contenir au moins 3 caractères"),
    price: z.number().min(0, "Le prix doit être positif"),
    badge: z.enum(["best-seller", "nouveau", "douceur", "intense", "none"]),
    shortDescription: z.string().min(10, "La description courte doit contenir au moins 10 caractères"),
    description: z.string().min(20, "La description doit contenir au moins 20 caractères"),
    images: z.array(z.string()).min(1, "Au moins une image est requise"),
    mainImageIndex: z.number().min(0),
    weight: z.string().min(1, "Le poids est requis"),
    harvestYear: z.string().optional(),
    season: z.string().optional(),
    tasteProfile: z.string().optional(),
    energy: z.string().optional(),
    carbs: z.string().optional(),
    protein: z.string().optional(),
    sugars: z.string().optional(),
    geographicalOrigin: z.string().optional(),
    beekeeperNotes: z.string().optional(),
});

export type ProductSchemaType = z.infer<typeof productSchema>;
