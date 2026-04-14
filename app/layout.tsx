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

const siteUrl = new URL("https://aubouquetdenice.fr");

export const metadata: Metadata = {
  metadataBase: siteUrl,
  icons: {
    icon: "/favicon.svg",
  },
  title: {
    default: "Au Bouquet de Nice — Fleuriste Nice",
    template: "%s | Au Bouquet de Nice",
  },
  description:
    "Au Bouquet de Nice, votre fleuriste au 55 rue Bonaparte, Nice : bouquets artisanaux, mariages, deuils et compositions sur mesure. Ouvert du mardi au dimanche.",
  keywords: [
    "fleuriste Nice",
    "bouquets Nice",
    "Au Bouquet de Nice",
    "fleurs Nice",
    "bouquets artisanaux Nice",
    "mariage fleurs Nice",
    "fleuriste rue Bonaparte Nice",
  ],
  authors: [{ name: "Au Bouquet de Nice" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Au Bouquet de Nice",
    title: "Au Bouquet de Nice — Fleuriste Nice",
    description:
      "Bouquets artisanaux, mariages et compositions sur mesure au 55 rue Bonaparte, Nice.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200&h=630&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "Composition florale — Au Bouquet de Nice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Au Bouquet de Nice — Fleuriste Nice",
    description:
      "Votre fleuriste à Nice : bouquets, mariages, plantes et compositions sur mesure. 55 rue Bonaparte.",
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
