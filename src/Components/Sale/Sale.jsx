import React from 'react'
import Star from "../../img/Star.png"
import "./Sale.scss"
import { saleItems } from '../../items/items'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast';
import { addProduct } from '../../store/ProductSlice'
import { useAuth } from '../../Hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const Sale = ({ title }) => {
    const dispatch = useDispatch();
    const currentUser = useAuth().user;
    const navigate = useNavigate();
    return (
        <section className='sale'>
            <div className="container">
                <h4 className="sale-title"> {title ?  title :  "Hot Sale"  }    </h4>
                <div className="sale-wrapper">
                    {saleItems.map((item, index) => (
                        <div onClick={() => {
                            navigate(`/product-details/${item.id}`);
                        }} className="sale-items" key={index}>
                            <div className="sale-img">
                                <img src={item.img} alt={item.alt} title={item.title} />
                                <div className="sale-top">
                                    <img src={Star} alt="Star" title='Star' />
                                    <span className='discount'>{item.discount}% <br />off</span>
                                </div>
                            </div>
                            <div className="sale-body">
                                <h4>{item.title}</h4>
                                <p>
                                    <span >$ {item.price}</span>
                                    <span className='sale-new'>$ {item.newPrice}</span>
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
                                }} className='trending-btn' type='button'>Buy</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Sale