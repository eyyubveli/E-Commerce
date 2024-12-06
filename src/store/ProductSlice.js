import { createSelector, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { getProductFromLocalStorage, saveToLocalStorage } from './SaveLocalStorage';

const initialState = {
    product: getProductFromLocalStorage(),
    inputValue: '',
    selectedProduct: ''
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const { id, quantity = 1 } = action.payload;
            const existingProduct = state.product.find(item => item.id === id);

            if (existingProduct) {
                if (existingProduct.quantity + quantity > 10) {
                    toast.error("You can't add more than 10");
                    return;
                }
                existingProduct.quantity += quantity;
            } else {
                state.product.push({ ...action.payload, quantity: quantity || 1 });
            }

            toast.success('Product added to basket');
            saveToLocalStorage(state.product);
        },

        removeProduct: (state, action) => {
            state.product = state.product.filter(item => item.id !== action.payload.id);
            toast.success('Product removed from basket');
            saveToLocalStorage(state.product);
        },
        incrementQuantity: (state, action) => {
            const product = state.product.find(item => item.id === action.payload.id);
            if (product) {
                if (product.quantity === 10) {
                    toast.error("You can't add more than 10");
                    return;
                }
                product.quantity += 1;
                toast.success('Quantity updated');
            }
            saveToLocalStorage(state.product);
        },
        decrementQuantity: (state, action) => {
            const product = state.product.find(item => item.id === action.payload.id);
            if (product.quantity > 1) {
                product.quantity -= 1;
                toast.success('Quantity updated');
            } else {
                state.product = state.product.filter(item => item.id !== action.payload.id);
                toast.success('Product removed from basket');
            }
            saveToLocalStorage(state.product);
        },
        getInputValue: (state, action) => {
            state.inputValue = action.payload;
        },
        clearInputValue: (state) => {
            state.inputValue = '';
        },
        clearProductList: (state) => {
            state.product = [];
            saveToLocalStorage(state.product); 
        },
    },

});

export const selectOneProductPrice = (state, productId) => {
    const product = state.products.product.find(item => item.id === productId);
    return product ? product.price * product.quantity : 0;
};

export const selectTotalPrice = (state) => {
    return state.products.product.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
};

export const selectTotalItemCount = (state) => {
    return state.products.product.reduce((total, item) => total + item.quantity, 0);
};

const selectAllProducts = state => state.products.product;

export const selectProductTotalPrices = createSelector(
    [selectAllProducts, (state) => state],
    (allProducts, state) => allProducts.map(product => ({
        id: product.id,
        totalPrice: selectOneProductPrice(state, product.id),
    }))
);


export const { addProduct, removeProduct, incrementQuantity, decrementQuantity, getInputValue, selectedData, detailsDecrementQuantity, detailsIncrementQuantity, clearProductList, clearInputValue } = productSlice.actions;

export default productSlice.reducer;
