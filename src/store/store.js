import { configureStore } from '@reduxjs/toolkit'
import loginSlice from './LoginSlice'
import productReducer from  "./ProductSlice";


export const store = configureStore({
    reducer: {
        login: loginSlice,
        products : productReducer
    },
})

