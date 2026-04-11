"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/data";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/creations", label: "Créations" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-[border-color,background-color,box-shadow] duration-200 ${
        scrolled
          ? "border-b border-blush/60 bg-cream/85 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-cream/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:py-4">
        <Link
          href="/"
          className="font-display text-xl tracking-tight text-leaf transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf md:text-2xl"
          onClick={() => setOpen(false)}
        >
          {SITE.name}
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Navigation principale"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink/80 transition-colors hover:text-leaf focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={SITE.phoneHref}
            className="rounded-full border border-leaf bg-leaf px-4 py-2 text-sm font-semibold text-cream transition-all duration-200 hover:border-gold hover:bg-gold hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf"
          >
            Appeler
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={SITE.phoneHref}
            className="rounded-full border border-leaf px-3 py-1.5 text-xs font-semibold text-leaf transition-colors hover:bg-leaf hover:text-cream"
          >
            Appeler
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-blush/80 text-leaf transition-colors hover:bg-blush/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            {open ? (
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-blush/50 bg-cream/98 px-4 py-4 md:hidden"
        >
          <nav className="flex flex-col gap-3" aria-label="Menu mobile">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-lg px-2 py-2 text-base font-medium text-ink transition-colors hover:bg-blush/40 hover:text-leaf"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
