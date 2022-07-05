import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store/store-toolkit';
import classes from './Counter.module.css';

const Counter = () => {
  // Automaticalli subscribes and unsubscribe onmount
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);
  const dispatch = useDispatch();
  console.info(counterActions);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const handleIncrement = () => {
    dispatch(counterActions.increase());
  }

  const handleDecrement = () => {
    dispatch(counterActions.decrease());
  }

  const handleAument = () => {
    dispatch(counterActions.increment(5));
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleAument}>Aument by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
