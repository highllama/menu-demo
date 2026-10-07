import React from "react";
import "./PromoBanner.css";

interface PromoBannerProps {
  title: string;
  discount: string;
  image: string;
  onOrderClick?: () => void;
}

const PromoBanner: React.FC<PromoBannerProps> = ({
  title,
  discount,
  image,
  onOrderClick,
}) => {
  return (
    <div className="promo-banner" style={{ backgroundImage: `url(${image})` }}>
      <div className="promo-overlay"></div>
      <div className="promo-content">
        <h3 className="promo-title">{title}</h3>
        <p className="promo-discount">{discount}</p>
        {/* <button className="promo-btn" onClick={onOrderClick}>
          Pedir
        </button> */}
      </div>
    </div>
  );
};

export default PromoBanner;
