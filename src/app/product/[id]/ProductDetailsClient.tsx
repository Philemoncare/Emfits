"use client";

import { useRouter } from "next/navigation";
import { Product, products } from "@/data/products";
import { formatCurrency } from "@/lib/utils";
import { MessageCircle, Star, ArrowRight, ChevronLeft, ChevronRight, Heart, Share2, ShoppingBag, Truck, Check, Copy, X, Facebook, Instagram, Send } from "lucide-react";
import ProductCard from "@/components/shared/ProductCard";
import Link from "next/link";
import { useState, useEffect } from "react";

interface ProductDetailsClientProps {
  product: Product;
}

export default function ProductDetailsClient({ product }: ProductDetailsClientProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Description");
  const [selectedSize, setSelectedSize] = useState("1L");
  const [quantity, setQuantity] = useState(1);
  const [isCopied, setIsCopied] = useState(false);
  const [showShareSheet, setShowShareSheet] = useState(false);

  const sizes = ["500ml", "1L", "2L", "5L", "Large", "Medium"];

  const handleShare = async () => {
    // If mobile and supports native share, use it, otherwise show our custom sheet
    if (navigator.share) {
      const shareData = {
        title: product.name,
        text: `Check out ${product.name} at Emfits Enterprise!`,
        url: window.location.href,
      };
      try {
        await navigator.share(shareData);
      } catch (err) {
        if ((err as Error).name !== 'AbortError') setShowShareSheet(true);
      }
    } else {
      setShowShareSheet(true);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const shareToWhatsApp = () => {
    const text = encodeURIComponent(`Check out ${product.name} at Emfits Enterprise! ${window.location.href}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleOrderRedirect = () => {
    router.push(`/contact?productId=${product.id}`);
  };

  // Prevent scroll when share sheet is open
  useEffect(() => {
    if (showShareSheet) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showShareSheet]);

  return (
    <main className="bg-white min-h-screen">

      {/* Modern Share Bottom Sheet */}
      {showShareSheet && (
        <div className="fixed inset-0 z-[1000] flex items-end justify-center animate-in fade-in duration-300">
           {/* Backdrop */}
           <div
             className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
             onClick={() => setShowShareSheet(false)}
           />

           {/* Sheet Content */}
           <div className="relative w-full max-w-lg bg-white rounded-t-[2.5rem] p-8 pb-12 shadow-2xl animate-in slide-in-from-bottom-full duration-500 cubic-bezier(0.16, 1, 0.3, 1)">
              <div className="w-12 h-1.5 bg-slate-100 rounded-full mx-auto mb-8" />

              <div className="flex items-center justify-between mb-8">
                 <div>
                    <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter">Share Product</h3>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-1">Spread the hygiene excellence</p>
                 </div>
                 <button
                   onClick={() => setShowShareSheet(false)}
                   className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 active:scale-90 transition-all"
                 >
                    <X size={20} />
                 </button>
              </div>

              <div className="grid grid-cols-4 gap-4 mb-10">
                 {[
                   { icon: MessageCircle, label: 'WhatsApp', color: 'bg-emerald-50 text-emerald-600', action: shareToWhatsApp },
                   { icon: Facebook, label: 'Facebook', color: 'bg-blue-50 text-blue-600', action: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank') },
                   { icon: Send, label: 'Telegram', color: 'bg-sky-50 text-sky-600', action: () => window.open(`https://t.me/share/url?url=${window.location.href}`, '_blank') },
                   { icon: Instagram, label: 'Direct', color: 'bg-pink-50 text-pink-600', action: copyToClipboard },
                 ].map((item, i) => (
                    <button
                      key={i}
                      onClick={() => { item.action(); if (item.label !== 'Direct') setShowShareSheet(false); }}
                      className="flex flex-col items-center gap-3 group"
                    >
                       <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center shadow-sm group-hover:scale-110 active:scale-90 transition-all border border-current/10`}>
                          <item.icon size={24} fill={item.label === 'WhatsApp' ? 'currentColor' : 'none'} />
                       </div>
                       <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{item.label}</span>
                    </button>
                 ))}
              </div>

              <div className="bg-slate-50 rounded-[1.5rem] p-4 flex items-center gap-4 border border-slate-100">
                 <div className="flex-grow min-w-0">
                    <p className="text-[8px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Product Link</p>
                    <p className="text-[10px] font-bold text-slate-900 truncate">{window.location.href}</p>
                 </div>
                 <button
                   onClick={copyToClipboard}
                   className={`shrink-0 px-6 py-3 rounded-xl flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all ${isCopied ? 'bg-emerald-500 text-white shadow-lg' : 'bg-slate-900 text-white shadow-xl'}`}
                 >
                    {isCopied ? <Check size={14} /> : <Copy size={14} />}
                    {isCopied ? 'Copied' : 'Copy'}
                 </button>
              </div>
           </div>
        </div>
      )}

      {/* Mobile Top Bar */}
      <div className="fixed top-0 left-0 w-full z-[150] bg-white/80 backdrop-blur-md h-16 flex items-center justify-between px-6 lg:hidden border-b border-slate-100">
         <button onClick={() => router.back()} className="p-2 bg-slate-50 rounded-xl active:scale-90 transition-transform">
           <ChevronLeft size={24} strokeWidth={3} />
         </button>
         <span className="text-[12px] font-black uppercase tracking-[0.3em] text-slate-900">Product Details</span>
         <button
            onClick={handleShare}
            className="p-2 bg-slate-50 rounded-xl active:scale-90 transition-all relative group"
         >
           {isCopied ? (
             <Check size={20} className="text-emerald-500" strokeWidth={3} />
           ) : (
             <Share2 size={20} strokeWidth={2.5} />
           )}
           {isCopied && (
             <div className="absolute top-full mt-2 right-0 bg-slate-900 text-white text-[8px] font-black py-1 px-3 rounded-lg whitespace-nowrap animate-in fade-in slide-in-from-top-1">
               LINK COPIED
             </div>
           )}
         </button>
      </div>

      <section className="pt-6 lg:pt-10 pb-12 lg:pb-16">
        <div className="app-container">

          {/* Desktop Breadcrumb - More compact */}
          <div className="hidden lg:flex items-center gap-2 mb-6 text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">
             <Link href="/" className="hover:text-primary transition-all">Home</Link>
             <ChevronRight size={8} strokeWidth={4} />
             <Link href="/products" className="hover:text-primary transition-all">Shop</Link>
             <ChevronRight size={8} strokeWidth={4} />
             <span className="text-slate-900">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-12 items-start">

            {/* Product Preview - Centered and Sized appropriately */}
            <div className="lg:col-span-5 xl:col-span-5">
              <div className="lg:sticky lg:top-32 reveal-up">
                <div className="w-full aspect-square max-w-[550px] mx-auto rounded-[2.5rem] md:rounded-[3.5rem] bg-slate-50 flex items-center justify-center overflow-hidden border border-slate-100 group relative shadow-[inset_0_0_60px_rgba(0,0,0,0.02)]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-[75%] h-[75%] object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Info Section - Better alignment */}
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col reveal-up">
              <div className="mb-6">
                 <span className="inline-block px-3 py-1 rounded-lg bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-3">
                   {product.category}
                 </span>
                 <h1 className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-slate-900 leading-[1.1] mb-3 tracking-tighter uppercase max-w-xl">
                   {product.name}
                 </h1>
                 <div className="flex items-center gap-4">
                    <div className="flex text-amber-500 gap-0.5">
                      {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" strokeWidth={0} />)}
                    </div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] border-l border-slate-200 pl-4">20+ Recommendations</span>

                    {/* Desktop Share Button */}
                    <button
                      onClick={handleShare}
                      className="hidden lg:flex items-center gap-2 ml-auto text-[10px] font-black text-slate-400 hover:text-primary transition-all uppercase tracking-widest group"
                    >
                      {isCopied ? (
                        <>
                          <Check size={14} className="text-emerald-500" />
                          <span className="text-emerald-500">Link Copied</span>
                        </>
                      ) : (
                        <>
                          <Share2 size={14} className="group-hover:scale-110 transition-transform" />
                          <span>Share Product</span>
                        </>
                      )}
                    </button>
                 </div>
              </div>

              <div className="mb-6 p-6 md:p-8 bg-slate-50/50 rounded-[2rem] border border-slate-100 flex items-center justify-between shadow-sm relative overflow-hidden group">
                 <div className="relative z-10">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-1">Price per unit</p>
                    <span className="text-4xl md:text-5xl font-black text-primary tracking-tighter">{formatCurrency(product.price)}</span>
                 </div>
                 <div className="relative z-10 flex flex-col items-end gap-2">
                    <div className="bg-emerald-50 text-emerald-600 text-[10px] font-black px-4 py-2 rounded-xl border border-emerald-100/50 flex items-center gap-2 shadow-sm">
                       <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                       AVAILABLE
                    </div>
                    <span className="text-[8px] font-black text-slate-400 uppercase tracking-[0.2em]">Next Day Delivery</span>
                 </div>
              </div>

              {/* Size & Quantity Row - Tightened */}
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                 <div className="flex-grow">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3">Select Capacity</p>
                    <div className="flex flex-wrap gap-2">
                       {sizes.map(size => (
                          <button
                             key={size}
                             onClick={() => setSelectedSize(size)}
                             className={`px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border-2 ${
                                selectedSize === size
                                ? 'bg-slate-900 border-slate-900 text-white shadow-xl'
                                : 'bg-white border-slate-100 text-slate-400 hover:border-slate-200'
                             }`}
                          >
                             {size}
                          </button>
                       ))}
                    </div>
                 </div>

                 <div className="flex-shrink-0">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3">Quantity</p>
                    <div className="flex items-center bg-white rounded-xl p-1 border-2 border-slate-100 w-fit">
                       <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-10 flex items-center justify-center font-black text-slate-400 hover:text-primary transition-all"
                       >
                         -
                       </button>
                       <span className="w-12 text-center font-black text-slate-900">{quantity}</span>
                       <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-10 h-10 flex items-center justify-center font-black text-slate-400 hover:text-primary transition-all"
                       >
                         +
                       </button>
                    </div>
                 </div>
              </div>

              {/* Tabs System - Improved vertical rhythm */}
              <div className="mb-6">
                 <div className="flex gap-8 border-b border-slate-100 mb-5">
                    {["Description", "Details"].map(tab => (
                       <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`pb-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all relative ${activeTab === tab ? 'text-primary' : 'text-slate-400'}`}
                       >
                         {tab}
                         {activeTab === tab && <div className="absolute bottom-[-1px] left-0 w-full h-1 bg-primary rounded-full" />}
                       </button>
                    ))}
                 </div>
                 <div className="animate-fade-in">
                    {activeTab === "Description" ? (
                       <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-lg">
                          {product.description || "Emfits Enterprise cleaning solution. High-concentration formula for superior performance on all modern surfaces."}
                       </p>
                    ) : (
                       <div className="grid grid-cols-2 gap-3 max-w-md">
                          {[
                            { label: "Grade", value: "Enterprise" },
                            { label: "Formula", value: "Deep Clean" },
                            { label: "Safety", value: "Eco-Safe" },
                            { label: "Surface", value: "Multi" }
                          ].map((item, i) => (
                            <div key={i} className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                               <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{item.label}</span>
                               <span className="text-[10px] font-black text-slate-800 uppercase">{item.value}</span>
                            </div>
                          ))}
                       </div>
                    )}
                 </div>
              </div>

              {/* Actions & Sharing */}
              <div className="pt-4 flex flex-col gap-6">
                 <div className="flex gap-3 max-w-md">
                    <button onClick={handleOrderRedirect} className="flex-[3] group relative bg-slate-900 text-white py-5 rounded-2xl flex items-center justify-center gap-4 transition-all active:scale-[0.98] shadow-2xl overflow-hidden">
                       <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                       <ShoppingBag size={20} className="relative z-10" />
                       <span className="relative z-10 text-xs font-black uppercase tracking-[0.2em]">Order Now</span>
                    </button>
                    <button
                       onClick={handleShare}
                       className="flex-1 bg-slate-100 text-slate-600 rounded-2xl flex items-center justify-center active:scale-95 transition-all hover:bg-slate-200"
                       title="Share Product"
                    >
                       <Share2 size={20} />
                    </button>
                 </div>

                 {/* Premium Quick Share Row */}
                 <div className="flex flex-col gap-3">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.4em]">Share with friends</p>
                    <div className="flex items-center gap-2">
                       <button
                        onClick={shareToWhatsApp}
                        className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center transition-all hover:scale-110 active:scale-90 shadow-sm border border-emerald-100"
                       >
                         <MessageCircle size={18} fill="currentColor" />
                       </button>
                       <button
                        onClick={copyToClipboard}
                        className={`px-4 h-10 rounded-xl flex items-center gap-2 text-[9px] font-black uppercase tracking-widest transition-all active:scale-95 border ${isCopied ? 'bg-emerald-500 border-emerald-500 text-white' : 'bg-white border-slate-100 text-slate-400'}`}
                       >
                         {isCopied ? <Check size={14} strokeWidth={3} /> : <Copy size={14} />}
                         {isCopied ? 'Copied' : 'Copy Link'}
                       </button>
                    </div>
                 </div>

                 <div className="flex items-center gap-2">
                    <Truck size={12} className="text-primary" />
                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">
                       Next Day Delivery • Accra & Kumasi
                    </p>
                 </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Recommended Section (Swipeable Reel) */}
      <section className="app-section bg-slate-50">
        <div className="app-container">
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 px-2">
              <div className="flex flex-col gap-2">
                 <div className="flex items-center gap-3">
                    <div className="w-1.5 h-8 bg-primary rounded-full" />
                    <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-slate-900 leading-none">Similar <span className="text-primary italic">Products</span></h2>
                 </div>
                 <p className="text-[9px] md:text-xs font-black text-slate-400 uppercase tracking-[0.3em] ml-4.5 md:ml-5">Customers also purchased these</p>
              </div>
              <Link href="/products" className="group text-[10px] md:text-xs font-black uppercase text-slate-400 hover:text-primary tracking-[0.2em] flex items-center gap-2 transition-colors mb-1">
                Explore More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
           </div>

           <div className="scroll-reel !py-2 md:!py-6">
              {relatedProducts.map((rp, i) => (
                <div
                  key={rp.id}
                  className="snap-center shrink-0 w-[220px] md:w-[280px] lg:w-auto reveal-up"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <ProductCard product={rp} />
                </div>
              ))}
           </div>
        </div>
      </section>
    </main>
  );
}
