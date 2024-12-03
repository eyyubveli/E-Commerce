import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoCloseOutline } from "react-icons/io5";
import { removeProduct, incrementQuantity, decrementQuantity, selectTotalPrice, selectTotalItemCount } from "../../store/ProductSlice";
import { Link } from 'react-router-dom';


const Products = () => {
    const product = useSelector(state => state.products.product);
    const dispatch = useDispatch();
    const totalQuantity = useSelector(selectTotalPrice);
    const totalItemCount = useSelector(selectTotalItemCount);

    return (
        <div className='products-container'>
            {product && product.length > 0 ? (
                product.map((item, index) => (
                    <div key={index} className='product-item'>
                        <div className="product-body">
                            <img width={100} height={100} src={item.img} alt={item.alt} title={item.title} />
                            <div className='product-top'>
                                <div className='product-top-align'>
                                    <h4>{item.title}</h4>
                                    <IoCloseOutline
                                        onClick={() => dispatch(removeProduct({ id: item.id }))}
                                        size={22}
                                        cursor={'pointer'}
                                    />
                                </div>
                                <span>${item.price}</span>

                                <div className='btns'>
                                    <button onClick={() => dispatch(decrementQuantity({ id: item.id }))}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => dispatch(incrementQuantity({ id: item.id }))}>+</button>
                                </div>
                            </div>


                        </div>
                    </div>
                ))
            ) : (
                <p className='empty'>Your basket is empty</p>
            )}

            <div className='quantity'>
                <div className='quantity-wrapper'>
                    {totalItemCount > 0 && <b>Subtotal : {totalItemCount}</b>}
                    {totalQuantity > 0 && <b>$ {totalQuantity.toFixed(2)}</b>}
                </div>
                {product && product.length > 0 && (
                    <Link to="/cart">
                        <button type='button' className='view-cart'>VIEW CART</button>
                    </Link>
                )}
            </div>

        </div>


    )
}

export default Products