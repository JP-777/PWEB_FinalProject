import React from 'react';
import { ProductCard } from './ProductCard';
import './ProductList.css';

export function ProductList() {
    const products = [
        { image: 'https://pngfre.com/wp-content/uploads/laptop-png-from-pngfre-8.png', name: 'LAPTOPS', quantity: 111 },
        { image: 'https://www.pngmart.com/files/7/Desktop-Computer-Transparent-Images-PNG.png', name: 'COMPUTADORAS', quantity: 10 },
        { image: 'https://mediaserver.goepson.com/ImConvServlet/imconv/0b6b6f6b5bccbd9b2a89b0b1117c730e3bcab3a1/1200Wx1200H?use=banner&hybrisId=B2C&assetDescr=20Lio2_MBL_blk_01', name: 'IMPRESORAS', quantity: 14 },
        { image: 'https://storage.googleapis.com/support-kms-prod/DwjEEz9EqLvL0HHbIZsdtjj2uMWg5KttRFxa', name: 'TABLETS', quantity: 16 },
        { image: 'https://worldcomputers.com.ec/wp-content/uploads/2021/07/Accesorios-Gaming-Banner-WEB.png', name: 'PRODUCTOS GAMER', quantity: 13 },
        { image: 'https://www.yealink.com/website-service/attachment/product/image/20230224/20230224052916514ebaf7a6e42d3a177719090e7a820.png', name: 'ACCESORIOS PARA LAPTOP', quantity: 19 },
    ];

    return (
        <div className="product-list">
            {products.map((product, index) => (
                <ProductCard
                    key={index}
                    image={product.image}
                    name={product.name}
                    quantity={product.quantity}
                />
            ))}
        </div>
    );
}
