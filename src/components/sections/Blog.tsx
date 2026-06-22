"use client";

import { Calendar, Tag, ArrowRight } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    title: "The Science of Deep Fiber Cleaning",
    excerpt: "Discover how Emfits Enterprise's scientific formulas protect your fabrics while providing a deep clean in Takoradi homes.",
    image: "/images/cewq.jpg",
    date: "12 May 2026",
    category: "Science",
  },
  {
    title: "5 Tips for Long-Lasting Fabric Freshness",
    excerpt: "Maintaining the fragrance of your clothes in the Ghanaian climate requires the right detergents and techniques.",
    image: "/images/shirt.jpg",
    date: "15 May 2026",
    category: "Tips",
  },
  {
    title: "Industrial Hygiene Standards for Businesses",
    excerpt: "How Takoradi's top hotels and schools maintain high hygiene levels using our bulk supply solutions.",
    image: "/images/sh2.jpg",
    date: "18 May 2026",
    category: "Business",
  },
];

const BlogSection = () => {
  return (
    <section className="app-section bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary/5 blur-[100px] rounded-full" />

      <div className="app-container relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 lg:mb-20 px-2 reveal-up">
          <div className="flex flex-col gap-2">
            <h2 className="display-medium text-slate-900 uppercase">Hygiene <span className="text-primary italic">Journals</span></h2>
            <div className="w-16 h-1.5 bg-primary rounded-full mt-2" />
          </div>
          <Link href="/blog" className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 hover:text-primary transition-colors">
            Read All Stories
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div key={i} className="reveal-up" style={{animationDelay: `${i * 0.15}s`}}>
              <article className="app-card h-full bg-white hover:shadow-2xl transition-all duration-500 group overflow-hidden border border-slate-100/50 flex flex-col">
                <div className="overflow-hidden aspect-video relative">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-black text-primary uppercase tracking-widest border border-primary/10">
                    {post.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-[10px] text-slate-400 font-black uppercase tracking-widest mb-4">
                    <Calendar size={12} className="text-primary" /> {post.date}
                  </div>
                  <h4 className="text-xl font-black text-slate-900 mb-4 leading-tight group-hover:text-primary transition-colors">{post.title}</h4>
                  <p className="text-slate-500 text-sm font-bold leading-relaxed mb-8 line-clamp-3">{post.excerpt}</p>

                  <Link href="#" className="mt-auto text-primary font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-2 hover:gap-4 transition-all">
                    Read Article <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all"><ArrowRight size={12} /></div>
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default BlogSection;
