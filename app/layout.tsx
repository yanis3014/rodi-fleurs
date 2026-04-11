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

const siteUrl = new URL("https://rodifleurs.fr");

export const metadata: Metadata = {
  metadataBase: siteUrl,
  icons: {
    icon: "/favicon.svg",
  },
  title: {
    default: "Rodi Fleurs — Artisan fleuriste à Nice",
    template: "%s | Rodi Fleurs",
  },
  description:
    "Fleuriste artisan à Nice : bouquets sur mesure, mariages, deuils et livraison le jour même. 30 Bd Pierre Sola.",
  keywords: [
    "fleuriste Nice",
    "bouquets Nice",
    "mariage fleurs Nice",
    "livraison fleurs",
    "Rodi Fleurs",
  ],
  authors: [{ name: "Rodi Fleurs" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Rodi Fleurs",
    title: "Rodi Fleurs — Artisan fleuriste à Nice",
    description:
      "Compositions florales d’exception, conseil personnalisé et livraison le jour même sur Nice.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200&h=630&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "Composition florale Rodi Fleurs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rodi Fleurs — Artisan fleuriste à Nice",
    description:
      "Bouquets, mariages, deuils et plantes — votre fleuriste au cœur de Nice.",
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
