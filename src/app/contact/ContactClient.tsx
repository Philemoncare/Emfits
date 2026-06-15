"use client";

import PageHeader from "@/components/shared/PageHeader";
import { Phone, MapPin, MessageCircle, Clock, Send, Mail, ChevronRight, X, Sparkles } from "lucide-react";
import { WHATSAPP_NUMBER, BUSINESS_EMAIL, formatCurrency } from "@/lib/utils";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";

export default function ContactClient() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("productId");

  const [showPrompt, setShowPrompt] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    subject: "",
    details: ""
  });

  useEffect(() => {
    if (productId) {
      const product = products.find(p => p.id === Number(productId));
      if (product) {
        setFormData(prev => ({
          ...prev,
          subject: `Order Inquiry: ${product.name}`,
          details: `I am interested in ordering the ${product.name} priced at ${formatCurrency(product.price)}. Please provide more details on how to proceed.`
        }));
      }
    }
  }, [productId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPrompt(true);
  };

  const sendWhatsApp = () => {
    const message = `*New Inquiry from Emfits Enterprise Website*\n\n*Name:* ${formData.name}\n*Subject:* ${formData.subject}\n*Details:* ${formData.details}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
    setShowPrompt(false);
  };

  const sendEmail = () => {
    const subject = encodeURIComponent(`Emfits Enterprise Website Inquiry: ${formData.subject}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nWhatsApp: ${formData.whatsapp}\n\nDetails:\n${formData.details}`);
    window.open(`mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`, '_blank');
    setShowPrompt(false);
  };

  return (
    <main className="bg-white min-h-screen">
      <PageHeader
        title="Get in Touch"
        subtitle="Need assistance with your hygiene essentials? Our team is available 24/7 via WhatsApp."
      />

      <section className="app-section">
        <div className="app-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Contact Action Feed */}
            <div className="lg:col-span-4 flex flex-col gap-6 reveal-left">
              {[
                { icon: MessageCircle, title: "Chat on WhatsApp", detail: "Open Portal", sub: "Fastest response (under 5 mins)", color: "text-emerald-500", bg: "bg-emerald-50", link: `https://wa.me/${WHATSAPP_NUMBER}` },
                { icon: Mail, title: "Official Email", detail: BUSINESS_EMAIL, sub: "For business inquiries", color: "text-blue-500", bg: "bg-blue-50", link: `mailto:${BUSINESS_EMAIL}` },
                { icon: MapPin, title: "Our Headquarters", detail: "Takoradi, Ghana", sub: "Primary Distribution Center", color: "text-rose-500", bg: "bg-rose-50" }
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer">
                  <div className="flex items-center gap-6">
                    <div className={`w-16 h-16 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 group-hover:rotate-6 shadow-sm`}>
                      <item.icon size={32} strokeWidth={2.5} />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-1">{item.title}</h4>
                      {item.link ? (
                        <a href={item.link} target="_blank" className="text-xl font-black text-slate-900 no-underline hover:text-primary transition-colors flex items-center justify-between uppercase tracking-tighter">
                           {item.detail} <ChevronRight size={20} className="text-slate-200 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </a>
                      ) : (
                        <p className="text-xl font-black text-slate-900 mb-0 uppercase tracking-tighter">{item.detail}</p>
                      )}
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">{item.sub}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Premium Message Console */}
            <div className="lg:col-span-8 reveal-right">
              <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl border border-slate-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 animate-pulse-gentle group-hover:bg-primary/10 transition-all"></div>

                <div className="relative z-10">
                   <h3 className="text-3xl md:text-6xl font-black mb-10 text-slate-900 uppercase tracking-tighter">Send <span className="text-primary italic">Direct</span> <br /> Message</h3>

                   <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="flex flex-col gap-3">
                         <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-6">Your Full Name</label>
                         <input id="name" type="text" value={formData.name} onChange={handleInputChange} className="w-full bg-slate-50 border-2 border-transparent outline-none p-6 rounded-[2rem] focus:border-primary/20 focus:bg-white transition-all text-slate-900 font-black uppercase tracking-tighter text-sm" placeholder="John Mensah" required />
                       </div>
                       <div className="flex flex-col gap-3">
                         <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-6">WhatsApp Number</label>
                         <input id="whatsapp" type="tel" value={formData.whatsapp} onChange={handleInputChange} className="w-full bg-slate-50 border-2 border-transparent outline-none p-6 rounded-[2rem] focus:border-primary/20 focus:bg-white transition-all text-slate-900 font-black uppercase tracking-tighter text-sm" placeholder="+233..." required />
                       </div>
                     </div>

                     <div className="flex flex-col gap-3">
                       <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-6">Inquiry Subject</label>
                       <input id="subject" type="text" value={formData.subject} onChange={handleInputChange} className="w-full bg-slate-50 border-2 border-transparent outline-none p-6 rounded-[2rem] focus:border-primary/20 focus:bg-white transition-all text-slate-900 font-black uppercase tracking-tighter text-sm" placeholder="Bulk Supply / Retail Order" required />
                     </div>

                     <div className="flex flex-col gap-3">
                       <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-6">Specific Details</label>
                       <textarea id="details" value={formData.details} onChange={handleInputChange} className="w-full bg-slate-50 border-2 border-transparent outline-none p-6 rounded-[2.5rem] focus:border-primary/20 focus:bg-white transition-all text-slate-900 font-bold text-sm min-h-[180px] resize-none" placeholder="Tell us exactly what you need..." required></textarea>
                     </div>

                     <div className="pt-6">
                       <button type="submit" className="btn-app-primary !py-7 !text-lg uppercase tracking-widest shadow-2xl shadow-primary/30 group">
                         DISPATCH MESSAGE <Send size={24} className="ml-2 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2" />
                       </button>
                     </div>
                   </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Modern Choice Modal */}
      {showPrompt && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-6">
           <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xl animate-fade-in" onClick={() => setShowPrompt(false)} />

           <div className="relative bg-white w-full max-w-lg rounded-[3rem] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.3)] animate-slide-up">
              <button
                onClick={() => setShowPrompt(false)}
                className="absolute top-6 right-6 w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 hover:bg-slate-100 transition-colors z-20"
              >
                <X size={24} />
              </button>

              <div className="p-10 md:p-14 text-center">
                 <div className="w-20 h-20 bg-primary/5 rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 border border-primary/10">
                    <img src="/images/logo.png" alt="Emfits Enterprise" className="w-10 h-10 object-contain opacity-70" />
                 </div>

                 <h4 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter mb-4">Choose Your <span className="text-primary italic">Portal</span></h4>
                 <p className="text-slate-400 font-bold uppercase tracking-widest text-[9px] md:text-[10px] mb-12 leading-relaxed max-w-[260px] mx-auto opacity-80">
                   How would you like to transmit your <br/> message to the Emfits Enterprise team?
                 </p>

                 <div className="grid grid-cols-1 gap-4">
                    <button
                      onClick={sendWhatsApp}
                      className="w-full group bg-emerald-500 hover:bg-emerald-600 text-white p-6 rounded-[1.8rem] flex items-center justify-between transition-all active:scale-[0.98] shadow-xl shadow-emerald-500/20"
                    >
                       <div className="flex items-center gap-4 text-left">
                          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                             <MessageCircle size={24} />
                          </div>
                          <div className="flex flex-col">
                             <span className="font-black uppercase tracking-tighter text-lg leading-tight">WhatsApp</span>
                             <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-70">Instant Reply</span>
                          </div>
                       </div>
                       <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={sendEmail}
                      className="w-full group bg-slate-900 hover:bg-black text-white p-6 rounded-[1.8rem] flex items-center justify-between transition-all active:scale-[0.98] shadow-xl shadow-slate-900/20"
                    >
                       <div className="flex items-center gap-4 text-left">
                          <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                             <Mail size={24} />
                          </div>
                          <div className="flex flex-col">
                             <span className="font-black uppercase tracking-tighter text-lg leading-tight">Official Email</span>
                             <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50">Business Inquiry</span>
                          </div>
                       </div>
                       <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                 </div>

                 <p className="mt-8 text-[9px] text-slate-300 font-black uppercase tracking-[0.4em]">Secure Encryption Active</p>
              </div>
           </div>
        </div>
      )}

      {/* Support Hours Section... */}
      <section className="app-section pt-0">
        <div className="app-container">
          <div className="bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white reveal-scale relative overflow-hidden shadow-2xl border-4 border-white/5 group">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-transparent blur-[120px] -z-10 animate-float-slow"></div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left reveal-left">
                <div className="w-24 h-24 rounded-[3rem] bg-white/10 flex items-center justify-center text-primary border-4 border-white/5 shadow-2xl mb-8 animate-float">
                  <Clock size={48} strokeWidth={2.5} />
                </div>
                <h2 className="text-4xl md:text-6xl font-black mb-4 text-white uppercase tracking-tighter">Support <br /> <span className="text-primary italic">Live Time</span></h2>
                <p className="text-slate-400 text-lg font-bold uppercase tracking-widest leading-relaxed">Our logistics and service teams are synchronized <br className="hidden md:block" /> to assist your cleaning journey.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-8 reveal-right">
                <div className="bg-white/5 backdrop-blur-md p-10 rounded-[3rem] border border-white/10 text-center min-w-[240px] hover:bg-white/10 transition-all duration-500 hover:scale-105 shadow-2xl group-hover:shadow-primary/10">
                  <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4">Monday - Saturday</p>
                  <h4 className="text-4xl font-black text-white mb-2 tracking-tighter">8AM - 7PM</h4>
                  <div className="w-8 h-1 bg-primary mx-auto rounded-full mt-4" />
                </div>
                <div className="bg-white/5 backdrop-blur-md p-10 rounded-[3rem] border border-white/10 text-center min-w-[240px] hover:bg-white/10 transition-all duration-500 hover:scale-105 shadow-2xl group-hover:shadow-primary/10">
                  <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4">Sunday Service</p>
                  <h4 className="text-4xl font-black text-white mb-2 tracking-tighter">10AM - 4PM</h4>
                  <div className="w-8 h-1 bg-slate-700 mx-auto rounded-full mt-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
