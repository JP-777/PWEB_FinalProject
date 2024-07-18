import React from 'react';
import { PrincipalProductCard } from './PrincipalProductCard';
import './ShowSection.css';

export function ShowSection({ title, description, offers }) {
    return (
        <div className="offers-section">
            <h1><strong>{title}</strong></h1>
            <p>{description}</p>
            <div className="offers-grid">
                {offers.map((offer, index) => (
                    <PrincipalProductCard key={index} {...offer} />
                ))}
            </div>
        </div>
    );
}
