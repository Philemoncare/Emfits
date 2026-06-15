"use client";

import { ChevronRight, MessageCircle, ShoppingBag, Sparkles } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/utils";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Hero = () => {
  return (
    <section className="bg-white dark:bg-slate-950 py-2 md:py-4 lg:py-6 overflow-hidden transition-colors duration-500">
      <div className="app-container">

        {/* Advanced Swiper Hero Banner */}
        <div className="relative w-full h-[520px] sm:h-[550px] md:h-[400px] lg:h-[450px] xl:h-[500px] max-w-[1280px] mx-auto overflow-hidden rounded-[2rem] md:rounded-[2.5rem] shadow-2xl group bg-slate-100 dark:bg-slate-900">
           <Swiper
              modules={[Autoplay, Pagination, EffectFade]}
              effect={'fade'}
              speed={1000}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              loop={true}
              className="w-full h-full"
           >
              {/* Slide 1: Main Commercial Banner (Ultimate Shine) */}
              <SwiperSlide>
                <div className="relative w-full h-full bg-[#001e3c] overflow-hidden">

                  {/* --- DESKTOP VIEW: Original Image + Hotspots --- */}
                  <div className="hidden md:block w-full h-full">
                    <img
                      src="/images/hero.png"
                      alt="Emfits Enterprise Hero"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 z-10 flex flex-col justify-end pb-8 md:pb-12 lg:pb-16 px-8 md:px-12">
                        <div className="flex flex-row items-center gap-8 max-w-fit">
                          <Link
                              href="/products"
                              className="w-[180px] h-[50px] rounded-full opacity-0 cursor-pointer pointer-events-auto"
                              aria-label="Explore Now"
                          />
                          <a
                              href={`https://wa.me/${WHATSAPP_NUMBER}`}
                              target="_blank"
                              className="w-[140px] h-[50px] rounded-full opacity-0 cursor-pointer pointer-events-auto"
                              aria-label="Live Chat"
                          />
                        </div>
                    </div>
                  </div>

                  {/* --- MOBILE VIEW: Enhanced Layout with Image Background --- */}
                  <div className="md:hidden relative w-full h-full overflow-hidden">
                      {/* Background Image for Mobile */}
                      <div className="absolute inset-0">
                         <img
                            src="/images/hero.png"
                            alt="Emfits Enterprise Hero"
                            className="w-full h-full object-cover object-[70%_center] opacity-60"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-[#001e3c] via-[#001e3c]/60 to-transparent" />
                      </div>

                      {/* Content Overlay */}
                      <div className="relative z-10 h-full flex flex-col justify-end items-start px-6 pb-12">
                        <div className="w-full max-w-sm animate-reveal-up">
                          <h2 className="text-white text-[clamp(2.5rem,13vw,4rem)] font-black leading-[0.85] tracking-tighter uppercase mb-12">
                            The Ultimate <br />
                            <span className="text-primary italic">EMFITS ENTERPRISE SHINE</span>
                          </h2>

                          <div className="flex flex-col gap-3 w-full">
                            <Link
                                href="/products"
                                className="w-full bg-primary text-white py-4 rounded-xl flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest shadow-xl shadow-primary/20 active:scale-95 transition-all"
                            >
                               EXPLORE NOW <ChevronRight size={16} />
                            </Link>
                            <a
                                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                                target="_blank"
                                className="w-full py-4 border border-white/20 text-white rounded-xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 backdrop-blur-md active:scale-95 transition-all"
                            >
                               <MessageCircle size={16} /> LIVE CHAT
                            </a>
                          </div>
                        </div>
                      </div>
                  </div>

                </div>
              </SwiperSlide>

              {/* Slide 2: Superior Fabric Care (Shirt) */}
              <SwiperSlide>
                <div className="relative w-full h-full bg-[#eef6ff] dark:bg-slate-900 overflow-hidden">
                   <div className="flex flex-col md:flex-row h-full">
                      {/* Image - Stays on top on mobile, side on desktop */}
                      <div className="h-[45%] md:h-full md:w-1/2 relative overflow-hidden">
                        <img
                          src="/images/shirt.jpg"
                          alt="Pure White Shirt"
                          className="w-full h-full object-cover animate-float-slow"
                        />
                        {/* Smooth transition gradient for mobile */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#eef6ff] dark:from-slate-900 via-transparent to-transparent md:hidden" />
                      </div>

                      <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 md:px-12 lg:px-16 pt-4 pb-12 md:py-0">
                         <h2 className="text-slate-900 dark:text-white text-[clamp(1.5rem,4vw,2.8rem)] font-black mb-3 md:mb-4 leading-[1.1] tracking-tighter uppercase">
                            Keep Your <br className="hidden md:block" /> <span className="text-primary italic">Whites Whiter</span>
                         </h2>
                         <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm lg:text-base mb-4 md:mb-6 max-w-md leading-relaxed">
                            Experience the brilliance of advanced optical brighteners that protect fibers while making them shine.
                         </p>
                         <Link href="/products?category=Washing%20Powders" className="btn-app-primary !w-full sm:!w-fit !px-10 !py-3 md:!py-4 shadow-2xl">
                            Explore Powders
                         </Link>
                      </div>
                   </div>
                </div>
              </SwiperSlide>

              {/* Slide 3: High-Performance Cleaning (Splash Effect) */}
              <SwiperSlide>
                <div className="relative w-full h-full bg-[#005a98] overflow-hidden">
                  <div className="absolute inset-0">
                    <img
                      src="/images/sh2.jpg"
                      alt="Water Splash Clean"
                      className="w-full h-full object-cover opacity-60 md:opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>

                  <div className="relative h-full flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 md:px-12 lg:px-16 pt-10 pb-16 md:py-10">
                     <h2 className="text-white text-[clamp(1.5rem,4vw,2.8rem)] font-black mb-3 md:mb-4 leading-[1.1] tracking-tighter uppercase">
                        Deep Fiber <br/> <span className="text-blue-300 italic">Pure Hydration</span>
                     </h2>
                     <p className="text-white/80 text-xs md:text-sm lg:text-base mb-4 md:mb-6 max-w-xl leading-relaxed">
                        Our advanced surfactant technology breaks down dirt at a molecular level for a deeper, more hygienic clean.
                     </p>
                     <Link href="/products" className="btn-app-primary !w-full sm:!w-fit !px-10 !py-3 md:!py-4 flex items-center justify-center gap-4 group">
                         See the Difference <ChevronRight size={20} />
                     </Link>
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 4: Ultra Dishwashing Power (gallon2.png) */}
              <SwiperSlide>
                <div className="relative w-full h-full bg-[#f0fff4] dark:bg-slate-900 overflow-hidden">
                   <div className="flex flex-col md:grid md:grid-cols-2 h-full">
                      <div className="relative h-[40%] md:h-full w-full order-1 md:order-2 flex items-center justify-center p-6 md:p-12 lg:p-16">
                        <img
                          src="/images/gallon2.png"
                          alt="Phreshy Clean"
                          className="h-full md:max-h-full w-auto md:w-full object-contain drop-shadow-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#f0fff4] dark:from-slate-900 via-transparent to-transparent md:hidden" />
                      </div>

                      <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 md:px-12 lg:px-16 pb-12 md:pb-0 z-10 order-2 md:order-1">
                        <div className="bg-yellow-400 text-black px-4 py-1.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-3 w-fit shadow-lg">
                          Special Promo Offer
                        </div>
                        <h2 className="text-slate-900 dark:text-white text-[clamp(1.8rem,5vw,3.2rem)] font-black mb-3 md:mb-4 leading-tight tracking-tighter uppercase">
                          PHRESHY <br/> <span className="text-green-600">LIQUID SOAP</span>
                        </h2>
                        <p className="text-slate-800 dark:text-slate-200 text-xs md:text-sm lg:text-base font-black uppercase tracking-[0.15em] mb-4">
                          Hands • Dishes • Floors
                        </p>

                        <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-md p-3 md:p-4 rounded-[1.2rem] border border-green-100 dark:border-green-900/30 shadow-xl mb-4 md:mb-6 max-w-md">
                          <p className="text-slate-600 dark:text-slate-300 text-[11px] md:text-xs lg:text-sm font-bold uppercase tracking-wider leading-relaxed">
                            Experience the powerful way with Phreshy multi-purpose liquid soap. Engineered for powerful cleaning and long-lasting freshness.
                          </p>
                        </div>

                        <Link href="/products?category=Liquid%20Detergents" className="btn-app-primary !bg-green-600 hover:!bg-green-700 !w-full sm:!w-fit !px-12 !py-3 md:!py-4 shadow-2xl shadow-green-600/30">
                          SHOP NOW
                        </Link>
                      </div>
                   </div>
                </div>
              </SwiperSlide>

              {/* Slide 5: Brand Excellence Reveal */}
              <SwiperSlide>
                <div className="relative w-full h-full flex flex-col items-center justify-center bg-[#001e3c] overflow-hidden">
                   {/* Background Decorative Glows */}
                   <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
                      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary rounded-full blur-[100px] animate-pulse" />
                      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-400 rounded-full blur-[100px] animate-pulse-slow" />
                   </div>

                   <div className="relative z-10 flex flex-col items-center text-center px-6">
                      <div className="bg-white/10 backdrop-blur-md p-5 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] border border-white/10 mb-4 md:mb-6 shadow-2xl">
                        <img src="/images/logo.png" alt="Emfits Enterprise" className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain animate-float" />
                      </div>
                      <h2 className="text-white text-[clamp(2rem,8vw,5rem)] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] mb-4">EMFITS ENTERPRISE</h2>
                   </div>
                </div>
              </SwiperSlide>

           </Swiper>
        </div>

        <style jsx global>{`
          .swiper-pagination {
            bottom: 20px !important;
          }
          .swiper-pagination-bullet {
            background: rgba(255, 255, 255, 0.5) !important;
            width: 8px;
            height: 8px;
            transition: all 0.3s ease;
          }
          .swiper-pagination-bullet-active {
            background: #0077c8 !important;
            width: 24px;
            border-radius: 4px;
          }
          @media (max-width: 768px) {
            .swiper-pagination-bullet {
              width: 6px;
              height: 6px;
            }
            .swiper-pagination-bullet-active {
              width: 16px;
            }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.1; transform: scale(1); }
            50% { opacity: 0.2; transform: scale(1.1); }
          }
          .animate-pulse-slow {
            animation: pulse-slow 8s ease-in-out infinite;
          }
        `}</style>

        {/* Categories Feed - Universal Infinite Marquee */}
        <div className="mt-8 md:mt-12 lg:mt-16">
           <div className="flex items-center justify-between mb-6 md:mb-10 px-2">
              <div className="flex flex-col gap-1">
                <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-primary">Discover</h2>
                <p className="text-lg md:text-3xl font-black text-slate-900 dark:text-white tracking-tighter">Shop by Category</p>
              </div>
              <Link href="/products" className="text-[10px] md:text-xs font-black uppercase text-slate-400 hover:text-primary tracking-[0.2em] flex items-center gap-1 transition-colors">
                VIEW ALL <ChevronRight size={14} />
              </Link>
           </div>

           <div className="relative overflow-hidden py-4 -mx-4 md:-mx-10 lg:-mx-12">
              {/* Fade Edges */}
              <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10 pointer-events-none" />

              <div className="animate-marquee flex gap-6 md:gap-12 px-4">
                 {[...Array(4)].map((_, groupIndex) => (
                    <div key={groupIndex} className="flex gap-6 md:gap-12">
                       {[
                          { name: "Liquid Detergents", img: "/images/la;s.jpg" },
                          { name: "Washing Powders", img: "/images/lkad.jpg" },
                          { name: "Surface Care", img: "/images/pfhiow.jpg" },
                          { name: "Personal Hygiene", img: "/images/wesksd.jpg" },
                          { name: "Supreme Bleach", img: "/images/cdskw.jpg" }
                       ].map((cat, i) => (
                          <Link
                            key={`${groupIndex}-${i}`}
                            href={`/products?category=${encodeURIComponent(cat.name)}`}
                            className="flex flex-col items-center gap-4 md:gap-6 group"
                          >
                             <div className="w-24 h-24 md:w-48 md:h-48 rounded-[2rem] md:rounded-[3rem] bg-white dark:bg-slate-800 shadow-app border border-slate-100/50 dark:border-slate-700 flex items-center justify-center p-4 md:p-10 active:scale-95 group-hover:animate-pulse-scale active:animate-pulse-scale transition-all overflow-hidden relative">
                                <img
                                  src={cat.img}
                                  alt={cat.name}
                                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-primary/5 dark:bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                             </div>
                             <span className="text-[10px] md:text-xs font-black text-slate-800 dark:text-slate-200 tracking-widest whitespace-nowrap uppercase text-center group-hover:text-primary transition-colors">
                                {cat.name}
                             </span>
                          </Link>
                       ))}
                    </div>
                 ))}
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
