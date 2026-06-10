"use client";

import { useState, useEffect } from "react";
import { Cookie, X, ShieldCheck, ArrowRight } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("emfits-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAction = (type: 'accepted' | 'declined') => {
    localStorage.setItem("emfits-cookie-consent", type);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-24 md:bottom-8 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 w-[calc(100%-2rem)] max-w-[380px] z-[10000] animate-slide-up">
      <div className="bg-[#0f172a] rounded-[2rem] p-5 md:p-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/5 relative overflow-hidden">

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-slate-600 hover:text-white transition-colors"
        >
          <X size={16} />
        </button>

        <div className="flex gap-4 mb-5">
          {/* Icon Box */}
          <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
            <Cookie size={20} strokeWidth={2.5} />
          </div>

          <div className="pt-1">
            <h4 className="text-white text-sm font-black uppercase tracking-[0.1em] mb-2">Cookie Policy</h4>
            <p className="text-slate-400 text-[10px] font-bold leading-relaxed uppercase tracking-widest">
              We use cookies to enhance your shopping experience and analyze our traffic.
            </p>
          </div>
        </div>

        {/* Buttons Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <button
            onClick={() => handleAction('accepted')}
            className="bg-primary text-white py-3.5 rounded-2xl font-black text-[9px] uppercase tracking-[0.15em] transition-all active:scale-95 shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
          >
            Accept All <ShieldCheck size={12} />
          </button>
          <button
            onClick={() => handleAction('declined')}
            className="bg-[#1e293b] text-slate-300 py-3.5 rounded-2xl font-black text-[9px] uppercase tracking-[0.15em] transition-all hover:bg-[#2d3a4f] active:scale-95 border border-white/5"
          >
            Essential Only
          </button>
        </div>

        <button className="w-full flex items-center justify-center gap-2 text-slate-500 hover:text-slate-300 transition-colors text-[8px] font-black uppercase tracking-[0.3em]">
          Read Full Policy <ArrowRight size={10} />
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
