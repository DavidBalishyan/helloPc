import { createSlice } from "@reduxjs/toolkit";
import { getUsers, postUser } from "./authSignUpAPI";
import {login_user} from "./authSignInAPI"


const initialState = {
  user: {},
  users: [],
  token: null,
};

const authSlice = createSlice({
  name: "registration",
  initialState,
  extraReducers: (build) => {
    build
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
    build
      .addCase(postUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
	  build
      .addCase(login_user.fulfilled, (state, action) => {
        state.user = action.payload || {};
      })
  },
});

export const { setSuccess } = authSlice.actions;

export default authSlice.reducer;
