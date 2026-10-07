import React from "react";
import { ShoppingCart } from "lucide-react";
import useCartStore from "../../providers/cartStore";
import "./CartBar.css";

interface CartBarProps {
  onOpen: () => void;
}

const CartBar: React.FC<CartBarProps> = ({ onOpen }) => {
  const cart = useCartStore((s) => s.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (totalItems === 0) return null;

  const previewTitles = cart
    .slice(0, 2)
    .map((i) => i.title)
    .join(", ");
  const more = cart.length > 2 ? ` +${cart.length - 2} más` : "";

  return (
    <button className="cart-bar" onClick={onOpen}>
      <div className="cart-bar-badge">{totalItems}</div>
      <p className="cart-bar-label">
        {previewTitles}
        {more}
      </p>
      <div className="cart-bar-icon">
        <ShoppingCart size={18} />
      </div>
    </button>
  );
};

export default CartBar;
