import React from 'react'
import "./Blog.scss"
import { blogItems } from '../../items/items'

const Blog = () => {

   
    return (
        <section className='blog'>
            <div className="container">
                <h2 className='blog-title'>Blogs</h2>
                <div className="blog-wrapper">
                    {blogItems.map((item, index) => (
                        <div className="blog-items" key={index}>
                            <img className='blog-img' src={item.img} alt={item.alt} title={item.title} />
                            <div className="blog-inside">
                                <p>{item.title}</p>
                                <button className='blog-btn' type='button'>Read</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Blog