import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | 24/7 Support Portal",
  description: "Need assistance with your hygiene essentials? Connect with Emfits Enterprise via WhatsApp or Email. We're here to help you 24/7.",
};

export default function ContactPage() {
  return <ContactClient />;
}
