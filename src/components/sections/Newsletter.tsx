"use client";

import { MessageCircle, Sparkles } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/utils";

const Newsletter = () => {
  return (
    <section className="app-section bg-white overflow-hidden">
      <div className="app-container">
        <div className="relative bg-slate-900 rounded-[3rem] p-10 md:p-24 overflow-hidden shadow-2xl reveal-scale">
          {/* Animated Background Gradients */}
          <div className="absolute top-0 right-0 w-full h-full bg-primary/10 blur-[120px] -z-0 animate-pulse-gentle" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[50%] bg-blue-500/10 blur-[100px] rounded-full" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full mb-8">
                <Sparkles size={14} className="text-primary" />
                <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Join the Elite</span>
              </div>

              <h2 className="text-4xl md:text-7xl font-black text-white mb-8 leading-[0.9] uppercase tracking-tighter">
                Hygiene <br /> <span className="text-primary italic">Updates</span>
              </h2>

              <p className="text-slate-400 text-lg md:text-xl font-bold uppercase tracking-widest leading-relaxed mb-10 max-w-md">
                Join our private WhatsApp broadcast for stock alerts and exclusive cleaning tips in Takoradi.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  className="btn-app-primary !w-full sm:!w-fit !px-12 !py-6 !text-lg shadow-2xl shadow-primary/30 group"
                >
                  <MessageCircle size={24} className="mr-3 group-active:animate-bounce" /> Join Broadcast List
                </a>
              </div>
            </div>

            <div className="relative reveal-right hidden lg:block">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[3rem] shadow-2xl relative">
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary rounded-3xl flex items-center justify-center text-white shadow-2xl animate-float">
                  <MessageCircle size={40} />
                </div>

                <div className="space-y-8">
                  {[
                    "Weekly Bulk Supply Discounts",
                    "New Product Priority Access",
                    "Professional Hygiene Tips",
                    "Flash Sales Alerts"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-6 group">
                      <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                        <Sparkles size={18} />
                      </div>
                      <span className="text-white font-black text-xs uppercase tracking-widest group-hover:text-primary transition-colors">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Newsletter;
