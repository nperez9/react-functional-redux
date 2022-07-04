import { useDispatch, useSelector } from 'react-redux';
import { decreaseCounterAction, increaseCounterAction, toggleCounterAction } from '../store';
import classes from './Counter.module.css';

const Counter = () => {
  // Automaticalli subscribes and unsubscribe onmount
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(toggleCounterAction);
  };

  const handleIncrement = () => {
    dispatch(increaseCounterAction);
  }

  const handleDecrement = () => {
    dispatch(decreaseCounterAction);
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
