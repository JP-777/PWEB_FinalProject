import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './Header';
import { SubHeader } from './SubHeader';
import { BannerSlider } from './BannerSlider';
import { HProductList } from './HProductList';
import { ProductList } from './ProductList';
import { CardVideoSlider } from './CardVideoSlider';
import { ShowSection } from './ShowSection';
import { NewArrivalCard } from './NewArrivalCard';
import { QualitySection } from './QualitySection';
import { FooterComponent } from './FooterComponent';
import { Profile } from './Profile'; 
import { ShoppingBag } from './ShoppingBag';
import { SearchResults } from './SearchResults';
import { Register } from './Register';
import './index.css';
import Management from './Management';


const offers = [
  {
    imageUrl: 'https://www.mundolaptops.com/wp-content/uploads/2023/03/laptop-Haier-H15C3-800x800.jpg.webp',
    hoverImageUrl: 'https://www.mundolaptops.com/wp-content/uploads/2023/03/Haier-H15C3-1-1.jpg.webp',
    discount: '-20%',
    productName: 'Laptop Haier H15C3 Core i3-10110U, 4GB RAM, 256GB SSD, 15.6″ FHD, Windows 10',
    brand: 'Haier',
    sku: '000001',
    oldPrice: 'S/. 2500',
    newPrice: 'S/. 2000',
    stock: 3
  },
  {
    imageUrl: 'https://www.mundolaptops.com/wp-content/uploads/2023/03/laptop-Haier-H15C3-800x800.jpg.webp',
    hoverImageUrl: 'https://www.mundolaptops.com/wp-content/uploads/2023/03/Haier-H15C3-1-1.jpg.webp',
    discount: '-20%',
    productName: 'Laptop Haier H15C3 Core i3-10110U, 4GB RAM, 256GB SSD, 15.6″ FHD, Windows 10',
    brand: 'Haier',
    sku: '000001',
    oldPrice: 'S/. 2500',
    newPrice: 'S/. 2000',
    stock: 3
  },
  {
    imageUrl: 'https://www.mundolaptops.com/wp-content/uploads/2023/03/laptop-Haier-H15C3-800x800.jpg.webp',
    hoverImageUrl: 'https://www.mundolaptops.com/wp-content/uploads/2023/03/Haier-H15C3-1-1.jpg.webp',
    discount: '-20%',
    productName: 'Laptop Haier H15C3 Core i3-10110U, 4GB RAM, 256GB SSD, 15.6″ FHD, Windows 10',
    brand: 'Haier',
    sku: '000001',
    oldPrice: 'S/. 2500',
    newPrice: 'S/. 2000',
    stock: 3
  },
  {
    imageUrl: 'https://www.mundolaptops.com/wp-content/uploads/2023/03/laptop-Haier-H15C3-800x800.jpg.webp',
    hoverImageUrl: 'https://www.mundolaptops.com/wp-content/uploads/2023/03/Haier-H15C3-1-1.jpg.webp',
    discount: '-20%',
    productName: 'Laptop Haier H15C3 Core i3-10110U, 4GB RAM, 256GB SSD, 15.6″ FHD, Windows 10',
    brand: 'Haier',
    sku: '000001',
    oldPrice: 'S/. 2500',
    newPrice: 'S/. 2000',
    stock: 3
  },
  {
    imageUrl: 'https://www.mundolaptops.com/wp-content/uploads/2023/03/laptop-Haier-H15C3-800x800.jpg.webp',
    hoverImageUrl: 'https://www.mundolaptops.com/wp-content/uploads/2023/03/Haier-H15C3-1-1.jpg.webp',
    discount: '-20%',
    productName: 'Laptop Haier H15C3 Core i3-10110U, 4GB RAM, 256GB SSD, 15.6″ FHD, Windows 10',
    brand: 'Haier',
    sku: '000001',
    oldPrice: 'S/. 2500',
    newPrice: 'S/. 2000',
    stock: 3
  }
];  



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>

      <Header />

      <Routes>
        <Route path="/" element={
          <>
            <SubHeader />
            <BannerSlider />
            <ProductList />
            <CardVideoSlider />
            <ShowSection 
                title="Ofertas" 
                description="Apresúrate que se acaban" 
                offers={offers} 
            />
            <div className="new-arrivals-section">
                <NewArrivalCard
                    backgroundImage="https://mir-s3-cdn-cf.behance.net/projects/404/a2aaf3151269387.Y3JvcCwxNTUyLDEyMTQsMCww.png"
                    title="Laptops de Oficina"
                    description="Descripción del producto 1"
                />
                <NewArrivalCard
                    backgroundImage="https://img.freepik.com/free-photo/view-illuminated-neon-gaming-keyboard-setup-controller_23-2149529369.jpg"
                    title="Productos Gamer"
                    description="Descripción del producto 2"
                />
            </div>
            <ShowSection 
                title="Nuevos Productos" 
                description="Descubre lo último en tecnología" 
                offers={offers} 
            />
            <QualitySection />
            <FooterComponent />
            
          </>
        } />        
        <Route path="/profile" element={<Profile />} /> 
        <Route path="/shoppingbag" element={<ShoppingBag />} />
        <Route path="/search" element={<SearchResults />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path='/management' element={<Management />} />
        <Route path='/store' element= {<HProductList />} />
        <Route path='/categorias' element= {<Profile/>}/>
        <Route path='/marcas' element= {<Profile/>}/>
        <Route path='/productos' element= {<Profile/>}/>
        <Route path='/servicios' element= {<Profile/>}/>
        <Route path='/search' element= {<SearchResults />}/>

      </Routes>
    </Router>
  </React.StrictMode>
);
