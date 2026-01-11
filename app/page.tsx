import { Metadata } from "next";
import {
  HeroSection,
  FeaturesSection,
  ProductsGrid,
  StorySection,
  TestimonialsSection,
  CTASection,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Le Rucher d'Ahmed — Miels artisanaux",
  description: "Miels artisanaux récoltés avec soin en Charente — direct du producteur.",
  openGraph: {
    title: "Le Rucher d'Ahmed — Miels artisanaux",
    description: "Miels artisanaux récoltés avec soin en Charente — direct du producteur.",
    url: "https://lerucherdahmed.fr/",
    siteName: "Le Rucher d'Ahmed",
    images: [
      {
        url: "https://picsum.photos/seed/rucher/1200/630",
        width: 1200,
        height: 630,
        alt: "Le Rucher d'Ahmed",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Le Rucher d'Ahmed — Miels artisanaux",
    description: "Miels artisanaux récoltés avec soin en Charente — direct du producteur.",
    images: ["https://picsum.photos/seed/rucher/1200/630"],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ProductsGrid />
      <StorySection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
