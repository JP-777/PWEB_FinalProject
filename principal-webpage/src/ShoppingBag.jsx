import React from 'react';
import { Header } from './Header.jsx';
import { SubHeader } from './SubHeader.jsx';
import './ShoppingBag.css';

export default function ShoppingBag() {
    return (
        <div className="shoppingbag">
            <Header />
            <SubHeader />
            <div className="shoppingbag-content">
                <h2>Mi Carrito de Compras</h2>
                <p>Tu carrito está vacío.</p>
                <ul>
                    {/* Aquí se agregarán los productos comprados */}
                </ul>
            </div>
        </div>
    );
}
