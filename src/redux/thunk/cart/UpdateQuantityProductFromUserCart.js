import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const UpdateQuantityProductFromUserCart = createAsyncThunk("cart/UpdateQuantityProductFromUserCart", async ({ productId }) => {
	const { data } = await axios.post(
		"https://ecommerce.routemisr.com/api/v1/cart" + productId,
		JSON.stringify({
			count: 1,
		}),
		{
			headers: {
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YmQ1MDU2ZWQwZGMwMDE2YzY0ZGNmYiIsIm5hbWUiOiJBaG1lZCBBYmQgQWwtTXV0aSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzI0NDUzMzU4LCJleHAiOjE3MzIyMjkzNTh9.0voIAiLK3-H16QNb-YtNwI8pypBsVfcZRw6kaxjOSV0",
			},
		}
	);
	return data;
});
