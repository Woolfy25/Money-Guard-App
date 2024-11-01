import { createSlice } from "@reduxjs/toolkit";
import { fetchCurrentUser } from "./operations";

const handlePending = (state) => {
  state.error = null;
  state.isLoading = true;
  state.user = { username: null, email: null, balance: null };
};

const handleReject = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
  state.user = { username: null, email: null, balance: null };
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: { username: null, email: null, balance: null },
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchCurrentUser.pending, handlePending)
      .addCase(fetchCurrentUser.rejected, handleReject);
  },
});

export const userReducer = userSlice.reducer;
