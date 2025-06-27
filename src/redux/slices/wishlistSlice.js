import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = "https://ecommerce.routemisr.com/api/v1/wishlist";

const Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3OWNkM2YxMGNiNjNkYjM5YTBiMzI1ZCIsImlhdCI6MTc1MDQ3MDk2MCwiZXhwIjoxNzU4MjQ2OTYwfQ.6NC_liGLA7SUqWMrOJOAUFFSugBKtg5oGL5NwoW2ZzM";

export const addToWishlist = createAsyncThunk(
  'wishlist/addToWishlist',
  async (productId, thunkAPI) => {
    try {
      const response = await axios.post(
        baseUrl,
        { productId },
        {
          headers: {
            token: Token,
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addToWishlist.pending, state => {
        state.loading = true;
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.data;
      })
      .addCase(addToWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default wishlistSlice.reducer;
