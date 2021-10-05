import { CounterState } from "../types";
import { CounterActions, CounterActionTypes } from "../actions/counterActions";

const initialState: CounterState = {
  value: 0,
};

const counterReducer = (state = initialState, action: CounterActions) => {
  switch (action.type) {
    case CounterActionTypes.Increment: {
      return {
        ...state,
        value: state.value + 1,
      };
    }

    case CounterActionTypes.Decrement: {
      return {
        ...state,
        value: state.value - 1,
      };
    }

    default:
      return state;
  }
};

export default counterReducer;
