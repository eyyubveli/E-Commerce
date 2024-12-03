import React from 'react'

import "./Celeb.scss";
import { CelebItems } from '../../items/items';

const Celeb = () => {

    
    return (
        <section className='celeb'>
            <div className="container">
                <h2 className="celeb-title">Celebs You Love, Love Us </h2>
                <div className="celeb-wrapper">
                    {CelebItems.map((item, index) => (
                        <div className="celeb-box" key={index}>
                            <div className="celeb-main">
                                <img src={item.img} alt={item.alt} title={item.title} />
                                <span className='celeb-desc'>{item.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Celeb