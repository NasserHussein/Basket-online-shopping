import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./slices/productsSlice";


export let store = configureStore({
    reducer:{
        productsReducer,
    }
});