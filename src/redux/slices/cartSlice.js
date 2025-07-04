import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const initialState = {isLoadingAddToCart: false,isLoadingGetCart: false, isLoadingUpdateCart: false, isLoadingDeleteCart: false, cart:[], isError:null, numOfCartItems: 0, totalCartPrice: 0};

export let getCart = createAsyncThunk('cart/getCart',async () =>{
    let {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/cart',{
        headers:{
            token: `${localStorage.getItem("userToken")}`
        }
    });
    return data;
});
export let addToCart = createAsyncThunk('cart/addToCart',async (productId) =>{
    let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,{productId},{
        headers:{
            token: `${localStorage.getItem("userToken")}`
        }
    });
    return data;
});
export let updateCart = createAsyncThunk('cart/updateCart',async ({count ,productId}) =>{
    let {data} = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{count},{
        headers:{
            token: `${localStorage.getItem("userToken")}`
        }
    });
    return data;
});
export let removeFromCart = createAsyncThunk('cart/removeFromCart',async (productId) =>{
    let {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
        headers:{
            token: `${localStorage.getItem("userToken")}`
        }
    });    
    return data;
});

let cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearWhenLogot:(state)=>{
        state.cart = [];
        state.numOfCartItems = 0;
        state.totalCartPrice = 0;
    },
    },
    extraReducers: (builder) =>{
        builder.addCase(addToCart.pending,(state)=>{
            state.isLoadingAddToCart = true;
        });
        builder.addCase(addToCart.fulfilled,(state,action)=>{
            state.isLoadingAddToCart = false;
            state.cart = action.payload.data.products;
            state.numOfCartItems = action.payload.numOfCartItems;
            state.totalCartPrice = action.payload.data.totalCartPrice;
            toast.success(action.payload.message);
        });
        builder.addCase(addToCart.rejected,(state,action)=>{
            state.isLoadingAddToCart = false;
            state.isError = action.payload;
            toast.error("Something went wrong. Please try again later.");
        });
///////////////////////////////getCart//////////////////////////////////////////////
        builder.addCase(getCart.pending,(state)=>{
            state.isLoadingGetCart = true;
        });
        builder.addCase(getCart.fulfilled,(state,action)=>{
            state.isLoadingGetCart = false;
            state.cart = action.payload.data.products;
            state.numOfCartItems = action.payload.numOfCartItems;
            state.totalCartPrice = action.payload.data.totalCartPrice;
        });
        builder.addCase(getCart.rejected,(state,action)=>{
            state.isLoadingGetCart = false;
            state.isError = action.payload;
        });
/////////////////////////////////updateCart/////////////////////////////////////////////
        builder.addCase(updateCart.pending,(state)=>{
            state.isLoadingUpdateCart = true;
        });
        builder.addCase(updateCart.fulfilled,(state,action)=>{
            state.isLoadingUpdateCart = false;
            state.cart = action.payload.data.products;
            state.numOfCartItems = action.payload.numOfCartItems;
            state.totalCartPrice = action.payload.data.totalCartPrice;
            toast.success("Quantity updated successfully");
        });
        builder.addCase(updateCart.rejected,(state,action)=>{
            state.isLoadingUpdateCart = false;
            state.isError = action.payload;
        });
/////////////////////////////////removeFromCart/////////////////////////////////////////////
        builder.addCase(removeFromCart.pending,(state)=>{
            state.isLoadingDeleteCart = true;
        });
        builder.addCase(removeFromCart.fulfilled,(state,action)=>{
            state.isLoadingDeleteCart = false;
            state.cart = action.payload.data.products;
            state.numOfCartItems = action.payload.numOfCartItems;
            state.totalCartPrice = action.payload.data.totalCartPrice;
            toast.success("Product removed from cart");
        });
        builder.addCase(removeFromCart.rejected,(state,action)=>{
            state.isLoadingDeleteCart = false;
            state.isError = action.payload;
        });
    }
});

export const cartReducer = cartSlice.reducer;
export const {isLoadingAddToCart,isLoadingGetCart, isLoadingUpdateCart, isLoadingDeleteCart, isError, cart, clearWhenLogot} = cartSlice.actions;
