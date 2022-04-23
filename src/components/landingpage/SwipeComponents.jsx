import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles & Swiper components
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, EffectFade } from "swiper";
import Landingpage from './Landingpage';
import { PRODUCTS } from './Product';
const SwipeComponents = () => {
    const ProductsTitles = ({ product, index, }) => <i key={index}>{product.title}</i>
    const ProductsPhotos = ({ product, index, }) => <img key={index} alt={product.title} src={product.photo} />
    return (
        <>
            <Swiper
                effect={"fade"}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                modules={[Autoplay, EffectFade]}
            >{

                    PRODUCTS.map((product, index) => <SwiperSlide key={index}>
                        {
                            PRODUCTS.map((product, index) => <ProductsPhotos key={index} {...{ product, index,   /* showProducts */ }} />)
                        }
                    </SwiperSlide>)
                }

                {/*    Product.map((title, index) =>
                    <Landingpage picture={photo} />
                )
            } */}
            </Swiper></>
    )
}

export default SwipeComponents