"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const occasions = [
  { value: "mariage", label: "Mariage" },
  { value: "anniversaire", label: "Anniversaire" },
  { value: "deuil", label: "Deuil" },
  { value: "entreprise", label: "Entreprise / Événement" },
  { value: "autre", label: "Autre" },
];

export function ContactForm() {
  const [showToast, setShowToast] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const hideToast = useCallback(() => {
    setShowToast(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowToast(true);
    timeoutRef.current = setTimeout(() => setShowToast(false), 3000);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="space-y-5 rounded-2xl border border-blush/60 bg-white/70 p-6 shadow-sm md:p-8"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-ink/80"
          >
            Nom
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="mt-1.5 w-full rounded-xl border border-blush/70 bg-cream/50 px-4 py-3 text-ink outline-none transition-shadow focus:border-leaf focus:ring-2 focus:ring-leaf/25"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-ink/80"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-1.5 w-full rounded-xl border border-blush/70 bg-cream/50 px-4 py-3 text-ink outline-none transition-shadow focus:border-leaf focus:ring-2 focus:ring-leaf/25"
          />
        </div>
        <div>
          <label
            htmlFor="occasion"
            className="block text-sm font-medium text-ink/80"
          >
            Occasion
          </label>
          <select
            id="occasion"
            name="occasion"
            required
            className="mt-1.5 w-full rounded-xl border border-blush/70 bg-cream/50 px-4 py-3 text-ink outline-none transition-shadow focus:border-leaf focus:ring-2 focus:ring-leaf/25"
            defaultValue="mariage"
          >
            {occasions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-ink/80"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="mt-1.5 w-full resize-y rounded-xl border border-blush/70 bg-cream/50 px-4 py-3 text-ink outline-none transition-shadow focus:border-leaf focus:ring-2 focus:ring-leaf/25"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-full border border-leaf bg-leaf py-3 text-sm font-semibold text-cream transition-all duration-200 hover:border-gold hover:bg-gold hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf md:w-auto md:px-10"
        >
          Envoyer le message
        </button>
      </form>

      <div
        role="status"
        aria-live="polite"
        className={`fixed bottom-6 left-1/2 z-[100] -translate-x-1/2 rounded-full border border-leaf/30 bg-leaf px-6 py-3 text-sm font-medium text-cream shadow-lg transition-all duration-200 md:bottom-10 ${
          showToast
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        Message envoyé !
        <button
          type="button"
          className="ml-3 text-cream/90 underline-offset-2 hover:underline"
          onClick={hideToast}
        >
          Fermer
        </button>
      </div>
    </>
  );
}
