"use client";

import { useRouter } from "next/navigation";
import { Product, products } from "@/data/products";
import { formatCurrency, WHATSAPP_NUMBER } from "@/lib/utils";
import { MessageCircle, Star, ArrowRight, ChevronLeft, Heart, Share2 } from "lucide-react";
import ProductCard from "@/components/shared/ProductCard";
import Link from "next/link";
import { useState } from "react";

interface ProductDetailsClientProps {
  product: Product;
}

export default function ProductDetailsClient({ product }: ProductDetailsClientProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Description");

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleWhatsAppOrder = () => {
    const message = `Hello Emfits Enterprise! I'm interested in: ${product.name}\nPrice: ${formatCurrency(product.price)}\n\nPlease assist me with my order.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <main className="bg-white min-h-screen">

      {/* Mobile Top Bar */}
      <div className="fixed top-0 left-0 w-full z-[150] bg-white/80 backdrop-blur-md h-16 flex items-center justify-between px-6 lg:hidden">
         <button onClick={() => router.back()} className="p-2 bg-slate-50 rounded-xl">
           <ChevronLeft size={20} strokeWidth={3} />
         </button>
         <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Product Details</span>
         <button className="p-2 bg-slate-50 rounded-xl">
           <Share2 size={18} strokeWidth={2.5} />
         </button>
      </div>

      <section className="pt-20 lg:pt-32 pb-12">
        <div className="app-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Image Gallery - Mobile Swipe Look */}
            <div className="relative reveal-up">
              <div className="aspect-square rounded-[2rem] bg-slate-50 flex items-center justify-center overflow-hidden shadow-inner border border-slate-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-10 animate-float-slow"
                />
              </div>
              <button className="absolute top-4 right-4 w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center text-rose-500 active:scale-90 transition-transform">
                 <Heart size={24} strokeWidth={2.5} />
              </button>
            </div>

            {/* Info Section */}
            <div className="flex flex-col reveal-up lg:pl-10">
              <div className="mb-8">
                 <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-4">
                   {product.category}
                 </span>
                 <h1 className="text-2xl md:text-5xl font-black text-slate-900 leading-tight mb-4">
                   {product.name}
                 </h1>
                 <div className="flex items-center gap-3">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">20+ Recommendations</span>
                 </div>
              </div>

              <div className="mb-10 p-6 bg-slate-50 rounded-[1.5rem] border border-slate-100 flex items-center justify-between">
                 <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Price</p>
                    <span className="text-3xl font-black text-primary">{formatCurrency(product.price)}</span>
                 </div>
                 <div className="bg-emerald-50 text-emerald-600 text-[10px] font-black px-4 py-2 rounded-xl">
                    IN STOCK
                 </div>
              </div>

              {/* Tabs System (Mobile Style) */}
              <div className="mb-10">
                 <div className="flex gap-8 border-b border-slate-100 mb-6">
                    {["Description", "Details"].map(tab => (
                       <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`pb-4 text-xs font-black uppercase tracking-widest transition-all relative ${activeTab === tab ? 'text-primary' : 'text-slate-400'}`}
                       >
                         {tab}
                         {activeTab === tab && <div className="absolute bottom-[-1px] left-0 w-full h-1 bg-primary rounded-full" />}
                       </button>
                    ))}
                 </div>
                 <div className="animate-fade-in">
                    {activeTab === "Description" ? (
                       <p className="text-slate-500 text-sm md:text-base leading-relaxed font-bold">
                          {product.description || "Emfits Enterprise premium cleaning solution. High-concentration formula for superior performance on all modern surfaces."}
                       </p>
                    ) : (
                       <div className="grid grid-cols-2 gap-6">
                          <div className="p-4 bg-slate-50 rounded-2xl">
                             <p className="text-[9px] font-black text-slate-400 uppercase mb-1">Standard</p>
                             <p className="text-xs font-black text-slate-800 uppercase">Premium Grade</p>
                          </div>
                          <div className="p-4 bg-slate-50 rounded-2xl">
                             <p className="text-[9px] font-black text-slate-400 uppercase mb-1">Effect</p>
                             <p className="text-xs font-black text-slate-800 uppercase">Long Lasting</p>
                          </div>
                       </div>
                    )}
                 </div>
              </div>

              {/* Mobile Actions - Floating Bottom Fix */}
              <div className="mt-auto pt-10 grid grid-cols-1 gap-4">
                 <button onClick={handleWhatsAppOrder} className="btn-app-primary group !py-5">
                    <MessageCircle size={20} className="mr-2" /> Order on WhatsApp
                 </button>
                 <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                    Next Day Delivery across major Ghana cities
                 </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Recommended Section (Swipeable Reel) */}
      <section className="app-section bg-slate-50">
        <div className="app-container">
           <div className="flex items-center justify-between mb-8">
              <h2 className="text-[13px] font-black uppercase tracking-[0.2em] text-slate-800 border-l-4 border-primary pl-4">Similar Products</h2>
              <Link href="/products" className="text-[10px] font-black uppercase text-primary tracking-widest flex items-center gap-1">
                More <ArrowRight size={12} />
              </Link>
           </div>

           <div className="scroll-reel">
              {relatedProducts.map((rp, i) => (
                <div key={rp.id} className="snap-center shrink-0 reveal-up" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <ProductCard product={rp} />
                </div>
              ))}
           </div>
        </div>
      </section>
    </main>
  );
}
