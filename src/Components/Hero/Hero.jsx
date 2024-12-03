import React from 'react';
import { useLocation } from 'react-router-dom';
import HeaderBanner from "../../img/Banner.jpg";
import ShopBanner from "../../img/shopbanner.jpg";
const Hero = () => {
    const location = useLocation();

    const backgroundImage =
        location.pathname === "/" ? HeaderBanner : location.pathname === "/shop" ? ShopBanner : "";
    return (
        <div
            className="hero"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: "320px",
                backgroundRepeat: 'no-repeat',
                marginTop: "15px",
                display: location.pathname === '/' || location.pathname === '/shop' ? 'block' : 'none'
            }}
        >

        </div>
    );
};

export default Hero;
