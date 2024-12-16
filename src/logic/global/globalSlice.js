import { createSlice } from "@reduxjs/toolkit";
import { getCurrentFullUnixTime } from "../../utils/time";

const initialState = {
  errors: [],
  notifications: [],
  loading: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    addError: (state, action) => {
      const time = getCurrentFullUnixTime();
      const id = state.errors.at(-1)?.id + 1 || 1      
      state.errors.push({ id, message: action.payload, timestamp: time });
    },
    removeError: (state, action) => {
      state.errors = state.errors.filter(
        (error) => error.id !== action.payload
      );
    },
    addNotification: (state, action) => {
      const time = getCurrentFullUnixTime();
      const id = state.errors.at(-1)?.id + 1 || 1  
      state.notifications.push({ id, message: action.payload, timestamp: time });
    },
    removeNotification: (state, action) => {
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== action.payload
      );
    },
    startLoading: (state) => {
      state.loading = true;
    },
    stopLoading: (state) => {
      state.loading = false;
    },
  },
});

export const {
  addError,
  removeError,
  addNotification,
  removeNotification,
  startLoading, stopLoading,
} = globalSlice.actions;
export default globalSlice.reducer;
