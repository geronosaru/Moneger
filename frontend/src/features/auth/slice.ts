import type { User } from "./types";
import { createSlice } from "@reduxjs/toolkit";
import { loginUser, logoutUser } from "./api/authApi";


type AuthState = {
  user: User | null;
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | undefined;
};

const initialState: AuthState = {
  user: null,
  status: 'idle',
  error: undefined
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // ログイン
    builder
    .addCase(loginUser.pending, (state) => {
      state.status = 'pending';
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.status = 'succeeded';
    })
    .addCase(loginUser.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = 'failed';
    })
    // ログアウト
    .addCase(logoutUser.pending, (state) => {
      state.status = "pending";
    })
    .addCase(logoutUser.fulfilled, (state) => {
      state.user = null;
      state.status = "succeeded";
    })
    .addCase(logoutUser.rejected, (state) => {
      state.status = 'failed';
    })
  }
});

const authReducer = authSlice.reducer;


export { authReducer };