"use client";

import Link from "next/link";
import { MessageCircle, MapPin, Facebook, Instagram, Mail } from "lucide-react";
import { WHATSAPP_NUMBER, BUSINESS_LOCATION, FACEBOOK_URL, INSTAGRAM_URL, BUSINESS_EMAIL } from "@/lib/utils";
import { FOOTER_LINKS } from "@/data/navigation";

const Footer = () => {
  const socialLinks = [
    { Icon: Facebook, href: FACEBOOK_URL, label: "Facebook" },
    { Icon: Instagram, href: INSTAGRAM_URL, label: "Instagram" },
    { Icon: Mail, href: `mailto:${BUSINESS_EMAIL}`, label: "Email" },
  ];

  return (
    <footer className="bg-white pt-10 md:pt-16 pb-28 md:pb-16 border-t border-slate-100">
      <div className="app-container">

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">

          {/* Logo Column */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <img src="/images/logo.png" alt="Emfits Enterprise" className="h-16 md:h-24 w-auto object-contain mb-8 opacity-90" />
            <p className="text-slate-400 text-sm font-bold leading-relaxed max-w-[280px]">
              High-performance detergents and home care solutions delivered across Ghana. Engineered for brilliance.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 lg:col-span-2">
             <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-800 mb-6">Explore</h4>
                <ul className="space-y-4">
                   {FOOTER_LINKS.company.map(link => (
                      <li key={link.label}>
                         <Link href={link.href} className="text-slate-400 hover:text-primary transition-all font-bold text-xs">
                            {link.label}
                         </Link>
                      </li>
                   ))}
                </ul>
             </div>
             <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-800 mb-6">Legal</h4>
                <ul className="space-y-4">
                   {FOOTER_LINKS.support.map(link => (
                      <li key={link.label}>
                         <Link href={link.href} className="text-slate-400 hover:text-primary transition-all font-bold text-xs">
                            {link.label}
                         </Link>
                      </li>
                   ))}
                </ul>
             </div>
          </div>

          {/* Social / Contact Column */}
          <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
             <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-800 mb-8">Follow Hygiene</h4>
             <div className="flex gap-4 mb-10">
                {socialLinks.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all shadow-inner"
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </a>
                ))}
             </div>

             <div className="flex flex-col items-center lg:items-end gap-2">
                <div className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest">
                   Real Time Support
                </div>
                <a href={`mailto:${BUSINESS_EMAIL}`} className="text-slate-400 font-bold text-[10px] hover:text-primary transition-colors">
                   {BUSINESS_EMAIL}
                </a>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
           <p className="text-lg md:text-2xl text-slate-900 font-black uppercase tracking-tighter mb-0">
             EMFITS ENTERPRISE GHANA
           </p>
           <div className="flex gap-4 md:gap-8">
              {['MoMo Verified', 'Next Day Delivery', 'Certified Lab'].map(text => (
                <span key={text} className="text-slate-300 font-black text-[9px] uppercase tracking-[0.15em] whitespace-nowrap">{text}</span>
              ))}
           </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
