"use client";

import { products } from "@/data/products";
import ProductCard from "../shared/ProductCard";
import { ArrowRight, Package } from "lucide-react";
import Link from "next/link";

const BestSellers = () => {
  return (
    <section id="products" className="app-section bg-white">
      <div className="app-container">

        {/* Section Header */}
        <div className="flex items-end justify-between mb-8 md:mb-16 px-2">
          <div className="reveal-left">
            <h2 className="display-medium text-slate-900 uppercase">Featured <br /> <span className="text-primary italic">Essentials</span></h2>
            <div className="w-12 md:w-16 h-1 md:h-1.5 bg-primary rounded-full mt-3 md:mt-4" />
          </div>

          <Link href="/products" className="text-[10px] md:text-xs font-black uppercase text-slate-400 tracking-[0.2em] flex items-center gap-2 hover:text-primary transition-all mb-1">
            Explore All <ArrowRight size={16} className="md:w-[18px]" />
          </Link>
        </div>

        {/* Swipeable Product Reel (Mobile) | Adaptive Grid (Desktop) */}
        <div className="scroll-reel !py-2 md:!py-6 reveal-up">
          {products.slice(0, 5).map((product) => (
            <div
              key={product.id}
              className="snap-center shrink-0 w-[220px] md:w-[280px] lg:w-auto"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Premium Promo Badge */}
        <div className="mt-10 md:mt-16 bg-slate-50 p-6 md:p-12 rounded-[1.8rem] md:rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between border border-slate-100/50 group cursor-pointer hover:bg-slate-100 hover:animate-pulse-scale active:animate-pulse-scale transition-all duration-500 shadow-sm md:hover:shadow-xl reveal-scale">
           <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-0">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white flex items-center justify-center text-primary shadow-lg group-hover:scale-110 transition-transform">
                 <Package size={24} className="md:w-8 md:h-8" />
              </div>
              <div className="flex-grow">
                 <h4 className="text-sm md:text-lg font-black text-slate-900 uppercase tracking-wider mb-1">Weekly Bulk Bundle</h4>
                 <p className="text-[9px] md:text-xs text-slate-400 font-bold uppercase tracking-[0.3em]">Save 15% on wholesale supply</p>
              </div>
           </div>
           <div className="flex items-center gap-3 text-[10px] md:text-xs font-black text-primary uppercase tracking-[0.2em] w-full md:w-auto justify-center md:justify-end">
              CLAIM OFFER <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
           </div>
        </div>

      </div>
    </section>
  );
};

export default BestSellers;
