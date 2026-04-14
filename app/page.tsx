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
    title: "Événements",
    text: "Décorations florales pour vos réceptions, anniversaires et événements professionnels.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M8 7V3M16 7V3M3 11h18M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
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
            Nice · 55 rue Bonaparte
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl">
            Au Bouquet de Nice
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 drop-shadow md:text-xl">
            Votre fleuriste à Nice : bouquets artisanaux, compositions sur mesure
            pour vos mariages, anniversaires et toutes vos occasions.
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
            Du café floral aux grands événements, une même exigence : vous
            accueillir et sublimer vos moments.
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

      <section
        className="bg-blush/20 px-4 py-20 md:py-28"
        aria-labelledby="about-heading"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-gold">
              Notre boutique
            </p>
            <span className="mt-4 inline-flex rounded-full border border-gold/50 bg-cream/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
              55 rue Bonaparte, Nice
            </span>
            <h2
              id="about-heading"
              className="mt-5 font-display text-3xl text-leaf md:text-4xl"
            >
              Un fleuriste passionné au cœur de Nice
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/80 md:text-lg">
              Au Bouquet de Nice, nous sélectionnons chaque jour les plus belles
              fleurs pour créer des compositions qui vous ressemblent. Bouquets du
              quotidien, arrangements de mariage ou compositions de deuil —
              notre équipe vous accompagne avec soin.
            </p>
            <ul className="mt-8 space-y-3 text-ink/80">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span>Fleurs fraîches renouvelées chaque jour</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span>Compositions sur mesure pour tous les budgets</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span>Ouvert du mardi au dimanche</span>
              </li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-blush/60 shadow-lg lg:aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=1200&q=80"
              alt="Boutique Au Bouquet de Nice"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
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
              Avis Google · Mar–Sam 8h30–19h15 · Dim 8h30–13h00
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
