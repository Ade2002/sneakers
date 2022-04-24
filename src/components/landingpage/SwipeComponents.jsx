/* import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles & Swiper components
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, EffectFade } from "swiper";
const SwipeComponents = () => {
    return (
        <>
            <Swiper
                effect={"fade"}
                autoplay={
                    {
                        delay: 100,
                        disableOnInteraction: false
                    }
                }
                slidesPerView={1}
                modules={[Autoplay, EffectFade]}
                className="myswiper"
            >
                {
                    PRODUCTS.map((product, index) =>
                        <SwiperSlide key={product.id}>
                            <ProductsPhotos key={product.id} {...{ product, index }} />
                        </SwiperSlide>)
                    }
                    
                    </Swiper>
                    
                    { Product.map((title, index) =>
                        <Landingpage picture={photo} />
                        )
                    } </>
                    )
                }
                
                export default SwipeComponents */



import React, { useRef, useState } from "react";
import styler from './sass/SwipeComponents.module.scss'
import { PRODUCTS } from './Product';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css/autoplay';
import "swiper/css";
import "swiper/css/navigation";



// import required modules
import { Autoplay } from "swiper";

export default function App() {
    const ProductsPhotos = ({ product, index, }) => <img key={index} alt={product.title} src={product.photo} />
    return (
        <>
            <Swiper navigation={false} modules={[ Autoplay]} className={'mySwiper'} effect={"fade"}
                autoplay={
                    {
                        delay: 2000,
                        disableOnInteraction: false
                    }
                }>
                {
                    PRODUCTS.map((product, index) =>
                        <SwiperSlide key={product.id}>
                            <ProductsPhotos key={product.id} {...{ product, index }} />
                        </SwiperSlide>)
                    }
            </Swiper>
        </>
    );
}
