import React from 'react';
import './Cart.scss';
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, incrementQuantity, removeProduct, selectProductTotalPrices, selectTotalPrice } from '../../store/ProductSlice';
import Billing from '../../Components/Billing/Billing';
import { useAuth } from '../../Hooks/useAuth';

const Cart = () => {
    const allProducts = useSelector(state => state.products.product);
    const dispatch = useDispatch();
    const totalQuantity = useSelector(selectTotalPrice);
    const productTotalPrices = useSelector(selectProductTotalPrices);
   
    

    return (
        <section className="cart">
            <div className="container">
                <h2 className="cart-title">Your Cart Items</h2>
                <div className="cart-wrapper">
                    <div className="cart-top">
                        <div className="cart-top-left">
                            <h4>Product</h4>
                        </div>
                        <div className="cart-top-right">
                            <div>
                                <h4>Price</h4>
                            </div>
                            <div>
                                <h4>Quantity</h4>
                            </div>
                            <div>
                                <h4>Total</h4>
                            </div>
                        </div>
                    </div>
                    <div className="cart-body">
                        {allProducts && allProducts.length > 0 ? (
                            allProducts.map((product, index) => {
                                const totalPrice = productTotalPrices.find(p => p.id === product.id)?.totalPrice;

                                return (
                                    <div className="cart-items" key={product.id}>
                                        <div className="cart-items-left">
                                            <span>{index + 1}</span>
                                            <img
                                                width={160}
                                                src={product.img}
                                                alt={product.alt}
                                                title={product.title}
                                            />
                                            <div className="self">
                                                <h4>{product.title}</h4>
                                                <button
                                                    type="button"
                                                    onClick={() => dispatch(removeProduct({ id: product.id }))}
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cart-items-right">
                                            <span>${product.price}</span>
                                            <div className="quantity">
                                                <button
                                                    onClick={() => dispatch(incrementQuantity({ id: product.id }))}
                                                >
                                                    +
                                                </button>
                                                <span> {product.quantity} </span>
                                                <button
                                                    onClick={() => dispatch(decrementQuantity({ id: product.id }))}
                                                >
                                                    -
                                                </button>
                                            </div>
                                            <span className="total">$ {totalPrice}</span>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <p>You don't have product</p>
                        )}
                    </div>
                    <div className="cart-footer">
                        {totalQuantity > 0 ? (
                            <>
                                <div className="cart-footer-item">
                                    <span>Subtotal</span>
                                    {totalQuantity > 0 && <b>$ {totalQuantity.toFixed(2)}</b>}
                                </div>
                                <div className="cart-footer-item">
                                    <span>Shipping </span>
                                    <span>Flat Rate</span>
                                </div>
                                <hr />
                                <div className="cart-footer-item">
                                    <b>Total</b>
                                    {totalQuantity > 0 && <b>$ {totalQuantity.toFixed(2)}</b>}
                                </div>
                            </>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
                <Billing />
            </div>
        </section>
    );
};

export default Cart;
