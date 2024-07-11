import React from 'react';
import './FooterComponent.css';

export function FooterComponent() {
    return (
        <footer className="footer">
            <div className="footer-left">
                <img src="logo.png" alt="Logo" className="logo" />
                <p className="description">Esta es la descripción de la empresa. Proveemos los mejores productos a los mejores precios.</p>
                <p className="address">Dirección: Calle Falsa 123</p>
                <p className="phone">Celular: +51 999 999 999</p>
                <p className="email">Correo: ejemplo@empresa.com</p>
            </div>
            <div className="footer-right">
                <div className="footer-column">
                    <h3>COMPRA CON CONFIANZA</h3>
                    <ul>
                        <li><a href="/how-to-buy">¿Cómo comprar?</a></li>
                        <li><a href="/terms-and-conditions">Términos y Condiciones</a></li>
                        <li><a href="/privacy-policy">Políticas de privacidad</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>SOBRE NOSOTROS</h3>
                    <ul>
                        <li><a href="/about-us">¿Quiénes Somos?</a></li>
                        <li><a href="/stores">Nuestras Tiendas</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>ATENCIÓN AL CLIENTE</h3>
                    <ul>
                        <li><a href="/my-account">Mi cuenta</a></li>
                        <li><a href="/faq">Preguntas Frecuentes</a></li>
                        <li><a href="/warranty-process">Procesos De Garantía</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Aceptamos transferencia a nuestra cuenta corriente</p>
                <div className="bank-details">
                    <img src="bank-icon.png" alt="Bank Icon" className="bank-icon" />
                    <div className="bank-info">
                        <p>Cuenta Soles</p>
                        <p>193-77745453-0-58</p>
                        <p>A nombre de: Nombre Inversiones EIRL</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
