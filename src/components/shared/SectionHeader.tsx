"use client";

import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  viewAllLink?: string;
  onPrev?: () => void;
  onNext?: () => void;
}

const SectionHeader = ({ title, viewAllLink, onPrev, onNext }: SectionHeaderProps) => {
  return (
    <div className="flex items-end justify-between gap-6 mb-10 md:mb-16 px-2">
      <div className="flex flex-col gap-2">
        <h2 className="section-title text-slate-900">{title}</h2>
        <div className="w-12 h-1.5 bg-primary rounded-full" />
      </div>

      <div className="flex items-center gap-6">
        {viewAllLink && (
          <a href={viewAllLink} className="hidden sm:flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-slate-400 hover:text-primary transition-colors">
            Explore All <ArrowRight size={16} />
          </a>
        )}

        {onPrev && onNext && (
          <div className="flex gap-3">
            <button
              onClick={onPrev}
              className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-900 hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 shadow-sm active:scale-90"
            >
              <ChevronLeft size={24} strokeWidth={2.5} />
            </button>
            <button
              onClick={onNext}
              className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-900 hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 shadow-sm active:scale-90"
            >
              <ChevronRight size={24} strokeWidth={2.5} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionHeader;
