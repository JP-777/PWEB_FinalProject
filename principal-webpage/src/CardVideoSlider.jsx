import React from 'react';
import Slider from 'react-slick';
import { CardWithVideo } from './CardWithVideo';
import './CardVideoSlider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function CardVideoSlider() {
    const cardVideoItems = [
        {
            title: 'Producto 1',
            description: 'Descripción del producto 1',
            image: 'https://via.placeholder.com/150',
            videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4'
        },
        {
            title: 'Producto 2',
            description: 'Descripción del producto 2',
            image: 'https://via.placeholder.com/150',
            videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4'
        },
        {
            title: 'Producto 3',
            description: 'Descripción del producto 3',
            image: 'https://via.placeholder.com/150',
            videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4'
        }
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
        <div className="card-video-slider">
            <Slider {...settings}>
                {cardVideoItems.map((item, index) => (
                    <CardWithVideo
                        key={index}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        videoUrl={item.videoUrl}
                    />
                ))}
            </Slider>
        </div>
    );
}
