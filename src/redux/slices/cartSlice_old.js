import { createSlice } from "@reduxjs/toolkit";
import { addProductToUserCart } from "../thunk/cart/addProductToUserCard";
import { removeProductFromUserCard } from "../thunk/cart/removeProductFromUserCard";
import { UpdateQuantityProductFromUserCart } from "../thunk/cart/UpdateQuantityProductFromUserCart";
import { clearUserCart } from "../thunk/cart/clearUserCart";
import { getLoggedUserCart } from "../thunk/cart/getLoggedUserCart";
import { updateLocalStorage } from "../../utils/updateLocalStorage";
import { errorAsyncHandling } from "../../utils/errorAsyncHandling";

const initialCartState = {
	addedProducts: JSON.parse(localStorage.getItem("addedProducts")) || [],
	addedUserProducts: null,
	loading: "idle", // 'idle' | 'pending' | 'succeeded' | 'failed'
	error: null,
};

const cartSlice = createSlice({
	name: "cart",
	initialState: initialCartState,
	reducers: {
		addItemToCart(state, action) {
			const selectedProduct = action.payload;

			if (state.addedProducts.some((item) => item.id === selectedProduct.id)) {
				let targetedProduct = state.addedProducts.find((item) => item.id === selectedProduct.id);
				targetedProduct.quantity += 1;

				updateLocalStorage(state.addedProducts, "addedProducts", state.addedProducts);
			} else {
				state.addedProducts.push(selectedProduct);
				updateLocalStorage(state.addedProducts, "addedProducts", state.addedProducts);
			}
		},
		removeItemFromCart(state, action) {
			const selectedProduct = action.payload;

			if (state.addedProducts.some((item) => item.id === selectedProduct.id)) {
				let targetedProduct = state.addedProducts.find((item) => item.id === selectedProduct.id);
				if (targetedProduct.quantity < 1) {
					const updatedProducts = state.addedProducts.filter((product) => product.id !== selectedProduct.id);
					updateLocalStorage(state.addedProducts, "addedProducts", updatedProducts);
					return;
				}

				targetedProduct.quantity -= 1;

				updateLocalStorage(state.addedProducts, "addedProducts", state.addedProducts);
			} else {
				const updatedProducts = state.addedProducts.filter((product) => product.id !== selectedProduct.id);
				updateLocalStorage(state.addedProducts, "addedProducts", updatedProducts);
			}
		},
	},
	extraReducers(builder) {
		builder.addCase(addProductToUserCart.pending, (state) => {
			state.loading = "loading";
		});
		builder.addCase(addProductToUserCart.rejected, (state, { payload }) => {
			errorAsyncHandling(state, payload);
		});
		builder.addCase(addProductToUserCart.fulfilled, (state) => {
			state.loading = "fulfilled";
		});
		builder.addCase(removeProductFromUserCard.pending, (state) => {
			state.loading = "loading";
		});
		builder.addCase(removeProductFromUserCard.rejected, (state, { payload }) => {
			errorAsyncHandling(state, payload);
		});
		builder.addCase(removeProductFromUserCard.fulfilled, (state) => {
			state.loading = "fulfilled";
		});
		builder.addCase(UpdateQuantityProductFromUserCart.pending, (state) => {
			state.loading = "loading";
		});
		builder.addCase(UpdateQuantityProductFromUserCart.rejected, (state, { payload }) => {
			errorAsyncHandling(state, payload);
		});
		builder.addCase(UpdateQuantityProductFromUserCart.fulfilled, (state) => {
			state.loading = "fulfilled";
		});

		builder.addCase(clearUserCart.pending, (state) => {
			state.loading = "pending";
		});
		builder.addCase(clearUserCart.rejected, (state, { payload }) => {
			errorAsyncHandling(state, payload);
		});
		builder.addCase(clearUserCart.fulfilled, (state) => {
			state.loading = "fulfilled";
		});

		builder.addCase(getLoggedUserCart.pending, (state) => {
			state.loading = "pending";
		});
		builder.addCase(getLoggedUserCart.rejected, (state, { payload }) => {
			errorAsyncHandling(state, payload);
		});
		builder.addCase(getLoggedUserCart.fulfilled, (state, { payload }) => {
			state.loading = "fulfilled";
			state.addedUserProducts = payload.data.data;
		});
	},
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
