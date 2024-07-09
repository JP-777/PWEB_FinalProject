import React from 'react';
import './PrincipalProductCard.css';

export function PrincipalProductCard({
    imageUrl,
    hoverImageUrl,
    discount,
    productName,
    brand,
    sku,
    oldPrice,
    newPrice,
    stock
}) {
    return (
        <div className="principal-product-card">
            <div className="image-container">
                <img src={imageUrl} alt={productName} className="product-image" />
                <img src={hoverImageUrl} alt={productName} className="hover-image" />
                <div className="discount-circle">{discount}</div>
                <div className="hover-labels">
                    <div className="label">
                        <i className="shopping-cart-icon"></i>
                        <span className="tooltip">Añadir al carrito</span>
                    </div>
                    <div className="label">
                        <i className="quick-view-icon"></i>
                        <span className="tooltip">Vista rápida</span>
                    </div>
                </div>
            </div>
            <a href={`/product/${sku}`} className="product-name">{productName}</a>
            <a href={`/brand/${brand}`} className="brand-name">{brand}</a>
            <p className="sku">SKU: {sku}</p>
            <p className="prices">
                <span className="old-price">{oldPrice}</span>
                <span className="new-price">{newPrice}</span>
            </p>
            <p className="stock">{stock} en stock</p>
        </div>
    );
}
