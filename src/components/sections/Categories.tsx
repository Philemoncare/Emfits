"use client";

import { categories } from "@/data/products";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

const CategoriesSection = () => {
  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="app-container">

        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12 lg:mb-20 px-2">
          <div className="flex flex-col gap-2">
            <h2 className="display-medium text-slate-900 uppercase">Browse <span className="text-primary italic">Solutions</span></h2>
            <div className="w-16 h-1.5 bg-primary rounded-full mt-2" />
          </div>
          <Link href="/products" className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-slate-400 hover:text-primary transition-colors">
            All Categories <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {categories.slice(0, 6).map((cat, i) => (
            <Link
              key={i}
              href={`/search?c=${encodeURIComponent(cat.name)}`}
              className="group flex flex-col items-center text-center reveal-up"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="relative w-full aspect-square rounded-[2rem] lg:rounded-[3rem] bg-slate-50 border border-slate-100/50 flex items-center justify-center p-6 mb-6 group-hover:bg-primary/5 group-hover:border-primary/20 group-hover:-translate-y-2 group-hover:animate-pulse-scale active:animate-pulse-scale transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl">
                 <img
                   src={cat.image}
                   alt={cat.name}
                   className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-sm md:text-base font-black text-slate-900 uppercase tracking-tight group-hover:text-primary transition-colors">{cat.name}</h3>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Explore</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
