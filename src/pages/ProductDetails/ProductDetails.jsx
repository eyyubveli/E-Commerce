import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { plantersItems, saleItems, trendingItems } from '../../items/items';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import "./ProductDetails.scss";
import Adenium from "../../img/adenium.png";
import NavLeft from "../../img/nav.png";
import NavRight from "../../img/nav-right.png";
import Indoor from "../../img/indoor.jpg";
import './ProductDetails.scss';
import useQuantity from '../../Hooks/useQuantity';
import Arrow from "../../img/arrowicon.png";
import Sale from "../../Components/Sale/Sale";
import { useAuth } from '../../Hooks/useAuth';
const ProductDetails = () => {
    const { id } = useParams();
    const allItems = [...plantersItems, ...saleItems, ...trendingItems];
    const product = allItems.find((item) => item.id == id);
    const navigate = useNavigate();
  

    

    useEffect(() => {
        if (!product) {
            navigate('/404');
        }
    }, [product, navigate]);

    if (!product) {
        return null;
    }
    const { localQuantity, handleAddToCart, handleIncrement, handleDecrement } = useQuantity(1, product);
    const [mainImg, setMainImg] = useState(product?.img);
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeTabIndex, setActiveTabIndex] = useState(1);



    useEffect(() => {
        if (id) {
            window.scrollTo(0, 0);
        }
    }, [id]);


    const handleClick = (index, src) => {
        setMainImg(src);
        setActiveIndex(index);
    };

    const tabsActive = (index) => {
        setActiveTabIndex(index);
    }


    return (
        <section className='product-details'>
            <div className="container details">
                <div className="product-details-left">
                    <img src={mainImg} alt={product?.alt} title={product?.title} />
                    <div className="bottom">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar]}
                            slidesPerView={4}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            className="mySwiper"
                        >
                            <img
                                className="swiper-button-prev navigate"
                                src={NavLeft}
                                alt="Previous"
                                title="Previous Slide"
                            />

                            {[Adenium, Indoor, product.img, product.img, product.img].map((imgSrc, index) => (
                                <SwiperSlide key={index}>
                                    <img
                                        onClick={() => handleClick(index, imgSrc)}
                                        src={imgSrc}
                                        alt={product.alt}
                                        title={product.title}
                                        className={activeIndex === index ? 'active' : ''}
                                    />
                                </SwiperSlide>
                            ))}

                            <img
                                className="swiper-button-next navigate"
                                src={NavRight}
                                alt="Next"
                                title="Next Slide"
                            />
                        </Swiper>
                    </div>
                </div>
                <div className="product-details-right">
                    <div className="product-top">
                        <h4>{product.title}</h4>
                        <p className='price'>
                            <span>$ {String(product.price).replace('$', ' ')}</span>
                        </p>
                        <p>{product?.description}</p>
                    </div>
                    <div className="product-body">
                        <div className="quantity-items">
                            <span>Quantity</span>
                            <div className="quantity">
                                <button onClick={handleDecrement} disabled={localQuantity <= 1}>-</button>
                                <span>{localQuantity}</span>
                                <button onClick={handleIncrement} disabled={localQuantity >= 10}>+</button>
                            </div>
                        </div>
                        <div className='include'>
                            <span>Include Planter</span>
                            <select>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="product-footer">
                        <button onClick={handleAddToCart} className='btn'>Add to Cart</button>
                        <h3>Delivery</h3>
                        <p>Enter your Pincode to check delivery time.</p>
                        <div className="check-items">
                            <input type="text" defaultValue="500009" />
                            <button type='button'>CHECK</button>
                        </div>
                        <p className='delivery'>
                            Delivery available for this location. Typically delivered in 5-7 working days. Standard Delivery.
                        </p>
                    </div>
                </div>
            </div>
            <div className="tabs">
                <div className="container">
                    <div className="tabs-btn">
                        <button onClick={() => tabsActive(1)} type='button' className={activeTabIndex == '1' ? 'active' : ""}>
                            <img src={Arrow} alt="Arrow icon" title='Arrow icon' /> Care Guide
                        </button>
                        <button onClick={() => tabsActive(2)} type='button' className={activeTabIndex == '2' ? 'active' : ""}>
                            <img src={Arrow} alt="Arrow icon" title='Arrow icon' /> Plant Bio
                        </button>
                        <button onClick={() => tabsActive(3)} type='button' className={activeTabIndex == '3' ? 'active' : ''}>
                            <img src={Arrow} alt="Arrow icon" title='Arrow icon' /> Reviews
                        </button>
                    </div>
                    <div className="tabs-content">
                        <div className={`tabs-content-item ${activeTabIndex == 1 ? 'active' : ''}`}>
                            <h4>Weekly Watering</h4>
                            <p>Calatheas enjoy weekly waterings, allowing the top 2’ of soil to dry out partially. In winter, we recommend watering less frequently to prevent overwatering and root rot. This plant is not very drought tolerant, and extended periods of dryness will cause leaf edges to brown.</p>
                            <h4>Light Requirements</h4>
                            <p>Calatheas thrive in medium, indirect sunlight but tolerate lower light levels too. Bright direct sunlight can cause the stunning colours on their leaves to fade, with prolonged exposure likely to burn and scorch their leaves.</p>
                            <h4>Humidity</h4>
                            <p>Your Calathea will also appreciate being placed in a humid environment, which you can create with by misting it frequently, placing it close to other plants or on a pebble tray partly filled with water. Calatheas thrive in steamy bathrooms and kitchens.</p>
                        </div>
                        <div className={`tabs-content-item ${activeTabIndex == 2 ? 'active' : ''}`}>
                            <h4>Plant Bio</h4>

                        </div>
                        <div className={`tabs-content-item ${activeTabIndex == 3 ? 'active' : ''}`}>
                            <h4>Reviews</h4>

                        </div>
                    </div>
                </div>
            </div>
            <Sale title={"You May Also Like..."} />
        </section >
    );
};

export default ProductDetails;
