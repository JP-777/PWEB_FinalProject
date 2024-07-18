import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HCardProduct } from './HCardProduct';
import './HProductList.css';

export function HProductList () {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/productos')
            .then(response => {
                setProductos(response.data);
            })
            .catch(error => {
                console.error('Error al obtener los datos de productos:', error);
            });
    }, []);

    return (
        <div className="product-grid">
            {productos.map(producto => (
                <HCardProduct 
                    key={producto.id} 
                    nombre={producto.nombre} 
                    descripcion={producto.descripcion} 
                    imagen={producto.imagen} 
                />
            ))}
        </div>
    );
};
