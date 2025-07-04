import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./slices/productsSlice";
import { specificProductReducer } from "./slices/specificProductSlice";
import { cartReducer } from "./slices/cartSlice";
import { authReducer } from "./slices/authSlice";

export let store = configureStore({
    reducer:{
        products: productsReducer,
        specificProducts: specificProductReducer,
        // cart:cartReducer,
        cartReducer,
        authReducer
    }
});