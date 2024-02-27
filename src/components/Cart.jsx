// Cart.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
    const { cart, removeFromCart, getTotalQuantity, getTotalAmount } = useContext(CartContext);

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            <div className="cart-items">
                {cart.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <ul>
                        {cart.map((product) => (
                            <li key={product.id} className="cart-item">
                                <div className="cart-item-details">
                                    <img src={product.thumbnail} alt={product.title} />
                                    <div>
                                        <h3>{product.title}</h3>
                                        <p>Price: ${product.price}</p>
                                        <button onClick={() => removeFromCart(product)}>Remove</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            {cart.length > 0 && (
                <div className="cart-summary">
                    <p>Total Quantity: {getTotalQuantity()}</p>
                    <p>Total Amount: ${getTotalAmount()}</p>
                </div>
            )}
        </div>
    );
};

export default Cart;
