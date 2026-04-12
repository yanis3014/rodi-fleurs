import type { Metadata } from "next";
import { CreationsGrid } from "@/components/CreationsGrid";

export const metadata: Metadata = {
  title: "Nos créations",
  description:
    "Galerie Thomas Bouilhol : bouquets, mariages, plantes et hommages au Vieux-Nice — prix indicatifs.",
  openGraph: {
    title: "Nos créations | Thomas Bouilhol",
    description:
      "Découvrez une sélection de compositions florales signées Thomas Bouilhol, maître fleuriste.",
  },
};

export default function CreationsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <header className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-gold">
          Galerie
        </p>
        <h1 className="mt-3 font-display text-4xl text-leaf md:text-5xl">
          Nos créations
        </h1>
        <p className="mt-4 text-ink/75">
          Un aperçu de nos réalisations : chaque commande est unique et peut être
          adaptée à vos couleurs, votre budget et l&apos;occasion.
        </p>
      </header>
      <div className="mt-14">
        <CreationsGrid />
      </div>
    </div>
  );
}
