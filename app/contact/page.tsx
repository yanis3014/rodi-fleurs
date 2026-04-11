import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Rodi Fleurs à Nice — 30 Bd Pierre Sola. Horaires, téléphone et formulaire.",
  openGraph: {
    title: "Contact | Rodi Fleurs",
    description: "Écrivez-nous ou passez nous voir au cœur de Nice.",
  },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <header className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-gold">
          Contact
        </p>
        <h1 className="mt-3 font-display text-4xl text-leaf md:text-5xl">
          Parlons de votre projet
        </h1>
        <p className="mt-4 text-ink/75">
          Une question, un devis, une urgence florale ? Laissez-nous un message —
          nous vous répondrons dans la journée.
        </p>
      </header>

      <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <ContactForm />

        <div className="space-y-8">
          <div className="rounded-2xl border border-blush/60 bg-white/70 p-6 shadow-sm md:p-8">
            <h2 className="font-display text-xl text-leaf">Horaires</h2>
            <ul className="mt-4 space-y-2 text-sm text-ink/80">
              <li>
                <span className="font-medium text-ink">Lundi</span> : fermé
              </li>
              <li>
                <span className="font-medium text-ink">Mardi – Samedi</span> :
                7h30 – 19h30
              </li>
              <li>
                <span className="font-medium text-ink">Dimanche</span> : 8h00 –
                12h30
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-blush/60 bg-white/70 p-6 shadow-sm md:p-8">
            <h2 className="font-display text-xl text-leaf">Téléphone</h2>
            <p className="mt-3 text-sm text-ink/75">
              <a
                href={SITE.phoneHref}
                className="text-lg font-semibold text-leaf underline-offset-4 transition-colors hover:text-gold hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf"
              >
                {SITE.phoneDisplay}
              </a>
            </p>
            <p className="mt-2 text-sm text-ink/60">{SITE.address}</p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-blush/60 shadow-sm">
            <iframe
              title="Rodi Fleurs sur Google Maps"
              src={SITE.mapsEmbedUrl}
              className="aspect-video h-[280px] w-full md:h-[320px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}
