import React, { useEffect } from 'react';
import Style from './sass/style.module.scss';
import { Link } from "react-router-dom";
import SwipeComponents from './swipers/SwipeComponents';
import SwipeTitle from './swipers/SwipeTitle';
const Landingpage = () => {

    useEffect(() => {
        document.title = 'Sneakers'
        let lorem = document.getElementById("lorem");
        let text = "Lorem Ipsum has been the industry's standard dummy....";
        let index = 0;

        function writeTexts() {
            lorem.innerHTML = text.slice(0, index);
            index++;
            if (index > text.length - 0) {
                index = 0;
            }
        }
        setInterval(writeTexts, 150)
        window.addEventListener('load', function () {
            writeTexts()
        })
    }
    )


    return (
        <section className={Style.homesection}>
            <div className={Style.hometext}>
                <h3 className={Style.bannerText}>Checkout Our New <SwipeTitle /></h3>
                <h1 className={Style.mensText}><strong>We  Might Have What You Like..</strong></h1>
                <p id='lorem' className={`${Style.mobile}`}>  </p>
                <span>
                    <Link to='/login'><button>Shop Now</button></Link>
                    <Link to='/collections'><button>See More</button></Link>
                </span>
            </div>
            <SwipeComponents />
            {/*   {
                PRODUCTS.map((product, index) => <ProductsPhotos key={index} {...{ product, index,   /* showProducts */ }
        </section>
    )

}
export default Landingpage;