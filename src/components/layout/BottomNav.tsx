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

  // Helper to check if a route is active
  const isRouteActive = (href: string) => {
    if (href === "#search") return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href) || pathname.startsWith("/product/"); // Also highlight Shop for single product pages
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[9999] lg:hidden animate-slide-up">
      {/* Premium Glassmorphism Container */}
      <div className="bg-white/95 backdrop-blur-2xl border-t border-slate-100 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] pb-[max(env(safe-area-inset-bottom),16px)] pt-3 px-2">
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
                className="relative flex flex-col items-center justify-center flex-1 py-1 transition-all active:scale-90 outline-none"
              >
                {/* Active Indicator Glow */}
                <div
                  className={`absolute inset-0 m-auto w-12 h-12 rounded-2xl transition-all duration-500 ease-out ${
                    isActive
                      ? 'bg-primary/10 opacity-100 scale-100'
                      : 'bg-transparent opacity-0 scale-50'
                  }`}
                />

                {/* Icon Container */}
                <div className={`relative z-10 transition-all duration-300 ${isActive ? 'scale-110 -translate-y-1' : ''}`}>
                  <item.icon
                    size={22}
                    strokeWidth={isActive ? 2.5 : 2}
                    className={`transition-colors duration-300 ${
                      isActive ? 'text-primary' : 'text-slate-400'
                    }`}
                  />

                  {/* Floating Dot Indicator */}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_rgba(14,165,233,0.8)]" />
                  )}
                </div>

                {/* Label */}
                <span
                  className={`text-[9px] font-black uppercase tracking-[0.1em] mt-1.5 transition-all duration-300 z-10 ${
                    isActive ? 'text-primary opacity-100' : 'text-slate-400 opacity-70'
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
