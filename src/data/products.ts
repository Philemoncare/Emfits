export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  keywords?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Phreshy Multipurpose Liquid Soap",
    price: 60.0,
    image: "/images/gallon2.png",
    category: "Liquid Detergents",
    description: "multipurpose liquid soap for hands, dishes, and floors. Gentle on skin, tough on grease.",
    keywords: ["phreshy", "soap", "wash", "cleaning", "liquid", "multipurpose"]
  },
  {
    id: 2,
    name: "Phreshy Zone Bleach",
    price: 20.0,
    image: "/images/weo.png",
    category: "Washing Powders",
    description: "Scientific deep-fiber cleaning powder that eliminates tough grime while whitening whites.",
    keywords: ["phreshy", "soap", "wash", "clothes", "cleaning", "laundry", "powder"]
  },
  {
    id: 3,
    name: "Phreshy Fabric Softener",
    price: 30.0,
    image: "/images/phr.png",
    category: "Liquid Detergents",
    description: "Anti-static fabric conditioning that leaves clothes velvety soft with a long-lasting floral scent.",
    keywords: ["phreshy", "fabric", "softener", "laundry", "scent", "fragrance"]
  },
  {
    id: 4,
    name: "Phreshy Floor Cleaner",
    price: 100.0,
    image: "/images/gallon.png",
    category: "Surface Care",
    description: "Sparkling clean floors with a long-lasting fresh fragrance. Ideal for all types of floors.",
    keywords: ["phreshy", "surface", "tiles", "floor", "cleaner", "multi"]
  },
  {
    id: 5,
    name: "Phreshy Disinfectant",
    price: 25.0,
    image: "/images/ged.png",
    category: "Surface Care",
    description: "Blast away every germ. High-concentration disinfectant for deep hygiene and a pure, germ-free environment.",
    keywords: ["phreshy", "disinfectant", "germs", "bacteria", "clean", "hygiene"]
  },
  {
    id: 7,
    name: "Phreshy Aloe Hand Wash",
    price: 18.0,
    image: "/images/wesksd.jpg",
    category: "Personal Hygiene",
    description: "Anti-microbial hand hygiene enriched with pure Aloe Vera extracts for soft, healthy hands.",
    keywords: ["phreshy", "hand", "wash", "soap", "aloe", "hygiene", "skin"]
  },
];

export const categories = [
  { name: "Liquid Detergents", image: "/images/gallon2.png" },
  { name: "Washing Powders", image: "/images/weo.png" },
  { name: "Surface Care", image: "/images/gallon.png" },
  { name: "Personal Hygiene", image: "/images/wesksd.jpg" },
];
