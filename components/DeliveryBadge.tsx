"use client";

import { useEffect, useState } from "react";

const MESSAGES = [
  "Au Bouquet de Nice · Fleuriste · 55 rue Bonaparte, 06300 Nice",
  "Ouvert Mar–Sam 8h30–19h15 · Dim 8h30–13h00 · Tél. 04 93 55 32 59",
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
