import React from 'react';
import './ProductCard.css';

export function ProductCard({ image, name, quantity }) {
    return (
        <div className="product-card">
            <img src={image} alt={name} className="product-image" />
            <h3 className="product-name">{name}</h3>
            <p className="product-quantity">Cantidad: {quantity}</p>
        </div>
    );
}
