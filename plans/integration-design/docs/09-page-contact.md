# Étape 9 : Page Contact

## Goal
Implémenter le formulaire de contact, afficher les informations de contact et intégrer une carte de localisation.

## Fichiers à créer
- `app/contact/page.tsx`
- `components/forms/ContactForm.tsx`
- `app/api/contact/route.ts`

---

## Step-by-Step Instructions

### 9.1 Créer le composant ContactForm

- [ ] Créer le fichier `components/forms/ContactForm.tsx` :

```tsx
"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis";
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "L'email n'est pas valide";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Le sujet est requis";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Le message doit contenir au moins 10 caractères";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Success Message */}
      {submitStatus === "success" && (
        <div className="flex items-center gap-3 p-4 bg-accent/10 border border-accent/20 rounded-lg">
          <CheckCircle className="text-accent" size={20} />
          <p className="text-accent font-medium">
            Votre message a été envoyé avec succès !
          </p>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === "error" && (
        <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
          <AlertCircle className="text-red-500" size={20} />
          <p className="text-red-600 font-medium">
            Une erreur est survenue. Veuillez réessayer.
          </p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <Input
          id="name"
          name="name"
          label="Votre nom"
          placeholder="Jean Dupont"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
        />
        <Input
          id="email"
          name="email"
          type="email"
          label="Votre email"
          placeholder="jean@exemple.fr"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
        />
      </div>

      <Input
        id="subject"
        name="subject"
        label="Sujet"
        placeholder="Renseignement sur vos miels"
        value={formData.subject}
        onChange={handleChange}
        error={errors.subject}
        required
      />

      <Textarea
        id="message"
        name="message"
        label="Votre message"
        placeholder="Bonjour, je souhaiterais en savoir plus sur..."
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        required
      />

      <Button type="submit" size="lg" isLoading={isSubmitting} className="w-full">
        <Send size={18} />
        Envoyer le message
      </Button>
    </form>
  );
}
```

### 9.2 Créer l'API Route pour le contact

- [ ] Créer le fichier `app/api/contact/route.ts` :

```ts
import { NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();

    // Validation
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Email invalide" },
        { status: 400 }
      );
    }

    // TODO: Implement email sending logic here
    // For now, we'll just log the message and return success
    console.log("Contact form submission:", {
      name: body.name,
      email: body.email,
      subject: body.subject,
      message: body.message,
      timestamp: new Date().toISOString(),
    });

    // In production, you would:
    // 1. Send an email using a service like SendGrid, Resend, or Nodemailer
    // 2. Store the message in a database
    // 3. Send a confirmation email to the user

    return NextResponse.json(
      { success: true, message: "Message envoyé avec succès" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message" },
      { status: 500 }
    );
  }
}
```

### 9.3 Créer le fichier d'export des forms

- [ ] Créer le fichier `components/forms/index.ts` :

```ts
export { ContactForm } from "./ContactForm";
```

### 9.4 Créer la page Contact

- [ ] Créer le fichier `app/contact/page.tsx` :

```tsx
import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactForm } from "@/components/forms/ContactForm";
import { contactInfo } from "@/lib/data/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Le Rucher d'Ahmed pour toute question sur nos miels artisanaux, commander ou organiser une visite de nos ruchers en Charente.",
};

const contactDetails = [
  {
    icon: Phone,
    label: "Téléphone",
    value: contactInfo.phone,
    href: `tel:${contactInfo.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: `${contactInfo.address.street}, ${contactInfo.address.postalCode} ${contactInfo.address.city}`,
    href: null,
  },
  {
    icon: Clock,
    label: "Horaires",
    value: "Lun - Sam : 9h - 18h",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        badge="Nous contacter"
        title="Parlons de votre projet"
        description="Une question, une commande ou simplement envie d'en savoir plus ? N'hésitez pas à nous écrire, nous vous répondrons dans les plus brefs délais."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-background-light p-8 md:p-10 rounded-2xl border border-border-light">
                <h2 className="text-2xl font-bold text-text-main mb-2">
                  Envoyez-nous un message
                </h2>
                <p className="text-text-muted mb-8">
                  Remplissez le formulaire ci-dessous et nous vous répondrons
                  sous 24-48h.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="sticky top-28">
                <h2 className="text-2xl font-bold text-text-main mb-8">
                  Nos coordonnées
                </h2>

                <div className="space-y-6">
                  {contactDetails.map((detail) => (
                    <div key={detail.label} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                        <detail.icon size={22} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-text-main mb-1">
                          {detail.label}
                        </h3>
                        {detail.href ? (
                          <a
                            href={detail.href}
                            className="text-text-muted hover:text-primary transition-colors"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <p className="text-text-muted">{detail.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Info */}
                <div className="mt-10 p-6 bg-background-light rounded-xl border border-border-light">
                  <h3 className="font-bold text-text-main mb-3">
                    💡 Bon à savoir
                  </h3>
                  <ul className="space-y-2 text-sm text-text-muted">
                    <li>• Livraison gratuite à partir de 50€</li>
                    <li>• Retrait possible sur place sur RDV</li>
                    <li>• Visites de ruchers sur demande</li>
                    <li>• Commandes groupées avec réduction</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-bold uppercase tracking-wider">
              Localisation
            </span>
            <h2 className="text-3xl font-bold text-text-main mt-4 mb-4">
              Où nous trouver
            </h2>
            <p className="text-text-muted">
              Nos ruchers sont situés en Charente, dans un environnement naturel préservé.
            </p>
          </div>

          {/* Map */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-border-light shadow-sm">
            <iframe
              src={contactInfo.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation Le Rucher d'Ahmed"
              className="absolute inset-0"
            />
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-bold uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="text-3xl font-bold text-text-main mt-4 mb-4">
              Questions fréquentes
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Comment passer commande ?",
                answer:
                  "Vous pouvez passer commande directement via notre formulaire de contact ou par téléphone. Nous vous enverrons un devis personnalisé.",
              },
              {
                question: "Quels sont les délais de livraison ?",
                answer:
                  "Les commandes sont expédiées sous 24-48h. La livraison prend généralement 2-3 jours ouvrés en France métropolitaine.",
              },
              {
                question: "Peut-on visiter les ruchers ?",
                answer:
                  "Oui ! Nous organisons des visites sur rendez-vous, généralement le samedi. Contactez-nous pour réserver votre créneau.",
              },
            ].map((faq) => (
              <div
                key={faq.question}
                className="p-6 bg-background-light rounded-xl border border-border-light"
              >
                <h3 className="font-bold text-text-main mb-2">{faq.question}</h3>
                <p className="text-text-muted">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
```

---

## Step 9 Verification Checklist

- [ ] La page `/contact` s'affiche sans erreur
- [ ] Le formulaire de contact affiche :
  - [ ] Champs Nom, Email, Sujet, Message
  - [ ] Labels et placeholders corrects
  - [ ] Bouton "Envoyer le message"
- [ ] La validation du formulaire fonctionne :
  - [ ] Les champs vides affichent des erreurs
  - [ ] L'email invalide affiche une erreur
- [ ] La soumission du formulaire :
  - [ ] Affiche un loader pendant l'envoi
  - [ ] Affiche un message de succès après envoi
  - [ ] Vide les champs après succès
- [ ] Les coordonnées de contact sont affichées :
  - [ ] Téléphone cliquable
  - [ ] Email cliquable
  - [ ] Adresse
  - [ ] Horaires
- [ ] La carte Google Maps s'affiche
- [ ] La section FAQ affiche 3 questions/réponses

---

## Step 9 STOP & COMMIT

**STOP & COMMIT:** Arrêtez-vous ici et attendez que l'utilisateur teste, stage et committe le changement.

```bash
git add .
git commit -m "feat: implement Contact page with form and API route"
```
