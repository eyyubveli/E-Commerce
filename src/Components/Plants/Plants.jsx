import React from 'react';

import Arrow from "../../img/arrow2.svg"
import "./Plants.scss";
import { plantItems } from '../../items/items';
import { Link } from 'react-router-dom';
const Plants = () => {

    return (
        <section className='plants'>
            <div className="container">
                <div className="plants-top">
                    <button className='plants-btn'>
                        <span href="#">
                            <Link to={"/shop"}>See Al</Link>
                        </span>
                        <img src={Arrow} alt="Arrow" title='Arrow' />
                    </button>
                </div>
                <div className="plants-wrapper">
                    {plantItems.map((item, index) => (
                        <div className="plants-item" key={index}>
                            <img src={item.img} alt={item.alt} title={item.title} />
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Plants;
