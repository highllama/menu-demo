import React, { useState, useEffect } from "react";
import { Heart, Minus, Plus, ShoppingCart, X } from "lucide-react";
import useCartStore from "../../../providers/cartStore";
import "./FoodDetailsSheet.css";

export interface FoodItem {
  id: string;
  title: string;
  price: string;
  image: string;
  description?: string;
  kcal?: number;
  rating?: number;
  reviews?: number;
}

interface FoodDetailsSheetProps {
  item: FoodItem | null;
  onClose: () => void;
}

const sizes = ["S", "M", "L", "XL"];

const FoodDetailsSheet: React.FC<FoodDetailsSheetProps> = ({
  item,
  onClose,
}) => {
  const [visible, setVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [isFavorite, setIsFavorite] = useState(false);
  const [added, setAdded] = useState(false);

  const addToCart = useCartStore((s) => s.addToCart);
  const store = useCartStore();
  console.log(store.cart);

  // Animate in when item is set
  useEffect(() => {
    if (item) {
      // Small delay so the initial render paints before transition
      requestAnimationFrame(() => setVisible(true));
      setQuantity(1);
      setSelectedSize("M");
    } else {
      setVisible(false);
    }
  }, [item]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 320);
  };

  const handleAddToCart = () => {
    if (!item) return;
    addToCart(item, quantity, selectedSize);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      handleClose();
    }, 900);
  };

  if (!item) return null;

  // const rating = item.rating ?? 4.5;
  // const reviews = item.reviews ?? 98;

  return (
    <>
      {/* Dark backdrop */}
      <div
        className={`sheet-overlay ${visible ? "visible" : ""}`}
        onClick={handleClose}
      />

      {/* Bottom sheet */}
      <div
        className={`food-details-sheet ${visible ? "sheet-open" : "sheet-closed"}`}
      >
        {/* Drag handle */}
        {/* <div className="sheet-handle" /> */}

        {/* Close button */}
        <button className="sheet-close-btn" onClick={handleClose}>
          <X size={20} />
        </button>

        {/* Hero image */}
        <div className="sheet-hero-wrapper">
          <img src={item.image} alt={item.title} className="sheet-hero-img" />
        </div>

        {/* Scrollable content */}
        <div className="sheet-content">
          {/* Title row */}
          <div className="details-title-row">
            <div>
              <h1 className="details-title">{item.title}</h1>
              <div className="details-rating">
                <span className="reviews-count">{item.kcal} Kcal</span>
              </div>
            </div>
            <span className="details-price">{item.price}</span>
          </div>

          {/* Description */}
          {item.description && (
            <div className="details-section">
              <h3>Descripción</h3>
              <p className="details-description">{item.description}</p>
            </div>
          )}

          {/* Size */}
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

          {/* Quantity */}
          <div className="details-section">
            <h3>Cantidad</h3>
            <div className="quantity-selector">
              <button
                className="qty-btn"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                <Minus size={16} />
              </button>
              <span className="qty-value">{quantity}</span>
              <button
                className="qty-btn add"
                onClick={() => setQuantity((q) => q + 1)}
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom action bar */}
        <div className="sheet-bottom-bar">
          <button
            className={`favorite-btn-large ${isFavorite ? "active" : ""}`}
            onClick={() => setIsFavorite((f) => !f)}
          >
            <Heart
              size={24}
              fill={isFavorite ? "var(--primary-color)" : "none"}
              color={
                isFavorite ? "var(--primary-color)" : "var(--text-secondary)"
              }
            />
          </button>
          <button
            className={`add-to-cart-btn ${added ? "added" : ""}`}
            onClick={handleAddToCart}
            disabled={added}
          >
            {added ? "✓ Añadido" : "AGREGAR AL CARRITO"}
            {!added && <ShoppingCart size={20} className="cart-icon" />}
          </button>
        </div>
      </div>
    </>
  );
};

export default FoodDetailsSheet;
