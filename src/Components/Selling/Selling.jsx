import React from 'react'

import "./Selling.scss"
import { useNavigate } from "react-router-dom";
import { sellingItems } from '../../items/items';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
const Selling = () => {
    const navigate = useNavigate();
    const currentUser = useSelector((state) => state.login.user);
    const getShop = () => {
        window.scrollTo(0, 0);
        navigate("/shop");
    }
    return (
        <section className='selling container'>
            <h1 className="selling-title">Best Selling</h1>
            <div className="selling-wrapper">
                {sellingItems.map((item, index) => (
                    <div className="selling-item" key={index}>
                        <div className="selling-img-container">
                            <img className='selling-img' src={item.img} alt={item.alt} title={item.title} />
                            <p>{item.title}</p>
                        </div>
                        <button onClick={getShop} className='selling-btn' type='button'>Shop Now</button>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Selling