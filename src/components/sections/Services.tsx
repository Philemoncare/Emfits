"use client";

import { Package, ShieldCheck, Award, PiggyBank, BadgePercent } from "lucide-react";
import IconBox from "../shared/IconBox";

const services = [
  { icon: Package, title: "Fast Delivery", desc: "Reliable delivery across Takoradi." },
  { icon: ShieldCheck, title: "WhatsApp Ordering", desc: "Direct communication with us." },
  { icon: Award, title: "Quality Guarantee", desc: "Freshness and quality promised." },
  { icon: PiggyBank, title: "Best Prices", desc: "Affordable rates on all items." },
  { icon: BadgePercent, title: "Daily Offers", desc: "New discounts every morning." },
];

const Services = () => {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden border-t border-slate-50">
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.15]"></div>
      <div className="app-container relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {services.map((item, i) => (
            <div key={i} className="reveal-up" style={{transitionDelay: `${i * 0.1}s`}}>
              <IconBox icon={item.icon} title={item.title} desc={item.desc} variant="vertical" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Services;
