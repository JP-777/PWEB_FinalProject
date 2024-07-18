import React from 'react';
import './CardService.css';

export function CardService({title},{description}){
    return (
        <div className="card">
            <h3>{title}</h3>
            <p>{description}</p>
            <button>+ Info</button>
        </div>
    );
};