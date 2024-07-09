import React from 'react';
import './CardWithVideo.css';

export function CardWithVideo({ title, description, image, videoUrl }) {
    return (
        <div className="card-video-container">
            <div className="card">
                <img src={image} alt={title} className="card-image" />
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
                <button className="buy-button">Comprar</button>
            </div>
            <div className="video">
                <iframe 
                    width="100%" 
                    height="100%" 
                    src={videoUrl} 
                    title={title} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}
