import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Le Rucher d'Ahmed - Miel Artisanal 100% Naturel",
    template: "%s | Le Rucher d'Ahmed",
  },
  description:
    "Découvrez nos miels artisanaux 100% naturels, récoltés avec passion en Charente. Miel de lavande, acacia, châtaignier et bien plus.",
  keywords: [
    "miel artisanal",
    "miel naturel",
    "apiculture",
    "Charente",
    "miel local",
    "Le Rucher d'Ahmed",
  ],
  authors: [{ name: "Le Rucher d'Ahmed" }],
  creator: "Le Rucher d'Ahmed",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://lerucherdahmed.fr",
    siteName: "Le Rucher d'Ahmed",
    title: "Le Rucher d'Ahmed - Miel Artisanal 100% Naturel",
    description:
      "Découvrez nos miels artisanaux 100% naturels, récoltés avec passion en Charente.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${plusJakartaSans.variable} font-sans`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
