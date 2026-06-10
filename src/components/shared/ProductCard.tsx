"use client";

import { MessageCircle } from "lucide-react";
import { Product } from "@/data/products";
import { formatCurrency, WHATSAPP_NUMBER } from "@/lib/utils";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const handleWhatsAppOrder = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const message = `Hello Emfits Enterprise! I'm interested in: ${product.name}\nPrice: ${formatCurrency(product.price)}\n\nPlease assist me.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <Link
      href={`/product/${product.id}`}
      className="group relative flex flex-col bg-white rounded-[2.5rem] p-4 md:p-6 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-transparent hover:border-slate-100 h-full"
    >
      {/* Image Container with elevated shadow */}
      <div className="relative aspect-square rounded-[2rem] bg-slate-50/50 flex items-center justify-center overflow-hidden mb-6 group-hover:bg-white group-hover:animate-pulse-scale active:animate-pulse-scale transition-all duration-500 shadow-inner">
        <img
          src={product.image}
          alt={product.name}
          className="w-[85%] h-[85%] object-contain transition-transform duration-700 md:group-hover:scale-105 drop-shadow-2xl"
        />

        {/* Modern Top Seller Badge */}
        {product.id === 1 && (
          <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md text-white text-[8px] md:text-[9px] font-black uppercase px-3 py-1.5 rounded-full shadow-xl z-10 flex items-center gap-2 border border-white/10">
            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full shadow-[0_0_8px_#fbbf24]" />
            TOP SELLER
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-grow px-1">
        <p className="text-[9px] md:text-[10px] text-primary font-black uppercase tracking-[0.2em] mb-2">
          {product.category}
        </p>

        <h3 className="text-sm md:text-lg font-black text-slate-900 mb-6 leading-tight group-hover:text-primary transition-colors min-h-[2.4em] tracking-tight">
          {product.name}
        </h3>

        {/* Pricing Row */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            <span className="text-[8px] md:text-[10px] font-black text-slate-300 uppercase tracking-widest mb-0.5">Price</span>
            <span className="text-lg md:text-2xl font-black text-slate-900 tracking-tighter">
              {formatCurrency(product.price)}
            </span>
          </div>

          <button
            onClick={handleWhatsAppOrder}
            className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white border border-slate-100 flex items-center justify-center transition-all active:scale-90 shadow-sm md:group-hover:bg-slate-900 md:group-hover:text-white md:group-hover:shadow-xl md:group-hover:-translate-y-1 duration-300"
          >
            <MessageCircle size={18} className="md:w-6 md:h-6" strokeWidth={2} />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
