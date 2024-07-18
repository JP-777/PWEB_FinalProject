import React from 'react';
import './Bueno.css';

export function ElBuenPrecio() {
    return (
        <div>
            <header>
                <section id="hero">
                    <h1>Las mejores ofertas las <br />encuentras AQUÍ!!!</h1>
                </section>
                <div className="logo">ElBuenPrecio</div>
                <nav>
                    {/* Aquí se pueden agregar los elementos del menú de navegación */}
                </nav>
                <div className="container-icon">
                    <div className="container-cart-icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="icon-cart"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                            />
                        </svg>
                        <div className="count-products">
                            <span id="contador-productos">0</span>
                        </div>
                    </div>
                    <div className="container-cart-products hidden-cart">
                        <div className="row-product hidden">
                            <div className="cart-product">
                                <div className="info-cart-product">
                                    <span className="cantidad-producto-carrito">1</span>
                                    <p className="titulo-producto-carrito">Dell XPS 13</p>
                                    <span className="precio-producto-carrito">$3199</span>
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="icon-close"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="cart-total hidden">
                            <h3>Total:</h3>
                            <span className="total-pagar">$3199</span>
                        </div>
                        <p className="cart-empty">El carrito está vacío</p>
                    </div>
                </div>
            </header>
            <div className="container-items">
                {items.map((item, index) => (
                    <div className="item" key={index}>
                        <figure>
                            <img src={item.imgSrc} alt="producto" />
                        </figure>
                        <div className="info-product">
                            <h2>{item.name}</h2>
                            <p className="price">{item.price}</p>
                            <button className="btn-add-cart">Añadir al carrito</button>
                        </div>
                    </div>
                ))}
            </div>
            <script src="ElPrecio.js"></script>
        </div>
    );
}

const items = [
    {
        imgSrc: 'imagen/1.1.jpg',
        name: 'UltraSharp Monitor',
        price: '$599',
    },
    {
        imgSrc: 'imagen/2.1.webp',
        name: 'Ultragear QHD',
        price: '$449',
    },
    {
        imgSrc: 'imagen/3.1.jpg',
        name: 'ProArt Monitor',
        price: '$349',
    },
    {
        imgSrc: 'imagen/4.1.webp',
        name: 'Samsung 32-Inch',
        price: '$749',
    },
    {
        imgSrc: 'imagen/5.1.webp',
        name: 'Mid-Tower Case',
        price: '$79',
    },
    {
        imgSrc: 'imagen/6.1.webp',
        name: 'Mid-Tower Case',
        price: '$79',
    },
    {
        imgSrc: 'imagen/7.1.webp',
        name: 'Corsair Tempered Glass',
        price: '$249',
    },
    {
        imgSrc: 'imagen/8.1.webp',
        name: 'Cooler Master MasterBox',
        price: '$89',
    },
    {
        imgSrc: 'imagen/9.1.jpg',
        name: 'Logitech G Mouse',
        price: '$129',
    },
    {
        imgSrc: 'imagen/10.1.jpg',
        name: 'Gaming Mouse',
        price: '$79',
    },
    {
        imgSrc: 'imagen/11.1.jpg',
        name: 'Gaming Keyboard',
        price: '$229',
    },
    {
        imgSrc: 'imagen/12.1.jpg',
        name: 'Lightspeed Wireless',
        price: '$179',
    },
    {
        imgSrc: 'imagen/13.1.jpg',
        name: 'Elite Keyboard',
        price: '$110',
    },
    {
        imgSrc: 'imagen/14.1.jpg',
        name: 'Mechanical Keyboard',
        price: '$100',
    },
    {
        imgSrc: 'imagen/15.1.jpg',
        name: 'Wireless Printer',
        price: '$229',
    },
    {
        imgSrc: 'imagen/16.1.jpg',
        name: 'Canon PIXMA Printer',
        price: '$279',
    },
    {
        imgSrc: 'imagen/17.1.jpg',
        name: 'Brother Monochrome',
        price: '$119',
    },
    {
        imgSrc: 'imagen/18.1.jpg',
        name: 'Noise-Canceling',
        price: '$348',
    },
    {
        imgSrc: 'imagen/19.1.jpg',
        name: 'Wireless Headphones',
        price: '$299',
    },
    {
        imgSrc: 'imagen/20.1.jpg',
        name: 'Wireless Headphones',
        price: '$149',
    },
    {
        imgSrc: 'imagen/21.1.jpg',
        name: 'Canceling Headphones',
        price: '$249',
    },
    {
        imgSrc: 'imagen/22.1.jpg',
        name: 'Audio-Technica',
        price: '$269',
    },
    {
        imgSrc: 'imagen/23.1.jpg',
        name: 'Dell XPS 13',
        price: '$3999',
    },
    {
        imgSrc: 'imagen/24.1.jpg',
        name: 'Apple MacBook',
        price: '$5299',
    },
];
