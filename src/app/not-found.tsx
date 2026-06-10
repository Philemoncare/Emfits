import Link from "next/link";
import { Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center reveal-up">
        <div className="w-24 h-24 md:w-32 md:h-32 bg-slate-50 rounded-[2.5rem] flex items-center justify-center text-slate-200 mx-auto mb-10 shadow-inner">
           <Search size={56} className="md:w-20 md:h-20" />
        </div>

        <h1 className="text-6xl md:text-9xl font-black text-slate-900 mb-4 tracking-tighter">404</h1>
        <h2 className="text-xl md:text-3xl font-black text-slate-800 uppercase tracking-widest mb-8">Page Not Found</h2>

        <p className="text-slate-400 font-bold uppercase tracking-widest text-xs md:text-sm max-w-xs mx-auto mb-12 leading-relaxed">
          The hygiene solutions you're looking for have moved to a different location.
        </p>

        <Link href="/" className="btn-app-primary !w-auto !inline-flex !px-12 !py-5 shadow-2xl shadow-primary/30">
          Back to Dashboard
        </Link>
      </div>
    </main>
  );
}
