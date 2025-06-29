import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./slices/productsSlice";
import { specificProductReducer } from "./slices/specificProductSlice";
import { cartReducer } from "./slices/cartSlice";

export let store = configureStore({
    reducer:{
        productsReducer,
        specificProductReducer,
        cart:cartReducer,
    }
});