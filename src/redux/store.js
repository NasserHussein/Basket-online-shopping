import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./slices/productsSlice";
import { specificProductReducer } from "./slices/specificProductSlice";


export let store = configureStore({
    reducer:{
        productsReducer,
        specificProductReducer,
    }
});