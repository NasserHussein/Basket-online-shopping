import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = { isLoading: false, products: [], error: null };

export let getProduct = createAsyncThunk("products/getProduct", async (productLimit) => {
	let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products?limit=${productLimit}`);

	return data.data;
});

let productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getProduct.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getProduct.fulfilled, (state, action) => {
			state.isLoading = false;
			state.products = action.payload;
		});
		builder.addCase(getProduct.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
	},
});

export let productsReducer = productsSlice.reducer;
