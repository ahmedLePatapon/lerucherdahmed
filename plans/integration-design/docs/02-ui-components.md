# Étape 2 : Composants UI de base

## Goal
Créer les composants UI génériques réutilisables avec variantes et props TypeScript typés.

## Fichiers à créer
- `components/ui/Button.tsx`
- `components/ui/Badge.tsx`
- `components/ui/Input.tsx`
- `components/ui/Card.tsx`
- `components/ui/index.ts`

---

## Step-by-Step Instructions

### 2.1 Créer le composant Button

- [x] Créer le fichier `components/ui/Button.tsx` :

```tsx
import { forwardRef, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-bold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/20",
      secondary:
        "bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/20",
      outline:
        "bg-transparent border-2 border-text-main hover:border-primary text-text-main hover:text-primary",
      ghost:
        "bg-transparent hover:bg-primary/10 text-text-main hover:text-primary",
    };

    const sizes = {
      sm: "h-10 px-4 text-sm gap-2",
      md: "h-12 px-6 text-base gap-2",
      lg: "h-14 px-8 text-base gap-3",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
```

### 2.2 Créer le composant Badge

- [x] Créer le fichier `components/ui/Badge.tsx` :

```tsx
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "accent" | "intense" | "new" | "outline";
}

function Badge({ className, variant = "primary", children, ...props }: BadgeProps) {
  const variants = {
    primary: "bg-primary text-white",
    accent: "bg-accent text-white",
    intense: "bg-[#5D4037] text-white border border-white/20",
    new: "bg-accent text-white",
    outline: "bg-transparent border border-primary text-primary",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { Badge };
```

### 2.3 Créer le composant Input

- [x] Créer le fichier `components/ui/Input.tsx` :

```tsx
import { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label
            htmlFor={id}
            className="text-text-main text-sm font-semibold"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={cn(
            "w-full rounded-lg border border-border-light bg-white h-12 px-4",
            "text-base text-text-main placeholder:text-text-muted/50",
            "focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary",
            "transition-all duration-200",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500",
            className
          )}
          {...props}
        />
        {error && (
          <span className="text-red-500 text-sm">{error}</span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
```

### 2.4 Créer le composant Textarea

- [x] Créer le fichier `components/ui/Textarea.tsx` :

```tsx
import { forwardRef, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label
            htmlFor={id}
            className="text-text-main text-sm font-semibold"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={id}
          className={cn(
            "w-full rounded-lg border border-border-light bg-white min-h-[160px] p-4",
            "text-base text-text-main placeholder:text-text-muted/50",
            "focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary",
            "transition-all duration-200 resize-y",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500",
            className
          )}
          {...props}
        />
        {error && (
          <span className="text-red-500 text-sm">{error}</span>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
```

### 2.5 Créer le composant Card

- [x] Créer le fichier `components/ui/Card.tsx` :

```tsx
import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "hover" | "dark";
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    const variants = {
      default: "bg-white border border-border-light",
      hover:
        "bg-white border border-border-light hover:border-primary/50 card-hover",
      dark: "bg-surface-dark border border-white/5",
    };

    return (
      <div
        ref={ref}
        className={cn("rounded-2xl overflow-hidden", variants[variant], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pb-0", className)} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardContent, CardFooter };
```

### 2.6 Créer l'utilitaire cn()

- [x] Créer le fichier `lib/utils.ts` :

```ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### 2.7 Installer les dépendances pour cn()

- [x] Exécuter la commande :

```bash
npm install clsx tailwind-merge
```

### 2.8 Créer le fichier d'export index

- [x] Créer le fichier `components/ui/index.ts` :

```ts
export { Button } from "./Button";
export type { ButtonProps } from "./Button";

export { Badge } from "./Badge";
export type { BadgeProps } from "./Badge";

export { Input } from "./Input";
export type { InputProps } from "./Input";

export { Textarea } from "./Textarea";
export type { TextareaProps } from "./Textarea";

export { Card, CardHeader, CardContent, CardFooter } from "./Card";
export type { CardProps } from "./Card";
```

---

## Step 2 Verification Checklist

- [ ] Pas d'erreurs TypeScript (`npm run build` ou IDE)
- [ ] Import test : ajouter temporairement dans `app/page.tsx` :

```tsx
import { Button, Badge, Input, Card } from "@/components/ui";

// Dans le JSX de test :
<div className="p-8 space-y-4">
  <Button variant="primary">Primary Button</Button>
  <Button variant="outline">Outline Button</Button>
  <Badge variant="primary">Best-seller</Badge>
  <Badge variant="accent">Nouveau</Badge>
  <Input label="Votre nom" placeholder="Jean Dupont" />
  <Card variant="hover" className="p-6">
    <p>Test Card</p>
  </Card>
</div>
```

- [ ] Les boutons affichent les bonnes couleurs (jaune #F2B705)
- [ ] Les badges sont correctement stylés

---

## Step 2 STOP & COMMIT

**STOP & COMMIT:** Arrêtez-vous ici et attendez que l'utilisateur teste, stage et committe le changement.

```bash
git add .
git commit -m "feat: add base UI components (Button, Badge, Input, Card)"
```
