export type CreationCategory = "bouquets" | "mariages" | "plantes" | "deuils";

export const CATEGORY_LABELS: Record<CreationCategory, string> = {
  bouquets: "Bouquets",
  mariages: "Mariages",
  plantes: "Plantes",
  deuils: "Deuils",
};

export type Creation = {
  id: string;
  name: string;
  priceEur: number;
  priceLabel: string;
  category: CreationCategory;
  imageUrl: string;
};

export const creations: Creation[] = [
  {
    id: "1",
    name: "Bouquet Côte d'Azur",
    priceEur: 45,
    priceLabel: "45 €",
    category: "bouquets",
    imageUrl:
      "/bouquet/bouquet-1.jpg",
  },
  {
    id: "2",
    name: "Composition Mariage Blanc",
    priceEur: 120,
    priceLabel: "120 €",
    category: "mariages",
    imageUrl:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
  },
  {
    id: "3",
    name: "Bouquet Romantique Roses",
    priceEur: 65,
    priceLabel: "65 €",
    category: "bouquets",
    imageUrl:
      "/bouquet/bouquet-2.jpg",
  },
  {
    id: "4",
    name: "Plante Monstera Premium",
    priceEur: 38,
    priceLabel: "38 €",
    category: "plantes",
    imageUrl:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=800&q=80",
  },
  {
    id: "5",
    name: "Gerbe Deuil Élégance",
    priceEur: 95,
    priceLabel: "95 €",
    category: "deuils",
    imageUrl:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80",
  },
  {
    id: "6",
    name: "Centre de table Provence",
    priceEur: 85,
    priceLabel: "85 €",
    category: "mariages",
    imageUrl:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
  },
  {
    id: "7",
    name: "Bouquet Champêtre du Mercantour",
    priceEur: 52,
    priceLabel: "52 €",
    category: "bouquets",
    imageUrl:
      "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=800&q=80",
  },
  {
    id: "8",
    name: "Orchidée Phalaenopsis Blanc",
    priceEur: 48,
    priceLabel: "48 €",
    category: "plantes",
    imageUrl:
      "/bouquet/bouquet-3.jpg",
  },
  {
    id: "9",
    name: "Couronne Deuil Pureté",
    priceEur: 110,
    priceLabel: "110 €",
    category: "deuils",
    imageUrl:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
  },
  {
    id: "10",
    name: "Arche florale Mariage",
    priceEur: 380,
    priceLabel: "380 €",
    category: "mariages",
    imageUrl:
      "/bouquet/bouquet-4.jpg",
  },
  {
    id: "11",
    name: "Bouquet Tulipes Printanières",
    priceEur: 42,
    priceLabel: "42 €",
    category: "bouquets",
    imageUrl:
      "/bouquet/bouquet-5.jpg",
  },
  {
    id: "12",
    name: "Composition Succulentes & Fleurs",
    priceEur: 35,
    priceLabel: "35 €",
    category: "plantes",
    imageUrl:
      "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=800&q=80",
  },
];

export type GoogleReview = {
  id: string;
  author: string;
  text: string;
  date: string;
};

export const googleReviews: GoogleReview[] = [
  {
    id: "r1",
    author: "Fabienne M.",
    text: "Des fleurs toujours fraîches et des conseils précieux pour ma déco de table. Une adresse incontournable sur Nice.",
    date: "Janvier 2025",
  },
  {
    id: "r2",
    author: "Marc-Antoine L.",
    text: "Bouquet livré le jour même pour l’anniversaire de ma mère — sublime et parfum délicat. Merci Rodi Fleurs !",
    date: "Décembre 2024",
  },
  {
    id: "r3",
    author: "Stéphanie R.",
    text: "Mariage réussi grâce à leurs compositions : élégance et discrétion. On se sent vraiment accompagnés.",
    date: "Novembre 2024",
  },
  {
    id: "r4",
    author: "Jean-Pierre T.",
    text: "Accueil chaleureux au magasin, prix honnêtes. Le bouquet « Côte d’Azur » est devenu notre classique du dimanche.",
    date: "Octobre 2024",
  },
  {
    id: "r5",
    author: "Angélique C.",
    text: "Pour un deuil, tout était traité avec beaucoup de tact et de professionnalisme. Gerbe magnifique et livrée à l’heure.",
    date: "Septembre 2024",
  },
];

export const SITE = {
  name: "Rodi Fleurs",
  tagline: "Artisan fleuriste à Nice",
  address: "30 Bd Pierre Sola, 06300 Nice",
  phoneDisplay: "+33 4 93 89 37 36",
  phoneHref: "tel:+33493893736",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=30+Boulevard+Pierre+Sola,+06300+Nice,+France&hl=fr&z=16&ie=UTF8&iwloc=B&output=embed",
} as const;
