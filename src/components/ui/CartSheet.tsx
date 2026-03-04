import React, { useState, useEffect } from "react";
import { X, Trash2, ShoppingCart } from "lucide-react";
import useCartStore from "../../providers/cartStore";
import "./CartSheet.css";

interface CartSheetProps {
  open: boolean;
  onClose: () => void;
}

const CartSheet: React.FC<CartSheetProps> = ({ open, onClose }) => {
  const [visible, setVisible] = useState(false);
  const { cart, removeFromCart, clearCart } = useCartStore();

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
    }
  }, [open]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 320);
  };

  const total = cart.reduce((sum, item) => {
    const numeric = parseFloat(
      item.price.replace(/[^0-9,]/g, "").replace(",", "."),
    );
    return sum + (isNaN(numeric) ? 0 : numeric) * item.quantity;
  }, 0);

  const totalKcal = cart.reduce((sum, item) => {
    return sum + (item.kcal ?? 0) * item.quantity;
  }, 0);

  const formatTotal = (n: number) =>
    `$${n.toLocaleString("es-CO", { minimumFractionDigits: 0 })}`;

  if (!open) return null;

  return (
    <>
      <div
        className={`sheet-overlay ${visible ? "visible" : ""}`}
        onClick={handleClose}
      />

      <div className={`cart-sheet ${visible ? "sheet-open" : "sheet-closed"}`}>
        {/* Handle */}
        <div className="sheet-handle" />

        {/* Header */}
        <div className="cart-sheet-header">
          <div className="cart-sheet-title">
            <ShoppingCart size={20} />
            <h2>Tu carrito</h2>
            {cart.length > 0 && (
              <span className="cart-count-badge">{cart.length}</span>
            )}
          </div>
          <div className="cart-header-actions">
            {cart.length > 0 && (
              <button className="cart-clear-btn" onClick={clearCart}>
                Vaciar
              </button>
            )}
            <button className="sheet-close-btn" onClick={handleClose}>
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Items */}
        <div className="cart-items-list">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <ShoppingCart size={48} strokeWidth={1} />
              <p>Tu carrito está vacío</p>
              <span>Agrega algo delicioso 😋</span>
            </div>
          ) : (
            cart.map((item, idx) => (
              <div key={`${item.id}-${item.size}-${idx}`} className="cart-item">
                <img
                  src={item.image}
                  alt={item.title}
                  className="cart-item-img"
                />
                <div className="cart-item-info">
                  <p className="cart-item-title">{item.title}</p>
                  <div className="cart-item-meta">
                    <span className="cart-item-size">Talla {item.size}</span>
                    <span className="cart-item-qty">x{item.quantity}</span>
                  </div>
                  <span className="cart-item-price">{item.price}</span>
                </div>
                <button
                  className="cart-item-remove"
                  onClick={() => removeFromCart(item.id, item.size)}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="cart-sheet-footer">
            <div className="cart-total-row">
              <span className="cart-total-label">Total</span>
              <span className="cart-total-value">{formatTotal(total)}</span>
            </div>
            <div className="cart-total-row">
              <span className="cart-total-label">Total Kcals</span>
              <span className="cart-total-value">
                {totalKcal.toLocaleString("es-CO")}
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSheet;
