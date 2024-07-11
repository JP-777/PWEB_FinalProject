import React from 'react';
import './NewArrivalCard.css';

export function NewArrivalCard({ backgroundImage, title, description }) {
    return (
        <div className="new-arrival-card" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="overlay">
                <p className="intro-text">Lo más nuevo en</p>
                <h2 className="title">{title}</h2>
                <p className="description">{description}</p>
                <button className="view-all-button">Ver todo</button>
            </div>
        </div>
    );
}