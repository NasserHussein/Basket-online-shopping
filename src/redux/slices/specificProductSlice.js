import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {isLoading:false, product: {}, showModal:false, error:null};

export let getSpecificProduct = createAsyncThunk('specificProduct/getSpecificProduct', async (productID)=>{
    let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${productID}`);
    return data.data;
});

let specificProductSlice = createSlice({
    name: 'specificProduct',
    initialState,
    reducers: {
        setShowModal: (state, action) =>{
            state.showModal = action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(getSpecificProduct.pending, (state)=>{
            state.isLoading =true;
        });
        builder.addCase(getSpecificProduct.fulfilled, (state, action)=>{
            state.isLoading =false;
            state.showModal = true;
            state.product = action.payload;
        });
        builder.addCase(getSpecificProduct.rejected, (state, action)=>{
            state.isLoading =false;
            state.error = action.payload;
        });
    }
})

export let specificProductReducer = specificProductSlice.reducer;
export let {setShowModal} = specificProductSlice.actions