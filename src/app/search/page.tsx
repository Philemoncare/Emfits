
"use client";

import { useSearchParams } from "next/navigation";
import { Product } from "@/data/products";
import ProductCard from "@/components/shared/ProductCard";
import { Suspense, useEffect, useState } from "react";
import { performSearch, SearchResult } from "@/lib/search-service";
import { MessageCircle, ArrowRight, Search as SearchIcon } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/utils";

const SearchResultsContent = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const category = searchParams.get("c") || "All Categories";

  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    const searchResults = performSearch(query, category);
    setResults(searchResults);
  }, [query, category]);

  const handleWhatsAppOrder = (productName: string, price?: number) => {
    const priceText = price ? `\nPrice: ₵${price.toFixed(2)}` : '';
    const message = `Hello, I'm interested in: ${productName}${priceText}\n\nCan you provide more information?`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="custom-container py-32 mt-20">
      <div className="mb-16 reveal-up">
        <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">
          <a href="/" className="hover:text-primary transition-colors">Home</a>
          <span>/</span>
          <span className="text-slate-900">Search Results</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Search <span className="text-primary">Results</span></h1>
        <p className="text-slate-500 text-xl leading-relaxed">
          Found <span className="text-slate-900 font-bold">{results.length} results</span> for <span className="text-slate-900 font-bold italic">"{query}"</span>
          {category !== "All Categories" && <span> in <span className="text-primary font-bold">{category}</span></span>}
        </p>
      </div>

      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {results.map((item, idx) => (
            <div key={`${item.type}-${item.id}`} className="reveal-up" style={{ transitionDelay: `${idx * 0.05}s` }}>
              {item.type === 'product' ? (
                <ProductCard product={{
                  id: item.id as number,
                  name: item.title,
                  price: item.price || 0,
                  image: item.image || '',
                  category: item.category || '',
                  description: item.description,
                }} />
              ) : (
                <div className="premium-card p-8 h-full bg-slate-50 border-none flex flex-col">
                   <div className="mb-6">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">{item.type}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-slate-900">{item.title}</h3>
                    <p className="text-slate-500 text-sm mb-10 flex-grow leading-relaxed line-clamp-4">{item.description}</p>
                    <div className="mt-auto">
                      {item.url.startsWith('http') || item.url.includes('wa.me') ? (
                         <button
                          onClick={() => handleWhatsAppOrder(item.title)}
                          className="w-full btn-premium btn-premium-primary !py-3 !text-[10px]"
                        >
                          <MessageCircle size={16} /> Order WhatsApp
                        </button>
                      ) : (
                        <a href={item.url} className="w-full btn-premium btn-premium-outline !py-3 !text-[10px] group">
                           View Details <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </a>
                      )}
                    </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-32 bg-slate-50 rounded-[4rem] reveal-scale">
          <div className="w-32 h-32 rounded-[3rem] bg-white flex items-center justify-center text-slate-200 mx-auto mb-10 shadow-xl">
            <SearchIcon size={56} />
          </div>
          <h3 className="text-3xl font-bold mb-4">No results found</h3>
          <p className="text-slate-500 mb-12 max-w-sm mx-auto leading-relaxed">
            We couldn't find anything matching your search. Try using more general keywords.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/" className="btn-premium btn-premium-primary !px-10">
              Back to Home
            </a>
            <button
              onClick={() => window.history.back()}
              className="btn-premium btn-premium-outline !px-10"
            >
              Go Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};


const SearchPage = () => {
  return (
    <Suspense fallback={<div className="custom-container py-48 text-center text-xl font-bold text-slate-400">Searching...</div>}>
      <SearchResultsContent />
    </Suspense>
  );
};

export default SearchPage;
