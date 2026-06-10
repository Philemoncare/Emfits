"use client";

import PageHeader from "@/components/shared/PageHeader";
import { Truck, MapPin, Clock, CreditCard, CheckCircle, Package, ArrowRight, ShieldCheck } from "lucide-react";

export default function DeliveryPage() {
  const deliveryAreas = [
    { zone: "Zone A", areas: "Market Circle, Beach Road, Airport Ridge, Chapel Hill", price: "GHS 10" },
    { zone: "Zone B", areas: "Anaji, Effiakuma, Kwesimintsim, New Takoradi", price: "GHS 15" },
    { zone: "Zone C", areas: "Kojokrom, Eshiem, Apowa, Inchaban", price: "GHS 25" },
    { zone: "Zone D", areas: "Tarkwa, Sekondi, Axim (Western Region Express)", price: "GHS 40+" }
  ];

  return (
    <main>
      <PageHeader
        title="Delivery Logistics"
        subtitle="Fast, secure, and reliable delivery across Ghana. We ensure your cleaning products reach you in perfect condition."
      />

      <section className="section-padding bg-white overflow-hidden">
        <div className="custom-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 stagger-container">
            {[
              { icon: Clock, title: "Same-Day Delivery", desc: "Order before 10 AM and receive your items by the evening within Takoradi.", color: "bg-blue-50 text-blue-500" },
              { icon: ShieldCheck, title: "Secure Packaging", desc: "Special leak-proof packing ensures chemicals stay safe during transit.", color: "bg-emerald-50 text-emerald-500" },
              { icon: MapPin, title: "Nationwide Access", desc: "Receive WhatsApp notifications as your order moves from factory to door.", color: "bg-amber-50 text-amber-500" }
            ].map((feature, i) => (
              <div key={i} className="premium-card p-10 reveal-up group">
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 group-hover:rotate-6 shadow-sm`}>
                  <feature.icon size={32} strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-slate-900">{feature.title}</h4>
                <p className="text-slate-500 mb-0 leading-relaxed font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid-layout items-center">
            <div className="lg:col-span-6 reveal-left">
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Our Coverage</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-slate-900">Delivery <span className="text-gradient">Zones</span></h2>
              <p className="text-slate-500 text-lg md:text-xl mb-12 leading-relaxed font-medium">
                We've optimized our routes to ensure efficient delivery and fair pricing. If your specific area isn't listed, contact us for a custom quote.
              </p>

              <div className="overflow-hidden rounded-[3rem] border border-slate-100 shadow-2xl bg-white group">
                <div className="bg-slate-900 text-white p-6 px-10 flex justify-between font-bold text-xs uppercase tracking-widest">
                  <span>Zone / Coverage</span>
                  <span>Fee</span>
                </div>
                {deliveryAreas.map((area, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row justify-between p-8 px-10 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors group">
                    <div className="mb-4 sm:mb-0">
                      <h5 className="font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">{area.zone}</h5>
                      <p className="text-xs text-slate-400 mb-0 font-medium">{area.areas}</p>
                    </div>
                    <div className="text-primary font-black text-xl">{area.price}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 reveal-right">
              <div className="relative pt-12 lg:pt-0">
                <div className="rounded-[4rem] overflow-hidden shadow-2xl rotate-3 transform transition-transform hover:rotate-0 duration-700 animate-float-slow">
                   <img src="/images/qwsa.jpg" alt="Delivery Team" className="w-full h-auto object-cover scale-110 hover:scale-125 transition-transform duration-1000" />
                </div>
                <div className="absolute top-10 left-10 glass-effect p-6 rounded-3xl animate-float border-white/20 shadow-2xl">
                  <span className="text-primary font-bold text-xs uppercase tracking-widest">Takoradi Wide Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works - Horizontal Revealed Motion */}
      <section className="section-padding bg-slate-50">
        <div className="custom-container">
          <div className="text-center mb-20 reveal-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">How it Works</h2>
            <p className="text-slate-500 text-lg font-medium">A simple 4-step process from our factory to your home.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-container">
            {[
              { icon: Package, title: "Order Placement", desc: "Choose your products from our catalog and order via WhatsApp." },
              { icon: CheckCircle, title: "Quality Check", desc: "Our team inspects every batch for consistency and safe sealing." },
              { icon: Truck, title: "Dispatch", desc: "Items are packed securely and loaded for immediate dispatch." },
              { icon: CreditCard, title: "Receive & Pay", desc: "Your products arrive at your door. Pay via MoMo or cash." }
            ].map((step, i) => (
              <div key={i} className="text-center reveal-up group">
                <div className="relative w-32 h-32 bg-white rounded-[2.5rem] shadow-xl flex items-center justify-center mx-auto mb-10 transition-all group-hover:scale-110 group-hover:rotate-6 animate-float" style={{animationDelay: `${i * 0.5}s`}}>
                  <step.icon size={48} className="text-primary" />
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-black text-sm shadow-lg">
                    {i + 1}
                  </div>
                </div>
                <h4 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-primary transition-colors">{step.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Handling */}
      <section className="section-padding bg-white">
        <div className="custom-container">
          <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-white text-center relative overflow-hidden reveal-scale shadow-2xl">
            <div className="absolute top-0 right-0 w-full h-full bg-primary/10 blur-[120px] -z-10 animate-pulse-gentle"></div>

            <h2 className="text-4xl md:text-7xl font-bold mb-8 leading-tight text-white">Need Bulk Supply?</h2>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              Ordering for an institution, hotel, or laundry service? We offer bulk supply routes and scheduled drops for consistent cleanliness.
            </p>
            <div className="flex justify-center">
               <a href="/contact" className="btn-premium btn-premium-primary !px-12 group">
                 Get a Custom Quote <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
               </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
