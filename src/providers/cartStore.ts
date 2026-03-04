import { create } from "zustand";
import type { FoodItem } from "../components/ui/FoodDetailsSheet";

export interface CartItem extends FoodItem {
  quantity: number;
  size: string;
}

interface CartState {
  cart: CartItem[];
  addToCart: (item: FoodItem, quantity: number, size: string) => void;
  removeFromCart: (id: string, size: string) => void;
  clearCart: () => void;
  totalItems: () => number;
}

const useCartStore = create<CartState>((set, get) => ({
  cart: [],

  addToCart: (item, quantity, size) =>
    set((state) => {
      const existing = state.cart.find(
        (c) => c.id === item.id && c.size === size,
      );
      if (existing) {
        // If same item + size already in cart, just bump the quantity
        return {
          cart: state.cart.map((c) =>
            c.id === item.id && c.size === size
              ? { ...c, quantity: c.quantity + quantity }
              : c,
          ),
        };
      }
      return { cart: [...state.cart, { ...item, quantity, size }] };
    }),

  removeFromCart: (id, size) =>
    set((state) => ({
      cart: state.cart.filter((c) => !(c.id === id && c.size === size)),
    })),

  clearCart: () => set({ cart: [] }),

  totalItems: () => get().cart.reduce((sum, c) => sum + c.quantity, 0),
}));

export default useCartStore;
