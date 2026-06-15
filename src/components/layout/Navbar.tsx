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
    if ((isSearchActive || isMobileMenuOpen) && isMobile) {
      document.body.style.overflow = 'hidden';
      if (isMobileMenuOpen) {
        document.body.classList.add('menu-open');
      }
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('menu-open');
    };
  }, [isSearchActive, isMobileMenuOpen, isMobile]);

  const handleSearchSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setShowResults(false);
      setIsSearchActive(false);
      setIsMobileMenuOpen(false);
    }
  };

  const handleOrderRedirect = (e: React.MouseEvent, result: SearchResult) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(`/contact?productId=${result.id}`);
    setIsSearchActive(false);
  };

  return (
    <>
      <header className={`header-app ${isScrolled ? 'shadow-app' : ''} ${isSearchActive ? '!z-[600]' : ''} bg-white/80 dark:bg-slate-950/80 dark:border-slate-800`}>
        <div className="app-container h-full flex items-center justify-between gap-4 md:gap-8">

          {/* Logo - Global Persistent Brand */}
          <Link href="/" className={`flex-shrink-0 group z-[210] transition-all duration-500 ${isSearchActive ? 'hidden sm:flex' : 'flex'}`}>
            <div className="flex items-center gap-2 md:gap-3">
              <div className="bg-white dark:bg-slate-800 p-1.5 md:p-2 rounded-xl md:rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 group-hover:shadow-md transition-all group-hover:-translate-y-0.5 flex-shrink-0 overflow-hidden">
                <img src="/images/logo.png" alt="Emfits Enterprise" className="h-7 md:h-10 lg:h-12 w-auto object-contain transition-all group-hover:scale-110" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black tracking-tighter text-slate-900 dark:text-white leading-none whitespace-nowrap uppercase group-hover:text-primary transition-colors">EMFITS ENTERPRISE</span>
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
                    ? 'bg-white dark:bg-slate-900 border-2 border-primary shadow-2xl px-4 py-2 md:py-3 w-full'
                    : 'bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-100 dark:border-white/10 w-10 h-10 md:w-14 md:h-14 justify-center'
                }`}
              >
                <Search
                  size={20}
                  className={`flex-shrink-0 transition-colors cursor-pointer ${isSearchActive ? 'text-primary mr-3' : 'text-slate-900 dark:text-white'}`}
                  onClick={() => !isSearchActive && setIsSearchActive(true)}
                />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="What are you looking for?"
                  className={`bg-transparent border-none outline-none text-xs md:text-sm font-bold transition-all duration-300 dark:text-white ${isSearchActive ? 'w-full opacity-100' : 'w-0 opacity-0 pointer-events-none'}`}
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
                className="xl:hidden w-10 h-10 md:w-14 md:h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-white hover:bg-primary active:scale-90 transition-all shadow-lg border-2 border-slate-800 flex-shrink-0"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu size={24} strokeWidth={2.5} className="md:w-7 md:h-7" />
              </button>
            )}
          </div>

          {/* Search Results Dropdown */}
          {isSearchActive && (
            <div className={`absolute top-full left-0 w-full mt-4 bg-white dark:bg-slate-950 md:bg-white/95 dark:md:bg-slate-950/95 backdrop-blur-2xl md:rounded-[2.5rem] overflow-hidden shadow-[0_25px_70px_-15px_rgba(0,0,0,0.2)] border border-white/40 dark:border-slate-800 animate-slide-up z-[650] ${isMobile ? 'fixed inset-x-0 top-[var(--header-height)] bottom-0 h-[calc(100vh-var(--header-height))] mt-0 rounded-none overflow-y-auto' : 'max-h-[80vh] overflow-y-auto'}`}>
              {results.length > 0 ? (
                <div className="p-4 md:p-6">
                  <div className="flex items-center justify-between mb-6 px-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 dark:text-slate-500">{results.length} Results</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {results.map((result) => (
                      <div
                        key={`${result.type}-${result.id}`}
                        className="flex items-center gap-4 p-4 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-[1.5rem] transition-all cursor-pointer group relative border border-transparent hover:border-slate-100 dark:hover:border-slate-800"
                        onClick={() => {
                          router.push(result.url);
                          setIsSearchActive(false);
                          setShowResults(false);
                        }}
                      >
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden flex-shrink-0 p-2 group-hover:scale-105 transition-transform">
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
                          <h4 className="text-sm md:text-base font-black text-slate-900 dark:text-white mb-1 line-clamp-1 group-hover:text-primary transition-colors">{result.title}</h4>
                          <div className="flex items-center gap-3">
                            {result.price && <span className="text-sm md:text-lg font-black text-slate-900 dark:text-white">{formatCurrency(result.price)}</span>}
                            {result.type === 'product' && <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded">In Stock</span>}
                          </div>
                        </div>
                        <button
                          onClick={(e) => handleOrderRedirect(e, result)}
                          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-900 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-primary shadow-lg translate-x-4 group-hover:translate-x-0"
                        >
                          <ShoppingBag size={18} />
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
                      <div className="flex flex-col gap-2">
                        {['Liquid Detergent', 'Industrial Bleach', 'Aloe Hand Wash', 'Pine Disinfectant'].map(item => (
                          <button
                            key={item}
                            onClick={() => setSearchQuery(item)}
                            className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-900/50 hover:bg-primary/5 dark:hover:bg-primary/10 rounded-[1.5rem] transition-all text-left group border border-transparent hover:border-primary/10"
                          >
                            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                              <Search size={18} />
                            </div>
                            <span className="text-sm font-black uppercase tracking-tight text-slate-600 dark:text-slate-300 group-hover:text-primary transition-colors">{item}</span>
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
                        className="p-6 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl border border-transparent hover:border-slate-100 dark:hover:border-slate-700 transition-all text-center group active:scale-95 overflow-hidden relative"
                      >
                        <div className="relative z-10 w-24 h-24 mx-auto mb-3 transition-transform duration-500 group-hover:scale-110">
                          <img src={cat.image} alt="" className="w-full h-full object-contain drop-shadow-xl" />
                        </div>
                        <span className="relative z-10 text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 group-hover:text-primary transition-colors">{cat.name}</span>

                        {/* Subtle background glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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
      <div className={`fixed inset-0 z-[1500] xl:hidden ${isMobileMenuOpen ? 'visible' : 'invisible pointer-events-none'}`}>
        <div className={`absolute inset-0 bg-slate-900/40 backdrop-blur-md transition-opacity duration-700 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsMobileMenuOpen(false)} />

        <div className={`absolute top-[var(--header-height)] right-4 bottom-24 w-[280px] bg-white dark:bg-slate-900 rounded-[2.5rem] transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden border border-slate-100 dark:border-slate-800 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-[calc(100%+2rem)]'}`}>
          <div className="flex flex-col h-full">

            {/* Drawer Header - More Compact */}
            <div className="p-6 flex items-center justify-between border-b border-slate-50 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
              <div className="flex flex-col">
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-primary">Menu</span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="w-10 h-10 flex items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-xl text-slate-400 active:scale-90 transition-transform">
                <X size={20} strokeWidth={3} />
              </button>
            </div>

            {/* Nav Links Feed - Compact Grid-ish Style */}
            <div className="flex-grow overflow-y-auto p-4 scroll-smooth">
              <div className="flex flex-col gap-2">
                {NAV_LINKS.map((link, i) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="flex items-center justify-between p-4 rounded-2xl bg-slate-50/50 dark:bg-slate-800/50 hover:bg-primary/5 dark:hover:bg-primary/10 transition-all group border border-transparent hover:border-primary/10 dark:hover:border-primary/20"
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{ transitionDelay: `${i * 0.05}s` }}
                  >
                    <div className="flex flex-col">
                      <span className="text-lg font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors tracking-tighter uppercase">{link.label}</span>
                      <span className="text-[8px] font-black text-slate-300 dark:text-slate-500 group-hover:text-primary/40 uppercase tracking-widest">Explore</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center text-slate-200 dark:text-slate-500 group-hover:text-primary group-hover:scale-110 transition-all shadow-sm">
                      <ChevronRight size={16} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Drawer Bottom Action - Integrated Perfectly */}
            <div className="p-4 bg-slate-50/30 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                className="btn-whatsapp-portal group !p-3 !rounded-2xl"
              >
                <div className="icon-box !w-10 !h-10 !rounded-xl">
                  <img src="/images/whatssap logo.png" alt="WhatsApp" className="!w-7 !h-7" />
                </div>
                <div className="text-box">
                  <span className="title !text-sm">WhatsApp Order</span>
                  <span className="subtitle !text-[8px]">Instant Response</span>
                </div>
              </a>
              <p className="text-[8px] text-center text-slate-300 dark:text-slate-600 font-black uppercase tracking-[0.3em] mt-4">EMFITS ENTERPRISE • 2026</p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
