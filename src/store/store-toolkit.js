import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import authSlice from "./auth";

// all the actions stores

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer},
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
