 
import { createSlice } from "@reduxjs/toolkit";
import { generateId, getCurrentFullUnixTime } from "../../utils/time";

const initialState = {
  errors: [],
  success: [],
  info: [],
  loading: false,
  isAuth: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    addError: (state, action) => {
      const time = getCurrentFullUnixTime();
      const id = generateId();
      state.errors.push({ id, message: action.payload, timestamp: time });
    },
    removeError: (state, action) => {
      state.errors = state.errors.filter(
        (error) => error.id !== action.payload
      );
    },
    addSuccess: (state, action) => {
      const time = getCurrentFullUnixTime();
      const id = generateId();
      state.success.push({ id, message: action.payload, timestamp: time });
    },
    removeSuccess: (state, action) => {
      state.success = state.success.filter(
        (success) => success.id !== action.payload
      );
    },
    addInfo: (state, action) => {
      const time = getCurrentFullUnixTime();
      const id = generateId();
      state.info.push({ id, message: action.payload, timestamp: time });
    },
    removeInfo: (state, action) => {
      state.info = state.info.filter((info) => info.id !== action.payload);
    },
    startLoading: (state) => {
      state.loading = true;
    },
    stopLoading: (state) => {
      state.loading = false;
    },
    setAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  },
});

export const {
  addError,
  removeError,
  addInfo,
  addSuccess,
  removeInfo,
  removeSuccess,
  startLoading,
  stopLoading,
  setAuth,
} = globalSlice.actions;
export default globalSlice.reducer;
