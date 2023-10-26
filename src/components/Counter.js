import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/index'
const Counter = () => {
  const counter = useSelector(state => state.counter.counter)
  const showCounter = useSelector(state => state.counter.showCounter)
  const dispatch = useDispatch()

  // const incrementHandler = () => {
  //   dispatch({ type: 'increment' });
  // };

  // const increaseHandler = () => {
  //   dispatch({ type: 'increase', amount: 10 });
  // };

  // const decrementHandler = () => {
  //   dispatch({ type: 'decrement' });
  // };

  // const toggleCounterHandler = () => {
  //   dispatch({ type: 'toggle' });
  // };
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10)); // { type: SOME_UNIQUE_IDENTIFIER, payload: 10 }
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        {/* <button onClick={()=>dispatch({type:'increment'}) }>Increment</button>
        <button onClick={()=>dispatch({type:'increment5',amount:5}) }>Increment by 5</button>
        <button onClick={()=>dispatch({type:'decrement'}) }>Decrement</button> */}
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};


export default Counter;
