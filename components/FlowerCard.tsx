import Image from "next/image";
import type { Creation } from "@/lib/data";
import { CATEGORY_LABELS } from "@/lib/data";

type Props = {
  creation: Creation;
};

export function FlowerCard({ creation }: Props) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-blush/50 bg-white/60 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-lg">
      <div className="relative aspect-[4/5] overflow-hidden bg-blush/20">
        <Image
          src={creation.imageUrl}
          alt={creation.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
        />
        <span className="absolute left-3 top-3 rounded-full bg-cream/90 px-3 py-1 text-xs font-medium text-leaf backdrop-blur-sm">
          {CATEGORY_LABELS[creation.category]}
        </span>
      </div>
      <div className="flex flex-col gap-1 px-4 py-4">
        <h3 className="font-display text-lg text-ink">{creation.name}</h3>
        <p className="text-sm font-semibold text-gold">{creation.priceLabel}</p>
        <p className="text-xs text-ink/55">Prix indicatif</p>
      </div>
    </article>
  );
}
