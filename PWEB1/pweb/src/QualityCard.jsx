import React from 'react';
import './QualityCard.css';

export function QualityCard({ icon, number, title, description }) {
    return (
        <div className="card-component">
            <div className="icon-wrapper">
                <div className="icon">{icon}</div>
                <div className="number">{number}</div>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}
