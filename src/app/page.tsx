import Hero from "@/components/sections/Hero";
import BestSellers from "@/components/sections/BestSellers";
import Features from "@/components/sections/Features";
import DeliveryContact from "@/components/sections/AppDownload";
import { products } from "@/data/products";
import ProductCard from "@/components/shared/ProductCard";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <BestSellers />

      {/* Category Showcase: Surface Care */}
      <section className="app-section bg-slate-50 relative">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary/5 blur-[100px] rounded-full" />
        <div className="app-container relative z-10">
           <div className="flex items-end justify-between mb-8 md:mb-16 px-2">
              <div className="flex flex-col gap-1 md:gap-2">
                <h3 className="section-title text-slate-900 uppercase">Surface <span className="text-primary italic">Care</span></h3>
                <div className="w-12 md:w-16 h-1 md:h-1.5 bg-primary rounded-full mt-2" />
              </div>
              <Link href="/products" className="text-[10px] md:text-xs font-black uppercase text-slate-400 hover:text-primary tracking-[0.2em] flex items-center gap-2 transition-colors mb-1">
                View More <ChevronRight size={16} />
              </Link>
           </div>

           <div className="scroll-reel !py-2 md:!py-6 reveal-up">
              {products.filter(p => p.category === "Surface Care").map((product) => (
                <div
                  key={product.id}
                  className="snap-center shrink-0 w-[220px] md:w-[280px] lg:w-auto"
                >
                  <ProductCard product={product} />
                </div>
              ))}
           </div>
        </div>
      </section>

      <DeliveryContact />
      <Features />

      {/* Recommended Grid (Bottom Feed) */}
      <section className="app-section bg-white overflow-hidden relative">
        {/* Background Abstract Decorations */}
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse-gentle" />
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] animate-float" />

        <div className="app-container relative z-10">
           <div className="flex flex-col items-center text-center mb-16 md:mb-24 reveal-up">
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-primary mb-6 block bg-primary/5 px-6 py-2 rounded-full border border-primary/10">Tailored Selections</span>
              <h2 className="text-3xl md:text-7xl font-black text-slate-900 uppercase leading-[0.9] tracking-tighter">
                Recommended <br /> <span className="text-primary italic">For You</span>
              </h2>
           </div>

           {/* Staggered Grid for Modern App Feed Feel */}
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10 lg:gap-12">
              {products.slice(0, 8).map((product, i) => (
                <div
                  key={product.id}
                  className={`reveal-up ${i % 2 === 1 ? 'lg:translate-y-20' : ''}`}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
           </div>

           <div className="mt-20 md:mt-48 text-center reveal-up">
              <Link href="/products" className="group relative inline-flex items-center gap-4 bg-slate-900 text-white px-10 md:px-20 py-6 md:py-8 rounded-full overflow-hidden transition-all active:scale-95 shadow-2xl">
                 <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-premium" />
                 <span className="relative text-xs md:text-base font-black uppercase tracking-[0.2em]">Explore Full Collection</span>
                 <ArrowRight size={24} className="relative group-hover:translate-x-3 transition-transform duration-500" />
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
}
