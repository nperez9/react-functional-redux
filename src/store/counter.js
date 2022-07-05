import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // this will return an inmutate function
    increase(state) {
      state.counter++;
    },
    decrease(state) {
      state.counter--;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
    increment(state, action) {
      state.counter += action.payload;
    },
  },
});

export default counterSlice;