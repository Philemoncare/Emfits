import { products, Product } from "@/data/products";

export interface SearchResult {
  id: string | number;
  type: 'product' | 'service' | 'page' | 'category';
  title: string;
  description: string;
  url: string;
  image?: string;
  price?: number;
  category?: string;
  keywords?: string[];
}

// Mock static content to search through
const staticContent: SearchResult[] = [
  {
    id: 's1',
    type: 'service',
    title: 'Fast Delivery',
    description: 'Reliable delivery across Ghana. We ensure your cleaning products arrive safely.',
    url: '/#services',
    keywords: ['delivery', 'shipping', 'transport', 'fast', 'ghana']
  },
  {
    id: 's2',
    type: 'service',
    title: 'WhatsApp Ordering',
    description: 'Direct communication with us for your orders. Simple and fast way to buy detergents.',
    url: 'https://wa.me/233202706607',
    keywords: ['whatsapp', 'order', 'contact', 'chat']
  },
  {
    id: 's3',
    type: 'service',
    title: 'Quality Guarantee',
    description: 'High cleaning performance and quality promised on every item we sell.',
    url: '/#services',
    keywords: ['quality', 'clean', 'guarantee', 'detergent']
  },
  {
    id: 's4',
    type: 'service',
    title: 'Bulk Supply',
    description: 'Affordable wholesale rates on all items for businesses and homes.',
    url: '/#services',
    keywords: ['price', 'wholesale', 'bulk', 'affordable', 'value', 'savings']
  },
  {
    id: 'p1',
    type: 'page',
    title: 'About Us',
    description: 'Learn more about our mission to provide cleaning solutions to Ghanaian homes.',
    url: '/about',
    keywords: ['about', 'mission', 'story', 'company', 'Emfits Enterprise']
  },
  {
    id: 's5',
    type: 'service',
    title: 'Special Offers',
    description: 'Save more on your cleaning essentials with our regular deals.',
    url: '/#offers',
    keywords: ['discount', 'offers', 'savings', 'deals', 'special']
  },
  {
    id: 's6',
    type: 'service',
    title: 'Home Care Expertise',
    description: 'Specialized products for every corner of your home.',
    url: '/#about',
    keywords: ['home', 'care', 'hygiene', 'clean']
  }
];


export const performSearch = (query: string, category: string = "All Categories"): SearchResult[] => {
  const normalizedQuery = query.toLowerCase().trim();
  if (!normalizedQuery) return [];

  const queryTokens = normalizedQuery.split(/\s+/).filter(token => token.length > 0);
  if (queryTokens.length === 0) return [];

  // Search all categories if needed
  const isAll = category === "All" || category === "All Categories";
  const filterByCategory = (itemCategory?: string) =>
    isAll || itemCategory === category;

  // Modern Scoring Engine
  const getScore = (item: any) => {
    const title = (item.title || item.name || "").toLowerCase();
    const desc = (item.description || "").toLowerCase();
    const cat = (item.category || "").toLowerCase();
    const keywords = (item.keywords || []) as string[];

    let totalScore = 0;
    let matchesAllTokens = true;

    for (const token of queryTokens) {
      let tokenScore = 0;
      let tokenMatched = false;

      // 1. Exact Title Match (Highest Priority)
      if (title === token || title === normalizedQuery) {
        tokenScore += 100;
        tokenMatched = true;
      }
      // 2. Title Starts With
      else if (title.startsWith(token)) {
        tokenScore += 60;
        tokenMatched = true;
      }
      // 3. Title Includes
      else if (title.includes(token)) {
        tokenScore += 40;
        tokenMatched = true;
      }

      // 4. Keyword Match
      if (keywords.some(k => k.toLowerCase() === token)) {
        tokenScore += 50;
        tokenMatched = true;
      } else if (keywords.some(k => k.toLowerCase().includes(token))) {
        tokenScore += 25;
        tokenMatched = true;
      }

      // 5. Category Match
      if (cat.includes(token)) {
        tokenScore += 30;
        tokenMatched = true;
      }

      // 6. Description Match
      if (desc.includes(token)) {
        tokenScore += 15;
        tokenMatched = true;
      }

      if (!tokenMatched) {
        matchesAllTokens = false;
      }

      totalScore += tokenScore;
    }

    // Bonus for matching all search terms
    if (matchesAllTokens && queryTokens.length > 1) {
      totalScore *= 1.5;
    }

    // Exact full string match in title bonus
    if (title.includes(normalizedQuery)) {
      totalScore += 50;
    }

    return totalScore;
  };

  // 1. Search in products
  const productResults = products
    .filter(p => filterByCategory(p.category))
    .map(p => ({
      id: p.id,
      type: 'product' as const,
      title: p.name,
      description: p.description,
      url: `/product/${p.id}`,
      image: p.image,
      price: p.price,
      category: p.category,
      score: getScore(p)
    }))
    .filter(res => res.score > 0);

  // 2. Search in static content (Disabled to show products alone)
  let staticResults: SearchResult[] = [];

  // Combine, sort by score, and limit
  return productResults
    .sort((a, b) => (b as any).score - (a as any).score)
    .slice(0, 10); // Slightly more results for "modern" feel
};
