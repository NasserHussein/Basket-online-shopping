import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "../thunk/cart/getCategories";

const categoriesSlice = createSlice({
	name: "categories",
	initialState: {
		data: [],
		isLoading: false,
		error: null,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getCategories.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getCategories.fulfilled, (state, action) => {
				state.isLoading = false;
				state.data = action.payload;
			})
			.addCase(getCategories.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export default categoriesSlice.reducer;
