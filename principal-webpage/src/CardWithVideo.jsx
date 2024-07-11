import React from 'react';
import './CardWithVideo.css';

export function CardWithVideo({ title, description, image, videoUrl, backgroundImage, titleColor, descriptionColor }) {
    return (
        <div className="card-video-container">
            <div className="card" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <img src={image} alt={title} className="card-image" />
                <h2 className="card-title" style={{ color: titleColor }}>{title}</h2>
                <p className="card-description" style={{ color: descriptionColor }}>{description}</p>
                <button className="buy-button">Ver Producto</button>
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
