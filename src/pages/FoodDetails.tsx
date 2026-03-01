import React, { useState } from "react";
import {
  ArrowLeft,
  MoreVertical,
  Heart,
  Minus,
  Plus,
  ShoppingCart,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./FoodDetails.css";

const FoodDetails: React.FC = () => {
  const navigate = useNavigate();
  // const { id } = useParams();

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [isFavorite, setIsFavorite] = useState(false);

  // Mock data mapping (In a real app, fetch from an API or central store)
  const itemData = {
    title: "Pizza Italiana",
    price: "$35.000",
    rating: 5.0,
    reviews: 124,
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  };

  const sizes = ["S", "M", "L", "XL"];

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="food-details-container">
      {/* Header overlaid on image */}
      <header className="details-header">
        <button className="icon-btn-bg" onClick={() => navigate(-1)}>
          <ArrowLeft size={24} />
        </button>
        <button className="icon-btn-bg">
          <MoreVertical size={24} />
        </button>
      </header>

      {/* Hero Image */}
      <div className="hero-image-wrapper">
        <img src={itemData.image} alt={itemData.title} className="hero-image" />
      </div>

      {/* Content Sheet */}
      <div className="details-content">
        <div className="details-title-row">
          <div>
            <h1 className="details-title">{itemData.title}</h1>
            <div className="details-rating">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`star ${i < Math.floor(itemData.rating) ? "filled" : ""}`}
                >
                  ★
                </span>
              ))}
              <span className="reviews-count">({itemData.reviews})</span>
            </div>
          </div>
          <span className="details-price">{itemData.price}</span>
        </div>

        <div className="details-section">
          <h3>Descripción</h3>
          <p className="details-description">
            {itemData.description}
            <span className="read-more">LEER MÁS</span>
          </p>
        </div>

        <div className="details-section">
          <h3>Tamaño</h3>
          <div className="size-selector">
            {sizes.map((size) => (
              <button
                key={size}
                className={`size-btn ${selectedSize === size ? "active" : ""}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="details-section">
          <h3>Cantidad</h3>
          <div className="quantity-selector">
            <button className="qty-btn" onClick={handleDecrement}>
              <Minus size={16} />
            </button>
            <span className="qty-value">{quantity}</span>
            <button className="qty-btn add" onClick={handleIncrement}>
              <Plus size={16} />
            </button>
          </div>
        </div>

        {/* Bottom Action Bar */}
        <div className="details-bottom-bar">
          <button
            className={`favorite-btn-large ${isFavorite ? "active" : ""}`}
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <Heart
              size={24}
              fill={isFavorite ? "var(--primary-color)" : "none"}
              color={
                isFavorite ? "var(--primary-color)" : "var(--text-secondary)"
              }
            />
          </button>
          <button className="add-to-cart-btn">
            AGREGAR AL CARRITO
            <ShoppingCart size={20} className="cart-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
