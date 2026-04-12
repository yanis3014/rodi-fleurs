"use client";

import { useEffect, useState } from "react";

const MESSAGES = [
  "Maître Fleuriste & Café Floral · Vieux-Nice · 5 Rue de l'Ancien Sénat",
  "Maître Fleuriste — 5 Rue de l'Ancien Sénat, Vieux-Nice · Ouvert 7j/7",
] as const;

export function DeliveryBadge() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % MESSAGES.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="border-b border-blush/60 bg-blush/30 text-center text-sm text-leaf transition-colors">
      <p className="mx-auto max-w-4xl px-4 py-2 font-medium tracking-wide">
        {MESSAGES[index]}
      </p>
    </div>
  );
}
