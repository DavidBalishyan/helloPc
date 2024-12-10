import { createAsyncThunk } from "@reduxjs/toolkit";
import { userAPI } from "../../app/config"

export const getUsers = createAsyncThunk("get/users", async () => {
  try {
    const response = await userAPI.get();
    return response.data;
  } catch (error) {
    return error;
  }
});

export const postUser = createAsyncThunk("post/postUser", async (obj) => {
  try {
    const resp = await userAPI.post('', obj)
    return resp.data;
  } catch (error) {
    return error;
  }
});
