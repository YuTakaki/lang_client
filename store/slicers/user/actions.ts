import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { loginFormStateType } from "../../../pages/login";
import { registerFormStateType } from "../../../pages/register";
import { userType } from "../../../types/types";
import { get, post, put } from "../../../utils/requests";

export const registerAction = createAsyncThunk(
  "user/registerAction",
  async (data: registerFormStateType, { rejectWithValue }) => {
    try {
      const response = await post("/api/auth/register", data);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
        return rejectWithValue(error.response?.data);
      }
    }
  }
);

export const loginAction = createAsyncThunk(
  "user/loginAction",
  async (data: loginFormStateType, { rejectWithValue }) => {
    try {
      const response = await post("/api/auth/login", data);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
        return rejectWithValue({
          ...(error.response?.data as object),
          status: error.response?.status,
        });
      }
    }
  }
);

export const verifyTokenAction = createAsyncThunk(
  "user/verifyTokenAction",
  async () => {
    try {
      const response = await get("/api/auth/verify");
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
      }
    }
  }
);

export const updateUserAction = createAsyncThunk(
  "user/updateUserAction",
  async (data: userType, { rejectWithValue }) => {
    try {
      const response = await put("/api/user/", data);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
        return rejectWithValue(error.response?.data);
      }
    }
  }
);

export const verifyEmailAction = createAsyncThunk(
  "user/verifyEmailAction",
  async (token: string, { rejectWithValue }) => {
    try {
      const response = await post(`/api/auth/verify-email/${token}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
        return rejectWithValue(error.response?.data);
      }
    }
  }
);
