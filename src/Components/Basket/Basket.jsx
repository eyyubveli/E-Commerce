import React from 'react'

import { IoIosCloseCircleOutline } from "react-icons/io";
import Products from '../Products/Products';
function Basket({ setActive, active }) {

    const closeBasket = () => setActive(prevItem => !prevItem);

    return (
        <div className={`basket ${active ? "active" : ""}`}>
            <IoIosCloseCircleOutline
                onClick={closeBasket}
                className="item"
                size={25}
                color="black"
                cursor="pointer"
            />
            <Products/>
        </div>
    )
}

export default Basket