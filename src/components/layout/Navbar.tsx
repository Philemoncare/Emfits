"use client";

import Link from "next/link";
import { Search, Menu, X, MessageCircle, ShoppingCart, ChevronRight, Package } from "lucide-react";
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
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);

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
    const timeoutId = setTimeout(() => {
      if (searchQuery.trim().length > 0) {
        const filtered = performSearch(searchQuery, selectedCategory);
        setResults(filtered);
        setShowResults(true);
      } else {
        setResults([]);
        setShowResults(false);
      }
    }, 150);
    return () => clearTimeout(timeoutId);
  }, [searchQuery, selectedCategory]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchActive(false);
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isSearchActive && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isSearchActive, isMobile]);

  const handleSearchSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setShowResults(false);
      setIsSearchActive(false);
      setIsMobileMenuOpen(false);
    }
  };

  const handleWhatsAppOrder = (e: React.MouseEvent, result: SearchResult) => {
    e.preventDefault();
    e.stopPropagation();
    const message = `Hello Emfits Enterprise! I'm interested in: ${result.title}\nPrice: ${result.price ? formatCurrency(result.price) : 'N/A'}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <>
      <header className={`header-app ${isScrolled ? 'shadow-app' : ''} ${isSearchActive ? '!z-[600]' : ''}`}>
        <div className="app-container h-full flex items-center justify-between gap-4 md:gap-8">

          {/* Logo - Global Persistent Brand */}
          <Link href="/" className={`flex-shrink-0 group z-[210] transition-all duration-500 ${isSearchActive ? 'hidden sm:flex' : 'flex'}`}>
            <div className="flex items-center gap-2 md:gap-3">
              <div className="bg-white p-1.5 md:p-2 rounded-xl md:rounded-2xl shadow-sm border border-slate-100 group-hover:shadow-md transition-all group-hover:-translate-y-0.5 flex-shrink-0">
                <img src="/images/logo.png" alt="Emfits Enterprise" className="h-7 md:h-10 lg:h-12 w-auto object-contain transition-all" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black tracking-tighter text-slate-900 leading-none whitespace-nowrap uppercase">EMFITS ENTERPRISE</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation (Center) */}
          <nav className={`hidden xl:flex items-center gap-8 transition-opacity duration-300 ${isSearchActive ? 'opacity-0 pointer-events-none w-0 overflow-hidden' : 'opacity-100'}`}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-primary transition-all relative group whitespace-nowrap"
              >
                {link.label}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary transition-all group-hover:w-full rounded-full"></span>
              </Link>
            ))}
          </nav>

          {/* Action Area (Search & Menu) */}
          <div className={`flex items-center justify-end transition-all duration-500 ${isSearchActive ? 'flex-grow max-w-4xl ml-2 md:ml-4' : 'flex-shrink-0 gap-1.5 md:gap-4'}`}>

            {/* Search Bar Interface */}
            <div className={`relative flex items-center transition-all duration-500 ${isSearchActive ? 'w-full' : 'w-10 h-10 md:w-14 md:h-14'}`} ref={searchRef}>
              <form
                onSubmit={handleSearchSubmit}
                className={`flex items-center transition-all duration-500 rounded-2xl md:rounded-[2rem] overflow-hidden ${
                  isSearchActive
                    ? 'bg-white border-2 border-primary shadow-2xl px-4 py-2 md:py-3 w-full'
                    : 'bg-slate-50 hover:bg-slate-100 border border-slate-100 w-10 h-10 md:w-14 md:h-14 justify-center'
                }`}
              >
                <Search
                  size={20}
                  className={`flex-shrink-0 transition-colors cursor-pointer ${isSearchActive ? 'text-primary mr-3' : 'text-slate-900'}`}
                  onClick={() => !isSearchActive && setIsSearchActive(true)}
                />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="What are you looking for?"
                  className={`bg-transparent border-none outline-none text-xs md:text-sm font-bold transition-all duration-300 ${isSearchActive ? 'w-full opacity-100' : 'w-0 opacity-0 pointer-events-none'}`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchActive(true)}
                />
                {isSearchActive && (
                  <button type="button" onClick={() => setIsSearchActive(false)} className="ml-2 text-slate-400 hover:text-primary">
                    <X size={18} strokeWidth={3} />
                  </button>
                )}
              </form>
            </div>

            {/* Menu Button (Three Dot Lines) */}
            {!isSearchActive && (
              <button
                className="w-10 h-10 md:w-14 md:h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-white hover:bg-primary active:scale-90 transition-all shadow-lg border-2 border-slate-800 flex-shrink-0"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu size={24} strokeWidth={2.5} className="md:w-7 md:h-7" />
              </button>
            )}
          </div>

          {/* Search Results Dropdown */}
          {isSearchActive && (
            <div className={`absolute top-full left-0 w-full mt-4 bg-white md:bg-white/95 backdrop-blur-2xl md:rounded-[2.5rem] overflow-hidden shadow-[0_25px_70px_-15px_rgba(0,0,0,0.2)] border border-white/40 animate-slide-up z-[650] ${isMobile ? 'fixed inset-x-0 top-[var(--header-height)] bottom-0 h-[calc(100vh-var(--header-height))] mt-0 rounded-none overflow-y-auto' : 'max-h-[80vh] overflow-y-auto'}`}>
              {results.length > 0 ? (
                <div className="p-4 md:p-6">
                  <div className="flex items-center justify-between mb-6 px-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">{results.length} Results</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {results.map((result) => (
                      <div
                        key={`${result.type}-${result.id}`}
                        className="flex items-center gap-4 p-4 hover:bg-slate-50 rounded-[1.5rem] transition-all cursor-pointer group relative border border-transparent hover:border-slate-100"
                        onClick={() => {
                          router.push(result.url);
                          setIsSearchActive(false);
                          setShowResults(false);
                        }}
                      >
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-50 rounded-2xl overflow-hidden flex-shrink-0 p-2 group-hover:scale-105 transition-transform">
                          {result.image ? (
                            <img src={result.image} alt={result.title} className="w-full h-full object-contain" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-primary/5 text-primary">
                              <Package size={24} />
                            </div>
                          )}
                        </div>
                        <div className="flex-grow min-w-0">
                          <p className="text-[10px] text-primary font-black uppercase tracking-widest mb-1 truncate">{result.category || result.type}</p>
                          <h4 className="text-sm md:text-base font-black text-slate-900 mb-1 line-clamp-1 group-hover:text-primary transition-colors">{result.title}</h4>
                          <div className="flex items-center gap-3">
                            {result.price && <span className="text-sm md:text-lg font-black text-slate-900">{formatCurrency(result.price)}</span>}
                            {result.type === 'product' && <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest bg-emerald-50 px-2 py-0.5 rounded">In Stock</span>}
                          </div>
                        </div>
                        <button
                          onClick={(e) => handleWhatsAppOrder(e, result)}
                          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-900 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-primary shadow-lg translate-x-4 group-hover:translate-x-0"
                        >
                          <MessageCircle size={18} />
                        </button>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={handleSearchSubmit}
                    className="w-full mt-6 py-4 rounded-2xl bg-slate-50 text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] hover:bg-primary hover:text-white transition-all border border-slate-100 hover:border-primary"
                  >
                    View All Results for "{searchQuery}"
                  </button>
                </div>
              ) : searchQuery.length > 0 ? (
                <div className="py-20 md:py-32 text-center px-8">
                  <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-200">
                    <Search size={40} className="animate-pulse" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tight">No results for "{searchQuery}"</h3>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest max-w-xs mx-auto mb-8">
                    Try checking your spelling or use more general keywords like "detergent" or "cleaner".
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {['Liquid', 'Powder', 'Softener', 'Hygiene'].map(tag => (
                      <button
                        key={tag}
                        onClick={() => setSearchQuery(tag)}
                        className="px-4 py-2 rounded-full bg-slate-50 text-[10px] font-black text-slate-500 uppercase tracking-widest hover:bg-primary hover:text-white transition-all"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-6 ml-4">Trending Now</p>
                      <div className="flex flex-col gap-1">
                        {['Liquid Detergent', 'Industrial Bleach', 'Aloe Hand Wash', 'Pine Disinfectant'].map(item => (
                          <button
                            key={item}
                            onClick={() => setSearchQuery(item)}
                            className="flex items-center gap-4 p-4 hover:bg-primary/5 rounded-2xl transition-all text-left group"
                          >
                            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                              <Search size={16} />
                            </div>
                            <span className="text-sm font-bold text-slate-600 group-hover:text-primary transition-colors">{item}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-6 ml-4">Top Categories</p>
                      <div className="grid grid-cols-2 gap-4">
                        {categories.map((cat) => (
                          <button
                            key={cat.name}
                            onClick={() => {
                              setSearchQuery(cat.name);
                              handleSearchSubmit();
                            }}
                            className="p-6 rounded-[2rem] bg-slate-50/50 hover:bg-white hover:shadow-2xl border border-transparent hover:border-slate-100 transition-all text-center group active:animate-pulse-scale"
                          >
                            <div className="w-16 h-16 mx-auto mb-3 opacity-80 group-hover:opacity-100 group-hover:animate-pulse-scale transition-all">
                              <img src={cat.image} alt="" className="w-full h-full object-contain" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-primary transition-colors">{cat.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Background Dim when searching */}
      {isSearchActive && (
        <div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[200] transition-opacity duration-500"
          onClick={() => {
            setIsSearchActive(false);
            setShowResults(false);
          }}
        />
      )}

      {/* Drawer Overlay (Mobile) */}
      <div className={`fixed inset-0 z-[300] lg:hidden ${isMobileMenuOpen ? 'visible' : 'invisible pointer-events-none'}`}>
        <div className={`absolute inset-0 bg-slate-900/40 backdrop-blur-md transition-opacity duration-700 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsMobileMenuOpen(false)} />

        <div className={`absolute top-0 right-0 h-full w-[85%] max-w-[340px] bg-white transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full shadow-none'}`}>
          <div className="flex flex-col h-full overflow-hidden">

            {/* Drawer Header */}
            <div className="p-8 flex items-center justify-between border-b border-slate-100">
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-1">EMFITS ENTERPRISE MENU</span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="w-12 h-12 flex items-center justify-center bg-slate-50 rounded-2xl text-slate-400 active:scale-90 transition-transform shadow-inner">
                <X size={24} strokeWidth={3} />
              </button>
            </div>

            {/* Nav Links Feed */}
            <div className="flex-grow overflow-y-auto p-6 scroll-smooth">
              <div className="flex flex-col gap-4">
                {NAV_LINKS.map((link, i) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="flex items-center justify-between p-6 rounded-[2rem] bg-slate-50 hover:bg-primary/5 hover:scale-[1.02] transition-all group border border-transparent hover:border-primary/10"
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{ transitionDelay: `${i * 0.05}s` }}
                  >
                    <div className="flex flex-col">
                      <span className="text-2xl font-black text-slate-900 group-hover:text-primary transition-colors tracking-tighter uppercase">{link.label}</span>
                      <span className="text-[9px] font-black text-slate-300 group-hover:text-primary/40 uppercase tracking-[0.3em] mt-1">EXPLORE COLLECTION</span>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-slate-200 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all shadow-sm">
                      <ChevronRight size={24} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Drawer Bottom Action */}
            <div className="p-8 bg-slate-50/50 border-t border-slate-100">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" className="btn-app-primary !py-6 !text-lg shadow-2xl shadow-primary/40 group">
                <MessageCircle size={28} className="mr-4 group-active:animate-bounce" /> WhatsApp Order
              </a>
              <p className="text-[9px] text-center text-slate-300 font-black uppercase tracking-[0.4em] mt-8">EMFITS ENTERPRISE GHANA • VERSION 2026.1</p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
