import React, { useState, useEffect } from "react";
import { Minus, Plus, X } from "lucide-react";
import useCartStore from "../../../providers/cartStore";
import "./FoodDetailsSheet.css";
import Button from "@/components/atoms/Button";
import ModifierGroup from "@/components/molecules/ModifierGroup";
import { useMenuProvider } from "@/providers/MenuProvider/useMenuProvider";

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

const FoodDetailsSheet: React.FC<FoodDetailsSheetProps> = ({
  item,
  onClose,
}) => {
  const [visible, setVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [added, setAdded] = useState(false);
  const outOfStock = item?.oos;
  const { menu } = useMenuProvider();
  const modifierGroups =
    menu?.modifiers?.filter((modifierGroup: any) =>
      modifierGroup.productIds.includes(item?.id),
    ) ?? [];
  console.log(modifierGroups);

  const addToCart = useCartStore((s) => s.addToCart);

  // Animate in when item is set
  useEffect(() => {
    if (item) {
      // Small delay so the initial render paints before transition
      requestAnimationFrame(() => setVisible(true));
      setQuantity(1);
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
    addToCart(item, quantity, "");
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      handleClose();
    }, 900);
  };

  if (!item) return null;

  return (
    <>
      {/* Dark backdrop */}
      <div
        className={`sheet-overlay ${visible ? "visible" : ""}`}
        onClick={handleClose}
      />

      {/* Bottom sheet */}
      <div
        className={`food-details-sheet relative ${visible ? "sheet-open" : "sheet-closed"}`}
      >
        {/* Drag handle */}
        {/* <div className="sheet-handle" /> */}

        {/* Close button */}
        <button className="sheet-close-btn" onClick={handleClose}>
          <X size={20} />
        </button>

        {/* Hero image */}
        <div className="h-full overflow-y-auto pb-[80px] shadow-lg drop-shadow-gray-100">
          <img src={item.image} alt={item.title} className="sheet-hero-img" />

          {/* Scrollable content */}
          <div className="py-4 px-4 ">
            {/* Title row */}
            <div className="details-title-row">
              <div>
                <h1 className="font-bold text-3xl">{item.title}</h1>
                {/* <div className="details-rating">
                <span className="reviews-count">{item.kcal} Kcal</span>
              </div> */}
              </div>
              <span className="font-semibold text-2xl">{item.price}</span>
            </div>

            {/* Description */}
            {item.description && (
              <div className="details-section">
                {/* <h3>Descripción</h3> */}
                <p className="text-md text-gray-500">{item.description}</p>
              </div>
            )}

            {modifierGroups.map((modifierGroup: any) => (
              <ModifierGroup
                key={modifierGroup.id}
                modifiers={modifierGroup.modifiers}
                name={modifierGroup.name}
                minSelections={modifierGroup.minSelections}
                maxSelections={modifierGroup.maxSelections}
              />
            ))}
          </div>
        </div>

        {/* Bottom action bar */}
        <div className="flex items-center gap-4 py-4 px-4 absolute bottom-0 left-0 right-0 bg-white ">
          {/* <button
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
          </button> */}
          {/* Quantity */}
          {!outOfStock && (
            <div className=" items-center h-full">
              <div className="quantity-selector">
                <Button
                  className="qty-btn h-full"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  <Minus size={16} />
                </Button>
                <span className="qty-value">{quantity}</span>
                <button
                  className="qty-btn add"
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
          )}
          <Button
            className={`add-to-cart-btn py-6 px-4  ${added ? "added" : ""} ${outOfStock ? "opacity-50" : ""}`}
            onClick={handleAddToCart}
            disabled={added || outOfStock}
          >
            {added ? "✓ Añadido" : outOfStock ? "AGOTADO" : "AÑADIR"}
          </Button>
        </div>
      </div>
    </>
  );
};

export default FoodDetailsSheet;
