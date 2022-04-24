

import React from "react";
import '../sass/SwipeComponents.scss'
import { PRODUCTS } from '../Product';
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
            <Swiper navigation={false} modules={[Autoplay]} className='mySwiper' effect={"fade"}
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
