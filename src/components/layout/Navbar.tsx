"use client";

import Link from "next/link";
import { Search, Menu, X, MessageCircle, ShoppingCart, ChevronRight, Package, ShoppingBag } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { formatCurrency, WHATSAPP_NUMBER } from "@/lib/utils";

import { performSearch, SearchResult } from "@/lib/search-service";
import { NAV_LINKS } from "@/data/navigation";
import { categories } from "@/data/products";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [showResults, setShowResults] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const checkMobile = () => setIsMobile(window.innerWidth < 1280);

    checkMobile();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);

    // Listen for search trigger from BottomNav
    const handleOpenSearch = () => {
      setIsSearchActive(true);
      setTimeout(() => searchInputRef.current?.focus(), 100);
    };
    window.addEventListener('open-search', handleOpenSearch);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener('open-search', handleOpenSearch);
    };
  }, []);

  useEffect(() => {
    // Ultra-fast live search
    const timeoutId = setTimeout(() => {
      if (searchQuery.trim().length > 0) {
        const filtered = performSearch(searchQuery, selectedCategory);
        setResults(filtered);
      } else {
        setResults([]);
      }
    }, 50);
    return () => clearTimeout(timeoutId);
  }, [searchQuery, selectedCategory]);

  useEffect(() => {
    if ((isSearchActive || isMobileMenuOpen) && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isSearchActive, isMobileMenuOpen, isMobile]);

  const handleSearchSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchActive(false);
    }
  };

  return (
    <>
      <header className={`header-app ${isScrolled ? 'shadow-app' : ''} bg-white/80 dark:bg-slate-950/80 dark:border-slate-800`}>
        <div className="app-container h-full flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="bg-white dark:bg-slate-800 p-1.5 md:p-2 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 transition-transform group-hover:scale-110">
                <img src="/images/logo.png" alt="Emfits Enterprise" className="h-7 md:h-10 w-auto" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none">EMFITS</span>
                <span className="text-[7px] md:text-[10px] font-black text-primary uppercase tracking-[0.3em] mt-0.5 md:mt-1">ENTERPRISE</span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link key={link.label} href={link.href} className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-primary transition-all">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Action Area */}
          <div className="flex items-center gap-2 md:gap-4">
            <button
              className="hidden xl:flex w-10 h-10 md:w-14 md:h-14 rounded-2xl bg-slate-50 dark:bg-white/5 items-center justify-center text-slate-900 dark:text-white hover:bg-primary hover:text-white transition-all"
              onClick={() => setIsSearchActive(true)}
            >
              <Search size={20} />
            </button>

            <button
              className="xl:hidden w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-900 flex items-center justify-center text-white"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Modern Search Portal - Guaranteed Visibility */}
      {isSearchActive && (
        <div className="fixed inset-0 bg-white dark:bg-slate-950 z-[99999] overflow-y-auto animate-in fade-in duration-300">
          <div className="sticky top-0 z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl p-4 border-b border-slate-100 dark:border-slate-800">
            <div className="max-w-4xl mx-auto flex items-center gap-4">
              <div className="flex-grow relative">
                <div className="flex items-center bg-slate-100 dark:bg-slate-900 rounded-2xl px-5 py-4 border-2 border-primary shadow-lg">
                  <Search size={20} className="text-primary mr-4" />
                  <input
                    autoFocus
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search for products..."
                    className="bg-transparent border-none outline-none text-base font-black w-full text-slate-900 dark:text-white uppercase tracking-tighter"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {searchQuery && (
                    <button onClick={() => setSearchQuery("")} className="ml-2 text-slate-400">
                      <X size={20} />
                    </button>
                  )}
                </div>
              </div>
              <button
                onClick={() => setIsSearchActive(false)}
                className="w-14 h-14 flex items-center justify-center bg-slate-900 text-white rounded-2xl shadow-xl active:scale-90 transition-transform"
              >
                <X size={24} strokeWidth={3} />
              </button>
            </div>
          </div>

          <div className="max-w-4xl mx-auto p-6 pb-32">
            {results.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in slide-in-from-bottom-4 duration-500">
                {results.map((result) => (
                  <div
                    key={`${result.type}-${result.id}`}
                    className="flex items-center gap-5 p-5 bg-slate-50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-800 rounded-[2.5rem] transition-all cursor-pointer group relative border border-transparent hover:border-primary/10 hover:shadow-2xl active:scale-[0.98]"
                    onClick={() => {
                      router.push(result.url);
                      setIsSearchActive(false);
                    }}
                  >
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-white dark:bg-slate-900 rounded-[1.8rem] p-3 flex-shrink-0 shadow-sm overflow-hidden group-hover:scale-105 transition-transform duration-500">
                      {result.image ? (
                        <img src={result.image} alt="" className="w-full h-full object-contain" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-primary/5 text-primary">
                          <Package size={32} strokeWidth={1.5} />
                        </div>
                      )}
                    </div>
                    <div className="flex-grow min-w-0">
                      <p className="text-[9px] font-black text-primary uppercase tracking-[0.2em] mb-1.5">{result.category || result.type}</p>
                      <h4 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tighter line-clamp-1 group-hover:text-primary transition-colors leading-tight">{result.title}</h4>

                      <div className="mt-2 flex items-center gap-3">
                        {result.price ? (
                          <span className="text-base font-black text-slate-900 dark:text-white">{formatCurrency(result.price)}</span>
                        ) : (
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Learn More</span>
                        )}

                        {result.type === 'product' && (
                          <div className="flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-1 rounded-lg">
                            <div className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse" />
                            <span className="text-[8px] font-black text-emerald-500 uppercase tracking-widest">Stock Ready</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-xl translate-x-4 group-hover:translate-x-0 flex-shrink-0">
                      <ChevronRight size={20} />
                    </div>
                  </div>
                ))}
              </div>
            ) : searchQuery.length > 0 ? (
              <div className="py-20 text-center">
                <div className="w-24 h-24 bg-primary/5 rounded-[3rem] flex items-center justify-center mx-auto mb-6 relative">
                  <Search size={40} className="text-primary/20" />
                  <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-[3rem] animate-spin"></div>
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">Searching for "{searchQuery}"...</h3>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-6">Suggestions</p>
                  <div className="flex flex-col gap-2">
                    {['Liquid Soap', 'Floor Cleaner', 'Toilet Cleaner'].map(item => (
                      <button key={item} onClick={() => setSearchQuery(item)} className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl text-left font-black uppercase tracking-tighter hover:bg-primary hover:text-white transition-all">
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-6">Categories</p>
                  <div className="grid grid-cols-2 gap-4">
                    {categories.map(cat => (
                      <button key={cat.name} onClick={() => setSearchQuery(cat.name)} className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-3xl text-center group hover:bg-white transition-all">
                        <img src={cat.image} className="w-16 h-16 mx-auto mb-2 group-hover:scale-110 transition-transform" alt="" />
                        <span className="text-[10px] font-black uppercase tracking-widest">{cat.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Modernized Mobile Menu Portal */}
      <div className={`fixed inset-0 z-[100000] xl:hidden transition-all duration-500 ${isMobileMenuOpen ? 'visible' : 'invisible pointer-events-none'}`}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-slate-950/60 backdrop-blur-md transition-opacity duration-700 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div className={`absolute right-0 top-0 bottom-0 w-[85%] max-w-[400px] bg-white dark:bg-slate-950 shadow-[-20px_0_80px_rgba(0,0,0,0.3)] transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
           <div className="flex flex-col h-full relative overflow-hidden">

              {/* Background Glow Decorations */}
              <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
              <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

              {/* Menu Header */}
              <div className="p-8 flex items-center justify-between border-b border-slate-50 dark:border-slate-900/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-50 dark:bg-slate-900 rounded-xl p-1.5 border border-slate-100 dark:border-slate-800">
                    <img src="/images/logo.png" alt="" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Menu</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-12 h-12 flex items-center justify-center bg-slate-900 text-white rounded-2xl active:scale-90 transition-transform shadow-lg"
                >
                  <X size={20} strokeWidth={3} />
                </button>
              </div>

              {/* Navigation Feed */}
              <div className="flex-grow overflow-y-auto p-6 flex flex-col gap-4">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-2 ml-4">Navigation</p>
                {NAV_LINKS.map((link, i) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`flex items-center justify-between p-6 rounded-[2rem] bg-slate-50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-900 border border-transparent hover:border-primary/10 transition-all group animate-in slide-in-from-right-8 duration-500`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex flex-col">
                      <span className="text-2xl font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors tracking-tighter uppercase">{link.label}</span>
                      <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Visit Page</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-slate-200 group-hover:text-primary group-hover:scale-110 transition-all shadow-sm">
                      <ChevronRight size={18} strokeWidth={3} />
                    </div>
                  </Link>
                ))}
              </div>

              {/* Menu Footer */}
              <div className="p-8 bg-slate-50/50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-900">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-6 text-center">Fast Support</p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  className="btn-whatsapp-portal !rounded-2xl !p-4 group"
                >
                  <div className="icon-box !w-10 !h-10">
                    <img src="/images/whatssap logo.png" alt="" />
                  </div>
                  <div className="text-box">
                    <span className="title !text-base">WhatsApp Order</span>
                    <span className="subtitle !text-[8px]">Instant factory response</span>
                  </div>
                </a>
                <p className="mt-8 text-[8px] text-center text-slate-300 dark:text-slate-600 font-black uppercase tracking-[0.4em]">Emfits Enterprise • 2026</p>
              </div>
           </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
