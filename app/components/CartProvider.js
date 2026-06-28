"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "myoche.cart.v1";

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  // Load from localStorage on mount.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  // Persist whenever items change (after hydration).
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items, hydrated]);

  function addItem(item) {
    const lineId = `${item.designId}-${item.sizeId}-${item.led}-${
      item.customText || ""
    }`.toLowerCase();
    setItems((prev) => {
      const existing = prev.find((l) => l.lineId === lineId);
      if (existing) {
        return prev.map((l) =>
          l.lineId === lineId
            ? { ...l, quantity: Math.min(l.quantity + item.quantity, 20) }
            : l
        );
      }
      return [...prev, { ...item, lineId }];
    });
  }

  function updateQty(lineId, quantity) {
    setItems((prev) =>
      prev
        .map((l) => (l.lineId === lineId ? { ...l, quantity } : l))
        .filter((l) => l.quantity > 0)
    );
  }

  function removeItem(lineId) {
    setItems((prev) => prev.filter((l) => l.lineId !== lineId));
  }

  function clearCart() {
    setItems([]);
  }

  const count = items.reduce((n, l) => n + l.quantity, 0);
  const subtotal = items.reduce((n, l) => n + l.unitPrice * l.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        hydrated,
        addItem,
        updateQty,
        removeItem,
        clearCart,
        count,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
