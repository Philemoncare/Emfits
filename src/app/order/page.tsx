"use client";

import PageHeader from "@/components/shared/PageHeader";
import { MessageCircle, CheckCircle, Clock, ShoppingBag } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/utils";

export default function OrderPage() {
  return (
    <main>
      <PageHeader
        title="WhatsApp Ordering"
        subtitle="The fastest and most personalized way to get fresh hygiene essentials in Takoradi."
      />

      <section className="section-padding bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center reveal-fade-up">
              <div className="mb-5">
                <div className="bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" style={{width: '100px', height: '100px'}}>
                  <MessageCircle size={50} />
                </div>
                <h2 className="display-5 fw-bold mb-3">Order via WhatsApp</h2>
                <p className="text-muted fs-5 mb-5">
                  We've streamlined our ordering process through WhatsApp to provide you with real-time updates on what's freshest today and to answer any specific questions you have.
                </p>
              </div>

              <div className="row g-4 text-start mb-5">
                {[
                  { title: "Personalized Service", desc: "Talk to a real person who knows our current inventory and farm arrivals." },
                  { title: "Real-time Freshness", desc: "Ask for photos of today's harvest before you buy." },
                  { title: "Easy Payment", desc: "Confirm your order and get our official MoMo number instantly." }
                ].map((item, i) => (
                  <div key={i} className="col-md-4">
                    <div className="card h-100 border-0 bg-light p-4 rounded-4 shadow-sm-hover transition-all">
                       <CheckCircle className="text-success mb-3" size={24} />
                       <h6 className="fw-bold mb-2">{item.title}</h6>
                       <p className="small text-muted mb-0">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-primary bg-opacity-5 p-5 rounded-5 border border-primary border-opacity-10 mb-5">
                <h3 className="fw-bold mb-4">Ready to start?</h3>
                <p className="mb-5">Click the button below to open WhatsApp and send us a message. Our team is ready to assist you with your order.</p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello! I'd like to place an order for some fresh organic produce.")}`}
                  target="_blank"
                  className="btn btn-success btn-lg rounded-pill px-5 py-3 fw-bold shadow-lg d-inline-flex align-items-center gap-3 transition-all hover-scale"
                >
                  <MessageCircle size={24} />
                  <span>Start My Order Now</span>
                </a>
              </div>

              <div className="row g-4 justify-content-center">
                <div className="col-md-5">
                   <div className="d-flex align-items-center gap-3 justify-content-center justify-content-md-start">
                      <Clock className="text-primary" size={20} />
                      <span className="small text-muted fw-bold">Typical response: Under 5 mins</span>
                   </div>
                </div>
                <div className="col-md-5">
                   <div className="d-flex align-items-center gap-3 justify-content-center justify-content-md-start">
                      <ShoppingBag className="text-primary" size={20} />
                      <span className="small text-muted fw-bold">Available 8am - 7pm daily</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
