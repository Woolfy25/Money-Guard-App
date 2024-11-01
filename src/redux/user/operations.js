import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectToken } from "../auth/selectors";

axios.defaults.baseURL = "https://wallet.b.goit.study/";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchCurrentUser = createAsyncThunk(
  "user/current",
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = selectToken(state);

      if (!token) {
        return thunkApi.rejectWithValue("No token found");
      }

      setAuthHeader(token);

      const response = await axios.get("/api/users/current");
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
