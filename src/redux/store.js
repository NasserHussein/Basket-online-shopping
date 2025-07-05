import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./slices/productsSlice";
import { specificProductReducer } from "./slices/specificProductSlice";
import { cartReducer } from "./slices/cartSlice";
import { authReducer } from "./slices/authSlice";
import wishlistReducer from "./slices/wishlistSlice";
import { searchReducer } from "./slices/searchSlice";

export let store = configureStore({
    reducer:{
        products: productsReducer,
        specificProducts: specificProductReducer,
        cartReducer,
        authReducer,
        wishlistReducer,
        searchReducer
    }
});