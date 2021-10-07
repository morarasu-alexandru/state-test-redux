import React, { useCallback } from "react";
import { useAppSelector } from "../../hooks/appSelector";
import { selectCounterValue } from "../../store/reducers/counterReducer";
import { useAppDispatch } from "../../hooks/actionDispatcher";
import { decrement, increment } from "../../store/actions/counterActions";

const Counter = () => {
  const value = useAppSelector(selectCounterValue);
  const dispatch = useAppDispatch();

  const incrementAction = useCallback(() => dispatch(increment()), [dispatch]);
  const decrementAction = useCallback(() => dispatch(decrement()), [dispatch]);

  return (
    <div>
      <div>count: {value}</div>
      <div>
        <button onClick={incrementAction}>Increment</button>
        <button onClick={decrementAction}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
