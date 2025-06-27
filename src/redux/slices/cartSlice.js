import { createSlice } from "@reduxjs/toolkit";
import { addProductToUserCart } from "../thunk/cart/addProductToUserCard";
import { removeProductFromUserCard } from "../thunk/cart/removeProductFromUserCard";
import { UpdateQuantityProductFromUserCart } from "../thunk/cart/UpdateQuantityProductFromUserCart";
import { clearUserCart } from "../thunk/cart/clearUserCart";
import { getLoggedUserCart } from "../thunk/cart/getLoggedUserCart";

const initialCartState = {
	addedProducts: JSON.parse(localStorage.getItem("addedProducts")) || [],
	addedUserProducts: null,
	isLoading: false,
	isError: false,
	isSuccess: false,
};

const cartSlice = createSlice({
	name: "cart",
	initialState: initialCartState,
	reducers: {
		addItemToCart(state, action) {
			const selectedProduct = action.payload;
			state.productId = selectedProduct.id;
			if (state.addedProducts.some((item) => item.id === selectedProduct.id)) {
				let targetedProduct = state.addedProducts.find((item) => item.id === selectedProduct.id);
				targetedProduct.quantity += 1;

				localStorage.setItem("addedProducts", JSON.stringify(state.addedProducts));

				state.addedProducts = JSON.parse(localStorage.getItem("addedProducts"));
			} else {
				state.addedProducts.push(selectedProduct);
				localStorage.setItem("addedProducts", JSON.stringify(state.addedProducts));

				state.addedProducts = JSON.parse(localStorage.getItem("addedProducts"));
			}
		},
		removeItemFromCart(state, action) {
			const selectedProduct = action.payload;

			if (state.addedProducts.some((item) => item.id === selectedProduct.id)) {
				let targetedProduct = state.addedProducts.find((item) => item.id === selectedProduct.id);
				if (targetedProduct.quantity < 1) {
					const updatedProducts = state.addedProducts.filter((product) => product.id !== selectedProduct.id);
					localStorage.setItem("addedProducts", JSON.stringify(updatedProducts));
					state.addedProducts = JSON.parse(localStorage.getItem("addedProducts"));
					return;
				}

				targetedProduct.quantity -= 1;

				localStorage.setItem("addedProducts", JSON.stringify(state.addedProducts));

				state.addedProducts = JSON.parse(localStorage.getItem("addedProducts"));
			} else {
				const updatedProducts = state.addedProducts.filter((product) => product.id !== selectedProduct.id);
				localStorage.setItem("addedProducts", JSON.stringify(updatedProducts));

				state.addedProducts = JSON.parse(localStorage.getItem("addedProducts"));
			}
		},
	},
	extraReducers(builder) {
		builder.addCase(addProductToUserCart.pending, (state) => {
			state.isLoading = true;
			state.isError = false;
			state.isSuccess = false;
		});
		builder.addCase(addProductToUserCart.rejected, (state) => {
			state.isError = true;
			state.isLoading = false;
			state.isSuccess = false;
		});
		builder.addCase(addProductToUserCart.fulfilled, (state) => {
			state.isError = false;
			state.isSuccess = true;
			state.isLoading = false;
    });
    builder.addCase(removeProductFromUserCard.pending, (state) => { 
      state.isLoading = true;
			state.isError = false;
			state.isSuccess = false;
    })
    builder.addCase(removeProductFromUserCard.rejected, (state) => {
      state.isError = true;
			state.isLoading = false;
			state.isSuccess = false;
     })
    builder.addCase(removeProductFromUserCard.fulfilled, (state) => { 
      state.isError = false;
			state.isSuccess = true;
			state.isLoading = false;
    })
    builder.addCase(UpdateQuantityProductFromUserCart.pending, (state) => {
			state.isLoading = true;
			state.isError = false;
			state.isSuccess = false;
		});
		builder.addCase(UpdateQuantityProductFromUserCart.rejected, (state) => {
			state.isError = true;
			state.isLoading = false;
			state.isSuccess = false;
		});
		builder.addCase(UpdateQuantityProductFromUserCart.fulfilled, (state) => {
			state.isError = false;
			state.isSuccess = true;
			state.isLoading = false;
    });
    
    builder.addCase(clearUserCart.pending, (state) => {
			state.isLoading = true;
			state.isError = false;
			state.isSuccess = false;
		});
		builder.addCase(clearUserCart.rejected, (state) => {
			state.isError = true;
			state.isLoading = false;
			state.isSuccess = false;
		});
		builder.addCase(clearUserCart.fulfilled, (state) => {
			state.isError = false;
			state.isSuccess = true;
			state.isLoading = false;
    });
    
    builder.addCase(getLoggedUserCart.pending, (state) => {
			state.isLoading = true;
			state.isError = false;
			state.isSuccess = false;
		});
		builder.addCase(getLoggedUserCart.rejected, (state) => {
			state.isError = true;
			state.isLoading = false;
			state.isSuccess = false;
		});
		builder.addCase(getLoggedUserCart.fulfilled, (state, {payload}) => {
			state.isError = false;
			state.isSuccess = true;
      state.isLoading = false;
      state.addedUserProducts = [...payload.products];
		});
	},
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
