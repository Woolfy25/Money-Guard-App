import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, refreshUser } from "./operations";

const handlePending = (state) => {
  state.error = null;
  state.isLoading = true;
  state.user = { name: null, email: null, balance: null };
  state.token = null;
  state.isLoggedIn = false;
  state.isRefreshing = true;
};

const handleReject = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
  state.isRefreshing = false;
  state.user = { name: null, email: null, balance: null };
  state.token = null;
  state.isLoggedIn = false;
  state.isRefreshing = false;
  state.token = null;
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: { name: null, email: null, balance: null },
    token: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
    isRefreshing: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(register.pending, handlePending)
      .addCase(register.rejected, handleReject)
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(login.pending, handlePending)
      .addCase(login.rejected, handleReject)
      .addCase(logout.fulfilled, (state) => {
        state.user = { name: null, email: null, balance: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logout.pending, handlePending)
      .addCase(logout.rejected, handleReject)
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(refreshUser.pending, handlePending)
      .addCase(refreshUser.rejected, handleReject);
  },
});

export const authReducer = authSlice.reducer;
