import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = { isLoading: false, products: [], error: null };

export let getProducts = createAsyncThunk("products/getProduct", async () => {
	let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
	return data.data;
});

let productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getProducts.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getProducts.fulfilled, (state, action) => {
			state.isLoading = false;
			state.products = action.payload;
		});
		builder.addCase(getProducts.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
	},
});

export let productsReducer = productsSlice.reducer;
