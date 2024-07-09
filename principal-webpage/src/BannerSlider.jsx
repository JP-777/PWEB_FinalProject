import React from 'react';
import Slider from 'react-slick';
import './BannerSlider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function BannerSlider() {
    const banners = [
        { id: 1, imageUrl: 'https://via.placeholder.com/800x300/48BEFF/ffffff?text=Banner+1' },
        { id: 2, imageUrl: 'https://via.placeholder.com/800x300/26547C/ffffff?text=Banner+2' },
        { id: 3, imageUrl: 'https://via.placeholder.com/800x300/9FFCDF/ffffff?text=Banner+3' }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
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
