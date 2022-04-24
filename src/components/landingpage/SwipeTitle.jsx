/* import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import  './sass/swipeTitle.scss'
// Import Swiper styles & Swiper components
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, EffectFade } from "swiper";
import Landingpage from './Landingpage';
import { PRODUCTS } from './Product';
const SwipeTitle= () => {
    const ProductsTitles = ({ product, index, }) => <i key={index}>{product.title}</i>
    return (
        <>
            <Swiper
                effect={"fade"}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                modules={[Autoplay, EffectFade]}
                className="myswiper"
            >
                {
                    PRODUCTS.map((product, index) => 
                    <SwiperSlide key={product.id}>
                            <ProductsTitles key={product.id} {...{ product, index}} />
                    </SwiperSlide>)
                }

            </Swiper>

            {   Product.map((title, index) =>
                    <Landingpage picture={photo} />
                )
            } 
        }</>
        )
    }
    
    export default SwipeTitle 
    */
import React, { useRef, useState } from "react";
import './sass/swipeTitle.module.scss'
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
    const ProductsTitles = ({ product, index, }) => <i key={index}>{product.title}</i>
    return (
        <>
            <Swiper navigation={false} modules={[Autoplay]} className="mySwiper" effect={"fade"}
                autoplay={
                    {
                        delay: 2000,
                        disableOnInteraction: false
                    }
                }>
                {
                    PRODUCTS.map((product, index) =>
                        <SwiperSlide key={product.id}>
                            <ProductsTitles key={product.id} {...{ product, index }} />
                        </SwiperSlide>)
                }
            </Swiper>
        </>
    );
}
