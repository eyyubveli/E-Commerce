import React, { useState } from 'react'
import Star from "../../img/Star.png"
import "./Planters.scss";
import { plantersItems } from '../../items/items';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { addProduct, selectedData } from '../../store/ProductSlice';
import { useAuth } from '../../Hooks/useAuth';
import ProductDetails from '../../pages/ProductDetails/ProductDetails';
import { useNavigate } from 'react-router-dom';

const Planters = () => {
    const dispatch = useDispatch();
    const currentUser = useAuth().user;
    const navigate = useNavigate();
   
    return (
        <section className='planters' id='planters'>
            <div className="container">
                <h2 className='planters-title'>Planters</h2>
                <div className="planters-wrapper">
                    {plantersItems.map((item, index) => (
                        <div onClick={() => {
                            navigate(`/product-details/${item.id}`);

                        }} className="planters-items" key={index}>
                            <div className="planters-img">
                                <img src={item.img} alt={item.alt} title={item.title} />
                                <div className="planters-top">
                                    <img src={Star} alt="Star" title='Star' />
                                    <span className='discount'>{item.discount}% <br />off</span>
                                </div>
                            </div>
                            <div className="planters-body">
                                <h4>{item.title}</h4>
                                <p>
                                    <span >$ {item.price}</span>
                                    <span className='planters-new'>$ {item.newPrice}</span>
                                </p>
                            </div>
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
                    ))}
                </div>
            </div>

        </section>

    )
}


export default Planters