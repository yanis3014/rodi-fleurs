import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { DeliveryBadge } from "@/components/DeliveryBadge";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const siteUrl = new URL("https://thomasbouilhol.fr");

export const metadata: Metadata = {
  metadataBase: siteUrl,
  icons: {
    icon: "/favicon.svg",
  },
  title: {
    default: "Thomas Bouilhol — Maître fleuriste Vieux-Nice",
    template: "%s | Thomas Bouilhol",
  },
  description:
    "Thomas Bouilhol, maître fleuriste au cœur du Vieux-Nice : café floral, bouquets artisanaux, mariages et compositions sur mesure. 5 Rue de l'Ancien Sénat.",
  keywords: [
    "maître fleuriste Nice",
    "fleuriste Vieux-Nice",
    "Thomas Bouilhol",
    "bouquets artisanaux Nice",
    "café fleuriste Nice",
    "café floral Vieux-Nice",
    "fleurs et café Nice",
  ],
  authors: [{ name: "Thomas Bouilhol" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Thomas Bouilhol",
    title: "Thomas Bouilhol — Maître fleuriste Vieux-Nice",
    description:
      "Café floral et art floral au Vieux-Nice : compositions sur mesure, passion du métier depuis trois générations.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200&h=630&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "Composition florale — Thomas Bouilhol",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thomas Bouilhol — Maître fleuriste Vieux-Nice",
    description:
      "Un lieu unique : café et fleuriste au cœur du Vieux-Nice. Bouquets, mariages, plantes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${playfair.variable} min-h-screen bg-cream font-sans text-ink antialiased`}
      >
        <Navbar />
        <DeliveryBadge />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
