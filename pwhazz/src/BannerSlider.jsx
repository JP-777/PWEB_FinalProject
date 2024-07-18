import React from 'react';
import Slider from 'react-slick';
import './BannerSlider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function BannerSlider() {
    const banners = [
        { id: 1, imageUrl: 'https://storage.pixteller.com/designs/designs-images/2020-12-21/05/laptop-new-arrival-sales-banner-1-5fe0c47813869.png' },
        { id: 2, imageUrl: 'https://www.brildor.com/blog/wp-content/uploads/2020/03/impresora-camisetas-epson-f2100.jpg' },
        { id: 3, imageUrl: 'http://cdn.gsmarena.com/pics/11/06/samsung-galaxy-tab-ad/gsmarena_001.jpg' }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    };

    return (
        <div className="banner-slider">
            <Slider {...settings}>
                {banners.map(banner => (
                    <div key={banner.id}>
                        <img src={banner.imageUrl} alt={`Banner ${banner.id}`} className="banner-image" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
