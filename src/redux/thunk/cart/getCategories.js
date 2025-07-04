import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk(
	"categories/getCategories",
	async (_, { rejectWithValue }) => {
		try {
			const {
				data: { data },
			} = await axios.get("https://ecommerce.routemisr.com/api/v1/categories");

			return data;
		} catch (error) {
			if (axios.isAxiosError(error)) {
				let errorMessage;

				if (error.response) {
					errorMessage =
						"We are very sorry that the site is not running due to maintenance and product development reasons.";
				} else if (error.request) {
					errorMessage =
						"Warning: There is a problem with your internet connection. Please check and try again.";
				} else {
					errorMessage =
						"There is a problem preventing you from see your products. Maybe you are not logged in yet?";
				}

				return rejectWithValue(errorMessage);
			}
			return rejectWithValue("An unknown error occurred.");
		}
	}
);
