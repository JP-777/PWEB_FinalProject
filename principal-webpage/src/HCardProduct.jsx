import React from 'react';
import './HCardProduct.css';

export function HCardProduct({ nombre, descripcion, imagen }) {
    return (
        <div className="item">
            <figure>
                <img src={imagen} alt={nombre} />
            </figure>
            <div className="info-product">
                <h2>{nombre}</h2>
                <p className="price">{descripcion}</p>
                <button className="btn-add-cart">Añadir al carrito</button>
            </div>
        </div>
    );
};
