"use client";

const LogoMarquee = () => {
  return (
    <section className="bg-slate-950 py-12 md:py-16 overflow-hidden border-y border-white/5 relative">
      {/* Edge Fading */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 z-20 pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="flex items-center mx-16 group" style={{ perspective: "1000px" }}>
            <div
              className="relative w-16 h-16 md:w-24 md:h-24 transition-all duration-1000 ease-in-out group-hover:rotate-y-180 animate-slow-flip"
              style={{
                transformStyle: "preserve-3d",
                animationDelay: `${i * 0.8}s`
              }}
            >
              {/* Front Side */}
              <div className="absolute inset-0 w-full h-full backface-hidden z-10 flex items-center justify-center">
                <img
                  src="/images/logo.png"
                  alt="Emfits Enterprise Logo"
                  className="w-full h-full object-contain opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>

              {/* Back Side (The Flip) */}
              <div
                className="absolute inset-0 w-full h-full backface-hidden flex items-center justify-center bg-primary/10 rounded-full border border-primary/20"
                style={{ transform: "rotateY(180deg)" }}
              >
                <img
                  src="/images/logo.png"
                  alt="Emfits Enterprise Logo"
                  className="w-[80%] h-[80%] object-contain brightness-125 contrast-125"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes slow-flip {
          0%, 90%, 100% { transform: rotateY(0deg); }
          95% { transform: rotateY(180deg); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .animate-slow-flip {
          animation: slow-flip 8s ease-in-out infinite;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
};

export default LogoMarquee;
