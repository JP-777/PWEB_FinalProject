// src/components/OffersSection.jsx
import React from 'react';
import { PrincipalProductCard } from './PrincipalProductCard';
import './OffersSection.css';

export function OffersSection() {
    const offers = [
        {
            imageUrl: 'https://via.placeholder.com/150',
            hoverImageUrl: 'https://via.placeholder.com/150/0000FF/808080',
            discount: '-20%',
            productName: 'Laptop Haier H15C3 Core i3-10110U, 4GB RAM, 256GB SSD, 15.6″ FHD, Windows 10',
            brand: 'Haier',
            sku: '000001',
            oldPrice: 'S/. 2500',
            newPrice: 'S/. 2000',
            stock: 3
        },
        {
            imageUrl: 'https://via.placeholder.com/150',
            hoverImageUrl: 'https://via.placeholder.com/150/0000FF/808080',
            discount: '-20%',
            productName: 'Laptop Haier H15C3 Core i3-10110U, 4GB RAM, 256GB SSD, 15.6″ FHD, Windows 10',
            brand: 'Haier',
            sku: '000001',
            oldPrice: 'S/. 2500',
            newPrice: 'S/. 2000',
            stock: 3
        },
        {
            imageUrl: 'https://via.placeholder.com/150',
            hoverImageUrl: 'https://via.placeholder.com/150/0000FF/808080',
            discount: '-20%',
            productName: 'Laptop Haier H15C3 Core i3-10110U, 4GB RAM, 256GB SSD, 15.6″ FHD, Windows 10',
            brand: 'Haier',
            sku: '000001',
            oldPrice: 'S/. 2500',
            newPrice: 'S/. 2000',
            stock: 3
        },
        {
            imageUrl: 'https://via.placeholder.com/150',
            hoverImageUrl: 'https://via.placeholder.com/150/0000FF/808080',
            discount: '-20%',
            productName: 'Laptop Haier H15C3 Core i3-10110U, 4GB RAM, 256GB SSD, 15.6″ FHD, Windows 10',
            brand: 'Haier',
            sku: '000001',
            oldPrice: 'S/. 2500',
            newPrice: 'S/. 2000',
            stock: 3
        }
    ];

    return (
        <div className="offers-section">
            <h2><strong>Ofertas</strong></h2>
            <p>Apresúrate que se acaban</p>
            <div className="offers-grid">
                {offers.map((offer, index) => (
                    <PrincipalProductCard key={index} {...offer} />
                ))}
            </div>
        </div>
    );
}
