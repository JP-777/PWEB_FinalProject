import React from 'react';
import Slider from 'react-slick';
import { CardWithVideo } from './CardWithVideo';
import './CardVideoSlider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function CardVideoSlider() {
    const cardVideoItems = [
        {
            title: 'LAPTOP',
            description: 'Laptop de escritorio excelente para trabajo de oficina',
            image: 'https://images-cdn.ubuy.co.in/635f8ad9afed8b54834faff3-dell-xps-13-plus-9320-13-4.jpg',
            videoUrl: 'https://www.youtube.com/embed/7WrHNF9KKso?si=4kYPapWZ_XQ2V8EL',
            backgroundImage: 'https://image.slidesdocs.com/responsive-images/background/modern-minimalistic-white-workspace-with-a-laptop-placed-on-the-table-next-to-the-window-3d-rendered-picture-powerpoint-background_df552a405e__268_150.jpg',
            titleColor: '#000', 
            descriptionColor: '#000'
        },
        {
            title: 'Laptop',
            description: 'La mejor laptop gamer',
            image: 'https://pe.store.asus.com/media/catalog/product/cache/2868dafe2b4ec8474f3b444cfc8b532a/_/h/_hzmqjxjsq1jh4z70.png',
            videoUrl: 'https://www.youtube.com/embed/1oOn6gfmk4s?si=oWzsQ2rVQMV8i_s9',
            backgroundImage: 'https://i.pinimg.com/736x/17/30/5b/17305b9fa208001b4177a24febc1a941.jpg',
            titleColor: '#fff',
            descriptionColor: '#fff'
        },
        {
            title: 'Tablet',
            description: 'Deja volar tu creatividad',
            image: 'https://img.global.news.samsung.com/ar/wp-content/uploads/2020/08/SM-P615_001_Front-With-S-pen_Pink-e1597072750963.png',
            videoUrl: 'https://www.youtube.com/embed/doQJTEQT638?si=qwnNwc5OctRFlJPd',
            backgroundImage: 'https://png.pngtree.com/background/20230419/original/pngtree-fantasy-color-ink-creative-advertising-illustration-picture-image_2447868.jpg',
            titleColor: '#000',
            descriptionColor: '#000'
        }
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
        <div className="card-video-slider">
            <Slider {...settings}>
                {cardVideoItems.map((item, index) => (
                    <CardWithVideo
                        key={index}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        videoUrl={item.videoUrl}
                        backgroundImage={item.backgroundImage}
                        titleColor={item.titleColor}
                        descriptionColor={item.descriptionColor}
                    />
                ))}
            </Slider>
        </div>
    );
}
