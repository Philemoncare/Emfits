"use client";

import { Droplets, ShieldCheck, Truck, ShoppingCart } from "lucide-react";

const Features = () => {
  const steps = [
    { icon: ShoppingCart, title: "Select Products", desc: "Browse our premium hygiene catalog and select your essentials." },
    { icon: Droplets, title: "WhatsApp Order", desc: "Confirm your order with one tap via our dedicated WhatsApp portal." },
    { icon: Truck, title: "Express Delivery", desc: "Fast and reliable doorstep delivery across Ghana within 24 hours." }
  ];

  return (
    <section className="app-section bg-slate-50 relative">
      {/* Decorative Blur */}
      <div className="absolute top-[-10%] right-[-5%] w-[30%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />

      <div className="app-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-24">

           {/* Left Content */}
           <div className="w-full lg:w-2/5 reveal-left">
              <h2 className="text-2xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 md:mb-8 uppercase leading-tight tracking-tighter">How to <br className="hidden lg:block" /> <span className="text-primary italic">SHOP EMFITS ENTERPRISE</span></h2>
              <p className="text-sm md:text-xl text-slate-500 font-medium leading-relaxed max-w-md mb-8 md:mb-12">
                 Experience the future of hygiene shopping. We've streamlined everything for maximum convenience.
              </p>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-3 md:-space-x-4">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-lg relative z-[i]">
                       <img src={`/images/safw.jpg`} alt="User" className="w-full h-full object-cover" />
                     </div>
                   ))}
                </div>
                <div>
                   <div className="text-base md:text-xl font-black text-slate-900 leading-none mb-1">5,000+</div>
                   <div className="text-[9px] md:text-[10px] text-slate-400 font-black uppercase tracking-widest">Happy Customers</div>
                </div>
              </div>
           </div>

           {/* Right Cards - Optimized for Mobile Viewport */}
           <div className="w-full lg:w-3/5 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 reveal-right">
              {steps.map((item, i) => (
                <div key={i} className="bg-white p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] shadow-app border border-slate-100 flex flex-col items-start text-left group transition-all duration-500 min-h-[160px] md:min-h-0">
                   <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-slate-50 flex items-center justify-center text-primary shadow-inner mb-4 md:mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <item.icon size={20} className="md:w-8 md:h-8" />
                   </div>
                   <h4 className="text-sm md:text-base font-black text-slate-900 uppercase tracking-wider mb-2 md:mb-4 leading-tight">{item.title}</h4>
                   <p className="text-[11px] md:text-sm text-slate-400 font-bold leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
