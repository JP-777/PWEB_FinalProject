import React from 'react';
import './ComputerComponents.css';
export function ComputerComponents(){

  return (
    <div className="container">
      <nav className="sidebar">
        <ul>
          <li><a href="/hardware.html">HARDWARE</a></li>
          <li><a href="/perifericos.html">PERIFÉRICOS</a></li>
          <li><a href="/servicios.html">SERVICIOS</a></li>
        </ul>
      </nav>
      <div className="content">
        <h1>Bienvenido a la descripción de componentes de computadora</h1>
        <p>Haga clic en una de las categorías para ver más información.</p>
      </div>
    </div>
  );
}

