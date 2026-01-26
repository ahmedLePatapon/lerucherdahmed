# Intégration Page Édition de Produit Admin - Implementation

## Goal
Convertir la page HTML statique d'édition de produit en une page Next.js fonctionnelle avec gestion de formulaire complète, validation, et persistance JSON locale.

## Prerequisites
Assurez-vous d'être sur la branche `feature/admin-product-edit-page` avant de commencer.

Si la branche n'existe pas:
```bash
git checkout -b feature/admin-product-edit-page
```

Si elle existe déjà:
```bash
git checkout feature/admin-product-edit-page
```

---

## Step-by-Step Instructions

### Step 1: Installation des dépendances pour la gestion de formulaire

- [ ] Ouvrir le terminal et naviguer vers la racine du projet
- [ ] Exécuter la commande suivante pour installer les dépendances nécessaires:

```bash
npm install react-hook-form @hookform/resolvers zod
```

#### Step 1 Verification Checklist
- [ ] Vérifier que les packages sont bien ajoutés dans `package.json`
- [ ] Aucune erreur d'installation dans le terminal

#### Step 1 STOP & COMMIT
**STOP & COMMIT:** Agent must stop here and wait for the user to test, stage, and commit the change.

---

### Step 2: Créer les types TypeScript pour le produit étendu

- [ ] Créer le fichier `lib/types/product.ts`
- [ ] Copier et coller le code ci-dessous:

```typescript
export interface Product {
    id: string;
    name: string;
    slug: string;
    price: number;
    description: string;
    shortDescription: string;
    image: string;
    images?: string[]; // Images supplémentaires
    badge?: "best-seller" | "nouveau" | "douceur" | "intense" | "none";
    rating: number;
    weight: string;
    harvest?: string;
    usage?: string;
    season?: "printemps" | "été" | "automne" | "toutes";
    taste?: "doux" | "moyen" | "intense";
    inStock: boolean;
    featured: boolean;
    specs?: {
        weight?: string;
        harvestYear?: string;
        season?: string;
        tasteProfile?: string;
    };
    nutrition?: {
        energy?: string;
        carbs?: string;
        protein?: string;
        sugars?: string;
    };
    apicultureNotes?: {
        geographicalOrigin?: string;
        beekeeperNotes?: string;
    };
    quantity?: number;
}

export interface ProductFormData {
    name: string;
    slug: string;
    price: number;
    badge: "best-seller" | "nouveau" | "douceur" | "intense" | "none";
    shortDescription: string;
    description: string;
    images: string[];
    mainImageIndex: number;
    weight: string;
    harvestYear: string;
    season: string;
    tasteProfile: string;
    energy: string;
    carbs: string;
    protein: string;
    sugars: string;
    geographicalOrigin: string;
    beekeeperNotes: string;
}
```

#### Step 2 Verification Checklist
- [ ] Aucune erreur TypeScript dans le fichier
- [ ] Le fichier est bien créé dans `lib/types/`

#### Step 2 STOP & COMMIT
**STOP & COMMIT:** Agent must stop here and wait for the user to test, stage, and commit the change.

---

### Step 3: Créer le fichier de données JSON local

- [ ] Créer le dossier `lib/data` s'il n'existe pas déjà
- [ ] Créer le fichier `lib/data/products.json`
- [ ] Copier et coller le code ci-dessous:

```json
{
  "products": [
    {
      "id": "1",
      "name": "Miel de Jujubier (Sidr)",
      "slug": "miel-jujubier-sidr",
      "price": 45.0,
      "description": "Un miel rare et précieux, récolté sur les fleurs de jujubier sauvage. Reconnu pour ses propriétés exceptionnelles et son goût unique.",
      "shortDescription": "Miel rare et précieux du jujubier sauvage",
      "image": "/images/products/miel-jujubier.jpg",
      "images": [
        "/images/products/miel-jujubier.jpg",
        "/images/products/miel-jujubier-2.jpg",
        "/images/products/miel-jujubier-3.jpg"
      ],
      "badge": "best-seller",
      "rating": 4.9,
      "weight": "500g",
      "inStock": true,
      "featured": true,
      "specs": {
        "weight": "500",
        "harvestYear": "2024",
        "season": "Été",
        "tasteProfile": "Intense et complexe"
      },
      "nutrition": {
        "energy": "320",
        "carbs": "80",
        "protein": "0.3",
        "sugars": "78"
      },
      "apicultureNotes": {
        "geographicalOrigin": "Montagnes de Tlemcen, Algérie",
        "beekeeperNotes": "Ce miel exceptionnel est récolté dans des zones préservées où le jujubier pousse à l'état sauvage. La récolte se fait une fois par an, garantissant une qualité optimale."
      }
    },
    {
      "id": "2",
      "name": "Miel d'Eucalyptus",
      "slug": "miel-eucalyptus",
      "price": 18.0,
      "description": "Miel corsé aux notes balsamiques, récolté sur les fleurs d'eucalyptus. Idéal pour la gorge et les voies respiratoires.",
      "shortDescription": "Miel corsé aux notes balsamiques",
      "image": "/images/products/miel-eucalyptus.jpg",
      "images": ["/images/products/miel-eucalyptus.jpg"],
      "badge": "none",
      "rating": 4.6,
      "weight": "500g",
      "inStock": true,
      "featured": false,
      "specs": {
        "weight": "500",
        "harvestYear": "2024",
        "season": "Automne",
        "tasteProfile": "Corsé et balsamique"
      },
      "nutrition": {
        "energy": "310",
        "carbs": "78",
        "protein": "0.4",
        "sugars": "76"
      },
      "apicultureNotes": {
        "geographicalOrigin": "Forêts d'eucalyptus de Kabylie",
        "beekeeperNotes": "Récolté dans les forêts d'eucalyptus, ce miel bénéficie des propriétés médicinales de l'arbre."
      }
    }
  ]
}
```

#### Step 3 Verification Checklist
- [ ] Le fichier JSON est bien formé (pas d'erreur de syntaxe)
- [ ] Le dossier `lib/data` existe

#### Step 3 STOP & COMMIT
**STOP & COMMIT:** Agent must stop here and wait for the user to test, stage, and commit the change.

---

### Step 4: Créer les fonctions helper pour gérer les données JSON

- [ ] Créer le fichier `lib/api/products.ts`
- [ ] Copier et coller le code ci-dessous:

```typescript
import { promises as fs } from 'fs';
import path from 'path';
import { Product } from '@/lib/types/product';

const dataFilePath = path.join(process.cwd(), 'lib', 'data', 'products.json');

export async function getProducts(): Promise<Product[]> {
    try {
        const fileContents = await fs.readFile(dataFilePath, 'utf8');
        const data = JSON.parse(fileContents);
        return data.products || [];
    } catch (error) {
        console.error('Error reading products:', error);
        return [];
    }
}

export async function getProductById(id: string): Promise<Product | null> {
    const products = await getProducts();
    return products.find(p => p.id === id) || null;
}

export async function updateProduct(id: string, productData: Partial<Product>): Promise<Product | null> {
    try {
        const products = await getProducts();
        const index = products.findIndex(p => p.id === id);
        
        if (index === -1) {
            return null;
        }

        products[index] = { ...products[index], ...productData };

        const data = { products };
        await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), 'utf8');

        return products[index];
    } catch (error) {
        console.error('Error updating product:', error);
        return null;
    }
}
```

#### Step 4 Verification Checklist
- [ ] Aucune erreur TypeScript
- [ ] Les imports sont corrects

#### Step 4 STOP & COMMIT
**STOP & COMMIT:** Agent must stop here and wait for the user to test, stage, and commit the change.

---

### Step 5: Créer les API routes pour les produits

- [ ] Créer le dossier `app/api/products/[id]` s'il n'existe pas
- [ ] Créer le fichier `app/api/products/[id]/route.ts`
- [ ] Copier et coller le code ci-dessous:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { getProductById, updateProduct } from '@/lib/api/products';

type RouteContext = {
    params: Promise<{ id: string }>;
};

export async function GET(
    request: NextRequest,
    context: RouteContext
) {
    const { id } = await context.params;
    
    try {
        const product = await getProductById(id);
        
        if (!product) {
            return NextResponse.json(
                { error: 'Product not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(product);
    } catch (error) {
        console.error('Error fetching product:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

export async function PUT(
    request: NextRequest,
    context: RouteContext
) {
    const { id } = await context.params;
    
    try {
        const body = await request.json();
        const updatedProduct = await updateProduct(id, body);
        
        if (!updatedProduct) {
            return NextResponse.json(
                { error: 'Product not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(updatedProduct);
    } catch (error) {
        console.error('Error updating product:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
```

#### Step 5 Verification Checklist
- [ ] Aucune erreur TypeScript
- [ ] Le dossier `app/api/products/[id]` est créé

#### Step 5 STOP & COMMIT
**STOP & COMMIT:** Agent must stop here and wait for the user to test, stage, and commit the change.

---

### Step 6: Créer le composant Select UI manquant

- [ ] Créer le fichier `components/ui/Select.tsx`
- [ ] Copier et coller le code ci-dessous:

```typescript
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    error?: string;
    options: { value: string; label: string }[];
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    ({ className, label, error, options, ...props }, ref) => {
        return (
            <div className="space-y-2">
                {label && (
                    <label
                        htmlFor={props.id}
                        className="block text-sm font-semibold text-text-main dark:text-text-light"
                    >
                        {label}
                    </label>
                )}
                <select
                    ref={ref}
                    className={cn(
                        "w-full h-12 px-4 bg-transparent border border-[#e6e4db] dark:border-border-dark rounded-lg",
                        "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
                        "disabled:opacity-50 disabled:cursor-not-allowed",
                        "text-text-main dark:text-text-light",
                        error && "border-red-500 focus:ring-red-500",
                        className
                    )}
                    {...props}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                {error && (
                    <p className="text-sm text-red-500">{error}</p>
                )}
            </div>
        );
    }
);

Select.displayName = "Select";

export { Select };
```

#### Step 6 Verification Checklist
- [ ] Aucune erreur TypeScript
- [ ] Le composant respecte le pattern des autres composants UI

#### Step 6 STOP & COMMIT
**STOP & COMMIT:** Agent must stop here and wait for the user to test, stage, and commit the change.

---

### Step 7: Créer le composant Breadcrumbs

- [ ] Créer le fichier `components/ui/Breadcrumbs.tsx`
- [ ] Copier et coller le code ci-dessous:

```typescript
"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
    return (
        <nav className={cn("flex items-center space-x-2 text-sm", className)}>
            {items.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                    {index > 0 && (
                        <ChevronRight className="w-4 h-4 text-text-muted dark:text-text-muted-light" />
                    )}
                    {item.href ? (
                        <Link
                            href={item.href}
                            className="text-text-muted dark:text-text-muted-light hover:text-primary transition-colors"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-text-main dark:text-text-light font-medium">
                            {item.label}
                        </span>
                    )}
                </div>
            ))}
        </nav>
    );
}
```

#### Step 7 Verification Checklist
- [ ] Aucune erreur TypeScript
- [ ] Le composant utilise Lucide React pour l'icône

#### Step 7 STOP & COMMIT
**STOP & COMMIT:** Agent must stop here and wait for the user to test, stage, and commit the change.

---

### Step 8: Créer le composant FormSection wrapper

- [ ] Créer le fichier `components/ui/FormSection.tsx`
- [ ] Copier et coller le code ci-dessous:

```typescript
import * as React from "react";
import { cn } from "@/lib/utils";

interface FormSectionProps extends React.HTMLAttributes<HTMLElement> {
    title: string;
    children: React.ReactNode;
}

export function FormSection({ title, children, className, ...props }: FormSectionProps) {
    return (
        <section
            className={cn(
                "bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-border-dark overflow-hidden",
                className
            )}
            {...props}
        >
            <div className="px-6 py-4 border-b border-slate-200 dark:border-border-dark bg-slate-50/50 dark:bg-white/5">
                <h3 className="text-lg font-bold text-text-main dark:text-text-light">
                    {title}
                </h3>
            </div>
            <div className="p-6">
                {children}
            </div>
        </section>
    );
}
```

#### Step 8 Verification Checklist
- [ ] Aucune erreur TypeScript
- [ ] Le style correspond au design HTML de référence

#### Step 8 STOP & COMMIT
**STOP & COMMIT:** Agent must stop here and wait for the user to test, stage, and commit the change.

---

### Step 9: Créer le schéma de validation Zod

- [ ] Créer le fichier `lib/schemas/productSchema.ts`
- [ ] Copier et coller le code ci-dessous:

```typescript
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
```

#### Step 9 Verification Checklist
- [ ] Aucune erreur TypeScript
- [ ] Le schéma couvre tous les champs du formulaire

#### Step 9 STOP & COMMIT
**STOP & COMMIT:** Agent must stop here and wait for the user to test, stage, and commit the change.

---

### Step 10: Créer la section Informations Générales

- [ ] Créer le dossier `components/admin/product` s'il n'existe pas
- [ ] Créer le fichier `components/admin/product/ProductGeneralInfo.tsx`
- [ ] Copier et coller le code ci-dessous:

```typescript
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
                <Input
                    label="Nom du Produit"
                    placeholder="Ex: Miel de Jujubier (Sidr)"
                    error={errors.name?.message}
                    {...register("name")}
                />
            </div>

            <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-text-main dark:text-text-light mb-2">
                    Slug (URL)
                </label>
                <div className="flex gap-2">
                    <div className="flex-1">
                        <Input
                            placeholder="miel-jujubier-sidr"
                            error={errors.slug?.message}
                            {...register("slug")}
                        />
                    </div>
                    <Button
                        type="button"
                        variant="outline"
                        size="md"
                        onClick={onGenerateSlug}
                        className="flex items-center gap-2"
                    >
                        <RefreshCw className="w-4 h-4" />
                        Générer
                    </Button>
                </div>
            </div>

            <div>
                <Input
                    type="number"
                    step="0.01"
                    label="Prix (DZD)"
                    placeholder="45.00"
                    error={errors.price?.message}
                    {...register("price", { valueAsNumber: true })}
                />
            </div>

            <div>
                <Select
                    label="Badge / Statut"
                    options={BADGE_OPTIONS}
                    error={errors.badge?.message}
                    {...register("badge")}
                />
            </div>
        </div>
    );
}
```

#### Step 10 Verification Checklist
- [ ] Aucune erreur TypeScript
- [ ] Les inputs sont bien liés à react-hook-form via `register`
- [ ] Le bouton "Générer" appelle la fonction `onGenerateSlug`

#### Step 10 STOP & COMMIT
**STOP & COMMIT:** Agent must stop here and wait for the user to test, stage, and commit the change.

---

### Step 11: Créer la section Descriptions

- [ ] Créer le fichier `components/admin/product/ProductDescriptions.tsx`
- [ ] Copier et coller le code ci-dessous:

```typescript
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
                    label="Description Courte"
                    placeholder="Une brève description pour la liste des produits"
                    rows={2}
                    error={errors.shortDescription?.message}
                    {...register("shortDescription")}
                />
            </div>

            <div>
                <Textarea
                    label="Description Détaillée"
                    placeholder="Description complète du produit avec tous les détails"
                    rows={6}
                    error={errors.description?.message}
                    {...register("description")}
                />
            </div>
        </div>
    );
}
```

#### Step 11 Verification Checklist
- [ ] Aucune erreur TypeScript
- [ ] Les textareas sont bien liés à react-hook-form

#### Step 11 STOP & COMMIT
**STOP & COMMIT:** Agent must stop here and wait for the user to test, stage, and commit the change.

---

### Step 12: Créer la section Spécifications Techniques

- [ ] Créer le fichier `components/admin/product/ProductSpecs.tsx`
- [ ] Copier et coller le code ci-dessous:

```typescript
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
                <label className="block text-sm font-semibold text-text-main dark:text-text-light mb-2">
                    Poids
                </label>
                <div className="relative">
                    <Input
                        type="number"
                        placeholder="500"
                        error={errors.weight?.message}
                        {...register("weight")}
                        className="pr-12"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted dark:text-text-muted-light text-sm">
                        g
                    </span>
                </div>
            </div>

            <div>
                <Input
                    label="Récolte (Année)"
                    placeholder="2024"
                    error={errors.harvestYear?.message}
                    {...register("harvestYear")}
                />
            </div>

            <div>
                <Input
                    label="Saison"
                    placeholder="Ex: Été, Printemps"
                    error={errors.season?.message}
                    {...register("season")}
                />
            </div>

            <div>
                <Input
                    label="Profil Gustatif"
                    placeholder="Ex: Intense et complexe"
                    error={errors.tasteProfile?.message}
                    {...register("tasteProfile")}
                />
            </div>
        </div>
    );
}
```

#### Step 12 Verification Checklist
- [ ] Aucune erreur TypeScript
- [ ] Le suffixe "g" s'affiche correctement

#### Step 12 STOP & COMMIT
**STOP & COMMIT:** Agent must stop here and wait for the user to test, stage, and commit the change.

---

### Step 13: Créer la section Tableau Nutritionnel

- [ ] Créer le fichier `components/admin/product/ProductNutrition.tsx`
- [ ] Copier et coller le code ci-dessous:

```typescript
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
                <label className="block text-sm font-semibold text-text-main dark:text-text-light mb-2">
                    Énergie
                </label>
                <div className="relative">
                    <Input
                        type="number"
                        placeholder="320"
                        error={errors.energy?.message}
                        {...register("energy")}
                        className="pr-20"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted dark:text-text-muted-light text-sm">
                        kcal/100g
                    </span>
                </div>
            </div>

            <div>
                <label className="block text-sm font-semibold text-text-main dark:text-text-light mb-2">
                    Glucides
                </label>
                <div className="relative">
                    <Input
                        type="number"
                        placeholder="80"
                        error={errors.carbs?.message}
                        {...register("carbs")}
                        className="pr-12"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted dark:text-text-muted-light text-sm">
                        g
                    </span>
                </div>
            </div>

            <div>
                <label className="block text-sm font-semibold text-text-main dark:text-text-light mb-2">
                    Protéines
                </label>
                <div className="relative">
                    <Input
                        type="number"
                        placeholder="0.3"
                        step="0.1"
                        error={errors.protein?.message}
                        {...register("protein")}
                        className="pr-12"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted dark:text-text-muted-light text-sm">
                        g
                    </span>
                </div>
            </div>

            <div>
                <label className="block text-sm font-semibold text-text-main dark:text-text-light mb-2">
                    Sucres
                </label>
                <div className="relative">
                    <Input
                        type="number"
                        placeholder="78"
                        error={errors.sugars?.message}
                        {...register("sugars")}
                        className="pr-12"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted dark:text-text-muted-light text-sm">
                        g
                    </span>
                </div>
            </div>
        </div>
    );
}
```

#### Step 13 Verification Checklist
- [ ] Aucune erreur TypeScript
- [ ] Les unités sont affichées correctement à droite de chaque input

#### Step 13 STOP & COMMIT
**STOP & COMMIT:** Agent must stop here and wait for the user to test, stage, and commit the change.

---

### Step 14: Créer la section Notes d'Apiculture

- [ ] Créer le fichier `components/admin/product/ProductApiNotes.tsx`
- [ ] Copier et coller le code ci-dessous:

```typescript
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
                    label="Origine Géographique"
                    placeholder="Ex: Montagnes de Tlemcen, Algérie"
                    error={errors.geographicalOrigin?.message}
                    {...register("geographicalOrigin")}
                />
            </div>

            <div>
                <Textarea
                    label="Notes de l'Apiculteur"
                    placeholder="Partagez des informations sur la récolte, les conditions, les particularités..."
                    rows={5}
                    error={errors.beekeeperNotes?.message}
                    {...register("beekeeperNotes")}
                />
            </div>
        </div>
    );
}
```

#### Step 14 Verification Checklist
- [ ] Aucune erreur TypeScript
- [ ] Les champs sont bien liés au formulaire

#### Step 14 STOP & COMMIT
**STOP & COMMIT:** Agent must stop here and wait for the user to test, stage, and commit the change.

---

### Step 15: Créer la section Upload et Gestion des Médias

- [ ] Créer le fichier `components/admin/product/ProductMediaUpload.tsx`
- [ ] Copier et coller le code ci-dessous:

```typescript
"use client";

import { useState } from "react";
import { ImagePlus, Trash2, Eye, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import Image from "next/image";

interface ProductMediaUploadProps {
    images: string[];
    mainImageIndex: number;
    onImagesChange: (images: string[]) => void;
    onMainImageChange: (index: number) => void;
}

export function ProductMediaUpload({
    images,
    mainImageIndex,
    onImagesChange,
    onMainImageChange,
}: ProductMediaUploadProps) {
    const [newImageUrl, setNewImageUrl] = useState("");
    const [showAddForm, setShowAddForm] = useState(false);

    const handleAddImage = () => {
        if (newImageUrl.trim()) {
            onImagesChange([...images, newImageUrl]);
            setNewImageUrl("");
            setShowAddForm(false);
        }
    };

    const handleRemoveImage = (index: number) => {
        const newImages = images.filter((_, i) => i !== index);
        onImagesChange(newImages);
        
        if (index === mainImageIndex && newImages.length > 0) {
            onMainImageChange(0);
        } else if (index < mainImageIndex) {
            onMainImageChange(mainImageIndex - 1);
        }
    };

    return (
        <div className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((imageUrl, index) => (
                    <div
                        key={index}
                        className="relative group aspect-square rounded-lg border-2 border-slate-200 dark:border-border-dark overflow-hidden"
                    >
                        <Image
                            src={imageUrl}
                            alt={`Product ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                        
                        {index === mainImageIndex && (
                            <Badge
                                variant="primary"
                                className="absolute top-2 left-2 flex items-center gap-1"
                            >
                                <Star className="w-3 h-3 fill-current" />
                                Principal
                            </Badge>
                        )}
                        
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                            <button
                                type="button"
                                onClick={() => onMainImageChange(index)}
                                className="p-2 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                                title="Marquer comme principal"
                            >
                                <Star className={`w-4 h-4 ${index === mainImageIndex ? 'fill-primary text-primary' : 'text-gray-600'}`} />
                            </button>
                            <button
                                type="button"
                                onClick={() => window.open(imageUrl, '_blank')}
                                className="p-2 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                                title="Visualiser"
                            >
                                <Eye className="w-4 h-4 text-gray-600" />
                            </button>
                            <button
                                type="button"
                                onClick={() => handleRemoveImage(index)}
                                className="p-2 bg-white rounded-lg hover:bg-red-50 transition-colors"
                                title="Supprimer"
                            >
                                <Trash2 className="w-4 h-4 text-red-600" />
                            </button>
                        </div>
                    </div>
                ))}

                {showAddForm ? (
                    <div className="aspect-square rounded-lg border-2 border-dashed border-slate-300 dark:border-border-dark p-4 flex flex-col gap-2">
                        <Input
                            placeholder="URL de l'image"
                            value={newImageUrl}
                            onChange={(e) => setNewImageUrl(e.target.value)}
                            className="text-sm"
                        />
                        <div className="flex gap-2">
                            <Button
                                type="button"
                                size="sm"
                                variant="primary"
                                onClick={handleAddImage}
                                className="flex-1"
                            >
                                Ajouter
                            </Button>
                            <Button
                                type="button"
                                size="sm"
                                variant="outline"
                                onClick={() => {
                                    setShowAddForm(false);
                                    setNewImageUrl("");
                                }}
                            >
                                Annuler
                            </Button>
                        </div>
                    </div>
                ) : (
                    <button
                        type="button"
                        onClick={() => setShowAddForm(true)}
                        className="aspect-square rounded-lg border-2 border-dashed border-slate-300 dark:border-border-dark hover:border-primary hover:bg-primary/5 transition-colors flex flex-col items-center justify-center gap-2 text-text-muted dark:text-text-muted-light"
                    >
                        <ImagePlus className="w-8 h-8" />
                        <span className="text-sm font-medium">Ajouter une image</span>
                    </button>
                )}
            </div>

            <p className="text-sm text-text-muted dark:text-text-muted-light">
                Astuce: Survolez une image pour voir les actions disponibles. L'image marquée comme "Principal" sera affichée en premier.
            </p>
        </div>
    );
}
```

#### Step 15 Verification Checklist
- [ ] Aucune erreur TypeScript
- [ ] Le composant gère l'ajout, suppression et marquage d'images
- [ ] Les icônes Lucide React sont correctement utilisées

#### Step 15 STOP & COMMIT
**STOP & COMMIT:** Agent must stop here and wait for the user to test, stage, and commit the change.

---

### Step 16: Créer la page principale d'édition de produit

- [ ] Modifier le fichier `app/(admin)/admin/produits/[id]/page.tsx`
- [ ] Remplacer tout le contenu par le code ci-dessous:

```typescript
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

    // Load product data
    useEffect(() => {
        async function loadProduct() {
            const { id } = await params;
            setProductId(id);

            try {
                const response = await fetch(`/api/products/${id}`);
                if (!response.ok) throw new Error("Failed to fetch product");

                const product: Product = await response.json();

                reset({
                    name: product.name,
                    slug: product.slug,
                    price: product.price,
                    badge: product.badge || "none",
                    shortDescription: product.shortDescription,
                    description: product.description,
                    images: product.images || [product.image],
                    mainImageIndex: 0,
                    weight: product.specs?.weight || "",
                    harvestYear: product.specs?.harvestYear || "",
                    season: product.specs?.season || "",
                    tasteProfile: product.specs?.tasteProfile || "",
                    energy: product.nutrition?.energy || "",
                    carbs: product.nutrition?.carbs || "",
                    protein: product.nutrition?.protein || "",
                    sugars: product.nutrition?.sugars || "",
                    geographicalOrigin: product.apicultureNotes?.geographicalOrigin || "",
                    beekeeperNotes: product.apicultureNotes?.beekeeperNotes || "",
                });
            } catch (error) {
                console.error("Error loading product:", error);
                setSaveError("Impossible de charger le produit");
            } finally {
                setIsLoading(false);
            }
        }

        loadProduct();
    }, [params, reset]);

    const generateSlug = () => {
        const slug = productName
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");
        setValue("slug", slug, { shouldValidate: true });
    };

    const onSubmit = async (data: ProductSchemaType) => {
        setIsSaving(true);
        setSaveError(null);
        setSaveSuccess(false);

        try {
            const productData: Partial<Product> = {
                name: data.name,
                slug: data.slug,
                price: data.price,
                badge: data.badge === "none" ? undefined : data.badge,
                shortDescription: data.shortDescription,
                description: data.description,
                image: data.images[data.mainImageIndex],
                images: data.images,
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

            const response = await fetch(`/api/products/${productId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(productData),
            });

            if (!response.ok) throw new Error("Failed to save product");

            setSaveSuccess(true);
            reset(data);
            
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
            if (!confirm("Vous avez des modifications non sauvegardées. Voulez-vous vraiment quitter ?")) {
                return;
            }
        }
        router.push("/admin/produits");
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-lg text-text-muted dark:text-text-muted-light">
                    Chargement...
                </div>
            </div>
        );
    }

    return (
        <div className="flex-1 flex flex-col min-w-0">
            {/* Header sticky avec actions */}
            <header className="sticky top-0 z-30 bg-white/80 dark:bg-surface-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-border-dark">
                <div className="flex items-center justify-between px-6 py-4">
                    <div className="flex-1" />
                    <div className="flex items-center gap-3">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={handleCancel}
                            className="flex items-center gap-2"
                        >
                            <X className="w-4 h-4" />
                            Annuler
                        </Button>
                        <Button
                            type="submit"
                            form="product-edit-form"
                            variant="primary"
                            isLoading={isSaving}
                            className="flex items-center gap-2"
                        >
                            <Save className="w-4 h-4" />
                            {isSaving ? "Enregistrement..." : "Enregistrer"}
                        </Button>
                    </div>
                </div>
            </header>

            {/* Content scrollable */}
            <div className="p-6 lg:p-10 space-y-8 max-w-5xl mx-auto w-full">
                {/* Breadcrumbs */}
                <Breadcrumbs
                    items={[
                        { label: "Admin", href: "/admin" },
                        { label: "Produits", href: "/admin/produits" },
                        { label: "Modifier le Produit" },
                    ]}
                />

                {/* Page Heading */}
                <div className="space-y-4">
                    <div>
                        <h1 className="text-3xl font-bold text-text-main dark:text-text-light">
                            {productName || "Modifier le Produit"}
                        </h1>
                        <p className="text-text-muted dark:text-text-muted-light mt-2">
                            Mettez à jour les détails, images et spécifications de ce produit
                        </p>
                    </div>
                    <Button
                        variant="ghost"
                        onClick={() => router.push(`/nos-miels/${watch("slug")}`)}
                        className="flex items-center gap-2"
                    >
                        <ExternalLink className="w-4 h-4" />
                        Voir le produit public
                    </Button>
                </div>

                {/* Messages de succès/erreur */}
                {saveSuccess && (
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-800 dark:text-green-200">
                        ✓ Produit enregistré avec succès !
                    </div>
                )}
                {saveError && (
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-800 dark:text-red-200">
                        {saveError}
                    </div>
                )}

                {/* Form */}
                <form id="product-edit-form" onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    {/* Section 1: Informations Générales */}
                    <FormSection title="Informations Générales">
                        <ProductGeneralInfo
                            register={register}
                            errors={errors}
                            onGenerateSlug={generateSlug}
                        />
                    </FormSection>

                    {/* Section 2: Descriptions */}
                    <FormSection title="Descriptions">
                        <ProductDescriptions register={register} errors={errors} />
                    </FormSection>

                    {/* Section 3: Médias */}
                    <FormSection title="Médias du Produit">
                        <ProductMediaUpload
                            images={images}
                            mainImageIndex={mainImageIndex}
                            onImagesChange={(newImages) => setValue("images", newImages, { shouldValidate: true })}
                            onMainImageChange={(index) => setValue("mainImageIndex", index)}
                        />
                    </FormSection>

                    {/* Section 4: Spécifications */}
                    <FormSection title="Spécifications Techniques">
                        <ProductSpecs register={register} errors={errors} />
                    </FormSection>

                    {/* Section 5: Nutrition */}
                    <FormSection title="Tableau Nutritionnel">
                        <ProductNutrition register={register} errors={errors} />
                    </FormSection>

                    {/* Section 6: Notes d'Apiculture */}
                    <FormSection title="Notes d'Apiculture">
                        <ProductApiNotes register={register} errors={errors} />
                    </FormSection>

                    {/* Actions Bottom */}
                    <div className="flex items-center justify-end gap-3 pt-6 border-t border-slate-200 dark:border-border-dark">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={handleCancel}
                        >
                            Abandonner
                        </Button>
                        <Button
                            type="submit"
                            variant="primary"
                            isLoading={isSaving}
                        >
                            {isSaving ? "Enregistrement..." : "Enregistrer les modifications"}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
```

#### Step 16 Verification Checklist
- [ ] Aucune erreur TypeScript
- [ ] La page se charge à l'URL `/admin/produits/1`
- [ ] Les données du produit sont chargées depuis l'API
- [ ] Le formulaire est complet avec toutes les sections

#### Step 16 STOP & COMMIT
**STOP & COMMIT:** Agent must stop here and wait for the user to test, stage, and commit the change.

---

### Step 17: Test de l'application complète

- [ ] Démarrer le serveur de développement: `npm run dev`
- [ ] Naviguer vers `http://localhost:3000/admin/produits/1`
- [ ] Vérifier que la page se charge correctement
- [ ] Tester toutes les fonctionnalités:
  - [ ] Modification du nom du produit
  - [ ] Génération automatique du slug
  - [ ] Modification du prix et du badge
  - [ ] Édition des descriptions
  - [ ] Ajout/suppression d'images
  - [ ] Marquage d'une image comme principale
  - [ ] Modification des spécifications techniques
  - [ ] Modification du tableau nutritionnel
  - [ ] Modification des notes d'apiculture
  - [ ] Clic sur "Enregistrer" (vérifier dans `lib/data/products.json` que les données sont sauvegardées)
  - [ ] Clic sur "Annuler" (vérifier la confirmation si modifications non sauvegardées)
  - [ ] Clic sur "Voir le produit public" (redirige vers la page publique)
- [ ] Tester la validation:
  - [ ] Laisser le nom vide et soumettre (doit afficher une erreur)
  - [ ] Mettre un prix négatif (doit afficher une erreur)
- [ ] Vérifier le responsive design sur mobile, tablette, et desktop

#### Step 17 Verification Checklist
- [ ] Toutes les fonctionnalités fonctionnent correctement
- [ ] Les validations sont effectives
- [ ] Les données sont persistées dans le fichier JSON
- [ ] Le design est fidèle au mockup HTML
- [ ] Aucune erreur dans la console navigateur
- [ ] Le responsive fonctionne sur toutes les tailles d'écran

#### Step 17 STOP & COMMIT
**STOP & COMMIT:** Agent must stop here and wait for the user to test, stage, and commit the change.

---

## Finalisation

Félicitations ! Vous avez terminé l'intégration de la page d'édition de produit admin. 

### Prochaines étapes possibles

1. **Amélioration du système d'images:**
   - Implémenter un véritable système d'upload (ex: avec Cloudinary, AWS S3)
   - Ajouter la possibilité de drag & drop pour réorganiser les images

2. **Migration vers une vraie base de données:**
   - Remplacer le fichier JSON par une base de données (Prisma + PostgreSQL)
   - Créer les migrations et schémas appropriés

3. **Authentification:**
   - Protéger les routes admin avec un système d'authentification (NextAuth.js)
   - Vérifier les permissions avant de permettre les modifications

4. **Optimisations:**
   - Ajouter un système d'auto-save (sauvegarde automatique toutes les 30 secondes)
   - Implémenter l'optimistic UI pour une meilleure UX
   - Ajouter des animations de transition

5. **Tests:**
   - Ajouter des tests unitaires pour les composants
   - Ajouter des tests d'intégration pour le formulaire

---

**Feature Branch:** `feature/admin-product-edit-page`  
**Ready for:** Merge vers `main` ou `develop` après validation complète
