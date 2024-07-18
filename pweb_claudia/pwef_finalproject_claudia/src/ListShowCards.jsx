import React from 'react';
import { CPUComponent } from './CPUComponent';
import './ListShowCards.css';

export function ListShowCards({ items }) {
    return (
        <div className="cardsContainer">
            {items.map((item, index) => (
                <CPUComponent
                    title={item.title}
                    key={index}
                    imageUrl={item.imageUrl}
                    description={item.description}
                    price={item.price}
                    specifications={item.specifications}
                    stats={item.stats}
                />
            ))}
        </div>
    );
}
