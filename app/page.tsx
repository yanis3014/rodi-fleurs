import Image from "next/image";
import Link from "next/link";
import { CreationsGrid } from "@/components/CreationsGrid";
import { googleReviews, SITE } from "@/lib/data";

const services = [
  {
    title: "Bouquets",
    text: "Compositions sur mesure pour chaque instant : naissance, anniversaire, merci ou simplement pour le plaisir.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 22c-4-4-6-8-6-12a6 6 0 1112 0c0 4-2 8-6 12z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M12 10V6M9 8l3-2 3 2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Mariages",
    text: "Bouquets de mariée, arches végétales et centres de table — une esthétique raffinée pour votre grand jour.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M5 21h14M12 15v6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Deuils",
    text: "Gerbes, coussins et compositions discrètes, réalisées avec respect et sensibilité.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 21s-5-4.5-5-9a5 5 0 0110 0c0 4.5-5 9-5 9z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M12 12v-3M9 10h6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Livraison J+0",
    text: "Sur Nice et proches communes, votre commande préparée avec soin et livrée le jour même.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M3 7h11v10H3V7zM14 10h4l3 3v4h-7V10z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="7.5" cy="18" r="1.5" fill="currentColor" />
        <circle cx="17.5" cy="18" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
];

function Stars() {
  return (
    <span className="flex gap-0.5 text-gold" aria-label="5 sur 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </span>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[100dvh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero/hero-rodi-fleurs.jpg"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"
            aria-hidden
          />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-4xl flex-col items-center justify-center px-4 pb-20 pt-28 text-center md:pb-24 md:pt-32">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold drop-shadow-lg">
            Nice · Côte d&apos;Azur
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl">
            Rodi Fleurs — Artisan Fleuriste à Nice
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 drop-shadow md:text-xl">
            Des fleurs choisies avec exigence, des mains expertes et le goût du
            détail. Faites confiance à notre maison pour sublimer vos moments les
            plus précieux.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/creations"
              className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-leaf bg-leaf px-8 py-3.5 text-sm font-semibold text-cream shadow-lg transition-all duration-200 hover:border-gold hover:bg-gold hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Découvrir nos créations
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-white/70 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white shadow-lg backdrop-blur-sm transition-all duration-200 hover:border-cream hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Nous appeler
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl text-leaf md:text-4xl">
            Nos services
          </h2>
          <p className="mt-3 text-ink/70">
            Une équipe passionnée pour vous accompagner, du premier conseil à la
            livraison.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-blush/50 bg-white/60 p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-gold/35 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blush/50 text-leaf">
                {s.icon}
              </div>
              <h3 className="mt-4 font-display text-xl text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-gold">
            Galerie
          </p>
          <h2 className="mt-3 font-display text-3xl text-leaf md:text-4xl">
            Nos créations
          </h2>
          <p className="mt-3 text-ink/70">
            Un aperçu de nos compositions : filtrez par catégorie ou parcourez
            toute la sélection sur la page dédiée.
          </p>
        </div>
        <div className="mt-12">
          <CreationsGrid />
        </div>
        <p className="mt-12 text-center">
          <Link
            href="/creations"
            className="inline-flex items-center justify-center rounded-full border border-leaf bg-transparent px-8 py-3 text-sm font-semibold text-leaf transition-colors hover:bg-leaf hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf"
          >
            Voir toute la galerie
          </Link>
        </p>
      </section>

      <section className="border-t border-blush/40 bg-white/40 px-4 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl text-leaf md:text-4xl">
              Ils nous font confiance
            </h2>
            <p className="mt-3 text-sm text-ink/60">
              Avis Google · démonstration (données fictives)
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {googleReviews.slice(0, 3).map((r) => (
              <article
                key={r.id}
                className="rounded-2xl border border-blush/50 bg-cream/80 p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <Stars />
                <p className="mt-3 text-sm leading-relaxed text-ink/85">
                  &ldquo;{r.text}&rdquo;
                </p>
                <p className="mt-4 text-sm font-semibold text-leaf">{r.author}</p>
                <p className="text-xs text-ink/50">{r.date}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {googleReviews.slice(3).map((r) => (
              <article
                key={r.id}
                className="rounded-2xl border border-blush/50 bg-cream/80 p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <Stars />
                <p className="mt-3 text-sm leading-relaxed text-ink/85">
                  &ldquo;{r.text}&rdquo;
                </p>
                <p className="mt-4 text-sm font-semibold text-leaf">{r.author}</p>
                <p className="text-xs text-ink/50">{r.date}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      
    </>
  );
}
