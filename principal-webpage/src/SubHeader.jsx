import './SubHeader.css';

export function SubHeader() {
    return (
        <div className="subheader">
            <div className="menu">
                <div className="dropdown">
                    <button className="dropbtn">Categorías</button>
                    <div className="dropdown-content">
                        <a href="/category1">Categoría 1</a>
                        <a href="/category2">Categoría 2</a>
                        <a href="/category3">Categoría 3</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Marcas</button>
                    <div className="dropdown-content">
                        <a href="/brand1">Marca 1</a>
                        <a href="/brand2">Marca 2</a>
                        <a href="/brand3">Marca 3</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Productos</button>
                    <div className="dropdown-content">
                        <a href="/product1">Producto 1</a>
                        <a href="/product2">Producto 2</a>
                        <a href="/product3">Producto 3</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Servicios</button>
                    <div className="dropdown-content">
                        <a href="/service1">Servicio 1</a>
                        <a href="/service2">Servicio 2</a>
                        <a href="/service3">Servicio 3</a>
                    </div>
                </div>
            </div>
            <div className="all-store">
                <a href="/store">
                    <button className="store-btn">Toda la tienda</button>
                </a>
            </div>
        </div>
    );
}
