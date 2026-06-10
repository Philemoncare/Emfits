"use client";

import PageHeader from "@/components/shared/PageHeader";
import { products, categories as categoryData } from "@/data/products";
import ProductCard from "@/components/shared/ProductCard";
import { useState, useMemo, Suspense, useEffect } from "react";
import { Filter, Search as SearchIcon, X, ArrowRight, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchParams.get("category")) {
      setSelectedCategory(searchParams.get("category") || "All");
    }
  }, [searchParams]);

  const allCategories = ["All", ...categoryData.map(c => c.name)];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;

      if (!searchQuery.trim()) return matchesCategory;

      const normalizedQuery = searchQuery.toLowerCase().trim();
      const queryTokens = normalizedQuery.split(/\s+/);

      const title = product.name.toLowerCase();
      const desc = product.description.toLowerCase();
      const keywords = (product.keywords || []).map(k => k.toLowerCase());

      const matchesSearch = queryTokens.every(token =>
        title.includes(token) ||
        desc.includes(token) ||
        keywords.some(k => k.includes(token))
      );

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="bg-slate-50/50 min-h-screen pb-20">
      <div className="bg-white pb-12 shadow-sm rounded-b-[3rem] md:rounded-b-[5rem]">
         <PageHeader
            title="Shop Essentials"
            subtitle="Premium cleaning solutions for every Ghanaian home, delivered to your door."
         />

         {/* Refined Filter System */}
         <div className="app-container">
            <div className="flex flex-col gap-8">
               {/* Search Bar - Modern App Style */}
               <div className="relative group max-w-2xl mx-auto w-full">
                  <div className="absolute inset-0 bg-primary/5 blur-2xl rounded-full opacity-0 group-focus-within:opacity-100 transition-opacity" />
                  <input
                     type="text"
                     className="relative w-full bg-slate-50 border-2 border-transparent outline-none p-5 md:p-6 rounded-[2rem] font-bold text-sm md:text-base focus:bg-white focus:border-primary/20 transition-all shadow-sm"
                     placeholder="What are you looking for?"
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-105">
                    <SearchIcon size={20} />
                  </div>
               </div>

               {/* Categories Reel - Pill Style */}
               <div className="flex overflow-x-auto gap-3 pb-2 hide-scrollbar -mx-4 px-4 justify-start md:justify-center">
                  {allCategories.map(cat => (
                     <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`shrink-0 px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-500 border-2 ${
                           selectedCategory === cat
                           ? 'bg-slate-900 border-slate-900 text-white shadow-2xl shadow-slate-900/20 scale-105'
                           : 'bg-white border-slate-100 text-slate-400 hover:border-slate-200'
                        }`}
                     >
                        {cat}
                     </button>
                  ))}
               </div>
            </div>
         </div>
      </div>

      <section className="py-12 md:py-20">
        <div className="app-container">
          <div className="flex items-center justify-between mb-10 px-4">
             <div className="flex flex-col">
                <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-1">Collection</span>
                <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tighter uppercase">{selectedCategory} Items</h2>
             </div>
             <div className="bg-white px-4 py-2 rounded-2xl border border-slate-100 shadow-sm text-[10px] font-black text-slate-400 uppercase tracking-widest">
                {filteredProducts.length} Results
             </div>
          </div>

          {/* Products Grid - Modern spacing */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10">
              {filteredProducts.map((product, idx) => (
                <div key={product.id} className="reveal-up" style={{transitionDelay: `${idx * 0.05}s`}}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-32 bg-white rounded-[2rem] shadow-sm">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-200 mx-auto mb-6">
                <ShoppingCart size={40} />
              </div>
              <h3 className="text-xl font-black mb-4 text-slate-800 uppercase tracking-tighter">No items found</h3>
              <button
                className="btn-app-outline !w-auto !inline-flex !px-10"
                onClick={() => {setSelectedCategory("All"); setSearchQuery("");}}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Bulk Section (Business Focus) */}
      <section className="app-section pt-0">
        <div className="app-container">
           <div className="bg-slate-900 rounded-[2rem] p-8 overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-64 h-full bg-primary/20 blur-[100px] -z-0" />

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                 <div className="text-center md:text-left">
                    <h2 className="text-2xl md:text-4xl font-black text-white mb-4 uppercase tracking-tighter">Business Supply?</h2>
                    <p className="text-slate-400 text-sm font-bold uppercase tracking-widest leading-relaxed">
                       We offer wholesale prices for hotels and laundry services across Ghana.
                    </p>
                 </div>
                 <Link href="/contact" className="btn-app-primary !w-auto !px-10 whitespace-nowrap shadow-xl">
                    Get wholesale Quote
                 </Link>
              </div>
           </div>
        </div>
      </section>
    </main>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}
