import { decreaseCounterAction, increaseCounterAction } from './actions';

const initialState = {
  counter: 0
}

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
    default: 
      return state;
  }
}