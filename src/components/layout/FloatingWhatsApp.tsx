"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/utils";

const FloatingWhatsApp = () => {
  return (
    <div className="fixed bottom-24 right-6 lg:bottom-10 lg:right-10 z-[500] group transition-transform duration-500 [.menu-open_&]:scale-0 [.menu-open_&]:pointer-events-none">
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 lg:w-20 lg:h-20 transition-all duration-500 hover:scale-110 active:scale-95"
        aria-label="Contact on WhatsApp"
      >
        <img
          src="/images/whatssap logo.png"
          alt="WhatsApp"
          className="w-full h-full object-contain drop-shadow-2xl"
        />
      </a>

      {/* Desktop Tooltip - Re-added for usability */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 hidden lg:flex px-4 py-2 bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 pointer-events-none whitespace-nowrap">
         Chat with us
         <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45" />
      </div>
    </div>
  );
};

export default FloatingWhatsApp;
