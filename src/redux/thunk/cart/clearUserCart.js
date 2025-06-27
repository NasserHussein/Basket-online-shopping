import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const clearUserCart = createAsyncThunk("cart/clearUserCart", async () => {
	const { data } = await axios.delete("https://ecommerce.routemisr.com/api/v1/cart", {
		headers: {
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDdjZjZmNTE1YmRjZjM0N2MwOWYxNyIsImlhdCI6MTY3OTgwMTk0NCwiZXhwIjoxNjg3NTc3OTQ0fQ.h-1qeIQB1GqA4OheJ1cM4sT09MqeDphivHQTyAaurbM",
		},
	});
	return data;
});
