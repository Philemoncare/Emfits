"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Home, ShoppingBag, Truck, Info, Phone, Search } from "lucide-react";
import { useEffect, useState } from "react";

const BottomNav = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(pathname);

  useEffect(() => {
    setActiveTab(pathname);
  }, [pathname]);

  const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Shop", href: "/products", icon: ShoppingBag },
    { label: "Search", href: "#search", icon: Search, isAction: true },
    { label: "About", href: "/about", icon: Info },
    { label: "Contact", href: "/contact", icon: Phone },
  ];

  // Helper to check if a route is active with precise matching
  const isRouteActive = (href: string) => {
    if (href === "#search") return false;

    // Exact match for home
    if (href === "/") return pathname === "/";

    // Match shop for both listing and single product pages
    if (href === "/products") {
      return pathname.startsWith("/products") || pathname.startsWith("/product/");
    }

    // For other pages, check if current path starts with the link href
    // This handles nested routes if any exist, while avoiding "/" matching everything
    return pathname === href || (href !== "/" && pathname.startsWith(href + "/"));
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[9999] lg:hidden animate-slide-up">
      {/* Premium Glassmorphism Container */}
      <div className="bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border-t border-slate-100 dark:border-slate-800 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] pb-[max(env(safe-area-inset-bottom),16px)] pt-3 px-2">
        <div className="max-w-md mx-auto flex items-center justify-around">
          {navItems.map((item) => {
            const isActive = isRouteActive(item.href);

            return (
              <button
                key={item.label}
                onClick={() => {
                  if (item.isAction && item.href === "#search") {
                    window.dispatchEvent(new CustomEvent('open-search'));
                    return;
                  }
                  setActiveTab(item.href);
                  router.push(item.href);
                }}
                className="relative flex flex-col items-center justify-center flex-1 py-2 transition-all active:scale-95 outline-none group"
              >
                {/* Modern Pill Indicator */}
                <div
                  className={`absolute inset-x-1 top-1 bottom-1 rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                    isActive
                      ? 'bg-primary/10 dark:bg-primary/20 opacity-100 scale-100'
                      : 'bg-transparent opacity-0 scale-75'
                  }`}
                />

                {/* Icon & Label Container */}
                <div className={`relative z-10 flex flex-col items-center transition-all duration-500 ${isActive ? '-translate-y-0.5' : ''}`}>
                  <item.icon
                    size={20}
                    strokeWidth={isActive ? 3 : 2}
                    className={`transition-all duration-300 ${
                      isActive ? 'text-primary' : 'text-slate-400 dark:text-slate-500'
                    }`}
                  />

                  {/* Label */}
                  <span
                    className={`text-[8px] font-black uppercase tracking-[0.2em] mt-1.5 transition-all duration-300 ${
                      isActive ? 'text-primary opacity-100' : 'text-slate-400 dark:text-slate-500 opacity-60'
                    }`}
                  >
                    {item.label}
                  </span>

                  {/* Modern Active Dot */}
                  <div className={`mt-1 h-1 rounded-full bg-primary transition-all duration-500 shadow-[0_0_10px_rgba(14,165,233,0.5)] ${isActive ? 'w-4' : 'w-0'}`} />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
