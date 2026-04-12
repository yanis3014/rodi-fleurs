import Link from "next/link";
import { SITE } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-blush/50 bg-cream/95 text-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        <div>
          <p className="font-display text-2xl text-leaf">{SITE.name}</p>
          <p className="mt-2 text-sm text-ink/75">{SITE.tagline}</p>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gold">
            Adresse
          </h2>
          <address className="mt-3 not-italic text-sm leading-relaxed text-ink/80">
            {SITE.address}
          </address>
          <p className="mt-4 text-sm text-ink/80">
            <a
              href={SITE.phoneHref}
              className="font-medium text-leaf underline-offset-4 transition-colors hover:text-gold hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf"
            >
              {SITE.phoneDisplay}
            </a>
          </p>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gold">
            Horaires
          </h2>
          <ul className="mt-3 space-y-1.5 text-sm text-ink/80">
            <li>Tous les jours</li>
            <li>Jusqu&apos;à 20h</li>
          </ul>
          <Link
            href="/contact"
            className="mt-4 inline-block text-sm font-medium text-leaf underline-offset-4 transition-colors hover:text-gold hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf"
          >
            Nous écrire
          </Link>
        </div>
      </div>
      <div className="border-t border-blush/40 py-4 text-center text-xs text-ink/55">
        © {new Date().getFullYear()} {SITE.name}
      </div>
    </footer>
  );
}
