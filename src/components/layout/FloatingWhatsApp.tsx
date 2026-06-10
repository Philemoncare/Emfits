"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/utils";

const FloatingWhatsApp = () => {
  return (
    <div className="fixed bottom-24 right-6 lg:bottom-10 lg:right-10 z-[500] group">
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 bg-[#2581d4] text-white rounded-full shadow-[0_15px_35px_rgba(37,129,212,0.3)] transition-all duration-500 hover:scale-110 active:scale-95"
        aria-label="Contact on WhatsApp"
      >
        {/* Modern Chat Icon matching the provided style exactly */}
        <MessageCircle
          size={32}
          strokeWidth={2}
          className="w-7 h-7 lg:w-9 lg:h-9"
        />

        {/* Precise Notification Badge - Green with white border and white center */}
        <div className="absolute top-0 right-0 w-6 h-6 lg:w-7 lg:h-7 bg-[#34d399] rounded-full border-[3px] border-white shadow-sm flex items-center justify-center">
           <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 bg-white rounded-full" />
        </div>
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
