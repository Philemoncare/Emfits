"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Banners = () => {
  const banners = [
    { title: "Items on SALE", desc: "Discounts up to 30%", bg: "/images/banner-ad-1.jpg", color: 'bg-primary' },
    { title: "Combo offers", desc: "Discounts up to 50%", bg: "/images/banner-ad-2.jpg", color: 'bg-danger' },
    { title: "Discount Coupons", desc: "Discounts up to 40%", bg: "/images/banner-ad-3.jpg", color: 'bg-warning' },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row g-4">
          {banners.map((item, i) => (
            <div key={i} className="col-md-4 reveal-fade-up" style={{animationDelay: `${i * 0.15}s`}}>
              <div className="position-relative overflow-hidden rounded-4 shadow-sm group hover-premium transition-all h-100" style={{minHeight: '280px'}}>
                <img src={item.bg} alt={item.title} className="w-100 h-100 object-fit-cover transition-all" style={{transitionDuration: '1s'}} />
                <div className="position-absolute inset-0 bg-dark opacity-25 group-hover:opacity-40 transition-all"></div>
                <div className="position-absolute top-0 start-0 p-4 p-xl-5 text-white h-100 d-flex flex-column justify-content-center z-1">
                  <span className={`badge ${item.color} mb-2 w-fit rounded-pill text-uppercase px-3 py-2`} style={{fontSize: '10px'}}>Limited Offer</span>
                  <h3 className="fw-bold mb-1 display-6">{item.title}</h3>
                  <p className="mb-4 opacity-75">{item.desc}</p>
                  <Link href="#products" className="btn btn-light btn-sm rounded-pill px-4 fw-bold text-uppercase d-inline-flex align-items-center gap-2 hover-scale">
                    Shop Now <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Banners;
