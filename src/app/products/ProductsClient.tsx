"use client";

import PageHeader from "@/components/shared/PageHeader";
import { products, categories as categoryData } from "@/data/products";
import ProductCard from "@/components/shared/ProductCard";
import { useState, useMemo, Suspense, useEffect } from "react";
import { Filter, Search as SearchIcon, X, ArrowRight, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ProductsClient() {
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
      <div className="bg-white pb-8 md:pb-12 shadow-sm rounded-b-[2.5rem] md:rounded-b-[5rem]">
         <PageHeader
            title="Shop Essentials"
            subtitle="Cleaning solutions for every Ghanaian home, delivered to your door."
            hideIndicator={true}
         />

         {/* Refined Filter System */}
         <div className="app-container">
            <div className="flex flex-col gap-6 md:gap-8 -mt-4 md:mt-0">
               {/* Search Bar - Modern App Style */}
               <div className="relative group max-w-2xl mx-auto w-full">
                  <div className="absolute inset-0 bg-primary/5 blur-2xl rounded-full opacity-0 group-focus-within:opacity-100 transition-opacity" />
                  <input
                     type="text"
                     className="relative w-full bg-slate-50 border-2 border-slate-100 outline-none p-4 md:p-6 rounded-2xl md:rounded-[2rem] font-bold text-xs md:text-base focus:bg-white focus:border-primary/20 transition-all shadow-sm pr-16 md:pr-20"
                     placeholder="What are you looking for?"
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-slate-900 rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-105">
                    <SearchIcon size={18} className="md:w-5 md:h-5" />
                  </div>
               </div>

               {/* Categories Reel - High-End Pill Style */}
               <div className="flex overflow-x-auto gap-3 md:gap-4 pb-4 hide-scrollbar -mx-4 px-4 justify-start md:justify-center items-center h-20">
                  {allCategories.map(cat => (
                     <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`shrink-0 px-6 md:px-10 py-2.5 md:py-3.5 rounded-full font-black text-[9px] md:text-[11px] uppercase tracking-[0.15em] md:tracking-[0.25em] transition-all duration-500 border-2 ${
                           selectedCategory === cat
                           ? 'bg-primary border-primary text-white shadow-[0_15px_30px_-5px_rgba(0,119,200,0.4)] scale-110 z-10'
                           : 'bg-white border-slate-100 text-slate-400 hover:border-slate-200 hover:text-slate-600'
                        }`}
                     >
                        {cat}
                     </button>
                  ))}
               </div>
            </div>
         </div>
      </div>

      <section className="py-8 md:py-20">
        <div className="app-container">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 px-4">
             <div className="flex flex-col">
                <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-1">Collection</span>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase">{selectedCategory} Items</h2>
             </div>
             <div className="w-fit bg-white px-5 py-2.5 rounded-2xl border border-slate-100 shadow-sm text-[11px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                {filteredProducts.length} Results
             </div>
          </div>

          {/* Products Grid - Modern spacing */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-10">
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
