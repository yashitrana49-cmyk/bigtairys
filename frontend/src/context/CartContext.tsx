/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, type ReactNode } from "react";

type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  increaseQty: (id: string, size: string) => void;
  decreaseQty: (id: string, size: string) => void;
  removeFromCart: (id: string, size: string) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existing = prev.find(
        (p) => p.id === item.id && p.size === item.size
      );

      if (existing) {
        return prev.map((p) =>
          p.id === item.id && p.size === item.size
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }

      return [...prev, item];
    });
  };

  const increaseQty = (id: string, size: string) => {
    setCart((prev) =>
      prev.map((p) =>
        p.id === id && p.size === size
          ? { ...p, quantity: p.quantity + 1 }
          : p
      )
    );
  };

  const decreaseQty = (id: string, size: string) => {
    setCart((prev) =>
      prev
        .map((p) =>
          p.id === id && p.size === size
            ? { ...p, quantity: p.quantity - 1 }
            : p
        )
        .filter((p) => p.quantity > 0)
    );
  };

  const removeFromCart = (id: string, size: string) => {
    setCart((prev) =>
      prev.filter((p) => !(p.id === id && p.size === size))
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increaseQty, decreaseQty, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return ctx;
}