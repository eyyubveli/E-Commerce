import React from 'react'
import "./Trending.scss"
import { trendingItems } from '../../items/items'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../store/ProductSlice'
import toast from 'react-hot-toast'
import { useAuth } from '../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom'


const Trending = () => {
    const dispatch = useDispatch();
    const currentUser = useAuth().user;
    const navigate = useNavigate();
    return (
        <section className='trending' id='trending'>
            <div className="container">
                <h2 className='trending-title'>Trending Plants</h2>
                <div className="trending-wrapper">
                    {trendingItems.map((item, index) => (
                        <div key={index} className="trending-items" onClick={() => {
                            navigate(`/product-details/${item.id}`);
                        }}>
                            <img src={item.img} alt={item.title} title={item.title} />
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
                        }} className='trending-btn' type='button'>Buy</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Trending