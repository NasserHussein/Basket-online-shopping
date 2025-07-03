import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

const baseUrl = "https://ecommerce.routemisr.com/api/v1/wishlist";

/////////////////////////addToWishlist////////////////////////////////
export const addToWishlist = createAsyncThunk(
  'wishlist/addToWishlist',
  async (productId, thunkAPI) => {
    try {
      const response = await axios.post(
        baseUrl,
        { productId },
        {
          headers: {
            token: localStorage.getItem("userToken") || null,
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
/////////////////////////removeItemFromWishlist////////////////////////////////
export const removeItemFromWishlist = createAsyncThunk(
  'wishlist/removeItemFromWishlist',
  async (productId, thunkAPI) => {
    try {
      const response = await axios.delete(
        baseUrl + `/${productId}`,
        {
          headers: {
            token: localStorage.getItem("userToken") || null,
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
/////////////////////////getWishlist////////////////////////////////
export const getWishlist = createAsyncThunk(
  'wishlist/getWishlist',
  async (productId, thunkAPI) => {
    try {
      const response = await axios.get(
        baseUrl,
        {
          headers: {
            token: localStorage.getItem("userToken") || null,
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
    WishListArrID: [],
    loading: false,
    loadingGetWishlist: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
      /////////////////////////addToWishlist/////////////////////////////////////
    builder
      .addCase(addToWishlist.pending, state => {
        state.loading = true;
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.loading = false;
        state.WishListArrID = action.payload.data;
        toast.success(action.payload.message);
      })
      .addCase(addToWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      /////////////////////////getWishlist/////////////////////////////////////
      .addCase(getWishlist.pending, state => {
        state.loadingGetWishlist = true;
      })
      .addCase(getWishlist.fulfilled, (state, action) => {
        state.loadingGetWishlist = false;
        state.items = action.payload.data;
        state.WishListArrID = action.payload.data.map(item => item._id);
      })
      .addCase(getWishlist.rejected, (state, action) => {
        state.loadingGetWishlist = false;
        state.error = action.payload;
      })
      ///////////////////////////removeItemFromWishlist///////////////////////////////////
      .addCase(removeItemFromWishlist.pending, state => {
        state.loading = true;
      })
      .addCase(removeItemFromWishlist.fulfilled, (state, action) => {
        state.loading = false;
        state.WishListArrID = action.payload.data;
        toast.success(action.payload.message);
      })
      .addCase(removeItemFromWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default wishlistSlice.reducer;
export const { loading, items, loadingGetWishlist, WishListArrID } = wishlistSlice.actions;
