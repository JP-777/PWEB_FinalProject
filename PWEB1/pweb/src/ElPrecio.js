import React, { useEffect, useState, useRef } from 'react';

const ShoppingCart = () => {
    const [allProducts, setAllProducts] = useState([]);
    const btnCartRef = useRef(null);
    const containerCartProductsRef = useRef(null);
    const rowProductRef = useRef(null);
    const valorTotalRef = useRef(null);
    const countProductsRef = useRef(null);
    const cartEmptyRef = useRef(null);
    const cartTotalRef = useRef(null);
    const productsListRef = useRef(null);

    useEffect(() => {
        const btnCart = btnCartRef.current;
        const containerCartProducts = containerCartProductsRef.current;
        const rowProduct = rowProductRef.current;
        const productsList = productsListRef.current;

        btnCart.addEventListener('click', () => {
            containerCartProducts.classList.toggle('hidden-cart');
        });

        productsList.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-add-cart')) {
                const product = e.target.parentElement;
                const infoProduct = {
                    quantity: 1,
                    title: product.querySelector('h2').textContent,
                    price: product.querySelector('p').textContent,
                };

                const exists = allProducts.some(
                    (product) => product.title === infoProduct.title
                );

                if (exists) {
                    const products = allProducts.map((product) => {
                        if (product.title === infoProduct.title) {
                            product.quantity++;
                            return product;
                        } else {
                            return product;
                        }
                    });
                    setAllProducts([...products]);
                } else {
                    setAllProducts([...allProducts, infoProduct]);
                }
            }
        });

        rowProduct.addEventListener('click', (e) => {
            if (e.target.classList.contains('icon-close')) {
                const product = e.target.parentElement;
                const title = product.querySelector('p').textContent;

                setAllProducts((prevProducts) =>
                    prevProducts.filter((product) => product.title !== title)
                );
            }
        });

        return () => {
            btnCart.removeEventListener('click', () => {
                containerCartProducts.classList.toggle('hidden-cart');
            });

            productsList.removeEventListener('click', () => {});
            rowProduct.removeEventListener('click', () => {});
        };
    }, [allProducts]);

    useEffect(() => {
        const showHTML = () => {
            const rowProduct = rowProductRef.current;
            const cartEmpty = cartEmptyRef.current;
            const cartTotal = cartTotalRef.current;
            const valorTotal = valorTotalRef.current;
            const countProducts = countProductsRef.current;

            if (!allProducts.length) {
                cartEmpty.classList.remove('hidden');
                rowProduct.classList.add('hidden');
                cartTotal.classList.add('hidden');
            } else {
                cartEmpty.classList.add('hidden');
                rowProduct.classList.remove('hidden');
                cartTotal.classList.remove('hidden');
            }

            // Limpiar HTML
            rowProduct.innerHTML = '';

            let total = 0;
            let totalOfProducts = 0;

            allProducts.forEach((product) => {
                const containerProduct = document.createElement('div');
                containerProduct.classList.add('cart-product');

                containerProduct.innerHTML = `
                    <div class="info-cart-product">
                        <span class="cantidad-producto-carrito">${product.quantity}</span>
                        <p class="titulo-producto-carrito">${product.title}</p>
                        <span class="precio-producto-carrito">${product.price}</span>
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="icon-close"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                `;

                rowProduct.append(containerProduct);

                total = total + parseInt(product.quantity * product.price.slice(1));
                totalOfProducts = totalOfProducts + product.quantity;
            });

            valorTotal.innerText = `$${total}`;
            countProducts.innerText = totalOfProducts;
        };

        showHTML();
    }, [allProducts]);

    return (
        <div>
            <div ref={btnCartRef} className="container-cart-icon">
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
                    <span ref={countProductsRef} id="contador-productos">0</span>
                </div>
            </div>

            <div ref={containerCartProductsRef} className="container-cart-products hidden-cart">
                <div ref={rowProductRef} className="row-product hidden">
                    {/* Productos del carrito se agregarán aquí */}
                </div>

                <div ref={cartTotalRef} className="cart-total hidden">
                    <h3>Total:</h3>
                    <span ref={valorTotalRef} className="total-pagar">$0</span>
                </div>
                <p ref={cartEmptyRef} className="cart-empty">El carrito está vacío</p>
            </div>

            <div ref={productsListRef} className="container-items">
                {/* Productos disponibles se agregarán aquí */}
            </div>
        </div>
    );
};

export default ShoppingCart;
