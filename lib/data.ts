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
    name: "Bouquets soleil",
    priceEur: 45,
    priceLabel: "45 €",
    category: "bouquets",
    imageUrl:
      "/bouquet/bouquet-1.jpg",
  },
  {
    id: "2",
    name: "Roses rouges passion",
    priceEur: 65,
    priceLabel: "65 €",
    category: "bouquets",
    imageUrl:
      "/bouquet/bouquet-2.jpg",
  },
  {
    id: "3",
    name: "Bouquet Vieux-Nice",
    priceEur: 55,
    priceLabel: "55 €",
    category: "bouquets",
    imageUrl:
      "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=800&q=80",
  },
  {
    id: "4",
    name: "Composition Mariage Blanc",
    priceEur: 130,
    priceLabel: "130 €",
    category: "mariages",
    imageUrl:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
  },
  {
    id: "5",
    name: "Bouquet de Mariée Méditerranée",
    priceEur: 180,
    priceLabel: "180 €",
    category: "mariages",
    imageUrl:
      "/bouquet/bouquet-3.jpg",
  },
  {
    id: "6",
    name: "Centre de table Mariage",
    priceEur: 95,
    priceLabel: "95 €",
    category: "mariages",
    imageUrl:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
  },
  {
    id: "7",
    name: "Plante Monstera XL",
    priceEur: 48,
    priceLabel: "48 €",
    category: "plantes",
    imageUrl:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=800&q=80",
  },
  {
    id: "8",
    name: "Cactus collection",
    priceEur: 28,
    priceLabel: "28 €",
    category: "plantes",
    imageUrl:
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800&q=80",
  },
  {
    id: "9",
    name: "Orchidée double tige",
    priceEur: 42,
    priceLabel: "42 €",
    category: "plantes",
    imageUrl:
      "/bouquet/bouquet-4.jpg",
  },
  {
    id: "10",
    name: "Gerbe Deuil Dignité",
    priceEur: 110,
    priceLabel: "110 €",
    category: "deuils",
    imageUrl:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80",
  },
  {
    id: "11",
    name: "Couronne Deuil",
    priceEur: 90,
    priceLabel: "90 €",
    category: "deuils",
    imageUrl:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
  },
  {
    id: "12",
    name: "Composition Deuil Élégance",
    priceEur: 85,
    priceLabel: "85 €",
    category: "deuils",
    imageUrl:
      "/bouquet/bouquet-5.jpg",
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
    author: "Élodie V.",
    text: "Un rapport qualité-prix rare pour un maître fleuriste : compositions généreuses, tenue impeccable. Le café en terrasse après le choix du bouquet, c’est un vrai moment.",
    date: "Janvier 2025",
  },
  {
    id: "r2",
    author: "Laurent P.",
    text: "On sent la passion du métier et l’amour des familles qui tiennent ce lieu depuis des générations. Conseils sincères, zéro gaspillage, fleurs ultra fraîches.",
    date: "Décembre 2024",
  },
  {
    id: "r3",
    author: "Camille R.",
    text: "Adresse secrète du Vieux-Nice : café floral adorable, équipe aux petits soins. J’y viens avec mes enfants le week-end — accueil chaleureux à chaque fois.",
    date: "Novembre 2024",
  },
  {
    id: "r4",
    author: "Michel T.",
    text: "Pour le mariage de ma fille, Thomas a su capturer l’esprit méditerranéen qu’on voulait. Professionnalisme, écoute, et des prix clairs dès le premier rendez-vous.",
    date: "Octobre 2024",
  },
  {
    id: "r5",
    author: "Sandra B.",
    text: "Moment difficile en famille : ils ont tout géré avec dignité et douceur. La gerbe était à la hauteur de notre attente — merci pour ce respect du deuil.",
    date: "Septembre 2024",
  },
];

export const SITE = {
  name: "Thomas Bouilhol",
  tagline: "Maître Fleuriste au cœur du Vieux-Nice",
  address: "5 Rue de l'Ancien Sénat, 06300 Nice, France",
  phoneDisplay: "+33 6 64 06 24 22",
  phoneHref: "tel:+33664062422",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=5+Rue+de+l%27Ancien+S%C3%A9nat,+06300+Nice,+France&hl=fr&z=17&ie=UTF8&iwloc=B&output=embed",
} as const;
