import { decreaseCounterAction, toggleCounterAction, increaseCounterAction } from './actions';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducer: {
    [increaseCounterAction.type]: (state) => {
      state.counter++;
    },
    [decreaseCounterAction.type]: (state) => {
      state.counter--;
    },
    [toggleCounterAction.type]: (state) => {
      state.showCounter = !state.showCounter;
    }
  }
});

export default counterSlice;