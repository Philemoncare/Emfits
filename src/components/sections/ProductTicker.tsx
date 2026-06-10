"use client";

const tickerItems = [
  { img: "/images/product-thumb-1.png", text: "Premium Quality: Fresh Wheat Bread" },
  { img: "/images/product-thumb-2.png", text: "New Arrival: Local Organic Oatmeal" },
  { img: "/images/product-thumb-3.png", text: "Trending: Premium Cheddar Cheese" },
  { img: "/images/product-thumb-4.png", text: "Best Seller: Fresh Baby Spinach" },
  { img: "/images/product-thumb-5.png", text: "Limited: Fresh Local Salmon" },
];

const ProductTicker = () => {
  return (
    <div className="bg-light py-3 border-top border-bottom overflow-hidden">
      <div className="d-flex align-items-center animate-marquee whitespace-nowrap" style={{ width: 'fit-content' }}>
        {[...Array(4)].map((_, i) => (
          <div key={i} className="d-flex align-items-center">
            {tickerItems.map((item, index) => (
              <div key={index} className="d-flex align-items-center px-4">
                <img src={item.img} alt="" className="me-2" style={{width: '30px', height: '30px', objectFit: 'contain'}} />
                <span className="fw-bold text-uppercase small">{item.text}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductTicker;
