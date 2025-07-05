import { createSlice } from "@reduxjs/toolkit";

const initialState = {searchProducts: null}

let searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers:{
        setSearchProducts(state, action){
            state.searchProducts = action.payload;
        }
    }
})

export const searchReducer = searchSlice.reducer;
export const {searchProducts, setSearchProducts} = searchSlice.actions; 