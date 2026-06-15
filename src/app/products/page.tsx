import { Metadata } from "next";
import ProductsClient from "./ProductsClient";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Shop All Products | Premium Cleaning Solutions",
  description: "Browse our full collection of high-performance detergents, fabric softeners, and home care essentials. Quality cleaning delivered to your door in Ghana.",
  keywords: ["buy detergents online", "cleaning supplies Ghana", "wholesale detergents", "Emfits products"],
};

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    }>
      <ProductsClient />
    </Suspense>
  );
}
