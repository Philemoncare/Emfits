"use client";

import PageHeader from "@/components/shared/PageHeader";
import { Search, Plus, Minus, MessageCircle, ArrowRight } from "lucide-react";
import { useState } from "react";

const FAQ_DATA = [
  {
    category: "Ordering",
    items: [
      {
        question: "How do I place an order via WhatsApp?",
        answer: "Simply click the 'Order on WhatsApp' button anywhere on our site. It will open a chat with us and pre-fill a message. You can then tell us which detergents or cleaning items you'd like, and we'll handle the rest!"
      },
      {
        question: "Is there a minimum order amount?",
        answer: "No, there is no strict minimum order for residential deliveries. However, wholesale and bulk orders may have specific minimum quantities for discounted pricing."
      },
      {
        question: "Can I modify my order after placing it?",
        answer: "Yes, you can modify your order as long as it hasn't been dispatched. Just send us a quick message on WhatsApp."
      }
    ]
  },
  {
    category: "Delivery",
    items: [
      {
        question: "Where do you deliver?",
        answer: "We deliver across Ghana, including major cities like Takoradi, Sekondi, Accra, Tema, and Kumasi. We ensure your cleaning supplies reach you wherever you are."
      },
      {
        question: "How long does delivery take?",
        answer: "Within Takoradi and Sekondi, we offer same-day or next-day delivery. For other regions, it typically takes 2-3 business days."
      },
      {
        question: "What are the delivery charges?",
        answer: "Delivery charges vary depending on your location and the weight of the order. We provide a transparent quote during the WhatsApp ordering process."
      }
    ]
  },
  {
    category: "Payment",
    items: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept Mobile Money (MTN, Vodafone, AirtelTigo) and Cash on Delivery for most orders."
      },
      {
        question: "Is it safe to pay with MoMo?",
        answer: "Yes, all Mobile Money payments are processed through secure channels. You'll receive an official confirmation for every transaction."
      }
    ]
  }
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveItem(activeItem === id ? null : id);
  };

  const filteredFaqs = FAQ_DATA.map(category => ({
    ...category,
    items: category.items.filter(item => {
      const normalizedQuery = searchTerm.toLowerCase().trim();
      if (!normalizedQuery) return true;
      const queryTokens = normalizedQuery.split(/\s+/);
      const text = (item.question + " " + item.answer).toLowerCase();
      return queryTokens.every(token => text.includes(token));
    })
  })).filter(category => category.items.length > 0);

  return (
    <main>
      <PageHeader
        title="Common Questions"
        subtitle="Everything you need to know about Emfits Enterprise products, orders, and delivery across Ghana."
      />

      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -ml-32 -mt-32 animate-pulse-gentle"></div>

        <div className="custom-container">

          {/* Search Header */}
          <div className="max-w-3xl mx-auto mb-20 reveal-up">
            <div className="relative group">
              <input
                type="text"
                className="w-full bg-slate-50 border-none outline-none p-8 rounded-[2.5rem] text-xl font-medium focus:ring-4 focus:ring-primary/10 transition-all shadow-xl group-hover:shadow-2xl"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">
                <Search size={24} />
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((cat, catIdx) => (
                <div key={cat.category} className="mb-16 reveal-up" style={{transitionDelay: `${catIdx * 0.1}s`}}>
                  <h3 className="text-sm font-black uppercase tracking-[0.3em] text-primary mb-8 ml-4">{cat.category}</h3>

                  <div className="flex flex-col gap-4 stagger-container">
                    {cat.items.map((item, itemIdx) => {
                      const itemId = `${catIdx}-${itemIdx}`;
                      const isOpen = activeItem === itemId;
                      return (
                        <div key={itemId} className={`premium-card transition-all duration-500 overflow-hidden ${isOpen ? 'ring-2 ring-primary/20 shadow-2xl' : 'hover:shadow-lg'}`}>
                          <button
                            className="w-full flex items-center justify-between p-8 text-left outline-none"
                            onClick={() => toggleAccordion(itemId)}
                          >
                            <span className={`text-lg md:text-xl font-bold transition-colors ${isOpen ? 'text-primary' : 'text-slate-900'}`}>{item.question}</span>
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${isOpen ? 'bg-primary text-white rotate-180 shadow-lg shadow-primary/30' : 'bg-slate-100 text-slate-400'}`}>
                              {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                            </div>
                          </button>

                          <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'}`}>
                            <div className="p-8 pt-0 text-slate-500 leading-relaxed text-lg border-t border-slate-50 mt-4 font-medium">
                              {item.answer}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-20 reveal-scale">
                <div className="w-24 h-24 rounded-[2.5rem] bg-slate-50 flex items-center justify-center text-slate-300 mx-auto mb-8 shadow-inner animate-float">
                  <Search size={48} />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-slate-900">No results found</h3>
                <p className="text-slate-500 mb-8 font-medium">We couldn't find anything matching "{searchTerm}"</p>
                <button className="btn-premium btn-premium-primary" onClick={() => setSearchTerm("")}>Clear Search</button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full bg-primary/5 blur-[120px] -z-10 animate-pulse-gentle"></div>
        <div className="custom-container">
           <div className="bg-white/5 rounded-[4rem] p-12 md:p-24 text-center relative reveal-scale border border-white/10 shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] -z-10 animate-float-slow"></div>

              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">Still have questions?</h2>
              <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                If you couldn't find the answer you're looking for, please feel free to reach out to our team directly.
              </p>

              <div className="flex flex-wrap justify-center gap-6">
                <a href="/contact" className="btn-premium btn-premium-primary !px-12 group">
                  Contact Support <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </a>
                <a href={`https://wa.me/233202706607`} target="_blank" className="btn-premium btn-premium-outline !border-white !text-white hover:!bg-white hover:!text-slate-900 !px-12 group">
                  <MessageCircle size={20} className="text-emerald-500 mr-2" /> WhatsApp Now
                </a>
              </div>
           </div>
        </div>
      </section>
    </main>
  );
}
