"use client";

import { useMemo, useState } from "react";
import {
  CATEGORY_LABELS,
  creations,
  type CreationCategory,
} from "@/lib/data";
import { FlowerCard } from "@/components/FlowerCard";

const filters: { id: "all" | CreationCategory; label: string }[] = [
  { id: "all", label: "Tous" },
  { id: "bouquets", label: CATEGORY_LABELS.bouquets },
  { id: "mariages", label: CATEGORY_LABELS.mariages },
  { id: "plantes", label: CATEGORY_LABELS.plantes },
  { id: "deuils", label: CATEGORY_LABELS.deuils },
];

export function CreationsGrid() {
  const [category, setCategory] = useState<"all" | CreationCategory>("all");

  const filtered = useMemo(
    () =>
      category === "all"
        ? creations
        : creations.filter((c) => c.category === category),
    [category],
  );

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        {filters.map((f) => {
          const active = category === f.id;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setCategory(f.id)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf ${
                active
                  ? "border-leaf bg-leaf text-cream shadow-sm"
                  : "border-blush/80 bg-white/70 text-ink/75 hover:border-gold/50 hover:text-leaf"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((c) => (
          <FlowerCard key={c.id} creation={c} />
        ))}
      </div>
    </div>
  );
}
