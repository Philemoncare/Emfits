"use client";

import PageHeader from "@/components/shared/PageHeader";
import { categories } from "@/data/products";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CategoriesPage() {
  return (
    <main>
      <PageHeader
        title="Browse Solutions"
        subtitle="Discover our wide range of premium cleaning products organized by specialized category."
      />

      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 animate-pulse-gentle"></div>
        <div className="custom-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 stagger-container">
            {categories.map((cat, idx) => (
              <div key={cat.name} className="reveal-up" style={{transitionDelay: `${idx * 0.1}s`}}>
                <Link
                  href={`/products?category=${encodeURIComponent(cat.name)}`}
                  className="group relative block aspect-[3/4] rounded-[3rem] overflow-hidden bg-slate-900 shadow-2xl animate-float-slow group-hover:animate-pulse-scale active:animate-pulse-scale"
                  style={{ animationDelay: `${idx * 0.3}s` }}
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125 opacity-70 group-hover:opacity-90"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 w-full p-10 transform transition-all duration-700 group-hover:-translate-y-4">
                    <h3 className="text-3xl font-bold text-white mb-4 leading-tight group-hover:text-primary transition-colors">{cat.name}</h3>
                    <div className="flex items-center gap-3 text-primary font-black text-xs uppercase tracking-widest">
                       Explore <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white transition-all group-hover:bg-primary group-hover:translate-x-2 shadow-lg">
                          <ArrowRight size={20} />
                       </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Bundles - Horizontal Flow Concept */}
      <section className="section-padding bg-slate-50 overflow-hidden relative">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-primary/5 blur-[120px] -z-10 animate-pulse-gentle"></div>
        <div className="custom-container">
          <div className="text-center mb-20 reveal-up">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Recommended Packs</span>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900">Cleaning Bundles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 stagger-container">
            {[
              { title: "Home Essentials Kit", desc: "A mix of everything you need for a sparkling clean home.", image: "/images/oe.jpeg", color: "from-blue-500/10" },
              { title: "Laundry Starter Pack", desc: "Premium detergent and fabric softener for fresh clothes.", image: "/images/vde.jpg", color: "from-amber-500/10" },
              { title: "Deep Clean Bundle", desc: "Powerful disinfectants and multi-purpose cleaners.", image: "/images/cewq.jpg", color: "from-emerald-500/10" }
            ].map((collection, idx) => (
              <div key={idx} className="reveal-up" style={{transitionDelay: `${idx * 0.1}s`}}>
                <div className={`premium-card h-full bg-gradient-to-br ${collection.color} to-white flex flex-col p-10 hover:shadow-2xl hover:animate-pulse-scale active:animate-pulse-scale transition-all duration-700`}>
                  <div className="rounded-[2rem] overflow-hidden aspect-video mb-10 shadow-2xl animate-float" style={{ animationDelay: `${idx * 0.5}s` }}>
                    <img src={collection.image} alt={collection.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-125" />
                  </div>
                  <h5 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-primary transition-colors">{collection.title}</h5>
                  <p className="text-slate-500 text-sm mb-10 flex-grow leading-relaxed font-medium">{collection.desc}</p>

                  <a
                    href={`https://wa.me/233202706607?text=I'm interested in the ${collection.title}`}
                    target="_blank"
                    className="btn-premium btn-premium-primary !w-full group shadow-lg"
                  >
                    Order Bundle <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
