import PageHeader from "@/components/shared/PageHeader";
import { ShieldCheck, Truck, Users, ArrowRight, CheckCircle2, Zap, Target, Heart } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Our Mission & Excellence",
  description: "Redefining hygiene standards across West Africa through scientific innovation and local excellence. Learn about Emfits Enterprise foundations.",
};

export default function AboutPage() {
  return (
    <main className="bg-white overflow-hidden">
      <PageHeader
        title="Our Mission"
        subtitle="Redefining hygiene standards across West Africa through scientific innovation and local excellence."
      />

      {/* Narrative Section: The Emfits Enterprise Edge */}
      <section className="py-20 md:py-32 relative">
        <div className="app-container">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full lg:w-[45%] relative reveal-left">
              <div className="relative z-10 aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl group">
                <img
                  src="/images/washing machine washer.jpg"
                  alt="Emfits Enterprise Scientific Approach"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />
              </div>

              {/* Decorative Element */}
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            </div>

            <div className="w-full lg:w-[55%] reveal-right">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[2px] w-8 bg-primary" />
                <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">Est. 2026 • Ghana</span>
              </div>

              <h2 className="text-4xl md:text-7xl font-black text-slate-900 leading-[0.9] mb-10 uppercase tracking-tighter">
                 Cleaning <br /> <span className="text-primary italic">Perfected.</span>
              </h2>

              <p className="text-slate-500 text-base md:text-xl leading-relaxed font-bold mb-12 uppercase tracking-wide opacity-90">
                Emfits Enterprise was founded to bridge the gap between international quality and local accessibility. We engineer products that don't just clean—they protect your environment and empower your lifestyle.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Scientific Formulations", desc: "Every drop is lab-tested for maximum potency and safety.", icon: Zap },
                  { title: "Eco-Conscious Legacy", desc: "Moving towards sustainable packaging and biodegradable agents.", icon: Target }
                ].map((item, i) => (
                  <div key={i} className="group flex items-start gap-6 p-6 rounded-[1.5rem] bg-slate-50 hover:bg-white border border-slate-100 transition-all duration-300 hover:shadow-xl">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <item.icon size={22} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h4 className="text-sm md:text-base font-black text-slate-900 uppercase tracking-tighter mb-1">{item.title}</h4>
                      <p className="text-xs md:text-sm text-slate-400 font-bold leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars of Purpose: Trending Grid */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 blur-[150px] animate-pulse" />

        <div className="app-container relative z-10">
          <div className="text-center mb-20 reveal-up">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">Our Brand Pillars</h2>
            <p className="text-primary font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">The Foundation of Every Emfits Enterprise Product</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Quality Control",
                desc: "Our ISO-standard manufacturing processes ensure consistency in every batch produced.",
                color: "bg-blue-500"
              },
              {
                icon: Truck,
                title: "Logistics Agility",
                desc: "We've built a proprietary delivery network that reaches the most remote regions of Ghana.",
                color: "bg-emerald-500"
              },
              {
                icon: Users,
                title: "Human Centric",
                desc: "Our support doesn't end at the sale; we are community partners in hygiene and health.",
                color: "bg-amber-500"
              }
            ].map((value, i) => (
              <div key={i} className="group p-10 rounded-[2.5rem] bg-white/5 backdrop-blur-md border border-white/10 reveal-up hover:bg-white/10 transition-all duration-500">
                 <div className={`w-16 h-16 rounded-2xl ${value.color} text-white flex items-center justify-center mb-10 shadow-lg group-hover:scale-110 transition-transform`}>
                    <value.icon size={32} strokeWidth={1.5} />
                 </div>
                 <h4 className="text-xl font-black text-white uppercase tracking-widest mb-6">{value.title}</h4>
                 <p className="text-slate-400 text-sm md:text-base font-bold leading-relaxed opacity-80">{value.desc}</p>

                 <div className="mt-10 h-[2px] w-12 bg-white/20 group-hover:w-full transition-all duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visionary Banner */}
      <section className="py-24 md:py-40 relative">
        <div className="app-container">
           <div className="bg-gradient-to-br from-primary via-primary-dark to-slate-900 rounded-[3rem] p-12 md:p-24 text-white relative overflow-hidden reveal-scale shadow-2xl">
              {/* Abstract Motion Background */}
              <div className="absolute inset-0">
                 <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-white/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                 <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-blue-400/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
              </div>

              <div className="relative z-10 text-center flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-8">
                  <Heart className="text-white fill-white animate-pulse" size={32} />
                </div>

                <h2 className="text-4xl md:text-8xl font-black mb-10 leading-[0.85] uppercase tracking-tighter">
                  Start your <br/> <span className="italic opacity-80 underline decoration-white/20 underline-offset-8">Clean</span> Journey
                </h2>

                <p className="text-white/60 text-sm md:text-2xl mb-14 max-w-3xl mx-auto font-bold uppercase tracking-[0.2em] leading-relaxed">
                  Join the thousands of homes across Ghana transforming their spaces with Emfits Enterprise.
                </p>

                <Link href="/products" className="group bg-white text-slate-900 px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs md:text-sm hover:bg-slate-50 transition-all flex items-center gap-3 shadow-2xl shadow-black/20">
                  EXPLORE THE COLLECTION <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
           </div>
        </div>
      </section>

      {/* Established Footer Branding */}
      <div className="py-12 border-t border-slate-50 flex flex-col items-center gap-4 bg-white">
        <div className="w-px h-12 bg-gradient-to-b from-primary/30 to-transparent" />
        <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.6em] text-slate-300">
          Established 2026
        </span>
      </div>
    </main>
  );
}
