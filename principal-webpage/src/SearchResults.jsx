import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { HCardProduct } from './HCardProduct';
import './SearchResults.css';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export function SearchResults () {
  const query = useQuery();
  const searchQuery = query.get('q');
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      axios.get(`http://localhost:3000/api/buscar?q=${encodeURIComponent(searchQuery)}`)
        .then(response => {
          setProductos(response.data);
        })
        .catch(error => {
          console.error('Error al realizar la búsqueda:', error);
        });
    }
  }, [searchQuery]);

  return (
    <div className="search-results">
      <h1>Resultados de Búsqueda</h1>
      <div className="product-grid">
        {productos.map(producto => (
          <HCardProduct 
            key={producto.id} 
            nombre={producto.nombre} 
            descripcion={producto.descripcion} 
            imagen={producto.imagen} 
            precio={producto.precio} 
          />
        ))}
      </div>
    </div>
  );
};
