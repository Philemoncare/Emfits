import { Metadata } from "next";
import ContactClient from "./ContactClient";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Contact Us | 24/7 Support Portal",
  description: "Need assistance with your hygiene essentials? Connect with Emfits Enterprise via WhatsApp or Email. We're here to help you 24/7.",
};

export default function ContactPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    }>
      <ContactClient />
    </Suspense>
  );
}
