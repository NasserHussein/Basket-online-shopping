import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const UpdateQuantityProductFromUserCart = createAsyncThunk("cart/UpdateQuantityProductFromUserCart", async ({ productId }, { rejectWithValue }) => {
	try {

		const {
			data: { data },
		} = await axios.post(
			"https://ecommerce.routemisr.com/api/v1/cart" + productId,
			JSON.stringify({
				count: 1,
			}),
			{
				headers: {
					Token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3OWNkM2YxMGNiNjNkYjM5YTBiMzI1ZCIsImlhdCI6MTc1MDQ3MDk2MCwiZXhwIjoxNzU4MjQ2OTYwfQ.6NC_liGLA7SUqWMrOJOAUFFSugBKtg5oGL5NwoW2ZzM",
				},
			}
		);
		return data;
	} catch (error) {
			if (axios.isAxiosError(error)) {
				let errorMessage;
	
				if (error.response) {
					errorMessage = "We are very sorry that the site is not running due to maintenance and product development reasons.";
				} else if (error.request) {
					errorMessage = "Warning: There is a problem with your internet connection. Please check and try again.";
				} else {
					errorMessage = "There is a problem preventing you from updating this product. Maybe you are not logged in yet?";
				}
	
				return rejectWithValue(errorMessage);
			}
			return rejectWithValue("An unknown error occurred.");
		}

});
