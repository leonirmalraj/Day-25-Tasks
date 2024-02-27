import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (product) => {
        setCart(cart.filter((item) => item.id !== product.id));
    };

    const getTotalQuantity = () => {
        return cart.reduce((total, item) => total + 1, 0);
    };

    const getTotalAmount = () => {
        return cart.reduce((total, item) => total + item.price, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotalQuantity, getTotalAmount }}>
            {children}
        </CartContext.Provider>
    );
};
