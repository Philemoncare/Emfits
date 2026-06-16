"use client";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  hideIndicator?: boolean;
}

const PageHeader = ({ title, subtitle, hideIndicator = false }: PageHeaderProps) => {
  return (
    <section className="relative pt-12 pb-10 md:pt-24 md:pb-20 overflow-hidden bg-white">
      {/* Advanced Geometric Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[60%] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[50%] bg-blue-400/5 rounded-full blur-[100px] animate-pulse-slow" />

        {/* Modern Mesh Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
             style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="app-container relative z-10">
        <div className="max-w-4xl mx-auto text-center reveal-up">
          <h1 className="text-3xl md:text-7xl font-black mb-6 md:mb-8 text-slate-900 tracking-tighter leading-[1] md:leading-[0.9] uppercase px-2">
            {title.split(' ').map((word, i) => (
              <span key={i} className={i % 2 !== 0 ? "text-primary italic" : ""}>{word} </span>
            ))}
          </h1>
          {subtitle && (
            <p className="text-[10px] md:text-xl text-slate-400 md:text-slate-500 font-bold leading-relaxed max-w-2xl mx-auto px-6 uppercase tracking-[0.2em] md:tracking-widest opacity-80">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Modern Scroll Indicator Element */}
      {!hideIndicator && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <div className="w-px h-12 md:h-16 bg-gradient-to-t from-primary to-transparent opacity-50" />
        </div>
      )}
    </section>
  );
};

export default PageHeader;
