"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { products } from "@/data/products";
import ProductCard from "../shared/ProductCard";
import SectionHeader from "../shared/SectionHeader";
import { useRef } from "react";

interface ProductCarouselProps {
  title: string;
}

const ProductCarousel = ({ title }: ProductCarouselProps) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="section-padding reveal-up">
      <div className="custom-container">

        <SectionHeader
          title={title}
          viewAllLink="#"
          onPrev={() => prevRef.current?.click()}
          onNext={() => nextRef.current?.click()}
        />

        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1.2}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            if (typeof swiper.params.navigation !== 'boolean' && swiper.params.navigation) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          breakpoints={{
            640: { slidesPerView: 2.2, spaceBetween: 24 },
            768: { slidesPerView: 3, spaceBetween: 32 },
            1024: { slidesPerView: 4, spaceBetween: 40 },
            1440: { slidesPerView: 5, spaceBetween: 40 },
          }}
          className="!overflow-visible"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="h-auto">
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
          {/* Hidden buttons for ref linking */}
          <button ref={prevRef} className="hidden" />
          <button ref={nextRef} className="hidden" />
        </Swiper>
      </div>
    </section>
  );
};

export default ProductCarousel;
