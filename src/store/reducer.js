import { decreaseCounterAction, increaseCounterAction, toggleCounterAction } from './actions';

const initialState = {
  counter: 0,
  showCounter: true,
};

export function counterReducer(state = initialState, action) {
  switch(action.type) {
    case increaseCounterAction.type: 
      return {
        ...state, 
        counter: state.counter + 1
      };
    case decreaseCounterAction.type: 
      return {
        ...state, 
        counter: state.counter -1
      };
    case toggleCounterAction.type:
      return {
        ...state,
        showCounter: !state.showCounter
      };
    default: 
      return state;
  }
}