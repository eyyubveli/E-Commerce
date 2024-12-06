import React, { useEffect, useState } from 'react';
import "./Shop.scss";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Chevron from "../../img/Vector.png";
import { saleItems, trendingItems } from '../../items/items';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/ProductSlice';
import { useAuth } from '../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Shop = () => {
    const [value, setValue] = useState([0, 380]);
    const [active, setActive] = useState(false);
    const concatItems = [...trendingItems, ...saleItems.slice(0, 1)];
    const dispatch = useDispatch();
    const currentUser = useAuth();
    const navigate = useNavigate();
    const [filterItems, setFilterItems] = useState([]);


    const handleChange = (event, newValue) => {
        setValue(newValue);
        const [start, end] = newValue;
        const filteringItems = concatItems.filter(item => item.price >= start && item.price <= end);
        setFilterItems(filteringItems);

    };

    useEffect(() => {
        console.log(filterItems);
    }, [filterItems]);


    const ActiveBox = () => {
        setActive(prev => !prev);
    }

    return (
        <div className="shop">
            <div className="container">
                <div className="shop-wrapper">
                    <div className="shop-left">
                        <div className="shop-categories">
                            <details id="all-categories">
                                <summary>
                                    <img src={Chevron} alt="Arrow Icon" className="arrow-icon" />
                                    All Categories
                                </summary>
                                <details >
                                    <summary>
                                        <img src={Chevron} alt="Arrow Icon" className="arrow-icon" />
                                        Indoor Plants
                                    </summary>
                                    <ul>
                                        <li><a href="#">Maidenhair Fern</a></li>
                                        <li><a href="#">Kentia Palm</a></li>
                                        <li><a href="#">Snake Plant</a></li>
                                        <li><a href="#">Other</a></li>
                                    </ul>
                                </details>

                                <details >
                                    <summary>
                                        <img src={Chevron} alt="Arrow Icon" className="arrow-icon" />
                                        Outdoor Plants
                                    </summary>
                                    <ul>
                                        <li><a href="#">Maidenhair Fern</a></li>
                                        <li><a href="#">Kentia Palm</a></li>
                                        <li><a href="#">Snake Plant</a></li>
                                        <li><a href="#">Other</a></li>
                                    </ul>
                                </details>

                                <details >
                                    <summary>
                                        <img src={Chevron} alt="Arrow Icon" className="arrow-icon" />
                                        Medicinal Plants
                                    </summary>
                                    <ul>
                                        <li><a href="#">Maidenhair Fern</a></li>
                                        <li><a href="#">Kentia Palm</a></li>
                                        <li><a href="#">Snake Plant</a></li>
                                        <li><a href="#">Other</a></li>
                                    </ul>
                                </details>
                            </details>
                        </div>
                        <div className="shop-price">
                            <div onClick={ActiveBox}>
                                <h4>Price</h4>
                                <img src={Chevron} alt="icon" title='icon' />
                            </div>
                            <Box sx={{ width: 250 - 50 }} className={active ? 'active' : ''} >
                                <Slider
                                    defaultValue={0}
                                    getAriaLabel={() => 'Temperature range'}
                                    value={value}
                                    onChange={handleChange}
                                    valueLabelDisplay="auto"
                                    max={700}
                                />
                            </Box>
                        </div>
                        <div className="shop-include">
                            <h4>Include</h4>
                            <div className="shop-check-list">
                                <input type="checkbox" id="planter" />
                                <label htmlFor="planter">Planter</label>
                            </div>

                            <div className="shop-check-list">
                                <input type="checkbox" id="Combo" />
                                <label htmlFor="Combo">Combo</label>
                            </div>

                            <div className="shop-check-list">
                                <input type="checkbox" id="Flowers" />
                                <label htmlFor="Flowers">Flowers</label>
                            </div>
                            <div className="shop-check-list">
                                <input type="checkbox" id="Service" />
                                <label htmlFor="Service">Service</label>
                            </div>
                        </div>
                    </div>
                    <div className="shop-right">
                        <div className="shop-right-wrapper">


                            {(value[0] === 0 && value[1] === 380) ? (
                                concatItems.map(item => (
                                    <div
                                        className="shop-right-items"
                                        onClick={() => navigate(`/product-details/${item.id}`)}
                                        key={item.id}
                                    >
                                        <img src={item.img} alt={item.alt} title={item.title} />
                                        <h4>{item.title}</h4>
                                        <p>$ {item.price}</p>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                if (!currentUser.user) {
                                                   return toast.error("Log in or sign up");
                                                }

                                                dispatch(addProduct(item));
                                            }}
                                            className="trending-btn"
                                            type="button"
                                        >
                                            Buy
                                        </button>
                                    </div>
                                ))
                            ) : (

                                filterItems && filterItems.length > 0 ? (
                                    filterItems.map(item => (
                                        <div
                                            className="shop-right-items"
                                            onClick={() => navigate(`/product-details/${item.id}`)}
                                            key={item.id}
                                        >
                                            <img src={item.img} alt={item.alt} title={item.title} />
                                            <h4>{item.title}</h4>
                                            <p>$ {item.price}</p>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    if (currentUser) {
                                                        dispatch(addProduct(item));
                                                    } else {
                                                        toast.error("Log in or sign up");
                                                    }
                                                }}
                                                className="trending-btn"
                                                type="button"
                                            >
                                                Buy
                                            </button>
                                        </div>
                                    ))
                                ) : (
                                    <p>No products found in this price range.</p>
                                )
                            )}

                        </div>
                        {((filterItems && filterItems.length > 0) || (value[0] === 0 && value[1] === 380)) && (
                            <a href="#">Load more</a>
                        )}

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Shop;
