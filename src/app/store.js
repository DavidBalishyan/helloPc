import { configureStore } from '@reduxjs/toolkit';

// Example slice (you can replace this with your actual slice)
import authReducer from "../logic/auth/authSlice"

const store = configureStore({
  reducer: {
    account: authReducer,
  },
});

export default store;