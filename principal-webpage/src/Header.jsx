import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <div className="header">
      <img id="logo" alt="Logo de la tienda" src='https://img.freepik.com/vector-gratis/plantilla-logotipo-laptop-plana-lineal_23-2148995938.jpg?t=st=1720305053~exp=1720308653~hmac=30df4a27bf2bc246b480e4eea62c8d7cae9d21002b2dfe9e2d81ef2b3daf7219&w=740' />
      
      <div className="search-container">
        <input id="search" autoComplete="off" className="form-control" type="text" name="search" />
        <svg id="img-search" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </div>
      
      <div className="shoppingbag-price-container">
        <Link to="/profile">
          <svg id="img-profile" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 1 0 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        </Link>
        <Link to="/shoppingbag">
          <svg id="img-shoppingbag" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
        </Link>
        <p> S/.0.00 </p>
      </div>
    </div>
  );
}
