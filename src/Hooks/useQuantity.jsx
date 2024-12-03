import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/ProductSlice';

const useQuantity = (initialQuantity = 1, product) => {
    const [localQuantity, setLocalQuantity] = useState(initialQuantity);
    
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        const productWithQuantity = { ...product, quantity: localQuantity };
        dispatch(addProduct(productWithQuantity));
    };

    const handleIncrement = () => {
        if (localQuantity < 10) {
            setLocalQuantity((prev) => prev + 1);
        }
    };

    const handleDecrement = () => {
        if (localQuantity > 1) {
            setLocalQuantity((prev) => prev - 1);
        }
    };

    return {
        localQuantity,
        handleAddToCart,
        handleIncrement,
        handleDecrement,
    };
};

export default useQuantity;
