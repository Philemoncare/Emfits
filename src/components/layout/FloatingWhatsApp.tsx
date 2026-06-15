"use client";

import { WHATSAPP_NUMBER } from "@/lib/utils";
import { useState, useEffect } from "react";

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-24 right-6 lg:bottom-10 lg:right-10 z-[500] group transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-10 scale-50 pointer-events-none'
      } [.menu-open_&]:scale-0 [.menu-open_&]:pointer-events-none`}
    >
      {/* Modern Pulse Glow */}
      <div className="absolute inset-0 bg-emerald-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 animate-pulse-gentle transition-opacity" />

      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 transition-all duration-500 hover:rotate-[15deg] active:scale-90"
        aria-label="Contact on WhatsApp"
      >
        <div className="relative w-full h-full bg-white dark:bg-slate-900 rounded-full p-2.5 shadow-[0_10px_30px_rgba(16,185,129,0.3)] border border-emerald-100 dark:border-emerald-900/30">
          <img
            src="/images/whatssap logo.png"
            alt="WhatsApp"
            className="w-full h-full object-contain"
          />
        </div>
      </a>

      {/* Desktop Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 hidden lg:flex px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 pointer-events-none whitespace-nowrap border border-white/10 dark:border-slate-200">
         Orders & Support
         <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-slate-900 dark:bg-white rotate-45" />
      </div>
    </div>
  );
};

export default FloatingWhatsApp;
