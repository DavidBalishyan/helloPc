import { createAsyncThunk } from "@reduxjs/toolkit";
import { userAPI } from "../../app/config";
import { addError } from "../global/globalSlice";

export const getUsers = createAsyncThunk("get/users", async () => {
  try {
    const response = await userAPI.get();
    return response.data;
  } catch (error) {
    return error;
  }
});

export const postUser = createAsyncThunk(
  "post/postUser",
  async (obj, { dispatch }) => {
    try {
      const resp = await userAPI.post("", obj);
      return resp.data;
    } catch (error) {
      dispatch(addError(error.message));
    }
  }
);

export const check_user_email = createAsyncThunk(
  "get/check_user_email",
  async (email, { dispatch }) => {
    try {
      const response = await userAPI.get(`?email=${email}`);
      return response.data.length;
    } catch (error) {
      dispatch(addError(error.message));
    }
  }
);
