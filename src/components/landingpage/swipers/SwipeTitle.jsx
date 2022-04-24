
import React from "react";
import '../sass/swipeTitle.scss'
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
    const ProductsTitles = ({ product, index, }) => <i key={index}>{product.title}</i>
    return (
        <>
            <Swiper navigation={false} modules={[Autoplay]} className="mySwiperTitle" effect={"fade"}
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
