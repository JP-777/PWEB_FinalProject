import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './Header';
import { SubHeader } from './SubHeader';
import { BannerSlider } from './BannerSlider';
import { ProductList } from './ProductList';
import { CardVideoSlider } from './CardVideoSlider';
import { OffersSection } from './OffersSection';
import './index.css';

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
            <OffersSection />
          </>
        } />
        <Route path="/banner" element={<BannerSlider />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/videos" element={<CardVideoSlider />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
