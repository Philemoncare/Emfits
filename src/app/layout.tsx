import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import BottomNav from "@/components/layout/BottomNav";
import CookieConsent from "@/components/layout/CookieConsent";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";

export const metadata: Metadata = {
  metadataBase: new URL('https://emfits.com'), // Replace with your actual domain when live
  title: {
    default: "Emfits Enterprise | Premium Cleaning Detergents Ghana",
    template: "%s | Emfits Enterprise"
  },
  description: "Experience the ultimate clean with Emfits Enterprise. High-performance detergents, fabric softeners, and home care solutions delivered across Ghana.",
  keywords: ["cleaning detergents Ghana", "laundry soap", "fabric softener Ghana", "Emfits Enterprise", "industrial cleaning supplies", "buy detergents Accra"],
  authors: [{ name: "Emfits Team" }],
  creator: "Emfits Enterprise",
  publisher: "Emfits Enterprise",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: "https://emfits.com",
    siteName: "Emfits Enterprise",
    title: "Emfits Enterprise | Premium Cleaning Detergents Ghana",
    description: "High-performance cleaning solutions delivered across Ghana. Experience the ultimate clean.",
    images: [{
      url: "/images/logo.png", // Using existing logo as fallback OG image
      width: 800,
      height: 800,
      alt: "Emfits Enterprise Logo"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emfits Enterprise | Premium Cleaning Detergents Ghana",
    description: "High-performance cleaning solutions delivered across Ghana.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;800;900&family=Open+Sans:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased pb-[calc(var(--bottom-nav-height)+env(safe-area-inset-bottom,0px))] lg:pb-0 overflow-x-hidden">
        <div className="flex flex-col min-h-screen overflow-x-hidden relative">
          <SmoothScroll>
            <Navbar />
            <main className="pt-[var(--header-height)] flex-grow">{children}</main>
            <Footer />
          </SmoothScroll>
          <BottomNav />
          <FloatingWhatsApp />
          <CookieConsent />
        </div>
      </body>
    </html>
  );
}
