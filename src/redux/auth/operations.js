import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectToken } from "../auth/selectors";

axios.defaults.baseURL = "https://wallet.b.goit.study/";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkApi) => {
    try {
      const response = await axios.post("/api/auth/sign-up", user);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (user, thunkApi) => {
  try {
    const response = await axios.post("/api/auth/sign-in", user);
    setAuthHeader(response.data.token);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    await axios.delete("/api/auth/sign-out");
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refreshUser",
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const token = selectToken(state);

    if (!token) {
      return thunkApi.rejectWithValue("No token found");
    }

    try {
      setAuthHeader(token);
      const response = await axios.get("/api/users/current");
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response?.data || error.message);
    }
  }
);
