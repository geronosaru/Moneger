import { createSlice } from "@reduxjs/toolkit";
import type { User } from "./types";
import { loginUser, logoutUser } from "./api/authApi";


type AuthState = {
  user: User | null;
  status: 'idol' | 'pending' | 'successful' | 'failed';
  error: string | undefined;
}

const initialState: AuthState = {
  user: null,
  status: 'idol',
  error: undefined
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(loginUser.pending, (state) => {
      state.status = 'pending'
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.status = 'successful'
    })
    .addCase(loginUser.rejected, (state, action) => {
      state.error = action.error.message
      state.status = 'failed'
    })
    .addCase(logoutUser.pending, (state) => {
      state.status = "pending"
    })
    .addCase(logoutUser.fulfilled, (state) => {
      state.user = null;
      state.status = "successful"
    })
    .addCase(logoutUser.rejected, (state) => {
      state.status = 'failed'
    })
  }
})

const authReducer = authSlice.reducer;


export { authReducer }