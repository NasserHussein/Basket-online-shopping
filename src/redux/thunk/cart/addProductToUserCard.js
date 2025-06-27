import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addProductToUserCart = createAsyncThunk("cart/addProductToUserCart", async ({ productId }) => {
	const { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/cart", JSON.stringify({ productId }), {
		headers: {
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YWE2YWM3ZmE3ODk1ZTgxZjY3YjRlNCIsIm5hbWUiOiJBaG1lZCBBYmQgQWwtTXV0aSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzM5NzIyOTU2LCJleHAiOjE3NDc0OTg5NTZ9.8gCtCXvX73cV79YPex9Bup3dlfzpLextZYxfk4RFKIo",
		},
	});
	return data;
});
