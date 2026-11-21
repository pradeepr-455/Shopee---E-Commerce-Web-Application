import { createContext, useContext, useState,useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  console.log("CartProvider rendered:", cart);

  useEffect(() => {
      console.log("Updated cart:", cart);
      }, [cart]);


  function addToCart(product) {
    setCart((prevCart) => {
      const existing = prevCart.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  }


  function removeFromCart(id) {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== id)
    );
  }


  const grandTotal = cart.reduce(
    (total, item) =>
      total + Number(item.price) * item.quantity,
    0
  );

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, grandTotal }}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}