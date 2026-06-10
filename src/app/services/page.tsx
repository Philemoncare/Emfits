"use client";

import PageHeader from "@/components/shared/PageHeader";
import { MessageCircle, Truck, Droplets, ShieldCheck, ShoppingBag, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      icon: MessageCircle,
      title: "One-Tap WhatsApp Orders",
      desc: "Skip the complex checkout processes. Chat directly with our team to place your order or request custom cleaning bundles.",
      color: "text-emerald-500",
      bg: "bg-emerald-50"
    },
    {
      icon: Truck,
      title: "Nationwide Express Delivery",
      desc: "Our dedicated logistics network ensures that your cleaning supplies are delivered to your doorstep quickly and reliably.",
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      icon: ShoppingBag,
      title: "Wholesale & Bulk Supply",
      desc: "Competitive wholesale rates for hotels, schools, and offices to keep your premises sparkling clean and sanitized.",
      color: "text-amber-500",
      bg: "bg-amber-50"
    }
  ];

  return (
    <main className="bg-white">
      <PageHeader
        title="Hygiene Solutions"
        subtitle="Emfits Enterprise provides more than just detergents; we offer a complete hygiene partnership for your home."
      />

      <section className="app-section pt-4">
        <div className="app-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-container">
            {services.map((service, idx) => (
              <div key={idx} className="p-10 bg-slate-50 rounded-[2rem] border border-slate-100 reveal-up hover:bg-white transition-all shadow-sm group">
                <div className={`w-16 h-16 ${service.bg} ${service.color} rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform`}>
                  <service.icon size={32} />
                </div>
                <h3 className="text-xl font-black mb-4 text-slate-800 uppercase tracking-widest">{service.title}</h3>
                <p className="text-slate-400 font-bold leading-relaxed mb-0 text-sm">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - App Flow */}
      <section className="app-section bg-slate-50 overflow-hidden">
        <div className="app-container">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            <div className="w-full lg:w-1/2 reveal-up">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Order Process</span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-10 leading-tight uppercase tracking-tighter">The Seamless <br /> <span className="text-primary italic">EMFITS ENTERPRISE</span> Experience</h2>

              <div className="space-y-8">
                {[
                  { step: "01", title: "Select Product", desc: "Choose items from our live catalog on the web or mobile app." },
                  { step: "02", title: "One-Click Chat", desc: "Tap the WhatsApp icon to start an instant order conversation." },
                  { step: "03", title: "Confirm & Receive", desc: "Our team confirms details and dispatches your hygiene essentials." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group items-start">
                    <div className="text-3xl font-black text-primary/20 group-hover:text-primary transition-colors">{item.step}</div>
                    <div>
                      <h4 className="text-lg font-black text-slate-800 uppercase tracking-widest mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-0">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative reveal-up pt-12 lg:pt-0">
              <div className="rounded-[3rem] overflow-hidden shadow-app-lg border-4 border-white animate-float-slow">
                 <img src="/images/vde.jpg" alt="Services" className="w-full h-auto object-cover" />
              </div>
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-[2rem] shadow-2xl border border-slate-100 hidden md:block">
                 <div className="flex flex-col items-center">
                    <span className="text-4xl font-black text-primary mb-1">24/7</span>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Live Support</span>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Recommended Section (Swipeable Reel) */}
      <section className="app-section bg-white">
        <div className="app-container">
           <div className="bg-slate-900 rounded-[2rem] p-10 md:p-20 text-center relative overflow-hidden reveal-scale shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full bg-primary/10 blur-[100px] -z-0" />
              <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight uppercase tracking-tighter relative z-10">Bulk <span className="text-primary italic">Inquiries</span></h2>
              <p className="text-slate-400 text-sm md:text-lg mb-12 max-w-2xl mx-auto font-bold uppercase tracking-widest relative z-10 leading-relaxed">
                Hotels, Schools, and Institutions - Get custom quotes for large scale hygiene requirements.
              </p>
              <div className="flex flex-wrap justify-center gap-6 relative z-10">
                <Link href="/products" className="btn-app-primary !w-auto !px-12 !rounded-3xl shadow-lg">View Full Collection</Link>
                <a href={`https://wa.me/233202706607`} target="_blank" className="btn-app-outline !w-auto !border-white !bg-white !text-slate-900 hover:!bg-slate-50 !px-12 !rounded-3xl shadow-lg">WhatsApp Now</a>
              </div>
           </div>
        </div>
      </section>
    </main>
  );
}
