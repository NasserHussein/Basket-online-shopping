import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const removeProductFromUserCard = createAsyncThunk("cart/removeProductFromUserCard", async ({ productId }) => {
	const { data } = await axios.delete("https://ecommerce.routemisr.com/api/v1/cart/" + productId, {
		headers: {
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjhhYTQ1NDIxZGM1NTM5ZTk4NzNjYSIsIm5hbWUiOiJBaG1lZCBBYmQgQWwtTXV0aSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjgwMzg2NjQ5LCJleHAiOjE2ODgxNjI2NDl9.Lf8hwcr1cd-EDZKRhitaV_6z15xT_8ImEH-phhXKt4I",
		},
	});
	return data;
});
