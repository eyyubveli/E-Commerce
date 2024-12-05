import React, { useEffect } from 'react'

import { IoIosCloseCircleOutline } from "react-icons/io";
import Products from '../Products/Products';
import { useLocation } from 'react-router-dom';
function Basket({ setActive, active }) {

    const closeBasket = () => setActive(prevItem => !prevItem);
    const location = useLocation();

    useEffect(() => {
        setActive(false)
    }, [location]);
    return (
        <div className={`basket ${active ? "active" : ""}`}>
            <IoIosCloseCircleOutline
                onClick={closeBasket}
                className="item"
                size={25}
                color="black"
                cursor="pointer"
            />
            <Products />
        </div>
    )
}

export default Basket