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
    name: "Phreshy Liquid Soap",
    price: 45.0,
    image: "/images/gallon.png",
    category: "Liquid Detergents",
    description: "Premium multipurpose liquid soap for hands, dishes, and floors. Gentle on skin, tough on grease.",
    keywords: ["phreshy", "soap", "wash", "cleaning", "liquid", "multipurpose"]
  },
  {
    id: 2,
    name: "Phreshy Washing Powder",
    price: 35.0,
    image: "/images/photo_2026-06-15_09-28-45.jpg",
    category: "Washing Powders",
    description: "Scientific deep-fiber cleaning powder that eliminates tough grime while whitening whites.",
    keywords: ["phreshy", "soap", "wash", "clothes", "cleaning", "laundry", "powder"]
  },
  {
    id: 3,
    name: "Phreshy Fabric Softener",
    price: 28.0,
    image: "/images/photo_2026-06-15_09-28-49.jpg",
    category: "Liquid Detergents",
    description: "Anti-static fabric conditioning that leaves clothes velvety soft with a long-lasting floral scent.",
    keywords: ["phreshy", "fabric", "softener", "laundry", "scent", "fragrance"]
  },
  {
    id: 4,
    name: "Phreshy Floor Cleaner",
    price: 22.0,
    image: "/images/ldlfs.jpg",
    category: "Surface Care",
    description: "Sparkling clean floors with a long-lasting fresh fragrance. Ideal for all types of floors.",
    keywords: ["phreshy", "surface", "tiles", "floor", "cleaner", "multi"]
  },
  {
    id: 5,
    name: "Phreshy Disinfectant",
    price: 25.0,
    image: "/images/dwes.jpg",
    category: "Surface Care",
    description: "Eliminates 99.9% of germs and household bacteria with a long-lasting forest pine aroma.",
    keywords: ["phreshy", "disinfectant", "germs", "bacteria", "pine", "aroma"]
  },
  {
    id: 6,
    name: "Phreshy Dishwashing Liquid",
    price: 15.0,
    image: "/images/photo_2026-06-15_09-29-02.jpg",
    category: "Liquid Detergents",
    description: "Rapid grease-cutting technology for spotlessly clean dishes. Gentle on skin, tough on oil.",
    keywords: ["phreshy", "dishes", "grease", "oil", "soap", "kitchen", "liquid"]
  },
  {
    id: 7,
    name: "Phreshy Aloe Hand Wash",
    price: 18.0,
    image: "/images/safw.jpg",
    category: "Personal Hygiene",
    description: "Anti-microbial hand hygiene enriched with pure Aloe Vera extracts for soft, healthy hands.",
    keywords: ["phreshy", "hand", "wash", "soap", "aloe", "hygiene", "skin"]
  },
  {
    id: 8,
    name: "Phreshy WC Cleaner",
    price: 25.0,
    image: "/images/gallon2.png",
    category: "Surface Care",
    description: "Thick formula for deep cleaning. Removes stains & tough dirt while killing 99.9% of germs for better hygiene.",
    keywords: ["phreshy", "toilet", "bathroom", "germs", "cleaner", "hygiene"]
  },
];

export const categories = [
  { name: "Liquid Detergents", image: "/images/la;s.jpg" },
  { name: "Washing Powders", image: "/images/photo_2026-06-15_09-28-45.jpg" },
  { name: "Surface Care", image: "/images/gallon2.png" },
  { name: "Personal Hygiene", image: "/images/wesksd.jpg" },
];
