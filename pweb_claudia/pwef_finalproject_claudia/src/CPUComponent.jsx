import React, { useState } from 'react';
import './CPUComponent.css'; // Asegúrate de que este archivo CSS exista

export function CPUComponent({ title, imageUrl, description, price, specifications, stats }) {
    const [showDescription, setShowDescription] = useState(false);

    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };

    return (
        <div id="mainContainer">
            <h1>{title}</h1>
            <img
                src={imageUrl}
                alt="Imagen de CPU"
                className="productImage"
                onClick={toggleDescription}
            />
            <button className="toggleButton" onClick={toggleDescription}>
                {showDescription ? 'Ocultar Descripción' : 'Mostrar Descripción'}
            </button>
            <div className={`productDescription ${showDescription ? '' : 'hidden'}`}>
                <h2>Descripción del Producto</h2>
                <p>{description}</p>
                <h3>Precio: ${price}</h3>
                <h3>Especificaciones Técnicas</h3>
                <ul>
                    {specifications.map((spec, index) => (
                        <li key={index}>{spec}</li>
                    ))}
                </ul>
                <h3>Datos Estadísticos</h3>
                <ul>
                    {stats.map((stat, index) => (
                        <li key={index}>{stat}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
