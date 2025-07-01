import { createSlice } from "@reduxjs/toolkit";


const initialState = { token: localStorage.getItem("userToken") || null, userVerifyCode: false, userResetPassword: false };
let authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers:{
        setToken: (state,action) => {
            state.token = action.payload;
            if(action.payload == null){
                localStorage.removeItem("userToken");
            }else{
                localStorage.setItem("userToken", action.payload);
            }
        },
        setUserVerifyCode: (state, action) => {
            state.userVerifyCode = action.payload;
        },
        setUserResetPassword: (state, action) => {
            state.userResetPassword = action.payload;
        }
    }
})

export const authReducer = authSlice.reducer;
export const { setToken, setUserVerifyCode, setUserResetPassword } = authSlice.actions;