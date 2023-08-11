// context/cartContext.js
"use client"
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [notification, setNotification] = useState(null);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setNotification('Item added to cart.'); // Set the notification message
    setTimeout(() => setNotification(null), 4000); // Clear the notification after 2 seconds
  };
  const removeFromCart = (product) => {
    const updatedCart = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCart);
  };


  return (
    <CartContext.Provider value={{ cartItems, addToCart , removeFromCart, notification }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
