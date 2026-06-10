"use client";

import { LucideIcon } from "lucide-react";

interface IconBoxProps {
  icon: LucideIcon;
  title: string;
  desc: string;
  variant?: "horizontal" | "vertical";
  bg?: string;
}

const IconBox = ({ icon: Icon, title, desc, variant = "horizontal", bg }: IconBoxProps) => {
  if (variant === "vertical") {
    return (
      <div className={`p-8 md:p-10 rounded-[2.5rem] ${bg || "bg-white"} border border-slate-100/50 text-center flex flex-col items-center group hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500`}>
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-[2rem] bg-slate-50 text-primary flex items-center justify-center mb-6 md:mb-8 transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:rotate-6 shadow-inner">
           <Icon size={32} strokeWidth={2} />
        </div>
        <h4 className="text-lg md:text-xl font-black text-slate-900 mb-3 md:mb-4 uppercase tracking-tight">{title}</h4>
        <p className="text-xs md:text-sm text-slate-400 font-bold leading-relaxed mb-0">{desc}</p>
      </div>
    );
  }

  return (
    <div className={`p-6 md:p-8 rounded-[2.5rem] ${bg || "bg-white"} border border-slate-100 flex items-center transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 group`}>
      <div className="flex items-center gap-5 md:gap-8">
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all shadow-inner">
          <Icon size={28} strokeWidth={2} />
        </div>
        <div>
          <h4 className="text-base md:text-lg font-black text-slate-900 mb-1 md:mb-2 uppercase tracking-tight">{title}</h4>
          <p className="text-xs md:text-sm text-slate-400 font-bold mb-0 leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
};


export default IconBox;
