// Product.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Product = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="product">
            <img className="product-image" src={product.thumbnail} alt={product.title} />
            <div className="product-details">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">Price: ${product.price}</p>
                <button className="add-to-cart-button" onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;
