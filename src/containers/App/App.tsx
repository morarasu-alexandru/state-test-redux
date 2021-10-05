import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../store/reducers";
import { decrement, increment } from "../../store/actions/counterActions";

function App() {
  const { value } = useSelector((state: State) => state.counter);
  const dispatch = useDispatch();

  const incrementAction = () => dispatch(increment());
  const decrementAction = () => dispatch(decrement());

  return (
    <div>
      <div>count: {value}</div>
      <div>
        <button onClick={incrementAction}>Increment</button>
        <button onClick={decrementAction}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
