import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getLoggedUserCart = createAsyncThunk("cart/getLoggedUserCart", async () => {
	const { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/cart", {
		headers: {
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NGFmYmY3ODAzZTg4OGUwNTYzZDc3OCIsIm5hbWUiOiJBaG1lZCBBYmQgQWwtTXV0aSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzMyOTY3NDE2LCJleHAiOjE3NDA3NDM0MTZ9.DF2iqgIpmEyWasg06v59Qi8TkHP6PLGNJXTROpo4CZ0",
		},
	});
	return data;
});
