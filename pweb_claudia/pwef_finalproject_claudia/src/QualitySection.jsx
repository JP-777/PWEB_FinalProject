import React from 'react';
import { QualityCard } from './QualityCard';
import './QualitySection.css';

export function QualitySection() {
    const cardsData = [
        { icon: '📦', number: 1, title: 'Card Title 1', description: 'This is a description for card 1.' },
        { icon: '🚚', number: 2, title: 'Card Title 2', description: 'This is a description for card 2.' },
        { icon: '🎁', number: 3, title: 'Card Title 3', description: 'This is a description for card 3.' }
    ];

    return (
        <div className="cards-section">
            {cardsData.map((card, index) => (
                <QualityCard key={index} {...card} />
            ))}
        </div>
    );
}
