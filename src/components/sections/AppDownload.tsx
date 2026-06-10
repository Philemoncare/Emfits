"use client";

import { WHATSAPP_NUMBER } from "@/lib/utils";
import { MessageCircle, Truck, CheckCircle2 } from "lucide-react";

const DeliveryContact = () => {
  return (
    <section className="app-section bg-white overflow-hidden">
      <div className="app-container">

        {/* Premium Informational Showcase */}
        <div className="relative bg-slate-950 rounded-[1.5rem] md:rounded-[3rem] p-6 md:p-20 lg:p-24 overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-[60%] h-full bg-primary/10 -z-0 blur-[150px] animate-pulse-gentle" />
           <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />

           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-center">
              <div className="reveal-left">
                 <h2 className="text-xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-8 uppercase leading-tight tracking-tighter">
                   Nationwide <br /> <span className="text-primary italic">Express Delivery</span>
                 </h2>
                 <p className="text-xs md:text-xl text-slate-400 font-medium leading-relaxed mb-6 md:mb-10">
                   We've perfected our supply chain to ensure your premium hygiene products reach your doorstep in pristine condition, anywhere in Ghana.
                 </p>

                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 md:mb-12">
                    {[
                      { icon: Truck, text: "Same-Day Takoradi Courier", sub: "Orders before 10AM" },
                      { icon: CheckCircle2, text: "Secure Packaging", sub: "Leak-proof guarantee" }
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col gap-2 p-4 md:p-6 rounded-xl md:rounded-3xl bg-white/5 border border-white/10">
                        <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                          <item.icon size={16} className="md:w-6 md:h-6" />
                        </div>
                        <div>
                          <p className="text-white font-black text-[10px] md:text-sm uppercase tracking-wider mb-0.5">{item.text}</p>
                          <p className="text-slate-500 text-[8px] md:text-[10px] font-bold uppercase tracking-widest">{item.sub}</p>
                        </div>
                      </div>
                    ))}
                 </div>

                 <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" className="btn-app-primary lg:w-fit lg:px-12 !py-4 md:!py-6 !text-sm md:!text-lg shadow-primary/20">
                   <MessageCircle size={18} className="mr-2 md:w-6 md:h-6" /> Connect & Order Now
                 </a>
              </div>

              <div className="hidden lg:block relative group">
                 <div className="relative z-10 overflow-hidden rounded-[2.5rem] border-8 border-white/5 shadow-2xl bg-white/10">
                    <img src="/images/gallon2.png" alt="Delivery" className="w-full h-auto object-cover transition-transform duration-[10s] group-hover:scale-110" />
                 </div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default DeliveryContact;
